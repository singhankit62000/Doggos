import React from "react";
import Header from './Header';
import DogBreeds from "./DogBreeds";
import BreedImages from "./BreedImages";
import Random from "./Random";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App()
{
    return (
        <Router>
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={DogBreeds} />
                <Route path="/random" exact component={Random} />
                <Route path="/:name" exact component={BreedImages} />
            </Switch>
        </div>
        </Router>
    );
}

export default App;