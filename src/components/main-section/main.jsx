import Card from '../card/card.jsx';
import Style from './main.module.css';

function Main() {
  return (
    <main className={Style.main}>
      <div className="container">
        <h1 className={Style.title}>
          Titolo pagina
        </h1>
        <Card />
      </div>
    </main>

  );
}

export default Main;