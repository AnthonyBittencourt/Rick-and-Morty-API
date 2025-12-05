import s from './infoModal.module.css'

const infoModal = ({data, close}) => {
    return(
        <div className={s.wrapInfo}>
            <button onClick={close}> ❌ </button>
            <div className={s.Infodados}>
                <img src={data.image} alt={data.name}/>
                <h2> <strong> Name: </strong> {data.name}</h2>
                <p> <strong> Status: </strong> {data.Status}</p>
                <p> <strong> Origin: </strong> {data.origin.name}</p>
                <p> <strong> Species: </strong> {data.species}</p>
                <p> <strong> Gender: </strong> {data.gender}</p>
                <p> <strong> Location: </strong> {data.location.name}</p>
                <p> <strong> Created: </strong> {new Date(data.created).toLocaleString("pt-BR",{
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                })} </p>
            </div>
        </div>
    )
}

export default infoModal