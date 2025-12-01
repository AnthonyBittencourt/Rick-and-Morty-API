    
import s from './card.module.css'

export const Card = ({image, name, species}) => {
    return(
        <div className={s.cardBackground}>
            <img className={s.cardImage} src={image} alt={name}/>
            <h2 className={s.cardTitle}>{name}</h2>
            <p className={s.cardText}>{species}</p>
        </div>
    )
}