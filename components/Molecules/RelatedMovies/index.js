

export default function RelatedMovies({data = []}){
    return (
        <div className='title-related-movies-container'>
            {data.map(movie => {
                return (
                    <img
                        src='../logo.png'
                    className='title-related-movies-item-img'/>
                )
            })}
        </div>
    )
}