import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import jobs from './assets/jobs.json'

function Section() {
    const { empresa, fecha, cargo, tareas } = jobs;
    return ( 
    <>
    <Container >
    <Accordion defaultActiveKey="0" flush border="success">
    { jobs.map(item => {return (
      <Accordion.Item eventKey={item.id} key={item.id}>
        <Accordion.Header>
            <div className='container '>
                <div className='row'>
                    <div className='col align-items-start'> <strong>{item.empresa}</strong></div>
                    <div className='col justify-content-end text-muted text-end'>{item.fecha}</div> 
                </div>          
            </div>
        </Accordion.Header>
        <Accordion.Body>
            <Card bg="secondary">
                <Card.Header>{item.cargo}</Card.Header>
                <Card.Body>
                        { item.tareas.map(tarea => {return (
                        <Card.Text key={item.id}>{tarea}</Card.Text>
                        )}
                    )}                                        
                </Card.Body>
            </Card>
        </Accordion.Body>
      </Accordion.Item>
         )}
         )}
    </Accordion>
    </Container>
    </> 
    );
}

export default Section;