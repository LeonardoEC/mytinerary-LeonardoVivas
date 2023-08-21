import '../card/Card.css'

const Card = ({title, subtitle, bgImg}) => {
    return (
        <article className='card' style={{ backgroundImage: `url(${bgImg})` }}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </article>
    )
}

export default Card