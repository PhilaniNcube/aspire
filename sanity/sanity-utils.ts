
import type { Doc, News, Project, Tender, Vacancy } from '@/schema'
import {createClient, groq} from 'next-sanity'

const client = createClient({
  projectId: '0m4fu2cd',
  dataset: 'production',
  apiVersion: '2021-03-25',
})

export async function getProjects():Promise<Project[]>  {

  return  client.fetch(
    groq`
    *[ _type == "project" ] {
      _id,
      name,
      slug,
      location,
      current,
      status,
      content,
      "images": images[].asset->url,
    }
    `)

}

export async function getCurrentProjects():Promise<Project[]>  {

  return  client.fetch(
    groq`
    *[ _type == "project" && status match "current" ] {
      _id,
      name,
      slug,
      location,
      current,
      status,
      content,
      "images": images[].asset->url,
    }
    `)

}

export async function getCompletedProjects():Promise<Project[]>  {

  return  client.fetch(
    groq`
    *[ _type == "project" && status match "completed" ] {
      _id,
      name,
      slug,
      location,
      current,
      status,
      content,
      "images": images[].asset->url,
    }
    `)

}

export async function getOngoingProjects():Promise<Project[]>  {

  return  client.fetch(
    groq`
    *[ _type == "project" && status match "ongoing" ] {
      _id,
      name,
      slug,
      location,
      current,
      status,
      content,
      "images": images[].asset->url,
    }
    `)

}

export async function getProjectsIDs():Promise<Project[]>  {

  return  client.fetch(
    groq`
    *[ _type == "project" ] {
      _id,
      name,
      slug,

    }
    `)

}


export async function getProject(slug:string):Promise<Project>  {

  return client.fetch(
    groq`
    *[ _type == "project" && slug.current == $slug ][0] {
      _id,
      name,
      slug,
      location,
      current,
      status,
      content,
      "images": images[].asset->url,
    }
    `,
    {slug})

}


export async function getDocs():Promise<Doc[]>  {

  return  client.fetch(
    groq`
    *[ _type == "doc" ] {
      _id,
      title,
      _createdAt,
      slug,
      category,
      "content": content.asset->url,
    }
    `)

}


export async function getBudgetDocs():Promise<Doc[]>  {

  return client.fetch(
			groq`
    *[ _type == "doc" && category match "budgets*" || category match "policies*" || category match "strategic*" ] {
      _id,
      title,
      _createdAt,
      slug,
      category,
      "content": content.asset->url,
    }
    `,
		);

}


export async function getMidYearDocs():Promise<Doc[]>  {

  return client.fetch(
			groq`
    *[ _type == "doc" && category match "midyear*"  ] {
      _id,
      title,
      _createdAt,
      slug,
      category,
      "content": content.asset->url,
    }
    `,
		);

}


export async function getQuarterlyDocs():Promise<Doc[]>  {

  return client.fetch(
			groq`
    *[ _type == "doc" && category match "corporate*"  ] {
      _id,
      title,
      _createdAt,
      slug,
      category,
      "content": content.asset->url,
    }
    `,
		);

}


export async function getMonthlyDocs():Promise<Doc[]>  {

  return client.fetch(
			groq`
    *[ _type == "doc" && category match "monthly*"  ] {
      _id,
      title,
      _createdAt,
      slug,
      category,
      "content": content.asset->url,
    }
    `,
		);

}


export async function getAnnualDocs():Promise<Doc[]>  {

  return client.fetch(
			groq`
    *[ _type == "doc" && category match "annual*" || category match "app*" ] {
      _id,
      title,
      _createdAt,
      slug,
      category,
      "content": content.asset->url,
    }
    `,
		);

}


export async function getDoc(slug:string):Promise<Doc>  {

  return client.fetch(
    groq`
    *[ _type == "doc" && slug.current == $slug ][0] {
      _id,
      title,
      slug,
      category,
     "content": content.asset->url,
    }
    `,
    {slug})

}

export async function getTenders():Promise<Tender[]>  {

  return  client.fetch(
    groq`
    *[ _type == "tender" && awarded == false ] {
      _id,
      name,
      _createdAt,
      slug,
      description,
      closingDate,
      tenderNumber,
      awarded,
      price,
      "tenderDocument":tenderDocument.asset->url,
      "closeOutDocument":closeOutDocument.asset->url,
    } | order(closingDate desc)
    `)

}

export async function getClosedTenders():Promise<Tender[]>  {

  const date = new Date().toISOString()

  return client.fetch(
			groq`
    *[ _type == "tender" && closingDate <  "${date}"] {
      _id,
      name,
      _createdAt,
      slug,
      description,
      closingDate,
      tenderNumber,
      awarded,
      price,
      "tenderDocument":tenderDocument.asset->url,
      "closeOutDocument":closeOutDocument.asset->url,
    } | order(closingDate desc)
    `,
		);

}

export async function getClosedBids():Promise<Tender[]>  {

  const date = new Date().toISOString()

  return client.fetch(
			groq`
    *[ _type == "tender" && tenderNumber match "BID*"  && closingDate <  "${date}"] {
      _id,
      name,
      _createdAt,
      slug,
      description,
      closingDate,
      tenderNumber,
      awarded,
      price,
      "tenderDocument":tenderDocument.asset->url,
      "closeOutDocument":closeOutDocument.asset->url,
    } | order(closingDate desc)
    `,
		);

}

