

export default function Configuration(){
    return (<div className='configuration-container'>
        <div className='configuration-form-container'>
            <input className='configuration-form-item' />
            <button className='configuration-form-item' >Confirmar foto de perfil</button>
        </div>

        <div className='configuration-form-container'>
            <input className='configuration-form-item' />
            <button className='configuration-form-item' >Confirmar nombre de usuario</button>
        </div>

        <div className='configuration-form-container'>
            <input className='configuration-form-item' />
            <input className='configuration-form-item' />
            <button className='configuration-form-item' >Confirmar cambio de password</button>
        </div>

        <div className='configuration-form-container'>
            <button className='configuration-form-item' >Cerrar sesion en todos los dispositivos</button>
        </div>
        
    </div>)
}