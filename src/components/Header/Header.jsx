export default function Header(props) {
  return (
    <header className="header page__section">
      <img
        alt="Logotipo Around The U.S."
        className="logo header__logo"
        src={props.logo}
      />
    </header>
  );
}
