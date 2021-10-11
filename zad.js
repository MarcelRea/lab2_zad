const _ = require('lodash');

const user = {
	name:'Imie',
	surname: 'Nazwisko',
	allGrades: [
	{
		subjectName: 'Name1',
		grades: [5,4,3,5,2],
		weight: 3
	},
	{
		subjectName: 'Name2',
		grades: [3,3.5,2],
		weight: 1
	},
	{
		subjectName: 'Name3',
		grades: [4,3,3.5],
		weight: 5
	}
	]
};
const collections = [
{},
15,
"hello@test.pl",
null,
['aaa', 'bbb', 5],
'admin@gmail.com',
undefined,
'a34@yahoo.com',
'321@a',
'321.pl'
];

let info;
info = function(user){
	let v=user.allGrades[0].grades;
	let v2=user.allGrades[1].grades;
	let v3=user.allGrades[2].grades;
	let sum = 0;
	let sum2 = 0;
	let sum3 = 0;
	let d,d2,d3,wo,wo2,wo3;
	for(let i = 0; i < v.length; i++){
		sum += v[i];
		d = user.allGrades[0].weight * sum;
		wo = v.length * user.allGrades[0].weight;
	}
	for(let i = 0; i < v2.length; i++){
		sum2 += v2[i];
		d2 = user.allGrades[1].weight * sum2;
		wo2 = v2.length * user.allGrades[1].weight;
	}
	for(let i = 0; i < v3.length; i++){
		sum3 += v3[i];
		d3 = user.allGrades[2].weight * sum3;
		wo3 = v3.length * user.allGrades[2].weight;
	}
	let wynik = (d+d2+d3)/(wo+wo2+wo3);
	return user.name + ' ' + user.surname + ' ' + wynik;
}
function getMails(collection){
  arraystring = collection.toString();
  mails = arraystring.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
  return mails
}
console.log(info(user));
let users = user.allGrades;
console.log("Przedmiot z najmniejsza waga:");
console.log(_.find(users, function(o){return o.weight == 1}));
console.log(getMails(collections));