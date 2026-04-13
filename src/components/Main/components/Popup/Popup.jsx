export default function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <div className="popup popup_is-opened">
      <div className="popup__content">
        <button
          aria-label="Cerrar ventana emergente"
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
