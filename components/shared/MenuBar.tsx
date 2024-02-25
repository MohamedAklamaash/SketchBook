"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil,faEraser,faUndo,faRedo,faDownload} from "@fortawesome/free-solid-svg-icons";
import {useDispatch,useSelector} from "react-redux";
import { MenuItems } from "@/constants/menuConstants";
import { setactionItemsClick, setmenuItemClick } from "@/store/menuSlice";
const MenuBar = () => {
  const dispatch = useDispatch();
  const {activeMenuItem} = useSelector((state:any)=>state.menu);

  const handleMenuClick = (itemName:string)=>{
    dispatch(setmenuItemClick(itemName));
  }
  const handleActionMenuClick = (itemName:string)=>{
    dispatch(setactionItemsClick(itemName)); 
  }
  return (
    <div
    className=' mt-3 py-4 md:w-4/6 max-md:w-11/12 mx-auto '
    >
      <nav
      className='shadow-md  text-black font-bold text-2xl px-3 py-4 rounded-lg flex items-center justify-around border-border1    '
      >
        <FontAwesomeIcon 
          icon={faPencil} 
          className={` ${activeMenuItem === MenuItems.PENCIL ? "bg-[#0002] rounded-md  p-3 ":"" } w-6 cursor-pointer hover:text-border1  active:text-text1`} 
          onClick={()=>{
            handleMenuClick(MenuItems.PENCIL);
          }}
        />
        <FontAwesomeIcon 
          icon={faEraser} 
          className={`${activeMenuItem === MenuItems.ERASER ? "bg-[#0002] rounded-md  p-3 ":"" } w-6 cursor-pointer hover:text-border1  active:text-text1`} 
          onClick={()=>{
            handleMenuClick(MenuItems.ERASER);
          }}
        />
        <FontAwesomeIcon icon={faUndo} 
          className={` w-6 cursor-pointer hover:text-border1  active:text-text1`}         
          onClick={()=>{
            handleActionMenuClick(MenuItems.UNDO)
          }}
        />
        <FontAwesomeIcon icon={faRedo} 
          className={`  w-6 cursor-pointer hover:text-border1  active:text-text1`}         
          onClick={()=>{
            handleActionMenuClick(MenuItems.REDO)
          }}
        />
        <FontAwesomeIcon icon={faDownload} 
          className={`w-6 cursor-pointer hover:text-border1  active:text-text1`}         
          onClick={()=>{
          handleActionMenuClick(MenuItems.DOWNLOAD)
          }}
        />
      </nav>
    </div>
  )
}

export default MenuBar