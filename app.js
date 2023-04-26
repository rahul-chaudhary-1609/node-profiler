import Express from "express";
import fs from 'fs';
import v8Profiler from "v8-profiler-next";

const title = "pro"

const App = new Express();
v8Profiler.setGenerateType(1);

App.get('/',(req,res)=>{
    v8Profiler.startProfiling(title, true);
    for(let i=0; i<10000;i++){
        console.log("i",i)
    }
    const profile = v8Profiler.stopProfiling(title);
    profile.export(function (error, result) {
        fs.writeFileSync(`${title}.cpuprofile`, result);
        profile.delete();
    });
    res.send("Ok")
})


App.listen(8011,()=>{
    console.log("Server Started")
})