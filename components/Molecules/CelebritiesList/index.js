import OurTable from '../OurTable'
import Button from '../../Atoms/Button'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import { useToasts } from 'react-toast-notifications'
import { useState } from 'react'

export default function UserTable({data}){
    const { addToast } = useToasts()

    if(!data) data = []

  const deleteCelebrity = (id) => {
    hit(endpoints.CELEBRITIES.DELETE(id), {body: {},toasts: {
        addToast, successMessage: 'CELEBRIDAD BORRADA'
    }}).then(result => {
        if(result.status == 204){
            window.location.reload()
        }
    })
  }

    const columns = [
      {name: "Nombre", field: "name"},
      {name: "Imagen", field: "image"},
      {name: "Editar", field: "update"},
      {name: "Borrar", field: "delete"},
      ];

      const columnsOrder = columns.map((column) => column.field);
    
      const rows = data.map((element) => {
        return {
          columnsOrder: columnsOrder,
          values: {
            name: `${element.surname} ${element.name}`,
            image: <img className='administration-item-image' src={element.image} ></img>,
            update: <Button 
              text='Editar'
              onClick ={() => window.location = `/administration/update/celebrity/${element.id}`}
              variant='primary'
              className='configuration-form-button'
          />,
          delete: <Button 
            text='Borrar'
            onClick ={() => deleteCelebrity(element.id)}
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