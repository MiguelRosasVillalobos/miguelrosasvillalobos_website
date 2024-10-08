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
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Teaching Assistantship
          company: Universidad del Bío Bío
          company_url: 'https://www.ubiobio.cl'
          company_logo: 
          location: Concepción, Chile 
          date_start: '2021-07-01'
          date_end: ''
          description: |2-
              Courses include:

              * CS440282: Computational Fluid Dynamics
              * CS440400: Mathematical Methods in Mechanical Engineering
              * CS440174: Statics.
              * CS440200: Programming with Mechanical Engineering Software.
              * CS230033: Newtonian Physics.
              * CS230040: Electromagnetism.
              * CS230035: Waves, Optics and Modern Physics.
        - title: Ambassador
          company: Pan-American Ocean Energy Students
          company_url: ''
          company_logo: 
          location: Chile 
          date_start: '2022-02-01'
          date_end: '2024-01-01'
          description: Generate opportunities for international communication on marine energy developments.
    design:
      columns: '2'
      #- block: collection
      # id: posts
      #content:
      #title: Recent Posts
      #subtitle: ''
      #text: ''
      ## Choose how many pages you would like to display (0 = all pages)
      #count: 5
      # Filter on criteria
      #filters:
      #folders:
        # - post
          #author: ""
        #category: ""
        #tag: ""
        #exclude_featured: false
        #exclude_future: false
        #exclude_past: false
        #publication_type: ""
      # Choose how many pages you would like to offset by
        # offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      #order: desc
      #design:
      # Choose a layout view
    # view: compact
      #  columns: '2'
      #- block: portfolio
      #id: projects
      #content:
      #title: Projects
      #filters:
      #  folders:
      #    - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      #default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      #buttons:
      #  - name: All
      #    tag: '*'
      #  - name: Deep Learning
      #    tag: Deep Learning
      #  - name: Other
      #   tag: Demo
      #design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      #columns: '1'
      #view: showcase
      # For Showcase view, flip alternate rows?
      #flip_alt_rows: false
      #- block: markdown
      #content:
      #title: Gallery
      #subtitle: ''
      #text: |-
      #  {{< gallery album="demo" >}}
      #design:
      #columns: '1'
      #- block: collection
      #id: featured
      #content:
      #title: Featured Publications
      #filters:
      #  folders:
      #    - publication
      #  featured_only: true
      #design:
      #columns: '2'
      #view: card
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
      #- block: collection
      #id: talks
      #content:
      # title: Recent & Upcoming Talks
      #filters:
      #  folders:
      #   - event
      #design:
      #columns: '2'
      #view: compact
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
