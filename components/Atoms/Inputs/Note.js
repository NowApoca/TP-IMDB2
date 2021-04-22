import LabeledInput from './Input.js';

export default function NoteInput({value, setter, setterIsOk, label,inputClass,labelClass}){
    return (
        <LabeledInput value={value} 
                      setter={setter} 
                      type='text' 
                      label={label || 'NOTA'}
                      classNameInput={inputClass}
                      classNameLabel={labelClass}/>
    )
}