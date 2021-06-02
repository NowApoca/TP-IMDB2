import Button from '../../Atoms/Button'

export default function UploadItem(){

    const handlePostItem = () => {

    }

    return (<div className='upload-celebrity-container'>
    
        <span className='upload-celebrity-text'>TITULO</span>
        <input className='upload-celebrity-input' placeholder='title' />

        <span className='upload-celebrity-text'>TITULO</span>
        <input className='upload-celebrity-input' placeholder='title' />
        
        <span className='upload-celebrity-text'>TITULO</span>
        <input className='upload-celebrity-input' placeholder='title' />

        <span className='upload-celebrity-text'>TITULO</span>
        <input className='upload-celebrity-input' placeholder='title' />

        <span className='upload-celebrity-text'>TITULO</span>
        <input className='upload-celebrity-input' placeholder='title' />

        <span className='upload-celebrity-text'>TITULO</span>
        <input className='upload-celebrity-input' placeholder='title' />

        <span className='upload-celebrity-text'>TITULO</span>
        <input className='upload-celebrity-input' placeholder='title' />

        <Button 
            text='Crear celebrity'
            onClick ={handlePostItem}
            variant='success'
            className='upload-celebrity-button'
        />
    </div>)
}
