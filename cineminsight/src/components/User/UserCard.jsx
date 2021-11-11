export default function UserCard({ user }) {
  return (
    <>
      <div>
        <p>
          Username: <strong>{user.name}</strong>
        </p>
        <p>
          User Email: <strong>{user.email}</strong>
        </p>
      </div>
    </>
  );
}
