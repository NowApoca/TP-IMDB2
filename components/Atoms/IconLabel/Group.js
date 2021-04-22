import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export default function GroupIconLabel({text, onClick, className}){
    return (
        <div className={className}>
            <PeopleAltIcon/>
            <h3>{text}</h3>
        </div>
    )
}