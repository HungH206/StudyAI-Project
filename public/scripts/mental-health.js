
document.addEventListener("DOMContentLoaded", () => {
    const moodOptions = ['very sad', 'sad', 'neutral', 'happy', 'very happy'];
    const wellnessTips = [
        "Take a few deep breaths to center yourself.",
        "Try to get at least 7-8 hours of sleep tonight.",
        "Take a short walk to clear your mind.",
        "Reach out to a friend or family member for support.",
        "Practice gratitude by listing three things you're thankful for.",
        "Unplug from social media for an hour.",
        "Take a 10-minute break to practice mindfulness."
    ];

    // References to DOM elements
    const moodOptionsContainer = document.getElementById("mood-options");
    const stressSlider = document.getElementById("stress-slider");
    const stressValueDisplay = document.getElementById("stress-value");
    const wellnessTipDisplay = document.getElementById("wellness-tip");
    const saveEntryButton = document.getElementById("save-entry");
    const chartCanvas = document.getElementById("moodChart").getContext("2d");

    let selectedMood = 'neutral';
    let stressLevel = 5;
    const moodData = [];
    const stressData = [];
    const labels = [];
    let moodChart;

    // Load existing entries from localStorage
    const storedEntries = JSON.parse(localStorage.getItem("mentalHealthEntries")) || { moodData: [], stressData: [], labels: [] };
    if (storedEntries) {
    Object.assign({ moodData, stressData, labels }, storedEntries);
}

    // Populate mood options dynamically
    moodOptions.forEach(option => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("mood-option");

        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.id = option;
        radioButton.name = "mood";
        radioButton.value = option;
        if (option === selectedMood) radioButton.checked = true;
        radioButton.addEventListener("change", () => selectedMood = option);

        const label = document.createElement("label");
        label.htmlFor = option;
        label.textContent = option.charAt(0).toUpperCase() + option.slice(1);

        wrapper.appendChild(radioButton);
        wrapper.appendChild(label);
        moodOptionsContainer.appendChild(wrapper);
    });

    // Stress Slider Logic
    stressSlider.addEventListener("input", (event) => {
        stressLevel = event.target.value;
        stressValueDisplay.textContent = stressLevel;
    });

    // Generate a Wellness Tip
    const generateWellnessTip = () => {
        const randomTip = wellnessTips[Math.floor(Math.random() * wellnessTips.length)];
        wellnessTipDisplay.textContent = randomTip;
    };

    // Initialize Chart
    const initializeChart = () => {
        moodChart = new Chart(chartCanvas, {
            type: "line",
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: "Mood (0: Very Sad, 5: Very Happy)",
                        data: moodData,
                        borderColor: "blue",
                        fill: false
                    },
                    {
                        label: "Stress Level (0-10)",
                        data: stressData,
                        borderColor: "red",
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    };

    initializeChart();

    // Save Entry Logic
    saveEntryButton.addEventListener("click", async () => {
        console.log("Saving Entry...");
        console.log(`Mood: ${selectedMood}, Stress Level: ${stressLevel}`);
        const currentDate = new Date().toLocaleDateString();
        labels.push(currentDate);
        moodData.push(moodOptions.indexOf(selectedMood));
        stressData.push(Number(stressLevel));

        moodChart.update();

        const entryData = {
            date: currentDate,
            mood: selectedMood,
            stressLevel: stressLevel
        };

       // Save to localStorage
       localStorage.setItem("mentalHealthEntries", JSON.stringify({ moodData, stressData, labels }));
       alert("Entry saved successfully!");
       generateWellnessTip();
       moodChart.update();

    });

    generateWellnessTip();    
});
