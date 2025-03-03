import { useState } from 'react'
export default function Toast() {
    const [toast, setToast] = useState([])
    const handelshow = (message, type) => {
        const id = new Date().getTime();
        const newToast = [...toast, {id, message, type}]
        setToast(newToast);
        setTimeout(()=> handelclose(id),5000)
        
    }
    const handelclose = (id) => {
        setToast((previoustoast)=>{
            const filteredarray = previoustoast.filter((toast)=>{
            return toast.id !== id;
       })
       return filteredarray
    })
    }
    return (
        <>
            <div className='container'>
                <div className="toast-container">
                    {toast.map(({ id, message, type }) => {
                        return (
                            <div className={`toast ${type}`} key={id}>
                                {message} Toast <span onClick={()=>handelclose(id)}>×</span>
                            </div>
                        )
                    })}
                </div>
                <div className="btn-container">
                    <button onClick={() => handelshow("Sucess", "sucess")}>Sucess</button>
                    <button onClick={() => handelshow("Info", "info")}>Info</button>
                    <button onClick={() => handelshow("Warning", "warning")}>Warning</button>
                    <button onClick={() => handelshow("Error", "error")}>Error</button>
                </div>
            </div>
        </>
    )
}