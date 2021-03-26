class User {
  constructor(name) {
    this.name = name;
  }

  sayHello = () => {
    console.log(`Hi my name is ${this.name}`);
  };
}
module.exports = User;

// export default User;
