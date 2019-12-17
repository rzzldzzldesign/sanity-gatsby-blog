export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5df87ec1f6459b50705c0ea9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-umvrh6kh',
                  apiId: 'bea5c585-c434-4af5-a001-22b5eaa5dabe'
                },
                {
                  buildHookId: '5df87ec11f9fa5a7d3684950',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-w8gbquuf',
                  apiId: 'cb953c65-fe16-421b-9a3e-2f1d987ef26d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rzzldzzldesign/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-w8gbquuf.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
