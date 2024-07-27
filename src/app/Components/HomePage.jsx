export default function HomePage() {
    return (
        <section className="homepage-container md:w-full md:h-[1200px] flex justify-center items-center">
            <div className="w-[50%] h-[50%] text-[50px] flex text-start items-end">
                <h1>ONDE A TRADIÇÃO ENCONTRA UM ESTILO MODERNO</h1>
            </div>
            <div className="teste1 w-[30%] h-[35%] flex flex-col text-center items-center border-2 rounded-xl">
                <div>
                    <h1 className="text-[40px] md:my-[50px]">Faça seu agendamento</h1>
                    <form className="flex flex-col justify-center">
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            className="border-2 p-2 mb-4 rounded-md text-black"
                        />
                        <input
                            type="text"
                            placeholder="Digite seu número de contato"
                            className="border-2 p-2 mb-4 rounded-md text-black"
                        />
                        <button
                            type="submit"
                            className="bg-[#ece1cdff] text-black p-2 rounded-md hover:bg-[#49403bff] hover:text-white"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}