import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import './global.scss';
// import ButtonComp from '../global/ButtonComp';
import Button from '@mui/material/Button';

export default function HorizontalCard({ data }) {
  return (
    <div className='card-wrapper'>
      {data.productvalue && <div className='best-product'>
        {data.productvalue==='Best Choice'?<EmojiEventsOutlinedIcon className='icon' />:<DiamondOutlinedIcon className='icon'/>}
        <p>{data.productvalue}</p>
      </div>}
    
      <Card sx={{ maxWidth: 780, display: 'flex', alignItems: 'center', justifyContent: 'center' }} orientation="horizontal" className='card-wrapper'>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          width="100"
          sx={{ maxWidth: 260}}
          image={data.imgurl}
        />
        
        <CardContent sx={{ textAlign: 'left' }}>


          <Typography gutterBottom variant="body2" component="div" sx={{ fontWeight: 'bold', margin: 1 }}>
            {data.title}-
            <Typography gutterBottom variant="body2" component="div">
              {data.subtitle}
            </Typography>
          </Typography>
          {data.off && <Chip sx={{
            height: 'auto',
            '& .MuiChip-label': {
              color: '#0066b2',
              padding: '5px'
            },
          }} label={data.off} size="small" />}
          <Typography gutterBottom variant="body2" component="div" sx={{ fontWeight: 'bold', margin: 1 }}>
            Main highlights
          </Typography>
          {data.features &&
            <div className='mainfeature'>
              <div className='feature'>
                <Chip sx={{
                  height: 'auto',
                  '& .MuiChip-label': {
                    color: '#0066b2',
                  },
                }} label='9.9' size="small" />
                <Typography variant="body2" color="text.secondary" textAlign={'left'} sx={{ margin: 1 }}>Building Responsive </Typography>
              </div>
              <div className='feature'>
                <Chip sx={{
                  height: 'auto',
                  '& .MuiChip-label': {
                    color: '#0066b2',
                  },
                }} label='8.9' size="small" />
                <Typography variant="body2" color="text.secondary" textAlign={'left'} sx={{ margin: 0.5 }}>Cool</Typography>
              </div>
              <div className='feature'>
                <Chip sx={{
                  height: 'auto',
                  '& .MuiChip-label': {
                    color: '#0066b2',
                  },
                }} label='8.9' size="small" />
                <Typography variant="body2" color="text.secondary" textAlign={'left'} sx={{ margin: 1 }}>Docs</Typography>
              </div>
            </div>
          }
          {data.highlights && <Typography variant="body2" color="text.secondary" textAlign={'left'} sx={{ margin: 1,marginLeft:3 }}>
            {data.highlights}
          </Typography>}
          {data.benefits &&
            <Typography variant="body2" color="text.secondary" textAlign={'left'} padding={1}>Why we love it</Typography>}
          {data.benefits && data.benefits.map((benefit,index) => (
            <div key={index} className='check'>
              {/* <label> <input type="checkbox" checked />{benefit}</label> */}
              <CheckCircleOutlineIcon className='check-icon' />
              <p key={index}>{benefit}</p>
            </div>
          ))}



          <CardActions>
            <Button size="small">Show more</Button>

          </CardActions>
        </CardContent>

      </Card>
    </div>
  );
}