import OurTable from "../OurTable";

export default function TitleCast({ data = [] }) {
  const columns = [
    { name: "Actor", field: "actor" },
    { name: "Personajes", field: "characters" },
  ];
  const columnsOrder = columns.map((column) => column.field);

  const rows = data.map((element) => {
    return {
      columnsOrder: columnsOrder,
      values: {
        actor: <div className='title-cast-actor-profile'>
            <img
                src='../logo.png'
                className='title-cast-actor-profile-image'
            />
            <span className='title-cast-actor-profile-text'>
                {element.surname}
            </span>
            <span className='title-cast-actor-profile-text'>
                {element.name}
            </span>
            
            
        </div>,
        name: 
          <a href={`/customers/${element.social_reason}`}>
            
          </a>
        ,
        characters: element.characters.map(character => character)
      },
    };
  });

  return (
    <>
      <OurTable columnsOrder={columnsOrder} columns={columns} rows={rows} />
    </>
  );
}