import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import CreateEvent from "./CreateEvent";
import Events from "./Events";

const eventDetails = [
  {
    name: "Friendship Day",
    startTime: "9:00",
    endtime: "11:00",
    location: "Ahmedabad",
    description: "This is sample description 1",
    category: "Drawing",
    img: "https://i.ytimg.com/vi/eqXcwKp0b58/maxresdefault.jpg",
  },
  {
    name: "Rakshabandhan",
    startTime: "10:00",
    endtime: "11:00",
    location: "Surat",
    description: "This is sample description 2",
    category: "Celebration",
    img: "https://images.news18.com/ibnlive/uploads/2021/08/raksha-bandhan1.jpg",
  },
  {
    name: "Bike Trip",
    startTime: "8:00",
    endtime: "15:00",
    location: "Ahmedabad",
    description: "This is sample description 3",
    category: "Travelling",
    img: "https://imgcld.yatra.com/ytimages/image/upload/v1554203593/AdvNation/ANN_TRP772/uttarakhand_motorcycle_tour_2zdPJv.jpg",
  },
  {
    name: "Dresses",
    startTime: "9:30",
    endtime: "11:00",
    location: "Rajkot",
    description: "This is sample description 4",
    category: "Exhibition",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/05/e9/4e/40/little-black-dress-exhibition.jpg",
  },
];

function App() {

  const [events, setEvents] = useState(eventDetails)

  const newEvent = (eventObj) => {

    console.log(`new event called`, eventObj)
    const newEventObj = {...eventObj, img: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"}
    setEvents([...events, newEventObj])
  }

  console.log(events)
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Events events={events}/>
        </Route>
        <Route path="/createevent" exact>
          <CreateEvent props={newEvent}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
