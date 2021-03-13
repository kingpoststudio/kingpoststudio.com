import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Header />
      <div className="container mx-auto bg-yellow-200 dark:bg-gray-800 transition duration-700 ease-in-out">
        <div className="absolute w-32 h-32 rounded-full top-1/4 left-1/2 bg-white dark:bg-yellow-300" />
        <div className="bg-yosemite-day dark:bg-yosemite-night bg-cover bg-center h-screen">
        </div>
      </div>
    </div>
  );
}
