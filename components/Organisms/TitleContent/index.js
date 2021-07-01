import TitleHeader from '../../Molecules/Title/Header'
import TitleData from '../../Molecules/Title/Data'
import TitleCast from '../../Molecules/Title/Cast'
import TitleRelatedMovies from '../../Molecules/RelatedMovies'
import TitleComments from '../../Molecules/Comments'
import Banner from '../../Atoms/Banner'

export default function TitleContent({titleData, t, user}) {
  return (
    <div >
      <TitleHeader user={user} data={titleData.data} />
      <div className='title-content-item-container'>
        <TitleData  data={titleData.data} />
      </div>
      <div className='title-content-item-container'>
        <TitleCast data={titleData.cast}/>
      </div>
      <div className='title-content-item-container'>
        <Banner text='PELICULAS RELACIONADAS' size='title' />
        <TitleRelatedMovies data={titleData.relatedMovies}/>
      </div>
      <div className='title-content-item-container'>
        <TitleComments entityId={titleData.data.id} entityType='items' comments={titleData.comments} />
      </div>
    </div>
  )
}
