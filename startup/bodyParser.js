import bodyParser from "body-parser";

const bodyParserConnection = app => {
  try {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export default bodyParserConnection;
