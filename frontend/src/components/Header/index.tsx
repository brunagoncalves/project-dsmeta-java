import logo from '../../assets/logo.svg';
import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="content-header">
        <img src={logo} alt="Logomarca"/>
        <h1>DSMeta</h1>
        <p>Desenvolvido por <a href="https://instagram.com/devsuperior.ig">@devsuperior.ig</a></p>
      </div>
    </header>
  )
}