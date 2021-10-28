import { Link } from "react-router-dom";
import PerfectExample from "../../Assets/perfect_example.png";
import Logo from "../../Assets/cineminsight_logo.png";

export default function HomePage({ user }) {
  return (
    <>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <div>
            <h1 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Welcome to </span>
              <span className="block text-purple-700 xl:inline rounded-xl">
                Cineminsight
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Record your thoughts for your favorite shows and Movies!
            </p>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Get started and enjoy!
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  to="/cinemas/new"
                >
                  Add Cinema
                </Link>
              </div>
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start lg:pb-4">
              <div className="rounded-md shadow">
                <Link
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  to="/user/insights/newinsight"
                >
                  Create Insight
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="lg:absolute mx-5 my-5 py-5">
        <img
          className="h-full w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full lg:border rounded-2xl"
          src={PerfectExample}
          alt=""
        />
      </div>
    </>
  );
}
