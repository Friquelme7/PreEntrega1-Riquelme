import { CartWidget } from "./CartWidget"
import { PageList } from "./PageList"
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="px-2 fixed w-screen transition duration-500 opacity-100 hover:opacity-100 flex items-center justify-between bg-[#FFFCF2] text-black font-mono shadow-xl">
            <PageList></PageList>
            <Link to={"/"}>            
            <div className="flex items-center cursor-pointer">
                <img className="w-52 h-14 my-3" src="../img/proyecto.png" alt="" />
            </div>
            </Link>
            <div className="flex items-center justify-evenly">
                <SearchBar />
                <CartWidget />
            </div>
        </div>
    );
}


