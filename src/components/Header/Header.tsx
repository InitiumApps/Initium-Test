import Link from "next/link";
import styles from './style.module.css';

export default function Header() {
    return (
        <header className={`${styles.header} flex flex-row text-white items-center justify-between px-20`}>
            <p>Initium &lt;/test&gt;</p>
            <Link href={''} className="border rounded-full border-white border-solid pt-1 w-10 h-10 font-bold text-xl text-center" >?</Link>
        </header>
    );
}