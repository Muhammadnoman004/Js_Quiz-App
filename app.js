var quesAns = [
    {
        question: '1) What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: '2) Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: '3) Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: '4) What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: '5) What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: '6) Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: '7) Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: '8) How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        option1: 'if i =! 5 then',
        option2: 'if (i <> 5)',
        option3: 'if (i != 5)',
        correctOption: 'if (i != 5)'
    },
    {
        question: '9) Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: '10) What is the correct HTML for making a drop-down list?',
        option1: '<input type="list">',
        option2: '<list>',
        option3: '<input type="dropdown">',
        option4: '<select>',
        correctOption: '<select>'
    },
    {
        question: '11) What is the correct HTML for making a text area?',
        option1: '<input type="textbox">',
        option2: '<input type="textarea">',
        option3: '<textarea>',
        correctOption: '<textarea>'
    },
    {
        question: '12)  How do you round the number 7.25, to the nearest integer?',
        option1: 'round(7.25)>',
        option2: 'Math.round(7.25)',
        option3: 'Math.rnd(7.25',
        correctOption: 'Math.round(7.25)'
    },
    {
        question: '13) What does CSS stand for?',
        option1: 'Colorful Style Sheet',
        option2: 'Computer Style Sheet',
        option3: 'Cascading Style Sheet',
        option4: 'Creative Style Sheet',
        correctOption: 'Cascading Style Sheet'
    },
    {
        question: '14) Which event occurs when the user clicks on an HTML element?',
        option1: 'onmouseclick',
        option2: 'onchange',
        option3: 'onclick',
        correctOption: 'onclick'
    },
    {
        question: '15) Where in an HTML document is the correct place to refer to an external style sheet?',
        option1: 'In the <body> section',
        option2: 'In the <head> section',
        option3: 'At the end of the document',
        correctOption: 'In the <head> section'
    },
    {
        question: '16) Which HTML tag is used to define an internal style sheet?',
        option1: '<css>',
        option2: '<style>',
        option3: '<script>',
        correctOption: '<style>'
    },
    {
        question: '17) Which HTML attribute is used to define inline styles?',
        option1: 'styles',
        option2: 'font',
        option3: 'style',
        option3: 'class',
        correctOption: 'style'
    },
    {
        question: '18) Which is the correct CSS syntax?',
        option1: 'body{color: black;}',
        option2: '{body:color=black;}',
        option3: 'body:color=black;',
        option4: '{body;color:black;}',
        correctOption: 'body{color: black;}'
    },
    {
        question: '19) How do you insert a comment in a CSS file?',
        option1: '/*this is a comment*/',
        option2: '//this is a comment',
        option3: '//this is a comment//',
        option3: "'this is a comment",
        correctOption: '/*this is a comment*/'
    },
    {
        question: '20) Which property is used to change the background color?',
        option1: 'bgcolor',
        option2: 'color',
        option3: 'background-color',
        correctOption: 'background-color'
    },  
    {
        question: '21) How do you add a background color for all <h1> elements?',
        option1: 'h1 {background-color:#FFFFFF;}',
        option2: 'h1.all {background-color:#FFFFFF;}',
        option3: 'all.h1 {background-color:#FFFFFF;}',
        correctOption: 'h1 {background-color:#FFFFFF;}'
    },
    {
        question: '22) Which CSS property is used to change the text color of an element?',
        option1: 'color',
        option2: 'text-color',
        option3: 'fgcolor',
        correctOption: 'color'
    },
    {
        question: '23) Which CSS property controls the text size?',
        option1: 'font-size',
        option2: 'text-style',
        option3: 'text-size',
        option4: 'font-style',
        correctOption: 'font-size'
    },

    {
        question: '24) What is the correct CSS syntax for making all the <p> elements bold?',
        option1: 'p {font-weight:bold;}',
        option2: '<p style="font-size:bold;">',
        option3: '<p style="text-size:bold;">',
        option4: 'p {text-size:bold;}',
        correctOption: 'p {font-weight:bold;}'
    },
    {
        question: '25) How do you display hyperlinks without an underline?',
        option1: 'a {underline:none;}',
        option2: 'a {decoration:no-underline;}',
        option3: 'a {text-decoration:no-underline;}',
        option4: 'a {text-decoration:none;}',
        correctOption: 'a {text-decoration:none;}'
    },
    {
        question: '26) How do you make each word in a text start with a capital letter?',
        option1: 'text-style:capitalize',
        option2: 'text-transform:capitalize',
        option3: 'You can not do that with CSS',
        option4: 'transform:capitalize',
        correctOption: 'text-style:capitalize'
    },
    {
        question: '27) Which property is used to change the font of an element?',
        option1: 'font-style',
        option2: 'font-weight',
        option3: 'font-family',
        correctOption: 'font-family'
    },
    {
        question: '28) How do you make the text bold?',
        option1: 'style:bold;',
        option2: 'font:bold;',
        option3: 'font-weight:bold;',
        correctOption: 'font-weight:bold;'
    },
    {
        question: '29) Which property is used to change the left margin of an element?',
        option1: 'margin-left',
        option2: 'padding-left',
        option3: 'indent',
        correctOption: 'margin-left'
    },
    {
        question: '30) How do you make a list that lists its items with squares?',
        option1: 'list: square;',
        option2: 'list-type: square;',
        option3: 'list-style-type: square;',
        correctOption: 'list-style-type: square;'
    }
]

