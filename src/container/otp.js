import {useEffect, useRef, useState} from 'react'
export default function Otp({otplength=6}){
    const [otpFields,setOtpFields]= useState(new Array(otplength).fill(""))
    const ref = useRef([]);
    const handleKeyDown=(e,index)=>{
        const key=e.key
        const copyotpfield = [...otpFields];
        if(key === "ArrowLeft"){
            if(index-1>=0){
                ref.current[index-1].focus();
            }
        }
        if(key === "ArrowRight"){
            if(index+1<otpFields.length){
                ref.current[index+1].focus();
            }
        }
        if(key === "Backspace"){
            copyotpfield[index]=""
            setOtpFields(copyotpfield)
            if(index-1>=0){
                ref.current[index-1].focus();
            }
            return
        }
        console.log(key)
        if(isNaN(key)){return}
        copyotpfield[index] = key;
        if(index+1<otpFields.length){
            ref.current[index+1].focus();
        }
        setOtpFields(copyotpfield)
    }
    useEffect(()=>{
        ref.current[0].focus();
    },[])
    return(
        <>
        <div className='container'>
            {otpFields.map((value,index)=>{
               return( 
                <>
               <input 
               key={index}
               type="text" 
               value={value} 
               ref={(currentInput)=>(ref.current[index] = currentInput)}
               onKeyDown={(e) => handleKeyDown(e, index)}
               />                
                </>
               )
            })}
        </div>
        </>
    )
}