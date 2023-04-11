import React from "react";
import Card from "./Card";
import avatar from "../images/avatar.jpg";
import api from "../utils/Api";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

    const [userName, setUserName] = React.useState("Default Name");
    const [userDescription, setUserDescription] = React.useState("Default Description");
    const [userAvatar, setUserAvatar] = React.useState(avatar);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userInfo, cards]) => {
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);
                setCards(cards);
            })
            .catch(console.log);
    }, [])


    return (
        <main className="content">
            <section className="profile page__profile" aria-label="Профиль">
                <div className="profile__avatar-overlay"
                     onClick={onEditAvatar}
                >
                    <img src={userAvatar} alt="Аватар" className="profile__avatar-image"/>
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                        <h1 className="profile__full-name">{userName}</h1>
                        <button className="profile__edit-btn" type="button"
                                onClick={onEditProfile}
                        ></button>
                    </div>
                    <p className="profile__position">{userDescription}</p>
                </div>
                <button className="profile__add-btm" type="button"
                        onClick={onAddPlace}
                ></button>
            </section>
            <section className="cards content__cards" aria-label="Карточки мест">
                {
                    cards.map(card => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={
                                () => onCardClick(card)
                            }/>
                    ))
                }
            </section>
        </main>
    );
}

export default Main;
