import Link from 'next/link'
import { obtenerProductos } from '@/lib/actions'
import Eliminar from './forms/eliminar'
import Modificar from './forms/modificar'
import { RefreshCcw } from 'lucide-react'




async function Productos({ query, sort }) {

    const { productos, total } = await obtenerProductos(query, sort)
    // await new Promise ( resolve => setTimeout(resolve, 2000))

    console.log('productos', productos);

    
    return (
        <div className='flex flex-col overflow-y-auto'>
            {productos
                .map((producto) => (
                    <div key={producto.id} className='text-lg py-1 md:px-4 xl:px-8 odd:bg-slate-100 even:bg-slate-200 flex items-center justify-between'>

                        <Link href={`/${producto.id}`} className='text-lg font-bold text-slate-600 hover:text-black'>
                            {producto.nombre}
                        </Link>

                        <div className='flex gap-1'>
                            <Modificar producto={producto} />
                            <Eliminar producto={producto} />
                        </div>
                    </div>

                ))
            }
        </div>


    )
}

export default Productos


