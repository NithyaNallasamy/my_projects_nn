In Projects 1 and 2, you mastered containerization and multi-container orchestration. Now, we step up to Cloud Infrastructure Provisioning. Instead of clicking around the AWS Management Console to launch servers, security groups, and SSH keys manually, we will use Terraform to define, provision, and manage complete AWS cloud infrastructure declaratively using HashiCorp Configuration Language (HCL).

Cloud Infrastructure Provisioning
A modular, production-ready Infrastructure as Code (IaC) implementation using **HashiCorp Terraform** to provision secure, reproducible AWS cloud infrastructure with automated container runtime bootstrapping.


Repository Structure
phase3-project3/
├── main.tf          # Core infrastructure resources (EC2, SG, AMI, TLS Keys)
├── variables.tf     # Input variables (AWS region, instance types)
├── outputs.tf       # Exported outputs (Public IP, SSH connect command)
├── .gitignore       # Prevents state files and private keys from Git commit
└── README.md        # Architecture and execution documentation

