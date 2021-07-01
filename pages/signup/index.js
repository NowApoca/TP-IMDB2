import Button from '../../components/Atoms/Button'
import {useState} from 'react'
import hit from '../../api/hit'
import endpoints from '../../api/endpoints'
import { useToasts } from 'react-toast-notifications'

export default function Login({user, t}) {
    const { addToast } = useToasts()
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()

    const signupUser = () => {
        const body = {
            userName: id,
            password
        }
        if(password.length < 8){
            setError('LA PASSWORD DEBE TENER POR LO MENOS DE LARGO 8 CARACTERES')
            return;
        }
        hit(endpoints.USERS.POST.USER(), {body,toasts: {
            addToast, successMessage: 'POST_LOG_SUCCESSFUL'
        }}).then(result => {
            if(result.status == 201){
                window.location = '/login'
            }
        })
    }

  return (
      <>
        <div className='login-container'>
            <h1 style={{color: 'blue'}}>REGISTRARSE</h1>
            <div>
                <span className='upload-celebrity-text'>ID</span>
                <input className='upload-celebrity-input' onInput={(e) => {
                    setId(e.target.value)
                }} placeholder='title' />
            </div>
            <div>
                <span className='upload-celebrity-text'>PASSWORD</span>
                <input type='password' className='upload-celebrity-input' onInput={(e) => {
                    setPassword(e.target.value)
                    setError(null)
                }} placeholder='title' />
            </div>
            {
                error && <span style={{color: 'red'}}>{error}</span>
            }
            <Button 
              text='Registrar'
              onClick ={() => signupUser()}
              variant='primary'
              className='configuration-form-button'
          />
        </div>
      </>
  )
}
