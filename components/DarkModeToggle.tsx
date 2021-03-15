import { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import { useTheme } from 'next-themes';

export default function DarkModeToggle() {
  const [flipped, setFlipped] = useState(false);
  const { theme, setTheme } = useTheme();
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const setCurrentTheme = (): void => setTheme(theme === 'dark' ? 'light' : 'dark');

  function handleThemeChange(): void {
    setFlipped((state) => !state);
    setCurrentTheme();
  }

  return (
    <>
      <a.div
        role="button"
        className="flex flex-none items-center h-12 w-12 my-auto rounded-full bg-yellow-300"
        style={{ opacity: opacity.interpolate((o: number) => 1 - o), transform }}
        onClick={handleThemeChange}
      />
      <a.div
        role="button"
        className="flex flex-none items-center h-12 w-12 -ml-12 my-auto rounded-full bg-red-600"
        style={{ transform: transform.interpolate((t: string) => `${t} rotateX(180deg)`), opacity }}
        onClick={handleThemeChange}
      />
    </>
  );
}
