import LabeledInput from './Input.js';

export default function PasswordInput({value, setter, setterIsOk}){
    return (
        <LabeledInput value={value} setter={setter} type='password' label='CONTRASEÑA'/>
    )
}