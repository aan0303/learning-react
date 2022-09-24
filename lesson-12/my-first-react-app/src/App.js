import "./App.css";
import Title from "./components/Title";
import { useState } from "react";
import Modal from "./components/Modal";
import EventsList from "./components/EventsList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  const handleClose = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleClick = (id) => {
    setEvents((prevEvent) => prevEvent.filter((event) => event.id !== id));
  };

  return (
    <div className="App">
      <Title title="Events in your area" subtitle="Hola Amigos" />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && <EventsList events={events} handleClick={handleClick} />}

      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}

      {!showModal && (
        <div>
          <button onClick={() => setShowModal(true)}>Show Modal</button>
        </div>
      )}

      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={tr}>
          <h2>Terms and Conditions</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </Modal>
      )}
    </div>
  );
}

export default App;
