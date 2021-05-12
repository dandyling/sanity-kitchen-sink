export default {
  widgets: [
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
                  buildHookId: '609bf18a2573762cc5ecc639',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-38wx6y2q',
                  apiId: '2681c6fc-d593-48c5-b426-9eb4e4197d3a'
                },
                {
                  buildHookId: '609bf18af2625347f6744f18',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-v882esr8',
                  apiId: '9a1ed48d-656f-4f82-a214-c8ba11a8c495'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dandyling/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-v882esr8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
