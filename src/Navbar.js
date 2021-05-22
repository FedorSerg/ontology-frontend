const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="/">Ontology Project</a>
            <div className="collapse navbar-collapse" id="navbarMain">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <a className="nav-link" href="/ontology">Онтологии</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/class">Классы</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/instance">Индивиды</a>
                    </li>

                    <li className="nav-item">
                        <span className="nav-link active">Выбранная онтология: 1</span>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;