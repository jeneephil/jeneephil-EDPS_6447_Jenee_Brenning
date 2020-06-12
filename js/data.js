var array_questions = [
	{
		statement: "Data sturctures are arrays or objects used to store larger amounts of information. ",
		topic: "javascript",
		sub_topic: "variable",
		answer_key: "option1",
		hint: "https://www.w3schools.com/js/js_variables.asp",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		video: { display: "false", source: "N/A" },
		help: ["Sorry, I don't have any additional information to share for this question."],
	},
	{
		statement: "Data Structures are distinct from variables in that they store multiple values.",
		topic: "javascript",
		sub_topic: "object",
		answer_key: "option1",
		hint: "https://www.w3schools.com/js/js_variables.asp",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		video: { display: "false", source: "N/A" },
		help: ["Sorry, I don't have any additional information to share for this question."],
	},
	{
		statement: "Select all of the true statements below that apply to arrays.",
		topic: "javascript",
		sub_topic: "variable",
		answer_key: "option3",
		hint: "https://www.w3schools.com/js/js_variables.asp",
		type: "multiple_choice",
		labels: [
			"var answer = 'I am the correct answer!'",
			"var answer == 'I am the correct answer!';",
			"var answer = 'I am the correct answer!';",
			"var answer = I am the correct answer!;",
		],
		video: { display: "false", source: "N/A" },
		help: [
			"Text strings in values assigned to variables are denoted by quotes.",
			"Don't forget the semicolon at the end of the line.",
			"Declarations of variables typically rely on a equal symbol '='.",
		],
	},
	{
		statement: "Select all of the true statements below that apply when defining a object.",
		topic: "javascript",
		sub_topic: "object",
		answer_key: "option1",
		hint: "https://www.w3schools.com/js/js_objects.asp",
		type: "multiple_choice",
		labels: [
			"var answer = {value: 'I am the correct answer!'};",
			"var answer = {value = 'I am the correct answer!'};",
			"var answer = (value: 'I am the correct answer!');",
			"var answer = {value: 'I am the correct answer!'}",
		],
		video: { display: "false", source: "N/A" },
		help: [
			"Sorry, I don't have any additional information to share for this question."
		],
	},
	{
		statement: "It is best practice to use let versus var when declaring a value of a variable?",
		topic: "javascript",
		sub_topic: "variable",
		answer_key: "option1",
		hint: "https://www.w3schools.com/js/js_let.asp",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		video: { display: "true", source: "https://www.youtube.com/embed/q8SHaDQdul0" },
		help: ["Sorry, I don't have any additional information to share for this question."],
	},
];

var array_answers = [

];

console.log(array_questions);
console.log(array_answers);
console.log(array_questions[1].statement);
