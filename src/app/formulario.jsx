'use client'
import { procesarDatos } from '@/app/actions'
import { useActionState } from 'react'

// import { toast } from 'react-hot-toast';


export function Formulario() {
    // async function wrapper(data) {
    //     const { type, message } = await procesarDatos(data);
    //     if (type == 'success') toast.success(message)
    //     if (type == 'error') toast.error(message)
    // }

    const [state, action, pending] = useActionState(procesarDatos, null)

    return (
        <form action={action} >
            {state?.success &&
                <p className='bg-green-100 text-green-700 p-3 rounded-md visble'>
                    {state?.success}
                </p>
            }
            {state?.error &&
                <p className='bg-red-100 text-red-700 p-3 rounded-md'>
                    {state?.error}
                </p>
            }
            <div className='mb-4 w-full grid grid-cols-[100px_auto] items-center gap-4 p-6 rounded-lg border-2 border-blue-200'>
                <label htmlFor="nombre"> Nombre </label>
                <input type="text" id="nombre" name="nombre" placeholder="Introduce tu nombre" required
                    className='p-2 rounded hover:ring-2 focus:outline-none'
                />

                <label htmlFor="apellidos"> Apellidos </label>
                <input type="text" id="apellidos" name="apellidos" placeholder="Introduce tus apellidos" required
                    className='p-2 rounded hover:ring-2 focus:outline-none'
                />

                <label htmlFor="avatar"> Avatar </label>
                <input type="file" id="avatar" name="avatar" accept="image/*" required
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

