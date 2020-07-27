const db=require("../config/mysqlDAO.js");//@get database parameters

const user = {
    conn: db.getConnection(),
    createUser(userOB)
    {
        //@connect to database

        const sql= `INSERT INTO user (firstName,lastName,gender,email,username,password)
        VALUES('${userOB.firstName}','${userOB.lastName}','${userOB.gender}','${userOB.email}','${userOB.username}','${userOB.password}')`;
        this.conn.query(sql,(err, results, fields)=>{
            //  console.log(results); // results contains rows returned by server
           //   console.log(fields); // fields contains extra meta data about results, if available
                console.log(err);
            }
          );
    },
    updateUser(userOB)
    {

    },
    getUser(id)
    {

    },
    updatePassword(userOB)
    {

    }
}

module.exports = user;