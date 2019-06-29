export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d17673767f9240ba20b1706',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xjuob11c',
                  apiId: '8e506267-b01f-45f3-bc21-b68f310d0590'
                },
                {
                  buildHookId: '5d176738e2c29ec0f95ed6c6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-i55c96ax',
                  apiId: '9e321d4f-d326-42d6-a378-99df5ba091ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jescowuester/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-i55c96ax.netlify.com', category: 'apps'}
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
