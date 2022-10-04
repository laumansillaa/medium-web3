import {Link} from 'react-router-dom'
import style from './styles/index.module.css'
import menu from '../../assets/svg/menu.svg'
import iconLogo from '../../assets/iconLogo.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import PersonIcon from '@mui/icons-material/Person';



const SideBar = () => {


    return (
        <div className={style.contSideBar}>
            <div className={style.contIconLogo} >
                <div>
                    <img src={iconLogo} alt='logo' className={style.iconLogo} />
                </div>
                {/* <label for= 'menu' className={style.navLabel}>
                    <img src={menu} alt='menu-svg' className={style.navSvg} />
                </label>
                <input type='checkbox' id='menu' className={style.navInput}></input> */}
            </div>
            <div className={style.contItems}>
                <Link to='/' className={style.link}><HomeOutlinedIcon className={style.icon}/></Link>
                <Link to='/' className={style.link}><BookOutlinedIcon className={style.icon}/></Link>
                <Link to='/' className={style.link}><RateReviewOutlinedIcon className={style.icon}/></Link>
            </div>
            <div className={style.contUserIcon}>
                <div className={style.iconHover}>
                    <Link to='/' className={style.link}><PersonIcon sx={{color: 'black'}}/></Link>
                </div>
            </div>
            
        </div>
    )
}

export default SideBar;