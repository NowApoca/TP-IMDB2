
export default function Moment({date, isHour = false}){
    const jsDate = new Date( (new Date(date)).getTime() + 6*60*60*1000) 
    return (
        <span >{`
        ${jsDate.getDate()}-${jsDate.getMonth()+1}-${jsDate.getFullYear()}
        `} </span>
    )
}
