

export default function Configuration(){
    return (<div className='configuration-container'>
        <div className='configuration-form-container'>
            <span className='configuration-form-title-text'>CAMBIAR NOMBRE DE USUARIO</span>
            <input className='configuration-form-item' />
            <button className='configuration-form-item' >Confirmar nombre de usuario</button>
        </div>

        <div className='configuration-form-container'>
            <span className='configuration-form-title-text'>CAMBIAR PASSWORD</span>
            <input className='configuration-form-item' />
            <input className='configuration-form-item' />
            <button className='configuration-form-item' >Confirmar cambio de password</button>
        </div>

        <div className='configuration-form-container'>
            <button className='configuration-form-item' >Cerrar sesion en todos los dispositivos</button>
        </div>
        
    </div>)
}