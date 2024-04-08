import { useEffect, useState } from "react";
import HeaderTagText from "./headerTagTest/HeaderTagTest";
import style from "./style.module.scss";

type typeTag = {
    children: any
}

export default function TagTest( {children}: typeTag ) {

    return(
        <section className={`bg-white w-[65%] m-auto h-full p-16 mt-5 max-w-[750px] min-h-[500px]`}>
            <HeaderTagText />
    
            <section className="mt-16">
                {children}
            </section>
        </section>
    );
}