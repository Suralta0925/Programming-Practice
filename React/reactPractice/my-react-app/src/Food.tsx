function Food(){
    const food1: string = "Orange";
    const food2: string = "Banana";
 

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food