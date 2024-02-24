const moongose = require('mongoose');

const conectarDB = async () => {
    try {
        const connect = await moongose.connect("mongodb+srv://deiber22cora:1025643096@countries.inovl5j.mongodb.net/")
        console.log(connect.connection.host);
    } catch (error) {
        console.log("error");
    }
}
module.exports = conectarDB