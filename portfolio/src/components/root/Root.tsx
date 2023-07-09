import logo from './logo.svg';
import s from './Root.module.css';

function Root() {
  return (
    <div className={s.Root}>
      <header className={s.RootHeader}>
        <img src={logo} className={s.RootLogo} alt="logo" />
        <p>
          Edit <code>src/Root.tsx</code> and save to reload.
        </p>
        <a
          className={s.RootLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Root;
