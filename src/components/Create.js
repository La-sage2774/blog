import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'


 const Create =()=>{

    const [data, setData] = useState({
        title: "",
        author: "",
        body: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData ((prev)=>{
            return {...prev, [name]: value}
        })

    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/blogs', data)
        .then(res =>{
            toast.success("new blog added successfully", {
                position: "top-right" ,
                autoClose: 3000
            })
        })

        .catch(err =>{
            toast.error("An error Occurred while adding the blog",{
                position: "top-right",
                autoClose: 3000
            })
        })
    }

    return(
        <div>
        <Form onSubmit={handleSubmit}>

     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title:</Form.Label>
        <Form.Control name="title" type="text" onChange={handleChange} placeholder="enter the title" />
     </Form.Group>

     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Author:</Form.Label>
        <Form.Control name="author" type="text" onChange={handleChange} placeholder="Enter the author" />
     </Form.Group>

     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body:</Form.Label>
        <Form.Control  name="body" as="textarea"rows={3} onChange={handleChange} />
     </Form.Group>

     <Button variant="primary" type="submit">Save blog</Button>

        </Form>
        <ToastContainer/>
        </div>
    );
 }

 export default Create;

 