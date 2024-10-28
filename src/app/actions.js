'use server'

import fs from 'node:fs'

export async function procesarDatos (prevState, formData) {
    const nombre = formData.get('nombre')
    const apellidos = formData.get('apellidos')
    const avatar = formData.get('avatar')
    
    const buffer = await avatar.arrayBuffer()
    const bytes = new Uint8Array(buffer)

    console.log(nombre, apellidos, avatar)

    await new Promise((resolve) => setTimeout( resolve, 3000))

    try {
        fs.writeFileSync('public/' + avatar.name, bytes, 'binary')
        //  throw Error ('Fallo al procesar datos')
        return { success: 'Datos guardados' }
    } catch (error) {
        return { error: error.message }
    }

}
