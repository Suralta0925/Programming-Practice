import finished from "./assets/finished.png"

function Card(){
    return(
        <div className="card">
            <img src={finished} id="progress" />
            <p>Complete</p>
        </div>
    );
}

export default Card;