import { useEffect, useState } from "react";
import HeaderTagText from "./headerTagTest/HeaderTagTest";
import style from "./style.module.scss";

export default function TagTest(props: any) {
    const [questionsToShow, setQuestionsToShow] = useState([]);

    useEffect(() => {
        console.log("Botão sendo chamado em TagTest");
    }, [props.observer])

    return(
        <section className={`bg-white w-[65%] m-auto h-full p-16 mt-3 max-w-[750px]`}>
            <HeaderTagText />
            
    
            {
                questionsToShow.length == 0 ? (
                    <p className="text-center">As questões aparecerão aqui</p>
                ) : (
                    questionsToShow.map(item => {
                        return (
                            <p key={2}>Nao zero</p>
                        );
                    })
                )
    
            }
        </section>
    );
}