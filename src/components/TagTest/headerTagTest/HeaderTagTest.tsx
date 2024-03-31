import Image from "next/image";

export default function HeaderTagText() {
    return(
        <div className="flex flex-row justify-between items-center">
            <Image 
                src="/img/logo-if-ofc.png"
                alt="Description of the image"
                width={100}
                height={100}
            />
            <p className="text-center grow-[1]">Análise e desenvolvimento de sistemas IFPB - Campus Cajazeiras</p>
        </div>
    );
}