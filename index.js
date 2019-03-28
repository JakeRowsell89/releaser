const getComponent = require('./getComponents')

getComponent.then(function (response) {
  console.log(response)
  const info = JSON.parse(response);
  console.log(info.fields.components);
  return info.fields.components;
}).catch(e => console.log(e))