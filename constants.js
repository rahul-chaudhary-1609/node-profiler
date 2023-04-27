import dotEnv from "dotenv";
dotEnv.config();

export const SERVER_CONFIG = {
    host:process.env.server_host,
    port:process.env.server_port
}

export const DB_CONFIG = {
    host:process.env.db_host,
    port:process.env.db_port,
    username:process.env.db_username,
    password:process.env.db_password,
    database:process.env.db_database,
    dialect:process.env.db_dialect
}

export const PROFILING_CONFIG = {
    titile:process.env.profiling_title,
    status:process.env.profiling_status,
    outputDir:process.env.profiling_output_dir
}
 
