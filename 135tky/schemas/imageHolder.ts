import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageHolder',
  type: 'document',
  title: 'Image Holder',
  fields: [
    {
        name: 'blogImage',
        type: 'blogImage',
        title: 'Image',
        options: {
          isHighlighted: true // <-- make this field easily accessible
        }
      },
      {
          name: 'date',
          type: 'date',
          title: 'date',
          validation: Rule => Rule.required(),
      },
      {
        name: 'slug',
        type: 'string',
        title: 'slug',
        validation: Rule => Rule.required(),
      }
  ],
  preview: {
    select: {
      media: 'blogImage',
      date: 'date',
      slug: 'slug',
    },
    prepare ({date, slug, media}) {
      return {
        title: media.alt,
        media,
        subtitle: `${date}-${slug}` || 'Missing date'
      }
    }
  }
})
