import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState, useEffect } from "react";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { SubmitCardContext } from "../contexts/SubmitCardContext";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      await api.getInitialCards().then((data) => {
        // console.log(data);
        setCards(data);
      });
    })();
  }, []);

  async function handleCardlikes(card) {
    await api.handleCardLikes(card).then((newCard) => {
      // console.log(newCard);
      setCards((state) => {
        // console.log(state);
        return state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard,
        );
      });
    });
  }

  async function handleCardDelete(id) {
    await api.deleteCard(id).then(() => {
      // console.log(deletedCard);
      setCards((state) => {
        return state.filter((currentCard) => currentCard._id !== id);
      });
      handleClosePopup();
    });
  }

  const handleAddPlaceSubmit = (data) => {
    (async () => {
      api.getNewCard(data).then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      });
    })();
  };

  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    // console.log(popup);
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        // console.log(data);
        setCurrentUser(data);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.changeProfilePicture(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  return (
    <>
      <SubmitCardContext.Provider
        value={{ handleAddPlaceSubmit, handleCardDelete }}
      >
        <CurrentUserContext.Provider
          value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
        >
          <div className="page__content">
            <Header />
            <Main
              popup={popup}
              onOpenPopup={handleOpenPopup}
              onClosePopup={handleClosePopup}
              cards={cards}
              onCardLike={handleCardlikes}
              onCardDelete={handleCardDelete}
            />
            <Footer />
          </div>
        </CurrentUserContext.Provider>
      </SubmitCardContext.Provider>
    </>
  );
}

export default App;
