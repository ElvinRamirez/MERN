import React, { useState } from  'react';

const Form = (props) =>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError,setFirstNameError] = useState("");

    //validations
    // const firstNameValidation = (e) =>{
    //     setFirstName(e.target.value);
    //     if(e.target.value.length < 2){
    //         setFirstNameError("Field must be at least 2 characters")
    //     } else {
    //         setFirstNameError("");
    //     }
    // }
    const createUser = (e) =>{
        //To keep state from being reset:
        e.preventDefault();

    //     const newUser = { firstName,lastName, email, password};
    //     setFirstName("");
    //     setlastName("");
    //     setEmail("");
    //     setPassword("");
    };

    return(
        <div>
            <form onSubmit= {createUser}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"  onChange={ (e) => setFirstName(e.target.value)} value={firstName}/>
                </div>
                {firstName.length<2 && firstName.length > 0 ?(
                    <p>First Name must be at least 2 characters</p>
                ) : null }
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={ (e) => setlastName(e.target.value) }value={lastName}/>
                </div>
                {lastName.length<2 && lastName.length > 0 ?(
                    <p>Last Name must be at least 2 characters</p>
                ) : null }
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } value={email}/>
                </div>
                {email.length<5 && email.length > 0 ?(
                    <p>Email must be at least 5 characters</p>
                ) : null }
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password}/>
                </div>
                {password.length<8 && password.length > 0 ?(
                    <p>Password must be at least 8 characters</p>
                ) : null }
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </div>
                {confirmPassword.length===0 ?(""):
                confirmPassword !== password ?(
                    <p>Passwords must match</p>
                ) : null }
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