# Text-to-Speech Converter

This is a simple Text-to-Speech (TTS) web application built using HTML, CSS, and JavaScript. The application allows users to input text and convert it to speech using the Web Speech API. Users can choose different voices, adjust the speech rate, and control the volume.

## Features

- **Text-to-Speech Conversion**: Converts text input into speech using the Web Speech API.
- **Voice Selection**: Choose from a list of available voices on your device.
- **Speech Rate Control**: Adjust the speed at which the text is spoken.
- **Volume Control**: Modify the volume of the spoken text.
- **Responsive Design**: The application is responsive and works well on different screen sizes.


Usage
Enter the text you want to convert to speech in the text area.
Select your preferred voice from the dropdown menu.
Adjust the speech rate and volume using the sliders.
Click the Text to Speak button to hear the spoken text.
Code Explanation
HTML
The HTML file (index.html) includes a textarea for input, a dropdown for voice selection, and sliders for adjusting speech rate and volume.

CSS
The CSS file (style.css) styles the application, making it responsive and visually appealing with a background image, shadows, and text styling.

JavaScript
The JavaScript file (script.js) handles the following:

Voice population: Fetches and populates available voices in the dropdown.
Text-to-Speech: Converts the text into speech using the selected voice, rate, and volume settings.
Event Handling: Listens for changes in voice selection and updates the speech settings accordingly.
Technologies Used
HTML5
CSS3
JavaScript (Web Speech API)
Browser Compatibility
The Web Speech API is supported in most modern browsers. However, for the best experience, use the latest version of Chrome or Firefox.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/text-to-speech-converter.git

2.Navigate to the project directory: 
```bash
   cd text-to-speech-converter

3. Open index.html in your web browser to run the application.
