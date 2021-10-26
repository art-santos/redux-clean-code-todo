import React from 'react'
import { ChallengeComponent } from './ChallengeComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginLeft: 25, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <h1>Welcome To The Every.io Code Challenge.</h1>
        </div>
      </header>
      <main
        style={{
          width: 'calc(100vw - 50px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          maxHeight: '100%',
          background: '#fcfcfc',
          padding: '20px',
          border: '1px solid #000000',
          boxSizing: 'border-box',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: 40,
        }}>
        <ChallengeComponent />
      </main>
    </div>
  )
}

export default App
