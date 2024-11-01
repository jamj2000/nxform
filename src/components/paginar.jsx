import { ClockArrowDown, ClockArrowUp, ArrowDownAZ, ArrowDownZA, CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Form from "next/form";


const PAGE = 1
const PER_PAGE = 5


/* 
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

        { hasNextPage, hasPrevPage, total }

*/


async function Paginar() {

    return (
        <Form action="" className="flex justify-between items-center gap-1">

            <button
                name="page"
                className='flex gap-1 items-center bg-blue-500 text-white rounded-full disabled:bg-slate-300'
                formAction="">
                <CircleChevronLeft className="size-8" />
            </button>

            <div className='flex-grow text-center'>
                {1}
            </div>

            <input type="number"
                name="page"
                className='flex gap-1 items-center bg-blue-500 text-white p-2 rounded-md disabled:bg-slate-300'
            />


            <button
                name="page"
                className='flex gap-1 items-center bg-blue-500 text-white rounded-full disabled:bg-slate-300'
                formAction="">
                <CircleChevronRight className="size-8" />
            </button>

            {/* <button type="submit">Enviar</button> */}

        </Form>
    )
}

export default Paginar