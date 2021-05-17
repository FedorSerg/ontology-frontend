const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="/">Ontology Project</a>
            <div className="collapse navbar-collapse" id="navbarMain">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Классы</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Индивиды</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Отношения</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Атрибуты</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;