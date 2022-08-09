import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

export default function LoginForm() {


    const [inputFields, setInputFields] = useState({
        username: "",
        password: "",
        remember: true
    });

    const handleFormInput = (event) => {

        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setInputFields(fields => ({ ...fields, [name]: value }));
    }
    const database = [
        {
            username: "u",
            password: "p"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];


    const handleFormSubmit = (event) => {
        console.log(inputFields);
        event.preventDefault(); 

        const userdata = database.find((user) => inputFields.username === user.username);

        if (userdata) {
            if (userdata.password === inputFields.password) {
                console.log("match");
            } else {
                console.log("unmatch");
            }

        }

    }




    return (

        <div className="container">
            <div className="card">

                <div className="card-header">
                    <h3>Sign In</h3>
                    <div className="d-flex justify-content-end social_icon">
                        {/* <span> <FontAwesomeIcon icon={faHome} /><i className="fab fa-facebook-square"></i></span> */}
                        <span><i className="fab fa-google-plus-square"></i></span>
                        <span><i className="fab fa-twitter-square"></i></span>
                    </div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleFormSubmit}>
                        <div className="row">

                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i>
                                            <FontAwesomeIcon icon={faUser} />
                                        </i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="User Name" name="username" value={inputFields.username}
                                    onChange={handleFormInput}
                                />

                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i>
                                            <FontAwesomeIcon icon={faKey} />
                                        </i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Password" name="password" value={inputFields.password}
                                    onChange={handleFormInput}
                                />

                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox"
                                    name="remember"
                                    checked={inputFields.remember}
                                    onChange={handleFormInput} />Remember Me
                            </div>

                            <div className="form-group">
                                <button className='btn float-right login_btn btn-primary btn-sm' type='submit' disabled={inputFields.username === "" || inputFields.password === ""}>Login</button>
                            </div>

                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                        Don't have an account?
                        <Link to="/registration">Sign Up</Link>
                       
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/forgetPassword">Forgot your password?</Link>
                    </div>
                </div>
            </div>
        </div>

    );



} 