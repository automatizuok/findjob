import type { JobNode } from '../types/job';

export const jobTree: JobNode = {
  question: "Find Your Job",
  label: "Start",
  options: [
    {
      question: "Which industry interests you?",
      label: "Tech",
      description: "Technology and software development",
      options: [
        {
          question: "What aspect of tech excites you?",
          label: "Building Things",
          description: "Create software, apps, and digital products",
          options: [
            {
              question: "What would you like to build?",
              label: "Web Applications",
              description: "Websites and web-based platforms",
              options: [
                {
                  question: "Frontend or Backend?",
                  label: "Frontend Development",
                  description: "Build user interfaces and interactive experiences",
                  options: [
                    {
                      question: "Your perfect match!",
                      label: "Frontend Developer",
                      description: "Designs and builds the visual and interactive parts of websites using HTML, CSS, and JavaScript."
                    }
                  ]
                },
                {
                  question: "Frontend or Backend?",
                  label: "Backend Development",
                  description: "Handle servers, databases, and business logic",
                  options: [
                    {
                      question: "Your perfect match!",
                      label: "Backend Developer",
                      description: "Builds the server-side logic that powers applications, manages databases, and handles data."
                    }
                  ]
                },
                {
                  question: "Frontend or Backend?",
                  label: "Full Stack Development",
                  description: "Build both frontend and backend",
                  options: [
                    {
                      question: "Your perfect match!",
                      label: "Full Stack Developer",
                      description: "Works across the entire application stack, handling both frontend and backend development."
                    }
                  ]
                }
              ]
            },
            {
              question: "What would you like to build?",
              label: "Mobile Apps",
              description: "iOS and Android applications",
              options: [
                {
                  question: "Native or Cross-platform?",
                  label: "Native Development",
                  description: "Build for specific platforms",
                  options: [
                    {
                      question: "Your perfect match!",
                      label: "Mobile Developer",
                      description: "Creates iOS or Android apps with native performance and platform-specific features."
                    }
                  ]
                },
                {
                  question: "Native or Cross-platform?",
                  label: "Cross-Platform",
                  description: "Build once, run everywhere",
                  options: [
                    {
                      question: "Your perfect match!",
                      label: "Cross-Platform Developer",
                      description: "Develops apps that work on multiple platforms using React Native or Flutter."
                    }
                  ]
                }
              ]
            },
            {
              question: "What would you like to build?",
              label: "Hardware & Embedded",
              description: "Physical devices and IoT",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Hardware Engineer",
                  description: "Designs and builds physical hardware, embedded systems, and IoT devices."
                }
              ]
            },
            {
              question: "What would you like to build?",
              label: "AI & Machine Learning",
              description: "Train models and build intelligent systems",
              options: [
                {
                  question: "Your perfect match!",
                  label: "ML Engineer",
                  description: "Develops machine learning models and AI solutions that learn from data."
                }
              ]
            }
          ]
        },
        {
          question: "What aspect of tech excites you?",
          label: "Problem Solving",
          description: "Solve complex technical challenges",
          options: [
            {
              question: "What type of problems?",
              label: "Data Analysis",
              description: "Work with data and analytics",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Data Scientist",
                  description: "Analyzes large datasets and uses machine learning to uncover insights and patterns."
                }
              ]
            },
            {
              question: "What type of problems?",
              label: "Security",
              description: "Protect systems from threats",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Security Analyst",
                  description: "Identifies vulnerabilities and implements security measures to protect systems."
                }
              ]
            },
            {
              question: "What type of problems?",
              label: "Infrastructure",
              description: "Manage systems and cloud platforms",
              options: [
                {
                  question: "Your perfect match!",
                  label: "DevOps Engineer",
                  description: "Manages infrastructure, automates deployments, and ensures systems run smoothly."
                }
              ]
            },
            {
              question: "What type of problems?",
              label: "Quality Assurance",
              description: "Test and verify software quality",
              options: [
                {
                  question: "Your perfect match!",
                  label: "QA Engineer",
                  description: "Tests software for bugs and issues to ensure quality and reliability."
                }
              ]
            }
          ]
        },
        {
          question: "What aspect of tech excites you?",
          label: "People & Teams",
          description: "Lead and manage technology teams",
          options: [
            {
              question: "Your perfect match!",
              label: "Engineering Manager",
              description: "Leads development teams, manages projects, and mentors engineers."
            }
          ]
        }
      ]
    },
    {
      question: "Which industry interests you?",
      label: "Creative",
      description: "Design, art, and creative expression",
      options: [
        {
          question: "What medium do you prefer?",
          label: "Visual Design",
          description: "Create visual experiences",
          options: [
            {
              question: "Digital or traditional?",
              label: "Digital Design",
              description: "Design for screens and apps",
              options: [
                {
                  question: "What's your focus?",
                  label: "UI/UX Design",
                  description: "Design user interfaces and experiences",
                  options: [
                    {
                      question: "Your perfect match!",
                      label: "UX/UI Designer",
                      description: "Creates intuitive interfaces and beautiful user experiences for apps and websites."
                    }
                  ]
                },
                {
                  question: "What's your focus?",
                  label: "Graphic Design",
                  description: "Create visual communication",
                  options: [
                    {
                      question: "Your perfect match!",
                      label: "Graphic Designer",
                      description: "Creates visual designs for branding, marketing, and digital media."
                    }
                  ]
                },
                {
                  question: "What's your focus?",
                  label: "Animation",
                  description: "Bring designs to life with motion",
                  options: [
                    {
                      question: "Your perfect match!",
                      label: "Motion Designer",
                      description: "Creates animated graphics and visual effects for film, games, and apps."
                    }
                  ]
                }
              ]
            },
            {
              question: "Digital or traditional?",
              label: "Traditional Art",
              description: "Classical and contemporary art",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Fine Artist",
                  description: "Creates paintings, sculptures, and other visual art pieces."
                }
              ]
            }
          ]
        },
        {
          question: "What medium do you prefer?",
          label: "Written Content",
          description: "Writing and storytelling",
          options: [
            {
              question: "What type of writing?",
              label: "Marketing & Copywriting",
              description: "Write persuasive content",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Content Writer",
                  description: "Writes compelling copy for marketing, blogs, and advertising campaigns."
                }
              ]
            },
            {
              question: "What type of writing?",
              label: "Creative Writing",
              description: "Create fictional stories",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Creative Writer",
                  description: "Writes novels, short stories, scripts, and other creative fiction."
                }
              ]
            },
            {
              question: "What type of writing?",
              label: "Technical Writing",
              description: "Document complex information",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Technical Writer",
                  description: "Creates manuals, guides, and documentation for technical products."
                }
              ]
            },
            {
              question: "What type of writing?",
              label: "Journalism",
              description: "Report and investigate stories",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Journalist",
                  description: "Researches and writes news stories, articles, and investigations."
                }
              ]
            }
          ]
        },
        {
          question: "What medium do you prefer?",
          label: "Audio & Music",
          description: "Sound design and music production",
          options: [
            {
              question: "Your perfect match!",
              label: "Audio Producer",
              description: "Records, mixes, and produces music and sound effects."
            }
          ]
        }
      ]
    },
    {
      question: "Which industry interests you?",
      label: "Business",
      description: "Commerce, management, and strategy",
      options: [
        {
          question: "What aspect of business excites you?",
          label: "Strategy & Planning",
          description: "Shape company direction and growth",
          options: [
            {
              question: "What focus area?",
              label: "Business Growth",
              description: "Drive company expansion",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Business Strategist",
                  description: "Develops long-term strategies for company growth and market expansion."
                }
              ]
            },
            {
              question: "What focus area?",
              label: "Operations",
              description: "Optimize day-to-day operations",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Operations Manager",
                  description: "Manages business processes, efficiency, and operational excellence."
                }
              ]
            },
            {
              question: "What focus area?",
              label: "Finance",
              description: "Manage money and investments",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Financial Analyst",
                  description: "Analyzes financial data and helps companies make investment decisions."
                }
              ]
            }
          ]
        },
        {
          question: "What aspect of business excites you?",
          label: "People & Culture",
          description: "Build and manage teams",
          options: [
            {
              question: "What type of role?",
              label: "Sales & Revenue",
              description: "Drive revenue and client growth",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Sales Executive",
                  description: "Builds relationships with clients and drives revenue through sales."
                }
              ]
            },
            {
              question: "What type of role?",
              label: "Customer Success",
              description: "Support and retain customers",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Customer Success Manager",
                  description: "Ensures customers achieve their goals and remain satisfied with the product."
                }
              ]
            },
            {
              question: "What type of role?",
              label: "Human Resources",
              description: "Manage talent and company culture",
              options: [
                {
                  question: "Your perfect match!",
                  label: "HR Manager",
                  description: "Manages recruitment, employee development, and company culture."
                }
              ]
            },
            {
              question: "What type of role?",
              label: "Product Management",
              description: "Shape product vision and strategy",
              options: [
                {
                  question: "Your perfect match!",
                  label: "Product Manager",
                  description: "Defines product vision, priorities, and roadmap based on user needs and business goals."
                }
              ]
            }
          ]
        },
        {
          question: "What aspect of business excites you?",
          label: "Marketing & Branding",
          description: "Build brand and market presence",
          options: [
            {
              question: "Your perfect match!",
              label: "Marketing Manager",
              description: "Develops and executes marketing strategies to build brand awareness and drive demand."
            }
          ]
        }
      ]
    },
    {
      question: "Which industry interests you?",
      label: "Healthcare",
      description: "Medicine and wellness",
      options: [
        {
          question: "What role appeals to you?",
          label: "Direct Patient Care",
          description: "Work directly with patients",
          options: [
            {
              question: "Your perfect match!",
              label: "Nurse",
              description: "Provides patient care, administers medication, and supports medical treatments."
            }
          ]
        },
        {
          question: "What role appeals to you?",
          label: "Medical Science",
          description: "Research and innovation",
          options: [
            {
              question: "Your perfect match!",
              label: "Biomedical Researcher",
              description: "Conducts research to develop new treatments and medical innovations."
            }
          ]
        },
        {
          question: "What role appeals to you?",
          label: "Health Administration",
          description: "Manage healthcare systems",
          options: [
            {
              question: "Your perfect match!",
              label: "Healthcare Administrator",
              description: "Manages hospital operations, budgets, and healthcare facility administration."
            }
          ]
        }
      ]
    },
    {
      question: "Which industry interests you?",
      label: "Education",
      description: "Teaching and learning",
      options: [
        {
          question: "What level interests you?",
          label: "K-12 Education",
          description: "Teach elementary through high school",
          options: [
            {
              question: "Your perfect match!",
              label: "Teacher",
              description: "Educates students in academic subjects and helps develop their skills and character."
            }
          ]
        },
        {
          question: "What level interests you?",
          label: "Higher Education",
          description: "University and college teaching",
          options: [
            {
              question: "Your perfect match!",
              label: "University Professor",
              description: "Teaches advanced subjects and conducts research at the university level."
            }
          ]
        },
        {
          question: "What level interests you?",
          label: "Corporate Training",
          description: "Train professionals",
          options: [
            {
              question: "Your perfect match!",
              label: "Training Specialist",
              description: "Develops and delivers training programs for professional development."
            }
          ]
        }
      ]
    }
  ]
};
