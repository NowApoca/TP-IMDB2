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
    likes = 0, likedByUser,
    favorites = 0, favoritedByUser,
    smiles = 0, smiledByUser,
    frownes = 0, frownedByUser,
}){

    return (<div>
        <Reaction reactionType='like' idReaction={constants.reactions.likes.id}
            Symbol={Like} pressed={likedByUser} amount={likes} idComment={idComment} />
        <Reaction reactionType='favorite' idReaction={constants.reactions.favorites.id}
            Symbol={Favorite} pressed={favoritedByUser} amount={favorites} idComment={idComment}/>
        <Reaction reactionType='smile' idReaction={constants.reactions.smiles.id}
            Symbol={EmojiEmotions} pressed={smiledByUser} amount={smiles} idComment={idComment}/>
        <Reaction reactionType='frown' idReaction={constants.reactions.frowns.id}
            Symbol={Frown} pressed={frownedByUser} amount={frownes} idComment={idComment}/>
    </div>)
}

function Reaction({Symbol, pressed, amount, reactionType, idReaction, idComment}){

    const { addToast } = useToasts()


    const [isPressed, setIsPressed] = useState(pressed);
    const [currentAmount, setCurrentAmount] = useState(amount);

    const handlePress = () => {
        const body = {
            idReaction,
            idComment
        }
        hit(endpoints.COMMENTS.POST.REACT(), {body,toasts: {
            addToast, successMessage: 'POST_ROLE_SUCCESSFUL'
        }}).then(result => {
            if(result.status == 204){
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

