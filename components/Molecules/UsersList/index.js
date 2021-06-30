import OurTable from '../OurTable'
import Button from '../../Atoms/Button'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import { useToasts } from 'react-toast-notifications'
import { useState } from 'react'

export default function UserTable({data}){
    const { addToast } = useToasts()

    if(!data) data = []

  const blockUser = (id) => {
    hit(endpoints.USERS.DELETE(id), {body: {},toasts: {
        addToast, successMessage: 'POST_ROLE_SUCCESSFUL'
    }}).then(result => {
        if(result.status == 204){
            window.location.reload()
        }
    })
  }

    const columns = [
        { name: "ID Usuario", field: "userId" },
        { name: "Rol", field: "role" },
        { name: "Esta bloqueado?", field: "isBlocked" },
        { name: "Bloquear", field: "block" },
      ];
      const columnsOrder = columns.map((column) => column.field);
    
      const rows = data.map((element) => {
        return {
          columnsOrder: columnsOrder,
          values: {
            userId: element.userName,
            role: element.role,
            isBlocked: element.isDeleted? "SI": "NO",
            block: <Button 
              text='Bloquear'
              onClick ={() => blockUser(element.userName)}
              variant='danger'
              className='configuration-form-button'
          />,
          },
        };
      });

    return (<>
        <OurTable columnsOrder={columnsOrder} columns={columns} rows={rows} />
    </>)
}