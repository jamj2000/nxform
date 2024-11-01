'use server'
import fs from 'node:fs'
import mysql from '@/lib/mysql'
import { revalidatePath } from 'next/cache';


export async function obtenerProductos(query, sort) {
    const sql = 'select * from productos where nombre like ? order by id desc;'
    const values = [`%${query}%`]
    const [productos] = await mysql.query(sql, values);
    
    console.log(productos);

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return productos
}


export async function nuevoProducto (prevState, formData) {
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = +formData.get('precio')
    const imagen = formData.get('imagen')
    
    const buffer = await imagen.arrayBuffer()
    const bytes = new Uint8Array(buffer)

    console.log(nombre, descripcion, precio, imagen)

    // Introducimos retardo artificial
    await new Promise((resolve) => setTimeout( resolve, 2000))

    try {
        fs.writeFileSync('public/images/' + imagen.name, bytes, 'binary')
        const sql = 'insert into productos (nombre, descripcion, precio, imagen) values (?, ?, ?, ?);'
        const values = [nombre, descripcion, precio, '/images/'+imagen.name];
    
        const [result, fields] = await mysql.query(sql, values)

        revalidatePath('/')
        return { success: 'Datos guardados' }
    } catch (error) {
        return { error: error.message }
    }

}




export async function eliminarProducto(formData) {
    const id = formData.get('id')

    const sql = 'delete from productos where id = ?;'
    const values = [id]
    await mysql.query(sql, values);

    revalidatePath('/?' + Math.random())
}