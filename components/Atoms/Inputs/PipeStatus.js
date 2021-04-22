import DropdownInput from './Dropdown.js';

export default function EmailInput({value, setter, setterIsOk,inputClass,labelClass}){

    const options = [
        {value: 'available', text: 'Habilitado'},
        {value: 'landed', text: 'Rechazado'},
        {value: 'sold', text: 'Vendido'},
    ]

    return (
        <DropdownInput 
            value={value} setter={setter} options={options} label={'ESTADO'}
            classNameInput={inputClass}
            classNamelabel={labelClass}
        />
    )
}
