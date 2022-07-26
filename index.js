console.log("Hellow world!");
// 7410a0c47f9743c1b5669573b94b1fc0

let newsAccordion = document.getElementById('newsAccordion');
let API_KEY = '7410a0c47f9743c1b5669573b94b1fc0';

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7410a0c47f9743c1b5669573b94b1fc0', true);
xhr.getResponseHeader('Content-type', 'application/json');


xhr.onload = function () {
    if (this.readyState == 4 && this.status == 200) 
    {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles)
        let newsHtml="";
        articles.forEach(function(element,index){
            console.log(element,index);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collasped show" type="button" data-toggle="collapse show"
                                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                        ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#accordionExample">
                                <div class="card-body">
                                   ${element["description"]}.<a href="${element['url']}" target="_blank" >Read more</a>
                                </div>
                            </div>
                        </div>`;
                    newsHtml=newsHtml+news;
                });
                newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()
//  