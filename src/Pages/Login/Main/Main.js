
import "./Main.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card} from 'react-bootstrap' 
import Logo from "../../../Components/Logo /Logo"
export default function Main(props) {


    return (
      <div className="main">
       <Logo/>
        <div class="card">
        <Card>

<Card.Img/>
<Card.Body>
  <Card.Title>
    Welcome to the Mental Health Hub!
  </Card.Title>
  <Card.Text> 
    Please select if you are: 
    </Card.Text>       
  <Button variant ="primary">User</Button>
  
  <Button variant ="secondary">Therapist</Button>
  

  </Card.Body>  
 
</Card>

          
        </div>

        
        

    

        </div>
    )
  }
