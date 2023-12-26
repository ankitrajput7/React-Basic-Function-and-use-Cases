function EventBubbling() {
function handleDiv1Capture(){
    console.log("div1 capture")
}

  function handleDiv1() {
    console.log("div1 clicked");
  }

  function handleDiv2() {
    console.log("div2 clicked");
  }

  function handleButton(e) {
    // e.stopPropagation();
    console.log("button clicked");
  }

  return (
    <div onClickCapture={handleDiv1Capture} onClick={handleDiv1}>
      div1
      <div onChange={handleDiv2}>
        div2
        <button onClick={handleButton}> button1 </button>
      </div>
    </div>
  );
}

export default EventBubbling;
