const project = {
    name: 'project',
    title: 'Projects',
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
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{type: 'image', options: {hotspot: true}, fields: [{name: 'alt', title: "Alt", type: 'string'}]}],
        options: {
          layout: 'grid',
          hotspot: true,
          grid: {
            columns: 2
          }
        },


      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'current',
        title: 'Current',
        type: 'boolean',
        options: {
          layout: 'checkbox',
          default: true
        }
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{type: 'block'}]
      }
    ]
}

export default project;
