const processTest = (cards, testResults, selectedAnswers) => {
  //id, title, date, questionSet
  let questionSet = [];
  console.log(testResults);

  for (let i = 0; i < testResults.length; i++) {
    let questionRes = {};
    let term = cards[testResults[i][0]].term;
    let correctAnswer = testResults[i][1].indexOf(testResults[i][0]);
    let chosen = selectedAnswers[i];
    let options = [];
    for (let j = 0; j < testResults[i][1].length; j++) {
      options.push(cards[testResults[i][1][j]].description);
      }
      
    questionRes["term"] = term;
    questionRes["correctAnswer"] = correctAnswer;
    questionRes["chosen"] = chosen;
    questionRes["options"] = options;

    questionSet.push(questionRes);
  }

  return questionSet;
};

export { processTest };
