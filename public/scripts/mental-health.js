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

  // Initialize default state
  let selectedMood = 'neutral';
  let stressLevel = 5;
  const moodData = [];
  const stressData = [];
  const labels = [];
  let moodChart;

  // Populate mood options
  moodOptions.forEach(option => {
      const wrapper = document.createElement("div");
      wrapper.style.marginBottom = "10px";

      const radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.id = option;
      radioButton.name = "mood";
      radioButton.value = option;
      if (option === selectedMood) radioButton.checked = true;
      radioButton.addEventListener("change", () => {
          selectedMood = option;
          console.log(`Mood selected: ${selectedMood}`);
      });

      const label = document.createElement("label");
      label.htmlFor = option;
      label.textContent = option.charAt(0).toUpperCase() + option.slice(1);

      wrapper.appendChild(radioButton);
      wrapper.appendChild(label);
      moodOptionsContainer.appendChild(wrapper);
  });

  // Handle stress slider change
  stressSlider.addEventListener("input", (event) => {
      stressLevel = event.target.value;
      stressValueDisplay.textContent = stressLevel;
      console.log(`Stress level: ${stressLevel}`);
  });

  // Generate a random wellness tip
  const generateWellnessTip = () => {
      const randomTip = wellnessTips[Math.floor(Math.random() * wellnessTips.length)];
      wellnessTipDisplay.textContent = randomTip;
      console.log(`Wellness Tip: ${randomTip}`);
  };

// Update Chart.js
  // Function to update the chart
  const updateChart = () => {
    moodChart.update();
  };

  // Initialize Chart.js
  const initializeChart = () => {
      moodChart = new Chart(chartCanvas, {
          type: "line",
          data: {
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [
                  {
                      label: "Mood (0: Very Sad, 5: Very Happy)",
                      data: moodData,
                      borderColor: "blue",
                      fill: false,
                      tension: 0.3
                  },
                  {
                      label: "Stress Level (0-10)",
                      data: stressData,
                      borderColor: "red",
                      fill: false,
                      tension: 0.3
                  }
              ]
          },
          options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                  y: {
                      beginAtZero: true,
                      suggestedMax: 10
                  }
              }
          }
      });
  };

// Call initializeChart after DOM content is loaded
initializeChart();

  // Add event listener to save entry
  saveEntryButton.addEventListener("click", () => {
    console.log("Saving Entry...");
    console.log(`Mood: ${selectedMood}, Stress Level: ${stressLevel}`);

    // Save data
    const currentDate = new Date().toLocaleDateString();
    labels.push(currentDate);
    moodData.push(moodOptions.indexOf(selectedMood));
    stressData.push(Number(stressLevel));

    // Update Chart
    updateChart();

    // Generate a new wellness tip
    generateWellnessTip();
    alert("Your entry has been saved!");
});

 // Display an initial wellness tip
 generateWellnessTip();

});
