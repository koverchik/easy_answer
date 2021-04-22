const topic = ["Как дела?", "Как настроение?", "Расскажи о себе", "Чем увлекаешься?", "Как твой день проходит?", "Чем занимаешься", "Что тут ищешь?", "Где вы живете?", "Как давно тут?", "Как настроение"];
const howAreYouTopic = ["#Смешной", "#Сарказм", "#Серьезный", "#Ровно"];
const howAreYourMoodTopic = ["#Ну_такое", "#Всё_хорошо", "#Веселый", "#Лучше"]
const aboutYourselfTopic = ["#Милая", "#С_характером", "#Самая_самая"];
const areYouHobbiesTopic = ["#Несерьезно", "#Приличная", "#Короткий"];
const howIsYourDayTopic = ["#Все_хорошо", "#Не_очень", "#C_шуткой", "#Пичаль"];

function cangeDom(){
    const idElem = document.getElementsByTagName('body');
    const blockExtension = document.createElement('div');
    blockExtension.setAttribute('id', 'blockExtension');

    function createElement(array){
        const fragment = new DocumentFragment();
          
        array.forEach((item, i)=>{
            let li = document.createElement('li');
            li.setAttribute('class', 'list-item');
            li.innerHTML = item;
            fragment.append(li);
        })
  
        return fragment;
     };

    idElem[0].append(blockExtension);

    function clickOnElement(e){
            
        const blockWithName = e.target.parentNode;
        let listAll = blockWithName.parentNode.getElementsByTagName('ol');
        const elemClick = document.getElementById(e.target.getAttribute("name-data"));
   


         if(elemClick.classList.contains('active')){
            elemClick.classList.remove('active');
            elemClick.style.display = 'none';
            
         }else{
            for (i = 0; i < listAll.length; i++) {
                listAll[i].style.display = 'none';
                listAll[i].classList.contains('active') ? listAll[i].classList.remove('active'): "";
               
              }
             elemClick.style.display = 'flex';
             elemClick.classList.add('active');
             elemClick.style.flexDirection = 'column';
             elemClick.style.overflow = 'scroll';
             elemClick.style.height = document.documentElement.clientHeight + "px";
         }
       
      
    }

   function createOneTheme (arrayItem, categoryName, classAnswer){
    // Создание категории (вопросов)
    let wrapperAllList = document.createElement('div');
    let helerElem = document.createElement('div');
    helerElem.innerHTML = classAnswer;
    helerElem.setAttribute('class', 'header-item');
    helerElem.setAttribute('topic-data', classAnswer);
    wrapperAllList.append(helerElem);

    let wrapperEmotions = document.createElement('div');
    wrapperAllList.append(wrapperEmotions);

    wrapperEmotions.setAttribute('class', 'wrapperButtonEmotion');
    blockExtension.append(wrapperAllList);
    arrayItem.forEach((item, i)=>{
     
        // Создание списка
        let buttonElem = document.createElement('div');
        buttonElem.innerHTML = categoryName[i];
        buttonElem.setAttribute('class', 'buttonEmotion');
        buttonElem.setAttribute('name-data', categoryName[i]);
        wrapperEmotions.append(buttonElem);

        buttonElem.addEventListener( "click" , clickOnElement);

        let wtapperElem = document.createElement('ol');
        wtapperElem.setAttribute('id', categoryName[i]);
        wtapperElem.append(createElement(item));
        wtapperElem.setAttribute('style', 'display: none');
      
        wrapperAllList.append(wtapperElem);
      })
   }

   createOneTheme(howAreYou, howAreYouTopic, "Как дела?");
   createOneTheme(howAreYourMood, howAreYourMoodTopic, "Как настроение?");
   createOneTheme(aboutYourSelf, aboutYourselfTopic, "Расскажи о себе");
   createOneTheme(areYouHobbies, areYouHobbiesTopic, "Чем увлекаешься?");
   createOneTheme(howIsYourDay , howIsYourDayTopic, "Как твой день проходит?");
}

document.addEventListener('readystatechange', cangeDom);

