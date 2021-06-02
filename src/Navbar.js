import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({id}) => {
    const [ontologies, setOntologies] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/ontologies')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setOntologies(data)
            });
    }, []);

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link className="navbar-brand" to="/">Ontology Project</Link>
            <div className="collapse navbar-collapse" id="navbarMain">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/ontology">Онтологии</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/ontology/' + id + '/class'}>Классы</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                              to={'/ontology/' + id + '/instance'}>Индивиды</Link>
                    </li>
                    <li>&nbsp;&nbsp;&nbsp;</li>
                    <li>&nbsp;&nbsp;&nbsp;</li>
                    <li>&nbsp;&nbsp;&nbsp;</li>
                    {ontologies && ontologies.filter(i => i.id === id).map((ont) => (
                        <li className="nav-item">
                        <span className="nav-link active">
                            Выбранная онтология: {ont.name}
                        </span>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;