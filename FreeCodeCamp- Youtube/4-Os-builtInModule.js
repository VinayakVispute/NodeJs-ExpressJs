const os = require(`os`);

// Information about the current user

const user = os.userInfo();
console.log(user);

//methoud returns uptime of pc/laptop in seconds

const upTime = os.uptime();
console.log(`The Uptime of the current PC & Laptop ${upTime}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
