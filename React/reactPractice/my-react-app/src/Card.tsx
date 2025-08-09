import finished from "./assets/finished.png"
import ongoing from "./assets/ongoing.png"
import notice from "./assets/notImportant.png"

type CardProps  ={
    status: "notice" | "ongoing" | "finished";
}

function Card(card : CardProps){
    const status  = () =>{
        switch(card.status){
            case "notice":
                return notice;
            case "ongoing":
                return ongoing;
            case "finished":
                return finished;
        }
    }

    return(
        <div className="card">
            <div id="statusContainer">
                <img src={status()} id="progress" />
                <p id="status">{card.status}</p>
            </div>

            <div id="contentContainer">
                <h1>ASSIGNMENT</h1>
                <h2>Information Commuication Techonology</h2>
                <p id="deadline">Deadline: August 18, 2025</p>
            </div>
        </div>
    );
}

export default Card;