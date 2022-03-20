//bootsrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components
import Users from "./Users";
import CrearUser from "./crearUser";
import EditarUser from "./editarUser";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Users />
        </Col>
        <Col>
          <CrearUser />
        </Col>
        <Col>
          <EditarUser />
        </Col>
      </Row>
    </Container>
  )
}

export default App
