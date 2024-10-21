// app/layout.js
export const metadata = {
  title: 'My User App',
  description: 'A simple Next.js app displaying user information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-gray-800 text-white">
          <h1>My User App</h1>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          <p>&copy; 2024 My User App</p>
        </footer>
      </body>
    </html>
  );
}
