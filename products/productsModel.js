const neo4j = require('../db/init')

class Product {
    constructor(name) {
        this.name = name
    }

    static find() {
        return neo4j.session.run(
            'MATCH (p:Product) RETURN { id: ID(p), name: p.name }'
        )
        .then(results => {
            // console.log(results)
            neo4j.session.close();
            return results.records.map(rec => (
                {
                    id: rec._fields[0].id.low, 
                    name: rec._fields[0].name
                }
            ))
        })
        .catch(err => {
            neo4j.driver.close()
            return new Error(err)
        })
    }

    static findOneById(id) {
        return neo4j.session.run(
            'MATCH (p:Product) WHERE id(p) = $id RETURN {id: ID(p), name: p.name}',
            {id: id} //params into neo4j to prevent injection (sql like injection)
        )
        .then(result => {
            neo4j.session.close()
            return {
                id: result.records[0]._fields[0].id.low,
                name: result.records[0]._fields[0].name
            }
        })
        .catch(err => {
            neo4j.driver.close()
            return new Error(err)
        })
    }

    save() {
        return neo4j.session.run(
            'CREATE (p:Product { name: $name }) RETURN {id: ID(p), name: p.name}',
            {name: this.name}
        )
        .then(result => {    
            neo4j.session.close()    
            const singleRecord = result.records[0]
            const node = singleRecord.get(0)
            return {
                id: node.id.low,
                name: node.name
            }
        })
        .catch(err => {
            neo4j.driver.close()
            return new Error(err)
        })
    }
}

module.exports = Product