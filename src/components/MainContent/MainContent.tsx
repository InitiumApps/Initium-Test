import Filter from "../Filters/Filter";
import TagTest from "../TagTest/TagTest";
import style from "./style.module.scss";
import { useState } from "react";

export default function MainContent(props: any) {
    const [subject, setSubject] = useState<string>("");
    const [numberQuestions, setNumberQuestions] = useState<string>("");
    const [dificulty, setdificulty] = useState<string>("");

    console.log(subject)
    console.log(numberQuestions)
    console.log(dificulty)

    return (
        <section className={`mt-28 p-12 flex flex-col gap-7 ${style.mainContent}`}>
            <h2 className="font-bold" >Questões</h2>
            <Filter setSubject={setSubject} setNumberQuestions={setNumberQuestions} setdificulty={setdificulty}/>
            <button onClick={props.getContentFilters} className="rounded-md w-[100px] text-white font-bold p-1">Filtrar</button>
            <TagTest />
        </section>
    );
}