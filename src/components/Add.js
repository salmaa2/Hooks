import {Modal,Button,Form} from "react-bootstrap"
import React, { useState } from 'react';
import Rating from "./Rating";

function Add({moviedata, setMoviedata}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [title,setTitle]=useState('')
    const [discription,setDiscritipionn]=useState('')
    const [path,setPath]=useState('')
    const [rating,setRating]=useState('')

     const Ajouter=()=>{setMoviedata([...moviedata, {
       id:Math.random,
      title :title ,
      description : discription,
      posterUrl : path,
      rate:rating


     }])}
    return(
        <div className="add">
     <Button className="add-butt" onClick={handleShow}>
        Add New Serie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Serie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" onChange={(e)=> setTitle(e.target.value)} value={title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Discription</Form.Label>
           
            <Form.Control as="textarea" rows={3} placeholder="Enter Discription" onChange={(e)=> setDiscritipionn(e.target.value)} value={discription}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="text" placeholder="Enter the path" onChange={(e)=> setPath(e.target.value)} value={path}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Rating rating={rating} setRating={setRating}/>
            </Form.Group>
        </Form>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="success" onClick={()=> {  Ajouter();  handleClose() }}>
            Add
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>

    )
}

export default Add