import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import Renderizado from './components/RenderizadoCondicional';
import RenderizadoElements from './components/RenderizadoElementos';
import {EventosEs6, EventosEs7, MasEventos} from './components/Eventos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un componente funcional expresado :D"/>
          <hr/>
          <Propiedades 
            cadena="Text" 
            numero={19} 
            booleano={true} 
            arreglo={[1,2,3]}
            objeto={{nombre: 'Miguel', correo: 'miguel@gmail.com'}}
            function={numero => numero * numero}
            elementoReact={<i>Elemento React</i>}
            componenteReact={<Componente msg="Soy un componente en una prop"/>}
          />
          <hr/>
          <Estado />
          <hr/>
          <Renderizado/>
          <hr/>
          <RenderizadoElements/>
          <hr/>
          <EventosEs6/>
          <hr/>
          <EventosEs7/>
          <hr/>
          <MasEventos/>
        </section>
      </header>
    </div>
  );
}

export default App;
