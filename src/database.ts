import mongoose, {ConnectionOptions} from 'mongoose';
import config from './config/config'

const connection=mongoose.connection;
const dbOptions:ConnectionOptions={
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}

mongoose.connect(config.DB.URI,dbOptions);

connection.once('open',()=>{
    console.log('conection stablished!!!')
});

connection.on('error',err=>{
    console.log(`no se ha establecido conexion: ${err}`)
    process.exit(0);
})