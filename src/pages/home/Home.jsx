import Hero from '../../components/hero/Hero'
import {Link as LinkRouter} from 'react-router-dom'

import '../home/Home.css'

const Home = () => {
  return (
    <main className='contMain'>
      <div className="contIzq">
        <Hero/>
        <LinkRouter className='buttMain' to={'/cities'}>View More</LinkRouter>
      </div>
      <figure className="contDer">
        <img src="icon-mount.png" alt="Logo" />
      </figure>
    </main>
  )
}

export default Home