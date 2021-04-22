import Star from '@material-ui/icons/Star'
import constants from '../../../constants'

export default function Rating({rating}){

    let score;

    switch(true){
        case rating <= constants.rating.redGreaterValue:
            score = 'bad'
            break;
        case rating > constants.rating.redGreaterValue && rating < constants.rating.greenLessValue:
            score = 'regular'
            break;
        case rating >= constants.rating.greenLessValue:
            score = 'good'
            break;
        default:
            score = 'empty'
    }

    return (<div className='rating-container' >
        <Star className={`rating-container score-${score}`} />
        <span className='rating-text'>{rating || '-'}</span>
    </div>)
}