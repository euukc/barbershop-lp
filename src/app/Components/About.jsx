import Image from "next/image"

export default function About() {
    return (
        <section className="w-full md:h-[700px] bg-[#49403bff] flex justify-between py-[100px]">
            <div className="w-[40%] h-[500px] flex flex-col justify-around py-[20px] gap-12 pl-[80px]">
                <span className="md:text-[50px]">SERVIÇOS ALÉM DA EXPECTATIVA</span>
                <h2>Nossa barbearia é o território criado por homens que apreciam uma qualidade premium, tempo e visual impecável.</h2>
                <button className="text-center md:w-[200px] border-2 rounded-md p-2 text-[#49403bff] bg-[#ece1cdff] cursor-pointer border-transparent hover:bg-[#f7f2e7]">Agendar agora</button>
            </div>
            <div className="container-map w-[22%] h-[500px] border-2 rounded-[20px]">            

            </div>
            <div className="w-[30%] h-[500px] mr-[30px]">
                <div className="flex mt-[50px] border-b-2 py-6 gap-[10px]">
                    <Image src="/icons8-localização.gif" width={65} height={50} />
                    <div className="text-[25px]">
                        <h1>Endereço</h1>
                        <p className="text-[18px]">Ruas da Barbearia, 1345</p>
                    </div>
                </div>
                <div className="flex mt-[50px] border-b-2 py-6 gap-[10px]">
                    <Image src="/icons8-phone-call-64.png" width={55} height={50} />
                    <div className="text-[25px]">
                        <h1>11 00000000</h1>
                        <p className="text-[18px]">Seg-Sex: 9:00 às 20h</p>
                        <p className="text-[18px]">Sábado: 9:00 às 13h</p>
                    </div>

                </div>
            </div>

        </section>
    )
}