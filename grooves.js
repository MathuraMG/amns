function activateGrooves(beats) {

  console.log("porco activate");
  var boxPhraseA = new p5.Phrase(beats[0], playBox, boxPatA);
  var drumPhraseA = new p5.Phrase(beats[1], playDrum, drumPatA);
  var hatPhraseA = new p5.Phrase(beats[2], playHat, hatPatA);
  var ohatPhraseA = new p5.Phrase(beats[3], playOhat, ohatPatA);

  var boxPhraseB = new p5.Phrase(beats[0], playBox, boxPatB);
  var drumPhraseB = new p5.Phrase(beats[1], playDrum, drumPatB);
  var hatPhraseB = new p5.Phrase(beats[2], playHat, hatPatB);
  var ohatPhraseB = new p5.Phrase(beats[3], playOhat, ohatPatB);

  var boxPhraseC = new p5.Phrase(beats[0], playBox, boxPatC);
  var drumPhraseC = new p5.Phrase(beats[1], playDrum, drumPatC);
  var hatPhraseC = new p5.Phrase(beats[2], playHat, hatPatC);
  var ohatPhraseC = new p5.Phrase(beats[3], playOhat, ohatPatC);

  myPartA = new p5.Part();
  myPartA.addPhrase(boxPhraseA);
  myPartA.addPhrase(drumPhraseA);
  myPartA.addPhrase(hatPhraseA);
  myPartA.addPhrase(ohatPhraseA);

  myPartB = new p5.Part();
  myPartB.addPhrase(boxPhraseB);
  myPartB.addPhrase(drumPhraseB);
  myPartB.addPhrase(hatPhraseB);
  myPartB.addPhrase(ohatPhraseB);

  myPartC = new p5.Part();
  myPartC.addPhrase(boxPhraseC);
  myPartC.addPhrase(drumPhraseC);
  myPartC.addPhrase(hatPhraseC);
  myPartC.addPhrase(ohatPhraseC);

  myPartA.setBPM(110);
  myPartB.setBPM(110);
  myPartC.setBPM(110);

  masterVolume(0.5);
}

function playBox(time, playbackRate) {
  beats[0].rate(playbackRate);
  beats[0].play(time);
}

function playDrum(time, playbackRate) {
  beats[1].rate(playbackRate);
  beats[1].play(time);
}

function playHat(time, playbackRate) {
  beats[2].rate(playbackRate);
  beats[2].play(time);
}

function playOhat(time, playbackRate) {
  beats[3].rate(playbackRate);
  beats[3].play(time);
}
