const mysql= require('mysql')

module.exports=()=>{
    let connection=mysql.createConnection({
        host:'localhost',
        port:'3306',
        user:'root',
        password:'root',
        database:'weeegg'
    })

    connection.connect((error)=>{
        if(error){
            console.log('数据库不存在');
            
        }else{
            console.log('数据库连接成功');
            
        }
    })

    return new Promise((resolve,reject)=>{
        connection.query('select * from weekeggs',(error,data)=>{
            if(error){
                reject(error)
            }else{
                resolve(data)
            }
            connection.end()
        })
    })
}