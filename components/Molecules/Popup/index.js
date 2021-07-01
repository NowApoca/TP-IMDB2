import {useState} from 'react'
import {Card} from 'react-bootstrap';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function Popup({onClick, info = {}, Button,type}){
    const [popup, setPopup] = useState(false)

    // No deja scrollear cuando ta el popup
    if(popup){
        document.body.style.overflow = 'hidden';
    }else{
        document.body.style.overflow = 'unset';
    }

    return (
        <>
            <Button onClick={() => {
                    setPopup(true)
            }} />
            {
            popup?
            <div className={'popup'}>
                <div className={'popup-child'} >
                        <Card bg={type}>
                            <Card.Header className={'card-header'}>
                                <h3 className={'card-header-title'}>
                                    {info.header || "ATENCION"}
                                </h3>
                                <div className='card-header-button'>
                                    <CancelIcon onClick={() => { setPopup(false)}} fontSize="large" />
                                </div>
                            </Card.Header>  
                            <Card.Body className={'card-title-danger'}>
                            {
                                info.content
                            }
                            <div onClick={() => {
                                    onClick()
                                    setPopup(false)
                                    }} className={'popup-confirm-button'}>
                                        {"CONFIRMAR"}
                                    <CheckCircleIcon onClick={() => {}} style={{ marginLeft:'4%' }} />
                            </div>
                         </Card.Body>
                        </Card>
                </div>
            </div> : null
            }
        </>
    )
  }