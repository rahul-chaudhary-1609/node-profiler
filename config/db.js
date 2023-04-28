import sequelize, {Sequelize} from "sequelize";
import { DB_CONFIG } from "../constants.js";
import { Logger } from "../logger/logger.js";



export default function databaseConnection(params={}){
    return {
        dbOptions:{
            host: params.host || DB_CONFIG.host,
            port: params.port || DB_CONFIG.port,
            username: params.username || DB_CONFIG.username,
            password: params.password || DB_CONFIG.password,
            database: params.database || DB_CONFIG.database,
            dialect:params.dialect || DB_CONFIG.dialect,
        },
        Sequelize:Sequelize,
        sequelize:sequelize,
        initialize: function(){
            return new Sequelize({
                ...this.dbOptions,
                benchmark: true,
                logging: (sql,time)=>{Logger.debug(`"query": "${sql}",\n\t"Execution Time": "${time/1000}",`)},
            })
        },
        authenticate:function(){
            this.initialize().authenticate().then((db)=>{
                console.log(`Connection stablised with ${this.dbOptions.database} database`)
            }).catch((error)=>{
                console.log(`Error in connection with ${this.dbOptions.database} database`, error)
            })
        }
    }
}