import CommentsTable from '../CommentsTable'

export default function TitleComments({comments = []}){
    return (
        <div className='title-comments-container'>
            <div className='title-comments-subtitle'>
                <span className='title-comments-text'>
                    {'Comentarios'}
                </span>
            </div>
            <CommentsTable comments={comments} />
        </div>
    )
}