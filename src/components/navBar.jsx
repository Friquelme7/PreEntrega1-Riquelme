import { CartWidget } from "./cartWidget"
import { Logo } from "./logo"
import { PageList } from "./pageList"
export const NavBar = () => {
    return (
        <div className="fixed w-screen  opacity-95 hover:opacity-100 flex flex-row justify-between items-center px-4 bg-amber-50 text-black font-mono">
            <PageList></PageList>
            <Logo></Logo>
            <CartWidget ></CartWidget>
        </div>
    );
}


