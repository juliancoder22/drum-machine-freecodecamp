import React, { useState } from "react";
import DrumPad from "./components/DrumPad";
import Display from "./components/Display";
import Heater1 from "./assets/Heater-1.mp3";
import Heater2 from "./assets/Heater-2.mp3";
import Heater3 from "./assets/Heater-3.mp3";
import Heater4 from "./assets/Heater-4_1.mp3";
import KickNHat from "./assets/Kick_n_Hat.mp3";
import Kick from "./assets/RP4_KICK_1.mp3";
import ClosedHH from "./assets/Cev_H2.mp3";
import Clap from "./assets/Heater-6.mp3";
import OpenHH from "./assets/Dsc_Oh.mp3";

import "./App.scss";

const audioClips = [
  { key: "Q", id: "Heater-1", url: Heater1 },
  { key: "W", id: "Heater-2", url: Heater2 },
  { key: "E", id: "Heater-3", url: Heater3 },
  { key: "A", id: "Heater-4", url: Heater4 },
  { key: "S", id: "Clap", url: Clap },
  { key: "D", id: "Open-HH", url: OpenHH },
  { key: "Z", id: "Kick-n-Hat", url: KickNHat },
  { key: "X", id: "Kick", url: Kick },
  { key: "C", id: "Closed-HH", url: ClosedHH },
];

const App: React.FC = () => {
  const [displayText, setDisplayText] = useState("");

  const handlePlay = (id: string) => {
    setDisplayText(id);
  };

  return (
    <div id="drum-machine" className="drum-machine">
      <Display text={displayText} />
      <div className="pads">
        {audioClips.map((clip) => (
          <DrumPad
            key={clip.id}
            keyTrigger={clip.key}
            id={clip.id}
            clip={clip.url}
            onPlay={handlePlay}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
