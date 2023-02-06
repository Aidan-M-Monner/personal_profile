import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  Bremen = {
    Company: 'Bremen Youth Services',
    Title: 'Camp Counselor',
    Location: 'Oak Forest, IL',
    Duration: 'Jun - July, 2016 - 2018',
    Description: 'A non-profit mental health agency that specializes in teen counseling. During the summer, they would host a seven-week summer program.',
    Bullet_Points: [
      'Supervised and managed a group of around twelve children ages 4-15.',
      'Coordinated activities with a group of three other counselors.',
      'Trained preteens to take on counselor roles as part of the Adolescents Becoming Counselors (ABC) Program.',
      'Provided counseling to children during social-emotional development sessions.'
    ]
  }

  Aurelios = {
    Company: 'Aurelio\'s Pizza ',
    Title: 'Cook',
    Location: 'Palos Heights, IL',
    Duration: 'Sep 2017 - Oct 2021',
    Description: 'A fast-food chain known for their thin crust variety of Chicago-style Pizza.',
    Bullet_Points: [
      'Lead cooks to complete upwards of a hundred ticket orders in a timely manner.',
      'Became an example for station cleanliness and proper dishwashing.',
      'Reliable multitasker who could handle both cook responsibilities and general tasks.',
      'Flexible scheduling, would always fill shifts even on short notice.'
    ]
  }

  Park_District = {
    Company: 'Oak Forest Park District',
    Title: 'Camp Counselor',
    Location: 'Oak Forest, IL',
    Duration: 'Jun - Aug, 2021 - 2022',
    Description: 'A public recreational area dedicated to providing services to the Oak Forest community. During summer they host an eight-week summer program.',
    Bullet_Points: [
      'Noted as being a flexible worker able to take on any age group (1st-8th).',
      'Ready and willing to take on longer shifts such as a 7-6, when others are absent.',
      'Designed and planned out two full days of activities for kids.',
      'Fostered good relations between counselors, campers, and parents.'
    ]
  }

  Acorn = {
    Company: 'Acorn Public Library',
    Title: 'Circulation Clerk',
    Location: 'Oak Forest, IL',
    Duration: 'Nov 2021 - Current',
    Description: 'The library is a public building centered around the distribution of digital and physical media.',
    Bullet_Points: [
      'Thorough inspector, properly inspects items prior to check-ins/outs.',
      'Personable, communicable with patrons.',
      'Reviser, provided feedback for a more understandable manual.',
      'Flexible worker, willing to take on extra shifts.'
    ],
    logo: 'https://acornlibrary.org/wp-content/themes/acorn-public-library/images/logo.png'
  }

  Trinity = {
    Company: 'Trinity Christian College',
    Title: 'Student Ambassador (Vocation & Career)',
    Location: 'Oak Forest, IL',
    Duration: 'Jan 2022 - May 2022',
    Description: 'The Vocation and Career Center is a student resource for preparing for post-college.',
    Bullet_Points: [
      'Researched roughly a hundred HandShake employers a week and accepted/denied requests.',
      'Revised student resumes.',
      'Headed marketing campaigns, set up locations, designed materials and engaged with students.'
    ]
  }

  job = this.Acorn;
}
