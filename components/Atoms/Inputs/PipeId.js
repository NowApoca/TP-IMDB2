import EntityInput from './Entity.js';
import endpoints from '../../../api/endpoints'

export default function PipeProductCodeInput({
    label,
    value,
    setter,
    setterIsOk,
    shouldExist,
    inputClass,
    labelClass,
}){
    return (
        <EntityInput
            label={label || 'NUMERO DE TUBO (OBLIGATORIO)'}
            value={value}
            shouldExist={shouldExist || false}
            setter={setter}
            isOkSetter={setterIsOk}
            checkEndpoint={endpoints.ITEMS.GET.CHECK_ITEM_EXIST}
            classNameInput={inputClass}
            classNameLabel={labelClass}
        />
    )
}