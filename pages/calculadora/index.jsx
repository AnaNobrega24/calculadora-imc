import LadoDireito from "@/components/LadoDireito";
import LadoEsquerdo from "@/components/LadoEsquerdo";

export default function pageCalculadora(){
    return (
        <div className="w-full h-screen flex bg-black">
            <LadoEsquerdo />
            <LadoDireito />
        </div>
    );
}