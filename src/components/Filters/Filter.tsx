import style from "./style.module.scss";

export default function Filter() {
    return(
        <section className={`flex flex-row justify-between w-[550px] ${style.filters}`}>
            <select name="subjectFilter" id="subjectFilter">
            <option value="none" disabled selected>Conteúdo</option>
                <option value="inputAndOutput">Entrada e saída</option>
                <option value="conditionalBranches">Desvios condicionais</option>
                <option value="repeatComands">Comandos de repetição</option>
                <option value="vectorsAndMatrices">Vetores e matrizes</option>
                <option value="subprograms">Subprogramas</option>
                <option value="recursion">Recursividade</option>
            </select>

            <select name="numberQuestions" id="numberQuestions">
                <option value="none" disabled selected>Nº de questões</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <select name="dificulty" id="dificulty">
                <option value="none" disabled selected>Dificuldade</option>
                <option value="easy">Fácil</option>
                <option value="medium">Médio</option>
                <option value="hard">Difícil</option>
            </select>
        </section>
    );
}