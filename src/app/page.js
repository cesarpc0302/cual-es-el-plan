'use client';
import React, { useState, useEffect } from 'react';
import CardSection from '../components/cardSection';
import Menu from '../components/menu';
import TopMenu  from '../components/topMenu';
import locations from '../data/locations';
import 'rsuite/dist/rsuite.min.css';

export default function Home() {
  const fetchEvents = async () => {
    const res = await fetch('/api/events');
    const events = await res.json();
    return events;
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then((data) => setEvents(data));
  }, []);

  const noEventsMessage = (
    <div className="noEventsMessage">
      No hay eventos que mostrar, ¡revisa los filtros!
      <br />
      <button
        className="cleanFilters"
        onClick={cleanFilters}>
        Limpiar filtros
      </button>
    </div>
  );

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const [types, setTypes] = useState([]);
  const [petFriendly, setPetFriendly] = useState(false);
  const [cover, setCover] = useState([]);
  const [date, setDate] = useState([]);
  const [provincia, setProvincia] = useState([]);
  const [canton, setCanton] = useState([]);

  const [orden, setOrden] = useState(true);

  const [searchInput, setSearchInput] = useState('');

  const [open, setOpen] = useState(false);

  const [sliderValue, setSliderValue] = useState([0, 50000]);
  const [dateValue, setDateValue] = useState([]);

  // filter outdated events
  let nonFilteredEvents = events.filter(checkDate);
  let currentEvents = events.filter(checkDate);
  // filter by provincia y canton
  currentEvents = currentEvents.filter(filterbyProvincia);
  currentEvents = currentEvents.filter(filterbyCanton);
  // filter by cover
  currentEvents = currentEvents.filter(filterbyCover);
  // filter types
  currentEvents = currentEvents.filter(filterbyType);
  // filter by date
  currentEvents = currentEvents.filter(filterbyDate);
  // filter featured events
  currentEvents = currentEvents.filter(filterbyPetFriendly);
  // filter search bar
  searchInput && (currentEvents = currentEvents.filter(filterSearchInput));
  // sort and filter featured events
  const featuredEvents = currentEvents.filter(filterFeature).sort(orden ? sortbyDate : sortCloseBy);
  // sort and filter non featured events
  const nonFeaturedEvents = currentEvents
    .filter(filterNonFeature)
    .sort(orden ? sortbyDate : sortCloseBy);
  // concat feature and non featured events
  const finalEvents = featuredEvents.concat(nonFeaturedEvents);

  // check if event is over
  function checkDate(event) {
    return new Date(event.date.end) > new Date();
  }
  // set user lat and long
  function position(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  }
  // sort events by proximity
  function sortCloseBy(event1, event2) {
    // get user location
    navigator.geolocation.getCurrentPosition(position);
    let ev1 = getLoc(event1);
    let ev2 = getLoc(event2);
    return (
      getDistance(ev1.coordinates[0], ev1.coordinates[1], lat, long) -
      getDistance(ev2.coordinates[0], ev2.coordinates[1], lat, long)
    );
  }
  function getLoc(event) {
    return locations.find((loc) => loc.name === event.location);
  }
  function getDistance(lat1, long1, lat2, long2) {
    const r = 6371;
    let dlat = deg2rad(lat2 - lat1);
    let dlong = deg2rad(long2 - long1);
    let a =
      Math.sin(dlat / 2) * Math.sin(dlat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dlong / 2) * Math.sin(dlong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = r * c;
    return d;
  }
  function deg2rad(deg) {
    return (deg * Math.PI) / 180;
  }
  // filter fetaured events
  function filterFeature(event) {
    return (
      event.featured &&
      new Date(event.datesFeatured.start) <= new Date() &&
      new Date(event.datesFeatured.end) >= new Date()
    );
  }
  // filter non featured events
  function filterNonFeature(event) {
    return !event.featured;
  }
  // sort by date
  function sortbyDate(event1, event2) {
    return new Date(event1.date.end) - new Date(event2.date.end);
  }
  // filter by type
  function filterbyType(event) {
    if (!types.length) {
      return true;
    } else {
      for (var i = 0; i < types.length; i++) {
        if (event.type.includes(types[i])) {
          return true;
        }
      }
      return false;
    }
  }
  // filter by pet friendly
  function filterbyPetFriendly(event) {
    return petFriendly ? event.petFriendly : true;
  }
  // filter by cover
  function filterbyCover(event) {
    if (!cover.length) {
      return true;
    } else {
      if (
        parseInt(cover[0]) <= parseInt(event.cover[1]) &&
        parseInt(event.cover[0]) <= parseInt(cover[1])
      ) {
        return true;
      }

      return false;
    }
  }
  // filter by date
  function filterbyDate(event) {
    if (!date.length) {
      return true;
    } else {
      if (
        new Date(event.date.start) >= new Date(date[1]) ||
        new Date(event.date.end) <= new Date(date[0])
      ) {
        return false;
      }
      return true;
    }
  }
  // filter by provincia
  function filterbyProvincia(event) {
    const location = locations.find((loc) => loc.name === event.location);
    if (!provincia.length) {
      return true;
    } else {
      for (var i = 0; i < provincia.length; i++) {
        if (location.provincia === provincia[i]) {
          return true;
        }
      }
      return false;
    }
  }

  function filterbyCanton(event) {
    const location = locations.find((loc) => loc.name === event.location);
    if (!canton.length) {
      return true;
    } else {
      for (var i = 0; i < canton.length; i++) {
        if (location.canton === canton[i]) {
          return true;
        }
      }
      return false;
    }
  }

  // filter search input
  function filterSearchInput(event) {
    if (event.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return true;
    }
    if (event.description.toLowerCase().includes(searchInput.toLowerCase())) {
      return true;
    }
    if (event.location.toLowerCase().includes(searchInput.toLowerCase())) {
      return true;
    }
  }

  function cleanFilters() {
    setTypes([]);
    setPetFriendly(false);
    setCover([]);
    setDate([]);
    setProvincia([]);
    setCanton([]);
    setOrden(true);
    setSearchInput('');
    setSliderValue([0, 50000]);
    setDateValue([]);

    let typeTags = document.querySelectorAll('.tagActive');
    typeTags.forEach((element) => {
      element.classList.remove('tagActive');
    });

    let locTags = document.querySelectorAll('.locationTags');
    locTags.forEach((element) => {
      element.classList.remove('provinciaActive');
      element.classList.remove('hideProvincia');
    });

    const orderElement = document.getElementsByClassName('orderByDate');
    orderElement[0].classList.add('currentOrder');
    orderElement[0].classList.remove('lineOver');
    const orderElement2 = document.getElementsByClassName('orderByNearest');
    orderElement2[0].classList.remove('currentOrder');
    orderElement2[0].classList.add('lineOver');

    document.getElementById('coverLow').innerText = 'GRATIS';
    document.getElementById('coverHigh').innerText = 'mas de ¢50000';

    let searchInputText = document.getElementById('searchInput');
    searchInputText.value = '';
  }
  return (
    <>
          <TopMenu setSearchInput={setSearchInput} searchInput={searchInput} setOpen={setOpen}/>

      <Menu
        events={nonFilteredEvents}
        setPetFriendly={setPetFriendly}
        petFriendly={petFriendly}
        setTypes={setTypes}
        typeV={types}
        setOrden={setOrden}
        orden={orden}
        setDate={setDate}
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        setCover={setCover}
        cover={cover}
        setProvincia={setProvincia}
        provincia={provincia}
        setCanton={setCanton}
        canton={canton}
        dateValue={dateValue}
        setDateValue={setDateValue}
      />

        <div id="grid">{events.length > 0 ? <CardSection events={events} /> : noEventsMessage}</div>
    </>
  );
}
