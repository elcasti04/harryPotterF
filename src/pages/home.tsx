import { useNavigate } from "react-router-dom";
import './home.css'

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="hero">
        <h1>¿Qué vamos a ver hoy?</h1>
      </div>

      <div className="contenedor-card">
        <div 
          className="movie-card" 
          onClick={() => navigate("/saga/harry-potter")}>
          <img 
            src="img/HarryPotter.jfif" 
            alt="Harry Potter" 
          />
          <div className="content">
            <h4>Harry Potter</h4>
            <p>
              La magia espera...
            </p>
          </div>
        </div>

        <div 
          className="movie-card" 
          onClick={() => navigate("/saga/crepusculo")}>
          <img 
            src="img/crepusculo.jfif" 
            alt="Crepúsculo" 
          />
          <div className="content">
            <h4>Crepúsculo</h4>
            <p>
              Amor eterno...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
