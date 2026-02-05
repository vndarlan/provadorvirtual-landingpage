export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '3rem',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: 'white',
      gap: '1rem'
    }}>
      <div>Boa noite! 🌙</div>
      <div>Olá Vinícius! 👋</div>
    </main>
  );
}
