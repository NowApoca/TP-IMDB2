import Star from '@material-ui/icons/Star'

export default function RateButton({rating, onClick = () => {}}){
    return (<div className='rate-button-container'>
        <Star style={{fill:'gold', color:'gold'}}  onClick={onClick} />
        <span className='rating-text'>{rating || '-'}</span>
    </div>)
}