import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ButtonComp from '../global/ButtonComp';
import DetailsCard from '../global/DetailsCard';
import HorizontalCard from '../global/HorizontalCard';
import RatingComp from '../global/RatingComp';
import BreadCrumb from '../features/BreadCrumb';
import Options from '../features/Options';
import { Data } from '../MockData/Data';
import './style.scss';
function Main() {
  return (
    <div className="main">
      <p className='main-title'>Best Website Builders in the US</p>
      <div className='relevant'>
        <div className='updated'>
          <div className='last'><CheckCircleOutlineIcon className='icons' /> <p>Last Updated -  February 22 , 2020</p></div>
          <div  className='advertising'> <InfoOutlinedIcon className='icons' /> <p>Advertising Disclosure</p></div>
        </div>
        <div className='top'><p>Top Relevant</p><KeyboardArrowDownIcon className='icons' /></div>
      </div>
      <Options />
      <BreadCrumb />
      <div>
        {Data.map((data,index) => (
          <div className='card-rating' key={index}>
            <HorizontalCard data={data}  />
            <RatingComp data={data} />
          </div>
        ))}

      </div>
      <div className='details'>
        <h3 className="deals">Related deals you might like for</h3>
        <div className='cards'>
          <DetailsCard />
          <DetailsCard />
          <DetailsCard />
        </div>


      </div>
      <div className='sign'>
        <p className='sign-title'>Sign up and get exclusive special deals</p>
        <ButtonComp title="Sign Up" />
      </div>
    </div>
  );
}

export default Main;
