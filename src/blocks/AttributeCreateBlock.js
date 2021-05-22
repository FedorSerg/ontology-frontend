const AttributeCreateBlock = () => {

    return (
        <div className="container">
            <h4 className="display-4">Создать свойство (аттрибут)</h4>
            <br/>
            <label htmlFor="inputName">Имя свойства (атрибута)</label>
            <input className="form-control" id="inputName" placeholder="Attribute_name"/>
            <br/>
            <label htmlFor="inputName">Имя класса</label>
            <input className="form-control" id="inputName" placeholder="Domain_class"/>
            <br/>
            <label htmlFor="inputName">Тип значения</label>
                <select className="form-control" id="exampleFormControlSelect1">
                        <option>Integer (целочисленный)</option>
                        <option>String (строковый)</option>
                </select>
        </div>
    );
}

export default AttributeCreateBlock;