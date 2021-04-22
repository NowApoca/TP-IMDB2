import LabeledInput from './Input.js';

export default function PhoneInput({value, setter, setterIsOk,inputClass,labelClass}){
    return (
        <LabeledInput
                        value={value} 
                        setter={setter} 
                        type='text' 
                        label='TELEFONO'
                        classNameInput={inputClass}
                        classNameLabel={labelClass}
        />
    )
}