
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="px-2 fixed w-screen transition duration-500 opacity-100 hover:opacity-100 flex items-center justify-between bg-[#FFFCF2] text-black font-mono shadow-xl">
            <PageList></PageList>
            <Link to={"/"}>            
            <div className="flex items-center cursor-pointer">
                <img className="w-52 h-14 my-3" src="https://firebasestorage.googleapis.com/v0/b/apolo-store-f312d.appspot.com/o/proyecto.png?alt=media&token=27cb923d-21c3-485b-aa6f-b9329b62e83c" alt="" />
            </div>
            </Link>
            <div className="flex items-center justify-evenly">
                <SearchBar />
                <CartWidget />
            </div>
        </div>
    );
}


