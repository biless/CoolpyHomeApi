/**
 * Created by bileskou on 16/8/20.
 */


const Koa = require('koa');
const Router = require('koa-router');
const fs = require("fs");
const app = new Koa();
const router = new Router();

router.get('/version/:system/:arch/', ctx => {
    var system = ctx.params.system;
    var arch = ctx.params.arch;
    var folder_exists = fs.existsSync('./bin');
    var file_paths = fs.readdirSync('./bin');
    console.log(file_paths);
    var ves = '0.0.0.0';
    file_paths.forEach( filename => {
            if(ves < filename){
                ves = filename;
            }
        });
    console.log(ves);
    if(folder_exists)
        ctx.body = system + arch;
    else
        ctx.body = { result: false , msg : "can't find the last"}
});

app.use(async(ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3000);
console.log("application listen port 3000");