import ProfessionalCard from "./ProfessionalCard";

export default function Team() {
    const professionals = [
        { name: 'John', title: 'Mestre em barbas' },
        { name: 'Marcus', title: 'Mestre em Cortes' },
        { name: 'Ivan', title: 'Mestre em Barbas e Cortes' },       
    ];

    return (
        <section className="w-full md:min-h-screen] bg-white flex flex-col items-center pt-[80px] gap-[20px] mb-[40px]">
            <h1 className="text-black w-[40%] text-[60px] text-center">CONHEÇA NOSSOS PROFISSIONAIS</h1>
            <span className="text-black w-[40%] text-center text-[13px]">Cada membro do nosso time está empenhado em providenciar excelente preparação, garantindo que você saia da nossa barbearia sentindo o seu melhor.</span>
            <div className="w-full flex gap-8 mt-[100px] justify-center">
                {professionals.map((professional, index) => (
                    <ProfessionalCard
                        key={index}
                        name={professional.name}
                        title={professional.title}
                    />
                ))}
            </div>
        </section>
    );
}
