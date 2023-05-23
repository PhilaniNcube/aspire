const doc = {
    name: 'doc',
    title: 'Docs',
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
        }
      },
      {
        name: 'period',
        title: 'Period',
        type: 'string',
      },
      {
       name: "category",
        title: "Category",
        type: "string",
        options: {
          list: [
            { title: "Annual Reports", value: "annual_reports" },
            { title: "Annual Performance Plan", value: "app" },
            { title: "Budgets", value: "budgets" },
            { title: "Corporate Reports", value: "corporate_reports" },
            { title: "Mid Year Reports", value: "midyear_reports" },
            { title: "Policies and Charters", value: "policies_and_charters" },
            { title: "Strategic Documents", value: "strategic_documents" },
          ]
        }
      },
      {
        name: 'content',
        title: 'Content',
        type: 'file',
        fields: [
          {
            name: 'description',
            type: 'string',
            title: 'Description'
          },
        ]
      }
    ]
}


export default doc
