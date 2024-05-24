import pg from "pg";
const { Pool } = pg;

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: true,
  },
  // connection: {
  //   options: `project=${ENDPOINT_ID}`,
  // },
});

// console.log(process.env.PGHOST);
const connectDB = async () => {
  try {
    await pool.connect();
    console.log("Connected to Neon PostgreSQL");
  } catch (error) {
    console.error("Connection error", error.stack);
  }
};

connectDB();

export default pool;
