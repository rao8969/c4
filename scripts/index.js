// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";
console.log(navbar)
let navbar=document.getElementById('navbar');
nav.innerHTML=navbar();

import {apicall,appendresults} from "./scripts/index.js"

let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country={countrycode}`
let res=await apicall(url)
console.log(res);

let news= document.getElementById('results');
appendNews(res,results)

let search=document.getElementById('search_input');
search.addEventListener("keypress",function(){
            results(event);
})
const results=(e)=> {
            if(e.code=="Enter")
            {
               let input=inputing.value;
               localStorage.setItem("search_input",input);
               window.location.href="./search.html"
            }
}
