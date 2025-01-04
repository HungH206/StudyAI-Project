const moodData = JSON.parse(localStorage.getItem('moodEntries')) || [];
const stressData = JSON.parse(localStorage.getItem('stressEntries')) || [];

const labels = moodData.map(entry => entry.date);
const moodValues = moodData.map(entry => entry.value);
const stressValues = stressData.map(entry => entry.value);

const ctx = document.getElementById('moodChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Mood Level',
                data: moodValues,
                borderColor: 'blue',
                fill: false
            },
            {
                label: 'Stress Level',
                data: stressValues,
                borderColor: 'red',
                fill: false
            }
        ]
    }
});
