import Navbar from './Navbar';
import InstanceBlock from './InstanceBlock';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <main className="jumbotron">
                <div className="container">

                    <InstanceBlock/>
                </div>
            </main>
        </div>
    );
}

export default App;
