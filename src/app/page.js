import { Users } from '@/lib/users'
import { userDelete, userUpdate, userCreate } from './actions'

export default function Home() {
  console.log(Users)
  return (
    <main>
      <form key={crypto.randomUUID().replaceAll("-", "")} style={{ 'padding': '30px', 'border': 'solid 1px gray', 'marginTop': '20px' }}>
        <input type='hidden' name='id' defaultValue={crypto.randomUUID().replaceAll("-", "")}></input>
        <label htmlFor='nombre'>Usuario</label>
        <input type='text' id='nombre' name='nombre'></input>
        <label htmlFor='edad'>Edad</label>
        <input type='text' id='edad' name='edad'></input>
        <button formAction={userCreate}>Crear</button>
      </form>

      {Users.map(user => (

        <form key={user.id} style={{ 'padding': '30px', 'border': 'solid 1px gray', 'marginTop': '20px' }}>
          <input type='hidden' name='id' defaultValue={user.id}></input>
          <label htmlFor='nombre'>Usuario</label>
          <input type='text' id='nombre' name='nombre' defaultValue={user.nombre}></input>
          <label htmlFor='edad'>Edad</label>
          <input type='text' id='edad' name='edad' defaultValue={user.edad}></input>
          <button formAction={userUpdate}>Actualizar</button>
          <button formAction={userDelete}>Eliminar</button>
        </form>

      ))
      }
    </main>
  )
}
