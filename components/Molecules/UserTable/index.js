import OurTable from '../OurTable'
import Button from '../../Atoms/Button'

export default function UserTable({data}){

    if(!data) data = []

  const blockUser = () => {

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

    return (<>
        <OurTable columnsOrder={columnsOrder} columns={columns} rows={rows} />
    </>)
}