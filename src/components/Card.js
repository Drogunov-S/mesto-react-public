import React from 'react';

function Card(props) {


    return (
        <>
            <article className="card">
                <img className="card__image" src={props.card.link} alt={props.card.name}
                    onClick={props.onCardClick}
                />
                <button className="card__btn_type_trash" type="button" disabled></button>
                <div className="card__info">
                    <h2 className="card__caption">{props.card.name}</h2>
                    <div className="card__wrapper-like">
                        <button className="card__like" type="button"></button>
                        <span className="card__like-counter">{props.card.likes.length}</span>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Card;
