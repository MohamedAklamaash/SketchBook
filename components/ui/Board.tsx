"use client"

import React,{useEffect, useRef} from 'react'

type Props = {}

export default function Board({}: Props) {
  const canvasRef = useRef(null);
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