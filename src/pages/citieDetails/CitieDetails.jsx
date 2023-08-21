import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Link as LinkRouter} from 'react-router-dom'


import '../citieDetails/CitieDetails.css'

const CitieDetails = () => {

    const { id } = useParams()

    const [item, setItem] = useState(null);

    useEffect(() => {

        axios.get(`http://localhost:8000/api/cities/${id}`)
            .then(response => setItem(response.data.citie))
            .catch(err => console.log(err))
    }, [id])

    if (!item) {
        return <p>Cargando...</p>;
    }

    console.log(item)


    return (
        <div className="contDC" style={{ backgroundImage: `url(${item.img})` }}>
            <div className="contTop">
                <section className="contInf">
                    <h2 className="titleInf">{item.name}</h2>
                    <p>Country: {item.country}</p>
                    <p>Currency: {item.currency}</p>
                    <p>{item.description}</p>
                    <LinkRouter className="btnCitie" to={'/cities'}>Cities</LinkRouter>
                </section>
                <figure className="contImg">
                    <img className="flagImg" src={item.flag} alt="bandera" />
                </figure>
            </div>
            <div className="contBot">
                <iframe className="frameMap" src={item.map} width="600" height="450"></iframe>
            </div>
        </div>
    )
}

export default CitieDetails