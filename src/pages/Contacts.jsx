import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Map from '../components/Map';
import location from "../assets/icons/location.png" ;
import phone from "../assets/icons/phone.png" ;
import calendar from "../assets/icons/calendar.png" ;

// <Image width={18} height={18} src={vectorstar}/>

const Contacts = () => {
    return (
    <Container>
        <Row> 
            <h2 className="mt-5">Контакты</h2>
        </Row>
        <hr />
      
        <Row className="m-auto"> 
           <Col className="md-3 mr-5 mt-5">
           <div className="mb-5">
           <div style={{display:'inline-flex'}}  className="mb-2"  ><Image  className="m-1" width={18} height={18} src={location}/>
            <h5 className="ml-2">Расположение офиса:</h5></div>
            <br />
           <a href="https://yandex.ru/maps/213/moscow/house/spasopeskovskiy_pereulok_3_1s2/Z04Ycw9nS0IFQFtvfXt1eHxgZA==/?ll=37.588778%2C55.749423&z=18" target="_blank" style={{ "text-decoration" :"none", color: "#080808" }} >г. Москва, ​Спасопесковский переулок, 3/1 ст2</a><br />
           <span>М. Смоленская</span>
           </div>
           
           </Col>
           <Col className="md-3 m-5">
           <div >
           <div style={{display:'inline-flex'}} className="mb-2" ><Image   className="m-1" width={18} height={18} src={calendar}/> <h5 className="ml-2">График работы:</h5></div>
           <br />
           <span  >Пн-Пт 12:00–20:00, Сб 12:00–20:00</span>
           </div>
           </Col>
           <Col className="md-3 m-5 ">
           <div>
           <div style={{display:'inline-flex'}}  className="mb-2" ><Image className="m-1" width={18} height={18} src={phone}/><h5 className="ml-2">Номер телефона:</h5></div>
           <br />
           <a  style={{ "text-decoration" :"none", color: "#080808" }} href="tel:+79231119070">+7 (923) 111-90-70</a>
           </div></Col>
        </Row>
 
        <Row>

        <Container className="mt-4">
            {/* <div className="contacts_block" style={{background:
        `red`, width: `70vw`, height: `70vh`}}>

            </div> */}

            <Map/>
        </Container>
    
        </Row>
    </Container>

    )
}

export default Contacts;