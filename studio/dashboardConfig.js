export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8c8cc2dfe5f202e4dfce56',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a86n1k7c',
                  apiId: 'b792c335-15d5-4be5-a307-3772c1fdb59e'
                },
                {
                  buildHookId: '5d8c8cc25714f8ac9e729a78',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-12o4w8re',
                  apiId: 'b298fdbb-9288-419d-ae51-79a477fddbba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tylermalin/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-12o4w8re.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
