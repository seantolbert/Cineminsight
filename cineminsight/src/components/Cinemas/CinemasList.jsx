import CinemasListItem from "./CinemasListItem";

export default function CinemasList({ cinemas }) {
  const cinemasList = cinemas.map((cinema) => {
    return <CinemasListItem key={cinema._id} cinemaItem={cinema} />;
  });
  return <main>{cinemasList}</main>;
}
