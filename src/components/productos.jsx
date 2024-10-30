import Buscar from '@/components/buscar'
import Link from 'next/link'
import { obtenerProductos, eliminarProducto } from '@/lib/actions'





async function Productos({ query }) {

    const productos = await obtenerProductos(query)
    console.log(productos);

    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Listado de productos
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {productos.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo   
                    .map((producto) => (
                        <div key={producto.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/${producto.id}`}>{producto.nombre}</Link>
                            <div className='flex gap-6'>
                                <form>
                                    <input type="hidden" name='id' value={producto.id} />
                                    <button formAction={eliminarProducto} title='ELIMINAR'>❌</button>
                                </form>
                            </div>
                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default Productos


