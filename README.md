# Music Code
An Song writing generator. This Application allows AI to write songs through coding syntaxes.
And saves the song data to a bin folder. ``/bin/``

### How do I use it?
Download the git repository, using ``GIT``.<br>
Run these commands in command prompt to download / Install dependencies.
```cmd
git clone https://github.com/cassitly/music-code.git
cd music-code
npm run build
```

**Be sure to create the file outside of the repository folder you downloaded.**<br>
Then create an javascript file. Name it whatever you like.<br>
Write down this code in the Javascript File:<br>

```javascript
const { defineApp, appReady } = require("./music-code/app.js");

appReady(); // App Ready runs the file generation
await defineApp(); // Define App allows the generation of the item
```

Then run the code using NodeJS.
This will generate an new song everytime it is ran.

### Dependencies
This application requires:<br>
    - ``nodejs@latest`` For javascript file executions<br>
    - ``npm@latest`` For nodejs dependencies<br>

**NPMJS Dependencies**:<br>
    - ``dotenv@latest`` For GROQ API key intergration<br>
    - ``fs@latest`` For File generations of the songs<br>
    - ``groq-sdk@latest`` For GROQ API Interactions<br>
    - ``path@latest`` For File path joining.<br>
