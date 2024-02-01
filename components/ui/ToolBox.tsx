"use client"
import {useState} from 'react';
import { colors } from '@/constants/colorsConstant';

export default function ToolBox() {
  const [brushSize, setbrushSize] = useState<number>(0);
  const [brushColor, setbrushColor] = useState<string>(colors.Black);
  return (
    <div
    className=' mx-6 px-4 w-1/3 mt-[11%] max-md:w-10/12 ring-1 ring-text1 p-4 rounded-md  '
    >
      <div
      className=''
      >
        <h4
        className=' text-center font-serif'
        >
          Stroke Color
        </h4>
      </div>
      <div
      className=' py-2 justify-evenly grid grid-cols-7 max-md:grid-cols-3 max-md:gap-x-10  gap-10'
      >
        <div className='w-10 h-10 cursor-pointer'  style={{backgroundColor:colors.Black}} 
        onClick={(e)=>{
          setbrushColor(colors.Black);
        }}  
        />
        <div className='w-10 h-10 cursor-pointer'  style={{backgroundColor:colors.Red}} 
        onClick={(e)=>{
          setbrushColor(colors.Red);
        }}
        />
        <div className='w-10 h-10 cursor-pointer' style={{backgroundColor:colors.Green}}
         onClick={(e)=>{
          setbrushColor(colors.Green);
        }} 
        />
        <div className='w-10 h-10 cursor-pointer'  style={{backgroundColor:colors.Yellow}} 
         onClick={(e)=>{
          setbrushColor(colors.Yellow);
        }} />
        <div className='w-10 h-10 cursor-pointer'  style={{backgroundColor:colors.Blue}} 
         onClick={(e)=>{
          setbrushColor(colors.Blue);
        }} />
        <div className='w-10 h-10 cursor-pointer'  style={{backgroundColor:colors.Orange}} 
         onClick={(e)=>{
          setbrushColor(colors.Orange);
        }} />
        <div className='w-10 h-10 cursor-pointer'  style={{backgroundColor:colors.White}} 
         onClick={(e)=>{
          setbrushColor(colors.White);
        }} />
      </div>
      <div>
        <h4
          className=' text-center font-serif'
        >Brush Size</h4>
        <div>
          <input type="range" min={1} max={10} step={1} 
          onChange={(e)=>{
            setbrushSize(Number(e.target.value));
          }} />
        </div>
      </div>
    </div>
  )
}
