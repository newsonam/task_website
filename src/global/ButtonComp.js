import Button from '@mui/material/Button';
import './global.scss';
function ButtonComp({title,width}) {
    return (
      <div>
       <Button variant="contained" size="medium" sx={{ width: `${width}` }} >
       {title}
        </Button>
      </div>
    );
  }
  
  export default ButtonComp;