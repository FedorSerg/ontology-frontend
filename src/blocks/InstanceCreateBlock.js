const InstanceCreateBlock = () => {

    return (
        <div className="container">
            <h4 className="display-4">Добавить индивида</h4>
            <br/>
            <label htmlFor="inputName">Имя индивида</label>
            <input className="form-control" id="inputName" placeholder="Instance_name"/>
            <br/>
            <label htmlFor="inputName">Классы индивида</label>
            <input className="form-control" id="inputName" placeholder="Class_one, Class_two"/>
            <small id="emailHelp" className="form-text text-muted">Перечислите имена классов через
                запятую</small>
            <br/>
            <label htmlFor="inputName">Задать значение свойства</label>
            <table width='100%'>
                <tr>
                    <td>
                        <small id="emailHelp" className="form-text text-muted">Укажите
                            свойство</small>
                    </td>
                    <td>
                        <small id="emailHelp" className="form-text text-muted">Укажите
                            имя целевого индивида</small>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input className="form-control" id="inputName"
                               placeholder="Attribute_name"/>
                    </td>
                    <td>
                        <input className="form-control" id="inputName"
                               placeholder="Range_value"/>
                    </td>
                </tr>
            </table>
            <button className="btn btn-secondary" type="button">
                <b>+</b>
            </button>
            <br/>
            <br/>
            <label htmlFor="inputName">Задать отношение</label>
            <table width='100%'>
                <tr>
                    <td>
                        <small id="emailHelp" className="form-text text-muted">Укажите
                            отношение</small>
                    </td>
                    <td>
                        <small id="emailHelp" className="form-text text-muted">Укажите
                            имя целевого индивида</small>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input className="form-control" id="inputName"
                               placeholder="Relation_name"/>
                    </td>
                    <td>
                        <input className="form-control" id="inputName"
                               placeholder="Range_individual"/>
                    </td>
                </tr>
            </table>
            <button className="btn btn-secondary" type="button">
                <b>+</b>
            </button>
            <br/>
            <br/>
            <p>
                Созданный индивид появится в списке индивидов выбранной онтологии.
            </p>
            <br/>
            <button className="btn btn-secondary" type="button">
                <b>Создать</b>
            </button>
        </div>
    );
}

export default InstanceCreateBlock;