import Image from "next/image";
import Imagem from "../../public/fitness-tracker-animate.svg"

export default function LadoEsquerdo(){
    return(
        <div className="w-[50%] h-full flex items-center justify-center">
            <Image
                src={Imagem}
                alt="Imagem animada"
                width={500}
            />    
        </div>
    );
}