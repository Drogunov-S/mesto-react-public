import logo from '../images/logo.svg';
import Header from "./Header";
import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

    const [isEditAvatarPopup, setActiveEditAvatarPopup] = React.useState(false);
    const [isEditProfilePopup, setActiveEditProfilePopup] = React.useState(false);
    const [isAddPlacePopup, setActiveAddPlacePopup] = React.useState(false);
    const [isImagePopup, setActiveImagePopup] = React.useState(false);

    const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

    function handleEditAvatarClick() {
        setActiveEditAvatarPopup(true);
    }

    function handleEditProfileClick() {
        setActiveEditProfilePopup(true);
    }

    function handleAddPlaceClick() {
        setActiveAddPlacePopup(true);
    }

    function handleCardClick({name, link}) {
        setSelectedCard({name: name, link: link});
        if (selectedCard.name && selectedCard.link) {
            setActiveImagePopup(true);
        }
    }

    function closeAllPopups() {
        setActiveEditAvatarPopup(false);
        setActiveEditProfilePopup(false);
        setActiveAddPlacePopup(false);
        setActiveImagePopup(false);
        setSelectedCard({name: '', link: ''});
    }


    return (
        <div className="page">
            <Header logo={logo}/>
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />
            <Footer/>

            <PopupWithForm
                title="Редактировать профиль"
                name="popup-edit-profile"
                buttonText="Сохранить"
                isOpen={isEditProfilePopup}
                onClose={closeAllPopups}
            >
                <>
                    <input className="data-form__input data-form__input_type_text-fullname"
                           id="name"
                           name="name"
                           type="text"
                           aria-label="Изменить имя"
                           placeholder="Имя"
                           minLength="2"
                           maxLength="40"
                           required
                    />
                    <span className="data-form__input-error data-form__input-error_type_name"></span>
                    <input className="data-form__input data-form__input_type_text-position"
                           id="about"
                           name="about"
                           type="text"
                           aria-label="Изменить о себе"
                           placeholder="О себе"
                           minLength="2"
                           maxLength="200"
                           required
                    />
                    <span className="data-form__input-error data-form__input-error_type_about"></span>
                </>
            </PopupWithForm>

            <PopupWithForm
                title="Обновить аватар"
                name="popup-edit-avatar"
                buttonText="Сохранить"
                isOpen={isEditAvatarPopup}
                onClose={closeAllPopups}
            >
                <label className="data-form__field">
                    <input className="data-form__input data-form__input_type_url"
                           id="avatar"
                           name="avatar"
                           type="url"
                           aria-label="Ссылка на картинку"
                           placeholder="Ссылка на картинку"
                           required
                    />
                    <span className="data-form__input-error data-form__input-error_type_avatar"></span>
                </label>
            </PopupWithForm>

            <PopupWithForm
                title="Новое место"
                name="popup-add-post"
                buttonText="Создать"
                isOpen={isAddPlacePopup}
                onClose={closeAllPopups}
            >
                <>
                    <label className="data-form__field">
                        <input className="data-form__input data-form__input_type_post-title"
                               id="title"
                               name="name"
                               type="text"
                               aria-label="Название места"
                               placeholder="Название"
                               minLength="2"
                               maxLength="30"
                               required
                        />
                        <span className="data-form__input-error data-form__input-error_type_name"/>
                    </label>
                    <label className="data-form__field">
                        <input className="data-form__input data-form__input_type_url"
                               id="link"
                               name="link"
                               type="url"
                               aria-label="Ссылка на картинку"
                               placeholder="Ссылка на картинку"
                               required
                        />
                        <span className="data-form__input-error data-form__input-error_type_link"/>
                    </label>
                </>
            </PopupWithForm>

            <PopupWithForm
                title="Вы уверены?"
                name="popup-confirmation"
                buttonText="Да"
                onClose={closeAllPopups}
            />

            <ImagePopup
                card={selectedCard}
                isOpen={isImagePopup}
                onClose={closeAllPopups}
            />
        </div>
    );
}

export default App;
