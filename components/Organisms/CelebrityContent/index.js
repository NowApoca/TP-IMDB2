import CelebrityHeader from '../../Molecules/Celebrity/Header'
import RelatedMovies from '../../Molecules/RelatedMovies'
import Comments from '../../Molecules/Comments'

export default function TitleContent({celebrityData, t}) {
  return (
    <div >
      
      <CelebrityHeader data={celebrityData.data} />
      <div className='title-content-item-container'>
        <RelatedMovies data={celebrityData.relatedMovies}/>
      </div>
      <div className='title-content-item-container'>
        <Comments comments={celebrityData.comments} />
      </div>
    </div>
  )
}
