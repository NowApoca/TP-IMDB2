import LabeledInput from './Input.js';

export default function FolderInput({value, setter, setterIsOk,inputClass,labelClass}){
    return (
        <LabeledInput value={value} 
                      setter={setter} 
                      type='text' 
                      label='CARPETA CONTENEDORA'
                      classNameInput={inputClass}
                      classNameLabel={labelClass}
                />
    )
}