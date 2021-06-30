import Like from '@material-ui/icons/ThumbUpTwoTone'
import Favorite from '@material-ui/icons/FavoriteTwoTone'
import EmojiEmotions from '@material-ui/icons/EmojiEmotionsTwoTone'
import Frown from '@material-ui/icons/MoodBadTwoTone'
import {useState, useEffect} from 'react'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import constants from '../../../constants'
import { useToasts } from 'react-toast-notifications'

export default function ReactionButtons({
    idComment,
    entityType,
    likes = 0, likedByUser,
    favourites = 0, favoritedByUser,
    smiles = 0, smiledByUser,
    frownes = 0, frownedByUser,
}){
    return (<div>
        <Reaction entityType={entityType} reactionType='LIKE' idReaction={constants.reactions.likes.id}
            Symbol={Like} pressed={likedByUser} amount={likes} idComment={idComment} />
        <Reaction entityType={entityType} reactionType='FAVOURITE' idReaction={constants.reactions.favorites.id}
            Symbol={Favorite} pressed={favoritedByUser} amount={favourites} idComment={idComment}/>
        <Reaction entityType={entityType} reactionType='SMILE' idReaction={constants.reactions.smiles.id}
            Symbol={EmojiEmotions} pressed={smiledByUser} amount={smiles} idComment={idComment}/>
        <Reaction entityType={entityType} reactionType='FROWN' idReaction={constants.reactions.frowns.id}
            Symbol={Frown} pressed={frownedByUser} amount={frownes} idComment={idComment}/>
    </div>)
}

function Reaction({Symbol, pressed, amount, reactionType, idReaction, idComment, entityType}){

    const { addToast } = useToasts()

    const [isPressed, setIsPressed] = useState(pressed);
    const [currentAmount, setCurrentAmount] = useState(amount);

    const handlePress = () => {
        const body = {
            reactionType
        }
        hit(endpoints.COMMENTS.POST.REACT(entityType, idComment), {body,toasts: {
            addToast, successMessage: 'POST_ROLE_SUCCESSFUL'
        }}).then(result => {
            if(result.status == 200){
                setCurrentAmount(isPressed? currentAmount-1 : currentAmount+1)
                setIsPressed(!isPressed)
            }
        })
    }

    return (
        <>
            <span className={`${reactionType}-text`}>{currentAmount}</span>
            <Symbol className={isPressed? `${reactionType}-pressed` : `${reactionType}-not-pressed`}
                onClick={() => {
                    handlePress();
                }}
            />
        </>
    )
}

