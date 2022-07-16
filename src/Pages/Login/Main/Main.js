
import "./Main.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card} from 'react-bootstrap' 
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
       <Logo/>
        <div class="card">
        <Card>

<Card.Img src="../../Images/mentalHealth.jpg"/>
<Card.Body>
  <Card.Title>
    Welcome to the Mental Health Hub!
  </Card.Title>
  <Card.Text> 
   Are you a returing user or a New User?
    </Card.Text>       
  <Button variant ="primary" onClick={navigateToRegister}>New User</Button>
  
  <Button variant ="secondary"onClick={navigateToLogin}>Returning</Button>
  

  </Card.Body>  
 
</Card>

          
        </div>

        
        

    

        </div>
    )
  }
