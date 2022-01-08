let articles = document.querySelectorAll('.catalog__list-card');
let filters = document.querySelectorAll('.catalog__aside-palase');
let filres2 = document.querySelectorAll('.catalog__aside-number');
// for (let i; i < filter.length; i++) {

// }
for (let filter of filters) {
filter.onchange = function () {
    for (let article of articles) {
      if (filter.checked && article.dataset.category !== filter.value) {
        article.classList.add('none');
      } else  {
        article.classList.remove('none');
      }
    }
  };
}

for (let filter2 of filres2) {
    filter2.onchange = function () {
        for (let article of articles) {
          if (filter2.checked && article.dataset.palace != filter2.value) {
            article.classList.add('none'); 
          } else  {
            article.classList.remove('none');
          }
        }
      };
    }