import Carousel from '../../components/carousel/carousel'

import '../cities/Cities.css'


const Cities = () => {

    return (
        <main className="contCities">
            <section className="top-area">
                <h1 className="top-area-title">Cities</h1>
                <p className="top-area-text">Collection of the most beautiful places and experience</p>
            </section>
            <div className="bot-area">

                <div className="searchbar">
                    <img className="searchbar-img" src="Vector.svg" alt="" />
                    <input className="searchbar-inp" type="text" placeholder="Search your city" />
                </div>
                <Carousel />
            </div>
        </main>
    )
}

export default Cities