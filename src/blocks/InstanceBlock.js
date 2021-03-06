import {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

const InstanceBlock = () => {
    const {id} = useParams();
    const [instances, setInstances] = useState(null);
    const [instance, setInstance] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/ontology/' + id + '/instances')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setInstances(data)
            });
    }, []);

    const handlePost = () => {
        fetch('http://localhost:8080/api/ontology/1/instances', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(instance)
        }).then(() => {
            console.log('success');
        })
    }

    return (
        <div className="container">
            <h4 className="display-4">Список индивидов</h4>
            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col"/>
                    <th scope="col">Имя</th>
                    <th scope="col">Класс</th>
                    <th scope="col">Атрибуты</th>
                    <th scope="col">Отношения</th>
                    <th scope="col"/>
                </tr>
                </thead>
                <tbody>
                {instances && instances.map((instance) => (
                    <tr>
                        <th scope="row">{instance.id}</th>
                        <td><b>{instance.name}</b></td>
                        <td>{instance.classType}</td>
                        <td>{instance.attributes.map(function (attr) {
                            return (<li>{attr.name}: {attr.value}</li>)
                        })}</td>
                        <td>{instance.relations.map(function (rel) {
                            return (<li>{rel.name}: {rel.classInstanceName}</li>)
                        })}</td>
                        <td>
                            <button className="btn btn-secondary" type="button">
                                Удалить
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <th scope="row"/>
                    <td>
                        <Link className="btn btn-secondary" to={'/ontology/' + id + '/instance-create'}
                              role="button">
                            Добавить
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default InstanceBlock;