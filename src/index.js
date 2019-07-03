const app = require('./config/express');

const port = 3000
logger.info("Listening on " + port);

app.listen(port, () => console.info(`server started on port ${port}`));


module.exports = app;
