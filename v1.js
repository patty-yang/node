// const mysql = require('mysql2')
const mysql = require('mysql2/promise')

async function test() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'validate_password',
    database: 'test',
    multipleStatements: true
  })

  // 1. 普通查询
  // connection.query('SELECT * FROM `company`;', function (err, results) {
  //   //err错误
  //   //result查询结果
  //   console.log(results) // results contains rows returned by server
  // })

  // 2. 预防 sql 注入
  const sql = 'SELECT * FROM `company` where id=?;'
  const [results] = await connection.execute(sql, [1])
  console.log(results)
  connection.end()
}

// test()

async function test2() {
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: 'validate_password',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // 最大空闲连接数，默认等于 `connectionLimit`
    idleTimeout: 60000, // 空闲连接超时，以毫秒为单位，默认值为 60000 ms
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  })

  const sql = 'SELECT * FROM `company` where id=?;'

  const [results] = await pool.execute(sql, [1])
  console.log(results)
}

test2()
