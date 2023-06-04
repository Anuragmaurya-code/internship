
import './login.css'

import logo from "./logo.png"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import React, { useEffect, useState } from 'react';

export default function Login() {
    const [eye, setEye] = useState(false);
    const [formFields, setFormFields] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        // code here for submitting form which will be implemented after completion of backend
    }
    return <>
        <div className="container fontFamily">
            <div className="sections">
                <div className="section-1">
                    <img className="logoImg" src={logo} alt="err" />
                </div>
                <div className="line"></div>
                <div className="section-2">
                    <form className="loginForm">
                        <p className="loginP headingFontSize">Login</p>
                        <p className="loginDesc bodyTextFontSize">Welcome to Getfly Please login to your account</p>
                        <div className="input-fields">
                            <label htmlFor="college-id" className="bodyTextFontSize label">College Id <span className="red">*</span></label>
                            <input type="text" placeholder="id@pvppcoe.ac.in" />
                        </div>
                        <div className="input-fields">
                            <label htmlFor="college-id" className="bodyTextFontSize label">Password <span className="red">*</span></label>
                            <input type="password" placeholder="password"/>{eye ? <AiFillEyeInvisible className="eye" onClick={(e) => {
                                setEye(false)
                                e.currentTarget.previousElementSibling.type = "text"
                            }
                            } /> : <AiFillEye onClick={(e) => {
                                setEye(true)
                                e.currentTarget.previousElementSibling.type = "password"
                            }
                            } className="eye"/>}
                        </div>
                        <button type="submit" className="button buttonFontSize">LOGIN</button>
                    </form>
                    <p className="anchorP">www.getflytechnologies.com</p>
                </div>
            </div>
        </div>
    </>
}