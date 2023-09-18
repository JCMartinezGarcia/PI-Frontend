/**import components */
import Card from "../card/card";
import MoonLoader from "react-spinners/ClipLoader";
import style from './cards.module.css';

const Cards = ({ allVideoGames }) => {
    const listVideoGames = allVideoGames;
    return (
        <div
            className={(listVideoGames.length) ? style.cardsContainer : ''}
        >
            {
                (listVideoGames.length) ?
                    (listVideoGames)?.map((game, index) => {
                        return <Card key={index} videoGame={game} />
                    }) : <div className={style.loaderCont}><MoonLoader
                        color="#36d7b7"
                        size={117}
                    /></div>
            }
        </div>
    )
}

export default Cards;