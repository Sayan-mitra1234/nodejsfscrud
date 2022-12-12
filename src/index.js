const fs = require('fs/promises')
const myFileWriter = async (fileName, fileContent) => {
	await fs.writeFile(fileName,fileContent);
}
const myFileReader = async (fileName) =>{
	const data=await fs.readFile(fileName,{encoding: "utf-8"})
	console.log(data)
}
const myFileUpdater = async (fileName, fileContent) => {
	await fs.appendFile(fileName,fileContent)
}
const myFileDeleter = async (fileName) => {
	await fs.unlink(fileName)
}
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
myFileWriter("file2.txt","Hello")
myFileUpdater("file2.txt"," World")
myFileReader("file2.txt")