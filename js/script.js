console.log("Welcome To Dictionary!");

//API : https://api.dictionaryapi.dev/api/v2/entries/en_US/



let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchFunction);
let html = "";
function searchFunction() {
  document.getElementById('defn_populate').innerHTML = "";
  document.getElementById('hide_defn').style.display = 'none';
  let word = document.getElementById('word').value;
  let lang = document.getElementById('language').value;
  let url = 'https://api.dictionaryapi.dev/api/v2/entries/' + lang + '/' + word;

  const xhr = new XMLHttpRequest;
  xhr.open('GET', `${url}`);
  xhr.onload = function() {
    if (xhr.status == 200) {
      document.getElementById('hide_defn').style.display = 'block';
      document.getElementById("info").innerHTML = word;
      let json = JSON.parse(this.responseText);
      definition = json[0]["meanings"][0].definitions[0].definition;
      example_text = json[0]["meanings"][0].definitions[0].example;
      partofspeech = json[0]["meanings"][0].partOfSpeech;
      phonetics_text = json[0]["phonetics"][0].text;

      let meaning = `<div class="col-sm-6 card_margin">
      <div class="card ma">
      <div class="card-body">
      <h5 class="text-center card-title mb-3">Meaning</h5>
      <p class="card-text">${definition}</p>
      </div>
      </div>
      </div>`
      let example = `<div class="col-sm-6 card_margin">
      <div class="card ma">
      <div class="card-body">
      <h5 class="text-center card-title mb-3">Example</h5>
      <p class="card-text">${example_text}</p>
      </div>
      </div>
      </div>`
      let partofSpeech = `<div class="col-sm-6 card_margin">
      <div class="card ma">
      <div class="card-body">
      <h5 class="text-center card-title mb-3">Part Of Speech</h5>
      <p class="card-text">${partofspeech}</p>
      </div>
      </div>
      </div>`
      let phonetics = `<div class="col-sm-6 card_margin">
      <div class="card ma">
      <div class="card-body">
      <h5 class="text-center card-title mb-3">Phonetic</h5>
      <p class="card-text">${phonetics_text}</p>
      </div>
      </div>
      </div>`


      document.getElementById('defn_populate').innerHTML += meaning;
      document.getElementById('defn_populate').innerHTML += example;
      document.getElementById('defn_populate').innerHTML += partofSpeech;
      document.getElementById('defn_populate').innerHTML += phonetics;

    } else {
      document.getElementById('defn_populate').innerHTML = ('Error' + xhr.status);
    }
  };
  xhr.send();
}
