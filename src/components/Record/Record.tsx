import React from 'react'
import './Record.css';

interface RecordProps {
  isRecording: boolean
  setIsRecording: (val: boolean) => void
}

export const Record = ({ isRecording, setIsRecording }: RecordProps) => {
  const handleClick = () => setIsRecording(!isRecording)
  const text = isRecording ? 'Stop' : 'Record'
  const classes = `record${isRecording?' isRecording':''}`
  return (
    <div className={classes}>
      <button onClick={handleClick} aria-label={text}></button>
    </div>
  )
}
