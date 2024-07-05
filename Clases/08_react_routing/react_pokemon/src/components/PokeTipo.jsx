const PokeTipo = ({numero, type}) => {
    const arregloColores = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

    return (
        <span className={`badge rounded-pill text-bg-${arregloColores[numero]} m-1`}>{type}</span>
    )
}

export default PokeTipo