import LabeledInput from './Input.js';

export default function AddressInput({value, setter, setterIsOk,inputClass,labelClass}){
    return (
        <LabeledInput value={value} 
                      setter={setter} 
                      type='text' 
                      label='DIRECCION'
                      classNameInput={inputClass}
                      classNameLabel={labelClass}
                />
    )
}