// pages/user/[id].js
import axios from 'axios';

export async function getStaticPaths() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  const users = response.data;

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = response.data;

  return {
    props: {
      user,
    },
  };
}

export default function UserDetail({ user }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="mb-2">Email: {user.email}</p>
      <p className="mb-2">Phone: {user.phone}</p>
      <p className="mb-2">Company: {user.company.name}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}
