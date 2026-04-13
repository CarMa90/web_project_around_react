export default function EditProfile() {
  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      noValidate
      autoComplete="off"
    >
      <input
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nombre"
        type="text"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__error-message name-error-message"></span>
      <input
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Acerca de mí"
        type="text"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__error-message description-error-message"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
