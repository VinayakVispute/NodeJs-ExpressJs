const EventEmitter = require("events");

const customEvent = new EventEmitter();

customEvent.on("responseData", () => {
  console.log("Data recevied ok");
});
customEvent.on("responseData", () => {
  console.log("Data recevied1 ok");
});
customEvent.on("responseData", (name, rollno) => {
  console.log(`Data recevied2 ok${name}  ${rollno}`);
});

customEvent.emit("responseData", "Vainayak", 243);
