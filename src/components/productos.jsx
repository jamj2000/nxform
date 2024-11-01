import Link from 'next/link'
import { obtenerProductos, eliminarProducto } from '@/lib/actions'
import { NotebookPen, Trash } from 'lucide-react'




async function Productos({ query, sort }) {

    const productos = await obtenerProductos(query, sort)

    return (

        // .sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo   
        <div className='flex flex-col'>
            {productos
                .map((producto) => (
                    <div key={producto.id} className='text-lg py-1 md:px-4 xl:px-8 odd:bg-slate-100 even:bg-slate-200 flex items-center justify-between'>
                        
                        <Link href={`/${producto.id}`} className='text-lg font-bold text-slate-600 hover:text-black'>
                            {producto.nombre}
                        </Link>

                        <div className='flex gap-6'>
                            <form className='flex gap-2'>
                                <input type="hidden" name='id' value={producto.id} />
                                <button formAction={eliminarProducto} title='MODIFICAR'>
                                    <NotebookPen className='size-10 p-2 rounded-full bg-orange-200 hover:bg-orange-300 hover:cursor-pointer' />
                                </button>

                                <input type="hidden" name='id' value={producto.id} />
                                <button formAction={eliminarProducto} title='ELIMINAR'>
                                    <Trash className='size-10 p-2 rounded-full bg-red-200 hover:bg-red-300 hover:cursor-pointer' />
                                </button>
                            </form>
                        </div>
                    </div>
                ))

            }
        </div>

    )
}

export default Productos


