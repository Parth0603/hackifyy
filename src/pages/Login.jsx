import React from 'react';

// This component displays the login options.
// It receives `onLogin` as a prop, which is a function to call
// when the user successfully authenticates.
function Login({ navigate, onLogin }) {

  // This function simulates a login for testing purposes.
  const skipLogin = () => {
    const testUser = { name: 'Test User' };
    
    // In a real app, you'd get a token from a server. Here, we'll create a dummy one.
    localStorage.setItem('userToken', 'test-token-' + Date.now());
    localStorage.setItem('userName', testUser.name);
    
    // Call the onLogin function passed from App.jsx to update the state.
    onLogin(testUser);
  };

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#0b1120', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative'}}>
      <button 
        onClick={() => navigate('landing')} 
        style={{position: 'absolute', top: '2rem', left: '2rem', background: 'none', border: '1px solid #334155', color: '#94a3b8', padding: '0.75rem 1rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'}}
        onMouseOver={(e) => {e.target.style.backgroundColor = '#172136'; e.target.style.color = '#f8fafc';}}
        onMouseOut={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#94a3b8';}}
      >
        ← Back to Home
      </button>
      <div style={{backgroundColor: '#172136', borderRadius: '20px', padding: '3rem', maxWidth: '400px', width: '100%', border: '1px solid #334155'}}>
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <h2 style={{fontSize: '2rem', fontWeight: '800', color: '#f8fafc', marginBottom: '0.5rem'}}>Welcome to <span style={{background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Hackifyy</span></h2>
          <p style={{color: '#94a3b8', fontSize: '1rem'}}>Choose your login method</p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <button style={{width: '100%', padding: '1rem', backgroundColor: '#0b1120', border: '1px solid #334155', borderRadius: '12px', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'all 0.3s ease'}} onMouseOver={(e) => e.target.style.backgroundColor = '#1e293b'} onMouseOut={(e) => e.target.style.backgroundColor = '#0b1120'}>
            <span>📧</span>
            <span>Login with Email</span>
          </button>

          <button style={{width: '100%', padding: '1rem', backgroundColor: '#0b1120', border: '1px solid #334155', borderRadius: '12px', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'all 0.3s ease'}} onMouseOver={(e) => e.target.style.backgroundColor = '#1e293b'} onMouseOut={(e) => e.target.style.backgroundColor = '#0b1120'}>
            <span>🔍</span>
            <span>Continue with Google</span>
          </button>

          <button style={{width: '100%', padding: '1rem', backgroundColor: '#0b1120', border: '1px solid #334155', borderRadius: '12px', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'all 0.3s ease'}} onMouseOver={(e) => e.target.style.backgroundColor = '#1e293b'} onMouseOut={(e) => e.target.style.backgroundColor = '#0b1120'}>
            <span>⚡</span>
            <span>Continue with GitHub</span>
          </button>
          
          <div style={{textAlign: 'center', color: '#94a3b8', margin: '1rem 0', fontSize: '0.9rem'}}>
            For Testing Only
          </div>

          <button onClick={skipLogin} style={{width: '100%', padding: '1rem', backgroundColor: '#6366f1', border: 'none', borderRadius: '12px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', cursor: 'pointer', fontWeight: '600', transition: 'all 0.3s ease'}} onMouseOver={(e) => e.target.style.backgroundColor = '#5855eb'} onMouseOut={(e) => e.target.style.backgroundColor = '#6366f1'}>
            <span>⚡</span>
            <span>Skip Login (Testing Mode)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
