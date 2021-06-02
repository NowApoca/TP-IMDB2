import {useState, useEffect} from 'react'
import OurTable from '../../Molecules/OurTable'
import Button from '../../Atoms/Button'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'

const users = [{
    
}]

export default function AdministrationUserContent({}){
  const [users, setUsers] = useState([])
  const [userFilter, setUserFilter] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const [isBlockedFilter, setIsBlockedFilter] = useState(false)

  useEffect(() => {
    hit(endpoints.USERS.GET.GET()).then(result => {
      if(result.status == 200){
        setUsers(result.data);
      }
    })
  }, [])

  useEffect(() => {
    hit(endpoints.USERS.GET.GET()).then(result => {
      if(result.status == 200){
        setUsers(result.data);
      }
    })
  }, [userFilter, roleFilter, isBlockedFilter])

  const blockUser = () => {

  }

  const columns = [
    { name: "ID Usuario", field: "userId" },
    { name: "Rol", field: "role" },
    { name: "Esta bloqueado?", field: "isBlocked" },
    { name: "Bloquear", field: "block" },
  ];
const columnsOrder = columns.map((column) => column.field);

  const rows = users.map((element) => {
    return {
      columnsOrder: columnsOrder,
      values: {
        userId: element.userId,
        role: element.role,
        isBlocked: element.isBlocked,
        block: <Button 
          text='Bloquear'
          onClick ={() => blockUser(element.userId)}
          variant='danger'
          className='configuration-form-button'
      />,
      },
    };
  });

    return (<div>
      <div className='user-filters-container'>
        <input onInput={(e) => setUserFilter(e.target.value)} value={userFilter} type='text' className='user-filters-input' placeholder='user id' />
        <input onInput={(e) => setRoleFilter(e.target.value)} value={roleFilter} type='text' className='user-filters-input' placeholder='role' />
        <div className='user-filters-checkbox-container'>
          <span className='user-filters-checkbox-text'>das</span>
          <input checked={isBlockedFilter} onChange={() => setIsBlockedFilter(!isBlockedFilter)} value={isBlockedFilter} type='checkbox' className='user-filters-input' placeholder='isBlocked' />
        </div>
      </div>
      <OurTable columnsOrder={columnsOrder} columns={columns} rows={rows} />
    </div>)
}
