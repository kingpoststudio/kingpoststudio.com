import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <div className="lg:container mx-auto bg-yellow-200 dark:bg-dark-gray transition duration-700 ease-in-out">
        <div className="container -mt-20">
          <div className="bg-yosemite-day dark:bg-yosemite-night bg-cover bg-center h-screen" />
        </div>
      </div>
    </div>
  );
}
