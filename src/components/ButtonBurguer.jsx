import { MdClose } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

export const ButtonBurguer = ({ isMenuOpen, handleMenu }) => {


  return (
    <div onClick={handleMenu} className="text-white text-4xl ">
      {isMenuOpen ? <MdClose /> : <TiThMenu />}
    </div>
  );
};
