import { Formulario } from '@/app/formulario'

function PaginaInicio() {
  return (
    <div className='h-screen grid place-content-center'>
      <h1 className='text-2xl text-blue-400 font-bold'>
        PÁGINA DE INICIO - FORMULARIO
      </h1>
      <Formulario />
    </div>
  )
}

export default PaginaInicio