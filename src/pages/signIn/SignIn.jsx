import '../signIn/SignIn.css'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { user_login } from '../../store/actions/userActions'

const SignIn = () => {

    const store = useSelector(store => store)
    console.log("viene del store", store)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()

    const handleInput = (event) => {

        setFormData({

            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSignIn = async (event) => {
        event.preventDefault()

        try {
            dispatch(user_login({
                data: formData
            }))
        } catch (error) {
            console.log(error)
        }

    }

    // console.log(formData)


    return (
        <div className="constSignIn">
            {/* <div className='cardLogoSignIn'>
                <h1>hola</h1>
            </div> */}
            <div className="cardSignIn">
                <div className='signInTitle'>
                    <h3>Sign In</h3>
                </div>
                <div>
                    <form onSubmit={handleSignIn} className="cardform" action="">
                        <div className='cardSignInForm'>
                            <label>Email</label>
                            <input type="email" name='email' onChange={handleInput} />
                            <label>Password</label>
                            <input type="password" name='password' onChange={handleInput} />
                            <a href="">Recover your password</a>
                        </div>
                        <div className='buttSignInForm'>
                            <button className='btnGeneral btnSignIn'>Sing in</button>
                            <hr />
                            {/* <button className='btnGeneral btnSignIn'>Sing by Google</button> */}

                        </div>
                            <p>If you are not yet registered you can do it <a href="">here</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn