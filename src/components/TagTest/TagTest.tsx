import HeaderTagText from "./headerTagTest/HeaderTagTest";
import style from "./style.module.scss";

export default function TagTest() {
    return(
        <section className={`bg-white w-[65%] m-auto h-full p-16 mt-3 max-w-[750px]`}>
            <HeaderTagText />
        </section>
    );
}