var getQues = document.getElementById('Ques')
var getAns1 = document.getElementById('ans_1')
var getAns2 = document.getElementById('ans_2')
var getAns3 = document.getElementById('ans_3')

var index = 0;
var btn = document.getElementById('btn')
var score = 0;
var getTime = document.getElementById('timer')
var min = quesAns.length -1;
var sec = 59;

var interval = setInterval(function(){
    getTime.innerText = `${min} : ${sec} ` 
    sec--
    if(sec < 0){
        min--
        sec = 59;
        if(min < 0){
            min = 0;
            result();
        }
    }
    
} , 1000)


function next(){
    
    var getOptions = document.getElementsByName('inp')
    for(var i = 0; i < getOptions.length; i++){

        if(getOptions[i].checked){
            
            var selectedValue = getOptions[i].value
            var selectedQues = quesAns[index -1]['question']
            var selectedAns = quesAns[index -1][`option${selectedValue}`]
            var correctOpt = quesAns[index -1]['correctOption']
            if(selectedAns == correctOpt){
                score++
            }
            
           
        }
        
        getOptions[i].checked = false
    }
    btn.disabled = true


    if(index > quesAns.length -1){
       
        result()
        
    }
    else{
        getQues.innerText = quesAns[index].question
        getAns1.innerText = quesAns[index].option1
        getAns2.innerText = quesAns[index].option2
        getAns3.innerText = quesAns[index].option3
        index++
        
    }
   
}

next()

function clicked(){
    btn.disabled = false 
    
}


function result(){
    var MainContainerDev = document.getElementById('main');
    MainContainerDev.style.display = 'none';
    var ResultDiv = document.querySelector('.resultDiv');
    var TotalQues = document.getElementById('totalQues');
    var CorrectAns = document.getElementById('correctAns');
    var Percentage = document.getElementById('percent');
    var Title = document.getElementById('title')
    ResultDiv.style.display = 'block';
    TotalQues.innerHTML = `${quesAns.length}`;
    CorrectAns.innerHTML = `${score}`;

    var percent = ((score / quesAns.length) * 100).toFixed(1)
    if(percent  >= 70 ){
        Title.innerHTML = `Congratulations ! <br> You Passed.`
        Percentage.innerHTML = `${percent}  %`     
    }   
    else{
        Title.innerHTML = `FAIL.`
        Title.className = "fail"
        Percentage.innerHTML = `${percent} %`
    }
}
