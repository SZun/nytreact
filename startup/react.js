import path from 'path';

const clientRoute = (app, express) => {
  try {
    app.use(express.static('client/build'));
    app.get('*', function(req, res) {
      if (process.env.NODE_ENV === 'production') {
        res.sendFile(__dirname + '/client/build/index.html');
      } else {
        res.sendFile(__dirname + '/../client/public/index.html');
      }
    });
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export default clientRoute;
