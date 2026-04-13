export default function Main() {
  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image-container">
          <img className="profile__image" src={null} alt="" />
          <div className="profile__image-overlay">
            <img src="../images/edit-icon.svg" alt="Edit Icon" />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
          ></button>
          <p className="profile__description">Explorador</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          <template id="card-template">
            <li className="card">
              <img className="card__image" />
              <button className="card__delete-button"></button>
              <div className="card__description">
                <h2 className="card__title"></h2>
                <button className="card__like-button"></button>
              </div>
            </li>
          </template>
        </ul>
      </section>
    </main>
  );
}
