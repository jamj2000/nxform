'use server'
import { revalidatePath } from "next/cache"
import { Users } from "@/lib/users"

export async function userUpdate(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const edad = formData.get('edad')

    const pos = Users.findIndex ( user =>  id == user.id )

    Users[pos] = { ...Users[pos], id, nombre, edad }

    // console.log(Users)

    revalidatePath('/')
}
   
export async function userCreate(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const edad = formData.get('edad')

    const pos = Users.length;
    
    Users[pos] = { id, nombre, edad }

    // console.log(Users)

    revalidatePath('/')
}  


export async function userDelete(formData) {
    const id = formData.get('id')

    const pos = Users.findIndex ( user =>  id == user.id )
    console.log(pos);
    Users.splice( pos, 1 )

    revalidatePath('/')
}
