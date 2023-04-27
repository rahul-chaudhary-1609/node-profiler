import fs from 'fs';
import v8Profiler from 'v8-profiler-next';
import { PROFILING_CONFIG } from '../constants.js';

export default function profiler(params={}){
    console.log(params)
    v8Profiler.setGenerateType(1);
    return {
        title: params.title || PROFILING_CONFIG.titile,
        profiling_status: params.is_profiling_active || PROFILING_CONFIG.status,
        outputDir: params.outputDir || PROFILING_CONFIG.outputDir,
        start:function(){
            if(this.profiling_status){
                console.log(this)
                v8Profiler.startProfiling(this.title, true);
            }
        }, 
        stop:function(){
            if(this.profiling_status){
                console.log(this)
                const profile = v8Profiler.stopProfiling(this.title);
                profile.export((error, result) =>{
                    fs.writeFileSync(`${this.outputDir}/${this.title}.cpuprofile`, result);
                    profile.delete();
                    console.log(profile.getHeader())
                    console.log(profile.startTime, new Date(profile.startTime))
                    // for(let node of profile.nodes){
                    //     console.log(node);
                    // }
                });
            }
        } 
    }
} 