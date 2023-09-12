import '../signUp/SignUp.css'
import React, { useRef } from "react";

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { user_sign_up } from '../../store/actions/userActions';


const SignUp = () => {

    const store = useSelector(store => store.userReducer)


    const dispatch = useDispatch()

    const [signUpData, setSignUpData] = useState({
        userName: '',
        userLastName: '',
        email: '',
        country: '',
        password: ''
    })

    console.log(signUpData)



    const selectedCountryRef = useRef("");

    const paises = [
        "German",
        "England",
        "Russia",
        "USA",
        "South Korea",
        "Japan",
        "Italy",
        "France",
        "China",
        "Mexico",
        "Brazil",
        "Argentina",
        "Uruguay",
        "Colombia",
        "El Salvador"
    ]


    const handleSignUp = async (event) => {

        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value
        })

    };


    const handleButtSignUp = async (event) => {
        event.preventDefault();

        try {
            dispatch(user_sign_up(signUpData));
        } catch (error) {
            console.error('Error en la acción user_sign_up:', error);
        }

    }


    return (
        <div className='contSignUp'>
            <div className='cardSignUp'>
                <div className='titleSignUp'>
                    <h3>SignUp</h3>
                </div>
                <div>
                    <form onSubmit={handleButtSignUp} className='formSignUp' action="">
                        <label >Name</label>
                        <input type="text" name='userName' onChange={handleSignUp} />
                        <label >LastName</label>
                        <input type="text" name='userLastName' onChange={handleSignUp} />
                        <label >Email</label>
                        <input type="email" name='email' onChange={handleSignUp} />
                        <label >Country</label>
                        <select defaultValue="" name='country' onChange={handleSignUp}>
                            {paises.map((pais, index) => (
                                <option key={index} value={pais}>
                                    {pais}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="" >Password</label>
                        <input type="password" onChange={handleSignUp} name='password' />
                        {/* <label htmlFor="" onChange={handleSignUp}>Confirm password</label>
                        <input type="password" name='confirmPassword' /> */}
                        <div className='formButton'>
                            <button>SignUp</button>
                            <hr />
                            <button>Create acoutn by google</button>
                        </div>
                    </form>
                    <div className='formtextSignIn' >
                        <p>If you already have an account log in <a href="">here</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp