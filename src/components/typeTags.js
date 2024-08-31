
function TypeTags({events, name, setTypes, typeV}){

    function toggleType(event){
        event.target.classList.toggle("tagActive");
        if (typeV.includes(name)){
            var index = typeV.indexOf(name);
            typeV.splice(index,1)
            setTypes([...typeV])
        }else{
            setTypes([...typeV, name])
        }        
    }

    function hasEvents(){
        for (let index = 0; index < events.length; index++) {
            if(events[index].type.includes(name))
                return true;                        
        }
        return false
    }

    return (
        hasEvents() && <span className="typeTags" onClick={toggleType}><span className={name + " typeTags material-symbols-outlined"}></span> {name}</span>
    )
}

export default TypeTags
