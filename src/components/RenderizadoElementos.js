import React, {Component} from 'react';
import data from '../helpers/data.json'

function ElementoLista(props) {
    return(
        <li>
            <a href={props.el.web} target="_blank" rel="noopener noreferrer">{props.el.name}</a>
        </li>
    )
}

export default class RenderizadoElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
        };
    }

    render() {
        return (
            <div>
                <h2>Renderizado de elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {this.state.seasons.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ol>
                <h3>Frameworks Frontend Javascript</h3>
                <ul>
                    {
                        data.frameworks.map(el => (
                            <ElementoLista el={el} key={el.id}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}