import MenuIcon from '@mui/icons-material/Menu';
import logo from "../media/logo.png";

export default function Toolbar({openSidebar}) {
    return (
    <div className="toolbar">
        <div className="burger">
          <MenuIcon fontSize='large' onClick={openSidebar}/>
        </div>
        <div className="title"> <img src={logo} alt="logo"/></div>
      </div>
    )
}