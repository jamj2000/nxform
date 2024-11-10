import { Users } from '@/lib/users'
import { userDelete, userUpdate, userCreate } from '@/lib/actions'



export default function Home() {
 
  console.log(Users)
 
  return (
    <main>

      <form action={userCreate} id='insertar'>
        <input type='hidden' name='id' defaultValue={crypto.randomUUID().replaceAll("-", "")}></input>
       
        <label htmlFor='nombre'>Usuario</label>
        <input type='text' id='nombre' name='nombre'></input>
       
        <label htmlFor='edad'>Edad</label>
        <input type='text' id='edad' name='edad'></input>

        <button>Crear</button>
      </form>

      {Users.map(user => (

        <form key={user.id}>
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
