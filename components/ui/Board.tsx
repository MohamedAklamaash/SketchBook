"use client"
import { MenuItems } from '@/constants/menuConstants';
import { setactionItemsClick } from '@/store/menuSlice';
import React,{useEffect, useLayoutEffect, useRef} from 'react'
import {useSelector,useDispatch } from "react-redux";
import { socket } from '@/socket/socket';
export default function Board() {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const shouldDraw = useRef(false);
  const {activeMenuItem,actionMenuItem} = useSelector((state:any)=>state.menu);
  const {color,size} = useSelector((state:any)=>state.toolbox[activeMenuItem]);
  const drawHistory = useRef<ImageData[]>([]);
  const historyPtr = useRef<number>(0);
  useEffect(()=>{
    if(! canvasRef.current) return;
    const canvas:HTMLCanvasElement = canvasRef.current;
    const context  = canvas.getContext("2d");
    if(actionMenuItem === MenuItems.DOWNLOAD){
      const URL = canvas.toDataURL();
      const anchorTag = document.createElement("a");
      anchorTag.href = URL;
      anchorTag.download = "sketch.png";
      anchorTag.click();
      dispatch(setactionItemsClick(null));
    }else if (actionMenuItem === MenuItems.UNDO) {
      if (historyPtr.current > 0) {
          historyPtr.current -= 1;
          const imageData = drawHistory.current[historyPtr.current];  
          if (imageData ) {
              if(context){
                context.putImageData(imageData, 0, 0);
              }
          } else {
              console.error("Invalid ImageData");
          }
      } else {
          console.warn("No more undo history available");
      }
      dispatch(setactionItemsClick(null));              
  }else if (actionMenuItem === MenuItems.REDO) {    
    if (historyPtr.current >= 0 && historyPtr.current < drawHistory.current.length - 1) {
      historyPtr.current += 1;
      const imageData = drawHistory.current[historyPtr.current];
      if (imageData) {
        if(context){
          context.putImageData(imageData, 0, 0);
        } 
      }
    } else {
      console.warn("No more redo history available");
    }
    dispatch(setactionItemsClick(null));
  }  
  },[actionMenuItem]);
  
  useEffect(()=>{
    if(! canvasRef.current) return;
    const canvas:HTMLCanvasElement = canvasRef.current;
    const context  = canvas.getContext("2d");
    const changeConfig = (color:string,size:number)=>{
      if(context){
        context.strokeStyle = color;
        context.lineWidth = size;
      }
    }
    changeConfig(color,size);
    const handleSizeChangeConfig = ({color,size}:{color:string,size:number})=>{
      changeConfig(color,size);
      console.log(color,size);
      
    }
    socket.on("config",handleSizeChangeConfig);
    return()=>{
      socket.off("config",handleSizeChangeConfig);
    }
  },[color,size]);
  useLayoutEffect(()=>{
    if(! canvasRef.current) return;
    const canvas:HTMLCanvasElement = canvasRef.current;
    const context  = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const beginPath = (x:number,y:number)=>{
      if(context){
        context.beginPath(); // creates a new path
        context.moveTo(x,y); // move to means start point in the drawing
      }
    }

    const movePath = (x:number,y:number)=>{
      if(context){
        context?.lineTo(x,y);
        context?.stroke();
      }
    }

    const handleMouseUp = (e:any)=>{
      shouldDraw.current = false;
      if(context){
        const imageData = context.getImageData(0,0,canvas.width,canvas.height);
        if(imageData){
          drawHistory.current.push(imageData);
        }
        historyPtr.current = drawHistory.current.length - 1;
      }
    };

    const handleMouseMove = (e:any)=>{
      if(! shouldDraw.current) return;
      movePath(e.clientX,e.clientY);
      socket.emit("movePath",{x:e.clientX,y:e.clientY});
    };

    const handleMouseDown = (e:any)=>{
      shouldDraw.current = true;
      beginPath(e.clientX,e.clientY);
      socket.emit("beginPath",{x:e.clientX,y:e.clientY});
    };
    canvas.addEventListener("mousedown",handleMouseDown);
    canvas.addEventListener("mousemove",handleMouseMove);
    canvas.addEventListener("mouseup",handleMouseUp);
    const handleBeginPathSocket = ({x,y}:{x:number,y:number})=>{
      beginPath(x,y);
    }
    const handleMovePathSocket = ({x,y}:{x:number,y:number})=>{
      movePath(x,y);
    }
    socket.on("beginPath",handleBeginPathSocket);
    socket.on("movePath",handleMovePathSocket);
    return ()=>{
      canvas.removeEventListener("mousedown",handleMouseDown);
      canvas.removeEventListener("mousemove",handleMouseMove);
      canvas.removeEventListener("mouseup",handleMouseUp);
      socket.off("beginPath",handleBeginPathSocket);
      socket.off("movePath",handleMovePathSocket);
    }
  },[]);
  
  return (
    <canvas
    ref={canvasRef}
    className=' w-full max-md:h-[150vh] '
    ></canvas>
  )
}