import {useEffect, useState} from 'react';

const OntologyBlock = ({handleOntologyChoosing}) => {
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
        <div className="container">
            <h4 className="display-4">Список онтологий</h4>
            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col" width="20%"/>
                    <th scope="col" width="50%">Имя</th>
                    <th scope="col" width="30%"/>
                </tr>
                </thead>
                <tbody>
                {ontologies && ontologies.map((ontology) => (
                    <tr>
                        <th scope="row">{ontology.id}</th>
                        <td><b>{ontology.name}</b></td>
                        <td>
                            <button className="btn btn-secondary" type="button"
                                    onClick={() => handleOntologyChoosing(ontology.id)}>
                                Выбрать
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <th scope="row"/>
                    <td>
                        <button className="btn btn-secondary" type="button"
                                id="createButton">
                            Добавить
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OntologyBlock;