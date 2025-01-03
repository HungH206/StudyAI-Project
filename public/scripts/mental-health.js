document.addEventListener("DOMContentLoaded", () => {
    const moodOptions = ['very sad', 'sad', 'neutral', 'happy', 'very happy'];
    const wellnessTips = [
      "Take a few deep breaths to center yourself.",
      "Try to get at least 7-8 hours of sleep tonight.",
      "Take a short walk to clear your mind.",
      "Reach out to a friend or family member for support.",
      "Practice gratitude by listing three things you're thankful for."
    ];
  
    // References to DOM elements
    const moodOptionsContainer = document.getElementById("mood-options");
    const stressSlider = document.getElementById("stress-slider");
    const stressValueDisplay = document.getElementById("stress-value");
    const wellnessTipDisplay = document.getElementById("wellness-tip");
    const saveEntryButton = document.getElementById("save-entry");
  
    // Initialize default state
    let selectedMood = 'neutral';
    let stressLevel = 5;
  
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
  
    // Add event listener to save entry
    saveEntryButton.addEventListener("click", () => {
      console.log("Saving Entry...");
      console.log(`Mood: ${selectedMood}, Stress Level: ${stressLevel}`);
      generateWellnessTip();
      alert("Your entry has been saved!");
    });
  
    // Display an initial wellness tip
    generateWellnessTip();
  });
  