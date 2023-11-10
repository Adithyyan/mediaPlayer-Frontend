import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideos } from '../services/allAPI';


function VideoCard({displayVideo , setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    setShow(true)

    const {caption , embedLink} = displayVideo
    const today = new Date
   /* console.log(today);*/
    let timeStamp = new Intl.DateTimeFormat('en-US', {
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today)
    console.log(timeStamp);

    let videoDetails = {
      caption,
      embedLink,
      timeStamp
    }
    await addToHistory(videoDetails)
  }


  const removeVideo = async(id)=>{
    const response = await deleteVideos(id)
    console.log(response);

    setDeleteVideoStatus(true)
  }

  const dragStarted = (e,id)=>{
    console.log(`card no:${id} started dragging`);
    /*console.log(e);*/
    e.dataTransfer.setData("videoID",id)
  }

  return (
    <div>
<Card style={{ width: '100%',height:"430px " }} className='mb-4' draggable onDragStart={(e)=>dragStarted(e,
  displayVideo?.id)}>
      <Card.Img height={"250px"} onClick={handleShow} variant="top"style={{width:"100%", height:"230px"}} src={displayVideo.url}/>
      <Card.Body>
        <Card.Title /* className='d-flex justify-content-between align-items-center' */> </Card.Title>
       <div className='d-flex justify-content-between'>
            <Card.Text>
           <h5 style={{height:"5px"}}>{displayVideo.caption}</h5>
    
            </Card.Text>
            <button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger w-5px h-100%'><i class="fa-solid fa-trash fa-lg" style={{color: "#fbfcfe"}}></i></button>
       </div>
      
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="523px" src={`${displayVideo.embedLink}?autoplay=1`} title="LEO - Naa Ready Lyric Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

       
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>




    </div>
  )
}

export default VideoCard