const { conn } = require('../db');

async function up (){
    const sql = `
        CREATE TABLE IF NOT EXISTS flags (
            id TEXT PRIMARY KEY,
            image TEXT NOT NULL,
            name TEXT NOT NULL
            
        )


    `;
    const db = await conn();
    
    await db.run(sql);
    await db.close();
};

async function down (){
    const sql = `DROP TABLE flags`;

    const db = await conn();
   
    await db.run(sql);
    await db.close();
};

module.exports= {up, down}