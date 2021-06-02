import Button from '../../Atoms/Button'

export default function UploadItem(){

    const handlePostItem = () => {

    }

    return (<div className='upload-item-container'>
    
        <span className='upload-item-text'>TITULO</span>
        <input className='upload-item-input' placeholder='title' />

        <span className='upload-item-text'>TITULO</span>
        <input className='upload-item-input' placeholder='title' />
        
        <span className='upload-item-text'>TITULO</span>
        <input className='upload-item-input' placeholder='title' />

        <span className='upload-item-text'>TITULO</span>
        <input className='upload-item-input' placeholder='title' />

        <span className='upload-item-text'>TITULO</span>
        <input className='upload-item-input' placeholder='title' />

        <span className='upload-item-text'>TITULO</span>
        <input className='upload-item-input' placeholder='title' />

        <span className='upload-item-text'>TITULO</span>
        <input className='upload-item-input' placeholder='title' />

        <Button 
            text='Crear item'
            onClick ={handlePostItem}
            variant='success'
            className='upload-item-button'
        />
    </div>)
}
