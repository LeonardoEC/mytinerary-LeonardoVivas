import Hero from '../../components/hero/Hero'

import '../home/Home.css'

const Home = () => {
  return (
    <main className='contMain'>
      <div className="contIzq">
        <Hero/>
        <a className='buttMain'>View More</a>
      </div>
      <figure className="contDer">
        <img src="icon-mount.png" alt="Logo" />
      </figure>
    </main>
  )
}

export default Home