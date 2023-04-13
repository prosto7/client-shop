import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import star from '../assets/star.png'
import {useParams} from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {

    // const device = { id: 1, name: "Iphone 12pro", price: "25600", rating: "5", img: "https://img1.goodfon.ru/wallpaper/nbig/a/69/kartinka-3d-dikaya-koshka.jpg" };
    
    const [device,setDevice] = useState({info:[]})
    const {id} = useParams();
    
    useEffect(() => {
        fetchOneDevice(id).then(data=>setDevice(data))
        
    }, []);
    
    
    // const description = [
    //     { id: 1, title: 'Оперативная память', description: '4gb' },
    //     { id: 2, title: 'Камера', description: '12мп' },
    //     { id: 3, title: 'Процессор', description: 'Ryzen 3' },
    //     { id: 4, title: 'Аккумулятор', description: '4000' }
    // ]

    return (

        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + '/' + device.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.brand}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{ background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundsize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>

                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                        style={{ width: 300, height: 300, border: '5px solid lightgray' }}>
                        <h3>От: {device.priсe} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent' }}>{info.title} : {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    )
}
export default DevicePage;