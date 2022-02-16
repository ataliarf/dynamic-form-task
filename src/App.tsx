import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import './form.css';
import { formScheme, IField } from "./configuration/formScheme";
import { useAuth } from '@frontegg/react'


function App() {
    const { user, isAuthenticated } = useAuth();

    const dynamicFormScheme = formScheme;
    const [elements, setElements] = useState<IField[]>([]);
    useEffect(() => {
        setElements(dynamicFormScheme.formFields);
    }, [])

    const [missingRequierd, setRequierd] = useState(false);
    const [nameOfEmptyField, setName] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    
    function validateEmail(email: string) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validatePhoneNumber(phoneNumber: string) {
        var re = /^[\+][0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(phoneNumber);
    }

    const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        elements && elements.map((element: IField) => {
            if (key == element.key) {
                element.value = event.target.value;
                if(key=="emailAddress"){
                    if(!validateEmail(event.target.value))
                        setEmailError(true);
                    else
                        setEmailError(false);
                } 
                if(key=="phone"){
                    if(!validatePhoneNumber(event.target.value))
                    setPhoneError(true);
                else
                    setPhoneError(false);
                }
            }
        })
        setRequierd(false);
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        elements && elements.map((element: IField) => {
             if(element && element.required && (element.value=="" || element.value==false)){
                setRequierd(true);
                 if(element.label=="Do you agree to the terms of use?")
                    setName("Your agreement to the terms of use");
                else
                    setName(element.label);
                 return;
             }
         })
         elements && elements.map((element: IField) => {
            console.log(element.key + ':' + ' ' + element.value);
            })
        }

    const handleClick = (key: string) => {
        elements && elements.map((element: IField) => {
            if (key == element.key) {
                element.value = (!element.value);
                if(element.value)
                    setRequierd(false);
            }
        })
    }

    return (
    <div className="container">
        {isAuthenticated && (
        <div>
          <img src={user.profilePictureUrl} alt={user.name} />
          <span>{user.name}</span>
        </div>
      )}
        <form className="form">
            <div>
                {elements && elements.map((element: IField) => {
                    switch (element.type) {
                        case 'boolean':
                            return (
                                <div className="row">
                                    <div className="leftCol">
                                        <label>{element.label}</label>
                                    </div>
                                    <div className="rightCol">
                                        <input onClick={() => handleClick(element.key)}
                                            type="checkbox"
                                            width={element.width}
                                            required={element.required}/>      
                                    </div>
                                </div>)
                        case 'options': return (
                            <div className="row">
                                <div className="leftCol">
                                    <label>{element.label}</label>
                                </div>
                                <div className="rightCol">
                                    <select onChange={event => handleChange(element.key, event)}>
                                        <option value={'choose'}> {'choose'} </option>
                                        {element && element.options && element.options.length > 0 && element.options.map((option) =>
                                            <option value={option}>{option}</option>)}
                                    </select>
                                </div>
                            </div>)
                        case 'gender':
                            return (
                                <div className="row">
                                    <div className="leftCol">
                                        <label>{element.label}</label>
                                    </div>
                                    <div className="rightCol">
                                        <select onChange={event => handleChange(element.key, event)}>
                                            <option value={'choose'}> {'choose'} </option>
                                            <option value={'Female'}>{'Female'}</option>
                                            <option value={'Male'}>{'Male'}</option>
                                            <option value={'Other'}>{'Other'}</option>
                                        </select>
                                    </div>
                                </div>)
                        default:
                            return (
                                <div className="row">
                                    <div className="leftCol">
                                        <label>{element.label}</label>
                                    </div>
                                    <div className="rightCol">
                                        <input
                                            onChange={event => handleChange(element.key, event)}
                                            width={element.width}
                                            required={element.required}
                                            placeholder={element.placeholder}
                                            type={element.type}/>      
                                    </div>
                                </div>
                            )
                    }
                })}
                <div className="row">
                    <div className="alert">{phoneError &&  <> Phone is not valid!</>}  </div>
                    <div className="alert">{emailError &&  <> Email is not valid!</>}  </div>
                    <div className="alert">{missingRequierd && <> {nameOfEmptyField} is required</>}  </div>
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>
            </div>
        </form>
    </div>

    );
}

export default App;