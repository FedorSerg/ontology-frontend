import Navbar from './Navbar';
import HomeBlock from './blocks/HomeBlock';
import OntologyBlock from "./blocks/OntologyBlock";
import OntologyCreateBlock from "./blocks/OntologyCreateBlock";
import ClassBlock from './blocks/ClassBlock';
import ClassCreateBlock from './blocks/ClassCreateBlock';
import InstanceBlock from './blocks/InstanceBlock';
import InstanceCreateBlock from './blocks/InstanceCreateBlock';
import AttributeCreateBlock from './blocks/AttributeCreateBlock';
import RelationCreateBlock from './blocks/RelationCreateBlock';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState} from "react";

function App() {
    const [ontologyIdVar, setOntologyIdVar] = useState(0);

    const handleOntologyChoosing = (ontologyId) => {
        setOntologyIdVar(ontologyId);
    }

    return (
        <Router>
            <div className="App">
                <Navbar id={ontologyIdVar}/>
                <main className="jumbotron">
                    <div className="container">
                        <Switch>
                            <Route exact path="/"><HomeBlock/></Route>
                            <Route exact path="/ontology">
                                <OntologyBlock handleOntologyChoosing={handleOntologyChoosing}/>
                            </Route>
                            <Route exact path="/ontology-create">
                                <OntologyCreateBlock />
                            </Route>
                            <Route exact path="/ontology/:id/class">
                                <ClassBlock />
                            </Route>
                            <Route exact path="/ontology/:id/class-create">
                                <ClassCreateBlock />
                            </Route>
                            <Route exact path="/ontology/:id/instance">
                                <InstanceBlock />
                            </Route>
                            <Route exact path="/ontology/:id/instance-create">
                                <InstanceCreateBlock />
                            </Route>
                            <Route exact path="/ontology/:id/attribute-create">
                                <AttributeCreateBlock />
                            </Route>
                            <Route exact path="/ontology/:id/relation-create">
                                <RelationCreateBlock />}/>
                            </Route>
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default App;
