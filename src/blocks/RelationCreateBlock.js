const RelationCreateBlock = () => {

    return (
        <div className="container">
            <h4 className="display-4">Создать отношение</h4>
            <br/>
            <label htmlFor="inputName">Имя отношения</label>
            <input className="form-control" id="inputName" placeholder="Relation_name"/>
            <br/>
            <label htmlFor="inputName">Имя класса-источника</label>
            <input className="form-control" id="inputName" placeholder="Domain_class"/>
            <br/>
            <label htmlFor="inputName">Имя класса-цели</label>
            <input className="form-control" id="inputName" placeholder="Range_class"/>
        </div>
    );
}

export default RelationCreateBlock;