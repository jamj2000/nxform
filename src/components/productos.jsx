import Buscar from '@/components/buscar'
import Link from 'next/link'
import { obtenerProductos, eliminarProducto } from '@/lib/actions'
import { Plus, RefreshCw, Trash } from 'lucide-react'




async function Productos({ query }) {

    const productos = await obtenerProductos(query)
    console.log(productos);

    return (

        <div className='flex flex-col'>
            {productos.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo   
                .map((producto) => (
                    <div key={producto.id} className='text-lg py-1 px-4 odd:bg-slate-100 even:bg-slate-200 flex items-center justify-between'>
                        
                        <Link href={`/${producto.id}`} className='text-lg font-bold text-slate-600 hover:text-black'>
                            {producto.nombre}
                        </Link>

                        <div className='flex gap-6'>
                            <form className='flex gap-2'>
                                <input type="hidden" name='id' value={producto.id} />
                                <button formAction={eliminarProducto} title='MODIFICAR'>
                                    <RefreshCw className='size-10 p-2 bg-orange-200 rounded-full hover:bg-orange-400 hover:cursor-pointer' />
                                </button>

                                <input type="hidden" name='id' value={producto.id} />
                                <button formAction={eliminarProducto} title='ELIMINAR'>
                                    <Trash className='size-10 p-2 bg-red-200 rounded-full hover:bg-red-400 hover:cursor-pointer' />
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


