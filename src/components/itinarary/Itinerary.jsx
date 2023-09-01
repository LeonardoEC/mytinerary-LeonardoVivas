import '../itinarary/Itinerary.css'

import { useState } from "react"

const Itinerary = ({ title, foto, nombre, apellido, description, like, price, duration, hashtag }) => {

    let [showActivitis, setShowActivitis] = useState(false)

    let simulador = [2]

//--------------------------------------------------------------------------------------
    const handleShowActivities = () => {
        setShowActivitis(!showActivitis)
    }
//-------------------------------------------------------------------------------------//

    const Dollar = () => {
        return <span>💵</span>
    }

    const DollarVisible = ({ cantidad }) => {
        const dollars = []

        for(let i = 0; i < cantidad; i++){
            dollars.push(<Dollar key={i} />)
        }

        return <div>{dollars}</div>
    }

    const initDollar = price

//-------------------------------------------------------------------------------//

    return (
        <div className="contItinerary">
            {/* datos */}
            <div className='infoItinerary'>
                <div className='topItinerary'>
                    <h3 className='titleItinerary'>{title}</h3>
                    <img className='userImg' src={foto} alt="foto" />
                    <p className='userName'>{nombre} {apellido}</p>
                </div>
                <div className='descItinerary'>
                    <h4 className='titleDescItinerary'>Description</h4>
                    <div className='desc'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto illum quisquam, vitae repellendus placeat ratione ipsum assumenda dolore veritatis ipsa numquam, molestiae similique commodi eaque voluptates rerum magni sapiente quod.</p>
                    </div>
                </div>
                <div className='likeItinerary'>
                    <p className='subTitle'>Likes</p>
                    <p className='item'>{like}</p>
                </div>
                <div className='dataItinerary'>
                    <div>
                        <p className='subTitle'>Price</p>
                        <DollarVisible cantidad={initDollar}/>
                    </div>
                    <div>
                        <p className='subTitle'>Duration</p>
                        <p className='item'>{duration}hrs</p>
                    </div>
                </div>
                <div>
                    <p className='item'> {hashtag} </p>
                </div>
                <button className='btnItinarary' onClick={handleShowActivities} > ↓ </button>
            </div>
            {/* actividades + comentarios */}
            <div className='contActividades'>
                {/* <h3>Activiti</h3> */}
                <div className='itemAct'>
                    {
                        showActivitis
                            ? simulador.map(() => (
                                <div className='actividades'>
                                    <h3>We're sorry, but this site is still under construction.</h3>
                                </div>
                            ))
                            : null
                    }
                </div>
            </div>

        </div>
    )
}

export default Itinerary