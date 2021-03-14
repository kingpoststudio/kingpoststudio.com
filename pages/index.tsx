import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Header />
      <div className="container mx-auto bg-yellow-200 dark:bg-dark-gray transition duration-700 ease-in-out">
        <div className="absolute w-32 h-32 rounded-full top-1/4 left-1/3 bg-red-100 dark:bg-blue-200" />
        <div className="container flex flex-row-reverse">
          <div className="absolute w-1/2 top-1/4 pr-8 lg:pr-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-red-600 dark:text-white">A storybook marriage between web development and illustrative design.</h1>
          </div>
        </div>
        <div className="bg-yosemite-day dark:bg-yosemite-night bg-cover bg-center h-screen" />
      </div>
    </div>
  );
}
