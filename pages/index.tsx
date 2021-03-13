import Logo from '../components/Logo';

export default function Home() {
  return (
    <div className="dark:bg-blue-200 bg-gray-900">
      <div className="dark:bg-yosemite-day bg-yosemite-night bg-cover bg-center h-screen">
        <div className="flex flex-none top-0 z-40 w-full max-w-8xl mx-auto sticky h-20">
          <div className="flex flex-none pl-4 items-center">
            <a className="overflow-hidden w-auto" href="/">
              <span className="sr-only">King Post Studio home page</span>
              <Logo />
            </a>
            <h1 className="color-gray-800 px-4">King Post Studio</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
