import {useState} from "react";
import {useHistory, useParams} from "react-router-dom";

const ClassCreateBlock = () => {
    const {id} = useParams();
    const history = useHistory();

    const [name, setName] = useState('');
    const [attributes, setAttributes] = useState('');
    const [relations, setRelations] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newClass = {name, attributes, relations};

        fetch('http://localhost:8080/api/ontology/' + id + '/class', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newClass)
        }).then(() => {
            history.push("/class");
            window.location.reload();
        })
    }

    return (
        <div className="container">
            <h4 className="display-4">Добавить класс</h4>
            <br/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputName">Имя класса</label>
                <input className="form-control"
                       id="inputName"
                       placeholder="Class_name"
                       type="text"
                       required
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <label htmlFor="inputName">Cуперклассы</label>
                <input className="form-control"
                       id="inputName"
                       placeholder="Class_one, Class_two"
                       type="text"
                />
                <small id="emailHelp" className="form-text text-muted">Перечислите имена
                    родительских классов через запятую</small>
                <br/>
                <label htmlFor="inputAttributes">Свойства класса</label>
                <input className="form-control"
                       id="inputAttributes"
                       placeholder="Attribute_one, Attribute_two"
                       type="text"
                       required
                       value={attributes}
                       onChange={(e) => setAttributes(e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">Перечислите имена свойств
                    (атрибутов) через запятую</small>
                <br/>
                <label htmlFor="inputRelations">Отношения класса</label>
                <input className="form-control"
                       id="inputRelations"
                       placeholder="Relation_one, Relation_two"
                       type="text"
                       required
                       value={relations}
                       onChange={(e) => setRelations(e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">Перечислите имена отношений
                    через запятую</small>
                <br/>
                <button className="btn btn-secondary">Создать</button>
            </form>
            <br/>
            <p>
                Созданный класс появится в списке классов выбранной онтологии.
            </p>
        </div>
    );
}

export default ClassCreateBlock;