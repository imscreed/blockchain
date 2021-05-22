var SHA256 = require("crypto-js/sha256");

const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};

function generateHash(data) {
    return SHA256(JSON.stringify(data));
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`dataObject Time: ${dataObject.time}`);
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);