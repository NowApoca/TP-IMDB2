import Star from '@material-ui/icons/Star'

const MAX_STARS = 10;

export default function StarsRate({value, setter}){

    const stars = []

    for(let currentIndex = 0; currentIndex < MAX_STARS ; currentIndex++){
        const currentStarValue = currentIndex +1;
        stars.push(
            <Star
                fontSize='large'
                style={{fill: value >= currentStarValue?'gold': 'black'}}
                onClick={() => setter(currentStarValue)}
            />
        )
    }

    return (
        <div className='stars-rate-container'>
            {value}
            <div className='stars-container'>
                {stars}
            </div>
        </div>
    )
}