import "./App.css";

function App() {
  return (
    <div className="page">

      {/* Header */}
      <header className="header">
        <div className="logo">CookBook.AI</div>

        <nav className="nav">
          <ul>
            <li className="active">Home</li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="content">
        <h1 className="title">Welcome to CookBook.AI</h1>

        <p className="intro-text">
          CookBook.AI is your personal AI-powered cooking companion.  
          This sandbox project explores recipe generation, ingredient intelligence, and culinary creativity.
        </p>

        <button className="btn-primary">Generate Cookbook</button>

        {/* Search box */}
        <section className="search-section">
          <h2 className="section-title">Search Recipes</h2>
          <input
            className="search-input"
            type="text"
            placeholder="Search for recipes (coming soon)"
          />
          <button className="btn-secondary">Search</button>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} CookBook.AI — A personal sandbox project.
      </footer>

    </div>
  );
}

export default App;
