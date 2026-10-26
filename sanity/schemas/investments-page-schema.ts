const investmentsPage = {
  name: 'investmentsPage',
  title: 'Investments Page',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Investments',
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 4,
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'intro',
    },
  },
}

export default investmentsPage
