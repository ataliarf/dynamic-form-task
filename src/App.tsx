import React from 'react';
import './App.css';
import {formScheme} from "./configuration/formScheme";

function App(){
    const dynamicFormScheme = formScheme
    return (
        <div className="App">
            This is where the dynamic form should be rendered
        </div>
    );
}

export default App;
