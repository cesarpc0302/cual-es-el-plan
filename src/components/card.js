//import { useState, useEffect } from "react";
import locations from '../data/locations';

function Card(props) {

  const ds = new Date(props.info.date.start);
  const dateStartMedium = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    timeStyle: "short",
    hourCycle: "h12"
  }).format(ds);
  const dateStartShort = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
  }).format(ds);
  const dateTime = new Intl.DateTimeFormat("es-ES", {
    timeStyle: "short",
    hourCycle: "h12"
  }).format(ds);

  const de = new Date(props.info.date.end);
  const dateEndShort = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
  }).format(de);

  const locLink = () => {
    let loc = props.info.location;
    let location = locations.find(locc => locc.name === loc);
    if (location.coordinates[0] === 0 && location.coordinates[1] === 0) {
      const randLong = (Math.random() * (11.053918003799767 - 8.39651760189718) + 8.39651760189718).toFixed(15)
      const randLat = (Math.random() * (-85.84657825460646 - -82.75007245554457) + -82.75007245554457).toFixed(15)
      return "https://maps.google.com/maps?q=" + randLong + "," + randLat
    }
    return "https://maps.google.com/maps?q=" + location.coordinates[0]+ "," + location.coordinates[1]
  };

  const locDesc = () => {
    let loc = props.info.location;
    let location = locations.find(locc => locc.name === loc);
    return location.address
  };

  const descID = "cardDesc" + props.info._id + props.month

  function showDescription(){
    var element = document.getElementById(descID);
    element.classList.remove("hidden");
  }

  function hideDescription(){
    var element = document.getElementById(descID);
    element.classList.add("hidden");
  }

  return (
    <div className={(new Date(props.info.datesFeatured?.start) <= new Date() && new Date(props.info.datesFeatured?.end) >= new Date()) ? "featured eventCard " + props.info.type[0] : "eventCard " + props.info.type[0]}>
      <div className="card">
        <div className='cardMainInfo'>
          <span className={"material-symbols-outlined typeIcon " + props.info.type[0]}></span>
          <img className="cardImage" alt="imagen" src="https://picsum.photos/200/300" loading="lazy"/>
          <div className='cardRightInfo'>
            <div className="cardImportantInfo">
              <h2 className="cardHeader">{props.info.name}</h2>
              <p className="cardDate"><span className="material-symbols-outlined">event</span>
                                      {ds.setHours(0,0,0,0) === de.setHours(0,0,0,0) ? dateStartMedium.toString() : "Del " + dateStartShort.toString() + " al " + dateEndShort.toString() + " \n " + dateTime.toString()}</p>
              <p className="cardLoc"><span className="material-symbols-outlined">pin_drop</span>
                                      <a href={locLink()} target="_blank" rel="noreferrer noopener">{props.info.location}</a>
                                      <span className="locTooltipText">{locDesc()}</span>
                                      </p>
              <p className="cardCover"><span className="material-symbols-outlined">payments</span>
                                      {props.info.cover[0] === props.info.cover[1] ? props.info.cover[0] === 0 ? "Gratis" : "¢" + props.info.cover[0] :
                                      props.info.cover[0] === 0 ? "Gratis - ¢"+props.info.cover[1] : "¢" + props.info.cover.join(" - ¢")}</p>
            </div>
            <div className='cardMoreLinks'>
              <div className='showDescription' onClick={showDescription}>Descripcion...</div>
              <a className='moreInfoLinks' href={props.info.links} target="_blank" rel="noreferrer">+Informacion</a>
            </div>
          </div>
        </div>
        <div className='cardDescription hidden' id={"cardDesc"+props.info._id+props.month} onClick={hideDescription}>
          <div className='cardDescriptionContent'>
            <p className="cardDesc">{props.info.description}</p>
            {props.info.petFriendly && <span className="material-symbols-outlined">pets</span> }
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Card;