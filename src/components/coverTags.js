function CoverTags({setCover, cover}) {
    function gratis(event){
        const element = document.getElementsByClassName("coverTagOption");
        for (let index = 0; index < element.length; index++) {
            element[index].classList.remove("tagActive")
        }
        if(JSON.stringify(cover) === JSON.stringify(["0","0"])){
            setCover([])   
        } else{
            setCover(["0","0"]);
            event.target.classList.add("tagActive");
        } 
    }
    function menos(event){
        const element = document.getElementsByClassName("coverTagOption");
        for (let index = 0; index < element.length; index++) {
            element[index].classList.remove("tagActive")
        }
        if(JSON.stringify(cover) === JSON.stringify(["0", "5000"])){
            setCover([])   
        } else{
            setCover(["0", "5000"]);
            event.target.classList.add("tagActive");
        } 
    }
    function cinco(event){
        const element = document.getElementsByClassName("coverTagOption");
        for (let index = 0; index < element.length; index++) {
            element[index].classList.remove("tagActive")
        }
        if(JSON.stringify(cover) === JSON.stringify(["5000", "20000"])){
            setCover([])   
        } else{
            setCover(["5000", "20000"]);
            event.target.classList.add("tagActive");
        } 
    }
    function veinte(event){
        const element = document.getElementsByClassName("coverTagOption");
        for (let index = 0; index < element.length; index++) {
            element[index].classList.remove("tagActive")
        }
        if(JSON.stringify(cover) === JSON.stringify(["20000", "50000"])){
            setCover([])   
        } else{
            setCover(["20000", "50000"]);
            event.target.classList.add("tagActive");
        } 
    }
    function cincuenta(event){
        const element = document.getElementsByClassName("coverTagOption");
        for (let index = 0; index < element.length; index++) {
            element[index].classList.remove("tagActive")
        }
        if(JSON.stringify(cover) === JSON.stringify(["50000", "9999999"])){
            setCover([])   
        } else{
            setCover(["50000", "9999999"]);
            event.target.classList.add("tagActive");
        } 
    }
    
    return (
        <div className="coverTags">
            <span className="coverTagOption" onClick={gratis}>Gratis</span>
            <span className="coverTagOption" onClick={menos}>menos de ¢5000</span>
            <span className="coverTagOption" onClick={cinco}>¢5000 a ¢20000</span>
            <span className="coverTagOption" onClick={veinte}>¢20000 a ¢50000</span>
            <span className="coverTagOption" onClick={cincuenta}>mas de ¢50000</span>
        </div>
    )
}

export default CoverTags