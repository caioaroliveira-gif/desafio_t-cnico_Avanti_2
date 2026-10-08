import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSearch(event) {
    event.preventDefault();

    const formattedUsername = username.trim();

    if (!formattedUsername) {
      setUser(null);
      setError('Digite o nome de um usuário do GitHub para realizar a busca.');
      return;
    }

    setLoading(true);
    setUser(null);
    setError('');

    try {
      const response = await fetch(
        `https://api.github.com/users/${formattedUsername}`
      );

      if (!response.ok) {
        throw new Error('Usuário não encontrado');
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError('Nenhum perfil foi encontrado com esse nome de usuário.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="github-container">
        <div className="content">
          <h1 className="title">
            <span className="github-icon">◉</span>
            Perfil GitHub
          </h1>

          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Digite um usuário do Github"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              aria-label="Nome de usuário do GitHub"
            />

            <button type="submit" aria-label="Buscar perfil">
              🔍
            </button>
          </form>

          {loading && <p className="loading">Buscando perfil...</p>}

          {user && !loading && (
            <article className="profile-card">
              <img
                src={user.avatar_url}
                alt={`Foto de perfil de ${user.name || user.login}`}
                className="profile-image"
              />

              <div className="profile-info">
                <h2>{user.name || user.login}</h2>

                <p>
                  {user.bio ||
                    'Este usuário ainda não possui uma biografia cadastrada no GitHub.'}
                </p>
              </div>
            </article>
          )}

          {error && !loading && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;