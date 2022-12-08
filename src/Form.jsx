import React from 'react';
import './index.css';
const Form=({ action, type,})=>{
    return (
        <div class="form" >
        <form className="form-container" onSubmit={(e)=>action(e)}>
            {type==='UPDATE' && (<input className='input' type={'number'} placeholder={'id'}/>)}

            <input className='input' type={'text'} placeholder='name'/>
            
            <input className='input' type={'number'} placeholder='number'/>
            
            <input className='input' type={'email'} placeholder='email'/>
            <button className='btn-btn-submit' type='submit'>dff</button>
            </form>
            </div>
    )
}
export default Form;