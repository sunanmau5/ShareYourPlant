import React, {useEffect, useState} from 'react'
import Header from "../../Header/Header";
import {Button} from "antd";
import '../../../styles/Fonts.css'
import { useHistory }  from 'react-router-dom'
import ShowPlantData from "../Data/ShowPlantData";

const Forest = require('../../../Assets/img/ForestFoggy.jpg')

const ApiLanding = (props) => {
    const history = useHistory();


    let [imgLoading, setImgLoading] = useState(true);
    let [windowWidth, setWindowWidth] = useState(0);
    let [windowHeight, setWindowHeight] = useState(0);
    let [buttonHovered, setButtonHovered] = useState(false);

    var styles = {
        Container: {
            width: '100vw',
            height: '100vh',
            margin: 0,
            padding: 0,
        },
        Content: {
            width: '100%',
            height: '100%',
            margin: 0,
            padding: windowWidth/45,
            display: 'flex',
            flexDirection: 'column'
        },
        backgroundImg: {
            pointerEvents: 'none',
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: '-1',
            objectFit: 'cover'
    },
        backgroundDiv: {
        overflow: 'hidden',
        width:'100%',
    },
        FontStyle: {
            fontFamily: 'Anton',
            fontSize: '80px',
            paddingLeft: windowWidth/9,
            color: '#E5D4ED',
            textShadow: '3px 3px 20px #000',
},
        buttonStyle: {
            background:    '#15d798',
            borderRadius: '1000px',
            boxShadow:    '2px 2px #444444',
            padding:       '20px 45px',
            color:         '#ffffff',
            display:       'inline-block',
            fontFamily:    'Anton',
            textAlign:    'center',
            width: windowWidth/5,
            marginLeft: windowWidth/8,
        },
        buttonStyleHovered: {
            background:    '#15d766',
            borderRadius: '1000px',
            boxShadow:    '2px 2px #444444',
            padding:       '20px 45px',
            color:         '#ffffff',
            display:       'inline-block',
            fontFamily:    'Anton',
            textAlign:    'center',
            width: windowWidth/5,
            marginLeft: windowWidth/8,
        }
    }




    const colorScheme = {main: '#264653',
        second: '#2a9d8f',
        third: '#e9c46a',
        fourth: '#f4a261',
        fifth: '#e76f51' }

    useEffect( () => {
        updateWindowDimensions()
        window.addEventListener('resize', updateWindowDimensions);
        return function cleanUp() {}
    }, [])

    const updateWindowDimensions = () => {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
    }

    const returnButtonStyle = () => {
        return buttonHovered ?
            styles.buttonStyleHovered
            :
            styles.buttonStyle
    }

    return (
            <div style={styles.Container}>
                <div style={styles.backgroundDiv}>
                    <img style={styles.backgroundImg}
                        src={Forest}
                        alt={Forest}
                        onLoad={ ()=>{
                            console.log('loading done')
                            setImgLoading(false)
                        }
                        }
                    />
                    <Header colorScheme={colorScheme}> </Header>
                    <div style={styles.Content}>
                        <h1 className='noselect' style={styles.FontStyle}> PLANT API</h1>
                        {props.state ?
                            <div style={returnButtonStyle()} onMouseEnter={() => setButtonHovered(true)}
                                 onMouseLeave={() => setButtonHovered(false)}
                                 onClick={() => history.push('/api/showData')}><h1 className='noselect'> enter </h1>
                            </div>
                            :
                            <div>
                                <ShowPlantData width={windowWidth} height={windowHeight}></ShowPlantData>
                            </div>
                        }
                        </div>
                </div>
            </div>
    )


}

export default ApiLanding
