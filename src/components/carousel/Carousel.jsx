import { useState, useEffect } from "react"
import '../carousel/Carousel.css'
import {Link as LinkRouter} from 'react-router-dom'

const Carousel = () => {

  const [indiceCiudad, setIndiceCiudad] = useState(0);

  const ciudad = [
    { id: 1, title: 'Berlín', locacizacion: 'German', imageUrl: 'https://cdn.pixabay.com/photo/2013/10/28/18/52/brandenburger-tor-201940_1280.jpg' },
    { id: 2, title: 'London', locacizacion: 'England', imageUrl: 'https://cdn.pixabay.com/photo/2017/03/22/11/17/london-2164680_1280.jpg' },
    { id: 3, title: 'Moscow', locacizacion: 'Russia', imageUrl: 'https://cdn.pixabay.com/photo/2023/08/05/18/43/ai-generated-8171609_1280.jpg' },
    { id: 4, title: 'Washington', locacizacion: 'USA', imageUrl: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1087&q=80' },
    { id: 5, title: 'Seoul', locacizacion: 'South Korea', imageUrl: 'https://images.unsplash.com/photo-1546874177-9e664107314e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' },
    { id: 6, title: 'Tokyo', locacizacion: 'Japan', imageUrl: 'https://cdn.pixabay.com/photo/2023/03/17/09/43/ai-generated-7858262_1280.jpg' },
    { id: 7, title: 'Rome', locacizacion: 'Italy', imageUrl: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80' },
    { id: 8, title: 'París', locacizacion: 'France', imageUrl: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
    { id: 9, title: 'Beijing', locacizacion: 'China', imageUrl: 'https://images.unsplash.com/photo-1537410056906-d336ddf64024?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80' },
    { id: 10, title: 'Mexico City', locacizacion: 'Mexico', imageUrl: 'https://images.unsplash.com/photo-1601585196071-0f4fe6714a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80' },
    { id: 11, title: 'Brasilia', locacizacion: 'Brazil', imageUrl: 'https://images.unsplash.com/photo-1616122684194-650851c800ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80' },
    { id: 12, title: 'Buenos Aires', locacizacion: 'Argentina', imageUrl: 'https://images.unsplash.com/photo-1558548661-79efbfb63c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' },
  ];

  const mostrar = {
    mostrarCarta: 4,
    movimiento: 4,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceCiudad((prev) =>
        prev === ciudad.length - mostrar.mostrarCarta ? 0 : prev + 4
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [ciudad.length, mostrar.mostrarCarta]);

  const siguiente = () => {
    setIndiceCiudad((prev) =>
      prev === ciudad.length - mostrar.mostrarCarta ? 0 : prev + 4
    );
  };

  const previo = () => {
    setIndiceCiudad((prev) =>
      prev === 0 ? ciudad.length - mostrar.mostrarCarta : prev - 4
    );
  };

  return (
    <div>
      <h2 className="tituloCarousel">Popular Mytineraries</h2>
      <div className="containerMain">

        <button className="botRuleta" onClick={previo}>←</button>

        <div className="contCards">

          {ciudad.slice(indiceCiudad, indiceCiudad + mostrar.mostrarCarta).map((item) => (
            <div key={item.id}
              className="cardRuleta"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <h3 className="cardTitle">{item.title}</h3>
              <p className="cardText"><img className="cardLogo" src="icon-location.svg" alt="logo" />{item.locacizacion}</p>
              <LinkRouter to={'/cities'} className="cardButton">More info</LinkRouter>
            </div>
          ))}

        </div>
        <button className="botRuleta" onClick={siguiente}>→</button>
      </div>
    </div>



  );

}

export default Carousel

