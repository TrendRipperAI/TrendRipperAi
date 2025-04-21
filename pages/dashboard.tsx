import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/nextjs";

const fakeTrends = [
  { title: "WaterTok Recipes", source: "TikTok", score: 92 },
  { title: "AI Girlfriend Apps", source: "Reddit", score: 87 },
  { title: "Silent Walking", source: "X (Twitter)", score: 85 },
  { title: "Butter Board Craze", source: "TikTok", score: 83 },
  { title: "Male Loneliness Crisis", source: "Reddit", score: 81 },
];

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>📈 Trending Now</h1>
            <UserButton />
          </div>

          <ul style={{ marginTop: '30px', listStyle: 'none', padding: 0 }}>
            {fakeTrends.map((trend, i) => (
              <li key={i} style={{
                background: '#f5f5f5',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <div>
                  <strong>{trend.title}</strong>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>{trend.source}</p>
                </div>
                <span style={{ fontWeight: 'bold' }}>{trend.score}/100</span>
              </li>
            ))}
          </ul>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
