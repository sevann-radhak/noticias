import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <a className="brand-logo center" href="/">
            <nav>
                <div className="nav-wrapper light-blue darken-3 completo">
                    {props.titulo}
                </div>
            </nav>
        </a>
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;