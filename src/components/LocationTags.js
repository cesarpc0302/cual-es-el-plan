import locations from "../data/locations";

function LocationTags({events, name, setProvincia, provincia, setCanton, canton}){

    function loadProvincia(event){
        if (provincia.includes(name)){
            setProvincia([])
            setCanton([])
            event.target.classList.remove("provinciaActive");
            const element = document.getElementsByClassName("locationTags");
            for (let index = 0; index < element.length; index++) {
                element[index].classList.remove("hideProvincia")
            }
        }else{
            setProvincia([name])
            setCanton([])
            const element = document.getElementsByClassName("locationTags");
            for (let index = 0; index < element.length; index++) {
                element[index].classList.add("hideProvincia");
                element[index].classList.remove("provinciaActive");
            }
            event.target.classList.add("provinciaActive");
            event.target.classList.remove("hideProvincia");
        }
        
    }

    function currentProvincias(){
        let currentLocations = [];
        events.map((ev) => currentLocations = [...currentLocations, ev.location])
        currentLocations = [...new Set(currentLocations)]

        let currentProvincias = [...new Set(currentLocations.map((cloc) => locations.find((loc)=> loc.name === cloc).provincia))];
        return currentProvincias;
    }

   /* function currentCantones(){
        let currentLocations = [];
        events.map((ev) => currentLocations = [...currentLocations, ev.location])
        currentLocations = [...new Set(currentLocations)]

        let currentAdress = currentLocations.map((cloc) => locations.find((loc)=> loc.name === cloc));
        let currentLugaresxProvincia = currentAdress.filter((ca) => ca.provincia === name)
        let currentCantones = [...new Set(currentLugaresxProvincia.map((lxp) => lxp.canton))]
        return (currentCantones)
    }*/

    return (
        currentProvincias().includes(name) && <span className="locationTags provincia" onClick={loadProvincia}>{name} </span>
    )
}

export default LocationTags

