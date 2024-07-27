export default function Header(){
    return (
        <section className="w-full h-[80px] bg-transparent flex items-center absolute mt-[20px]">
            <div className="w-[33%] text-center text-[30px]">
                <h1>BARBEARIA MODERNA</h1>
            </div>
            <nav className="w-[33%] p-2 border-2 rounded-md">
                <ul className="flex justify-around">
                    <li className="menu-style">Home</li>
                    <li className="menu-style">Serviços</li>
                    <li className="menu-style">Sobre</li>
                    <li className="menu-style">Barbeiros disponíveis</li>
                </ul>
            </nav>

            <div className="w-[33%] flex justify-center">
                <h1 className="md:w-[200px] border-2 text-center rounded-md p-2 text-[#49403bff] bg-[#ece1cdff] cursor-pointer border-transparent hover:bg-[#f7f2e7]">Marque um horário</h1>
            </div>
        </section>
    )
}