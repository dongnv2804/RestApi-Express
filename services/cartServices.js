const Users = require("../models/Users");
module.exports = {
  createUser: async (req, res, next) => {
    const users = new Users();
    users.name = "dong";
    users.email = "dasdsadsad";
    var promise = users.save();
    promise.then((result) => {
      console.log(result);
      res.json(result);
    });
    promise.catch((err) => {
      res.json(err);
    });
  },
};
