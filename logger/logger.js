import {createLogger, format, transports} from "winston"; 
import expressWinston from "express-winston";

const customFormat = format.printf(({timestamp,level,message,meta,durationMs})=>{
    let result = `{\n\t"timestamp": "${timestamp}",\n\t"level": "${level}",`

    if(message){
        if(message.includes('"query": "Executed')){
            result = result + `\n\t${message}`
        }else{
            result = result + `\n\t"message": "${message}",`
        }
    }
    if(meta){
        result = result + `\n\t"meta": "${JSON.stringify(meta)}",`
    }
    if(durationMs){
        result = result + `\n\t"Execution Time": "${durationMs/1000} sec",`
    }

    result = result + "\n}\n\n"
    return result
            // "Execution Time (sec)": ${durationMs ? durationMs/1000 : 'NA'},\n
            // meta: ${JSON.stringify(meta)}\n`

    // return {
    //     "level":level,
    //     "message/query":message,
    //     "timestamp":timestamp,
    //     "Execution Time (sec)": durationMs ? durationMs/1000 : 'NA',
    //     "meta":meta,
    // }
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
        }),
        new transports.File({
            level:"debug",
            filename:"logger/logs/debug.log"
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
