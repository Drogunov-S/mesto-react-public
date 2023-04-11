import React from 'react';

function PopupWithForm(props) {

    return (
        <div className={`${props.name} popup page__popup ${props.isOpen && 'popup_opened'}`}
            onClick={props.onClose}
        >
            <div className="popup__container">
                <button className="popup__close" type="button"
                    onClick={props.onClose}
                ></button>
                <div className="data-form popup__item">
                    <h2 className="data-form__title">{props.title}</h2>
                    <form className="data-form__form" name={props.name} noValidate>
                        {props.children}
                        <button className="data-form__btn-save" type="submit">{props.buttonText}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopupWithForm;
