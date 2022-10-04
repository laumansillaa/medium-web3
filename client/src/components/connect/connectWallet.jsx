import { useEffect, useState } from "react";
import logo from '../../assets/logo.png'
import SideBar from '../sidebar/sideBar'
import Home from '../home/home'
import metamask from '../../assets/metamask.png'
import {Box, Typography, Button} from '@mui/material'
import style from './styles/connect.module.css'


const ConnectWallet = () => {

    const [currentAccount, setCurrentAccount] = useState(null)
    // console.log('CURRENT ACCOUNT', currentAccount)

    const checkIfWalletIsConnected = async () => {
        const {ethereum} = window;

        if (!ethereum) {
            console.log('Make sure you have Metamask')
            return
        } else {
            console.log('We have the ethereum object', ethereum)
        }

        const accounts = await ethereum.request({method: 'eth_accounts'})
        // console.log('Accounts', accounts)
        if (accounts.length !== 0) {
            const account = accounts[0]
            // console.log('Found an authorized account: ', account)
            setCurrentAccount(account)
        } else {
            console.log('No authorized account found')
        }
    }


    const connectWalletAction = async () => {
        try {
            const {ethereum} = window;

            if (!ethereum) {
                alert('Get MetaMask')
                return
            }
            const accounts = await ethereum.request({method: 'eth_requestAccounts'})
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        checkIfWalletIsConnected()
        const checkNetwork = async () => {
            try {
                if (window.ethereum.networkVersion !== '5') {
                    alert ('Please connect to Rinkeby')
                    
                }
            } catch (error) {
                console.log(error)
            }
        }
        // console.log('Network Version', window.ethereum.networkVersion)
        checkNetwork()
    }, [currentAccount])


    return (
            <>
                {
                    !currentAccount?
                    <Box className={style.contConnect}>
                        <img src={logo} alt='medium-png' className={style.logo}/>
                        <Box className={style.contBtn}>
                            <Button 
                                variant='contained'
                                onClick={connectWalletAction} 
                                className={style.btnConnect}
                                sx={{
                                    background: 'Black',
                                    '&:hover': {
                                        background: 'Black'
                                    }

                                }}>
                                    CONNECT WALLET 
                            <img src={metamask} alt='metamask' className={style.metamask} />
                            </Button> 
                        </Box>
                    </Box>
                    :
                    <Home/>
                }
            </>
        
    )
}

export default ConnectWallet;