import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button'
import { addToCategories, getAVideo, getAllCategories, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';
import { Row, Col, Card } from 'react-bootstrap';


function Category() {

  const [show, setShow] = useState(false);

  const [CategoryName, setCategoryName] = useState()

  const [allCategory, setAllcategory] = useState()
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to add category
  const handleAddCategory = async()=>{
  console.log(CategoryName);
  if(CategoryName){
    let body = {
      CategoryName,
      allVideos: []
    }
    //make api call
    const response = await addToCategories(body)
    console.log(response);
    if(response.status>=200 && response.status<300){
      alert('Category successfully Added')
      setCategoryName("")
      //to close modal
      handleClose()
    }
    else(
      alert('something went wrong')
    )
  }
  else{
    alert('Please Upload the Category Name')
  }
  }

  //function to get all category

  const getCategory = async()=>{
    const {data} = await getAllCategories()
    console.log(data);
    setAllcategory(data)
  }
  console.log(allCategory);

//draggover eventListener
const dragover = (e)=>{
  //this will prevent reload so that the data that we send from videocard.jsx wont be lost
  e.preventDefault()
  console.log('inside dragover');
}

const videoDrop = async(e, categoryId)=>{
  console.log(`dropped inside the categoryid ${categoryId}`);
  //to get the videoid that is send from the 
 const videoid = e.dataTransfer.getData("videoID")
 console.log(videoid);

 //api to get the purticualar video that is dragged
 const {data} = await getAVideo(videoid)
 console.log(data);

 //to find the purticular category with the specific id
 let selectedCategory = allCategory?.find(item=>item.id===categoryId)
 console.log(selectedCategory);

 //data is added to the allvideos array in the purticular category with the specific id
 selectedCategory.allVideos.push(data)
 console.log(selectedCategory);

 await updateCategory(categoryId,selectedCategory)
 getAllCategories()

}

  useEffect(()=>{
    getCategory()
  },[])

  return (
    <>

    <div className='d-grid ms-3'>
      <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
    </div>
     
     { allCategory?.length>0?
     allCategory?.map((item)=>(<div className='m-5 border border-secondary rounded p-3'>
     <div className="d-flex justify-content-between align-items-center" droppable onDragOver={(e)=>dragover(e)}
     onDrop={(e)=>videoDrop(e, item?.id)}>
      <h6>{item.CategoryName}</h6>
      <button className='btn btn-danger w-5px h-100%'><i class="fa-solid fa-trash fa-lg" ></i></button>
     </div>
     <Row>
      <Col sm={12}>
        {
          item.allVideos?.length>0?
          item.allVideos.map(Card=>(<VideoCard displayVideo={Card}/>))
           : <p>Nothing to Display</p>
        }
      </Col>
     </Row>
     </div> ))
     :<p></p>
     }
   

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
          
           <Form.Group  className="mb-3" controlId="formBasicEmail">     
           <Form.Label>Category Name</Form.Label> 
             <Form.Control type="text" placeholder="Enter Category Name " onChange={(e)=>setCategoryName(e.target.value)}/>
           </Form.Group>
          
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Category