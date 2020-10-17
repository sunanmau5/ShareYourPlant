import React from 'react'
import '../../styles/BoxShadows.css'
import {LeftOutlined, ProfileOutlined} from '@ant-design/icons';
import {Button} from "antd";

const PlantViewComponent = (props) => {


    return (
        <div className='flex flex-row items-center justify-center' style={{height:'100%', width: '100%'}}>
            <div className='card-3 flex flex-column justify-center items-center' style={{height: '700px',width: '500px',  display: 'flex', flexDirection: 'row'}}>
                <Button className='self-end align-self-start'style={{width: '80px'}} icon={<LeftOutlined />}  onClick={props.handlePlantView}> back </Button>
            </div>
        </div>
    )
}

export default PlantViewComponent