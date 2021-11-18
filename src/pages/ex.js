

const handleClick = (e) => {
    if (e.target.id == "A"){
    history.push("/guide");
    } else {
    history.push("/other")
    }
    }

<button id="A" onClick={handleClick}/>