"use client"
import React,{useEffect, useRef} from 'react'
import {useSelector,useDispatch } from "react-redux";
type Props = {}

export default function Board({}: Props) {
  const canvasRef = useRef(null);
  const {activeMenuItem,actionMenuItem} = useSelector((state:any)=>state.menu);
  const {color,size} = useSelector((state:any)=>state.toolbox[activeMenuItem]);
  useEffect(()=>{
    if(! canvasRef.current) return;
    const canvas:HTMLCanvasElement = canvasRef.current;
    const context:CanvasRenderingContext2D | null = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },[]);
  
  return (
    <canvas
    ref={canvasRef}
    className=' max-md:w-full w-full max-md:h-full '
    ></canvas>
  )
}