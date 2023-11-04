document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    const numEpisodesInput = document.getElementById('numEpisodes');
    const desiredTimeInput = document.getElementById('desiredTime');

    calculateButton.addEventListener('click', calculatePlaybackSpeed);
    desiredTimeInput.addEventListener('input', autoFormatTimeInput);

    function autoFormatTimeInput() {
        let inputValue = desiredTimeInput.value.replace(/\D/g, ''); // Remove non-numeric characters

        if (inputValue.length > 2) {
            // Insert colon after the first two characters
            inputValue = inputValue.slice(0, 2) + ':' + inputValue.slice(2);
        }

        desiredTimeInput.value = inputValue;
    }

    function calculatePlaybackSpeed() {
        const numEpisodes = parseInt(numEpisodesInput.value, 10);
        const desiredTime = desiredTimeInput.value;

        const [hours, minutes] = desiredTime.split(":").map(Number);
        const totalDesiredTime = hours * 60 + minutes;

        const averageTimePerEpisode = totalDesiredTime / numEpisodes;
        const playbackSpeedPercentage = (24 / averageTimePerEpisode) * 100;

        const resultElement = document.getElementById('result');
        resultElement.textContent = `Set the playback speed to ${playbackSpeedPercentage.toFixed(2)}% to finish in the desired time.`;
    }
});
