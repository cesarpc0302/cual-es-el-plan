function DateTags({setDates}) {
    
    let today = new Date().setHours(0,0,0);

    function hoy(event){
        const element = document.getElementsByClassName("dateTagOption");
        if (event.target.classList.contains("tagActive")){
            event.target.classList.remove("tagActive")
            setDates([])
        } else {
            for (let index = 0; index < element.length; index++) {
                element[index].classList.remove("tagActive")
            }
            event.target.classList.add("tagActive");
            setDates([today, new Date().setHours(23,59,99)]);
        }
    }
    function todos(event){
        setDates([])
        event.target.classList.add("tagActive");
    }
    
    return (
        <div className="dateTags">
            <span className="dateTagOption" onClick={hoy}>Hoy</span>
            <span className="dateTagOption" onClick={todos}>Ver todos los eventos</span>
        </div>
    )
}

export default DateTags