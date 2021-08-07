import {useState} from "react";

import HeaderDecoration from "./atoms/HeaderDecoration";

const HomeContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const validateStyle = {
        color: "red"
    }

    const validateName = name => {
        const re = /^[a-zA-Z]+$/
        console.log(re.test(String(name).toLowerCase()))
        return name.length !== 0 ? re.test(String(name).toLowerCase()) : false;
    }

    const validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(email).toLowerCase()))
        return email.length !== 0 ? re.test(String(email).toLowerCase()) : false;
    }

    const validateMessage = message => {
        const length = message.length;
        console.log(length > 120 ? true : false);
        return length > 120 ? true : false;
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        validateName(name);
        validateEmail(email);
        validateMessage(message);
    }
    return (
        <div className="form-section">
            <HeaderDecoration text1="Contact us!" />
            <form onSubmit={handleOnSubmit}>
                <div className="user-data">
                    <label>
                        Type your name
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            placeholder="John"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            style={name.length === 0 || validateName(name) ? null : {borderBottom: "1px solid red"}}
                        />
                        {(name.length === 0 || validateName(name)) ? null : <span style={validateStyle}>The given name is incorrect</span>}
                    </label>
                    <label>
                        Type your email
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="xyz@abc.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            style={email.length === 0 || validateEmail(email) ? null : {borderBottom: "1px solid red"}}
                        />
                        {(email.length === 0 || validateEmail(email)) ? null : <span style={validateStyle}>The given email is incorrect</span>}
                    </label>
                </div>

                <div className="user-message">
                    <label htmlFor="message">Type your message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="4" 
                        cols="40" 
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        style={message.length === 0 || validateMessage(message) ? null : {borderBottom: "1px solid red"}}
                        />
                        {(message.length === 0 || validateMessage(message)) ? null : <span style={validateStyle}>The message must be at least 120 characters long</span>}
                </div>
                <input id="submit" type="submit" value="Send" />
            </form>
        </div>
    );
}

export default HomeContactForm;