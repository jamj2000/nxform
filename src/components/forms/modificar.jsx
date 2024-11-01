'use client'
import { modificarProducto } from "@/lib/actions";
import { NotebookPen, RefreshCcw } from 'lucide-react'
import { useActionState } from 'react'

function ProductoModificar({ producto }) {
    const [state, action, pending] = useActionState ( modificarProducto, null )

    const classIcon = 'size-10 p-2 rounded-full hover:cursor-pointer' 

    return (

        <form className='flex gap-2'>
            <input type="hidden" name='id' value={producto.id} />

            <button formAction={action} title='MODIFICAR'>
                { pending 
                ? <RefreshCcw className={`${classIcon} text-orange-700 bg-orange-200 hover:bg-orange-300 animate-spin`} />
                : <NotebookPen className={`${classIcon} text-orange-700 bg-orange-200 hover:bg-orange-300`} />
                }
            </button>
        </form>
    );
}

export default ProductoModificar;