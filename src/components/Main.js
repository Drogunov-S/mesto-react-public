import React from "react";
import Card from "./Card";

function Main(props) {


    return (
        <main className="content">
            <section className="profile page__profile" aria-label="Профиль">
                <div className="profile__avatar-overlay"
                     onClick={props.onEditAvatar}
                >
                    <img src={props.avatar} alt="Аватар" className="profile__avatar-image"/>
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                        <h1 className="profile__full-name">{props.userName}</h1>
                        <button className="profile__edit-btn" type="button"
                                onClick={props.onEditProfile}
                        ></button>
                    </div>
                    <p className="profile__position">{props.userDescription}</p>
                </div>
                <button className="profile__add-btm" type="button"
                        onClick={props.onAddPlace}
                ></button>
            </section>
            <section className="cards content__cards" aria-label="Карточки мест">
                {
                    props.cards.map(card =>
                        <Card
                            card={card}
                            onCardClick={
                                () => props.onCardClick(card)
                            }/>
                    )
                }
            </section>
        </main>
    );
}

export default Main;
