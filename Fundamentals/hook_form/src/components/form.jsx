import React, { useState } from  'react';

const Form = (props) =>{

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) =>{
        //To keep state from being reset:
        e.preventDefault();

    //     const newUser = { firstName,lastName, email, password};
    //     setfirstName("");
    //     setlastName("");
    //     setEmail("");
    //     setPassword("");
    };

    return(
        <div>
            <form onSubmit= {createUser}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={ (e) => setfirstName(e.target.value) } value={firstName}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={ (e) => setlastName(e.target.value) }value={lastName}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } value={email}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password}/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </div>
                <div>
                    <input type="submit" value="Create User" />
                </div>
            </form>
            <div>
                <h3>Your Form Data</h3>
            </div>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};
export default Form;