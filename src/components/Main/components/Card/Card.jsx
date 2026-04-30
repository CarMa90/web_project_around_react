import ImagePopup from "../Popup/ImagePopup/ImagePopup";

export default function Card({
  card,
  handleOpenPopup,
  onCardLike,
  onCardDelete,
}) {
  const { name, link, isLiked } = card;

  const imageComponent = { children: <ImagePopup card={card} /> };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={() => {
          onCardDelete(card);
        }}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={
            isLiked
              ? "card__like-button card__like-button_is-active"
              : "card__like-button"
          }
          onClick={() => {
            onCardLike(card);
          }}
        />
      </div>
    </li>
  );
}
