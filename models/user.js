var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var Jokesters = sequelize.define("Jokesters", {
      email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Jokesters.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  Jokesters.addHook("beforeCreate", function(jokesters) {
    jokesters.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return Jokesters;
};