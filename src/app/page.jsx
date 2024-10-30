import { Formulario } from '@/app/formulario'
import Fallback from '@/components/fallback'
import Productos from '@/components/productos'
import { Suspense } from 'react'

async function PaginaInicio({ searchParams }) {
  const { query } = await searchParams

  // Introducimos un retardo artificial
  // await new Promise(resolve => setTimeout(resolve, 2000))

  return (
    <div className='h-screen grid place-content-center'>
      <h1 className='text-2xl text-blue-400 font-bold'>
        PRODUCTOS
      </h1>
      <Formulario />
      <Suspense fallback={<Fallback>Obteniendo productos ... </Fallback>}>
        <Productos query={query || ''} />
      </Suspense>
    </div>
  )
}

export default PaginaInicio