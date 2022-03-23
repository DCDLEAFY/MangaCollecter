import pkg from '@specify_/mangascraper';
const { Manganato } = pkg;



var savedMangaName = [];
var savedMangaUrl = []

//Save Manga with Manganato URL
async function saveMangaUrl(mangaUrl){
    

    const meta = await manganato.getMangaMeta(mangaUrl);
    
    //Saving both the url and the name, Same ArrayIDs
    savedMangaUrl.push(mangaUrl);
    savedMangaName.push(meta.title.main);
}

//Save Manga with Manganato Name
async function saveMangaName(mangaName){


    const mangas = await manganato.search(mangaName);
    const meta = await manganato.getMangaMeta(mangas[0].url);
    
    //Saving both the url and the name, Same ArrayIDs
    savedMangaName.push(mangaName);
    savedMangaUrl.push(meta.title);
}

//Query Manga for information
async function queryMangaName(mangaName){
    const manganato = new Manganato();

    const mangas = await manganato.search(mangaName);
    const meta = await manganato.getMangaMeta(mangas[0].url);
    console.log(meta.title.main + " -> Chapters: " + meta.chapters.length);
}

//Get Pages links of URL
async function getPageLinks(url){

    const manganato = new Manganato();
    const meta = await manganato.getMangaMeta(url);
    const pageLinks = await manganato.getPages(meta.chapters[0].url);
    console.log(images);
}

await getPageLinks('https://readmanganato.com/manga-gf983740');

// class Factory{
//     constructor(choice, stringy){
//         this. manganato = new Manganato();
//         this.choice = choice;
//         this.stringy = stringy;
//     }

//     async ifUrl(){
//         try{
//             this.meta = await this.manganato.getMangaMeta(this.stringy);
//         } catch (e){
//             console.log(e);
//         }
        
//     }

//     async ifName(){
//         try {
//             this.mangas = await this.manganato.search(this.stringy);
//             this.meta = await this.manganato.getMangaMeta(this.mangas[0].url);
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     async init(){
//         if(this.choice=='name'){
//             this.ifName();
//         } else {
//             this.ifUrl();
//         }

//         return this.meta;
//     }

//     get meta(){
//         return this.meta;
//     }

//     set meta(meta){
//         this.meta = meta;
//     }
// }
