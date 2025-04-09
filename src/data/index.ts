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
  name: 'Harshhaa',
  initials: 'HR'
}

export const ABOUT = {
  title: `DevOps Engineer focused on automation, scalability, and cloud infrastructure. Based in Hyderabad, India 🇮🇳`,
  description: `I'm a passionate DevOps Engineer on a mission to automate everything and build highly scalable cloud infrastructures. With a strong focus on cloud computing, automation, and DevOps best practices, I specialize in streamlining deployments, optimizing workflows, and maintaining high-performance infrastructure. I work on real-time DevOps and cloud projects involving AWS, Azure, Terraform, Kubernetes, and Docker. I also develop automation scripts for tool installations and configurations, create comprehensive interview preparation content and cheat sheets, design curated learning paths for engineers at all levels, and foster collaborative spaces for open-source contributions and knowledge sharing.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/NotHarshhaa',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/harshhaa-vardhan-reddy',
    icon: LinkedInIcon
  },
  {
    title: 'Telegram',
    url: 'https://t.me/notharshhaa',
    icon: TelegramIcon
  },
  {
    title: 'Resume',
    url: 'https://cv.notharshhaa.site',
    icon: FileTextIcon
  },
  {
    title: 'Email',
    url: 'mailto:harshhaa03@gmail.com',
    icon: MailIcon
  },
  {
    title: 'Other Links',
    url: 'https://link.notharshhaa.site',
    icon: LinkIcon
  }
]

export const CAREER = [
  {
    company: 'DEV Community',
    link: 'https://dev.to/notharshhaa',
    badges: ['Remote'],
    jobs: [
      {
        title: 'DevOps/Cloud Content Blogger',
        start: 'Aug, 2023',
        end: 'Present',
        description: [
          'Published technical blogs on DevOps, cloud platforms, and industry best practices.',
          'Engaged with the tech community through informative and practical content.',
          'Focused on delivering value through real-world insights and tutorials.'
        ]
      }
    ]
  },
  {
    company: 'Hashnode',
    link: 'https://hashnode.com/@prodevopsguy',
    badges: ['Remote'],
    jobs: [
      {
        title: 'DevOps/Cloud Content Blogger',
        start: 'Mar, 2022',
        end: 'Present',
        description: [
          'Authored blogs on DevOps, cloud computing, and automation.',
          'Shared technical insights and best practices with the developer community.',
          'Contributed to knowledge sharing and community growth through consistent blogging.'
        ]
      }
    ]
  },
  {
    company: 'Tata Consultancy Services',
    link: 'https://www.tcs.com',
    badges: ['Hybrid'],
    jobs: [
      {
        title: 'DevOps Engineer',
        start: 'Mar, 2023',
        end: 'Present',
        description: [
          'Designed, implemented, and maintained CI/CD pipelines to automate build, test, and deployment processes.',
          'Ensured fast and reliable application delivery through streamlined DevOps practices.',
          'Deployed applications to AWS and Azure via automated pipelines.',
          'Reduced manual intervention and improved deployment consistency.'
        ]
      }
    ]
  },
  {
    company: 'IBM',
    link: 'https://www.ibm.com',
    badges: ['Remote'],
    jobs: [
      {
        title: 'Cloud DevOps Engineer',
        start: 'Dec, 2021',
        end: 'Feb, 2023',
        description: [
          'Provisioned AWS resources using Terraform with Infrastructure-as-Code (IaC) practices.',
          'Managed and containerized microservices using Docker.',
          'Optimized Docker images and uploaded to AWS ECR.',
          'Integrated containers with Kubernetes for scalable deployments.'
        ]
      }
    ]
  },
  {
    company: 'JNTUH',
    link: 'https://jntuh.ac.in',
    badges: ['OnCampus'],
    jobs: [
      {
        title: 'Bachelor of Technology',
        start: 'Jul, 2015',
        end: 'Jun, 2020',
        description: [
          'Graduated with a B.Tech degree, gaining a strong foundation in engineering and problem-solving.'
        ]
      }
    ]
  }
];

const TAGS = {
  GITHUB: {
    name: 'GitHub',
    icon: GitHubIcon
  },
  GITHUB_ACTIONS: {
    name: 'GitHub Actions',
    icon: GitHubActionsIcon
  },
  ZOMATO: {
    name: 'Zomato',
    icon: ZomatoIcon
  },
  UBER: {
    name: 'Uber',
    icon: UberIcon
  },
  PROMETHEUS: {
    name: 'Prometheus',
    icon: PrometheusIcon
  },
  AWS_EKS: {
    name: 'AWS EKS',
    icon: AWSEKSIcon
  },
  LINUX: {
    name: 'Linux',
    icon: LinuxIcon
  },
  JENKINS: {
    name: 'Jenkins',
    icon: JenkinsIcon
  },
  KUBERNETES: {
    name: 'Kubernetes',
    icon: KubernetesIcon
  },
  DOCKER: {
    name: 'Docker',
    icon: DockerIcon
  },
  AZURE: {
    name: 'Azure',
    icon: AzureIcon
  },
  AWS: {
    name: 'AWS',
    icon: AWSIcon
  },
  TERRAFORM: {
    name: 'Terraform',
    icon: TerraformIcon
  },
  ANSIBLE: {
    name: 'Ansible',
    icon: AnsibleIcon
  },
  AZURE_DEVOPS: {
    name: 'Azure DevOps',
    icon: AzureDevOpsIcon
  },
  DEVOPS: {
    name: 'DevOps',
    icon: DevOpsIcon
  }
}

export const PROJECTS = [
  {
    title: ' Real-Time DevOps Projects Hub',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.KUBERNETES, TAGS.LINUX, TAGS.AZURE, TAGS.JENKINS, TAGS.DEVOPS],
    description: 'A dedicated website featuring real-time DevOps & Cloud projects, from beginner to production-level. Perfect to learn by doing whether its CICD, Kubernetes, Terraform, or monitoring tools, it’s all here!',
    link: {
      github: 'https://github.com/NotHarshhaa/projects.prodevopsguytech.com',
      preview: 'https://projects.prodevopsguytech.com'
    },
  },
  {
    title: 'Ultimate DevOps & Cloud Docs Portal',
    tags: [TAGS.AWS, TAGS.AZURE, TAGS.DEVOPS],
    description: 'Struggling to find high-quality learning content? Dive into our portal with 900+ handpicked resources, guides, and docs for AWS, Azure, and DevOps. Perfect for engineers at all levels! and everything you need in one place, accessible with a single click!',
    link: {
      github: 'https://gitlab.com/NotHarshhaa/docs-portal',
      preview: 'https://docs.prodevopsguytech.com'
    },
  },
  {
    title: 'DevOps Repositories Central Hub',
    tags: [TAGS.GITHUB, TAGS.DEVOPS],
    description: 'All the major repositories you’ll ever need — from automation scripts to infra as code to interview prep — curated and organized to help you learn, implement, and grow as a DevOps professional.',
    link: {
      github: 'https://github.com/NotHarshhaa/github-repo-status-tracker',
      preview: 'https://repos.prodevopsguytech.com',
    },
  },
  {
    title: 'AWS Terraform Workshop',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DEVOPS],
    description: 'Beginner-friendly guide to setting up AWS infrastructure using Terraform.',
    link: {
      github: 'https://github.com/NotHarshhaa/AWS-Terraform-Workshop',
    },
  },
  {
    title: 'ECR-ECS GitHub Deploy',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.GITHUB_ACTIONS],
    description: 'Automated deployment of a Python app to AWS ECS using GitHub Actions, Docker, and Terraform.',
    link: {
      github: 'https://github.com/NotHarshhaa/tf-ecr-ecs-gh-deploy',
    },
  },
  {
    title: 'EKS Cluster Terraform',
    tags: [TAGS.AWS_EKS, TAGS.TERRAFORM, TAGS.KUBERNETES],
    description: 'Terraform-based provisioning of an Amazon EKS Cluster for Kubernetes deployments.',
    link: {
      github: 'https://github.com/NotHarshhaa/eks-cluster-terraform',
    },
  },
  {
    title: 'CI/CD EKS with GitHub Actions',
    tags: [TAGS.KUBERNETES, TAGS.GITHUB_ACTIONS, TAGS.TERRAFORM, TAGS.AWS_EKS],
    description: 'CI/CD pipeline for deploying a Node.js app on Amazon EKS using GitHub Actions, Terraform, and Kubernetes.',
    link: {
      github: 'https://github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions',
    },
  },
  {
    title: 'DevOps Tools',
    tags: [TAGS.DEVOPS, TAGS.LINUX],
    description: 'Collection of essential DevOps tools for development, deployment, monitoring, security, and automation.',
    link: {
      github: 'https://github.com/NotHarshhaa/devops-tools',
    },
  },
  {
    title: 'Certified Kubernetes Administrator',
    tags: [TAGS.KUBERNETES],
    description: 'Master Kubernetes from scratch and prepare for the CKA certification.',
    link: {
      github: 'https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator',
    },
  },
  {
    title: 'Kubernetes Dashboard',
    tags: [TAGS.KUBERNETES, TAGS.PROMETHEUS],
    description: 'Kubernetes dashboard with integrated health checks and Trivy scanning.',
    link: {
      github: 'https://github.com/NotHarshhaa/kubernetes-dashboard',
    },
  },
  {
    title: 'DevOps Projects Collection',
    tags: [TAGS.DEVOPS],
    description: 'Real-world DevOps projects from beginner to advanced levels.',
    link: {
      github: 'https://github.com/NotHarshhaa/DevOps-Projects',
    },
  },
  {
    title: 'Uber Clone (DevSecOps)',
    tags: [TAGS.UBER, TAGS.DEVOPS],
    description: 'Full-stack Uber-like transportation application with DevSecOps integration.',
    link: {
      github: 'https://github.com/NotHarshhaa/uber-clone',
    },
  },
  {
    title: 'Kubernetes Projects Learning',
    tags: [TAGS.KUBERNETES],
    description: 'Practical Kubernetes projects to master deployment, management, and scaling of containerized applications.',
    link: {
      github: 'https://github.com/NotHarshhaa/kubernetes-projects-learning',
    },
  },
  {
    title: 'AWS EKS Terraform',
    tags: [TAGS.AWS_EKS, TAGS.TERRAFORM],
    description: 'Provision Amazon EKS Cluster on AWS using Terraform.',
    link: {
      github: 'https://github.com/NotHarshhaa/AWS-EKS_Terraform',
    },
  },
  {
    title: 'Super Mario on Kubernetes',
    tags: [TAGS.KUBERNETES, TAGS.TERRAFORM, TAGS.AWS_EKS],
    description: 'Deploy Super Mario game on Amazon EKS using Terraform.',
    link: {
      github: 'https://github.com/NotHarshhaa/Deployment-of-super-Mario-on-Kubernetes-using-terraform',
    },
  },
  {
    title: 'Cloud Native Monitoring App',
    tags: [TAGS.DOCKER, TAGS.AWS_EKS],
    description: 'Monitoring app built with Python, containerized with Docker, and deployed to EKS.',
    link: {
      github: 'https://github.com/NotHarshhaa/cloud-native-monitoring-app',
    },
  },
  {
    title: 'Zomato Clone (DevSecOps)',
    tags: [TAGS.ZOMATO, TAGS.DEVOPS],
    description: 'Full-stack food delivery app inspired by Zomato with DevSecOps integration.',
    link: {
      github: 'https://github.com/NotHarshhaa/Zomato-Clone',
    },
  },
  {
    title: 'Learning Prometheus',
    tags: [TAGS.PROMETHEUS, TAGS.KUBERNETES],
    description: 'Repository for learning and implementing Prometheus monitoring in Kubernetes environments.',
    link: {
      github: 'https://github.com/NotHarshhaa/Learning-Prometheus',
    },
  },
  {
    title: 'All Things Kubernetes',
    tags: [TAGS.KUBERNETES],
    description: 'Comprehensive Kubernetes learning and deployment repository from basic to advanced.',
    link: {
      github: 'https://github.com/NotHarshhaa/Kubernetes',
    },
  },
  {
    title: 'DevOps Setup Installations',
    tags: [TAGS.DEVOPS, TAGS.LINUX],
    description: 'Guides for installing and setting up essential DevOps and DevSecOps tools.',
    link: {
      github: 'https://github.com/NotHarshhaa/DevOps_Setup-Installations',
    },
  },
  {
    title: 'DevOps Tool Installer',
    tags: [TAGS.LINUX, TAGS.DEVOPS],
    description: 'Automated installation/uninstallation scripts for essential DevOps tools on Linux and Windows.',
    link: {
      github: 'https://github.com/NotHarshhaa/DevOps-Tool-Installer',
    },
  },
  {
    title: 'Kubernetes Learning Path',
    tags: [TAGS.KUBERNETES],
    description: 'Step-by-step Kubernetes learning path from beginner to advanced.',
    link: {
      github: 'https://github.com/NotHarshhaa/kubernetes-learning-path',
    },
  },
  {
    title: 'Jenkins Terraform AWS Infra',
    tags: [TAGS.JENKINS, TAGS.TERRAFORM, TAGS.AWS],
    description: 'Terraform scripts for AWS infrastructure provisioning with Jenkins integration.',
    link: {
      github: 'https://github.com/NotHarshhaa/Jenkins-Terraform-AWS-Infra',
    },
  },
  {
    title: 'Azure All-in-One',
    tags: [TAGS.AZURE],
    description: 'Curated list of Azure resources, libraries, guides, and blogs.',
    link: {
      github: 'https://github.com/NotHarshhaa/azure-all_in_one',
    },
  },
  {
    title: 'AWS Billing Alert Terraform',
    tags: [TAGS.AWS, TAGS.TERRAFORM],
    description: 'Terraform module for setting up AWS billing alerts.',
    link: {
      github: 'https://github.com/NotHarshhaa/aws-billing-alert-terraform',
    },
  },
  {
    title: 'AWS DevOps Real-Time Deployment',
    tags: [TAGS.AWS, TAGS.DEVOPS],
    description: 'End-to-end AWS DevOps deployment pipeline from Dev to Production.',
    link: {
      github: 'https://github.com/NotHarshhaa/AWS-DevOps_Real-Time_Deployment',
    },
  },
  {
    title: 'DevOps Cheatsheet',
    tags: [TAGS.DEVOPS],
    description: 'Quick-reference DevOps cheatsheets covering CI/CD, cloud, security, monitoring, and automation.',
    link: {
      github: 'https://github.com/NotHarshhaa/devops-cheatsheet',
    },
  },
  {
    title: 'DevOps Interview Questions',
    tags: [TAGS.DEVOPS],
    description: '550+ DevOps interview questions with detailed answers covering CI/CD, Kubernetes, Terraform, and cloud.',
    link: {
      github: 'https://github.com/NotHarshhaa/DevOps-Interview-Questions',
    },
  },
  {
    title: 'Into the DevOps',
    tags: [TAGS.DEVOPS, TAGS.LINUX, TAGS.KUBERNETES, TAGS.AWS, TAGS.TERRAFORM],
    description: 'Comprehensive DevOps interview guide covering Linux, AWS, Kubernetes, Terraform, Docker, and more.',
    link: {
      github: 'https://github.com/NotHarshhaa/into-the-devops',
    },
  }
];
