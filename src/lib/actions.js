'use server'
import { revalidatePath } from "next/cache"
import { Users } from "@/lib/users"

export async function userUpdate(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const edad = formData.get('edad')

    // Actualizamos usuario
    const pos = Users.findIndex ( user =>  id == user.id )
    Users[pos] = { id, nombre, edad }

    revalidatePath('/')
}
   
export async function userCreate(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const edad = formData.get('edad')

    // Creamos usuario
    const pos = Users.length;
    Users[pos] = { id, nombre, edad }

    revalidatePath('/')
}  


export async function userDelete(formData) {
    const id = formData.get('id')

    // Eliminamos usuario
    const pos = Users.findIndex ( user =>  id == user.id )
    Users.splice( pos, 1 )

    revalidatePath('/')
}
