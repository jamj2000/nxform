import Formulario from '@/components/forms/producto-nuevo'
import Fallback from '@/components/fallback'
import Productos from '@/components/productos'
import { Suspense } from 'react'
import { Plus } from 'lucide-react'
import Buscar from '@/components/buscar'
import Paginar from '@/components/paginar'
import Modal from '@/components/modal'

async function PaginaInicio({ searchParams }) {
  let { query, sort } = await searchParams

  // establecemos valores por defecto en caso de recibir undefined
  query ??= ''
  sort ??= 'desTime'


  // Introducimos un retardo artificial
  // await new Promise(resolve => setTimeout(resolve, 2000))

  return (
    <div className='container mx-auto px-4 mt-20 flex flex-col gap-4'>
      <div className='mb-10 flex flex-col items-start md:flex-row md:justify-between'>
        <h1 className='text-2xl text-blue-400 font-bold'>
          PRODUCTOS
        </h1>
        <Buscar />
      </div>

      {/* <Modal
        icon={<Plus />}
        className={'place-self-end size-10 p-2 rounded-full bg-green-200 hover:bg-green-300 hover:cursor-pointer'}>
        <Formulario />
      </Modal> */}

      <Paginar />
      <Suspense fallback={<Fallback>Obteniendo productos ... </Fallback>}>
        <Productos query={query} sort={sort} />
      </Suspense>
      <Paginar />
    </div>
  )
}

export default PaginaInicio