import Button from '../../Atoms/Button'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import {useState} from 'react'
import { useToasts } from 'react-toast-notifications'

export default function Configuration(){
    const { addToast } = useToasts()

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleChangePassword = () => {
        const body = {
            oldPassword,
            newPassword,
        }
        hit(endpoints.USERS.PATCH.PASSWORD(), { body,toasts: {
            addToast, successMessage: 'CAMBIADA CON EXITO'
        }}).then(result => {
            if(result.status == 204){
                window.location = '/'
                localStorage.removeItem('ortAccessToken')
            }
        })
    }

    let error = newPassword != confirmNewPassword? 'LAS PASSWORDS DEBEN COINCIDIR' : ''

    return (<div className='configuration-container'>

        <div className='configuration-form-container'>
            <span className='configuration-form-title-text'>CAMBIAR PASSWORD</span>
            <input onInput={e => setOldPassword(e.target.value)} value={oldPassword} type='password' placeholder='Password anterior' className='configuration-form-item' />
            <input onInput={e => setNewPassword(e.target.value)} value={newPassword} type='password' placeholder='Password' className='configuration-form-item' />
            <input onInput={e => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} type='password' placeholder='Confirmar password' className='configuration-form-item' />
            <span className='configuration-form-error-text'>
                {error}
            </span>
            <Button 
                text='Confirmar cambio de password'
                onClick ={handleChangePassword}
                variant='success'
                className='configuration-form-button'
            />
        </div>
        
    </div>)
}