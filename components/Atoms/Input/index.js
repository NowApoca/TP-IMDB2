
export default function Input({className, placeholder, value, setter, type}){
    return (
        <input className={className} type={type} placeholder={placeholder} value={value}  onInput={(e) => {
            setter(e.target.value)
        }}/>
    )
}
