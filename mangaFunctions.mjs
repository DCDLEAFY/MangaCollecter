//Manga Api
import pkg from '@specify_/mangascraper';
const { Manganato } = pkg;

//FileStream
import fs from 'fs';
import client from 'https';

//Pupeteer - input here

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
    console.log(pageLinks); // returns a list of links to the images


    //Test Area
    await downloadImage(pageLinks[0], "test.jpg");
}

//Download pages of link - WIP - Does not work 
async function downloadImage(url, filepath){
    client.get(url, (res) => {
        res.pipe(fs.createWriteStream(filepath));
    });
}

//Test Area - Line 56
(await getPageLinks('https://readmanganato.com/manga-gf983740'));