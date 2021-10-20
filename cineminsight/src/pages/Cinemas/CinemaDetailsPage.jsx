import CinemaCard from '../../components/Cinemas/CinemaCard'
import {useLocation} from 'react-router-dom'

export default function CinemaDetailsPage() {
  const {
    state: {cinemaItem}
  } = useLocation();
    return (
      <main>
        <div>CinemaDetailsPage</div>
        <h1>Cinema Details</h1>
        <CinemaCard cinema={cinemaItem} key={cinemaItem._id}/>
      </main>
    );
  }
  