import { useTheme } from 'next-themes';
import Logo from '../components/Logo';

export default function Home() {
  const { theme, setTheme } = useTheme();

  const setCurrentTheme = (): void => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className="bg-blue-200 dark:bg-gray-900">
      <div className="bg-yosemite-day dark:bg-yosemite-night bg-cover bg-center h-screen">
        <div className="flex flex-none justify-between top-0 z-40 w-full max-w-8xl mx-auto sticky h-20">
          <div className="flex flex-none pl-4 items-center">
            <a className="overflow-hidden w-auto" onClick={setCurrentTheme}>
              <span className="sr-only">King Post Studio home page</span>
              <Logo />
            </a>
            <h1 className="px-4">King Post Studio</h1>
          </div>
          <div className="flex flex-none pr-4 items-center">

          </div>
        </div>
      </div>
    </div>
  );
}
