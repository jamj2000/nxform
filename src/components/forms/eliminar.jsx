'use client'
import { eliminarProducto } from "@/lib/actions";
import { Trash, RefreshCcw } from 'lucide-react'
import { useActionState } from 'react'

function ProductoEliminar({ producto }) {
    const [state, action, pending] = useActionState ( eliminarProducto, null )

    const classIcon = 'size-10 p-2 rounded-full hover:cursor-pointer' 

    return (

        <form className='flex gap-2'>
            <input type="hidden" name='id' value={producto.id} />

            <button formAction={action} title='ELIMINAR'>
                { pending 
                ? <RefreshCcw className={`${classIcon} text-red-700 bg-red-200 hover:bg-red-300 animate-spin`} />
                : <Trash className={`${classIcon} text-red-700 bg-red-200 hover:bg-red-300`} />
                }
            </button>
        </form>
    );
}

export default ProductoEliminar;