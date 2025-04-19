class AllInOne extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const imports = document.createElement("link");
    imports.rel = "stylesheet";
    imports.href = "/css/imports.css";
    this.shadowRoot.appendChild(imports);

    const style = document.createElement("style"); /*css*/
    style.textContent = `
      .wrapper {
        width: 800px;
        height: 90dvh;
        overflow: auto;
      }

      table, th, td {
        border: var(--border);
      }
      
      table {
        border-collapse: collapse
      }

      th {
        background-color: gray;
        position: sticky;
        top: 0;
        z-index: 1;
      }

      th, td {
        width: 150px;
        padding: 4px 5px;
        white-space: nowrap
      }
    `;
    this.shadowRoot.appendChild(style);

    const board = document.createElement("wc-whiteboard");
    board.items = {
      title: "Extras",
      subtitle: "All-in-one reference",
      description: "All-in-one reference for verbs, nouns, adjectives, adverbs, and phrasal verbs, and more.",
    }
    this.shadowRoot.appendChild(board)

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    const verb = document.createElement("th");
    verb.textContent = "Verb";
    headerRow.appendChild(verb);

    const thirdPerson = document.createElement("th");
    thirdPerson.textContent = "He/She/It";
    headerRow.appendChild(thirdPerson);

    const past = document.createElement("th");
    past.textContent = "Past";
    headerRow.appendChild(past);

    const participle = document.createElement("th");
    participle.textContent = "participle";
    headerRow.appendChild(participle);

    const progressive = document.createElement("th");
    progressive.textContent = "progressive";
    headerRow.appendChild(progressive);

    const phrasalVerb = document.createElement("th");
    phrasalVerb.textContent = "Phrasal Verb";
    headerRow.appendChild(phrasalVerb);

    const noun = document.createElement("th");
    noun.textContent = "Noun";
    headerRow.appendChild(noun);

    const adjective = document.createElement("th");
    adjective.textContent = "Adjective";
    headerRow.appendChild(adjective);

    const adverb = document.createElement("th");
    adverb.textContent = "Adverb";
    headerRow.appendChild(adverb);

    // ROW

    const words = [
      {
        verb: "ask",
        thirdPerson: "asks /s/",
        past: "asked",
        participle: "asked",
        progressive: "asking",
        phrasalVerb: "ask out",
        noun: "ask",
        adjective: "asking",
        adverb: "-",
      },
      {
        verb: "attack",
        thirdPerson: "attacks /s/",
        past: "attacked",
        participle: "attacked",
        progressive: "attacking",
        phrasalVerb: "attack back",
        noun: "attack",
        adjective: "attacking",
        adverb: "-",
      },
      {
        verb: "be",
        thirdPerson: "is",
        past: "was / were",
        participle: "been",
        progressive: "being",
        phrasalVerb: "-",
        noun: "being",
        adjective: "-",
        adverb: "-",
      },
      {
        verb: "become",
        thirdPerson: "becomes /z/",
        past: "became",
        participle: "become",
        progressive: "becoming",
        phrasalVerb: "-",
        noun: "-",
        adjective: "-",
        adverb: "-",
      },
      {
        verb: "begin",
        thirdPerson: "begins /z/",
        past: "began",
        participle: "begun",
        progressive: "beginning",
        phrasalVerb: "-",
        noun: "beginning",
        adjective: "-",
        adverb: "-",
      },
      {
        verb: "bend",
        thirdPerson: "bends /z/",
        past: "bent",
        participle: "bent",
        progressive: "bending",
        phrasalVerb: "bend over",
        noun: "bend",
        adjective: "bending",
        adverb: "-",
      },
      {
        verb: "bet",
        thirdPerson: "bets /s/",
        past: "bet",
        participle: "bet",
        progressive: "betting",
        phrasalVerb: "bet on",
        noun: "bet",
        adjective: "-",
        adverb: "-",
      },
      {
        verb: "bite",
        thirdPerson: "bites /s/",
        past: "bit",
        participle: "bitten",
        progressive: "biting",
        phrasalVerb: "bite off",
        noun: "bite",
        adjective: "bitten",
        adverb: "-",
      },
      {
        verb: "blow",
        thirdPerson: "blows /z/",
        past: "blew",
        participle: "blown",
        progressive: "blowing",
        phrasalVerb: "blow up",
        noun: "blow",
        adjective: "blown",
        adverb: "-",
      },
      {
        verb: "break",
        thirdPerson: "breaks /s/",
        past: "broke",
        participle: "broken",
        progressive: "breaking",
        phrasalVerb: "break down",
        noun: "break",
        adjective: "broke (no money)",
        adverb: "-",
      },
      {
        verb: "bring",
        thirdPerson: "brings /z/",
        past: "brought",
        participle: "brought",
        progressive: "bringing",
        phrasalVerb: 'bring up [mencionar "assunto"; criar]',
        noun: "-",
        adjective: "-",
        adverb: "-",
      },
      {
        verb: "brush",
        thirdPerson: "brushes /ɪz/",
        past: "brushed /t/",
        participle: "brushed /t/",
        progressive: "",
        phrasalVerb: "",
        noun: "",
        adjective: "",
        adverb: ""
      },
      {
        verb: "build",
        thirdPerson: "builds /z/",
        past: "built",
        participle: "built",
        progressive: "building",
        phrasalVerb: "build up",
        noun: "building",
        adjective: "built",
        adverb: "-",
      },
      {
        verb: "burn",
        thirdPerson: "burns /z/",
        past: "burned / burnt",
        participle: "burned / burnt",
        progressive: "burning",
        phrasalVerb: "burn out",
        noun: "burnout, burn-out",
        adjective: "burnt (out)",
        adverb: "-",
      },
      {
        verb: "burst",
        thirdPerson: "bursts /s/",
        past: "burst",
        participle: "burst",
        progressive: "bursting",
        phrasalVerb: "-",
        noun: "burst",
        adjective: "burst (pipe)",
        adverb: "",
      },
      {
        verb: "buy",
        thirdPerson: "buys /z/",
        past: "bought",
        participle: "bought",
        progressive: "buying",
        phrasalVerb: "buy out",
        noun: "buy",
        adjective: "-",
        adverb: "-",
      },
      {
        verb: "can",
        thirdPerson: "can",
        past: "could",
        participle: "been able",
        progressive: "-",
        phrasalVerb: "-",
        noun: "-",
        adjective: "-",
        adverb: "-",
      },
      {
        verb: "catch",
        thirdPerson: "catches /ɪz/",
        past: "caught",
        participle: "caught",
        progressive: "catching",
        phrasalVerb: "catch up",
        noun: "a great catch",
        adjective: "a catching smile, the flu is very catching",
        adverb: "?",
      },
      {
        verb: "choose",
        thirdPerson: "choose /z/",
        past: "chose",
        participle: "I've chosen this one.",
        progressive: "choosing",
        phrasalVerb: "-",
        noun: "-",
        adjective: "Neo was the chosen one",
        adverb: "",
      },

      {
        verb: "come",
        thirdPerson: "comes /z/",
        past: "came",
        participle: "come",
        progressive: "coming",
        phrasalVerb: "come in, come back, come over, come out, come up",
        noun: "There are several up-coming holidays in April.",
        adjective: "-",
        adverb: "-",
      },
      {
        verb: "cost",
        thirdPerson: "costs /s/",
        past: "cost",
        participle: "cost",
        progressive: "",
        phrasalVerb: "",
        noun: "cost [custo]",
        adjective: "-",
        adverb: "-"
      },
      {
        verb: "create",
        thirdPerson: "creates /s/",
        past: "created",
        participle: "created",
        progressive: "creating",
        phrasalVerb: "-",
        noun: "creation",
        adjective: "creative",
        adverb: "creatively"
      },
      {
        verb: "cut",
        thirdPerson: "cuts /s/",
        past: "cut",
        participle: "cut",
        progressive: "cutting",
        phrasalVerb: "cut off, cut out, cut down, cut back, cut in ",
        noun: "cutting-edge",
        adjective: "?",
        adverb: "-"
      },
      {
        verb: "deal",
        thirdPerson: "deals /z/",
        past: "dealt",
        participle: "dealt",
        progressive: "dealing",
        phrasalVerb: "",
        noun: "car dealer, drg dealer, Dealing with certain people...",
        adjective: "deal [negócio, combinado]",
        adverb: "-"
      },
      {
        verb: "dig [cavar, escavar; entender; curtir algo] - Can you dig it?",
        thirdPerson: "digs /z/",
        past: "dug",
        participle: "dug",
        progressive: "digging",
        phrasalVerb: "dig in - The food's getting cold - dig in!, dig out - I dug out those old pictures. [Desenterrei aquelas fotos antigas]",
        noun: "dig",
        adjective: "-",
        adverb: "-"
      },
      {
        verb: "do",
        thirdPerson: "does /z/",
        past: "did",
        participle: "done",
        progressive: "doing",
        phrasalVerb: "do up - Do up you jacket, it's cold! , do over [refazer], do without - I can`t do without my phone.",
        noun: "-",
        adjective: "-",
        adverb: "-"
      },
      {
        verb: "draw",
        thirdPerson: "draws /s/",
        past: "drew",
        participle: "drawn - The concert has drawn a large crowd.",
        progressive: "drawing",
        phrasalVerb: "draw up - draw up a plan [elaborar um plano], draw out - the meeting was drawn out [prolongado], draw in - The story drew me in. [A história me prendeu / envolveu.]",
        noun: "drawing",
        adjective: "",
        adverb: ""
      },
      {
        verb: "dream",
        thirdPerson: "dreams /z/",
        past: "dreamed / dreamt",
        participle: "dreamed / dreamt",
        progressive: "dreaming",
        phrasalVerb: "dream on - Dream on! [Continue sonhando!]",
        noun: "dream",
        adjective: "-",
        adverb: "-"
      },
      {
        verb: "drink",
        thirdPerson: "drinks /s/",
        past: "drank",
        participle: "drunk",
        progressive: "drinking",
        phrasalVerb: "drink up - Drink up! [Beba tudo!]",
        noun: "drinking",
        adjective: "-",
        adverb: "-"
      },
      {
        verb: "drive",
        thirdPerson: "drives /z",
        past: "drove",
        participle: "driven",
        progressive: "driving",
        phrasalVerb: "drive off - The car drove off. [O carro partiu.]",
        noun: "-",
        adjective: "-",
        adverb: "-"
      },
      {
        verb: "eat",
        thirdPerson: "eats /s/",
        past: "ate",
        participle: "eaten",
        progressive: "eating",
        phrasalVerb: "eat out - We eat out every Friday.",
        noun: "-",
        adjective: "-",
        adverb: "-"
      },
      {
        verb: "fall",
        thirdPerson: "falls /s/",
        past: "fell",
        participle: "fallen",
        progressive: "falling",
        phrasalVerb: "fall apart - The car is falling apart. [O carro está caindo aos pedaços.]",
        noun: "fall",
        adjective: "-",
        adverb: "-"
      },
      {
        verb: "feed",
        thirdPerson: "feeds /z/",
        past: "fed",
        participle: "fed",
        progressive: "feeding",
        phrasalVerb: "feed off",
        noun: "-",
        adjective: "-",
        adverb: "-"
      },
      {
        verb: "set",
        thirdPerson: "sets /s/",
        past: "set",
        participle: "set",
        progressive: "setting",
        phrasalVerb: "set up ",
        noun: "setup, set-up, a set of keys [um conjunto de chaves], a TV set [um aparelho de TV], a movie set [um cenário de filme]",
        adjective: "",
        adverb: ""
      },
      {
        verb: "sell",
        thirdPerson: "sells /z/",
        past: "sold",
        participle: "sold",
        progressive: "selling",
        phrasalVerb: "Bob Sponge restaurant always sells out of burger by 8pm. They sold out of ickets in just 10 minutes.",
        noun: "The event was a total sellout [O evento foi um sucesso de vendas].",
        adjective: "The concert is sold out.",
        adverb: "-"
      }
    ];

    table.appendChild(headerRow);

    words.forEach((word) => {
      const row = document.createElement("tr");

      const verbWord = document.createElement("td");
      verbWord.textContent = word.verb;
      row.appendChild(verbWord);

      const thirdPersonWord = document.createElement("td");
      thirdPersonWord.textContent = word.thirdPerson;
      row.appendChild(thirdPersonWord);

      const pastWord = document.createElement("td");
      pastWord.textContent = word.past;
      row.appendChild(pastWord);

      const participleWord = document.createElement("td");
      participleWord.textContent = word.participle;
      row.appendChild(participleWord);

      const progressiveWord = document.createElement("td");
      progressiveWord.textContent = word.progressive;
      row.appendChild(progressiveWord);

      const phrasalVerbWord = document.createElement("td");
      phrasalVerbWord.textContent = word.phrasalVerb;
      row.appendChild(phrasalVerbWord);

      const nounWord = document.createElement("td");
      nounWord.textContent = word.noun;
      row.appendChild(nounWord);

      const adjectiveWord = document.createElement("td");
      adjectiveWord.textContent = word.adjective;
      row.appendChild(adjectiveWord);

      const adverbWord = document.createElement("td");
      adverbWord.textContent = word.adverb;
      row.appendChild(adverbWord);

      table.appendChild(row);
    });

    wrapper.appendChild(table);
    this.shadowRoot.appendChild(wrapper);
  }
}

export default AllInOne;
