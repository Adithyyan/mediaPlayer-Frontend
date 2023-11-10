import React, { useEffect, useState } from 'react'
import { deleteHistory, getAllHistory } from '../services/allAPI'
import { Link } from 'react-router-dom'

function WatchingHistory() {

 const [history , setHistory] = useState([])

const  getHisory = async()=>{
  const {data} = await getAllHistory()
  console.log(data);
  setHistory(data)
}
console.log(history);

//function to dlete history
const handleDelete = async(id)=>{
  await deleteHistory(id)
  getHisory()
}

useEffect(()=>{
  getHisory()
},[])
  
  return (
    <>
   
    <div className='container mt-5 d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontSize:'20px'}}>Back to Home</Link>
    </div>
    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>

        </tr>
      </thead>

      <tbody>
       { history.length>0?
        history.map((item)=>(<tr>
        
          <td>{item.id}</td>
          <td>{item.caption}</td>
          <td><a href={item.embedLink} target='_blank'>{item.embedLink}</a></td>
          <td>{item.timeStamp}</td>  
          <td>  <button onClick={()=>handleDelete(item?.id)} className='btn btn-danger w-5px h-100%'><i class="fa-solid fa-trash fa-lg" style={{color: "#fbfcfe"}}></i></button></td>       
        </tr>))
        :
      <p>Nothing to display</p>  
       }
    

      </tbody>
    </table>
    </>
  )
}

export default WatchingHistory