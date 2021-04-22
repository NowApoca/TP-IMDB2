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
            label={label || 'PRODUCTO (OBLIGATORIO)'}
            value={value}
            shouldExist={shouldExist || false}
            setter={setter}
            isOkSetter={setterIsOk}
            checkEndpoint={endpoints.PIPE_PRODUCTS.GET.CHECK_PIPE_PRODUCT_EXIST}
            classNameInput={inputClass}
            classNameLabel={labelClass}
        />
    )
}