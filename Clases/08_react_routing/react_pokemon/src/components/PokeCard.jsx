const PokeCard = ({nombre, foto, children}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={foto} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5>{nombre.toUpperCase()}</h5>
                    <div>
                        {children}
                    </div>
                </div>
        </div>
    )
}

export default PokeCard