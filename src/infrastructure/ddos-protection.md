# DDoS protection
Distributed Denial of Service (DDoS) attacks are a pervasive and persistent threat in the digital landscape. These attacks involve overwhelming a target system or network with a very large volume of traffic, rendering it inaccessible to legitimate users.

- **AWS:**
    1. **AWS Shield Standard and AWS Shield Advanced:**
        1. *Shield Standard:* Provides basic DDoS protection for all AWS customers at no extra cost. It defends against common and most DDoS attacks.
        2. *Shield Advanced:* Offers enhanced DDoS protection with additional features such as real-time attack visibility, protection against larger and more sophisticated attacks, and access to AWS DDoS Response Team (DRT) for incident support.
    2. **Amazon CloudFront and AWS WAF:**
        1. *Amazon CloudFront*: AWS's content delivery network (CDN) provides protection against DDoS attacks by distributing traffic across multiple global locations, mitigating attacks closer to the source.
        2. *AWS Web Application Firewall (WAF)*: Combining CloudFront with AWS WAF allows for protection against application layer DDoS attacks and automated mitigation of known threats.
- **Azure:**
    1. **Azure DDoS Protection Basic and Standard:**
        1. *DDoS Protection Basic*: Automatically included for all Azure resources at no additional cost. Provides protection against common network and transport layer DDoS attacks.
        2. *DDoS Protection Standard*:Offers more advanced protection against volumetric attacks, application layer attacks, and state-exhaustion attacks. Provides real-time monitoring and mitigation.
    2. **Azure Front Door and Azure Application Gateway with WAF:**
        1. *Azure Front Door*: Acts as a global application delivery and protection service, offering DDoS mitigation capabilities by distributing traffic across Azure regions.
        2. *Azure Application Gateway with WAF*: Combines DDoS protection with application layer security by integrating with Azure Web Application Firewall (WAF) to protect against various attacks.
- **GCP:**
    1. **Google Cloud Armor:** Google Cloud Armor is GCP's security offering that provides DDoS protection and web application firewall (WAF) capabilities. It offers both global and regional protections against DDoS attacks.
    2. **Load Balancing:** GCP's load balancers, such as Google Cloud Load Balancing and Google Cloud Armor's global HTTP(S) load balancing, help distribute traffic across multiple locations and can mitigate DDoS attacks closer to the source.
    3. **VPC Flow Logs and Stackdriver Logging:** GCP provides tools like VPC Flow Logs and Stackdriver Logging for monitoring and logging traffic patterns, helping to detect and respond to DDoS attacks effectively.

Each cloud provider offers a set of DDoS protection solutions that can be tailored to your specific needs. It's important to assess your infrastructure's requirements, consider factors like traffic volume and application type, and choose the appropriate DDoS protection level accordingly.

- **External DDoS protection providers:**
Outside of the cloud providers mentioned above, there are service providers that provide platforms which includes build, deploy, and serverless backend services for web applications and dynamic websites. These providers may or may not include DDoS protection as part of their suit. In this case, it would be recommended to use an external DDoS protection service such as Cloudflare.

# DDoS Prevention and Mitigation

