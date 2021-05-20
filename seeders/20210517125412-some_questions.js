"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "questions",
      [
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621434742/quiz/pexels-julio-gm-4279197_iacjn3.jpg",
          question: "Where is this cityscape from?",
          answer_1: "Madrid",
          answer_2: "Seattle",
          answer_3: "Toronto",
          answer_4: "Kuala Lumpur",
          correct_answer: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621434913/quiz/pexels-chait-goli-1782436_nvltnk.jpg",
          question:
            "Construction started in 1882, this building is part of the UNESCO World Heritage. What's the name of it?",
          answer_1: "Cologne Cathedral",
          answer_2: "Sagrada Familia",
          answer_3: "Duomo di Milano",
          answer_4: "Jopenkerk",
          correct_answer: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621435468/quiz/3tnwwjfye9lz_qaekrq.jpg",
          question:
            "The highest mountain in The Netherlands, Vaalserberg, has a height of...",
          answer_1: "255.8m",
          answer_2: "198.2m",
          answer_3: "322.4m",
          answer_4: "87.9m",
          correct_answer: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621435693/quiz/202044.gezondnu-stamppot_bf8c7k.jpg",
          question: "This dish is the flagship of Dutch cuisine.",
          answer_1: "Erwtensoep",
          answer_2: "Pannenkoeken",
          answer_3: "Oliebollen",
          answer_4: "Stamppot",
          correct_answer: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621436206/quiz/pexels-alexandr-podvalny-2787267_oqndvx.jpg",
          question: "The capital of Ukraine?",
          answer_1: "Donetsk",
          answer_2: "Kiev",
          answer_3: "Odesa",
          answer_4: "Dnipro",
          correct_answer: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621436482/quiz/brazil_nzltrg.jpg",
          question: "The capital of Brazil?",
          answer_1: "Brasilia",
          answer_2: "Sao Paulo",
          answer_3: "Rio de Janeiro",
          answer_4: "Porto Alegre",
          correct_answer: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621438006/quiz/sua-truong-TVt9WMTbfEQ-unsplash_m8hlrv.jpg",
          question: "The Petronas Tower can be found, in which city?",
          answer_1: "Kuala Lumpur",
          answer_2: "Singapur",
          answer_3: "Dubai",
          answer_4: "Hong Kong",
          correct_answer: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621436897/quiz/Whitehaven-aerial-view_cs_h03o0o.jpg",
          question: "Where are the Whitsunday Islands located?",
          answer_1: "Malaysia",
          answer_2: "Vietnam",
          answer_3: "Philippines",
          answer_4: "Australia",
          correct_answer: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621437174/quiz/jaime-dantas-PYS7Y4Gwrr0-unsplash_v4igbu.jpg",
          question:
            "Which two countries in South America are the Iguazu Falls part of?",
          answer_1: "Ethiopia and Kenya",
          answer_2: "Switzerland and Italy",
          answer_3: "Brazil and Argentina",
          answer_4: "Tanzania and Zambia",
          correct_answer: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621437294/quiz/ahmad-qaisieh-mYEqvgcY1G4-unsplash_cr3evz.jpg",
          question: "Where in the Middle East is this?",
          answer_1: "Qatar",
          answer_2: "Jordan",
          answer_3: "Egypt",
          answer_4: "Morocco",
          correct_answer: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621437426/quiz/dimitry-anikin--T_k-XlXg-w-unsplash_wvdzmq.jpg",
          question: "Which country is this?",
          answer_1: "Austria",
          answer_2: "Norway",
          answer_3: "France",
          answer_4: "Croatia",
          correct_answer: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621437753/quiz/pexels-marianna-89432_zjz6ei.jpg",
          question: "What is the official name of this tower?",
          answer_1: "St. Stephen's Tower",
          answer_2: "The Victoria Tower",
          answer_3: "Big Ben",
          answer_4: "Elizabeth Tower",
          correct_answer: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621438243/quiz/eleni-afiontzi-xvknd8C7Kic-unsplash_yohltl.jpg",
          question: "Balos beach can be found, on which Greek island?",
          answer_1: "Crete",
          answer_2: "Santorini",
          answer_3: "Mykonos",
          answer_4: "Rhodes",
          correct_answer: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621438693/quiz/pexels-chait-goli-1797161_h0n7v6.jpg",
          question:
            "According to tradition, Rome was founded by the twin brothers...",
          answer_1: "Apollo and Artemis",
          answer_2: "Ploutos and Philomelos",
          answer_3: "Romulus and Remus",
          answer_4: "Castor and Pollux",
          correct_answer: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url:
            "https://res.cloudinary.com/powsitu/image/upload/v1621438957/quiz/pexels-thorsten-technoman-338515_xaispj.jpg",
          question:
            "Which of the following facts is not true about the Eiffel Tower?",
          answer_1:
            "The Eiffel Tower is a cousin of sorts to the Statue of Liberty.",
          answer_2: "Gustave Eiffel designed the tower",
          answer_3: "There’s a Champagne bar at the top.",
          answer_4: "The Eiffel Tower doubled as a scientific laboratory.",
          correct_answer: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("questions", null, {});
  },
};
