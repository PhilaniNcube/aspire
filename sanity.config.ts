import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas'
import { groqdPlaygroundTool } from "groqd-playground";

const config = defineConfig({
  projectId: '0m4fu2cd',
  dataset: 'production',
  title: 'Aspire Content Studio',
  apiVersion: '2021-03-25',
  basePath: '/admin',
  plugins: [deskTool(), groqdPlaygroundTool()],
  schema: {types: schemas}
})


export default config
