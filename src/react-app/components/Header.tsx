import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-branding">
          <h1 className="header-title">Vite React Template</h1>
          <p className="header-subtitle">Built with Vite + React + Hono + Cloudflare</p>
        </div>
        <nav className="header-nav">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" className="nav-link">
            Vite
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="nav-link">
            React
          </a>
          <a href="https://hono.dev" target="_blank" rel="noopener noreferrer" className="nav-link">
            Hono
          </a>
          <a href="https://workers.cloudflare.com" target="_blank" rel="noopener noreferrer" className="nav-link">
            Cloudflare
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;