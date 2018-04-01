const exampleDecorator = () => {
	
	const decorator = fn => (...args) => fn(...args)

	const helloWorld = fn => (...args) => {
		console.log("Hello World");
		return "Hello World " + fn(...args);
	}

	const add = (a,b) => a + b ;

	let helloWorldAdd = helloWorld(add);
	
	return{
		helloWorldAdd
	}
}
module.exports = exampleDecorator();
