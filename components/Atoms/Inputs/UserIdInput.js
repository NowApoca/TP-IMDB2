import Input from '../Input'

export default function UserIdInput({
    className,
    placeholder,
    value,
    setter = () => {},
    label = 'Usuario',
    classNameLabel,
    }){
    return (
        <div>
            {
                label && <span className={`input-label ${classNameLabel}`}>
                    {label}
                </span>
            }
            <Input
                className={className || 'input-container'}
                placeholder={placeholder || 'usuario'}
                value={value}
                setter={setter}
            />
        </div>
    )
}
