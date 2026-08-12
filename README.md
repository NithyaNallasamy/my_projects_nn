Infrastructure & DevOps Journey: Phase 1 & 2 Summary
📜 Complete Flow of Accomplishments

[ PHASE 1: Shell & Linux Foundation ]
  ├── 1. CLI Performance Stats  ──► Native telemetry (/proc, awk, top) across EC2 fleets
  ├── 2. Log Archive Utility    ──► Automated tar.gz rotation, timestamps & audit ledger
  ├── 3. Nginx Log Analyser     ──► POSIX stream piping (sort | uniq) for top IPs/URLs
  ├── 4. Website Uptime Monitor ──► Sub-second HTTP latency & status code prober
  └── 5. Log Security Daemon    ──► Fail2ban-light iptables brute-force defense
                                      │
                                      ▼
[ PHASE 2: Cloud Infrastructure & Networking Gateway ]
  ├── 1. SSH Server Hardening   ──► Port 2222, Ed25519 keys, disabled root/passwords, UFW
  ├── 2. Static Site Engine     ──► Nginx virtual host, deploy ACLs, static asset caching
  ├── 3. Reverse Proxy & LB     ──► PM2 Node.js apps, round-robin load balancing & failover
  └── 4. Custom Domain & SSL    ──► DNS A-record, ACME HTTP-01 challenge, Certbot auto-renew
                                      │
                                      ▼
[ PHASE 3: Cloud-Native Containerization & IaC (Up Next!) ]

Phase 1 vs. Phase 2 Architecture Comparison

| Metric / Dimension   | Phase 1: Linux & Scripting                             | Phase 2: Cloud Infrastructure & Security                 |
|----------------------|--------------------------------------------------------|----------------------------------------------------------|
| Core Goal            | OS internals, telemetry & stream processing            | Cloud provisioning, gateway routing & transport security |
| Primary Stack        | Bash, POSIX Utilities (awk, grep, tar, curl, iptables) | AWS EC2, Ubuntu, Nginx, OpenSSH, UFW, Certbot (ACME)     |
| Access Model         | Local shell / execution loops over SSH streams         | Custom Port 2222, non-root deploy user, Ed25519 key-only |
| Traffic Direction    | Internal monitoring & analytical egress                | External HTTP (80) & HTTPS (443) ingress gateway         |
| Footprint Constraint | Zero-dependency, 0 MB persistent RAM overhead          | Sub-millisecond proxy latency, zero-touch SSL renewals   |


Summary Profiles (CDI Framework)
Phase 1: Linux, Scripting & Networking 

Context: Operating across heterogeneous, resource-constrained Linux nodes without installing bloated third-party APM/monitoring agents.

Decision: Leveraged native POSIX Bash pipelines (awk, sort, uniq, tar, curl, iptables) for telemetry, log rotation, endpoint probing,
and threat mitigation.

Impact: Delivered 0 MB background RAM overhead , <1s diagnostic sweep times across dynamic EC2 fleets , 85%+ log compression ratios , and instant, automated brute-force threat response.

Phase 2: Infrastructure, Networking & Cloud 

Context: Exposing public cloud workloads securely on AWS EC2 without leaving standard SSH vectors open, dropping client requests under failure, or paying for commercial SSL certificates.

Decision: Hardened OpenSSH on Port 2222 with non-root deploy user ; deployed Nginx as an edge Reverse Proxy & Round-Robin Load Balancer over PM2 Node.js apps ; and automated domain mapping with Let's Encrypt TLS via Certbot (ACME).

Impact: Reduced brute-force probe attempts by >99% ; achieved zero-downtime failover for backend apps ; and established 100% encrypted HTTPS traffic with 0-touch certificate renewals.


