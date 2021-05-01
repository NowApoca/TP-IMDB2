import OurTable from '../OurTable'

export default function UserTable({data}){

    if(!data) data = []

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
            block: <button>block</button>,
          },
        };
      });

    return (<>
        <OurTable columnsOrder={columnsOrder} columns={columns} rows={rows} />
    </>)
}