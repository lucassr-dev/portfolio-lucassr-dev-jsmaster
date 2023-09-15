export default {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name:'title',
      title:'Title',
      type:'string'
  },
    {
      name: 'logoUrl',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};