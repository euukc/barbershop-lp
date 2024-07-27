export default function Footer() {
    return (
        <section className="w-full md:h-[300px] bg-white flex items-center gap-[20px] border-t-2">
            <div className="w-[33%] h-full flex flex-col justify-center items-center text-black">
                <h1 className="text-black mb-[50px] text-[25px]">BARBEARIA MODERNA</h1>
                <p className="text-black">Rua das Barbearias, 1234</p>
                <p className="text-black">11 000000000</p>
                <p className="text-black">contato@contato.com.br</p>
                <div></div>
            </div>
            <div className="w-[33%] h-full flex flex-col justify-center items-center">
                <h1 className="text-black mb-[25px]">Menu</h1>
                <ul className="text-center">
                    <li className="text-black">Home</li>
                    <li className="text-black">Serviços</li>
                    <li className="text-black">Sobre</li>
                    <li className="text-black">Barbeiros disponíveis</li>
                </ul>
            </div>
            <div className="w-[33%] h-full flex flex-col justify-center items-center">
                <h1 className="text-black">Horário de atendimento</h1>
                <p className="text-black">Seg-Sex: 9:00 às 20h</p>
                <p className="text-black">Sábado: 9:00 às 13h</p>
                <div></div>
            </div>
        </section>
    )
}