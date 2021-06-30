import Button from '../../components/Atoms/Button'
import {useState} from 'react'
import hit from '../../api/hit'
import endpoints from '../../api/endpoints'
import { useToasts } from 'react-toast-notifications'

export default function Login({user, t}) {
    const { addToast } = useToasts()
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const logUser = () => {
        const body = {
            userName: id,
            password
        }
        hit(endpoints.USERS.POST.LOG(), {body,toasts: {
            addToast, successMessage: 'POST_LOG_SUCCESSFUL'
        }}).then(result => {
            if(result.status == 200){
                localStorage.setItem('ortAccessToken', result.data)
                window.location = '/'
            }
        })
    }

  return (
      <>
        <div className='login-container'>
            <div>
                <span className='upload-celebrity-text'>ID</span>
                <input className='upload-celebrity-input' onInput={(e) => {
                    setId(e.target.value)
                }} placeholder='title' />
            </div>
            <div>
                <span className='upload-celebrity-text'>PASSWORD</span>
                <input className='upload-celebrity-input' onInput={(e) => {
                    setPassword(e.target.value)
                }} placeholder='title' />
            </div>
            <Button 
              text='Ingresar'
              onClick ={() => logUser()}
              variant='primary'
              className='configuration-form-button'
          />
        </div>
      </>
  )
}
