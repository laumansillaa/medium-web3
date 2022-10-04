import {Box, Typography} from '@mui/material';
import logo from '../../assets/logo.png'
import ConnectWallet from '../connect/connectWallet';
import style from './styles/Landing.module.css'


const Landing = () => {

    return (
        <Box className={style.contLanding}>
            <img src={logo} alt='medium-png' className={style.logo}/>
            <ConnectWallet/>
        </Box>

    )
}

export default Landing;