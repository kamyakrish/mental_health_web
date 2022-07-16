import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card,Breadcrumb,Form } from 'react-bootstrap' 
import {Routes, Route, useNavigate} from 'react-router-dom';


export default function Login(props) {

  const navigate = useNavigate();
  const navigateToDashboard =()=>{
    navigate('/dashboard')
  }


    return (
      <div className="login" id="login">
        <h1>Please login below: </h1>
        <Form>
          <Form.Group>
            <Form.Label> Email address: </Form.Label>
            <Form.Control type ="email" placeholder="Example@gmail.com" />
            <Form.Label> Password: </Form.Label>
            <Form.Control type ="password" placeholder="Password" />
            

          </Form.Group>
        </Form>
        <Button variant ="primary" onClick={navigateToDashboard} >Submit</Button>
        

        
        </div>
    )
  }
