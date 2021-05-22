import {useEffect, useState} from 'react';

const ClassBlock = () => {
    const [classes, setClasses] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/ontology/1/classes')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setClasses(data)
            });
    }, []);

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

export default ClassBlock;