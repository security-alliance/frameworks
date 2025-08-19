import { defineConfig } from 'vocs'

export default defineConfig({
  banner: {
    content: '***This is a work in progress and not a release. We are looking for volunteers. See Issues and Contribution to know how to collaborate.***',
    height: '40px',
    backgroundColor: '#8b5cf6',
    textColor: 'white'
  },
  title: 'Security Frameworks by SEAL',
  description: 'Comprehensive security framework documentation for Web3 projects and blockchain security best practices.',
  logoUrl: '/logo.svg',
  iconUrl: '/favicon.svg',
  sidebar: [ 
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Introduction to Frameworks', link: '/intro/introduction' },
        { text: 'How to Navigate', link: '/intro/how-to-navigate' },
        { text: 'Framework Overview', link: '/intro/overview' },
      ]
    },
    {
      text: 'Frameworks',
      collapsed: false,
      items: [

        {
          text: 'Community Management',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/community-management/overview' },
            { text: 'Discord', link: '/community-management/discord' },
            { text: 'Twitter', link: '/community-management/twitter' },
          ]
        },
        {
          text: 'Awareness',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/awareness/overview' },
            { text: 'Core Awareness Principles', link: '/awareness/core-awareness-principles' },
            { text: 'Understanding Threat Vectors', link: '/awareness/understanding-threat-vectors' },
          ]
        },
      ]
    },
    {
      text: 'Contributing',
      collapsed: false,
      items: [
        { text: 'How to Contribute', link: '/contribute/contributing' },
      ]
    }
  ],
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/security-alliance/frameworks',
    },
    {
      icon: 'discord',
      link: 'https://discord.com/invite/securityalliance',
    },
  ],
  editLink: {
    pattern: 'https://github.com/security-alliance/frameworks/edit/develop/src/:path',
    text: 'Suggest changes to this page'
  }
})
