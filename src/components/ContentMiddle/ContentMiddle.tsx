import style from './style.module.scss';

export default function ContentMiddle() {
    return(
        <section className={`flex flex-col h-full justify-around my-20 items-center ${style.contentMiddle}`}>
            <h1 className="text-center font-bold w-[50%]">Algoritmos e lógica de programação - Crie lista de exercícios e aprimore sua lógica</h1>
            <span className="flex h-[2px] w-[30%] bg-neutral-700"></span>
            <p className="text-center">Por trás de todo bom programador existe algo fundamental, a lógica.</p>
        </section>
    );
}