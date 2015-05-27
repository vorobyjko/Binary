/* Object.create inheritance  */

var Man_object_create = {
	constructor : function (name, age) {
		this.name = name || "Вася";
		this.age = age || "24";
		this.live = function () {};
		return this;
	}
};

var man_object_create = Object.create(Man_object_create).constructor("Аня", "19");

var Student_object_create = Object.create(Man_object_create).constructor("John", "19");

Student_object_create.constructor = function () {
	Student_object_create.constructor.apply(this, arguments);
}

var student_obj_create = Student_object_create;

//Man_object_create.prototype.live = 

/*var Student_object_create = function () {
	
};

Student_object_create.prototype = Object.create(Man_object_create.__proto__);
Student_object_create.prototype.constructor = Student_object_create;


Student_object_create.prototype.study = function () {
		
};*/





/* Function-constructor inheritance  */

var Man_function_constructor = function (name, age) {
	this.name = name || "Вася";
	this.age = age || "24";

	this.live = function () {

	}
}

var Student_function_constructor = function () {
	this.study = function () {

	}
}

Student_function_constructor.prototype = new Man_function_constructor();


function duckType (obj) {
	if (!obj || (typeof obj !== "object")) {
		console.error("Wrong data type or expected parameter is empty!");
	} else {
		for (var prop in obj) {
			if ((obj.hasOwnProperty(prop)) && (typeof obj[prop] === "function")) {
				switch (prop) {
					case "live" : console.log("Type of the Object: Man");
						break;
					case "study" : console.log("Type of the Object: Student");
						break;
					default : console.error("Can't find the type");
				}
			}		
		};
	}
};



function duckTypeModify () {
	if (this === window) {
		console.error("Function duckTypeModify can't be running in global context. Please set the context!");
	} else {
		for (var prop in this) {
			if ((this.hasOwnProperty(prop)) && (typeof this[prop] === "function")) {
				switch (prop) {
					case "live" : console.log("Type of the Object: Man");
						break;
					case "study" : console.log("Type of the Object: Student");
						break;
					default : console.error("Can't find the type");
				}
			}		
		};
	}
};



/* Creating instances of constructors */

var man_fun_const = new Man_function_constructor("Виталий", "21");
var student_fun_const = new Student_function_constructor();

//var man_obj_create = new Man_object_create("Анна", "19");
//var student_obj_create = new Student_object_create();



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
console.log(student_obj_create);
console.log(student_obj_create.name);
console.log(student_obj_create.age);


console.info("Running duckType");
duckType(student_fun_const);
duckType(man_fun_const);
duckType();

console.info("Running duckTypeModify");
duckTypeModify.call(student_fun_const);
duckTypeModify.call(man_fun_const);
duckTypeModify.call();
