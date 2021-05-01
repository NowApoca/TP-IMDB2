import UserFilters from '../../Molecules/UserFilters'
import UserTable from '../../Molecules/UserTable'

const users = [{
    
}]

export default function AdministrationUserContent({}){
    return (<div>
        <UserFilters />
        <UserTable data={users} />
    </div>)
}