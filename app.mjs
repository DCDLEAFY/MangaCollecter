import pkg from '@specify_/mangascraper';
const { Manganato } = pkg;

var savedMangaName = [];
var savedMangaUrl = []

//Save Manga with Manganato URL
async function saveMangaUrl(mangaUrl){
    const manganato = new Manganato();

    const meta = await manganato.getMangaMeta(mangaUrl);
    
    //Saving both the url and the name, Same ArrayIDs
    savedMangaUrl.push(mangaUrl);
    savedMangaName.push(meta.title.main);
}

//Save Manga with Manganato Name
async function saveMangaName(mangaName){

    const manganato = new Manganato();

    const mangas = await manganato.search(mangaName);
    const meta = await manganato.getMangaMeta(mangas[0].url);
    
    //Saving both the url and the name, Same ArrayIDs
    savedMangaName.push(mangaName);
    savedMangaUrl.push(meta.title);
}

async function latestChapterWithName(searchItem){

    const manganato = new Manganato();

    const mangas = await manganato.search(searchItem);
    const meta = await manganato.getMangaMeta(mangas[0].url);
    console.log(meta.title + "\n" + meta.chapters[0]);

    // const images = await manganato.getPages(meta.chapters[0].url);
    // console.log(images);
}