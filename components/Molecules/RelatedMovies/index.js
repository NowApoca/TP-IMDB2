

export default function RelatedMovies({data = []}){
    return (
        <div className='title-related-movies-container'>
            {data.map(movie => {
                return (
                    <img onClick={() => {
                        window.location = `/title/${movie.id}`
                    }}
                        src={'../' + movie.image}
                    className='title-related-movies-item-img'/>
                )
            })}
        </div>
    )
}