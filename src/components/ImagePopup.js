import React from 'react';

function ImagePopup(props) {
    return (
        <div className={`popup-image popup page__popup popup_blackout_highly ${props.isOpen && 'popup_opened'}`}
             onClick={props.onClose}
        >
            <div className="popup__container">
                <button className="popup__close" type="button"
                        onClick={props.onClose}>
                    >
                </button>
                <figure className="preview">
                    <img className="preview__image" src={props.card.link} alt={props.card.name}/>
                    <figcaption className="preview__caption">{props.card.name}</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;
