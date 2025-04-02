import { useState } from "react";
import InputComponent from "../InputComponent";
import { FaWeightHanging, FaRuler } from "react-icons/fa";
import { toast } from "react-toastify";

export default function CardImc() {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [faixa, setFaixa] = useState(" ");

    function calcularImc() {
        if (!altura || !peso) {
            toast.error("Preencha todos os campos");
            return;
        }

        const calculo = (peso / (altura * altura)) * 10000;

        setResultado(calculo.toFixed(2))

        if(calculo < 18.5){
            setFaixa("está abaixo do peso");
        }

        if(calculo >= 18.5 && calculo <= 24.9){
            return setFaixa("está sobrepeso");
        }

        if(calculo >= 30 && calculo <=34.9){
            return setFaixa("possui obesidade grau 1");
        }

        if(calculo >= 35){
            return setFaixa("possui besidade grau 2");
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
                    icone={<FaRuler color="#000" />}
                    valorFinal={"cm"}
                    handle={(event) => setAltura(event.target.value)}

                />
                <InputComponent
                    label={"Peso"}
                    icone={<FaWeightHanging color="#000" />}
                    valorFinal={"kg"}
                    handle={(event) => setPeso(event.target.value)}
                />
                <div className="w-full flex justify-center items-center">
                    <button
                        onClick={calcularImc}
                        className="w-[90%] h-[40px] rounded-md bg-[#FF725E] mt-2 font-bold">Calculadora</button>
                </div>
            </div>
            {resultado > 0 && (
                <div className="w-full flex flex-col mt-4">
                    <div className="w-full h-[1px] bg-gray-400"></div>
                    <div className="flex w-full p-[10PX]">
                        <div className="w-[40%] flex flex-col items-center">
                            <p className="text-[38px] text-[#FF725E]">{resultado}</p>
                            <p>Seu Imc</p>
                        </div>
                            <div className="w-[60%] flex items-center">
                                <p>Você está no peso ideal</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-400"></div>
                    </div>
                    
            )}
                </div>
            );
}