import Filter from "../Filters/Filter";
import TagTest from "../TagTest/TagTest";
import style from "./style.module.scss";
import QuestComponent from "./questComponent/QuestComponent";
import { useState } from "react";
import getQuest from "@/pages/service/getQuests"

export default function MainContent(props: any) {
    //props
    const [subject, setSubject] = useState<string>("inputAndOutput");
    const [numberQuestions, setNumberQuestions] = useState<number>(1);
    const [dificulty, setdificulty] = useState<string>("easy");
    const [questToShow, setQuestToShow] = useState<any>([]);

    //observer to activate event (useEffect) in TagTest
    const handleClickFilterButton = async () => {
        const questionsSelected = await getQuest(subject, dificulty, numberQuestions);

        setQuestToShow(questionsSelected);
    }

    return (
        <section className={`mt-28 p-12 flex flex-col gap-7 ${style.mainContent}`}>
            <h2 className="font-bold" >Questões</h2>

            <Filter subject={subject} numberQuestions={numberQuestions} dificulty={dificulty} setSubject={setSubject} setNumberQuestions={setNumberQuestions} setdificulty={setdificulty}/>

            <button onClick={handleClickFilterButton} className="rounded-md w-[100px] text-white font-bold p-1">Filtrar</button>

            <TagTest>
                {
                    questToShow.length == 0 ? 
                    (<p className="text-center" >As questões aparecerão aqui</p>) 
                    : 
                    (
                        <div>
                            {
                                questToShow.map((question: any) => {
                                    return <QuestComponent key={question.id} question={question}/>
                                })
                            }
                        </div>
                    )
                }

            </TagTest>
        </section>
    );
}