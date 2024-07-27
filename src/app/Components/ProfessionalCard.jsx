export default function ProfessionalCard({ name, title }) {
    return (
        <section className="bg-prof w-[20%] border-2 h-[600px] rounded-xl text-end flex justify-end">
            <div className="professional w-[100px] h-[100px] border-2 flex flex-col m-[20px] text-center rounded-xl border-transparent">
                <p className="text-black text-[20px]">{name}</p>
                <p className="text-black text-[13px]">{title}</p>
            </div>

        </section>
    )
}