import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

const ClassBlock = () => {
    const {id} = useParams();
    const [classes, setClasses] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/ontology/' + id + '/classes'
        ).then(res => {
            return res.json();
        }).then(data => {
            setClasses(data)
        });
    }, []);

    const handleDelete = (classId) => {
        console.log('-> ' + id + ' delete ' + classId);
        fetch('http://localhost:8080/api/ontology/' + id + '/class/' + classId, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload();
        })
    }

    return (
        <div className="container">
            <h4 className="display-4">Список классов</h4>

            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col"/>
                    <th scope="col">Имя</th>
                    <th scope="col">Суперклассы</th>
                    <th scope="col">Атрибуты</th>
                    <th scope="col">Отношения</th>
                    <th scope="col"/>
                </tr>
                </thead>
                <tbody>
                {classes && classes.map((classEntity) => (
                    <tr>
                        <th scope="row">{classEntity.id}</th>
                        <td><b>{classEntity.name}</b></td>
                        <td>{classEntity.superclassName}</td>
                        <td>{classEntity.attributes.map(function (attr) {
                            return (<li>{attr.name} ({attr.range})</li>)
                        })}</td>
                        <td>{classEntity.relations.map(function (rel) {
                            return (<li>{rel.name} ({rel.domain} -> {rel.range})</li>)
                        })}</td>
                        <td>
                            <button className="btn btn-secondary" type="button"
                                    onClick={() => handleDelete(classEntity.id)}>
                                Удалить
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <th scope="row"/>
                    <td>
                        <Link className="btn btn-secondary" to={'/ontology/' + id + '/class-create'}
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

export default ClassBlock;