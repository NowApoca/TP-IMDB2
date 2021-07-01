import OurTable from "../OurTable";
import Button from '../../Atoms/Button'
import {useEffect, useState} from 'react'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import { useToasts } from 'react-toast-notifications'

export default function MoviePut({ data = [], setRelatedMovies, entityType, entityId }) {
  const { addToast } = useToasts()

  const [items, setItems] = useState([])
  useEffect(() => {
    
    hit(endpoints.ITEMS.GET.GET({limit: 1000})).then(result => {
      if(result.status == 200){
          const celebritiesTemp = []
          result.data.map(element => {
              if(element != null){
                  celebritiesTemp.push({
                    itemId: element.id,
                    name: `${element.title}`
                  })
              }
          })
          setItems(celebritiesTemp);
      }
  })
  }, [])

  const columns = [
    { name: "Pelicula o serie", field: "actor" },
    { name: "Guardar", field: "save" },
    { name: "Borrar", field: "erase" },
  ];

  const editCast = (index, element, e) => {
    const castCopy = [].concat(data)
    castCopy[index].itemId = e.target.value
    setRelatedMovies(castCopy)
  }

  const saveCast = (element) => {
      hit(endpoints.LINKS.POST.LINK_WITH_ITEM(entityId, entityType), {body: {
        itemIds: [element.itemId]
      },toasts: {
        addToast, successMessage: 'PELICULA O SERIE LINKEADA'
    }}).then(result => {
        if(result.status == 201){

        }
    })
    
  }

  const deleteCast = (index, element) => {
    console.log(element)
    hit(endpoints.LINKS.POST.UNLINK_WITH_ITEM(entityId, entityType), {body: {
      itemIds: [element.itemId]
    },toasts: {
      addToast, successMessage: 'PELICULA O SERIE DESVINCULADA'
  }}).then(result => {
      if(result.status == 201){
        const castCopy = [].concat(data)
        castCopy.splice(index, 1)
        setRelatedMovies(castCopy)
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
            items.map(cele => {
              return <option value={cele.itemId} selected={cele.itemId == element.itemId}>{cele.name}</option>
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