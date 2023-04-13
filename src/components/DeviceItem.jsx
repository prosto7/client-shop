import React from 'react'
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';
import vectorstar from '../assets/vectorstar.png'
import { DEVICE_ROUTE } from '../utils/consts';




const DeviceItem = ({device}) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className={"mt-3"} onClick={()=>navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{'height':'250px', 'border': '--bs-gray' }} dstyle={{width:150, cursor: 'pointer'}}  className="rounded card_item">
                <Image style={{margin:'auto'}}  width={135} height={135} src={process.env.REACT_APP_API_URL +'/'+ device.img}/>
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                    <div>{device.brand}</div>
                    <div>
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={vectorstar}/>
                    </div>
                
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem;