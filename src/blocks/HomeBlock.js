const HomeBlock = () => {

    return (
        <div className="container">
            <h4 className="display-4">Стартовая страница</h4>
            <br/>
            <p>
                Перед началом работы вы можете загрузить на сайт онтологию в формате OWL/XML. Все классы, сущности и отношения будут загружены в базу для дальнейшей работы.
            </p>
            <br />
            <p align="center">
                <a className="btn btn-secondary" href="/upload-ontology" role="button">Загрузить онтологию »</a>
            </p>

        </div>
    );
}

export default HomeBlock;