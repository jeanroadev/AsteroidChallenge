// app/page.js
import Link from 'next/link';

export default async function HomePage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <ul className="list-disc pl-6">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <Link href={`/user/${user.id}`} className="text-blue-600 hover:underline">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
