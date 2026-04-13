export default function EditAvatar() {
  return (
    <form
      className="popup__form"
      id="profile-image-form"
      noValidate
      autoComplete="off"
    >
      <input
        className="popup__input popup__input_type_url"
        name="profile-image"
        placeholder="Enlace a la foto de perfil"
        type="url"
        required
      />
      <span className="popup__error-message profile-image-error-message"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
