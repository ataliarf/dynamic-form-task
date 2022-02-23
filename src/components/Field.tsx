 
import React from 'react';
 
const Field = (props: any) =>
{
    switch (props.element.type) {
        case 'boolean':
            return ( 
                <div className="row">
                    <div className="leftCol">
                        <label>{props.element.label}</label>
                    </div>
                    <div className="rightCol">
                        <input onClick={() => props.handleClick(props.element.key)}
                            type="checkbox"
                            width={props.element.width}
                            required={props.element.required}/>      
                    </div>
                </div>
                )
        case 'options': 
        return (
            <div className="row">
                <div className="leftCol">
                    <label>{props.element.label}</label>
                </div>
                <div className="rightCol">
                    <select onChange={event => props.handleChange(props.element.key, event)}>
                        <option value={'choose'}> {'choose'} </option>
                        {props.element && props.element.options && props.element.options.length > 0 && props.element.options.map((option: any) =>
                            <option value={option}>{option}</option>)}
                    </select>
                </div>
            </div>
           )
        case 'gender':
            return (
                <div className="row">
                    <div className="leftCol">
                        <label>{props.element.label}</label>
                    </div>
                    <div className="rightCol">
                        <select onChange={event => props.handleChange(props.element.key, event)}>
                            <option value={'choose'}> {'choose'} </option>
                            <option value={'Female'}>{'Female'}</option>
                            <option value={'Male'}>{'Male'}</option>
                            <option value={'Other'}>{'Other'}</option>
                        </select>
                    </div>
                </div>
                )
        default:
            return (
                <div className="row">
                    <div className="leftCol">
                        <label>{props.element.label}</label>
                    </div>
                    <div className="rightCol">
                        <input
                            onChange={event => props.handleChange(props.element.key, event)}
                            width={props.element.width}
                            required={props.element.required}
                            placeholder={props.element.placeholder}
                            type={props.element.type}/>      
                    </div>
                </div>
             )
    }
}
 
export default Field
 
 
 
 
 