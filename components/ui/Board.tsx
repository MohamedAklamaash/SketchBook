"use client"
import React,{useEffect, useLayoutEffect, useRef} from 'react'
import {useSelector,useDispatch } from "react-redux";
type Props = {}

export default function Board({}: Props) {
  const canvasRef = useRef(null);
  const shouldDraw = useRef(false);
  const {activeMenuItem,actionMenuItem} = useSelector((state:any)=>state.menu);
  const {color,size} = useSelector((state:any)=>state.toolbox[activeMenuItem]);

  useEffect(()=>{
    if(! canvasRef.current) return;
    const canvas:HTMLCanvasElement = canvasRef.current;
    const context:CanvasRenderingContext2D  = canvas.getContext("2d");
    const changeConfig = ()=>{
      context.strokeStyle = color;
      context.lineWidth = size;
    }
    changeConfig();
  },[color,size]);

  useLayoutEffect(()=>{
    if(! canvasRef.current) return;
    const canvas:HTMLCanvasElement = canvasRef.current;
    const context:CanvasRenderingContext2D | null = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const beginPath = (x:number,y:number)=>{
      context?.beginPath(); // creates a new path
      context?.moveTo(x,y); // move to means start point in the drawing
    }

    const movePath = (x:number,y:number)=>{
      context?.lineTo(x,y);
      context?.stroke();
    }

    const handleMouseUp = (e:any)=>{
      shouldDraw.current = false;
    };

    const handleMouseMove = (e:any)=>{
      if(! shouldDraw.current) return;
      movePath(e.clientX,e.clientY);
    };

    const handleMouseDown = (e:any)=>{
      shouldDraw.current = true;
      beginPath(e.clientX,e.clientY);
    };
    canvas.addEventListener("mousedown",handleMouseDown);
    canvas.addEventListener("mousemove",handleMouseMove);
    canvas.addEventListener("mouseup",handleMouseUp);
    return ()=>{
      canvas.removeEventListener("mousedown",handleMouseDown);
      canvas.removeEventListener("mousemove",handleMouseMove);
      canvas.removeEventListener("mouseup",handleMouseUp);
    }
  },[]);
  
  return (
    <canvas
    ref={canvasRef}
    className=' w-full '
    ></canvas>
  )
}