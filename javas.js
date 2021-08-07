function ageInDays(){
    var birthYear=prompt('What year were you born... ');
    var ageInDayss=(2021-birthYear)*365;
    var h1=document.createElement('h1');
    var textSAnswer=document.createTextNode('You are '+ ageInDayss +' days old.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textSAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}
