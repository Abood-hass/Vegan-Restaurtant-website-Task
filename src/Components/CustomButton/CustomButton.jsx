import React from 'react'
import './style.css'

export default function CustomButton({ label, onClick, style = {} }) {
  return (
    <button className='CustomBtn' style={style} onClick={() => onClick()}>{label}</button>
  )
}
