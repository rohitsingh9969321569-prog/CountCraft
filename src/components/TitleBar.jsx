const TitleBar = ({ theme, onThemeToggle }) => {
    return (
        <header className="navbar">
            <a className="brand" href="#main" aria-label="Countcraft home">
            <span className="brand-mark" aria-hidden="true">C</span>
            <span>Countcraft</span>
            </a>
            <button
            className="theme-toggle"
            type="button"
            role="switch"
            aria-checked={theme === 'light'}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={onThemeToggle}
            >
            <span className="theme-toggle-icon" aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
            <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </button>
        </header>
    )
}

export default TitleBar