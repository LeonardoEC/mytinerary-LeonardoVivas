import { useEffect, useState } from 'react'
import '../cities/Cities.css'
import Card from '../../components/card/Card'
import { Link as LinkRouter } from 'react-router-dom'
import axios from 'axios'


const Cities = () => {

    const [cities, setCities] = useState()

    useEffect(() => {
        axios.get('http://localhost:8000/api/cities?name=')
            .then(response => setCities(response.data.cities))
            .catch(err => console.log(err))
    }, [])

    const inputSearch = async (x)=>{
        try {
            const response = await axios.get(`http://localhost:8000/api/cities?name=${x.target.value}`)
            setCities(response.data.cities)
        } catch(err){
            console.log(err)
        }
    }

    return (
        <main className="contCities">
            <section className="top-area">
                <h1 className="top-area-title">Cities</h1>
                <p className="top-area-text">Collection of the most beautiful places and experience</p>
            </section>
            <div className="bot-area">
                <div className="searchbar">
                    <img className="searchbar-img" src="Vector.svg" alt="" />
                    <input onChange={inputSearch} className="searchbar-inp" type="text" placeholder="Search your city" />
                </div>
            </div>
            <div className='contCard'>
                {
                    cities?.map((item => {
                        return (
                            <LinkRouter className='link' key={item._id} to={`/cities/${item._id}`}>
                                <Card title={item.name} subtitle={item.country} bgImg={item.img} />
                            </LinkRouter>
                        )
                    }))
                }
            </div>
        </main>
    )
}

export default Cities