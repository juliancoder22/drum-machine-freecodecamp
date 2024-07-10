import React, { useEffect } from "react";
import "../App.scss";

type DrumPadProps = {
  keyTrigger: string;
  id: string;
  clip: string;
  onPlay: (id: string) => void;
};

const DrumPad: React.FC<DrumPadProps> = ({ keyTrigger, id, clip, onPlay }) => {
  const playSound = () => {
    const audio = document.getElementById(keyTrigger) as HTMLAudioElement;
    if (audio) {
      console.log("Reproduciendo:", audio);
      audio.currentTime = 0;
      audio.play();
      onPlay(id);
    } else {
      console.log("Audio no encontrado para:", keyTrigger);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key.toUpperCase() === keyTrigger) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="drum-pad" id={id} onClick={playSound}>
      <audio className="clip" id={keyTrigger} src={clip}></audio>
      {keyTrigger}
    </div>
  );
};

export default DrumPad;
