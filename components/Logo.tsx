const Logo = ({ className }: { className?: string }) => (
  <div className={className}>
    <img
      src="/images/kps-logo.png"
      alt="KPS Logo"
      style={{ width: '100px' }}
    />
  </div>
);

export default Logo;
