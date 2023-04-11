import React from 'react';

function Card({card, onCardClick}) {


    return (
            <article className="card">
            <img className="card__image" src={card.link} alt={card.name}
                 onClick={onCardClick}
            />
            <button className="card__btn_type_trash" type="button" disabled/>
            <div className="card__info">
                <h2 className="card__caption">{card.name}</h2>
                <div className="card__wrapper-like">
                    <button className="card__like" type="button"/>
                    <span className="card__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;
