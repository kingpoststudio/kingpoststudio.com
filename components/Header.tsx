import { useTheme } from 'next-themes';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const { theme, setTheme } = useTheme();

  const setCurrentTheme = (): void => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className="flex flex-none justify-between bg-white dark:bg-black top-0 z-50 px-4 sm:px-12 w-full max-w-8xl mx-auto sticky h-20">
      <div className="flex flex-none items-center text-red-600">
        <div className="overflow-hidden w-auto">
          <span className="sr-only">King Post Studio home page</span>
          <Logo />
        </div>
        <h1 className="text-4xl px-4 sm:visible invisible">King Post Studio</h1>
      </div>
      <DarkModeToggle />
    </header>
  );
}
