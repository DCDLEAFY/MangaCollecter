//Manga Api
import mangpkg from '@specify_/mangascraper';
const { Manganato } = mangpkg;

// import { Manganato } from '@specify_/mangascraper'; //Look into this


//FileStream
import fs from 'fs';
import client from 'https';


//Save Manga with Manganato URL
export async function saveMangaUrl(mangaUrl, nameArray, urlArray){
    const manganato = new Manganato();
    const meta = await manganato.getMangaMeta(mangaUrl);
    
    //Saving both the url and the name, Same ArrayIDs
    urlArray.push(mangaUrl);
    nameArray.push(meta.title.main);
}

//Save Manga with Manganato Name
export async function saveMangaName(mangaName, nameArray, urlArray){
    const manganato = new Manganato();

    const mangas = await manganato.search(mangaName);
    const meta = await manganato.getMangaMeta(mangas[0].url);
    
    //Saving both the url and the name, Same ArrayIDs
    nameArray.push(mangaName);
    urlArray.push(mangas[0].url);
}

//Query Manga for information
export async function queryMangaName(mangaName){
    const manganato = new Manganato();

    const mangas = await manganato.search(mangaName);
    const meta = await manganato.getMangaMeta(mangas[0].url);
    console.log(meta.title.main + " -> Chapters: " + meta.chapters.length);
}

//Get Pages links of URL
export async function getPageLinks(url){

    const manganato = new Manganato();
    const meta = await manganato.getMangaMeta(url);
    const pageLinks = await manganato.getPages(meta.chapters[0].url);
    console.log(pageLinks); // returns a list of links to the images


    //Test Area
    await downloadImage(pageLinks[0], "test.jpg");
}

//Download pages of link - WIP - Works but needs Axios
export async function downloadImage(url, filepath){
    client.get(url, (res) => {
        if(res.statusCode == 200){
            res.pipe(fs.createWriteStream(filepath));
        } else {
            console.log("Request failed with a status code of: " + res.statusCode);
        }
    });
}

//Test Area - Line 56
//(await getPageLinks('https://readmanganato.com/manga-gf983740'));