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
  sort ??= 'createdAt desc'


  // Introducimos un retardo artificial
  // await new Promise(resolve => setTimeout(resolve, 2000))

  return (
    <div className='container mx-auto px-4 pt-20 flex flex-col gap-4'>
      <div className='flex justify-between'>
        <h1 className='text-4xl text-blue-400 font-bold '>PRODUCTOS</h1>

        <Modal
          icon={<Plus />}
          className={'place-self-end size-10 p-2 rounded-full text-green-700 bg-green-200 hover:bg-green-300 hover:cursor-pointer'}>
          <Formulario />
        </Modal>
      </div>


      {/* <div className='mb-10 flex justify-end'>
        <Buscar />
      </div> */}

      <Paginar />
      <Suspense fallback={<Fallback>Obteniendo productos ... </Fallback>}>
        <Productos query={query} sort={sort} />
      </Suspense>

    </div>
  )
}

export default PaginaInicio