import '../footer/Footer.css'

const Footer = () => {
    return (
        <footer className='contFooter'>
            <div className='contIzquierda'>
                <img className="img-footer" src="icon-mount.png" alt="" />
                <h3 className='tituloFooter'>My Tinerary</h3>
            </div>
            <div className='contDerecha'>
                <a className='menuFooter' href="">Home</a>
                <a className='menuFooter' href="">Cities</a>
            </div>
        </footer>
    )
}

export default Footer