import EntityInput from './Entity.js';

import endpoints from '../../../api/endpoints'

export default function UserIdInput({

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
            label={label || 'DUEÑO DEL TUBO'}
            value={value}
            shouldExist={shouldExist || false}
            setter={setter}
            isOkSetter={setterIsOk}
            checkEndpoint={endpoints.USERS.GET.CHECK_USER_EXIST}
            classNameInput={inputClass}
            classNameLabel={labelClass}
        />
    )
}