import Logo from '../components/Logo';

export default function Home() {
  return (
    <div className="flex flex-none top-0 z-40 w-full max-w-8xl mx-auto sticky h-20 border-b">
      <div className="flex flex-none pl-4 items-center">
        <a className="overflow-hidden w-auto" href="/">
          <span className="sr-only">King Post Studio home page</span>
          <Logo />
        </a>
      </div>
    </div>
  );
}
