import './App.css';
import {useState} from "react";

export default function Levenshtein_part1() {

  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [statistics, setStatistics] = useState(0);

  function handleSubmit() {
    console.log("submitted");
    setStatistics(levenshteinDistance(word1, word2))
  }

  const levenshteinDistance = (str1 = '', str2 = '') => {
    const track = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
      track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
      track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
            track[j][i - 1] + 1, // deletion
            track[j - 1][i] + 1, // insertion
            track[j - 1][i - 1] + indicator, // substitution
        );
      }
    }
    return track[str2.length][str1.length];
  }

  return (
      <div className="App">
        <h1>M411: Levenshtein</h1>

        <br/>
        <h4>Word 1</h4>
        <input type="text" value={word1}
               onChange={(event) => setWord1(event.target.value)}/>

        <br/>
        <h4>Word 2</h4>
        <input type="text" value={word2}
               onChange={(event) => setWord2(event.target.value)}/>

          <br/>
        <button onClick={handleSubmit}>
          calculate
        </button>

        <div>
          <br/>
          <h4>statistics</h4>
          {statistics}
        </div>
      </div>
  );
}