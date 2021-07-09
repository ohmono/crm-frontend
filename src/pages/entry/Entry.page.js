import React, { useState } from 'react'
import { Jumbotron } from "react-bootstrap";
import { LoginForm } from '../../components/login/Login.component';

import './entry.style.css'
export const Entry = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="entry-page bg-info">

            <Jumbotron className="form-box">
                <LoginForm />
            </Jumbotron>
        </div>
    )
}
