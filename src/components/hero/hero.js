import React from 'react';
import logoSigma from '../../assets/img/sigma-logo.png';

function Hero() {
    return (
        <div className="hero-sigma">
            <div className="contenedor">
                <div className="logo-sigma">
                    <img src={logoSigma} alt="Logo-sigma" title="Logo-sigma" width="160" height=""/>
                </div>
                <div className="titulo-registro-sigma">
                    <h2>Prueba de desarrollo Sigma</h2>
                </div>
                <div className="descripcion-registro-sigma">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit morbi, a tincidunt congue taciti enim arcu imperdiet class consequat, nascetur purus conubia dui tempus suscipit sociis. Duis id blandit egestas pretium felis nullam mattis nisl, leo luctus maecenas accumsan mi faucibus.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;