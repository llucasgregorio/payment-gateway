import React from 'react';
import './App.css';
import '../../styles/global.css';
import Header from '../../components/Header/header'
import image from '../../assets/images/payment1.svg'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
          <div className = "div__background">

            <section className="section__texto">
              <div className="texto__esquerdo">
                <h1>O melhor sistema de pagamento do Brasil</h1>
                <p>Faça e receba pagamentos de forma simplificada em uma unica plataforma</p>
              </div>

              <div className="imagem__direito">
                <img src={image} alt="Ilustração de uma pessoa com um celular"></img>
              </div>
            </section>
          </div>

          <section>
            <p> ALGUMA COISA CJODJOJDJDOWJJWIDOWJDIWJD</p>
          </section>

          <section>
            <h2> ALGUMA COISA DIJDIDD</h2>
          </section>
        </main>
    </div>
  );
}

export default App;
