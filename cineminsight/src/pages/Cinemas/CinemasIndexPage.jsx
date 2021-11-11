import CinemasList from '../../components/Cinemas/CinemasList'

export default function CinemasIndexPage({cinemas}) {
    return (
      <>
        <h1>All Cinemas</h1>
        <hr />
        <div>
          <CinemasList cinemas={cinemas}/>
        </div>
      </>
    );
  }
  