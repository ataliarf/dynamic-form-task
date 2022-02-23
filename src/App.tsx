import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import './form.css';
import { formScheme, IField } from "./configuration/formScheme";
import { useAuth } from '@frontegg/react';
import Field from './components/Field';


function App() {
    const { user, isAuthenticated } = useAuth();

    const dynamicFormScheme = formScheme;
    const [formFields, setformFields] = useState<IField[]>(dynamicFormScheme.formFields || []);
 

    const [isMissingRequierdField, setRequierd] = useState(false);
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
        formFields && formFields.map((element: IField) => {
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
        formFields && formFields.map((element: IField) => {
             if(element && element.required && (element.value=="" || element.value==false)){
                setRequierd(true);
                 if(element.label=="Do you agree to the terms of use?")
                    setName("Your agreement to the terms of use");
                else
                    setName(element.label);
                return;
             }
         })
         formFields && formFields.map((element: IField) => {
            console.log(element.key + ':' + ' ' + element.value);
            })
        }

    const handleClick = (key: string) => {
        formFields && formFields.map((element: IField) => {
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
                {formFields && formFields.map((element: IField) => {
                   return <div> 
                         <Field element={element}
                          handleChange={handleChange}
                           handleClick={handleClick}/> 
                        </div>
                })}
                 <div className="alert">{phoneError &&  <> Phone is not valid!</>}  </div>
                    <div className="alert">{emailError &&  <> Email is not valid!</>}  </div>
                    <div className="alert">{isMissingRequierdField && <> {nameOfEmptyField} is required</>}  </div>
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
            </div>
        </form>
    </div>

);
}

export default App;
