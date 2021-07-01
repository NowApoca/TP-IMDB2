import OurTable from "../OurTable";
import Button from '../../Atoms/Button'
import {useEffect, useState} from 'react'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import { useToasts } from 'react-toast-notifications'

export default function CastPut({ data = [], setCast, entityType, entityId }) {
  const { addToast } = useToasts()

  const [celebrities, setCelebrities] = useState([])
  useEffect(() => {
    
    hit(endpoints.CELEBRITIES.GET.GET({limit: 1000})).then(result => {
      if(result.status == 200){
          const celebritiesTemp = []
          result.data.map(element => {
              if(element != null){
                  celebritiesTemp.push({
                    celebrityId: element.id,
                    name: `${element.surname} ${element.name}`
                  })
              }
          })
          setCelebrities(celebritiesTemp);
      }
  })
  }, [])

  const columns = [
    { name: "Actor", field: "actor" },
    { name: "Guardar", field: "save" },
    { name: "Borrar", field: "erase" },
  ];

  const editCast = (index, element, e) => {
    const castCopy = [].concat(data)
    castCopy[index].celebrityId = e.target.value
    setCast(castCopy)
  }

  const saveCast = (element) => {
      hit(endpoints.LINKS.POST.LINK_WITH_CELEBRITY(entityId, entityType), {body: {
        celebrityIds: [element.celebrityId]
      },toasts: {
        addToast, successMessage: 'CELEBRIDAD LINKEADA'
    }}).then(result => {
        if(result.status == 201){

        }
    })
    
  }

  const deleteCast = (index, element) => {
    hit(endpoints.LINKS.POST.UNLINK_WITH_CELEBRITY(entityId, entityType), {body: {
      celebrityIds: [element.celebrityId]
    },toasts: {
      addToast, successMessage: 'CELEBRIDAD DESVINCULADA'
  }}).then(result => {
      if(result.status == 201){
        const castCopy = [].concat(data)
        castCopy.splice(index, 1)
        setCast(castCopy)
      }
  })
  }


  const columnsOrder = columns.map((column) => column.field);

  const rows = data.map((element, index) => {
    return {
      columnsOrder: columnsOrder,
      values: {
        actor: <select onChange={(e) => {
          editCast(index, element, e)
        }} name="select">
          {
            celebrities.map(cele => {
              return <option value={cele.celebrityId} selected={cele.celebrityId == element.celebrityId}>{cele.name}</option>
            })
          }
      </select>,
      save: <Button 
      text='Guardar'
      onClick ={() => saveCast(element)}
      variant='primary'
      className='configuration-form-button'
  />,
      erase: <Button 
      text='Borrar'
      onClick ={() => deleteCast(index, element)}
      variant='danger'
      className='configuration-form-button'
  />,
      },
    };
  });

  return (
    <>
      <OurTable columnsOrder={columnsOrder} columns={columns} rows={rows} />
    </>
  );
}