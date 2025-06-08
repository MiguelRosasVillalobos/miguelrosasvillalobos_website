---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: skills
    content:
      title: Skills
      text: ''
      # Choose a user to display skills from (a folder name within `content/authors/`)
      username: admin
    design:
      columns: '1'
  - block: experience
    content:
      title: Experience
      date_format: Jan 2006
      items:
        - title: CFD Simulator
          company: Kendel
          company_url: 'www.kendel.cl'
          company_logo: 
          location: Chile
          date_start: '2025-01-01'
          date_end: ''
          description: |2-
              Performing simulations of brine discharges in marine environments using OpenFOAM.
              Developing technical reports on simulations and automating processes using Bash scripts to optimize execution and data analysis.
        - title: Mechanical Analyst
          company: Hibring
          company_url: 'www.hibring.cl'
          company_logo: 
          location: Chile
          date_start: '2024-12-01'
          date_end: '2025-01-01'
          description: |2-
              Applied advanced Mechanical Engineering knowledge to industrial processes with high physical relevance.
              Utilized CFD simulations to analyze and optimize complex systems in mechanical engineering contexts.
        - title: Teaching Assistant
          company: Universidad del Bío-Bío
          company_url: 'https://www.ubiobio.cl'
          company_logo: 
          location: Concepción, Chile
          date_start: '2021-07-01'
          date_end: ''
          description: |2-
              Supporting the teaching of practical sessions and theoretical classes in subjects such as Fundamental Physics, Statics, Programming, and CFD.
              Assisted Master’s students in Mechanical Engineering with advanced CFD and Mathematical Methods courses.
              Supervisor: Fabián Pierart, Lecturer, Department of Mechanical Engineering.
        - title: Ambassador
          company: Pan-American Ocean Energy Students
          company_url: ''
          company_logo: 
          location: Chile
          date_start: '2022-02-01'
          date_end: '2024-01-01'
          description: |2-
              Generate opportunities for international communication on marine energy developments, fostering collaboration and knowledge exchange.
    design:
      columns: '2'
  - block: collection
    id: featured
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation

  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #     design:
  #       columns: '2'
  #       view: compact
  #     items:
  #       - title: Optimization of Porous Media in Wave Banks to Reduce Flumes Reflection Using Numerical Simulation
  #         event: XVI CIBIM - 2024
  #         date: 2024
  #         location: Concepción, Chile
  #         description: |2-
  #           Oral Presentation at the XVI CIBIM - 2024, discussing numerical simulation methods for optimizing porous media in wave banks.
  #       - title: Optimization of Porous Media in Wave Flumes to Reduce Wave Reflection Using Numerical Simulation
  #         event: Chilean Physics Symposium - 2024
  #         date: 2024
  #         location: Temuco, Chile
  #         description: |2-
  #           Poster presentation at the Chilean Physics Symposium - 2024, presenting research on reducing wave reflection through porous media optimization.

  # - block: collection
  #   id: posters
  #   content:
  #     title: Recent & Upcoming Posters
  #     filters:
  #       folders:
  #         - event
  #     design:
  #       columns: '2'
  #       view: compact
  #     items:
  #       - title: Optimization of Porous Media in Wave Flumes to Reduce Wave Reflection Using Numerical Simulation
  #         event: Chilean Physics Symposium - 2024
  #         date: 2024
  #         location: Temuco, Chile
  #         description: |2-
  #           Poster presentation at the Chilean Physics Symposium - 2024, focused on optimization techniques for wave flumes.
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
        
      # Contact (add or remove contact options as necessary)
      email: miguelrosas0401@gmail.com 
      phone: +56 9 2606 4466
      appointment_url: 'https://calendly.com/miguelrosasvillalobos'
      #address:
      #  street: 450 Serra Mall
      #  city: Stanford
      #  region: CA
      #  postcode: '94305'
      #  country: United States
      #  country_code: US
      #directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      #office_hours:
      #  - 'Monday 10:00 to 13:00'
        #  - 'Wednesday 09:00 to 10:00'
      # Choose a map provider in `params.yaml` to show a map from these coordinates
      #coordinates:
      #  latitude: '-36.82163'
        #  longitude: '-73.01220'  
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      #form:
      #  provider: netlify
      #  formspree:
      #    id:
      #  netlify:
          # Enable CAPTCHA challenge to reduce spam?
      #    captcha: false
    design:
      columns: '2'
---
