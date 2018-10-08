var names = ['Константин Бальмонт','Валерий Брюсов', 'Марина Цветаева', 'Саша Черный', 'Зинаида Гиппиус', 'Игорь Северянин'];
var lastNames = ['Бальмонт','Брюсов', 'Цветаева', 'Черный', 'Гиппиус', 'Северянин'];

var labels = ['Лёгкая, чуть прихрамывающая походка, пенсне, сухие губы, обрамлённые красной бородкой, глубоко сидящие в орбитах, почти безбровые карие глаза.',
'Худой, хорошего роста, с черной бородкой, одетый без франтовства; по внешности он скорее походил на трудовика, чем на поэта. Только в блеске больших черных глаз, недружелюбно смотревших из-под густых бровей, было чуточку безумия.',
'Невелика ростом – 163 см, с фигурой египетского мальчика – широкоплеча, узкобедра, тонка в талии. Золотисто-каштановые волосы, зеленые глаза, окаймленные коричневатыми веками.',
 'Брови домиком, большие чёрные выразительные глаза, крошечные усики. Вылитый Чарли Чаплин!',
 'Была удивительно хороша собой. Червонные, чуть вьющиеся волосы, зеленые глаза, нежная светлая кожа, какая бывает только у рыжих. Стремительная мальчишеская фигура.',
 '"Высокий человек с лошадино-продолговатым лицом". Двойник Оскара Уайлда!'];

var labelName = document.getElementById('answerLabel'),
	inputVal = document.getElementById('answer'),
	checkButton = document.getElementById('checkAnswer'),
	nextButton = document.getElementById('next')
	questionDiv = document.getElementById('question'),
	sumPoints = document.getElementById('summary'),
	n = 0,
	points = 0;

var startButton = document.getElementById('startButton'),
	startText = document.getElementById('start');


startButton.onclick = function() {
	start.style.display = "none";
	questionDiv.style.display = "block";
	inputVal.focus();
}




nextButton.disabled = true;



function summary (points){
	if(points <= 2)
		return('Школа была давно, учебник по литературами с картинками давно пылится на полке.');
	else if (points > 2 &&  points <= 4){
		return('Подписан на паблик "Лучшие стихи. Великая литература." в вконтакте');
	}else if (points >= 5){
		return('Храню альбом с любимыми лицами под подушкой...');
	}
}

function fill(){
	labelName.innerHTML = (labels[n]);
	inputVal.value = '';
	labelName.style.color = 'black';
};
fill();

checkButton.onclick = function() {
	var rightValue = (names[n]);
  var rightValue2 = (lastNames[n]);
	if ((inputVal.value == rightValue) || (inputVal.value == rightValue2)){
		console.log('yeeep!')
		questionDiv.style.borderColor = "green";
		points++;
	}
	else{
		console.log('nooo!')
		questionDiv.style.borderColor = "red";
	}
	labelName.innerHTML = names[n];
	nextButton.disabled = false;
	checkButton.disabled = true;

};

nextButton.onclick = function() {
	if(n < names.length-1){
		n++;
		fill()
		nextButton.disabled = true;
		checkButton.disabled = false;
		questionDiv.style.borderColor = "black";
		inputVal.focus();
	}
  else{
		inputVal.style.display = "none";
		nextButton.style.display = "none";
		checkButton.style.display = "none";
		questionDiv.style.borderColor = "black";
		labelName.innerHTML = summary(points);
		sumPoints.style.display = "block";
		sumPoints.innerHTML = points + '/' + names.length;
	}
};
