import OurTable from "../OurTable";

export default function TitleCast({ data = [] }) {
  const columns = [
    { name: "Actor", field: "actor" },
  ];

  const columnsOrder = columns.map((column) => column.field);

  const rows = data.map((element) => {
    return {
      columnsOrder: columnsOrder,
      values: {
        actor: <div className='title-cast-actor-profile'>
            <img
                src={ `${element.celebrity.image}`}
                className='title-cast-actor-profile-image'
            />
            <span className='title-cast-actor-profile-text'>
                {element.celebrity.surname}
            </span>
            <span className='title-cast-actor-profile-text'>
                {element.celebrity.name}
            </span>
            
            
        </div>
      },
    };
  });

  return (
    <>
      <OurTable columnsOrder={columnsOrder} columns={columns} rows={rows} />
    </>
  );
}