import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import FilterSearchResult from '../../components/Molecules/FilterSearchResult'
import {useRouter} from 'next/router'
import hit from '../../api/hit'
import endpoints from '../../api/endpoints'
import {useState, useEffect} from 'react'


function getMovies(setter){
  hit(endpoints.ITEMS.GET.GET()).then(result => {
      if(result.status == 200){
          setter(result.data);
      }
  })
}


function getSeries(setter){
  hit(endpoints.ITEMS.GET.GET()).then(result => {
      if(result.status == 200){
          setter(result.data);
      }
  })
}


function getCelebrities(setter){
  hit(endpoints.CELEBRITIES.GET.GET()).then(result => {
      if(result.status == 200){
          setter(result.data);
      }
  })
}


function getUsers(setter){
  hit(endpoints.USERS.GET.GET()).then(result => {
      if(result.status == 200){
          setter(result.data);
      }
  })
}

export default function Title({user, t}) {
  const router = useRouter()

  const {name_id} = router.query

  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [celebrities, setCelebrities] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    if(name_id) {
      getMovies(setMovies)
      getSeries(setSeries)
      getCelebrities(setCelebrities)
      getUsers(setUsers)
    }
  }, [name_id])

  return (

<>
<div className='page-container'>
      <Header nameId={name_id} />
      <FilterSearchResult 
        label={'movies'}
        type={'movies'}
        data={movies}
        />
      <FilterSearchResult 
        label={'series'}
        type={'series'}
        data={series}
        />
      <FilterSearchResult 
        label={'celebrities'}
        type={'celebrities'}
        data={celebrities}
        />
</div>
<Footer />
</>
  )
}
