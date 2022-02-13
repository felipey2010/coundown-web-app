import launch from "./images/launch.svg";
import { useState, useEffect } from "react";
import TimeComponent from "./components/timeComponent";
import { useSnackbar } from "notistack";

export default function App() {
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(7);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(59);
  // For notification
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function showNotification() {
    closeSnackbar();

    //At the moment, just show a notification. A real function can be implemented later
    enqueueSnackbar("Registration submitted", {
      variant: "success",
      preventDuplicate: true,
    });
  }

  useEffect(() => {
    // Function to check and reduce the countdown
    function timeReducer() {
      setSeconds(59);
      // check if minutes = 0 else reduce the minutes
      if (minutes === 0) {
        // if hours = 0 then reduce the number of days else reduce just the hours
        if (hours === 0) {
          // check if the number of days left is not zero else do nothing
          if (days !== 0) {
            setDays(days - 1);
          }
        } else {
          setHours(hours - 1);
        }
      } else {
        setMinutes(minutes - 1);
      }
    }

    //   //Clear loading screen after 2 seconds
    const timeoutId = setTimeout(() => {
      if (seconds === 0) {
        timeReducer();
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);

    // eslint-disable-next-line
  }, [seconds]);

  return (
    <div className="App div-flex-center">
      <div className="main-container">
        <div className="div-half div-flex-center div-flex-column">
          <div className="first-div-top">
            <h1>Ready to launch in...</h1>
          </div>
          <TimeComponent
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
          <div className="text-div">
            <p>Register to obtain more information about the launching</p>
          </div>

          <div className="button-div">
            <button onClick={showNotification}>Register</button>
          </div>
        </div>
        <div className="div-half div-flex-center">
          <img src={launch} alt="launch" className="second-div-image" />
        </div>
      </div>
    </div>
  );
}
