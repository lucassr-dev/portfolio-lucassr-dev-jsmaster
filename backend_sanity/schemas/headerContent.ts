// schemas/headerContent.ts

export default {
  name: 'headerContent',
  title: 'Header Content',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
      description:'A imagem não pode passar de 566x710',
    },
    {
      name: 'jobTitle1',
      title: 'JobTitle1',
      type: 'string',
    },
	{
      name: 'jobTitle2',
      title: 'JobTitle2',
      type: 'string',
    },
  ],
};

