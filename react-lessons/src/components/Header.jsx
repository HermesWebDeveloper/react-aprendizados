

function Header() {

    return(
        <>
            <div className="h-3 bg-blue-300"></div>
            <header className="px-16 py-8 flex justify-between">
                <div className="">
                    <img src="https://cdn.prod.website-files.com/659e50bba95e4dcd06af732b/659e53fa4b095f92b9f8d4e8_Logo-Black.svg"></img>
                </div>
                <nav>
                    <ul className="flex justify-between gap-12">
                        <li className="relative group">
                            <a href="#" className="text-black">Projetos</a>
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <a href="#" className="text-black">Aprendizados</a>
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <a href="#" className="text-black">Novidades</a>
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <a href="#" className="text-black">Em Breve</a>
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </ul>
                </nav>
                <div>
                    <button className="bg-black font-semibold text-gray-50 rounded-full py-3 px-8 hover:bg-blue-300 hover:text-black transition     duration-300">Contate-me</button>
                </div>
            </header>
        </>
    )
}

export default Header;