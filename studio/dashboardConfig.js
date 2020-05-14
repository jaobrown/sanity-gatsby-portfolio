export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ebd7d4e021029ca7b007c34',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ncxs9n9a',
                  apiId: 'd4243bec-2f69-4bfe-a6c7-ad9de3beb464'
                },
                {
                  buildHookId: '5ebd7d4f021029d92c007b23',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-w4copity',
                  apiId: '94d0f9f2-5f89-4b93-879b-60a6aa978d39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaobrown/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-w4copity.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
