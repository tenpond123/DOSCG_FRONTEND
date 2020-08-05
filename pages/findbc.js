import React, { useState } from 'react';
import MainHeader from '../components/header'
import styles from '../styles/Home.module.css'
import MainFooter from '../components/footer'
import { Typography, TextField } from '@material-ui/core';
import Axios from 'axios'
function FindBC(props){
    const [valueA,setValueA] = useState("")
    const [valueB,setValueB] = useState("?")
    const [valueC,setValueC] = useState("?")
    
    const searchBC = async (number) => {
        const response = await Axios({
            method:'post',
            url:"http://localhost:3500/findbc",
            data:{
                "value":number
            }
        })
        return response.data
    }
    return(
        <div className={styles.container}>
            <MainHeader/>
            <main className={styles.main}>
                <Typography variant="h4" style={{marginTop:10}}>FIND BC</Typography>
                <TextField 
                style={{width:300,marginTop:20}}
                placeholder="What's your A positive number?"
                value={valueA}
                onChange={async (e)=>{
                    var reg = /^\d+$/;
                    if(e.target.value == ""){
                        setValueA("")
                        setValueB("?")
                        setValueC("?")
                    }
                    if(reg.test(e.target.value)){
                        setValueA(e.target.value)
                        const result = await searchBC(e.target.value)
                        setValueB(result.b)
                        setValueC(result.c)
                    }
                    else{
                        return
                    }
                }}
                />
                <div style={{display:'flex',flexDirection:'row',marginTop:40,justifyContent:'space-around',width:'100%'}}>
                    <Typography variant="subtitle1">
                    WHEN A+B = 23 ,SO B = {valueB}
                    </Typography>
                    <Typography variant="subtitle21">
                    WHEN A+C = -21,SO C = {valueC}
                    </Typography>
                </div>
            </main>
            <MainFooter/>
        </div>
    )
} 
export default FindBC