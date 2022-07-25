
import "./Main.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card,Container, Row, Col,Stack} from 'react-bootstrap'
import Logo from "../../../Components/Logo /Logo"
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Main(props) {

 const navigate = useNavigate();
const navigateToRegister =() =>{
  navigate('/register');
}

const navigateToLogin =()=>{
  navigate('/login')
}



    return (
      <div className="main">
        <div>

          <h1> Mental Health Hub </h1>

        <Container>
          <Row className="align-items-center">
            <Col>
            <Logo/>
            </Col>
            <Col>
            <p>The best platform to be able to instantly give or get care!</p>
            </Col>
          </Row>

        </Container>
       </div>




       <div>

   <h2> Welcome to the Mental Health Hub!</h2>

   <h3>Are you a Returning User or a New User?</h3>

<Stack gap={2} className="col-md-5 mx-auto">


  <Button variant ="primary" onClick={navigateToRegister}>New User</Button>




  <Button variant ="secondary"onClick={navigateToLogin}>Returning</Button>


  </Stack>
  </div>












        </div>
    )
  }
