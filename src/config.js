export const config = {
    development: {
        apiVersion: 1,
        api: 'http://localhost:3001/api/1/'
    },
    production: {
        apiVersion: 1,
        api: 'http://localhost:3001/api/1/'
    }
}[process.env.NODE_ENV || 'development'];
