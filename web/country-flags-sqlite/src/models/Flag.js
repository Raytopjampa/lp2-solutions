const { conn } = require('../db');

async function create(data) {
  const sql = `
  INSERT INTO
    flags (id, image, name)
  VALUES
    (?, ?, ?)
  `;

  const db = await conn();

  const {id, image, name } = data;

  const { lastID } = await db.run(sql, [id, image, name]);
  await db.close();
  return lastID; //poderia ser await
}

async function readAll() {
  const sql = `
  SELECT
    *
  FROM
    flags
`;

const db = await conn();

const flags = await db.all(sql);
await db.close();
return flags;
}

async function readById(id) {
  const sql =`
  SELECT * FROM flags WHERE flags.id = ?
  ` ;
  const db = await conn();

  const flags = await db.get(sql, [id]);
  await db.close();
  return flags;
}

module.exports = { create, readAll, readById };
