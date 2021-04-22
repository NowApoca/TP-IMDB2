import LabeledInput from './Input.js';

export default function EmailInput({value, setter, setterIsOk,inputClass,labelClass}){
    return (
        <LabeledInput value={value} 
                      setter={setter} 
                      type='number' 
                      label='Precio'
                      classNameLabel={labelClass}
                      classNameInput={inputClass}
        />
    )
}