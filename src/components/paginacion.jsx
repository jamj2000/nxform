'use client'
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Paginacion() {
    const [page, setPage] = useState(1)
    const { refresh } = useRouter()

    return (
        <div className="flex justify-between">
            <button className='flex gap-1 items-center rounded-full text-white bg-blue-500 hover:bg-blue-700 disabled:bg-slate-300'
                onClick={() => { setPage(value => value - 1); refresh()} } >
                <CircleChevronLeft className="size-10" />
            </button>

            <input type="number" readOnly={true}
                name="page"
                value={page}
                onChange={e => setPage(e.target.value)}
                className='w-20 font-bold text-center  p-2 rounded-md disabled:bg-slate-300 focus:outline-none'
            />

            <button className='flex gap-1 items-center rounded-full text-white bg-blue-500 hover:bg-blue-700 disabled:bg-slate-300'
                onClick={() => setPage(value => value + 1)}>
                <CircleChevronRight className="size-10" />
            </button>
        </div>
    )
}

export default Paginacion