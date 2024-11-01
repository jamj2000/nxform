import ProductoNuevo from '@/components/forms/producto-nuevo'
import Fallback from '@/components/fallback'
import Productos from '@/components/productos'
import { Suspense } from 'react'
import { ArrowRight, Plus, RefreshCcw } from 'lucide-react'
import Modal from '@/components/modal'
import Paginacion from '@/components/paginacion'
import Form from 'next/form'
import NumProductos from '@/components/numProductos'


export const experimental_ppr = true

const classRadio = "appearance-none size-10 rounded-full bg-no-repeat bg-[center_center] checked:bg-slate-200 focus:outline-none"
const classSearch = "text-black p-2 pl-10 rounded-full bg-[url('/icons/search.svg')] bg-[length:16px_16px] bg-[center_left_10px] bg-no-repeat border border-slate-300 focus:outline-blue-300"


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
        <h1 className='text-4xl text-blue-400 font-bold '>PRODUCTOS </h1>

        <Modal
          icon={<Plus />}
          className={'place-self-end size-10 p-2 rounded-full text-green-700 bg-green-200 hover:bg-green-300 hover:cursor-pointer'}>
          <ProductoNuevo />
        </Modal>
      </div>

       <Form action="" className="flex flex-col gap-4">
        <div className="flex justify-end gap-1 mb-10">
          {/* Ordenar */}
          <input name="sort" type="radio" value='nombre asc' className={`${classRadio} bg-[url('/icons/arrow-down-a-z.svg')]`} />
          <input name="sort" type="radio" value='createdAt asc' className={`${classRadio} bg-[url('/icons/clock-arrow-down.svg')]`} />
          <input name="sort" type="radio" value='nombre desc' className={`${classRadio} bg-[url('/icons/arrow-up-z-a.svg')]`} />
          <input name="sort" type="radio" value='createdAt desc' className={`${classRadio} bg-[url('/icons/clock-arrow-up.svg')]`} defaultChecked />

          {/* Buscar */}
          <input name="query" type='search' className={classSearch} />

          <button type="submit" className="size-10 p-2 bg-blue-300 hover:bg-blue-400 rounded-full" title="VAMOS">
            <ArrowRight className="text-white" />
          </button>
        </div>

        <Paginacion />
      </Form>

      <Suspense fallback={<Fallback>Obteniendo productos ... </Fallback>}>
      {/* <Suspense fallback={<RefreshCcw className='inline animate-spin' />}> */}
        <Productos query={query} sort={sort} />
      </Suspense>

    </div>
  )
}

export default PaginaInicio