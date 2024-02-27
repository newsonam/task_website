
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ButtonComp from '../global/ButtonComp';

export default function DetailsCard() {
  return (
    <>
    
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/img/comp.png"
        />
        <CardContent>
          <Stack direction="row" spacing={1} color="primary">
            <Chip sx={{
              height: 'auto',
              '& .MuiChip-label': {
                color: '#0066b2',
                padding:'10px'
              },
            }} label="20% Off" size="small" />
            <Chip sx={{
              height: 'auto',
              '& .MuiChip-label': {
                color: '#0066b2',
              },
            }} label="Limited Time" size="small" />
          </Stack>

          <Typography gutterBottom variant="body2" component="div" sx={{ fontWeight: 'bold', margin: 1 }}>
            Webbuilder1
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={'left'}>
            Computer Modern classic with wix support
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Typography gutterBottom variant="h6" component="div">
              $39.96
            </Typography>
            <Typography gutterBottom variant="body2" component="div" color="grey">
              $49.96
            </Typography>
            <Typography gutterBottom variant="body2" component="div" color="red">
              (20% Off)
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <ButtonComp title="View Deal" width="280px" />

        </CardActions>
      </Card>
    </>
  );
}