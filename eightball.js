var answers = [
  'Yes!', 'No!', 'Dude...', 'Bruh','Maybe', 'Seriously?', 'Definitely Not!', 'Maybe in your dreams...',
  'The future is unclear.', 'WTF?', 'Ask Again.',
'No doubt', 'Most likely', 'You need Jesus', 'You need Buddha',
  'It\'s better off you don\'t know', 'It\'s pretty obvious',
  '...', 'I would say Yes, but I would be lying to you', 'Can you stop asking me now?',
  'ABSOLUTELY!', 'SMH', 'LOL','LMFAO', 'The opposite of what you hope for...'];

function askQuestion () {
var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('message').innerHTML = answer;
};

function clearAll() {
  var message = document.getElementById('message');
  var question = document.getElementById('question');

  message.innerHTML = '';
  question.value = '';


}
