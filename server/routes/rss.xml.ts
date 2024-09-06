import { serverQueryContent } from '#content/server'
import RSS from 'rss';

export default defineEventHandler(async (event) => {
    const feed = new RSS({
      title: 'Abella Advocacia',
      description: 'Feed RSS para o site Abella Advocacia',
      site_url: 'https://abellaadv.com.br/',
      feed_url: `https://abellaadv.com.br/rss.xml`,
      custom_namespaces: {
           media: "http://search.yahoo.com/mrss/",
       }
    })
    
    
    const docs = await serverQueryContent(event).sort({ data: -1 }).where({ _partial: false }).find()
    
    let blogPosts = docs.filter((doc) => doc?.type?.includes('noticias') || doc?.type?.includes('beneficios') || doc?.type?.includes('revisoes'))

    blogPosts = blogPosts.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
    
    blogPosts = blogPosts.splice(0, 3);
    
    for (const doc of blogPosts) {
    
      feed.item({
        title: doc.titulo ?? '-',
        url: `https://abellaadv.com.br${ doc.type === 'noticias' ? '/noticias' : doc.type === 'beneficios' ? '/beneficios' : '/revisoes' }/${doc.slug }`,
        date: doc.data,
        description: doc.excerpt?doc.excerpt:'-',
        //enclosure: {  url: doc.capa },
        custom_elements: [
         {
           'media:content': [
               {
                   _attr: {
                       medium: 'image',
                       URL:  `https://abellaadv.com.br${doc.capa}`
                   }
               }]
         }]
      })
    
    }
    
    
    const feedString = feed.xml({ indent: true })
    
    event.res.setHeader('content-type', 'text/xml')
    
    event.res.end(feedString)
});
