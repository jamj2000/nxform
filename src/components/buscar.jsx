import Form from "next/form";  // Nuevo componente en NextJS 15
import { ArrowRight } from 'lucide-react'

const classRadio = "appearance-none size-10 rounded-full bg-no-repeat bg-[center_center] checked:bg-slate-200 focus:outline-none"

function Buscar() {
    return (

        <Form action="" className="flex items-center gap-1">

            <input name="sort" type="radio" value='ascName' className={`${classRadio} bg-[url('/icons/arrow-down-a-z.svg')]`}/>
            <input name="sort" type="radio" value='ascTime' className={`${classRadio} bg-[url('/icons/clock-arrow-down.svg')]`}/>
            <input name="sort" type="radio" value='desName' className={`${classRadio} bg-[url('/icons/arrow-up-z-a.svg')]`}/>
            <input name="sort" type="radio" value='desTime' className={`${classRadio} bg-[url('/icons/clock-arrow-up.svg')]`} defaultChecked />
  


            <input
                name="query"   // adjuntado a la URL como parámetro de consulta 
                type='search'
                className="text-black p-2 pl-10 rounded-full bg-[url('/icons/search.svg')] bg-[length:16px_16px] bg-[center_left_10px] bg-no-repeat border border-slate-300 focus:outline-blue-300"
            />

            <button type="submit" value='hola' className="size-10 p-2 bg-blue-200 hover:bg-blue-300 rounded-full" title="VAMOS">
                <ArrowRight />
            </button>
        </Form>

    );
}

export default Buscar;