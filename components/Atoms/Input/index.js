
export default function Input({className, placeholder, value, setter}){
    return (
        <input className={className} type='text' placeholder={placeholder} value={value}  onInout={(e) => {
            setter(e.target.value)
        }}/>
    )
}
