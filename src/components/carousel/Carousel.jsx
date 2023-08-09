import { useState, useEffect } from "react"
import '../carousel/Carousel.css'

const Carousel = () => {

  const [indiceCiudad, setIndiceCiudad] = useState(0);

  const ciudad = [
    { id: 1, title: 'Ciudad1', locacizacion: 'Localizacion del ciudad 1', imageUrl: '' },
    { id: 2, title: 'Ciudad2', locacizacion: 'Localizacion del ciudad 2', imageUrl: '' },
    { id: 3, title: 'Ciudad3', locacizacion: 'Localizacion del ciudad 3', imageUrl: '' },
    { id: 4, title: 'Ciudad4', locacizacion: 'Localizacion del ciudad 4', imageUrl: '' },
    { id: 5, title: 'Ciudad5', locacizacion: 'Localizacion del ciudad 5', imageUrl: '' },
    { id: 6, title: 'Ciudad6', locacizacion: 'Localizacion del ciudad 6', imageUrl: '' },
    { id: 7, title: 'Ciudad7', locacizacion: 'Localizacion del ciudad 7', imageUrl: '' },
    { id: 8, title: 'Ciudad8', locacizacion: 'Localizacion del ciudad 8', imageUrl: '' },
    { id: 9, title: 'Ciudad9', locacizacion: 'Localizacion del ciudad 9', imageUrl: '' },
    { id: 10, title: 'Ciudad10', locacizacion: 'Localizacion del ciudad 10', imageUrl: '' },
    { id: 11, title: 'Ciudad11', locacizacion: 'Localizacion del ciudad 11', imageUrl: '' },
    { id: 12, title: 'Ciudad12', locacizacion: 'Localizacion del ciudad 12', imageUrl: '' },
  ];

  const mostrar = {
    mostrarCarta: 4,
    movimiento: 1,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceCiudad((prev) =>
        prev === ciudad.length - mostrar.mostrarCarta ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [ciudad.length, mostrar.mostrarCarta]);

  const handleNext = () => {
    setIndiceCiudad((prev) =>
      prev === ciudad.length - mostrar.mostrarCarta ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setIndiceCiudad((prev) =>
      prev === 0 ? ciudad.length - mostrar.mostrarCarta : prev - 1
    );
  };

  return (


    <div className="containerMain">

      <button className="botRuleta" onClick={handlePrev}>{"<"}</button>

      <div className="contCards">

        {ciudad.slice(indiceCiudad, indiceCiudad + mostrar.mostrarCarta).map((item) => (
          <div key={item.id}
            className="cardRuleta"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <h3>{item.title}</h3>
            <p>{item.locacizacion}</p>
            <button className="cardButton">More info</button>
          </div>
        ))}

      </div>
      <button className="botRuleta" onClick={handleNext}>{">"}</button>
    </div>

  );

}

export default Carousel

