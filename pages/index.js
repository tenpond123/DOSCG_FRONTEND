import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { useState } from 'react'
import {TextField,Typography,Button} from '@material-ui/core'
import Axios from 'axios'
import {useRouter} from 'next/router'
import MainHeader from '../components/header'
import MainFooter from '../components/footer'
export default function Home() {
  const router = useRouter()
  
  const [valueX,setValueX] = useState(0)
  const [valueY,setValueY] = useState(0)
  const [valueZ,setValueZ] = useState(0)
  const [searchText,setSearchText] = useState("")
  const searchXYZ = async (text) => {
    const response = await Axios({
      method:"POST",
      url:"http://localhost:3500/findxyz",
      data:{
        "value":text
      }
    })
    return response.data
    
  } 
  return (
    <div className={styles.container}>
      
      <MainHeader />
      <main className={styles.main}>
        <h1>Find XYZ</h1>
        <TextField 
          style={{
            width:300
          }}
          placeholder="Fill your text."
          value={searchText}
          onChange={async (e)=>{
            setSearchText(e.target.value)
            if(e.target.value == ""){
              setValueX(0)
              setValueY(0)
              setValueZ(0)
              return
            }
            const resultXYZ = await searchXYZ(e.target.value)
            setValueX(resultXYZ[0].num)
            setValueY(resultXYZ[1].num)
            setValueZ(resultXYZ[2].num)
          }}
        />
        <div style={{display:'flex',flexDirection:'row',marginTop:20,justifyContent:'space-around',width:'100%'}}>
            <Typography variant="h4">
              x = {valueX}
            </Typography>
            <Typography variant="h4">
              y = {valueY}
            </Typography>
            <Typography variant="h4">
              z = {valueZ}
            </Typography>
        </div>
      </main>
      <MainFooter/>
      
    </div>
  )
}
