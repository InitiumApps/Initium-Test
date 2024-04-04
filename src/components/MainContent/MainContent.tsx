import Filter from "../Filters/Filter";
import TagTest from "../TagTest/TagTest";
import style from "./style.module.scss";
import { useState } from "react";

import { selectQuestionToRender } from "@/pages/service/selectContent"

selectQuestionToRender();

export default function MainContent(props: any) {
    //props
    const [subject, setSubject] = useState<string>("");
    const [numberQuestions, setNumberQuestions] = useState<string>("");
    const [dificulty, setdificulty] = useState<string>("");
    const [observer, setObserver] = useState<boolean>(false);

    //observer to activate event (useEffect) in TagTest
    const handleClickFilterButton = () => {
        setObserver(observer ? false : true);
    }

    return (
        <section className={`mt-28 p-12 flex flex-col gap-7 ${style.mainContent}`}>
            <h2 className="font-bold" >Questões</h2>
            <Filter setSubject={setSubject} setNumberQuestions={setNumberQuestions} setdificulty={setdificulty}/>
            <button onClick={handleClickFilterButton} className="rounded-md w-[100px] text-white font-bold p-1">Filtrar</button>
            <TagTest subject={subject} numberQuestions={numberQuestions} dificulty={dificulty} observer={observer}/>
        </section>
    );
}