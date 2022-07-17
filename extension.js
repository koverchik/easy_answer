const helloTopic = ["#На_русском", "#Иностранные"];
const howAreYouTopic = ["#Смешной", "#Сарказм", "#Серьезный", "#Ровно"];
const howAreYourMoodTopic = ["#Ну_такое", "#Всё_хорошо", "#Веселый", "#Лучше"];
const aboutYourselfTopic = ["#Милая", "#С_характером", "#Самая_самая"];
const areYouHobbiesTopic = ["#Несерьезно", "#Приличная", "#Короткий"];
const howIsYourDayTopic = ["#Все_хорошо", "#Не_очень", "#C_шуткой", "#Пичаль"];
const whatAreYouDoingTopic = [
  "#Биология",
  "#C_юмором",
  "#Отстой_вопрос",
  "#Жэстачайшэ",
  "#Ирония",
];
const whatAreYourLookingForTopic = [
  "#Разговоры",
  "#Человека",
  "#Уведи_меня_уведи",
  "#Программист",
];
const wereDoYouLiveTopic = ["#Отшутиться", "#Дерзкая"];
const howLongThereTopic = ["#Без_понятия", "#Вчера"];

function chanageDom() {
  const idElem = document.getElementsByTagName("body");
  const blockExtension = document.createElement("div");
  blockExtension.setAttribute("id", "blockExtension");

  // Move block
  blockExtension.setAttribute("draggable", "true");

  function clickLi(e) {
    const textAreaClick = document.getElementsByTagName("textarea");

    for (let index = 0; index < textAreaClick.length; index++) {
      if (
        textAreaClick[index].hasAttribute("placeholder") &&
        (textAreaClick[index].getAttribute("placeholder") ==
          "Введите сообщение" ||
          textAreaClick[index].getAttribute("placeholder") == "Type a message")
      ) {
        textAreaClick[index].focus();
        textAreaClick[index].value += e.target.textContent;
        let p = document.createElement("p");
        p.setAttribute("id", "plaseholder");
        p.style.marginTop = "50px";
        p.innerHTML = "Введите любой сивол для подтверждения ввода";
        textAreaClick[index].before(p);
        textAreaClick[index].addEventListener("keydown", (event) => {
          let placeholder = document.getElementById("plaseholder");
          if (placeholder !== null) {
            placeholder.remove();
          }
        });
      }
    }
  }

  function createElement(array) {
    const fragment = new DocumentFragment();

    array.forEach((item, i) => {
      let li = document.createElement("li");
      li.setAttribute("class", "list-item");
      li.innerHTML = item;
      li.addEventListener("click", clickLi);
      fragment.append(li);
    });

    return fragment;
  }

  idElem[0].append(blockExtension);

  function clickOnHeder(e) {
    let idName = document.getElementById(e.target.getAttribute("class-data"));
    let listHeadElem = document.getElementsByClassName("header-item");

    if (e.target.classList.contains("active-topic")) {
      e.target.classList.remove("active-topic");
      let listAllOl = document.getElementsByTagName("ol");
      for (let index = 0; index < listAllOl.length; index++) {
        listAllOl[index].style.display = "none";
      }
      for (let i = 0; i < listHeadElem.length; i++) {
        listHeadElem[i].style.display = "flex";
      }
    } else {
      e.target.classList.add("active-topic");
      for (let i = 0; i < listHeadElem.length; i++) {
        if (e.target !== listHeadElem[i]) {
          listHeadElem[i].style.display = "none";
        }
      }
    }

    if (idName.classList.contains("open-list")) {
      idName.style.display = "none";
      idName.classList.remove("open-list");
    } else {
      idName.style.display = "flex";
      idName.classList.add("open-list");
    }
  }
  function clickOnElement(e) {
    const blockWithName = e.target.parentNode;
    let listAll = blockWithName.parentNode.getElementsByTagName("ol");
    const elemClick = document.getElementById(
      e.target.getAttribute("name-data")
    );

    if (elemClick.classList.contains("active")) {
      elemClick.classList.remove("active");
      elemClick.style.display = "none";
    } else {
      for (i = 0; i < listAll.length; i++) {
        listAll[i].style.display = "none";
        listAll[i].classList.contains("active")
          ? listAll[i].classList.remove("active")
          : "";
      }
      elemClick.style.display = "flex";
      elemClick.classList.add("active");
      elemClick.style.flexDirection = "column";
      elemClick.style.overflow = "scroll";
      elemClick.style.height =
        document.documentElement.clientHeight - 200 + "px";
    }
  }

  function createOneTheme(arrayItem, categoryName, classAnswer, className) {
    // Создание категории (вопросов)
    let wrapperAllList = document.createElement("div");
    let helerElem = document.createElement("div");
    helerElem.innerHTML = classAnswer;
    helerElem.setAttribute("class", "header-item");
    helerElem.setAttribute("topic-data", classAnswer);
    helerElem.setAttribute("class-data", className);
    helerElem.addEventListener("click", clickOnHeder);
    wrapperAllList.append(helerElem);

    let wrapperEmotions = document.createElement("div");
    wrapperAllList.append(wrapperEmotions);

    wrapperEmotions.setAttribute("class", "wrapperButtonEmotion");
    wrapperEmotions.setAttribute("id", className);
    wrapperEmotions.setAttribute("style", "display: none");

    blockExtension.append(wrapperAllList);
    arrayItem.forEach((item, i) => {
      // Создание списка
      let buttonElem = document.createElement("div");
      buttonElem.innerHTML = categoryName[i];
      buttonElem.setAttribute("class", "buttonEmotion");

      buttonElem.setAttribute("name-data", categoryName[i]);
      wrapperEmotions.append(buttonElem);

      buttonElem.addEventListener("click", clickOnElement);

      let wrapperElem = document.createElement("ol");
      wrapperElem.setAttribute("id", categoryName[i]);
      wrapperElem.append(createElement(item));
      wrapperElem.setAttribute("style", "display: none");

      wrapperAllList.append(wrapperElem);
    });
  }
  // Создание отдельного блока

  createOneTheme(hello, helloTopic, "Приветствия", "hello");
  createOneTheme(howAreYou, howAreYouTopic, "Как дела?", "howAreYou");
  createOneTheme(
    howAreYourMood,
    howAreYourMoodTopic,
    "Как настроение?",
    "howAreYourMood"
  );
  createOneTheme(
    aboutYourSelf,
    aboutYourselfTopic,
    "Расскажи о себе",
    "aboutYourself"
  );
  createOneTheme(
    areYouHobbies,
    areYouHobbiesTopic,
    "Чем увлекаешься?",
    "areYouHobbies"
  );
  createOneTheme(
    howIsYourDay,
    howIsYourDayTopic,
    "Как твой день проходит?",
    "howIsYourDay"
  );
  createOneTheme(
    whatAreYouDoing,
    whatAreYouDoingTopic,
    "Что делаешь?",
    "whatAreYouDoing"
  );
  createOneTheme(
    whatAreYourLookingFor,
    whatAreYourLookingForTopic,
    "Что тут ищешь?",
    "whatAreYourLookingFor"
  );
  createOneTheme(
    wereDoYouLive,
    wereDoYouLiveTopic,
    "Где ты живешь?",
    "wereDoYouLive"
  );
  createOneTheme(
    howLongThere,
    howLongThereTopic,
    "Как долго здесь?",
    "howLongThere"
  );
}

document.addEventListener("readystatechange", chanageDom);
