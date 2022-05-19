import React, {Component} from 'react';

/* function Boton(props) {
    return(
        <button onClick={props.myOnClick}>Boton Componente</button>
    )
} */

/* const Boton = (props) => <button onClick={props.myOnClick}>Boton Componente</button>; */

const Boton = ({myOnClick}) => <button onClick={myOnClick}>Boton Componente</button>;

export class EventosEs6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar() {
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar() {
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase ES6</h2>
                <nav>
                    <button onClick={this.restar}>-</button>
                    <button onClick={this.sumar}>+</button>
                    <h3>{this.state.contador}</h3>
                </nav>
            </div>
        )
    }
}

//Properties Initializer
export class EventosEs7 extends Component {
    
    state = {
        contador: 0,
    };

    sumar = () => {
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar = () => {
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.restar}>-</button>
                    <button onClick={this.sumar}>+</button>
                    <h3>{this.state.contador}</h3>
                </nav>
            </div>
        )
    }
}

export class MasEventos extends Component {
    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(mensaje);
    }
    
    render() {
        return (
            <div>
                <h2>Más sobre eventos</h2>
                <button onClick={(e) => 
                    this.handleClick(e, "Hola pasando parametro desde un evento") 
                }>
                    Saludar
                </button>
                
                {/* Evento personalizado */}
                {/* <Boton onClick={(e) => 
                    this.handleClick(e, "Hola pasando parametro desde un evento") 
                }/> */}
                <Boton myOnClick={(e) => 
                    this.handleClick(e, "Hola pasando parametro desde un evento 2") 
                }/>
            </div>
        ) 
    }
}