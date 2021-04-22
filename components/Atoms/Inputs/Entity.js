import {useState} from 'react'
import hit from '../../../api/hit'
import LabeledInput from './Input'

export default function VerifyExistInput({
    label,  value, shouldExist = false,
    setter, isOkSetter = () => {}, checkEndpoint,
    errorMessage = 'No existe la entidad',
    classNameInput, classNameLabel,
}){
    const [error, setError] = useState(null)
    const [fetching, setFetching] = useState(false)
    const [timeoutRef, setTimeoutRef] = useState(null)

    const onFetch = (result) => {
        if(error) return
        if(result.status == 200){
            if(shouldExist){
                if(!result.data){
                    isOkSetter(false)   
                    setError('No existe la entidad') 
                }else{
                    isOkSetter(true)
                    setError(null)
                }
            }else{
                if(!result.data){
                    isOkSetter(true)
                    setError(null)
                }else{
                    isOkSetter(false)   
                    setError('Ya existe la entidad') 
                }
            }
        }else{
            isOkSetter(false)
        }
    }

    const handleOnInput = (currentValue) => {
        setter(currentValue)
        setError(false)
        isOkSetter(false)
        let currentError = null;
        //if(currentValue.length < lengths.min || 
        //    currentValue.length > lengths.max){
        //    currentError = errors.common.stringNotValidLength
        //}
        //setError(currentError)
        setFetching(false)
        if(timeoutRef){
            clearTimeout(timeoutRef)
        }
        if(currentError){
            return;
        }
        let newTimeOut = setTimeout(() => {
            setFetching(false)
            hit(checkEndpoint(currentValue)).then(result => {
                onFetch(result)
            })
        }, 2000)
        setFetching(true)
        
        setTimeoutRef(newTimeOut)
    }
    return(
        <div className='verify-input-container'>
            <LabeledInput
                setter={(e) => handleOnInput(e)}
                value={value}
                type="text"
                label={label || 'ENTIDAD'}
                classNameInput={classNameInput}
                classNameLabel={classNameLabel}
            />
            {
                fetching? (<>...</>) : (

                    <>
                        { value &&
                            <>
                                {
                                    error?
                                    error :
                                    'CORRECTO'
                                }
                            </>
                        }
                    </>
                )
            }
        </div>
    )
}