import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [datos, setDatos] = useState([])
    const [cargando, setCargando] = useState(true)


    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setDatos(data.results);
        setCargando(false)
    }

    useEffect(() => {
        getData()
    }, [url])

    return {
        datos,
        cargando,
    }
}

export default useFetch