import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white">
      <h1 className="text-5xl font-bold text-black">404</h1>
      <p className="text-xl mt-4 text-black">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-white hover:outline outline-1 hover:text-black transition duration-300 ease-in-out"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
