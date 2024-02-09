import { CartWidget } from "./cartWidget"
import { Logo } from "./logo"
import { PageList } from "./pageList"
import { SearchBar } from "./searchBar";

export const NavBar = () => {
    return (
        <div className="px-2 fixed w-screen transition duration-500 opacity-95 hover:opacity-100 flex items-center justify-between bg-[#fffefc] text-black font-mono shadow-xl">
            <PageList></PageList>
            <Logo></Logo>
            <div className="flex items-center">
            <SearchBar></SearchBar>
            <CartWidget ></CartWidget>
            </div>
        </div>
    );
}


