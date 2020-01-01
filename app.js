
let Koa = require('koa')
let router=require('koa-router')()
let static=require('koa-static')
const path=require('path')

const query=require('./db/index.js')

let app = new Koa()
app.use(static(path.join(process.cwd(),'./public/')))
console.log(router);

app.use(router.routes())

app.use(router.allowedMethods())

router.get('/userlist',async (ctx)=>{
    ctx.body=[1,2,3]
})

router.get('/login',async (ctx)=>{
    let data=await query()
    ctx.body={
        code:1,
        data
    }
})
app.listen(3000,()=>{
    console.log('成功');
    
})