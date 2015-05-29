/* Object.create inheritance  */

var Man_object_create = {
	constructor : function (name, age) {
		this.name = name || "Unnamed Man";
		this.age = age || "99";
		return this;
	},
	live : function () {}
};

var Student_object_create = Object.create(Man_object_create, {
	constructor : { 
		value : function(){ 
			Man_object_create.constructor.apply(this, arguments);
			return this; 
		}
	},
	study : { 
		value : function () {} 
	}
});


/* Function-constructor inheritance  */

var Man_function_constructor = function (name, age) {
	this.name = name || "Unnamed Man";
	this.age = age || "99";
};

Man_function_constructor.prototype.live = function () {

};

var Student_function_constructor = function () {
	Man_function_constructor.apply(this, arguments);
};

Student_function_constructor.prototype = new Man_function_constructor();

Student_function_constructor.prototype.study = function () {

};



/* duckType implementation */

function duckType (obj) {
	if (!obj || (typeof obj !== "object")) {
		console.error("Wrong data type or expected parameter is empty!");
	} else {
		if (("live" in obj) && ("study" in obj)) {
			console.log("Type of the Object: Student");
		} else {
			console.log("Type of the Object: Man");
		}
	}
};


/* duckTypeModify implementation */

function duckTypeModify () {
	if (this === window) {
		console.error("Function duckTypeModify can't be running in global context. Please set the context!");
	} else {
		if (("live" in this) && ("study" in this)) {
			console.log("Type of the Object: Student");
		} else {
			console.log("Type of the Object: Man");
		}
	}
};



/* Creating instances of constructors */

var man_fun_const = new Man_function_constructor("Vitaly", "21");
var student_fun_const = new Student_function_constructor("Elena", "20");

var man_object_create = Object.create(Man_object_create).constructor("Andrey", "22");
var student_object_create = Object.create(Student_object_create).constructor("Anna", "19");




/* Running Tests */

console.info("Function-constructor style - Man Object:");
console.log(man_fun_const);
console.log(man_fun_const.name);
console.log(man_fun_const.age);

console.info("Function-constructor style - Student Object:");
console.log(student_fun_const);
console.log(student_fun_const.name);
console.log(student_fun_const.age);


console.info("Object-create style - Man Object:");
console.log(man_object_create);
console.log(man_object_create.name);
console.log(man_object_create.age);

console.info("Object-create style - Student Object:");
console.log(student_object_create);
console.log(student_object_create.name);
console.log(student_object_create.age);


console.info("Running duckType");
duckType(student_fun_const);
duckType(man_fun_const);
duckType(student_object_create);
duckType(man_object_create);
duckType();

console.info("Running duckTypeModify");
duckTypeModify.call(student_fun_const);
duckTypeModify.call(man_fun_const);
duckTypeModify.call(student_object_create);
duckTypeModify.call(man_object_create);
duckTypeModify.call();
