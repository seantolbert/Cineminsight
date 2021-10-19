import {Link} from 'react-router-dom'
import CinemasList from '../../components/Cinemas/CinemasList'

export default function CinemasIndexPage({cinemas}) {
    return (
      <main>
        <div>CinemasIndexPage</div>
        <h1>All Games</h1>
        <Link to="/cinemas/new"><button>New Game</button></Link>
        <hr />
        <main>
          <CinemasList cinemas={cinemas}/>
        </main>
      </main>
    );
  }
  