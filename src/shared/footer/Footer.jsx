import '../footer/Footer.css'
import { Link as LinkRouter } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='contFooter'>
            <div className='contIzquierda'>
                <img className="img-footer" src="icon-mount.png" alt="" />
                <h3 className='tituloFooter'>My Tinerary</h3>
            </div>
            <div className='contDerecha'>
                <div className='contDerechaContenido'>
                    <h3>Explore</h3>
                    <LinkRouter className='menuFooter' to="">Home</LinkRouter>
                    <LinkRouter className='menuFooter' to="">Cities</LinkRouter>
                </div>
                <div className='contDerechaContenido'>
                    <h3>About</h3>
                    <a className='menuFooter' href="">Facebook</a>
                    <a className='menuFooter' href="">Instagram</a>
                </div>
                <div className='contDerechaContenido'>
                    <h3>Developer</h3>
                    <a className='menuFooter' href="">Github</a>
                    <a className='menuFooter' href="">Linkedin</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer