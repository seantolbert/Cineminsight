import CinemaCard from '../../components/Cinemas/CinemaCard'
import {useLocation} from 'react-router-dom'

export default function CinemaDetailsPage({handleDeleteCinema}) {
  const {
    state: {cinemaItem}
  } = useLocation();
    return (
      <>
        <h1>Details</h1>
        <CinemaCard cinema={cinemaItem} key={cinemaItem._id} handleDeleteCinema={handleDeleteCinema}/>
      </>
    );
  }
  