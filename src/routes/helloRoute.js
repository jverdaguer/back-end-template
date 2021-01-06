export const helloRoute = {
    method: 'get',
    path: '/hello',
    handler: (req, res) => {
        res.send('<h1>Hello it worked!</h1>')
    },
};