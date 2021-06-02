import Button from '../../Atoms/Button'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import {useState} from 'react'
import { useToasts } from 'react-toast-notifications'

export default function Configuration(){
    const { addToast } = useToasts()

    const [newUser, setNewUser] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleChangeUser = () => {
        const body = {
            newUser,
        }
        hit(endpoints.USERS.PATCH.USER_NAME(), { body,toasts: {
            addToast, successMessage: 'POST_ROLE_SUCCESSFUL'
        }}).then(result => {

        })
    }

    const handleChangePassword = () => {
        const body = {
            oldPassword,
            newPassword,
            confirmNewPassword,
        }
        hit(endpoints.USERS.PATCH.PASSWORD(), { body,toasts: {
            addToast, successMessage: 'POST_ROLE_SUCCESSFUL'
        }}).then(result => {
            if(result.status == 204){
                window.location = '/'
            }
        })
    }

    const logoutAllDevices = () => {
        hit(endpoints.USERS.POST.LOG_OUT_ALL_DEVICES(), { toasts: {
            addToast, successMessage: 'POST_ROLE_SUCCESSFUL'
        }}).then(result => {
            if(result.status == 204){
                window.location = '/'
            }
        })
    }

    let error = newPassword != confirmNewPassword? 'LAS PASSWORDS DEBEN COINCIDIR' : ''

    return (<div className='configuration-container'>
        <div className='configuration-form-container'>
            <span className='configuration-form-title-text'>CAMBIAR NOMBRE DE USUARIO</span>
            <input onInput={e => setNewUser(e.target.value)} value={newUser} type='text' className='configuration-form-item' />
            <Button 
                text='Confirmar cambio'
                onClick ={handleChangeUser}
                variant='success'
                className='configuration-form-button'
            />
        </div>

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

        <div className='configuration-form-container'>
            <span className='configuration-form-title-text'>CAMBIAR NOMBRE DE USUARIO</span>
            <Button 
                text='Confirmar cambio de password'
                onClick ={logoutAllDevices}
                variant='danger'
                className='configuration-form-button'
            />
        </div>
        
    </div>)
}