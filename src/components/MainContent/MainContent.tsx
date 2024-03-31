import Filter from "../Filters/Filter";
import style from "./style.module.scss";

export default function MainContent() {
    return (
        <section className={`mt-28 p-12 flex flex-col gap-7 ${style.mainContent}`}>
            <h2 className="font-bold" >Questões</h2>
            <Filter/>
            <button className="rounded-md w-[100px] text-white font-bold p-1">Filtrar</button>
        </section>
    );
}