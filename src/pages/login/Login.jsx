import '../login/Login.css'

const Login = () => {
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
                    <form action="">
                        <label htmlFor="">Email</label>
                        <input type="text" />
                        <label htmlFor="">Password</label>
                        <input type="text" />
                        <button>Continue</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login