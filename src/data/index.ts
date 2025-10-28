import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { TelegramIcon } from '@/components/icons/telegram'
import { GitHubActionsIcon } from '@/components/icons/tags/githubActions'
import { ZomatoIcon } from '@/components/icons/tags/zomato'
import { UberIcon } from '@/components/icons/tags/uber'
import { PrometheusIcon } from '@/components/icons/tags/prometheus'
import { AWSEKSIcon } from '@/components/icons/tags/awsEKS'
import { LinuxIcon } from '@/components/icons/tags/linux'
import { JenkinsIcon } from '@/components/icons/tags/jenkins'
import { KubernetesIcon } from '@/components/icons/tags/kubernetes'
import { DockerIcon } from '@/components/icons/tags/docker'
import { AzureIcon } from '@/components/icons/tags/azure'
import { AWSIcon } from '@/components/icons/tags/aws'
import { TerraformIcon } from '@/components/icons/tags/terraform'
import { AnsibleIcon } from '@/components/icons/tags/ansible'
import { AzureDevOpsIcon } from '@/components/icons/tags/azureDevOps'
import { DevOpsIcon } from '@/components/icons/tags/devops'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Sanjay Mewada',
  initials: 'SM'
}

export const ABOUT = {
  title: `DevOps Engineer focused on automation, scalability, and cloud infrastructure. Based in Hyderabad, India 🇮🇳`,
  description: `I'm a passionate DevOps Engineer on a mission to automate everything and build highly scalable cloud infrastructures. With a strong focus on cloud computing, automation, and DevOps best practices, I enjoy solving complex infrastructure challenges, improving CI/CD pipelines, and making systems more reliable and observable.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/sanjaymewada',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sanjaymewada-',
    icon: LinkedInIcon
  },
  {
    title: 'Telegram',
    url: 'https://t.me/',
    icon: TelegramIcon
  },
  {
    title: 'Resume',
    url: 'https://cv-mocha-one.vercel.app',
    icon: FileTextIcon
  },
  {
    title: 'Email',
    url: 'mailto:sanjaymewada786@gmail.com',
    icon: MailIcon
  },
  {
    title: 'Other Links',
    url: '',
    icon: LinkIcon
  }
]

export const CAREER = [
  {
    company: 'ICS Industrial Automation Pvt Ltd',
    link: 'https://www.ics-india.co.in',
    badges: ['In-Office'],
    jobs: [
      {
        title: 'IT-Executive',
        start: 'Mar, 2023',
        end: 'Present',
        description: [
          'Progressed from Server/Network support to full Cloud DevOps responsibilities, mastering automation, containerization, and monitoring.',
          'Worked as a Server Administrator and IT Support, managing Linux/Windows servers, IIS, and troubleshooting issues to ensure high system uptime.',
          'Skilled in server management (ADDS, DNS, IIS), virtualization (VMware, Hyper-V), and cloud technologies (AWS).',
          'Automated cloud infrastructure provisioning using Terraform and Ansible across AWS environments, reducing manual efforts.',
          'Implemented CI/CD pipelines for both on-premises and cloud environments using Jenkins and AWS DevOps, accelerating software delivery.',
          'Managed Kubernetes clusters and containerized applications with Docker and Helm charts.',
          'Monitored and optimized system performance with Prometheus, Grafana.',
          'Collaborated with cross-functional teams to enhance deployment workflows, incident response, and IT operations.',
          'Ensured cloud resources are secure, compliant, and cost-efficient, integrating IAM, VPC, and Auto Scaling best practices.'
        ]
      }
    ]
  },
  {
    company: 'Ecom-Express',
    link: 'https://www.ecomexpress.in',
    badges: ['In-Office'],
    jobs: [
      {
        title: 'Desktop Support Engineer',
        start: 'Aug, 2022',
        end: 'Nov, 2022',
        description: [
          'Delivered L1/L2 support for desktops, laptops, printers, and networking devices.',
          'Managed OS deployment, software installation, patching, and Active Directory user management.',
          'Resolved hardware and software issues promptly, improving end-user productivity.',
          'Maintained IT asset inventory and supported CCTV and biometric access systems.',
          'Implemented IT policies and ensured compliance with security standards.'
        ]
      }
    ]
  },
  {
    company: 'Indian Institute of Management (IIM) – Indore',
    link: 'https://www.iimidr.ac.in',
    badges: ['In-Office'],
    jobs: [
      {
        title: 'Network Support Engineer',
        start: 'Feb, 2020',
        end: 'Oct, 2021',
        description: [
          'Monitored and managed LAN/WAN, VLANs, VPNs, and firewalls, ensuring secure and reliable connectivity.',
          'Configured and troubleshot Cisco routers and switches, improving network performance.',
          'Supported wireless networks to enhance academic and administrative uptime.',
          'Documented incidents, performed Root Cause Analysis, and implemented preventive measures to strengthen network reliability.',
          'Collaborated with IT teams to optimize network operations and maintain compliance.'
        ]
      }
    ]
  }
]

const TAGS = {
  GITHUB: { name: 'GitHub', icon: GitHubIcon },
  GITHUB_ACTIONS: { name: 'GitHub Actions', icon: GitHubActionsIcon },
  ZOMATO: { name: 'Zomato', icon: ZomatoIcon },
  UBER: { name: 'Uber', icon: UberIcon },
  PROMETHEUS: { name: 'Prometheus', icon: PrometheusIcon },
  AWS_EKS: { name: 'AWS EKS', icon: AWSEKSIcon },
  LINUX: { name: 'Linux', icon: LinuxIcon },
  JENKINS: { name: 'Jenkins', icon: JenkinsIcon },
  KUBERNETES: { name: 'Kubernetes', icon: KubernetesIcon },
  DOCKER: { name: 'Docker', icon: DockerIcon },
  AZURE: { name: 'Azure', icon: AzureIcon },
  AWS: { name: 'AWS', icon: AWSIcon },
  TERRAFORM: { name: 'Terraform', icon: TerraformIcon },
  ANSIBLE: { name: 'Ansible', icon: AnsibleIcon },
  AZURE_DEVOPS: { name: 'Azure DevOps', icon: AzureDevOpsIcon },
  DEVOPS: { name: 'DevOps', icon: DevOpsIcon }
}

export const PROJECTS = [
  {
    title: 'Static Website Hosting with S3, CloudFront & Route 53',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.KUBERNETES, TAGS.LINUX, TAGS.AZURE, TAGS.JENKINS, TAGS.DEVOPS],
    description: 'Deployed and hosted a fully static website using Amazon S3, integrated with CloudFront for global content delivery and Route 53 for DNS management. Configured a custom domain with SSL/TLS (HTTPS).',
    link: {
      github: 'https://github.com/sanjaymewada',
      preview: 'https://github.com/sanjaymewada'
    }
  },
  {
    title: 'Highly Available Web App with Auto Scaling & Load Balancer',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.LINUX, TAGS.AZURE],
    description: 'Launched a scalable web application using EC2 instances behind an Application Load Balancer (ALB). Implemented Auto Scaling Groups for dynamic resource management. Integrated Route 53 for DNS, CloudWatch for monitoring, and SNS for alerts.',
    link: {
      github: 'https://github.com/sanjaymewada',
      preview: 'https://github.com/sanjaymewada'
    }
  },
  {
    title: 'Automated EC2 Infrastructure with CloudFormation',
    tags: [TAGS.AWS, TAGS.LINUX, TAGS.AZURE],
    description: 'Created a single CloudFormation YAML template to launch both Linux and Windows EC2 instances. Integrated ALB and Auto Scaling for high availability. Used User Data to auto-install Docker on Linux instances and configured IAM roles for secure access.',
    link: {
      github: 'https://github.com/sanjaymewada',
      preview: 'https://github.com/sanjaymewada'
    }
  },
  {
    title: 'CI/CD with AWS CodePipeline (Fully Managed Deployment)',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.KUBERNETES, TAGS.LINUX, TAGS.AZURE, TAGS.DEVOPS],
    description: 'Built a fully managed CI/CD pipeline using AWS CodePipeline, integrating CodeCommit, CodeBuild, and CodeDeploy to deploy applications on EC2 instances. Implemented build, test, and deployment stages with rollback support.',
    link: {
      github: 'https://github.com/sanjaymewada',
      preview: 'https://github.com/sanjaymewada'
    }
  },
  {
    title: 'CI/CD full DevSecOps CodePipeline (Fully automated Deployment)',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.KUBERNETES, TAGS.LINUX, TAGS.AZURE, TAGS.JENKINS, TAGS.DEVOPS],
    description: 'Built a full DevSecOps pipeline combining CI (Jenkins), containerization (Docker), security scans (SonarQube, Trivy), infrastructure as code (Terraform, Ansible), and continuous delivery with ArgoCD and Helm for monitoring.',
    link: {
      github: 'https://github.com/sanjaymewada',
      preview: 'https://github.com/sanjaymewada'
    }
  },
  {
    title: 'Lambda Scheduled EC2 Start/Stop Automation',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.KUBERNETES, TAGS.LINUX, TAGS.AZURE, TAGS.JENKINS, TAGS.DEVOPS],
    description: 'Automated scheduled start/stop of EC2 instances using AWS Lambda (Python), triggered by CloudWatch Events to reduce costs during non-peak hours.',
    link: {
      github: 'https://github.com/sanjaymewada',
      preview: 'https://github.com/sanjaymewada'
    }
  },
  {
    title: 'Sample Flask App Full Pipeline',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.KUBERNETES, TAGS.LINUX, TAGS.AZURE, TAGS.JENKINS, TAGS.DEVOPS],
    description: 'Deployed a Python Flask project on kubeadm using a Jenkins CI pipeline and ArgoCD for continuous delivery. Implemented monitoring and quality checks as part of the pipeline.',
    link: {
      github: 'https://github.com/sanjaymewada/fullpipeline',
      preview: 'https://github.com/sanjaymewada'
    }
  },
  {
    title: 'Prescripto - Doctor Appointment Web App',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.KUBERNETES, TAGS.LINUX, TAGS.AZURE, TAGS.JENKINS, TAGS.DEVOPS],
    description: 'Created Dockerfile and docker-compose and ran the application in Docker Desktop for local development and testing.',
    link: {
      github: 'https://github.com/sanjaymewada/prescripto_full-stack_doctor_appointment_app.git',
      preview: 'https://github.com/sanjaymewada'
    }
  },
  {
    title: 'Expenses-Tracker-WebApp',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.KUBERNETES, TAGS.LINUX, TAGS.AZURE, TAGS.JENKINS, TAGS.DEVOPS],
    description: 'Forked the project and ran it in a local Docker Desktop environment for evaluation and development.',
    link: {
      github: 'https://github.com/sanjaymewada/Expenses-Tracker-WebApp.git',
      preview: 'https://github.com/sanjaymewada'
    }
  },
  {
    title: 'Two-tier-flask-app',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.KUBERNETES, TAGS.LINUX, TAGS.AZURE, TAGS.DEVOPS],
    description: 'Deployed a two-tier Python Flask application using Docker and Docker Compose for container orchestration and local testing.',
    link: {
      github: 'https://github.com/sanjaymewada/two-tier-flask-app.git',
      preview: 'https://github.com/sanjaymewada'
    }
  }
]