These days, anyone with access to Google can buy a DDoS attack for a few hundred dollars. DDoS attacks are most commonly used to try extracting a ransom from companies by making their websites unavailable, but DDoS attacks are also sometimes used for political reasons and more.
DDoS attacks are very common, and they are [targeted against services all across the globe](https://horizon.netscout.com/).
These attacks take down websites through sheer brute force, with Cloudflare [observing](https://blog.cloudflare.com/ddos-threat-report-2023-q3) the average attack reaching over 30 million requests per second. Knowing how to prevent and mitigate them is critical to maintaining stable operations.

---

---

# What is a DDoS attack?

To put it briefly, a DDoS (Distributed Denial of Service) attack is any attack where a hacker disrupts your services by overwhelming it with traffic from proxies or compromised hosts around the world.

![*The distribution of traffic from the DDoS attack*](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/592097ea-2360-4c1a-b970-49f571b7511a/Screen_Shot_2023-12-15_at_13.14.18.png)

*The distribution of traffic from the DDoS attack*

![*A DDoS attack carried out over a period of a few minutes*](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/cbc1993c-79d7-43d0-a27d-ac1940919198/Screen_Shot_2023-12-15_at_13.13.35.png)

*A DDoS attack carried out over a period of a few minutes*

DDoS attacks can target various parts of your system:

- A Layer 3/4 attack focuses primarily on overwhelming your infrastructure through raw ICMP/TCP/UDP traffic
- A Layer 7 attack focuses on specific weaknesses in the software you’re running, whether that’s your web server, or your specific web application

Most commercial systems are not designed to support this volume of traffic, and so specialized solutions are required.

# Content Delivery Networks

The first step to preventing a potential DDoS attack is to use a Content Delivery Network (CDN). While commercial servers for rent might offer anywhere from 500 Mbps to 10 Gbps of bandwidth, CDNs operate infrastructure all around the world in data centers near Internet Service Providers (ISP) in order to deliver local caches of data, and are often capable of handling over 100 Tbps of traffic. This means that they can both serve content to your end users quicker, and also absorb large volumes of traffic easier by for example blocking traffic near the sources of the attack before they move across the global network.

# **DDoS protection at Service Providers**

There are service providers that provide platforms which includes build, deploy, and serverless backend services for web applications and dynamic websites.

![Vercel.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/3403943b-36b7-436d-8c1a-4d6b7a349af1/Vercel.png)

Vercel provide DDoS Protection against Layer 3 & Layer 4 attacks through their [Vercel Firewall service](https://vercel.com/docs/security/ddos-mitigation). Vercel also provide [official integrations](https://vercel.com/docs/integrations/cloudflare) into external services such as Cloudflare.

![Netlify_Logo.svg](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/bcd08de0-8b2d-4c06-a763-63b1fa02c6cb/Netlify_Logo.svg)

Netlify provide active DDoS mitigation by monitoring for traffic pattern anomalies and spikes according to their [security page](https://www.netlify.com/security/).

There are many other similar providers, which may or may not include various levels of DDoS protection as part of their suit. In the event that you deem that your service provider does not provide sufficient DDoS protection, it would be recommended to use an external DDoS protection service such as Cloudflare.

# External DDoS protection providers

Those deploying services on infrastructure managed by themselves, either on cloud platforms or in their own datacenter, will also need to think about DDoS protection. Each cloud provider offers a set of DDoS protection solutions that can be tailored to your specific needs. It's important to assess your infrastructure's requirements, consider factors like traffic volume and application type, and choose the appropriate DDoS protection level accordingly.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/08505242-65f1-4396-901a-871f8e3d0547/Untitled.png)

1. **AWS Shield Standard and AWS Shield Advanced:**
    1. *Shield Standard:* Provides basic DDoS protection for all AWS customers at no extra cost. It defends against common and most DDoS attacks.
    2. *Shield Advanced:* Offers enhanced DDoS protection with additional features such as real-time attack visibility, protection against larger and more sophisticated attacks, and access to AWS DDoS Response Team (DRT) for incident support.
2. **Amazon CloudFront and AWS WAF:**
    1. *Amazon CloudFront*: AWS's content delivery network (CDN) provides protection against DDoS attacks by distributing traffic across multiple global locations, mitigating attacks closer to the source.
    2. *AWS Web Application Firewall (WAF)*: Combining CloudFront with AWS WAF allows for protection against application layer DDoS attacks and automated mitigation of known threats.

![kisspng-microsoft-azure-cloud-computing-microsoft-corporat-try-for-free-scaleout-software-5b6ab648b1b3f8.2998507915337201367279.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/e945c87d-a404-4be6-8cee-e0102db1146a/kisspng-microsoft-azure-cloud-computing-microsoft-corporat-try-for-free-scaleout-software-5b6ab648b1b3f8.2998507915337201367279.png)

1. **Azure DDoS Protection Basic and Standard:**
    1. *DDoS Protection Basic*: Automatically included for all Azure resources at no additional cost. Provides protection against common network and transport layer DDoS attacks.
    2. *DDoS Protection Standard*:Offers more advanced protection against volumetric attacks, application layer attacks, and state-exhaustion attacks. Provides real-time monitoring and mitigation.
2. **Azure Front Door and Azure Application Gateway with WAF:**
    1. *Azure Front Door*: Acts as a global application delivery and protection service, offering DDoS mitigation capabilities by distributing traffic across Azure regions.
    2. *Azure Application Gateway with WAF*: Combines DDoS protection with application layer security by integrating with Azure Web Application Firewall (WAF) to protect against various attacks.

![kisspng-google-cloud-platform-cloud-computing-amazon-web-s-cloud-computing-5ad2ea752d46d5.2243683715237720211855.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/e20e2e31-dd39-4caf-9ee8-3e2ac968af59/kisspng-google-cloud-platform-cloud-computing-amazon-web-s-cloud-computing-5ad2ea752d46d5.2243683715237720211855.png)

1. **Google Cloud Armor:** Google Cloud Armor is GCP's security offering that provides DDoS protection and web application firewall (WAF) capabilities. It offers both global and regional protections against DDoS attacks.
2. **Load Balancing:** GCP's load balancers, such as Google Cloud Load Balancing and Google Cloud Armor's global HTTP(S) load balancing, help distribute traffic across multiple locations and can mitigate DDoS attacks closer to the source.
3. **VPC Flow Logs and Stackdriver Logging:** GCP provides tools like VPC Flow Logs and Stackdriver Logging for monitoring and logging traffic patterns, helping to detect and respond to DDoS attacks effectively.

 

# DDoS Protection “Conf & Prep”

Practice makes perfect, and as such it’s important that you spend some time learning your DDoS protection system. Depending on the provider, you may have options on what to do as mitigation when an attack is detected, thresholds for detection, and you may have the ability to manually initiate “under attack” mode if the attack is not automatically detected. When an attack takes place, and it is not automatically taken care of by the DDoS protection system, it is natural to become stressed. By going over the steps required to mitigate an attack at least once before the attack you are much better prepared for what you need to do, and your service is likely to recovery quicker.