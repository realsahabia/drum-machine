import React, {useEffect, useState} from 'react';
import './App.css';

const keysMap = {
  Q: 'Heater 1',
  W: 'Heater 2',
  E: 'Heater 3',
  A: 'Heater 4',
  S: 'Clap',
  D: 'Open HH',
  Z: 'Kick n\' Hat',
  X: 'Kick',
  C: 'Closed HH',
};


function DrumMachine() {
 const [displayText, setDisplayText] = useState('');

  function getAudio(audioID, displayText){
    const audioElement = document.getElementById(audioID)
    
    if (audioElement)
    {
      audioElement.currentTime = 0;
      audioElement.play();
      setDisplayText(displayText);
    }
  }

  useEffect(() => {
    function handleKeyDown(event) {
      const key = event.key.toUpperCase();
      const validKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

      if (validKeys.includes(key)) {        
        getAudio(key, `${keysMap[key]}`);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div className="animation-container">
      <div id="display">
        {displayText}
      </div>
     </div>

      <div className="drums-container">

      <button 
      onClick={() => getAudio("Q", "Heater 1")}
      className="drum-pad" id="Heater_1">Q
      <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
      </button>

      <button 
      onClick={() => getAudio("W", "Heater 2")}
      className="drum-pad" id="Heater_2">W
      <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
      </button>

      <button
      onClick={() => getAudio("E", "Heater 3")}
      className="drum-pad" id="Heater_3">E
      <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
      </button>

      <button
      onClick={() => getAudio("A", "Heater 4")}
      className="drum-pad" id="Heater_4">A
      <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
      </button>

      <button
      onClick={() => getAudio("S", "Clap")}
      className="drum-pad" id="Clap">S
      <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
      </button>

      <button
      onClick={() => getAudio("D", "Open-HH")}
      className="drum-pad" id="Open-HH">D
      <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
      </button>

      <button
      onClick={() => getAudio("Z", "Kick-n-Hat")}
      className="drum-pad" id="Kick-n'-Hat">Z
      <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
      </button>

      <button
      onClick={() => getAudio("X", "Kick")}
      className="drum-pad" id="Kick">X
      <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
      </button>

      <button
      onClick={() => getAudio("C", "Closed-HH")}
      className="drum-pad" id="Closed-HH">C
      <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
      </button>
      </div>
    </div>
  );
}

export default DrumMachine;
