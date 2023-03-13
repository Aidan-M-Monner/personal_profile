import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  // Experiences
  Bremen = {
    Company: 'Bremen Youth Services',
    Title: 'Camp Counselor',
    Location: 'Oak Forest, IL',
    Duration: 'Jun - July, 2016 - 2018',
    Description: 
    `
      Served as a camp Camp Counselor responsible for the well-being of a group of children. 
      Me and 3-4 other counselors would lead children to different activities, deal with behavioral problems, and aid children in cases of sickness. 
      Weeks would comprise three on-premise days, and one field trip. 
    `,
    Bullet_Points: [
      'Supervised a group of 12 children, ages 4-15, ensuring they were safe and behaving.',
      'Directed 2-3 adolescents towards leadership positions, shaping future counselors.'
    ],
    logo: '/assets/logos/bremen.png',
    color: '#2A85FA'
  }

  Aurelios = {
    Company: 'Aurelio\'s Pizza ',
    Title: 'Cook',
    Location: 'Palos Heights, IL',
    Duration: 'Sep 2017 - Oct 2021',
    Description: 
    `
      Served as a cook, a position that would have me craft a variety of pizzas and complete many sanitary tasks. 
      I would become an example for sanitation with my spotless dishwashing and the lengths I would go to ensure workstation cleanliness. 
      Past cooking and cleaning, I would perform dough rolling and box folding.
    `,
    Bullet_Points: [
      'Complete 800+ orders a month, upholding a quality and pace that encourages returns',
      'Cleansed 200+ dishes a week, becoming the go to ensure dishes were sanitary for re-use.',
    ],
    logo: '/assets/logos/aurelios.png',
    color: '#FF2B2B'
  }

  Park_District = {
    Company: 'Oak Forest Park District',
    Title: 'Camp Counselor',
    Location: 'Oak Forest, IL',
    Duration: 'Jun - Aug, 2021 - 2022',
    Description: 
    `
    Served as a camp Camp Counselor responsible for the well-being of a group of children. 
    Me and 1-2 other counselors would lead children to different activities, deal with behavioral problems, and aid children in cases of sickness. 
    Weeks would comprise two on-premise days, one park day, a field trip day, and a trip to the pool. 
    `,
    Bullet_Points: [
      'Supervised a group of 12-27 children, grades 2-3, ensuring they were safe and behaving.',
      'Inform 10-20 parents of camp events to increase participation and mitigate misbehavior.',
      'Outlined 2 days worth of activities for children, doing 100% of the counselor week programming.'
    ],
    logo: '/assets/logos/ofpd.png',
    color: '#78B800'
  }

  Acorn = {
    Company: 'Acorn Public Library',
    Title: 'Circulation Clerk',
    Location: 'Oak Forest, IL',
    Duration: 'Nov 2021 - Current',
    Description: 
      `
        Served as a circulation clerk responsible for dealing with patrons at the entrance of the library. 
        This role includes communicating with patrons in person or by phone, creating and updating user records, 
        organizing and restacking shelves, and inspecting rented materials for damages. 
        On occasion I would also commit searches on patron data for districting purposes and revise the manual. 
      `,
    Bullet_Points: [
      'Digitized library rental information for over 6,000 resources annually using Workflows, enabling continued access by patrons.',
      'Create/update up to 40 user accounts monthly, contributing to increased community connection.',
      'Maximize reports to track/monitor patron data, facilitating specialized district-oriented services.',
      'Communicate effectively with customers. Provide quality services that generate repeat business.'
    ],
    logo: '/assets/logos/acorn.png',
    color: '#6D2A2A'
  }

  Trinity = {
    Company: 'Trinity Christian College',
    Title: 'Student Ambassador (Vocation & Career)',
    Location: 'Oak Forest, IL',
    Duration: 'Jan 2022 - May 2022',
    Description: 
    `
      Served as a student ambassador for Trinity’s Career & Vocation Center where I completed many tasks to ease students into their post-grad life. 
      The role had me revising student resumes and cover letters, inspecting HandShake requests to determine a company’s legitimacy, and completing some marketing tasks: setting up a booth and designing advertisements. 
    `,
    Bullet_Points: [
      'Inspected 400+ HandShake employer job postings, enabling safe/secure searches for students.',
      'Directed multiple marketing campaigns, drawing awareness among students towards the resource.',
      'Connected monthly with students to update resumes, improving job prospects.'
    ],
    logo: '/assets/logos/trinity.png',
    color: '#1E36D3'
  }

  InMotion = {
    Company: 'InMotion Hosting',
    Title: 'Intern',
    Location: '(Remote)',
    Duration: 'Aug 2022 - Dec 2022',
    Description: 
    `
      Served as an Intern at InMotion Hosting where I learned the AngularJS framework to complete a project. 
      The project was a fraud report that would need an algorithm to display if a user was trustworthy or not. 
      The data would come from their database and require APIs and REST API endpoints to display. 
      I would build a table, an individual user display page, and a PHP algorithm.
    `,
    Bullet_Points: [
      'Produced fraud report components, substantially decreasing external security breaches and hacks.',
      'Patched coding debility, improving customer access to previously restricted content by 100%.',
      'Designed/ delivered a presentation building understanding of the new product amongst 20 staff.',
    ],
    logo: '/assets/logos/imh.png',
    color: '#BF0202'
  }


  // Experience Load
  job = this.Acorn;

  onClick(imageNameObject: any) {
    this.job = imageNameObject;
  }
}
