"use client"
import {useState} from 'react';
import { colors } from '@/constants/colorsConstant';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItems } from '@/constants/menuConstants';
import { setBrushSize,setChangeColor} from '@/store/toolBoxSlice';
import { socket } from '@/socket/socket';
export default function ToolBox() {
  const [brushSize, setbrushSize] = useState<number>(3);
  const [brushColor, setbrushColor] = useState<string>(colors.Black);
  const {activeMenuItem} = useSelector((state:any)=>state.menu);
  const showStrokes = activeMenuItem === MenuItems.PENCIL;
  const BrushStrokes = activeMenuItem === MenuItems.PENCIL || MenuItems.ERASER ;
  const dispatch = useDispatch();
  return (
    <div
    className=' shadow-md absolute mx-6 px-4 w-1/3 mt-[11%] max-md:w-10/12 ring-1 ring-text1 p-4 rounded-md  '
    >
      {
        showStrokes &&
        <>
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
            <div className={`w-10 h-10 cursor-pointer  ${brushColor === colors.Black ? "ring-2 ring-text1":""} `}  style={{backgroundColor:colors.Black}} 
            onClick={(e)=>{
              setbrushColor(colors.Black);
              dispatch(setChangeColor({item:activeMenuItem,color:colors.Black}));
              const color = colors.Black;
              const size = brushSize;
              socket.emit("config",{color,size});            }}  
            />
            <div className={`w-10 h-10 cursor-pointer ${brushColor === colors.Red ? "ring-2 ring-text1":""}`}  style={{backgroundColor:colors.Red}} 
            onClick={(e)=>{
              setbrushColor(colors.Red);
              dispatch(setChangeColor({item:activeMenuItem,color:colors.Red}));
              const color = colors.Red;
              const size = brushSize;
              socket.emit("config",{color,size});
            }}
            />
            <div className={`w-10 h-10 cursor-pointer ${brushColor === colors.Green ? "ring-2 ring-text1":""}`} style={{backgroundColor:colors.Green}}
            onClick={(e)=>{
              setbrushColor(colors.Green);
              dispatch(setChangeColor({item:activeMenuItem,color:colors.Green}));
              const color = colors.Green;
              const size = brushSize;
              socket.emit("config",{color,size});            
            }} 
            />
            <div className={`w-10 h-10 cursor-pointer ${brushColor === colors.Yellow ? "ring-2 ring-text1":""}`}  style={{backgroundColor:colors.Yellow}} 
            onClick={(e)=>{
              setbrushColor(colors.Yellow);
              dispatch(setChangeColor({item:activeMenuItem,color:colors.Yellow}));
              const color = colors.Yellow;
              const size = brushSize;
              socket.emit("config",{color,size});
            }} />
            <div className={`w-10 h-10 cursor-pointer ${brushColor === colors.Blue ? "ring-2 ring-text1":""}`}  style={{backgroundColor:colors.Blue}} 
            onClick={(e)=>{
              setbrushColor(colors.Blue);
              dispatch(setChangeColor({item:activeMenuItem,color:colors.Blue}));
              const color = colors.Blue;
              const size = brushSize;
              socket.emit("config",{color,size});
            }} />
            <div className={`w-10 h-10 cursor-pointer ${brushColor === colors.Orange ? "ring-2 ring-text1":""}`}  style={{backgroundColor:colors.Orange}} 
            onClick={(e)=>{
              setbrushColor(colors.Orange);
              dispatch(setChangeColor({item:activeMenuItem,color:colors.Orange}));
              const color = colors.Orange;
              const size = brushSize;
              socket.emit("config",{color,size});
            }} />
            <div className={`w-10 h-10 cursor-pointer ${brushColor === colors.White ? "ring-2 ring-text1":""}`}  style={{backgroundColor:colors.White}} 
            onClick={(e)=>{
              setbrushColor(colors.White);
              dispatch(setChangeColor({item:activeMenuItem,color:colors.White}));
              const color = colors.White;
              const size = brushSize;
              socket.emit("config",{color,size});
            }} />
          </div>
        </>
      }
      {
        BrushStrokes && 
        (
          <>
          <div>
            <h4
              className=' text-center font-serif'
            >Brush Size</h4>
            <div className=' flex justify-center md:mt-2 '>
              <input type="range" 
              min={1} max={11} step={1} 
              value={brushSize}
              onChange={(e)=>{
                setbrushSize(Number(e.target.value));
                const size = Number(e.target.value);
                dispatch(setBrushSize({item:activeMenuItem,brushSize:size}));
                socket.emit("config",{color:brushColor,size});
              }} />
            </div>
          </div>
          </>
        )
      }
    </div>
  )
}
