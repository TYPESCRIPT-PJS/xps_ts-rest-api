export default {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB:{
        URI: process.env.MONGODB_URI || 'mongodb://test-user:1234@localhost/test',
        USER:process.env.MONGODB_USER || 'test-user',
        PASSWORD:process.env.MONGODB_PASSWORD || '1234'
    }
}