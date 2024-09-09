
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function QueryForm() {

   const [submit , setSubmit] = useState(false);
   const handleSubmit = ()=>{
      setSubmit(true)
      if(submit == ''){
         alert('Please Fill the Form')
      }
      else{
         alert('Successfull Submit')
      }
   }
  
  return (
    <>
    
       <div className='container'>
          <div className="content">
             <div className="form-box login" >
                <h1>Product Query Form</h1>
                  <form action="">
                    <div className="input-box">
                       <input type="text" required/>
                       <label htmlFor="">Product Name</label>
                    </div>
                    <div className="input-box">
                      <input type="number" required />
                      <label htmlFor="">Product Id </label>
                    </div>
                    <div className="input-box">
                       <select name="Query" id="" className='bg-black text-white p-1 border-0 border-blue-800'>
                         <option value="query1">Optional Problem Related To Your Product ...........</option>
                         <option value="query1">Query1</option>
                         <option value="query2">Query2</option>
                         <option value="query3">Query3</option>
                         <option value="query4">Query4</option>
                         <option value="query4">Query5</option>
                         
                         <option value="other">Other-Problem</option>
                        </select> 
                    </div>
                    <div className="input-box">
                      <textarea name="summary" id="" cols={47}
                       placeholder='Define Your Product Problem in short way'
                       className='p-1 text-start bg-black text-white border-blue-800'
                       /> 
                    </div>
                    <button type="submit" className="btn" value="Submit" onSubmit={handleSubmit}><Link to='/result-form'>Submit</Link></button>
 
                 </form>
              <div>
          </div>
       </div>
      </div>
    </div>
 </>
  )
}

export default QueryForm
