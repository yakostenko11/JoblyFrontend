### Jobly

A full-stack job posting and job application website. 

Users can create an account, log-in, search for companies, search for jobs and apply to them. 

Frontend:
* React
* React-router
* Context - to persist logged-in status throughout application
* Controlled components - for forms
* HTML/CSS
* Bootstrap


### Component Architecture

```
App
└─┬─ Nav
  └┬ Routes
   ├── Home
   ├── Login
   │     ├── LoginForm
   │     └── SignUpForm
   └─┬ PrivateRoutes 
     ├─┬ Companies
     │ ├── Search
     │ └── CompanyCard 
     ├─┬ Company
     │ └── JobCard 
     ├─┬ Jobs
     │ ├── Search
     │ └── JobCard
     └── Profile
```


### Routes

Path | Component
:--- | :--------
/ | Home
/register | Login
/login | Login
/companies | Companies
/companies/:handle | Company
/jobs | Jobs
/profile | Profile# JoblyFrontend
