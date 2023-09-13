import { useEffect, useRef } from "react"
import axios from "axios"
import { useDispatch } from 'react-redux'
import { user_sign_in_g } from "../../store/actions/userActions"


const GoogleSignin = () => {

    const dispatch = useDispatch()

    const googleButton = useRef()

    const handleCredentialResponse = async (response) => {
        // console.info("Encoded JWT ID token: " + response.credential);
        const data = {
            token_id: response.credential
        }

        const userResponse = await axios.post('http://localhost:8000/api/auth/google', data)

        // console.log(userResponse.data.response.user)
        try {
            dispatch(user_sign_in_g({
                data: userResponse
            }))
        } catch (error) {
            
        }
    }

    useEffect(() => {
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id: "860560522646-4m9u382a4e5glfn83arbvocm3iq9n7df.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'pill', theme: "filled_black", size: "large", text: 'signin_with' }  // customization attributes
            );
        }

    },[])



  return (
    <div ref={googleButton}></div>
  )
}

export default GoogleSignin