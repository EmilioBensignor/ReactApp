import "./App.css";
import foto from "/images/mujer.png";
import calcularEdad from "./utils/calcularEdad.jsx";

import ProductsContainer from "./components/ProductsContainer.jsx";
import Card from "./components/Card.jsx";

function App() {
  let name = "Lucas";
  let nacimiento = 2001;
  let empleado = true;
  let titulo = <h2>Hola Mundo</h2>;

  return (
    <>
      <h1 className="color">Semana 7</h1>
      {titulo}
      <p>
        Hola {name.toUpperCase()} de {calcularEdad(nacimiento)} anios
      </p>
      <ProductsContainer>
        <Card name="Mouse Pro" price={25000} />
        <Card name="Teclado Pro" price={50000} />
        <Card name="Headphones Pro" price={55000} />
      </ProductsContainer>
      {/* <img src={foto} alt={`Foto de ${name}`} className="mujer" /> */}
    </>
  );
}

export default App;
