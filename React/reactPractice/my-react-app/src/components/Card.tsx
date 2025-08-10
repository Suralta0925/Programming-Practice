import finished from "../assets/statusIcon/finished.svg"
import ongoing from "../assets/statusIcon/ongoing.svg"
import notice from "../assets/statusIcon/notImportant.svg"
import important from "../assets/statusIcon/important.svg"
import urgent from "../assets/statusIcon/urgent.svg"

import "../style/card.css"

type CardProps  ={
    status: "notice" | "ongoing" | "finished" | "important" | "urgent";
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
            case "important":
                return important;
            case "urgent":
                return urgent
        }
    }

    return(
        <div className="card">
            <div id="statusContainer">
                <img src={status()} id="progress" className="stat"/>
                <p id="status">{card.status.toUpperCase()}</p>
            </div>

            <div id="contentContainer">
                <h1 id="subject">PATHFIT</h1>
                <h2 id="assignment">Information Communication Techonology</h2>
                <p id="deadline">Deadline: August 18, 2025</p>
            </div>
        </div>
    );
}

export default Card;