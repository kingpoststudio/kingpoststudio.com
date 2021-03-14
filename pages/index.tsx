import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Header />
      <div className="lg:container mx-auto bg-yellow-200 dark:bg-dark-gray transition duration-700 ease-in-out">
        <div className="container -mt-20">
          <div className="absolute w-1/2 top-24 ml-4 bg-white dark:bg-transparent border border-red-600 dark:border-transparent text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-red-600 dark:text-gray-200 p-4 shadow-md">
              Where web development & illustrative design meet.
            </h1>
          </div>
        </div>
        <div className="bg-yosemite-day dark:bg-yosemite-night bg-cover bg-center h-screen" />
      </div>
    </div>
  );
}
