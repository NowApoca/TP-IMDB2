import UpVote from '@material-ui/icons/ArrowUpward'
import Reply from '@material-ui/icons/Reply'
import Send from '@material-ui/icons/Send'
import ReactionButtons from '../ReactionButtons'
import CommentTables from '../CommentsTable'
import {useState, useEffect} from 'react';
import hit from '../../../api/hit';
import endpoints from '../../../api/endpoints';
import { useToasts } from 'react-toast-notifications'

export default function Comment({comment}){

    const [childComments, setChildComments] = useState(comment.comments || []);
    const [isCommentChildPressed, setIsCommentChildPressed] = useState(false);
    const { addToast } = useToasts()

    const handleAddComment = (text) => {
        const body = {
            text,
            idParentComment: comment.id,
        }
        hit(endpoints.COMMENTS.POST.COMMENT(), {body,toasts: {
            addToast, successMessage: 'POST_ROLE_SUCCESSFUL'
        }}).then(result => {
            if(result.status == 200){
                const childCommentsArr = [].concat(childComments)
                childCommentsArr.push({
                    comment: text,
                    isDeleted: false,
                    id: result.data.id,
                    likes: 0,
                    likedByUser: false,
                    favorites: 0,
                    favoritedByUser: false,
                    smiles: 0,
                    smiledByUser: false,
                    frownes: 0,
                    frownedByUser: false,
                })
                setChildComments(childCommentsArr)
            }
        })
    }

    return (
        <div className='comment-container'>
            <div className='comment-parent-container'>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {childComments.length}
                    <Reply onClick={
                        () => setIsCommentChildPressed(!isCommentChildPressed)
                    } />
                </div>
                <div className='comment-child-container'>
                    <span>{comment.isDeleted? 'COMMENT_DELETED' : comment.comment}</span>
                    <div className='comment-buttons-container'>
                        
                        <ReactionButtons
                            idComment={comment.id}
                            likes={comment.likes} likedByUser={comment.likedByUser}
                            favorites={comment.favorites} favoritedByUser={comment.favoritedByUser}
                            smiles={comment.smiles} smiledByUser={comment.smiledByUser}
                            frownes={comment.frownes} frownedByUser={comment.frownedByUser}
                        
                        />
                    </div>
                    {
                        (!comment.isDeleted && isCommentChildPressed) && <AddChildComment onClick={handleAddComment} />
                    }
                    {
                        childComments.length > 0 &&         
                        <div className='comment-subcomments'>
                            <CommentTables comments={childComments} />
                        </div>
                    }
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