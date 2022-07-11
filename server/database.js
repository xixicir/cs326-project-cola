import 'dotenv/config';
import pg from 'pg';

// Get the Pool class from the pg module.
const { Pool } = pg;

export class Database {
  constructor(dburl) {
    this.dburl = dburl;
  }

  async connect() {
    this.pool = new Pool({
      connectionString: this.dburl,
      ssl: { rejectUnauthorized: false },
    });
    this.client = await this.pool.connect();
    await this.init();
  }

  async init() {
    const queryText = `
      create table if not exists info (
        fname varchar(30),
        lname varchar(30),
        email varchar(30),
        phone varchar(30),
        vmake varchar(30),
        vmodel varchar(30),
        vyear varchar(30),
        wheel varchar(30),
        comments varchar(30)
      );

      create table if not exists price (
        id varchar(30) primary key,
        price integer
      );
      
      insert into 
      price(id, price) 
      values 
        ('fms19', 2800),
        ('fms20', 2900),
        ('fms21', 3000),
        ('fms22', 3100),
        ('f2s19', 3200),
        ('f2s20', 3300),
        ('f2s21', 3400),
        ('f2s22', 3500),
        ('f3s19', 3250),
        ('f3s20', 3350),
        ('f3s21', 3450),
        ('f3s22', 3550),
        ('fs19', 700),
        ('fs20', 750),
        ('fs21', 800),
        ('fs22', 850),
        ('cfs19', 6300), 
        ('cfs20', 6500),
        ('cfs21', 6700),
        ('cfs22', 6900);
    `;
    const res = await this.client.query(queryText);
  }
  async close() {
    this.client.release();
    await this.pool.end();
  }

  async uploadInfo(fname, lname, email, phone, vmake, vmodel, vyear, wheel, comments) {
    const queryText =
      'INSERT INTO info (fname, lname, email, phone, vmake, vmodel, vyear, wheel, comments) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
    const res = await this.client.query(queryText, [fname, lname, email, phone, vmake, vmodel, vyear, wheel, comments]);
    return res.rows;
  }

  async readPrice(id) {
    const queryText = 'SELECT * FROM price WHERE id = $1';
    const res = await this.client.query(queryText, [id]);
    return res.rows;
  }
}