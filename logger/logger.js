import {createLogger, format, transports} from "winston"; 
import expressWinston from "express-winston";

const customFormat = format.printf(({timestamp,level,json,message,meta})=>{
    return `${timestamp} | ${level} | ${message} : ${json} : ${JSON.stringify(meta)}`
})

export const Logger = createLogger({
    transports:[
        new transports.File({
            level:"info",
            filename:"logger/logs/info.log"
        }),
        new transports.File({
            level:"warn",
            filename:"logger/logs/warn.log"
        }),
        new transports.File({
            level:"error",
            filename:"logger/logs/error.log"
        })
    ],
    format:format.combine(
        format.timestamp(),
        format.json(),
        format.prettyPrint(),
        customFormat,
    )

})

export const expressLogger = expressWinston.logger({
    winstonInstance:Logger,
    statusLevels:true
})

export const expressErrorLogger = expressWinston.errorLogger({
    winstonInstance:Logger,
    statusLevels:true
})
