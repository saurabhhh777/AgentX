// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to BountyHub</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Deploy, run, and claim AI agents with ease.
      </p>
      <Link href="/dashboard">
        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-zinc-800 transition">
          Go to Dashboard
        </button>
      </Link>
    </main>
  );
}
