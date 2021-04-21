const topic = ["Как дела?", "Как настроение?", "Расскажи о себе", "Чем увлекаешься?", "Как твой день проходит?", "Чем занимаешься", "Что тут ищешь?", "Где вы живете?", "Как давно тут?", "Как настроение"];
const emotion = ["Смешной", "Сарказм", "Серьезный", "Ровно"];

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
   
        for (i = 0; i < listAll.length; i++) {
            listAll[i].style.display = 'none';
           
         }
        const elemClick = document.getElementById(e.target.getAttribute("name-data"));
        console.log( elemClick.style.display);
        console.log( elemClick.getAttribute('display'));
        
        // console.log(window.getComputedStyle(elemClick).getPropertyValue('display'));
        elemClick.style.display = 'flex';
        elemClick.style.flexDirection = 'column';
        elemClick.style.overflow = 'scroll';
        elemClick.style.height = document.documentElement.clientHeight + "px";
       

         

    }
   function createOneTheme (arrayItem){
    // Создание категории (вопросов)
    let helerElem = document.createElement('div');
    helerElem.innerHTML = "Как дела?";
    helerElem.setAttribute('class', 'header-item');
    helerElem.setAttribute('topic-data', 1);
    blockExtension.append(helerElem);

    let wrapperEmotions = document.createElement('div');
    blockExtension.append(wrapperEmotions);
    wrapperEmotions.setAttribute('class', 'wrapperButtonEmotion');
    
    arrayItem.forEach((item, i)=>{
     
        // Создание списка
        let buttonElem = document.createElement('div');
        buttonElem.innerHTML = emotion[i];
        buttonElem.setAttribute('class', 'buttonEmotion');
        buttonElem.setAttribute('name-data', emotion[i]);
        wrapperEmotions.append(buttonElem);

        buttonElem.addEventListener( "click" , clickOnElement);

        let wtapperElem = document.createElement('ol');
        wtapperElem.setAttribute('id', emotion[i]);
        wtapperElem.append(createElement(item));
        wtapperElem.setAttribute('style', 'display: none');
      
        blockExtension.append(wtapperElem);
      })
   }
   createOneTheme(howAreYou);
  


}

document.addEventListener('readystatechange', cangeDom);

