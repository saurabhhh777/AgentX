import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full p-4 shadow flex justify-between items-center">
      <Link href="/">
        <span className="font-bold text-xl">PromptOps</span>
      </Link>
      <nav className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/bounties">Bounties</Link>
      </nav>
    </header>
  );
};

export default Header;