var speech=new SpeechSynthesisUtterance();//text to speech
function speak(){//calling onclick value
    speech.text=textToSpeech.value;//whwn given value text is converted into speech
    speech.rate=1;
    speech.volume=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
}