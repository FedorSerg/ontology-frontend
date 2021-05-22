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
                    <li>&nbsp;&nbsp;&nbsp;</li>
                    <li>&nbsp;&nbsp;&nbsp;</li>
                    <li>&nbsp;&nbsp;&nbsp;</li>
                    <li className="nav-item">
                        <span align="right" className="nav-link active">Выбранная онтология: Family</span>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;