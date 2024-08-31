import Card from "./card"

function CardSection({events}) {
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"]; 
    let month = new Date().getMonth();
    let thisMonth = [];
    let secondMonth = [];
    let thirdMonth = [];
    let fourthMonth = [];
    let remaining = [];

    thisMonth = events.filter(checkThisMonth);
    function checkThisMonth(event) {
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var lastDay = new Date(y, m + 1, 1);
        let today = new Date().setHours(0,0,0);
        if(new Date(event.date.start) >= lastDay || new Date(event.date.end) <= today) {
            return false;
          }
          return true;
    }

    secondMonth = events.filter(checkSecondMonth);
    function checkSecondMonth(event) {
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var lastDay = new Date(y, m + 2, 1);
        var firstDay = new Date(y, m + 1, 1);
        if(new Date(event.date.start) >= lastDay || new Date(event.date.end) <= firstDay) {
            return false;
          }
          return true;
    }

    thirdMonth = events.filter(checkThirdMonth);
    function checkThirdMonth(event) {
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var lastDay = new Date(y, m + 3, 1);
        var firstDay = new Date(y, m + 2, 1);
        if(new Date(event.date.start) >= lastDay || new Date(event.date.end) <= firstDay) {
            return false;
          }
          return true;
    }

    fourthMonth = events.filter(checkFourthMonth);
    function checkFourthMonth(event) {
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var lastDay = new Date(y, m + 4, 1);
        var firstDay = new Date(y, m + 3, 1);
        if(new Date(event.date.start) >= lastDay || new Date(event.date.end) <= firstDay) {
            return false;
          }
        return true;
    }

    remaining = events.filter(checkRemaining);
    function checkRemaining(event) {
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var firstDay = new Date(y, m + 4, 1);
        if(new Date(event.date.start) >= firstDay) {
            return true;
          }
          return false;
    }

    return (
        <>
            {thisMonth.length !== 0 &&
                <div className="currentMonth month">
                    <div className="monthDivider">{months[month%12]}</div>
                    <div className="grid">{thisMonth.map((event) => <Card key={event._id.toString()+"current"} info={event} month={"current"}/>)}</div>
                </div>
            }
            {secondMonth.length !== 0 &&
                <div className="secondMonth month">
                    <div className="monthDivider">{months[(month+1)%12]}</div>
                    <div className="grid">{secondMonth.map((event) => <Card key={event._id.toString()+"second"} info={event} month={"second"}/>)}</div>
                </div>
            }
            {thirdMonth.length !== 0 &&
                <div className="thirdMonth month">
                    <div className="monthDivider">{months[(month+2)%12]}</div>
                    <div className="grid">{thirdMonth.map((event) => <Card key={event._id.toString()+"third"} info={event} month={"third"}/>)}</div>
                </div>
            }
            {fourthMonth.length !== 0 &&
                <div className="fourthMonth month">
                    <div className="monthDivider">{months[(month+3)%12]}</div>
                    <div className="grid">{fourthMonth.map((event) => <Card key={event._id.toString()+"fourth"} info={event} month={"fourth"}/>)}</div>
                </div>
            }
            {remaining.length !== 0 &&
                <div className="remaining month">
                    <div className="monthDivider">MAS EVENTOS</div>
                    <div className="grid">{remaining.map((event) => <Card key={event._id.toString()+"fifth"} info={event} month={"remaining"} />)}</div>
                </div>
            }
        </>
    )
}

export default CardSection