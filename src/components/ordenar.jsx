import Form from "next/form";  // Nuevo componente en NextJS 15
import { ArrowRight } from 'lucide-react'

function Buscar() {
    return (
        <Form action="" className="flex items-center gap-1">
            <input
                name="query"   // adjuntado a la URL como parámetro de consulta 
                type='search'
                className="text-black p-2 pl-10 rounded-full bg-[url('/search.svg')] bg-[length:16px_16px] bg-[center_left_10px] bg-no-repeat border border-slate-300 focus:outline-blue-300"
            />
            <button type="submit" className="size-10 p-2 bg-blue-300 hover:bg-blue-200 rounded-full" title="VAMOS">
                <ArrowRight />
            </button>
        </Form>
    );
}

export default Buscar;