import {Box, Typography} from '@mui/material'
import style from './styles/home.module.css'
import SideBar from '../sidebar/sideBar'




const Home = () => {


    return (
        <Box className={style.contHome}>
            <SideBar/>
            <Box className={style.contHomeBody}>
                Aca va todo el home
            </Box> 
        </Box>
    )
}


export default Home;