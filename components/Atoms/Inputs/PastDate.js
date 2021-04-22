import LabeledInput from './Input.js';

export default function DateInput({value, setter, label, setterIsOk,inputClass,labelClass}){
    return (
        <LabeledInput value={value} 
                      setter={setter} 
                      type='date'
                      label={label || 'FECHA'}
                      classNameInput={inputClass}
                      classNameLabel={labelClass}
                      />
    )
}