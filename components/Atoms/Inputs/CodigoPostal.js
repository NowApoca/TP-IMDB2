import LabeledInput from './Input.js';

export default function EmailInput({value, setter, setterIsOk,inputClass,labelClass}){
    return (
        <LabeledInput value={value} 
                      setter={setter} 
                      type='text' 
                      label='CODIGO POSTAL'
                      classNameInput={inputClass}
                      classNameLabel={labelClass}
            />
    )
}