import databaseConnection from "../../../../config/db.js";

let dbConnection = databaseConnection();


const testTable = dbConnection.initialize().define(`testTable`,{
    id:{
        type:dbConnection.Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:dbConnection.Sequelize.STRING,
        allowNull:false,
    },
    age:{
        type:dbConnection.Sequelize.INTEGER,
        allowNull:false
    }
},
{
    tableName:"test",
    "timestamps":true,
})

testTable.sync({alter:true})


export function addData(query){
    return new Promise((resolve,reject)=>{
        testTable.create(query).then((result)=>{
            resolve(result);
        }).catch((error)=>{
            reject(error)
        })
    })
}

export function getData(query){
    return new Promise((resolve,reject)=>{
        testTable.findAll(query).then((result)=>{
            resolve(result);
        }).catch((error)=>{
            reject(error)
        })
    })
}