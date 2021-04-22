import Star from '@material-ui/icons/Star'

export default function RateButton({rating}){
    return (<div className='rate-button-container'>
        <Star />
        <span className='rating-text'>{rating || '-'}</span>
    </div>)
}