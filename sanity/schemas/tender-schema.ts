const tender = {
    name: 'tender',
    title: 'Tenders',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
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
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'tenderNumber',
        title: 'Tender Number',
        type: 'string',
      },
      {
        name: 'closingDate',
        title: 'Closing Date',
        type: 'date',
      },
      {
        name: 'tenderDocument',
        title: 'Tender Document',
        type: 'file'
      },
      {
        name: 'awarded',
        title: 'Awarded',
        type: 'boolean',
        default: false
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "closeOutDocument",
        title: "Close Out Document",
        type: "file",
      }
    ]
}


export default tender
