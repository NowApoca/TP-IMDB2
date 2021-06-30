import CommentsTable from '../CommentsTable'

export default function TitleComments({comments = [], entityType, entityId}){
    return (
        <div className='title-comments-container'>
            <div className='title-comments-subtitle'>
                <span className='title-comments-text'>
                    {'Comentarios'}
                </span>
            </div>
            <CommentsTable entityId={entityId} comments={comments} entityType={entityType} />
        </div>
    )
}