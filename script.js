const userMessage = [
    ["hi", "hey", "hello"],
    ["sure", "yes", "no"],
    ["Murder", "murder", "killing", "kill", "intentional murder","unintentional murder",],
    ["Suicide", "suicide", "attempt to commit suicide", "commit suicide"],
    ["grand theft"],
    ["kidnapping","kidnaping","Kidnapping"],
    ["rape","Rape"],
    ["Adultary","adultary"],
    ["Drink and Drive", "Drink","drink and drive","drink"],
    ["who created you", "who made you", "who is your creator"],
  
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["corona", "covid19", "coronavirus"],
    ["you are funny"],
    ["i dont know"],
    ["boring"],
    ["im tired"]
  ];
  const botReply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Yes"],
    ["Under the section- <br> India Penal Code, 1860- IPC,<br> Relevent Sections for Murder- <br> *Section 299 IPC- Culpable Homicide.<br> *Killing someone without intention or premeditation, but with knowledge that the act cn cause death. <br> *Punishment: Up to life imprisonment or up to 10 years + fine. <br> *Section 300 IPC – Murder <br> *Killing with intention,premeditation, or extreme recklessness. <br>*Punishment(Section 302 IPC):<br> *Life imprisonment or Death penalty + fine(in rarest of rare cases).<br> *Section 304 IPC-Culpable Homicide Not Amounting to Murder.<br> *Killing without premeditation but with knowledge that death is likely.<br> *Punishment: 10 years to life imprisonment + fine.<br> *Section 307 IPC-Attempt to Murder.<br>*Section 302 IPC + Section 376A IPC-Murder after Raape.<br> *If a victim dies due to the crime.<br> Punishment: Death penalty or life imprisonment.<br> *Section 303 IPC- Murder by a Life convict.<br> *If a prisonment commits murder.<br> *Punishment: Mandatory death penalty (Declared unconsitutional by Supreme court.) "],
    ["Attempt to commit Suicide-Section 309<br> *The Section 309 of the Indian Penal Code deals with suicide attempts, whereby attempting to die by suicide is punishable with imprisonment of up to one year. Considering long-standing demand and recommendations of the Law Commission of India, which has repeatedly endorsed the repeal of this section, the Government of India in December 2014, decided to decriminalise attempts to die by suicide by dropping Section 309 of the IPC from the statute book. In February 2015, the Legislative Department of the Ministry of Law and Justice was asked by the Government to prepare a draft Amendment Bill in this regard.[16]<br> <br><br> In an August 2015 ruling, the Rajasthan High Court made the Jain practice of undertaking voluntary death by fasting at the end of a person's life, known as Santhara, punishable under sections 306 and 309 of the IPC. This led to some controversy, with some sections of the Jain community urging the Prime Minister to move the Supreme Court admitted the petition by Akhil Bharat Varshiya Digambar Jain Parishad and granted leave. It stayed the decision of the High Court and lifted the ban on the practice.<br><br><br> In 2017, the new Mental Healthcare Act of India was signed. Section 115(1) of the act effectively decriminalised suicide, saying 'anyone who attempts suicide shall be presumed, unless proved otherwise, to have severe stress and shall not be tried and punished under the said Code.<br><br><br> The Bharatiya Nyaya Sanhita, officially decriminalized attempted suicide by not including an equivalent section to Section 309.[19][20] '"],
    [
      "India (Indian Penal Code, 1860 - IPC)<br> *In India, theft is covered under Sections 378 to 382 IPC. While the term “grand theft” is not explicitly mentioned, higher-value thefts and aggravated forms of theft fall under severe punishments.<br> *Relevent Sections Under IPC <br> Section 378 IPC- Definition Of Theft.<br> *Theft is when a person dishonestly takes someone else's movable property without consent.<br>Section 379 IPC- Punishment for Theft.<br> *Up to 3 years imprisonment or fine or both.<br> *Section 380 IPC-Theft in a Dwelling House<br> If theft occurs inside a house bank, or place of worship, punishment incresses to 7 years imprisonment + fine. <br> *Section 381 IPC- Theft by a Servant or Employee.<br> If a servant or employee steals from their employer, punishment is up to 7 years imprisonment + fine.<br> *Section 382 IPC-Theft with Preparation to Cause Hurt.<br> If the thief prepares to use violence during the theft, punishment is up to 10 years imprisonment + fine. "
    ],
    ["For Kidnapping-<br> India(Indian Penal Code, 1860-IPC)<br><br><br> kidnapping(Section 359 IPC)<br><br><br> Kidnapping is broadly divided into two categoriess:<br> *Section 360 IPC-kidnapping from India.<br> *Talking a person beyond India without their consent.<br>*Section 361 IPC-kidnapping from LAwful Guardianship.<br>*Taking a minor (boy under 16, girl under 18) or a person of unsound mind away from their lawful guardian without consent.<br><br><br> Punishments for Kidnapping<br> *Section 363 IPC-Punishment for kidnapping<br>*Up to 7 years imprisonment + fine.<br>*Section 364 IPC – Kidnapping with Intent to Murder<br> If a person is kidnapped with the intent to kill them, the punishment is life imprisonment or death penalty.<br> *Section 364A IPC – Kidnapping for Ransom<br>*If a person is kidnapped and a ransom is demanded, the punishment is life imprisonment or the death penalty.<br> *Section 365 IPC – Kidnapping with Intent to Wrongfully Confine.<br>If a person is kidnapped to be secretly and wrongfully confined, punishment is up to 7 years imprisonment + fine.<br> *Section 366 IPC – Kidnapping a Woman to Force Marriage.<br>*If a woman is kidnapped to force her into marriage, the punishment is up to 10 years imprisonment + fine.<br>* Section 367 IPC-Kidnapping with Intent to Cause Grievous Harm or Slavery.<br>*If the kidnapped person is harmed, enslaved or Slavery.<br>*If the kidnapped person is harmed, enslaved, or forced into labor,punishment is up to life imprisonment.<br>*Section 368 IPC – Wrongfully Keeping a Kidnapped Person.<br>*If a person knowingly conceals or keeps a kidnapped person, they will be punished as if they committed the kidnapping."],
  
    [
      "India(India Penal Code 1860-IPC)<br> Rape(Section 375 IPC)<br>* Defines rape as sexual intercourse with a woman against her will, without her consent, or under coercion.<br>*Includes cases where consent is obtained by force, fraud, or when the victim is a minor (under 18 years old).<br>* Punishment for Rape (Section 376 IPC)<br>*376(1): General punishment – Minimum 10 years, up to life imprisonment + fine.<br>*376(2): Aggravated rape (by police, public servant, relative, etc.) – Minimum 10 years, up to life imprisonment.<br>*376AB: Rape of a girl below 12 years – Minimum life imprisonment or death penalty.<br>*376DA: Gang rape of a minor (below 16 years) – Life imprisonment.376DB: Gang rape of a girl below 12 years – Life imprisonment or death penalty."
    ],
    ["Section 497 The section 497 of the indian oanek code has been criticized in the ine hand for allegedly traeating women as the private property of her husband,and on the otyher hand fir giving women comoplete proetection against punishment for adultery.[21][22] This section was unanimously struck down on 27 sepetember 2018 by a five-judge bench of the Supreme Court in case of Joseph Shine v."],
    ["Section 185 of the Motor Vehicles Act, 1988 is the section that deals with the offense of driving under the influence of driving under the influence of alcohol or drugs punishment.<br>For a first offense, the punishment can be up to six months in jail, a fine of up to Rs 2000 or both.<br> For a second or subsequent offense, the punishment can be up two years in jail, a fine of up to Rs 3000 or both.<br>Conditions for punishment. The offense must be committed within three years of a similar offense.<br> The driver must have alcohol in their blood that exceeds 30 mg per 100 ml of blood.<br>Other consequences-<br>"],
    ["Sabitha Kuppusamy"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Briyani", "Burger", "Sushi", "Pizza"],
    ["Dude!"],
    ["Yes?"],
    ["Please stay home"],
    ["Glad to hear it"],
    ["Say something interesting"],
    ["Sorry for that. Let's chat!"],
    ["Take some rest, Dude!"]
  ];
  
  const alternative = [
    "Same here, dude.",
    "That's cool! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening..."
  ];
  
  const synth = window.speechSynthesis;
  
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }