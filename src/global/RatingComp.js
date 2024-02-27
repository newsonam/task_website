import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ButtonComp from './ButtonComp';
import './global.scss';

function RatingComp({ data }) {
  return (
    <div className="rating-wrapper">
      <div className='rating'>
        <h1>{data.rating}</h1>
        <h5>{data.remark}</h5>
        <Stack spacing={1}>
          <Rating name="half-rating" size="small" defaultValue={data.ratingstar} precision={0.5} />
        </Stack>
      </div>
      <ButtonComp title="View" width="180px" />
    </div>
  );
}

export default RatingComp;
