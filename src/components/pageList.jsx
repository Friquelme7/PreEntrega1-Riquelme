export const PageList = () => {
    return (
        <div className="font-Montserrat font-semibold text-sm">
            <a href="">
                <ul className="flex">
                    <div className="relative">
                        <li className="p-4 after:absolute after:content-[''] after:bg-black after:w-[100%] after:h-[2px] after:left-0 after:rounded-xl after:duration-300 after:-bottom-[2px] after:scale-x-0 after:origin-center after:hover:scale-x-90">Vinilos</li>
                    </div>
                    <div className="relative">
                        <li className="p-4 after:absolute after:content-[''] after:bg-black after:w-[100%] after:h-[2px] after:left-0 after:rounded-xl after:duration-300 after:-bottom-[2px] after:scale-x-0 after:origin-center after:hover:scale-x-90">Cards</li>
                    </div>
                    <div className="relative">
                        <li className="p-4 after:absolute after:content-[''] after:bg-black after:w-[100%] after:h-[2px] after:left-0 after:rounded-xl after:duration-300 after:-bottom-[2px] after:scale-x-0 after:origin-center after:hover:scale-x-90">Boards</li>
                    </div>
                </ul>
            </a>
        </div>
    );
}

