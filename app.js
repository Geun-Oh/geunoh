const url = "https://openapi.11st.co.kr/openapi/OpenApiService.tmall?key=936d898a06466f4151aa50456abb7f71&apiCode=ProductSearch&keyword=%EC%8B%A0%EB%B0%9C"

const fetchFunction = () => {
    fetch(url)
    .then(a => JSON.stringify(a))
    .then(a => console.log(a))
}

fetchFunction()