A production-grade cloud security and web infrastructure implementation demonstrating how to map custom domain names, configure public DNS records, establish TLS/SSL edge termination on Nginx, and automate end-to-end certificate lifecycles using the ACME protocol and Let's Encrypt.

Now that our Nginx reverse proxy and load balancer are serving traffic over plain HTTP (Port 80), we will transform your deployment into an enterprise-grade, secure web portal.

In this project, I will map a domain name to your AWS EC2 instance , configure DNS A records , obtain a free SSL/TLS certificate via Let's Encrypt (using Certbot) , and configure automatic HTTP-to-HTTPS redirects on Nginx.

