import style from "./style.module.scss";

export default function Filter(props: any) {

    const handleSelectSubject = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.setSubject(event.target.value);
    }

    const handleSelectnumberQuest = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.setNumberQuestions(event.target.value);
    }

    const handleSelectDificulty = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.setdificulty(event.target.value);
    }

    return(
        <section id="filterSection" className={`flex flex-row justify-between w-[550px] ${style.filters}`}>
            <select onChange={handleSelectSubject} name="subjectFilter" id="subjectFilter">
                <option value="none" defaultValue={"Conteúdo"}>Conteúdo</option>
                <option value="inputAndOutput">Entrada e saída</option>
                <option value="conditionalBranches">Desvios condicionais</option>
                <option value="repeatComands">Comandos de repetição</option>
                <option value="vectorsAndMatrices">Vetores e matrizes</option>
                <option value="subprograms">Subprogramas</option>
                <option value="recursion">Recursividade</option>
                <option value="pointers">Ponteiros</option>
            </select>

            <select onChange={handleSelectnumberQuest} name="numberQuestions" id="numberQuestions">
                <option value="none" defaultValue={"Nº de questões"}>Nº de questões</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <select onChange={handleSelectDificulty} name="dificulty" id="dificulty">
                <option value="none" defaultValue={"Dificuldade"}>Dificuldade</option>
                <option value="easy">Fácil</option>
                <option value="medium">Médio</option>
                <option value="hard">Difícil</option>
            </select>
        </section>
    );
}