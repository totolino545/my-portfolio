import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import datos from './assets/datos.json'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {

    const { nombre, estado, localidad, direccion, documento, telefono, mail } = datos;
    
    return (
    <>
      <Container>
       <Card className="card text-black bg-red mb-3" border="success" >  
        <div className="row">                    
              <div className="col-8">
              <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>D.N.I.:  {documento}</Card.Text>
                <Card.Text>Estado Civil:  {estado}</Card.Text>
                <Card.Text>Dirección:  {direccion}</Card.Text>
                <Card.Text>Localidad:   {localidad}</Card.Text>
                <Card.Text>Teléfono:  {telefono}</Card.Text>
              </Card.Body> 
              </div>
              <div className="col-4  gx-5">
                <Image src="./src/assets/foto.jpg" className="img-fluid " roundedCircle/>
              </div> 
      </div>
      </Card> 

    </Container>  
    </> 
    )
}
export default Header