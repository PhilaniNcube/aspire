const investment = {
  name: 'investment',
  title: 'Investments',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
    },
    {
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          { title: 'Agriculture & Agro-Processing', value: 'Agriculture & Agro-Processing' },
          { title: 'Tourism', value: 'Tourism' },
          { title: 'Ocean Economy', value: 'Ocean Economy' },
          { title: 'Green Economy', value: 'Green Economy' },
          { title: 'Property Development', value: 'Property Development' },
          { title: 'Manufacturing', value: 'Manufacturing' },
          { title: 'Economic Infrastructure', value: 'Economic Infrastructure' },
          { title: 'Cross-sector', value: 'Cross-sector' },
        ],
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
      options: {
        dateFormat: 'DD MMMM YYYY',
      },
    },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'document',
      title: 'Investment Document',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sector',
      media: 'image',
    },
  },
}

export default investment
