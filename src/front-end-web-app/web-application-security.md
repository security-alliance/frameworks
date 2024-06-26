# Web application security
You’re most likely providing a front-end (web application) for your users to interact with your web3 protocol. While less common recently, web application vulnerabilities have been exploited in the past on web3 projects to steal user funds (see [[1]](https://hackernoon.com/how-one-hacker-stole-thousands-of-dollars-worth-of-cryptocurrency-with-a-classic-code-injection-a3aba5d2bff0)). 

Consider following these steps:

- Use a popular, battle-tested web application framework such as React (see [useDApp](https://usedapp.io/)), Angular (TypeScript)or AngularJS, Vue, ExpressJS, etc.
- Get familiar with common web application vulnerabilities such as:
    - Cross-Site Scripting (XSS)
    - Cross-Site Request Forgery (CSRF)
    - Insecure Direct Object Reference (IDOR)
    
    Refer to the [OWASP top 10](https://owasp.org/www-project-top-ten/) for a comprehensive list
    
- Limit the introduction of custom components in the framework you’re relying on.
    - If you do, ensure the custom code undergoes internal and external security testing
- Refer to the [Infrastructure/DDoS protection](https://www.notion.so/Security-Frameworks-Internal-Homepage-legacy-d8740d3342004cf7b1b467688fd85e87?pvs=21) section of this document for insights on ensuring high-availability of your protocol’s front-end
- Lock-down access to the associated back-end, if any (e.g. S3 bucket)
- Consider deploying other versions of your front-end of IPFS