export async function getAwardedBids():Promise<Tender[]>  {
  return client.fetch(
			groq`
    *[ _type == "tender" && tenderNumber match "BID*"   && awarded == true] {
      _id,
      name,
      _createdAt,
      slug,
      description,
      closingDate,
      tenderNumber,
      awarded,
      price,
      "tenderDocument":tenderDocument.asset->url,
      "closeOutDocument":closeOutDocument.asset->url,
    } | order(closingDate desc)
    `,
		);

}


export async function getOpenBids():Promise<Tender[]>  {

  const date = new Date().toISOString()

  return client.fetch(
			groq`
    *[ _type == "tender" && tenderNumber match "BID*"  && closingDate >  "${date}" && awarded == false] {
      _id,
      name,
      _createdAt,
      slug,
      description,
      closingDate,
      tenderNumber,
      awarded,
      price,
      "tenderDocument":tenderDocument.asset->url,
      "closeOutDocument":closeOutDocument.asset->url,
    } | order(closingDate desc)
    `,
		);

}

export async function getOpenRFQs():Promise<Tender[]>  {

  const date = new Date().toISOString()

  return client.fetch(
			groq`
    *[ _type == "tender" && tenderNumber match "RFQ*"  && closingDate >  "${date}" && awarded == false] {
      _id,
      name,
      _createdAt,
      slug,
      description,
      closingDate,
      tenderNumber,
      awarded,
      price,
      "tenderDocument":tenderDocument.asset->url,
      "closeOutDocument":closeOutDocument.asset->url,
    } | order(closingDate desc)
    `,
		);

}

export async function getClosedRFQs():Promise<Tender[]>  {

  const date = new Date().toISOString()

  return client.fetch(
			groq`
    *[ _type == "tender" && tenderNumber match "RFQ*"  && closingDate <  "${date}" && awarded == false] {
      _id,
      name,
      _createdAt,
      slug,
      description,
      closingDate,
      tenderNumber,
      awarded,
      price,
      "tenderDocument":tenderDocument.asset->url,
      "closeOutDocument":closeOutDocument.asset->url,
    } | order(closingDate desc)
    `,
		);

}

export async function getAwardedRFQs():Promise<Tender[]>  {

  const date = new Date().toISOString()

  return client.fetch(
			groq`
    *[ _type == "tender" && tenderNumber match "RFQ*" && awarded == true] {
      _id,
      name,
      _createdAt,
      slug,
      description,
      closingDate,
      tenderNumber,
      awarded,
      price,
      "tenderDocument":tenderDocument.asset->url,
      "closeOutDocument":closeOutDocument.asset->url,
    } | order(closingDate desc)
    `,
		);

}



export async function getAwardedTenders():Promise<Tender[]>  {

  return  client.fetch(
    groq`
    *[ _type == "tender" && awarded == true ] {
      _id,
      name,
      _createdAt,
      slug,
      description,
      closingDate,
      tenderNumber,
      awarded,
      price,
      "tenderDocument":tenderDocument.asset->url,
      "closeOutDocument":closeOutDocument.asset->url,
    } | order(closingDate desc)
    `)

}


export async function getTender(slug:string):Promise<Tender>  {

  return client.fetch(
    groq`
    *[ _type == "tender" && slug.current == $slug ][0] {
    _id,
      name,
      _createdAt,
      slug,
      description,
      closingDate,
      tenderNumber,
      awarded,
      price,
      "tenderDocument": tenderDocument.asset->url,
      "closeOutDocument": closeOutDocument.asset->url,
    }
    `,
    {slug})

}


export async function getVacancies():Promise<Vacancy[]>  {

  return client.fetch(
			groq`
    *[ _type == "vacancy" ] {
      _id,
      title,
      _createdAt,
      slug,
      description,
      closingDate,
      location,
      "vacancyDocument":vacancyDocument.asset->url,
       "images": images[].asset->url,
    }
    `,
		);

}


export async function getVacancy(slug:string):Promise<Vacancy>  {

  return client.fetch(
			groq`
    *[ _type == "vacancy" && slug.current == $slug ][0] {
    _id,
      title,
      _createdAt,
      slug,
      description,
      closingDate,
      location,
      "vacancyDocument":vacancyDocument.asset->url,
       "images": images[].asset->url,
    }
    `,
			{ slug },
		);

}


export async function getNews():Promise<News[]>  {

  return  client.fetch(
    groq`
    *[ _type == "news" ] {
      _id,
      name,
      _createdAt,
      slug,
      "author":author->name,
      content,
       "image":image.asset->url,
    } | order(_createdAt desc)
    `)

}

export async function getMainArticles():Promise<News[]>  {

  return  client.fetch(
    groq`
    *[ _type == "news"  ]| order(_createdAt desc)[0...4] {
      _id,
      name,
      _createdAt,
      slug,
      "author":author->name,
      content,
       "image":image.asset->url,
    }
    `)

}


export async function getNewsArticle(slug:string):Promise<News>  {

  return  client.fetch(
    groq`
    *[ _type == "news" && slug.current == $slug ][0]  {
      _id,
      name,
      _createdAt,
      slug,
      "author":author->name,
      content,
      "image":image.asset->url,
    }
    `, {slug})

}
