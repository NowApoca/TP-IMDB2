import Comment from '../Comment'
import Button from '../../Atoms/Button'
import {useState} from 'react'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import { useToasts } from 'react-toast-notifications'

export default function TitleComments({ comments = [], entityType, entityId }) {
  const { addToast } = useToasts()
  const [comment, setComment] = useState();

  const handleAddComment = () => {
    const body = {
      comment,
      type: entityType,
      entityId: entityId
    }
    hit(endpoints.COMMENTS.POST.COMMENT(), {body,toasts: {
        addToast, successMessage: 'POST_ROLE_SUCCESSFUL'
    }}).then(result => {
        if(result.status == 201){
          window.location.reload()
        }
    })
}
    const commentElements = []
    
    comments.map(comment => {
      if(comment){
        commentElements.push(<Comment comment={comment} entityType={entityType} />)
      }
    })

  return (
    <div>
      <div className='text-area-comment-container'>
        <textarea onInput={(e) => {
          setComment(e.target.value)
        }} className='text-area-comment' />
        <Button 
              text='Enviar'
              onClick ={() => handleAddComment()}
              variant='primary'
              className='configuration-form-button'
          />
      </div>
        {commentElements}
    </div>
  );
}
