const searchEngines = [{
    keyword: "g", name: "Google", baseUrl: "https://www.google.com/search?q=", customClass: "googleCard"
}, {
    keyword: "y", name: "Youtube", baseUrl: "https://www.youtube.com/results?search_query=", customClass: "ytCard"
}, {
    keyword: "x", name: "X", baseUrl: "https://x.com/hashtag/", customClass: "xCard"
}, {
    keyword: "i", name: "Instagram", baseUrl: "https://www.instagram.com/explore/tags/", customClass: "instagramCard"
}]


const load = () => {
    document.getElementById("goBtn").addEventListener("click", search)

    restoreKeywords()
}

const search = () => {
    let searchInput = document.getElementById("searchInput")
    let searchResult = searchInput.value

    if (!searchResult.startsWith("/")) {
        alert("Ongeldig commando syntax.")
        return
    }

    const engine = searchEngines.find((e) => e.keyword === searchResult.at(1))
    if (!engine) {
        alert("Ongeldige zoekmachine.")
        return;
    }

    const searchTerm = searchResult.slice(2).trim()
    if (searchTerm === "") {
        alert("Ongeldige zoekopdracht.")
        return;
    }
    const url = engine.baseUrl + encodeURIComponent(searchTerm)

    addSearchCard(engine.keyword, searchTerm)
    saveSearch(engine.keyword, searchTerm)

    window.open(url, "_blank")

    searchInput.value = "";
}

const addSearchCard = (keyword, searchTerm) => {
    const engine = searchEngines.find((e) => e.keyword === keyword)
    if (!engine) {
        return;
    }

    const template = `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card ${engine.customClass}">
                    <div class="card-body">
                        <h5 class="card-title">${engine.name}</h5>
                        <p class="card-text">${searchTerm}</p>
                        <a href="${engine.baseUrl + encodeURIComponent(searchTerm)}" target="_blank" " class="btn btn-dark">Go!</a>
                    </div>
                </div>
            </div>`
    document.getElementById("historyContainer").innerHTML += template
}

const saveSearch = (keyword, searchTerm) => {
    const searches = localStorage.getItem("searches")
    let searchesArray= []
    if (searches) {
        searchesArray = JSON.parse(searches)
    }
    searchesArray.push({keyword, searchTerm})

    localStorage.setItem("searches", JSON.stringify(searchesArray))
}

const restoreKeywords = () => {
    const searches = localStorage.getItem("searches")
    let searchesArray= []
    if (searches) {
        searchesArray = JSON.parse(searches)
    }

    for (let i = 0; i < searchesArray.length; i++) {
        addSearchCard(searchesArray[i].keyword, searchesArray[i].searchTerm)
    }
}

window.addEventListener("load", load)