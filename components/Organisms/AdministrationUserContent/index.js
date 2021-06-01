import UserFilters from '../../Molecules/UserFilters'
import UserTable from '../../Molecules/UserTable'
import {useState, useEffect} from 'react'
import hit from '../../../hit'
import endpoints from '../../../endpoints'

const users = [{
    
}]

export default function AdministrationUserContent({}){

    const [users, setUsers] = useState([])

    useEffect( () => {
      hit(endpoints.USERS.GET.GET()).then(result => {
        if(result.status == 200){
            setUsers(result.data)
        }
      })
    }, [])

    return (<div>
        <UserFilters />
        <UserTable data={users} />
    </div>)
}