import logo from './assets/images/HLT_Logo_2.0_Update.png'

export default function App() {
  return (
    <main style={{ padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <img src={logo} alt="HLT Logo" style={{ width: 160, height: 'auto' }} />
      <h1 style={{ fontFamily: 'ArtSchoolDropout', color: '#4c6457', fontSize: 32, margin: 0, textAlign: 'center' }}>
        Happy Little Teas
      </h1>
      <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 24, margin: 0, color: '#8c4e37', textAlign: 'center' }}>
        Boba & Beyond
      </p>
    </main>
  )
}
