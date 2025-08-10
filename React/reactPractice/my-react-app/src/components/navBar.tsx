import "../style/navBar.css"
import assigment from "../assets/navIcons/assignment.svg";
import schedule from "../assets/navIcons/schedule.svg"
import user from "../assets/navIcons/user.svg"

function navBar(){
    return (
        <div id="container">
            <label htmlFor="todo" className="toolTip">
                <input type="radio" className="icons" id="todo" name="icons" defaultChecked/>
                <img src={assigment} alt="assignment" className="ico"/>
                <span>TODO</span>
            </label>
            <label htmlFor="sched" className="toolTip">
                <input type="radio" className="icons" id="sched" name="icons"/>
                <img src={schedule} alt="schedule" className="ico"/>
                <span>SCHEDULE</span>
            </label>
            <label htmlFor="acc" className="toolTip">
                <img src={user} alt="user" className="ico"/>
                <input type="radio" className="icons" id="acc" name="icons"/>
                <span>ACCOUNT</span>
            </label>
        </div>
    );
}

export default navBar;