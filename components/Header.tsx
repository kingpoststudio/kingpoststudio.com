import { useTheme } from 'next-themes';
import Logo from './Logo';

export default function Header() {
  const { theme, setTheme } = useTheme();

  const setCurrentTheme = (): void => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className="flex flex-none justify-between bg-white dark:bg-gray-800 shadow-md top-0 z-50 w-full max-w-8xl mx-auto sticky h-20">
      <div className="flex flex-none pl-4 items-center text-red-600 dark:text-yellow-400">
        <button
          type="button"
          className="overflow-hidden w-auto"
          onClick={setCurrentTheme}
        >
          <span className="sr-only">King Post Studio home page</span>
          <Logo />
        </button>
        <h1 className="px-4 sm:visible invisible">King Post Studio</h1>
      </div>
    </div>
  );
}
