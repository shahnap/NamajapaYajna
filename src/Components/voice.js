import React from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';

function Voice({ onStartRecording }) {
  const { transcript, resetTranscript, startListening, stopListening } = useSpeechRecognition();

  const handleStartRecording = () => {
    resetTranscript(); 
    startListening();
    onStartRecording(); // Call the prop function to handle recording
  };

  const handleStopRecording = () => {
    stopListening();
    // Do something with the transcript, e.g., send it to your input field
  };

  return (
    <div>
      {transcript && (
        <div>
          <p>Transcript: {transcript}</p>
          <button onClick={handleStopRecording}>Stop Recording</button>
        </div>
      )}
      <button onClick={handleStartRecording}>Start Recording</button>
    </div>
  );
}

export default Voice;
