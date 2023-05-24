
import { Doc, News, Project, Tender, Vacancy } from '@/schema'
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
      slug
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
    *[ _type == "tender" ] {
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
    }
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
    }
    `,
    {slug})

}


export async function getVacancies():Promise<Vacancy[]>  {

  return  client.fetch(
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
    }
    `)

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
    }
    `,
    {slug})

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
