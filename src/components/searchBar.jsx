export const SearchBar = () => {
    return (
        <div className="bg-transparent border border-gray-200 w-2/3 rounded-lg h-[12px] p-4 mr-9 shadow-xl flex items-center">
            <input type="text" placeholder="Buscar Item" className="bg-transparent border-none outline-none text-lg ml-1 placeholder:text-[gray-400] text-black w-full" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#00000] cursor-pointer">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
        </div>
    );
}


