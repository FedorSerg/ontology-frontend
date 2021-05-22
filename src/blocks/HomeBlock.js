import {useEffect, useState} from 'react';

const HomeBlock = () => {
    const [instances, setInstances] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/ontology/1/instances')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setInstances(data)
            });
    }, []);

    return (
        <div className="container">
            <h4 className="display-4">Стартовая страница</h4>
            <br/>
            <p>
                Перед началом работы вы можете загрузить на сайт онтологию в формате OWL/XML. Все классы, сущности и отношения будут загружены в базу для дальнейшей работы.
            </p>
            <p align="center">
                <a className="btn btn-secondary" href="/upload-ontology" role="button">Загрузить онтологию »</a>
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}

export default HomeBlock;