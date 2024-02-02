import { CartWidget } from "./cartWidget"
import { Logo } from "./logo"
import { PageList } from "./pageList"
export const NavBar = () => {
    return (
        <div className="flex justify-evenly justify-items-center items-center bg-zinc-700 text-white ">
            <Logo></Logo>
            <PageList></PageList>
            <CartWidget></CartWidget>
        </div>
    );
}


