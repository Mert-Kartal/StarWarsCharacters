

    const characters = [
      {
        "id": 1,
        "name": "Luke Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "homeworld": "tatooine"
      },
      {
        "id": 2,
        "name": "C-3PO",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "homeworld": "tatooine"
      },
      {
        "id": 3,
        "name": "R2-D2",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "homeworld": "naboo"
      },
      {
        "id": 4,
        "name": "Darth Vader",
        "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "homeworld": "tatooine"
      },
      {
        "id": 5,
        "name": "Leia Organa",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "homeworld": "alderaan"
      },
      {
        "id": 6,
        "name": "Owen Lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
      },
      {
        "id": 7,
        "name": "Beru Whitesun lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "homeworld": "tatooine"
      },
      {
        "id": 8,
        "name": "R5-D4",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "homeworld": "tatooine"
      },
      {
        "id": 9,
        "name": "Biggs Darklighter",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "homeworld": "tatooine"
      },
      {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "homeworld": "stewjon"
      },
      {
        "id": 11,
        "name": "Anakin Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "homeworld": "tatooine"
      },
      {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "homeworld": "eriadu"
      },
      {
        "id": 13,
        "name": "Chewbacca",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "homeworld": "kashyyyk"
      },
      {
        "id": 14,
        "name": "Han Solo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "homeworld": "corellia"
      },
      {
        "id": 15,
        "name": "Greedo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "homeworld": "Rodia"
      },
      {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "homeworld": "tatooine"
      },
      {
        "id": 18,
        "name": "Wedge Antilles",
        "pic": "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
        "homeworld": "corellia"
      },
      {
        "id": 19,
        "name": "Jek Tono Porkins",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
      },
      {
        "id": 20,
        "name": "Yoda",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
      },
      {
        "id": 21,
        "name": "Palpatine",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "homeworld": "naboo"
      }
    ]

    //if a character's homeworld is undefined return "other"
    function characterHomeworld(character){ 
      let home=character.homeworld ?? "other";
      return character.homeworld,home;
    }

    //filter character's homeworld
    const characterHomeworldRaw=characters.map(characterHomeworld);
    console.log(characterHomeworldRaw);

    //erase duplicate 
    let homeworldsUnique = [...new Set(characterHomeworldRaw)];
    console.log(homeworldsUnique);

    //convert character's homeworld lowercase letters.
    function characterLowercase(lower){
      return lower.toLowerCase();
    }

    // lower=>lower.toLowerCase()
    let homeworldsLowercase = homeworldsUnique.map(characterLowercase);
    console.log(homeworldsLowercase);

    const homeworlds = homeworldsLowercase;

    let filteredHomeworld=" ";
    
    function selectedRadio(selectedId){  
    filteredHomeworld = document.getElementById(selectedId).value;
    console.log(filteredHomeworld);
    document.getElementById("renderCharacters").innerHTML = "";
    let filteredCharacters = characters.filter(character =>(character.homeworld ? character.homeworld.toLowerCase(): "other") === filteredHomeworld);  
    console.log(filteredCharacters);
    // Render the filtered characters
    for(i=0;i<filteredCharacters.length;i++){
      render(filteredCharacters[i]);
      }    
  } 

    function radioInput(homeworld){
    document.getElementById("renderRadio").innerHTML+=`
    <div class="form-check text text-white mx-1">
    <input class="form-check-input" type="radio" name="homeworld" onchange="selectedRadio('${homeworld}')" value="${homeworld}" id="${homeworld}">
    <label class="form-check-label" for="${homeworld}">
    ${homeworld}
    </label>
    </div>
    `
    }


    function render(character){
    //console da gözüküypr ekrana yazdıramıyoruz
    document.getElementById("renderCharacters").innerHTML +=`
    <div class="card bg-secondary text-white col-12 col-md-6 col-lg-4 my-3 mx-2" style="width: 18rem">
    <img src="${character.pic}" class="card-img-top" alt="${character.name}" />
    <div class="card-body">
      <h5 class="card-title">${character.name}</h5>
      <p class="card-text">
      ${character.name} is a star wars character from ${character.homeworld}.
      </p>
    </div>
   </div>`
  }
  
  
    function showHide(){
      if(document.getElementById("btn").innerHTML==="Show Characters")
      {
      document.getElementById("btn").innerHTML="Hide Characters";
      document.getElementById("showImage").style.display="none";
      for(i=0;i<characters.length;i++){
      render(characters[i]);
      }
      for(i=0;i<homeworlds.length;i++){
        radioInput(homeworlds[i]);
      }
    }
    else
    {
      document.getElementById("btn").innerHTML="Show Characters";
      document.getElementById("showImage").style.display="block";
      document.getElementById("renderCharacters").innerHTML =" ";
      document.getElementById("renderRadio").innerHTML =" ";
    }
  }
  