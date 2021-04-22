import LabeledInput from './Input.js';

export default function EmailInput({value, setter, setterIsOk}){
    return (
        <LabeledInput value={value} setter={setter} type='email' label='EMAIL'/>
    )
}