var search=document.getElementById("query");
var thumbnail=document.getElementsByClassName("poster");
var desc=document.getElementsByClassName("movieName");

search.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      console.log("pressed enter");
      getQuery(search.value)
          .then(function(results){
              console.log("results :",results);
              var filteredResults=results.filter(result=>result.backdrop_path);
              var i=0;
              for(i=i; i<=7;i++){
                  thumbnail[i].src="https://image.tmdb.org/t/p/w500"+filteredResults[i].backdrop_path;
                  desc[i].innerHTML=`${filteredResults[i].original_title}`;                                       
              }
          })
          .catch(err=>console.error(err));
    }
  }); 

const getQuery=async function(query){ 
    const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4be8a61c04069692ec71d744ddc0b88f&query=${query}`);
    const data=await response.json();
    if(response.status!==200){
        throw new Error("No Data Found");
    }
    return data.results;
}

const getQueryDetails=async function(query){ 
    const response=await fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=4be8a61c04069692ec71d744ddc0b88f&query=${query}`);
    const data=await response.json();
    if(response.status!==200){
        throw new Error("No Data Found");
    }
    return data.results;
}