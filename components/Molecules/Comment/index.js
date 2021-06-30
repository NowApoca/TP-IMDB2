import UpVote from '@material-ui/icons/ArrowUpward'
import Reply from '@material-ui/icons/Reply'
import Send from '@material-ui/icons/Send'
import ReactionButtons from '../ReactionButtons'
import CommentTables from '../CommentsTable'
import {useState, useEffect} from 'react';
import hit from '../../../api/hit';
import endpoints from '../../../api/endpoints';
import { useToasts } from 'react-toast-notifications'

export default function Comment({comment, entityType}){

    const [childComments, setChildComments] = useState(comment.comments || []);
    const [isCommentChildPressed, setIsCommentChildPressed] = useState(false);
    const { addToast } = useToasts()

    return (
        <div className='comment-container'>
            <div className='comment-parent-container'>
                <div className='comment-username-container' >
                    <span className='comment-username-span'>{comment.userName}</span> dice:
                </div>
                <div className='comment-child-container'>
                    <span>{comment.isDeleted? 'COMMENT_DELETED' : comment.comment}</span>
                    <div className='comment-buttons-container'>
                        <ReactionButtons
                            entityType={entityType}
                            idComment={comment.id}
                            likes={comment.likes} likedByUser={comment.isLikedByUser}
                            favourites={comment.favourites} favoritedByUser={comment.isFavouritedByUser}
                            smiles={comment.smiles} smiledByUser={comment.isSmiledByUser}
                            frownes={comment.frownes} frownedByUser={comment.isFrownedByUser}
                        />
                    </div>
                </div>
            </div>    
        </div>
    )
}


function AddChildComment({onClick}){

    const [text, setText] = useState('');

    return (
        <div className='add-child-comment-container'>
            <textarea onInput={e => setText(e.target.value)} value={text} placeholder='WRITE_COMMENT' className='add-child-comment-input' type='text' />
            <Send onClick={() => onClick(text)}  className='add-child-comment-button'  />
        </div>
    )
}