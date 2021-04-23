import Comment from '../Comment'

export default function TitleCast({ comments = [] }) {
    
    const commentElements = comments.map(comment => {
        return <Comment comment={comment} />
    })

  return (
    <div>
        {commentElements}
    </div>
  );
}
