import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onSubmit}) {

    const [newCard, setCard] = React.useState({name: '', link: ''})

    function handleChange(evt) {
        evt.preventDefault();

        const name = evt.target.name;
        newCard[name] = evt.target.value;
        setCard(newCard);
    }


    function handleAddPlaceSubmit() {
        onSubmit(newCard);
    }


    return (
        <PopupWithForm
            title="Новое место"
            name="popup-add-post"
            buttonText="Создать"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleAddPlaceSubmit}
        >
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
                       onChange={handleChange}
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
                       onChange={handleChange}
                />
                <span className="data-form__input-error data-form__input-error_type_link"/>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup;
