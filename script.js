
const  accessKey = "eokXmmWjawa6s4ZDdKoB9dKp62wvaRSaGWOrro5Bce4";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("showmorebtn");
let keyWord = "";
let page = 1;

async function searchImg(){
    keyWord = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;

    const response  = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML="";

    }
   const results = data.results;




    results.map((result)=>{
    const image = document.createElement("img");

    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
     image.addEventListener("click",()=>{
        image.classList.add("full-image-container");
      

 
     })

   })
   showMore.style.display = "block"
 

}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImg();
})

showMore.addEventListener("click",()=>{
    page++;
    searchImg();
})
function fullImage(){
    searchResult.classList.add("full-img")
}
