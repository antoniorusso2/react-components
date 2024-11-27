import Style from './card.module.css';

function Card() {
  return (
    <div className={Style.card}>

      <img src="https://placehold.co/600x400" alt="" />

      <div className={Style.card__body}>
        <h3 className={Style.card__title}>
          Titolo Card
        </h3>
        <p className={Style.card__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro. Nesciunt corporis doloremque nihil voluptate id incidunt praesentium illo quibusdam!
        </p>
        <button>
          Leggi di piú
        </button>
      </div>
    </div>
  );
}

export default Card;