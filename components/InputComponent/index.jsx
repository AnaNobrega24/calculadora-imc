export default function InputComponent({icone, valorFinal, handle, label}){
    return(
        <>
        <label className="text-white font-bold">{label}</label>
        <div className="w-full h-[50px] bg-gray-300 rounded-md flex items-center">
            <div className="w-[10%] h-full flex items-center justify-center">
                {icone}
            </div>
            <div className="w-[80%] h-full">
                <input
                    onChange={handle}
                    type="text"
                    className="w-full outline-none text-black h-full border-none" 
                 />
            </div>
            <div className="w-[10%] text-black h-full flex items-center justify-center">
                {valorFinal}
            </div>
        </div>
        </>
    );
}