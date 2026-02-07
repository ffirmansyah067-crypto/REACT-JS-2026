interface UserProfileProps {
  name: string;
  age: number;
}

function UserProfile({ name, age }: UserProfileProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
      <h3>Profil Pengguna</h3>
      <p>Nama: {name}</p>
      <p>Umur: {age}</p>
    </div>
  );
}

export default UserProfile;
