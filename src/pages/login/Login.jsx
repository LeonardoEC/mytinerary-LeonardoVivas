import '../login/Login.css'

import { user_photo } from '../../store/actions/userActions'

import { useDispatch } from 'react-redux'
import GoogleSignin from '../../components/googlesignin/GoogleSignin' 

const Login = () => {

    const dispatch = useDispatch()

    const handelSingIn = () => {
        const user = {
            photo: 'https://phantom-marca.unidadeditorial.es/f6789739202270bf269446ecce4bc9d6/resize/828/f/jpg/assets/multimedia/imagenes/2022/10/28/16669745025522.jpg'
        }

        dispatch(user_photo(user))

    }

    return (
        <div className='Backgroudn'>
            <div className="cont-g-login">
                <div className="">
                    <h2>My Tinerary</h2>
                </div>
                <div className="card-login">
                    <p>step 1 of 2</p>
                    <h2>Create account</h2>
                    <figure>
                        <img src="" alt="Google" />
                        <img src="" alt="Facebook" />
                    </figure>
                    <div className="loginDeco">
                        <div className="primeraLinea"><hr /></div>
                        <div className="circulo"><span></span></div>
                        <div className="primeraLinea"><hr /></div>
                    </div>
                    <p>Sign up with email</p>
                    <p>Already have an account?<a href=""> Sign in</a></p>
                    <div action="">
                        <label htmlFor="">Email</label>
                        <input type="text" />
                        <label htmlFor="">Password</label>
                        <input type="text" />
                        <button onClick={handelSingIn} >Continue</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login