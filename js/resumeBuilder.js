//let awesomeThoughts = 'I am Danny and I am AWESOME!';

//let funThroughts = awesomeThoughts.replace('AWESOME', 'FUN');

//$("#main").append(funThroughts);

//console.log(funThroughts);

let formattedName = HTMLheaderName.replace('%data%', 'Danny');
let formattedRole = HTMLheaderRole.replace('%data%', 'Developer');

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
