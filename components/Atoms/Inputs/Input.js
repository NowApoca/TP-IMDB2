
export default function LabeledInput({label, placeholder, 
    classNameInput,
    classNameLabel,
    value, 
    type, 
    setter,
    })
    {
    return (
        <div className="flex-column login-div">
            <label className={classNameLabel ? classNameLabel : 'login-input-header'}><b>{label}</b></label>
            <input className={classNameInput ? classNameInput : 'login-input'}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={e => setter(e.target.value)}>
            </input>
        </div>
    )
}