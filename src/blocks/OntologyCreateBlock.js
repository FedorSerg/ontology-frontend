import {useState} from "react";
import {useHistory} from "react-router-dom";

const OntologyCreateBlock = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const ontology = {id, name};

        fetch('http://localhost:8080/api/ontology', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ontology)
        }).then(() => {
            history.push("/ontology");
            window.location.reload();
        })
    }

    return (
        <div className="container">
            <h4 className="display-4">Добавить онтологию</h4>
            <br/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputName">Имя онтологии</label>
                <input
                    className="form-control"
                    id="inputName"
                    placeholder="Ontology_name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <button className="btn btn-secondary">Создать</button>
            </form>
            <br/>
            <p>
                Созданная онтология появится в списке и сразу станет доступна для выбора.
            </p>
        </div>
    );
}

export default OntologyCreateBlock;