import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil,faEraser,faUndo,faRedo,faDownload} from "@fortawesome/free-solid-svg-icons";

const MenuBar = () => {
  return (
    <div
    className=' mt-3 py-4 md:w-4/6 max-md:w-11/12 mx-auto '
    >
      <nav
      className='shadow-md  text-black font-bold text-2xl px-3 py-4 rounded-lg flex items-center justify-around border-border1    '
      >
        <FontAwesomeIcon icon={faPencil} className="w-6 cursor-pointer hover:text-border1  active:text-text1" />
        <FontAwesomeIcon icon={faEraser} className="w-6 cursor-pointer hover:text-border1  active:text-text1" />
        <FontAwesomeIcon icon={faUndo} className="w-6 cursor-pointer hover:text-border1  active:text-text1" />
        <FontAwesomeIcon icon={faRedo} className="w-6 cursor-pointer hover:text-border1  active:text-text1" />
        <FontAwesomeIcon icon={faDownload} className="w-6 cursor-pointer hover:text-border1  active:text-text1" />
      </nav>
    </div>
  )
}

export default MenuBar