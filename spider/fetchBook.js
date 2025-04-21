const axios = require('axios')
const cheerio = require('cheerio')
const Books = require('../models/book')

/**
 * 获取豆瓣读书网页的源代码
 */
async function fetchBook(url) {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Error fetching the book page:', error)
    throw error
  }
}

/**
 * 解析豆瓣读书网页的源代码,并从网页中分析出书籍的基本信息，然后得到一个书籍的详情页链接数组
 */

async function getBookLinks() {
  const html = await fetchBook('https://book.douban.com/latest')
  const $ = cheerio.load(html)
  const achorElements = $('#content .grid-16-8 li .media__img a')

  const links = achorElements
    .map((i, ele) => {
      const href = ele.attribs.href
      return href
    })
    .get()
  return links
}

/**
 *  根据书籍详情页的地址，得到该书籍的相信信息
 */
async function getBookDetail(detailUrl) {
  const resp = await axios.get(detailUrl)
  const $ = cheerio.load(resp.data)
  const name = $('h1').text().trim()
  const imgurl = $('#mainpic .nbg img').attr('src')
  const spans = $('#info span.pl')

  const authorSpan = spans.filter((i, ele) => {
    return $(ele).text().includes('作者')
  })
  const author = authorSpan.next('a').text()
  const publishSpan = spans.filter((i, ele) => {
    return $(ele).text().includes('出版年')
  })
  const publishDate = publishSpan[0].nextSibling.nodeValue.trim()

  return {
    name,
    imgurl,
    publishDate,
    author
  }
}

/**
 * 获取所有书籍信息
 */
async function fetchAll() {
  const bookLinks = await getBookLinks()
  const bookDetails = await Promise.all(
    bookLinks.map((link) => getBookDetail(link))
  )
  return bookDetails
}

/**
 * 得到书籍信息
 */
async function saveToDb() {
  const books = await fetchAll()
  await Books.bulkCreate(books)
  console.log('Books saved to database successfully.')
  return books
}

saveToDb()
