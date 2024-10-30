import Formulario from '@/components/formulario'
import Fallback from '@/components/fallback'
import Productos from '@/components/productos'
import { Suspense } from 'react'
import { Plus, RefreshCw, Trash } from 'lucide-react'
import Buscar from '@/components/buscar'


async function PaginaInicio({ searchParams }) {
  const { query } = await searchParams

  // Introducimos un retardo artificial
  // await new Promise(resolve => setTimeout(resolve, 2000))

  return (
    <div className='h-screen grid place-content-center'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl text-blue-400 font-bold'>
          PRODUCTOS
        </h1>
        <Buscar />
      </div>

      <Plus className='size-10 p-2 bg-green-200 rounded-full hover:bg-green-400 hover:cursor-pointer' />

      <Formulario />

      <Suspense fallback={<Fallback>Obteniendo productos ... </Fallback>}>
        <Productos query={query || ''} />
      </Suspense>
    </div>
  )
}

export default PaginaInicio