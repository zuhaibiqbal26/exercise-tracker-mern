import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );
  
  export default function BasicCard(props) {

    return (
     
      <Card sx={{ width: 300, backgroundColor:"#F02632", color:"white", borderRadius:"15px", padding:"10px 20px 20px 10px" }}>
        <CardContent>
          
          <Typography fontFamily="'Montserrat', sans-serif" fontWeight={700} variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography fontFamily="'Montserrat', sans-serif" fontWeight={500} sx={{ mb: 1.5 }} color="#E4E4E4">
            {props.des}
          </Typography>
          <Typography fontFamily="'Montserrat', sans-serif" fontWeight={700} variant="body">
            Type: {props.type}
          </Typography>
          <Typography fontFamily="'Montserrat', sans-serif" fontWeight={500} sx={{ fontSize: 14, mt: 0.5 }} color="#E4E4E4" gutterBottom>
            Duration: {props.duration} minutes
          </Typography>
        </CardContent>
        <CardActions>
          <Button className='cardBtn' size="small"><Link className='editLink' to={props.handleEdit}>EDIT</Link></Button>
          <Button className='cardBtn' size="small"  onClick={props.handleDelete}>DELETE</Button>
        </CardActions>
      </Card>
     
    );
  }