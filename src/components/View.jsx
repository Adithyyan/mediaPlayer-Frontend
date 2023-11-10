import React, { useEffect, useState } from 'react'
import {Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideo } from '../services/allAPI'

function View({uploadVideoStatus}) {

  const [allvideo , setAllVideo]= useState([])

  const [deleteVideostatus , setDeleteVideoStatus] = useState(false)

  const getAllUploadedVideos = async()=>{
    const response = await getAllVideo()
    const {data}= response
    console.log(data);
    setAllVideo(data)
  }

  console.log(allvideo);

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus, deleteVideostatus])
  return (
    <>
    <Row>
      {allvideo.length>0?
      allvideo.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}>
      <VideoCard displayVideo = {video} setDeleteVideoStatus={setDeleteVideoStatus} />
   </Col> )) 
          :   
      <p>Nothing to display</p>
      }
    </Row>
    </>
  )
}

export default View