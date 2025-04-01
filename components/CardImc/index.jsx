import { useState } from "react";
import InputComponent from "../InputComponent";
import { FaWeightHanging, FaRuler } from "react-icons/fa";
import { toast } from "react-toastify";

export default function CardImc(){
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState(0);

    function calcularImc(){
        if(!altura || !peso){
            toast.error("Preencha todos os campos");
            return;
        }
    }

    return (
        <div className="w-[60%] px-4 min-h-[300px] bg-[#ffffff21] rounded-xl flex flex-col">
            <div className="w-full">
                <p className="font-bold text-[35px]">Calculdora-IMC</p>
                <div className="w-[230px] h-[5px] bg-[#FF725E] rounded-md"></div>
            </div>
            <div className="w-full flex flex-col gap-2 mt-4">
                <InputComponent 
                    label={"Altura"}
                    icone={<FaRuler color="#000"/>}
                    valorFinal={"cm"}
                    handle={(event) => setAltura(event.target.value)}

                />
                <InputComponent
                    label={"Peso"}
                    icone={<FaWeightHanging color="#000"/>}
                    valorFinal={"kg"}
                    handle={(event) => setPeso(event.target.value)}
                    />
                <div className="w-full flex justify-center items-center">
                <button 
                    onClick={calcularImc}
                    className="w-[90%] h-[40px] rounded-md bg-[#FF725E] mt-2 font-bold">Calculadora</button>
                </div>
                    
            </div>
        </div>
    );
}