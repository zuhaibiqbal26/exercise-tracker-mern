import MenuIcon from '@mui/icons-material/Menu';

export default function Toolbar() {
    return (
    <div className="toolbar">
        <div className="burger">
          <MenuIcon/>
        </div>
        <div className="title"> BURNIT</div>
      </div>
    )
}