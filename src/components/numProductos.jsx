import { totalProductos } from '@/lib/actions'

async function NumProductos() {
    const total = await totalProductos()

    return total;
}

export default NumProductos;