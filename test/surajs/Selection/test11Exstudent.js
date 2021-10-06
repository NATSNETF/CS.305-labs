const prompt=require('prompt-sync')();
const numberOfStudent=prompt('please enter number of student');
const team =prompt('please create a team');

const minimumTeamSize=Math.floor(numberOfStudent/team);
const numberOfTeamExtraStu=numberOfStudent%team;
const numberOfTeamMinimumTeam=team-numberOfStudent;

console.log(minimumTeamSize)
console.log(numberOfTeamExtraStu + ' teams with ' + minimumTeamSize);
console.log(numberOfTeamMinimumTeam + 'team with ' + minimumTeamSize);

