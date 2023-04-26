import dotEnv from "dotenv";
dotEnv.config();

export const SERVER_CONFIG = {
    port:process.env.server_port
}

export const PROFILING_CONFIG = {
    titile:process.env.profiling_title,
    status:process.env.profiling_status,
    outputDir:process.env.profiling_output_dir
}
 
