import { useState } from 'react';
import React from 'react'
import Button  from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';

function Add({setUploadVideoStatus}){

  const [data, setData] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const embedVideoLink = (e)=>{
    const {value} = e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setData({...data,embedLink:link})
  }
  console.log(data);

  const handleUpload = async()=>{
    const {id,caption,url,embedLink} = data
    if(!id || !caption || !url || !embedLink){
      alert('Please fill the form completely')

    }
    else{
      const response = await uploadAllVideo(data)
      console.log(response);
      if(response.status>=200 && response.status<300){
        alert(`${response.data.caption} is successfully uploaded`)
        setUploadVideoStatus(response.data)
        //to close the modal
        handleClose()

      }
      else{
        console.log(response);
        alert('Something Went Wrong .Try again later')
      }
    }

  }

   return (
    <>
    <div>
    <h4>UPLOAD A NEW VIDEO
    <Button onClick={handleShow} variant="light" style={{marginLeft:'10px'}}><i class="fa-solid fa-download" style={{color:'white'}}></i></Button>{' '}</h4>
    </div>   
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film" style={{marginRight:'10px'}}></i>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border border-secondary rounded p-2'>
          <Form.Group className="mb-3" controlId="formBasicEmail">      
             <Form.Control onChange={(e)=>setData({...data,id:e.target.value})} type="text" placeholder="Enter Video Id" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicEmail">      
             <Form.Control onChange={(e)=>setData({...data,caption:e.target.value})} type="text" placeholder="Enter Video Caption" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicEmail">      
             <Form.Control onChange={(e)=>setData({...data,url:e.target.value})} type="text" placeholder="Enter Video image Url" />
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicEmail">      
             <Form.Control onChange={embedVideoLink} type="text" placeholder="Enter Yutube Video Link" />
           </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add