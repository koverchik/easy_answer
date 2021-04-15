const topic = ["Как дела?", "Как настроение?", "Расскажи о себе", "Чем увлекаешься?", "Как твой день проходит?", "Чем занимаешься", "Что тут ищешь?", "Где вы живете?", "Как давно тут?", "Как настроение"];
const imgEmogi = ["fanny.svg", "sarcasm.svg", "serios.svg", "sweet.svg"];

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
    
   function createOneTheme (arrayItem){
    // Создание категории (вопросов)
    let helerElem = document.createElement('div');
    helerElem.innerHTML = "Как дела?";
    helerElem.setAttribute('class', 'header-item');
    helerElem.setAttribute('topic-data', 1);
    blockExtension.append(helerElem);

    arrayItem.forEach((item, i)=>{
     
        // Создание списка

        let wtapperElem = document.createElement('ol');
        wtapperElem.append(createElement(item));
        wtapperElem.setAttribute('style', 'display: none');
      
        blockExtension.append(wtapperElem);
      })
   }
   createOneTheme(howAreYou);
  


}

document.addEventListener('readystatechange', cangeDom);

