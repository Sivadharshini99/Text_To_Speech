const speech = new SpeechSynthesisUtterance();//text to speech
const voicesDropdown = document.getElementById('voices');//voice selection
const rateInput = document.getElementById('rate');//controlling the speech rate
const volumeInput = document.getElementById('volume');//controlling the volume.

function populateVoices() {// access all available voices on the system (window.speechSynthesis)
    const voices = window.speechSynthesis.getVoices();
    voicesDropdown.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}

function setVoice() {//select voice from list
    const selectedVoice = voicesDropdown.selectedOptions[0].getAttribute('value');
    speech.voice = window.speechSynthesis.getVoices().find(voice => voice.name === selectedVoice);
}

function speak() {//calling onclick value
    speech.text = document.getElementById('textToSpeech').value;//when given value text is converted into speech
    speech.rate = rateInput.value;
    speech.volume = volumeInput.value;
    window.speechSynthesis.speak(speech);//to start speech
}

window.speechSynthesis.onvoiceschanged = populateVoices;
voicesDropdown.addEventListener('change', setVoice);
