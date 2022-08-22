const request = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

request.get("http://www.q-net.or.kr/cst006.do?id=cst00602&gSite=Q&gId=", (err, res, body) => {
    if (err) throw error;
    console.log(res.statusCode);
    let $ = cheerio.load(body);
    const html = $("div.tbl_type4").text();
})
    // const html = $('div.sc-hiwPVj div:nth-of-type(4) div:nth-of-type(3) div:nth-of-type(1)').children('div:nth-of-type(4)').children('div:nth-of-type(3)').children('div:nth-of-type(1)').each((index, elem) => {
    //     const title = $(elem).children('a:nth-of-type(2)').children('nth-child(1)').text();
    //     console.log(title);

    //.children('a:nth-of-type(2)').children('h2').text()

    // const html = $('div.tbl_type4 table:nth-of-type(1) tbody:nth-of-type(1) tr:nth-of-type(1) td:nth-of-type(2) ul li').text();