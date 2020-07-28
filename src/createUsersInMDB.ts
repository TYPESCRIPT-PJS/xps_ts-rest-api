const db:any=[];
db.createUser(
    {
        user:"root",
        pwd:"Online1234",
        roles:[{role:"root",db:"admin"}]
    }
)

db.createUser(
    {
        user:"admin",
        pwd:"1234",
        roles:[{role:"userAdminAnyDatabase",db:"admin"},"readWriteAnyDatabase"]
    }
)

db.createUser(
    {
        user:"test-user",
        pwd:"1234",
        roles:[{role:"readWrite",db:"test"}]
    }
)