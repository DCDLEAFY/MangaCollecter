import puppeteer from 'puppeteer';

import * as mangafunct from './mangaFunctions.mjs';
const {getPageLinks ,saveMangaName, saveMangaUrl} = mangafunct;

async function runHeadless(url){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: 'example.png' });

  await browser.close();
}



//runHeadless('https://readmanganato.com/manga-gf983740');
getPageLinks('https://readmanganato.com/manga-gf983740');