import React from 'react';
import MainHeader from '../components/header'
import MainFooter from '../components/footer'
import styles from '../styles/Home.module.css'
import { Document, Page } from 'react-pdf';
import { Card, Typography } from '@material-ui/core';
import {useWindowSize} from '@react-hook/window-size'

export default function MyCV(props){
    
    const [width,height] = useWindowSize()
    const [pageNumber,setPageNumber] = React.useState(1)
    const [mainHeight,setHeight] = React.useState(height-180)
    return(
        <div className={styles.container}>
            <MainHeader/>
                <main style={{height:height-180,width:'100%',display:'flex',flexDirection:'column',alignItems:'center',overflow:'scroll'}}>
                    <Typography variant="h4" style={{marginTop:20}}>My CV</Typography>
                        <img src={require("../assets/CV.png")} style={{transform:[{scale:0.5}]}}/>
                </main>
            <MainFooter/>
        </div>        
    )
}