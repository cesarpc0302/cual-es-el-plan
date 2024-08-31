import React from 'react';
import { DateRangePicker } from 'rsuite';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import addDays from 'date-fns/addDays';
import { RangeSlider } from 'rsuite';

import types from '../data/types';
import provincias from '../data/provincias';
import locations from "../data/locations";
import TypeTags from './typeTags';
import LocationTags from './LocationTags';
import CantonTags from './cantonTags';


function Menu ({
        events, 
        setPetFriendly, 
        petFriendly, 
        setTypes, 
        typeV, 
        setOrden, 
        orden, 
        setDate, 
        setCover, 
        sliderValue, 
        setSliderValue, 
        setProvincia, 
        provincia, 
        setCanton, 
        canton, 
        dateValue,
        setDateValue
        }
    ){
    
    const { combine, allowedMaxDays, beforeToday } = DateRangePicker;
    const sortedTypes = types.sort(function(a, b){
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      })

    function updateCalendar(dateValue) {
        setDateValue(dateValue);
        setDate(dateValue);
    }
    function cleanCalendar(){
        setDateValue([])
        setDate([])
    }

    function updateCover(sliderCover) {
        setSliderValue(sliderCover);
        if(sliderCover[1] === 50000){
            setCover([sliderCover[0], 9999999])
        }else{
            setCover(sliderCover);
        }
        if(sliderValue[0] === 0){
            document.getElementById("coverLow").innerText = "GRATIS"
        } else if (sliderValue[0] === 50000) {
            document.getElementById("coverLow").innerText = "mas de ¢50000"
        } else {
            document.getElementById("coverLow").innerText = "¢" + sliderValue[0]
        }
        if(sliderValue[1] === 0){
            document.getElementById("coverHigh").innerText = "GRATIS"
        } else if (sliderValue[1] === 50000) {
            document.getElementById("coverHigh").innerText = "mas de ¢50000"
        } else {
            document.getElementById("coverHigh").innerText = "¢" + sliderValue[1]
        }
    }

    const predefinedBottomRanges = [
        {
          label: 'HOY',
          value: [new Date(), new Date()]
        },
        {
          label: 'Esta Semana',
          value: [new Date(), endOfWeek(new Date(), { weekStartsOn: 1 })]
        },
        {
            label: 'Proxima Semana',
            value: value => {
              const [start = new Date()] = value || [];
              return [
                addDays(startOfWeek(start, { weekStartsOn: 1 }), 7),
                addDays(endOfWeek(start, { weekStartsOn: 1 }), 7)
              ];
            }
          },
      ];
      
    function togglePetFriendly(event){
        setPetFriendly(!petFriendly)
        event.target.classList.toggle("tagActive");
    }

    function orderByDate(){
        setOrden(true);
        const element = document.getElementsByClassName("orderByDate");
        element[0].classList.add("currentOrder");
        element[0].classList.remove("lineOver");
        const element2 = document.getElementsByClassName("orderByNearest");
        element2[0].classList.remove("currentOrder");
        element2[0].classList.add("lineOver");
    }
    function orderByNearest(){
        setOrden(false);
        const element = document.getElementsByClassName("orderByNearest");
        element[0].classList.add("currentOrder");
        element[0].classList.remove("lineOver");
        const element2 = document.getElementsByClassName("orderByDate");
        element2[0].classList.remove("currentOrder");
        element2[0].classList.add("lineOver");
    }

    function toggleOrder(){
        orden ? orderByNearest() : orderByDate();
    }

    function getCurrentCantones(){
        if(provincia.length === 1){
            let currentLocations = [];
            events.map((ev) => currentLocations = [...currentLocations, ev.location])
            currentLocations = [...new Set(currentLocations)]

            let currentAdress = currentLocations.map((cloc) => locations.find((loc)=> loc.name === cloc));
            let currentLugaresxProvincia = currentAdress.filter((ca) => ca.provincia === provincia[0])
            let currentCantones = [...new Set(currentLugaresxProvincia.map((lxp) => lxp.canton))]
            return (currentCantones)
        }
    }
   
    return (
        <div id="menu" className='container box-content h-screen sticky top-0'>
            <div id='menuContainer' className='columns-1'>
                <div className='menuItem menuDates'>
                    <DateRangePicker
                        value={dateValue}
                        onChange={updateCalendar}
                        onOk={updateCalendar}
                        onClean={cleanCalendar}
                        showOneCalendar
                        ranges={predefinedBottomRanges}
                        format="dd.MM.yyyy"
                        size="sm"
                        appearance="subtle" 
                        shouldDisableDate={combine(allowedMaxDays(), beforeToday())}
                        locale = {{
                            sunday: 'Do',
                            monday: 'Lu',
                            tuesday: 'Ma',
                            wednesday: 'Mi',
                            thursday: 'Ju',
                            friday: 'Vi',
                            saturday: 'Sa',
                            ok: 'OK',
                            hours: 'Horas',
                            minutes: 'Minutos',
                            seconds: 'Segundos'
                        }}
                    />
                </div>

                <div className='menuItem menuCover'>
                    <p id="coverTitle">Cover:</p>
                    <RangeSlider 
                        max={50000}
                        min={0}
                        step={1000}
                        value={sliderValue} 
                        onChange={updateCover}
                        progress
                        tooltip={false}
                    />
                    <div className='coverValues'>
                        <span id='coverLow'>GRATIS</span>
                        <span id='coverHigh'>mas de ¢50000</span>
                    </div>
                </div>
                <div className='menuItem menuTypes'>
                    {sortedTypes.map((type) => <TypeTags key={type.id} events={events} name={type.name} setTypes={setTypes} typeV={typeV} />)}
                </div>
                <div className='menuItem menuLocation'>
                    {provincias.map((loc) => <LocationTags key={loc.id} events={events} name={loc.name} setProvincia={setProvincia} provincia={provincia} setCanton={setCanton} canton={canton}/>)}
                    <br/>
                    {getCurrentCantones()?.map((loc, index) => <CantonTags key={index} name={loc} setCanton={setCanton} canton={canton}/>)}
                </div>
                <div className='menuItem menuOrder'>
                    <div className='menuOrderContainer'>
                        <p onClick={toggleOrder} className='menuOrderTitle'>Ordenado por:</p>
                        <span onClick={orderByDate} className='menuOrderOption currentOrder orderByDate'>FECHA</span>  |  <span onClick={orderByNearest} className='menuOrderOption lineOver orderByNearest'>CERCANIA</span>
                    </div>
                </div>
                <div className='menuItem menuPetFriendlyContainer'>
                    <span onClick={togglePetFriendly} className='menuPetFriendly'> Pet Friendly</span>
                </div>
            </div>
        </div>
    )
}

export default Menu


