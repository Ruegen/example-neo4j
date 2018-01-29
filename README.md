![neo4j brand](/docs/neo4j.png)

# minimal neo4j example with express

## Notes:
- use homebrew ```brew install neo4j```
- start and stop neo4j e.g. ```neo4j start```
- ***database user and password need to be generated before first use***
- neo4js must be running first in order to connect
- db/init.js returns session and driver objects needed for a data model 
- db/init.js provides the initial connection to neo4js database
- params must be passed through securly when requesting data to prevent injection
- /products holds the model, routes and test http files