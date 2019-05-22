import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    // Creamos los ref
    categoriaRef = React.createRef();
    paisRef = React.createRef();

    cambiarCategoria = (e) => {
        e.preventDefault();

        // Enviar por props
        this.props.consultarNoticias(this.categoriaRef.current.value, this.paisRef.current.value);
    }

    render() {
        return (
            <div className="row buscador">
                <div className="col s-12 m8 offset-m2">
                    <form onSubmit={this.cambiarCategoria}>
                        <h2>Noticias por Categoría</h2>
                        <div className="input-field col s12 m8">
                            <select ref={this.categoriaRef} className="selects" id="categoria">
                                <option value="general" defaultValue>General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>

                            <select ref={this.paisRef} className="selects">
                                <option value="co" defaultValue>Colombia</option>
                                <option value="mx">México</option>
                                <option value="ar">Argentina</option>
                                <option value="us">Estados Unidos</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input type="submit" className="btn amber darken-2" value="Buscar" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Formulario.propTypes = {
    consultarNoticias: PropTypes.func.isRequired
}

export default Formulario;