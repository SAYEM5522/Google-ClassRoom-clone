import {createPool} from "mysql"
const connection = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "CSE311l__Project",
  // connectionLimit: 15,
  // port:"3000",
})

export default connection;