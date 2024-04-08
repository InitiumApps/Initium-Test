import style from "./style.module.scss";

export default function Filter(props: any) {

    return(
        <section id="filterSection" className={`flex flex-row justify-between w-[550px] ${style.filters}`}>

            <div>
                <p className="text-sm">Assunto</p>
                <select value={props.subject} onChange={(e) => props.setSubject(e.target.value)} name="subjectFilter" id="subjectFilter">
                    <option value="inputAndOutput">Entrada e saída</option>
                    <option value="conditionalBranches">Desvios condicionais</option>
                    <option value="repeatCommands">Comandos de repetição</option>
                    <option value="vectorsAndMatrices">Vetores e matrizes</option>
                    <option value="subprograms">Subprogramas</option>
                    <option value="recursion">Recursividade</option>
                    <option value="pointers">Ponteiros</option>
                </select>
            </div>

            <div>
                <p className="text-sm">Numero de questões</p>
                <select className="w-[80px]" value={props.numberQuestions} onChange={(e) => props.setNumberQuestions(e.target.value)} name="numberQuestions" id="numberQuestions">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div>
                <p className="text-sm">Dificuldade</p>
                <select value={props.dificulty} onChange={(e) => props.setdificulty(e.target.value)} name="dificulty" id="dificulty">
                    <option value="easy">Fácil</option>
                    <option value="medium">Médio</option>
                    <option value="hard">Difícil</option>
                </select>
            </div>
        </section>
    );
}