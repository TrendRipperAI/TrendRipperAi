import Link from 'next/link';
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem' }}>⚡️TrendRipper AI</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
        Discover emerging trends before the rest of the world does.
      </p>
      <p style={{ marginTop: '10px' }}>
        Track TikTok, Reddit, Twitter, and more using real-time AI analysis.
      </p>
      <div style={{ marginTop: '30px', textAlign: 'left', maxWidth: '600px', marginInline: 'auto' }}>
  <h2>Why TrendRipper?</h2>
  <ul style={{ listStyle: '🔥', paddingLeft: '20px', lineHeight: '1.8' }}>
    <li>Uncover viral trends before they hit the mainstream</li>
    <li>Real-time AI scanning of TikTok, X, Reddit & more</li>
    <li>Filter by niche, keyword, or region</li>
    <li>Built for side hustlers, marketers, and product hunters</li>
    <li>No fluff. Just what’s hot, right now.</li>
  </ul>
</div>


      <SignedOut>
        <Link href="/sign-up">
          <button style={{
            marginTop: '30px',
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Create Free Account
          </button>
        </Link>
      </SignedOut>

      <SignedIn>
        <Link href="/dashboard">
          <button style={{
            marginTop: '30px',
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Go to Dashboard
          </button>
        </Link>
      </SignedIn>
    </div>
  );
}
