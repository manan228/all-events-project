import { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const CreateEvent = () => {
  const history = useHistory();
  const eventNameInputRef = useRef();
  const startTimeInputRef = useRef();
  const endTimeInputRef = useRef();
  const locationInputRef = useRef();
  const descriptionInputRef = useRef();
  const categoryInputRef = useRef();

  const onAddEventHandler = async (e) => {
    e.preventDefault();

    const eventName = eventNameInputRef.current.value;
    const startTime = startTimeInputRef.current.value;
    const endtime = endTimeInputRef.current.value;
    const location = locationInputRef.current.value;
    const description = descriptionInputRef.current.value;
    const category = categoryInputRef.current.value;

    console.log(eventName);
    const eventObj = {
      name: eventName,
      startTime,
      endtime,
      location,
      description,
      category,
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
    };

    try {
      const response = await axios.post(
        `https://allevents-358319-default-rtdb.firebaseio.com/eventdetails.json`,
        eventObj
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }

    history.replace("/home");
  };
  return (
    <>
      <form>
        <div>
          <label>Event Name:</label>
          <input type="text" ref={eventNameInputRef} />
        </div>
        <div>
          <label>Start Time:</label>
          <input type="time" ref={startTimeInputRef} />
        </div>
        <div>
          <label>End Time:</label>
          <input type="time" ref={endTimeInputRef} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" ref={locationInputRef} />
        </div>
        <label>Description:</label>
        <input type="text" ref={descriptionInputRef} />
        <div>
          <label>Category</label>
          <input type="text" ref={categoryInputRef} />
        </div>
        <button type="submit" onClick={onAddEventHandler}>
          Add Event
        </button>
      </form>
    </>
  );
};

export default CreateEvent;
