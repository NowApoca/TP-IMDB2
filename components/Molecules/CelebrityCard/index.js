



export default function CelebrityCard({celebrity}){
    return (<div className='celebrity-card-container'>
          <img
            className='celebrity-card-image'
            src='./logo.png'
        />
        <span className='celebrity-card-text'>{celebrity.name || 'ALGUN NOMBRE'}</span>
        <span className='celebrity-card-text'>{celebrity.type || 'ACTOR'}</span>
        <span className='celebrity-card-text'>{celebrity.age || '44'}</span>
    </div>)
}
