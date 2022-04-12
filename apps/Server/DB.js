import {createPool} from "mysql"
const connection = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "CSE311l__Project",
  // connectionLimit: 15,
  // port:"3000",
})
connection.on("error", (err) => {
  console.log("db error", err);
})

export default connection;