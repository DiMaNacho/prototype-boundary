import logo from '../../assets/logo.svg';
import "./styles.scss"

const Home = () =>
  <div className="Home">
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <p>
        CRA Test
      </p>
      <a
        className="link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>

export default Home;