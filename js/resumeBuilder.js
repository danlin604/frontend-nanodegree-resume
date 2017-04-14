//let awesomeThoughts = 'I am Danny and I am AWESOME!';

//let funThroughts = awesomeThoughts.replace('AWESOME', 'FUN');

//$("#main").append(funThroughts);

//console.log(funThroughts);

let formattedName = HTMLheaderName.replace('%data%', 'Danny');
let formattedRole = HTMLheaderRole.replace('%data%', 'Developer');

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

let bio = {
    name: 'danny',
    role: 'developer',
    contact: 'danny@gmail.com',
    pictureURL: './emu.png',
    welcomeMessage: 'howdy',
    skills: 'mad'
};

let work = {
    position: 'web developer'
};

let education = {
    school: 'bcit'
};

$('#main').append(bio.name);
$('#main').append(work.position);
$('#main').append(education['school']);
