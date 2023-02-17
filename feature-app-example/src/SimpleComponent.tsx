function SimpleComponent() {
  if (window && window.vbo) {
    console.log("Global storage from Feature App", window.vbo);
  } else {
    console.log("No data available yet");
  }

  return <div>Simple component, check the console!</div>;
}

export default SimpleComponent;
