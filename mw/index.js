const http = require('http');

function express () {
    const queue = [];

    const app  = (req, res) => {
        let i = 0;

        function next () {
            const task = queue[i++];

            if (!task) {
                return;
            }

            task(req, res, next);
        }

        next();
    };

    app.use = fn => {
        queue.push(fn);
    };

    return app;
}

const app = express();

app.use((req, res, next) => {
    next();
    res.end('test');
});

app.use((req, res, next) => {
    console.log('mw-A-1');
    next();
    console.log('mw-A-2');
});

app.use((req, res, next) => {
    console.log('mw-B-1');
    next();
    console.log('mw-B-2');
});

app.use((req, res, next) => {
    console.log('mw-C-1');
    next();
    console.log('mw-C-2');
});

http.createServer(app).listen(9527, () => {
    console.log('Server started!');
});
