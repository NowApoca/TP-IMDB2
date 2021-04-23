import UpVote from '@material-ui/icons/ArrowUpward'
import DownVote from '@material-ui/icons/ArrowDownward'
import ReactionButtons from '../ReactionButtons'
import CommentTables from '../CommentsTable'

export default function Comment({comment}){
    return (
        <div className='comment-container'>
            <UpVote />
            <span>{comment.comment}</span>
            <div className='comment-buttons-container'>
                {
                    comment.comments.length > 0 ? <div>
                        {'Ver comentarios'}<DownVote />
                        
                    </div> : <div>
                        No hay comentarios
                    </div>
                }
                <ReactionButtons />
            </div>
            {
                comment.comments.length > 0 &&         
                <div className='comment-subcomments'>
                    <CommentTables comments={comment.comments} />
                </div>
            }
        </div>
    )
}