import { useEffect, useRef, useState } from 'react'
import '../cities/Cities.css'
import Card from '../../components/card/Card'
import { Link as LinkRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { filter_cities, get_cities } from '../../store/actions/citieActions'



const Cities = () => {

    // const [cities, setCities] = useState()
    const cities = useSelector((cities) => cities.citieReducer.cities)
    console.log(cities)
    console.log(cities.itineary)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_cities())


        // axios.get('http://localhost:8000/api/cities?name=')
        //     .then(response => setCities(response.data.cities))
        //     .catch(err => console.log(err))
    }, [dispatch])

    const inpSearch = useRef()
    

    const inputSearch = async ()=>{

        // const citie = inpSearch.current.value
        // console.log(citie)

        try {
            dispatch(filter_cities({
                name: inpSearch.current.value
            }))
            // const response = await axios.get(`http://localhost:8000/api/cities?name=${citie}`)
            // setCities(response.data.cities)
        } catch(err){
            // if(err.response.status === 404){
            //     console.log('No se encontro la ciudad')
            //     setCities([])
            // } else{
            //     console.log(err)
            // }
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
                    <input ref={inpSearch} className="searchbar-inp" type="text" placeholder="Search your city" />
                    <button onClick={inputSearch}>Enviar</button>
                </div>
            </div>
            <div className='contCard'>
                {
                    cities?.length > 0
                    ? cities?.map((item => {
                        return (
                            <LinkRouter className='link' key={item._id} to={`/cities/${item._id}`}>
                                <Card title={item.name} subtitle={item.country} bgImg={item.img} />
                            </LinkRouter>
                        )
                    }))
                    : <h1>explota</h1>
                }
            </div>
        </main>
    )
}

export default Cities