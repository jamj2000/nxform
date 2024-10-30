'use client'
import { nuevoProducto } from '@/lib/actions'
import { useActionState, useEffect } from 'react'
import { CircleCheck, CircleX } from 'lucide-react';
import { toast } from 'sonner';


export default function Formulario() {

    const [state, action, pending] = useActionState(nuevoProducto, null)

    useEffect(() => {
        if (state?.success) {
            toast.success(state.success)
            document.getElementById('f').closest('dialog').close()
        }
        if (state?.error) toast.error(state.error)
 

    }, [state])


    return (
        <form id='f' action={action} >
            {state?.success &&
                <p className='bg-green-100 text-green-700 mb-2 p-3 rounded-md flex gap-2 items-center'>
                    <CircleCheck /> {state?.success}
                </p>
            }
            {state?.error &&
                <p className='bg-red-100 text-red-700 mb-2 p-3 rounded-md flex gap-2 items-center'>
                    <CircleX /> {state?.error}
                </p>
            }
            <div className='mb-4 w-full grid grid-cols-[100px_auto] items-center gap-4 p-6 rounded-lg border-2 border-blue-200'>
                <label htmlFor="nombre"> Nombre </label>
                <input type="text" id="nombre" name="nombre" placeholder="Introduce un nombre" required
                    className='p-2 rounded hover:ring-2 focus:outline-none'
                />

                <label htmlFor="descripcion"> Descripción </label>
                <input type="text" id="descripcion" name="descripcion" placeholder="Introduce una descripción" required
                    className='p-2 rounded hover:ring-2 focus:outline-none'
                />

                <label htmlFor="precio"> Precio </label>
                <input type="number" id="precio" name="precio" placeholder="Introduce el precio" required
                    className='p-2 rounded hover:ring-2 focus:outline-none'
                />

                <label htmlFor="imagen"> Imagen </label>
                <input type="file" id="imagen" name="imagen" accept="image/*" required
                    className='p-2 rounded hover:ring-2 focus:outline-none'
                />

                <button type="submit" disabled={pending}
                    className='col-span-2 mt-6 w-full p-3 bg-blue-200 hover:ring-2 disabled:bg-slate-200 hover:disabled:ring-0 font-bold text-center rounded-md'
                >
                    {pending ? 'Enviando...' : "Enviar"}
                </button>

            </div>
        </form>
    )
}

