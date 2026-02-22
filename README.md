# **SPARK Hub Website**

This repository contains the source code of the [SPARK Hub website](http://spark-hub-website.vercel.app/), an innovation-centric student organization, envisioning to lead the Innovation Center for the youth in Western Visayas.

This website serves as a platform to get to know SPARK Hub by its mission and vision, its officers, and its initiatives. For more details about the organization, simply visit the website or our Facebook page.

## Tech Stack

This section lists the tech stack used to develop and maintain this website.

- NextJS 16.1
- TailwindCSS 3.4
- Sanity.io CMS 7.14

## Development Team

This section outlines the development team of this website.

| Role                                       | Name                      | Link                                                                                                 |
| ------------------------------------------ | ------------------------- | ---------------------------------------------------------------------------------------------------- |
| Project Manager, Frontend, & CMS Developer | John Manuel Carado        | https://github.com/hydraadra112/                                                                     |
| Lead UI/UX Designer                        | Mauricio Manuel Bergancia | https://github.com/Mauricio1408                                                                      |
| UI/UX Designer                             | Gracer Ann Escalada       | https://www.facebook.com/gracerann                                                                   |
| UI/UX Designer                             | Wendi Deocares            | [Portfolio Link](https://drive.google.com/file/d/1e96CVQnzIIvqVR-HM-Zb01Erqb3fPlFS/view?usp=sharing) |
| UI/UX Designer                             | Janine Megumi Cabangal    | —                                                                                                    |
| Frontend Developer                         | Renz Clyd Bedonia         | https://github.com/renz0826                                                                          |
| Frontend Developer                         | Christopher Glenn Bedis   | https://github.com/Christopher-Glenn                                                                 |
| Frontend Developer                         | John Israel Mercado       | https://github.com/Kryurin                                                                           |
| Web Administrator                          | Fritz Marick Fernandez    | https://github.com/Maricklabs                                                                        |

## How to Contribute?

To contribute to this website, simply follow the instructions below (this assumes you have basic terminal and Git experience):

```bash
git clone <REPO URL>
cd <REPO DIR>

# Install deps
npm install

# See development environment
npm run dev
```

For the environment variables, you must have the following variables:

```bash
# You must contact the web administrator to get the variables
NEXT_PUBLIC_SANITY_PROJECT_ID="..."
NEXT_PUBLIC_SANITY_DATASET="..."
```

Or else, pages that requires the Sanity CMS will produce a missing environment variable error.
