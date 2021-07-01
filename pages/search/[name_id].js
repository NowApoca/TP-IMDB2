import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import FilterSearchResult from '../../components/Molecules/FilterSearchResult'
import {useRouter} from 'next/router'
import hit from '../../api/hit'
import endpoints from '../../api/endpoints'
import {useState, useEffect} from 'react'


function getMovies(setter, name_id){
  hit(endpoints.ITEMS.GET.GET({filter: name_id, limit: 1000})).then(result => {
      if(result.status == 200){
          const items = []
          result.data.map(item => {
            if(item != null){
              items.push(item)
            }
          })
          setter(items);
      }
  })
}


function getCelebrities(setter, name_id){
  hit(endpoints.CELEBRITIES.GET.GET({filter: name_id, limit: 1000})).then(result => {
      if(result.status == 200){
        console.log(result, 'RESUUUUULT')
        const celebrities = []
        result.data.map(celebrity => {
          if(celebrity != null){
            celebrities.push(celebrity)
          }
        })
        setter(celebrities);
      }
  })
}

export default function Title({user, t}) {
  const router = useRouter()

  const {name_id} = router.query

  const [movies, setMovies] = useState([])
  const [celebrities, setCelebrities] = useState([])

  useEffect(() => {
    if(name_id) {
      getMovies(setMovies, name_id)
      getCelebrities(setCelebrities, name_id)
    }
  }, [name_id])

  return (

<>
<div className='page-container'>
      <Header user={user} nameId={name_id} />
      <FilterSearchResult 
        label={'Peliculas o series'}
        type={'items'}
        data={movies}
        user={user}
        />
      <FilterSearchResult 
        label={'Celebridades'}
        type={'celebrities'}
        data={celebrities}
        user={user}
        />
</div>
<Footer />
</>
  )
}
