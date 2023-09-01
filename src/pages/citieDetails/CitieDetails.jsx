import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link as LinkRouter } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import Itinerary from '../../components/itinarary/Itinerary'


import '../citieDetails/CitieDetails.css'
import { get_citiesById } from "../../store/actions/citieActions"
import { get_itinerary } from "../../store/actions/itineraryActions"

const CitieDetails = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    const item = useSelector((citie) => citie.citieReducer.cities)
    const itemItinerary = useSelector((itinerary) => itinerary.itineraryReducer.itineraries)
    console.log(itemItinerary[0]?.user)

    // const [item, setItem] = useState(null);

    // const [itineary, setitineary] = useState(null);

    // const [user, setUser] = useState(null)



    useEffect(() => {

        dispatch(get_citiesById({id:id}))
        dispatch(get_itinerary({id:id}))

        // axios.get(`http://localhost:8000/api/cities/${id}`)
        //     .then(response => {
        //         setItem(response.data.citie);

        //         axios.get(`http://localhost:8000/api/itineraries/${response.data.citie.itineary}`)
        //             .then(response => {
        //                 setitineary(response.data.itinerary)

        //                 axios.get(`http://localhost:8000/api/users/${response.data.itinerary.user}`)
        //                 .then(response => setUser(response.data.user))
        //                 .catch(err => console.log(err));
        //             })
        //             .catch(err => console.log(err));
        //     })
        //     .catch(err => console.log(err));

    }, [dispatch,id])

    // console.log(item)
    // console.log(itineary)
    // console.log(user)

    if (!item) {
        return <p>Cargando...</p>;
    }

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
            <div className="ItineraryDet">
                {
                    itemItinerary?.length > 0 
                    ? itemItinerary?.map((item => {
                        return (
                            <Itinerary 
                            title={item.itineraryName} 
                            foto={item.user.userImg} 
                            nombre = {item.user.userName}
                            apellido = {item.user.userLastName}
                            description = {item.description}
                            like = {item.like}
                            price = {item.price}
                            duration = {item.duration}
                            hashtag = {[item.hashtag]}
                            />
                        )
                    }))
                    : <div className="NoIt">
                        <h2>Sorry, there are no itineraries for this city yet,<LinkRouter className="linkNotIt" to="/"> sign up </LinkRouter> to get updates on upcoming itineraries for these and many more cities</h2>
                    </div>
                }
            </div>
            <div className="contBot">
                <iframe className="frameMap" src={item.map} width="600" height="450"></iframe>
            </div>
            {/* <h1>{itineary?.price}</h1>
            <h1>{user?.userName}</h1> */}
        </div>
    )
}

export default CitieDetails