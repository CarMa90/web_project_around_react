export default function NewCard() {
  return (
    <form
      className="popup__form"
      id="new-card-form"
      noValidate
      autoComplete="off"
    >
      <input
        className="popup__input popup__input_type_card-name"
        name="place-name"
        placeholder="Título"
        type="text"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__error-message place-name-error-message"></span>
      <input
        className="popup__input popup__input_type_url"
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
      />
      <span className="popup__error-message link-error-message"></span>
      <button className="button popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}
