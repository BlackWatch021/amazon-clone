import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase.js'

const Login = () => {

    const navigate = useNavigate()
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    const login = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            //logged in, redirect to the homepage...
            navigate('/')
        }).catch(e => alert(e.message))

    }
    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            //created a user and logged in,redirect to the homepage
            navigate('/')
        }).catch(e => alert(e.message))
    }










    return <div className='login'>
        <Link to='/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="" />
        </Link>

        <div className="login_container">
            <h1>Sign in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                <h5>Password</h5>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" /><br />
                <button className='login_signIn' type='submit' onClick={login}>Sign In</button>
            </form>
            <p>By signing-in you agree to Amazon's Conditions of User & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

            <button className='login_register' onClick={register}>New to Amazon</button>
        </div>

    </div>;
};

export default Login;
