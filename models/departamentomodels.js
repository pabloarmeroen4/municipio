const db =require('../config/db')

async function getAlldepartamentos () {
    try {
        const [results]= await db.query('select * from departamentos')
        return results
        console.log("este es el metodo getalldepartamentos"+results)
    }
    catch {
        console.log("hay un error")
    }
}


module.exports = {getAlldepartamentos}