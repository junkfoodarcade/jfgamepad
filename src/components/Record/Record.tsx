import React from 'react'
import {v4} from 'uuid';
import './Record.css';

interface RecordProps {
  isRecording: boolean;
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>
  setSessionId: React.Dispatch<React.SetStateAction<string>>
}

export const Record = ({ isRecording, setSessionId, setIsRecording }: RecordProps) => {
  const handleClick = () => {
   setIsRecording((prev:boolean) => !prev);
   setSessionId(v4());
  }
  const text = isRecording ? 'Stop' : 'Record'
  const classes = `record${isRecording?' isRecording':''}`
  return (
    <div className={classes}>
      <button onClick={handleClick} aria-label={text}></button>
    </div>
  )
}
