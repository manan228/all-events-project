import { useEffect, useState } from "react";
import Login from "./GoogleLogin";
import Logout from "./GoogleLogout";
import { useHistory } from "react-router-dom";
import { gapi } from "gapi-script";
import axios from "axios";

const clientId =
  "1036153118460-6p711aklh70kj0he6n7b7rmjeoa7ui86.apps.googleusercontent.com";

const Events = () => {
  const history = useHistory();
  const [filterLocation, setFilterLocation] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [events, setEvents] = useState([]);

  console.log(events);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await axios.get(
          `https://allevents-358319-default-rtdb.firebaseio.com/eventdetails.json`
        );

        setEvents(Object.values(response.data));
      } catch (err) {
        console.log(err);
      }
    };

    getEvents();
  }, []);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  // function handleCallbackResponse(response) {

  //   console.log(response.credential)
  // }

  // useEffect(() => {

  //   google.accounts.id.initialize({
  //     client_id: "1036153118460-6p711aklh70kj0he6n7b7rmjeoa7ui86.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   })

  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     {theme: "outline", size: "large"}
  //   )
  // }, [])

  const onFilterByLocationClickHandler = (event) => {
    setFilterLocation(event.target.value);
  };

  const onFilterByCategoryClickHandler = (event) => {
    setFilterCategory(event.target.value);
  };

  const locationFilter = events.filter((event) => {
    if (filterLocation === "All") {
      return event;
    } else if (event.location === filterLocation) {
      return event;
    } else {
      return null;
    }
  });

  const categoryFilter = events.filter((event) => {
    if (filterCategory === "All") {
      return event;
    } else if (event.category === filterCategory) {
      return event;
    } else {
      return null;
    }
  });

  const finalFilter = categoryFilter.filter((event) =>
    locationFilter.includes(event)
  );

  return (
    <>
      <h1>Events</h1>
      <Login />
      <Logout />
      <span>Filter By Location: </span>
      <select onChange={onFilterByLocationClickHandler}>
        <option>All</option>
        <option>Ahmedabad</option>
        <option>Surat</option>
        <option>Rajkot</option>
      </select>

      <span>Filter By Category: </span>
      <select onChange={onFilterByCategoryClickHandler}>
        <option>All</option>
        <option>Drawing</option>
        <option>Celebration</option>
        <option>Travelling</option>
        <option>Exhibition</option>
      </select>

      <button onClick={() => history.replace("/createevent")}>
        Create event
      </button>
      <hr />
      {finalFilter.map((event) => {
        return (
          <>
            <div>
              <div>Event name: {event.name}</div>
              <div>Start Time: {event.startTime}</div>
              <div>End Time: {event.endtime}</div>
              <div>Location: {event.location}</div>
              <div>Description: {event.description}</div>
              <div>Category: {event.category}</div>
              <img src={event.img} alt={event.description} height="100px" />
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default Events;
