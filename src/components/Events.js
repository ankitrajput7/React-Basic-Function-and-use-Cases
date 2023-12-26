function Events() {
  return (
    <div>
      <div
        onClick={() => {
          console.log("on click event");
        }}
      >
        click
      </div>

      <div
        onMouseDown={() => {
          console.log("on mouse down");
        }}
      >
        mouse down
      </div>

      <div
        onMouseUp={() => {
          console.log("on mouse up");
        }}
      >
        mouse up
      </div>
    </div>
  );
}

export default Events;
