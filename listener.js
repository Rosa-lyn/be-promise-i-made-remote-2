const app = require("./server.js");

app.listen(9090, (error) => {
  if (error) console.log(error);
  else console.log("listenting on port 9090");
});
