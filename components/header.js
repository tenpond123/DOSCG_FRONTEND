import React from 'react';
import {useRouter} from 'next/router'
import {Button} from '@material-ui/core'
const header = (props) => {
    const router = useRouter()
    const [reactStyle,setReactStyle] = React.useState({
    main_header:{
      height:80,
      width:'100%',
      backgroundColor:'#eee',
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:20
    }
  })
    return(
        <header style={reactStyle.main_header}>
            <Button variant="button" onClick={()=>router.push("/")}>Find XYZ</Button>
            <Button variant="button" onClick={()=>router.push("/findbc")}>Find BC</Button>
            <Button variant="button" onClick={()=>router.push("/mycv")}>My CV</Button>
      </header>
    )
}

export default header