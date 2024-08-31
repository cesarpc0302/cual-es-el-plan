
function CantonTags({name, setCanton, canton}){
    function loadCantones(event){
        event.target.classList.toggle("tagActive");
        if (canton.includes(name)){
            var index = canton.indexOf(name);
            canton.splice(index,1)
            setCanton([...canton])
        }else{
            setCanton([...canton, name])
        }        
    }


    return (
        <span className="canton" onClick={loadCantones}> {name} </span>
    )
}

export default CantonTags


