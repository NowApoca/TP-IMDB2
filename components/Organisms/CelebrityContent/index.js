import CelebrityHeader from '../../Molecules/Celebrity/Header'
import RelatedMovies from '../../Molecules/RelatedMovies'
import Comments from '../../Molecules/Comments'
import CelebrityData from '../../Molecules/Celebrity/Data'

export default function TitleContent({celebrityData, t}) {
  return (
    <div >
      
      <CelebrityHeader data={celebrityData.data} />
      <div className='title-content-item-container'>
        <CelebrityData  data={celebrityData.data} />
      </div>
      <div className='title-content-item-container'>
        <RelatedMovies data={celebrityData.relatedMovies}/>
      </div>
      <div className='title-content-item-container'>
        <Comments entityId={celebrityData.data.id} entityType='celebrities' comments={celebrityData.comments} />
      </div>
    </div>
  )
}
