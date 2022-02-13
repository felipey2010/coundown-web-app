export default function TimeComponent({ days, hours, minutes, seconds }) {
  return (
    <div className="counter-div div-flex">
      {/* Days */}
      <div className="time-div">
        <h4>Days</h4>
        {days.toString().length === 1 ? (
          <h3>{`${"0" + days}`}</h3>
        ) : (
          <h3>{days}</h3>
        )}
      </div>

      {/* Hours */}
      <div className="time-div">
        <h4>Hours</h4>
        {hours.toString().length === 1 ? (
          <h3>{`${"0" + hours}`}</h3>
        ) : (
          <h3>{hours}</h3>
        )}
      </div>

      {/* Minutes */}
      <div className="time-div">
        <h4>Minutes</h4>
        {minutes.toString().length === 1 ? (
          <h3>{`${"0" + minutes}`}</h3>
        ) : (
          <h3>{minutes}</h3>
        )}
      </div>

      {/* Seconds */}
      <div className="time-div">
        <h4>Seconds</h4>
        {seconds.toString().length === 1 ? (
          <h3>{`${"0" + seconds}`}</h3>
        ) : (
          <h3>{seconds}</h3>
        )}
      </div>
    </div>
  );
}
