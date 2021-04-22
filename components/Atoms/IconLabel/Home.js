import HomeIcon from '@material-ui/icons/Home';

export default function HomeIconLabel({text, onClick, className}){
    return (
        <div className={className}>
            <HomeIcon/>
            <h3>{text}</h3>
        </div>
    )
}