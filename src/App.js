import Navbar from './Navbar';
import HomeBlock from './blocks/HomeBlock';
import OntologyBlock from "./blocks/OntologyBlock";
import ClassBlock from './blocks/ClassBlock';
import InstanceBlock from './blocks/InstanceBlock';

import {useState, createContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const OntologyIdContext = createContext(0);

function App() {
    const [OntologyIdContext, setOntologyId] = useState();

    const handleOntologyChoosing = (ontologyId) => {
        console.log('ontologyId');
        console.log(ontologyId);
        setOntologyId(ontologyId);
    }

    return (
        <Router>
            <div className="App">
                <Navbar />
                <main className="jumbotron">
                    <div className="container">
                        <Switch>
                            <Route exact path="/"><HomeBlock/></Route>
                            <Route exact path="/ontology">
                                <OntologyBlock handleOntologyChoosing={handleOntologyChoosing}/>
                            </Route>
                            <Route exact path="/class">
                                <ClassBlock />
                            </Route>
                            <Route exact path="/instance">
                                <InstanceBlock />
                            </Route>
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default App;
