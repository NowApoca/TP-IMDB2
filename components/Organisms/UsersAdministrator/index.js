import UsersList from '../../Molecules/UsersList'
import {useState, useEffect} from 'react'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'

function getUsers(setter){
    hit(endpoints.USERS.GET.GET({})).then(result => {
        if(result.status == 200){
            setter(result.data);
        }
    })
}

export default function UsersAdministrator(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers(setUsers)
    }, [])

    return (
        <div>
            <UsersList data={users} className='home-loader-content' />
        </div>
    )
}