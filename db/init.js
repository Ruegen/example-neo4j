const neo4j = require('neo4j-driver').v1;

const uri = 'bolt://localhost'
const user = process.env.NEO4J_USER //stored in your .env.development file
const password = process.env.NEO4J_PASSWORD //stored in your .env.development file


// small error log in console to help you see if environment variables passing
if(user === undefined) {
    throw new Error(`username for database not defined in environment variables`)
}

if(password === undefined) {
    throw new Error(`password for database not defined in environment variables`)
}

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();

module.exports = {session, driver}
