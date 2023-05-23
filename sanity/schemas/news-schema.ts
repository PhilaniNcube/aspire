const news = {
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
       name: "category",
        title: "Category",
        type: "string",
        options: {
          list: [
            { title: "Bulletin", value: "Bulletin" },
            { title: "Newsletter", value: "Newsletter" },
          ]
        }
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
        }
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{type: 'author'}]
      }
    ]
}

export default news;
