function AchievementsExpanded() {

  const certificates = [

    {
      title: 'React JS Tutorial',

      issuer: 'Greatlearning',

      year: '2024',


      image: '/certificates/previews/reactjs.png',

      credential:
        'https://www.mygreatlearning.com/certificate/BFWGBPNB?referrer_code=GLUDH_C_LGOGI',
    },

    {
      title: 'Master Course in Full Stack Development',

      issuer: 'Greatlearning',

      year: '2024',


      image: '/certificates/previews/masterfullstack.png',

      credential:
        'https://www.mygreatlearning.com/certificate/MGSJHOZU?referrer_code=GLUDH_C_LGOGI',
    },

    {
      title: 'UI/UX for Beginners',

      issuer: 'GreatLearning',

      year: '2024',

      image: '/certificates/previews/uiux.png',

      credential:
        'https://www.mygreatlearning.com/certificate/ZUBNTMQU?referrer_code=GLUDH_C_LGOGI',
    },

    {
      title: 'Introduction to Design Thinking',

      issuer: 'GreatLearning',

      year: '2024',

      image: '/certificates/previews/thinking.png',

      credential:
        'https://www.mygreatlearning.com/certificate/MTQUNNOY?referrer_code=GLUDH_C_LGOGI',
    },

    {
      title: 'SEO Strategies',

      issuer: 'GreatLearning',

      year: '2024',

      image: '/certificates/previews/seo.png',

      credential:
        '/https://www.mygreatlearning.com/certificate/ZROBPKCM?referrer_code=GLUDH_C_LGOGI',
    },

    {
      title: 'Spoken English',

      issuer: 'GreatLearning',

      year: '2024',

      image: '/certificates/previews/english.png',

      credential:
        'https://www.mygreatlearning.com/certificate/SWAMTUJK?referrer_code=GLUDH_C_LGOGI',
    },

    {
      title: 'Building Games using Javascript',

      issuer: 'GreatLearning',

      year: '2024',

      image: '/certificates/previews/games.png',

      credential:
        'https://www.mygreatlearning.com/certificate/XDPFFICH?referrer_code=GLUDH_C_LGOGI',
    },

    {
      title: 'Introduction to AngularJS',

      issuer: 'GreatLearning',

      year: '2024',

      image: '/certificates/previews/angular.png',

      credential:
        'https://www.mygreatlearning.com/certificate/CMVQJXSG?referrer_code=GLUDH_C_LGOGI',
    },

    {
      title: 'Introduction to Web Designing',

      issuer: 'GreatLearning',

      year: '2024',

      image: '/certificates/previews/webdesign.png',

      credential:
        '/https://www.mygreatlearning.com/certificate/OEUBUKRE?referrer_code=GLUDH_C_LGOGI/project1.pdf',
    },

    {
      title: 'Flutter for Beginners',

      issuer: 'GreatLearning',

      year: '2024',

      image: '/certificates/previews/flutter.png',

      credential:
        'https://www.mygreatlearning.com/certificate/BTOUFQTV?referrer_code=GLUDH_C_LGOGI',
    },

  
    {
      title: 'Google Analytics',

      issuer: 'GreatLearning',

      year: '2024',

      image: '/certificates/previews/analytics.png',

      credential:
        'https://www.mygreatlearning.com/certificate/WROGMDLI?referrer_code=GLUDH_C_LGOGI',
    },

    {
      title: 'AWS for Beginners',

      issuer: 'GreatLearning',

      year: '2024',

      image: '/certificates/previews/awsbeginner.png',

      credential:
        'https://www.mygreatlearning.com/certificate/RXXSVNIO?referrer_code=GLUDH_C_LGOGI',
    },

    {
      title: 'Dive Deeper into GA4 Data and Reports',

      issuer: 'Gooogle',

      year: '2025',

      image: '/certificates/previews/g4a.png',

      credential:
        'https://skillshop.credential.net/446ec206-ce90-4cf4-916e-90adfd6c4dbc#acc.t9Vh72sg',
    },

    {
      title: 'Manage GA4 Data and Learn to Read Reports',

      issuer: 'Google',

      year: '2025',

      image: '/certificates/previews/readreports.png',

      credential:
        'https://skillshop.credential.net/b0889f0f-0ee8-46ff-81af-0c2d26fd8adf#acc.FUK8dr01',
    },

    {
      title: 'Use G4A with other Tools and Data Sources',

      issuer: 'Google',

      year: '2025',

      image: '/certificates/previews/othertools.png',

      credential:
        'https://skillshop.credential.net/b4b5df9c-c3a7-4c7e-a04a-ec95722f538e#acc.bvEQormu',
    },

    {
      title: 'Google Analytics Certification',

      issuer: 'Google',

      year: '2025',

      image: '/certificates/previews/GAC.png',

      credential:
        'https://skillshop.credential.net/8c59b039-eea6-44a8-add9-99163eb27405#acc.eM1FtYsU',
    },

    {
      title: 'Badge: Google Analytics Certified',

      issuer: 'Google',

      year: '2025',

      image: '/certificates/previews/badge1.png',

      credential:
        'https://skillshop.credential.net/8c59b039-eea6-44a8-add9-99163eb27405#acc.F4PIZqmW',
    },

    {
      title: 'Elevate Your Leadership, Amplify Your Communication Skills',

      issuer: 'Udemy',

      year: '2025',

      image: '/certificates/previews/udemy1.png',

      credential:
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-a2b42313-6479-4407-a83c-f87435774df2.pdf',
    },

    {
      title: 'Agile Mindset & Adaptability: The Complete Guide to XP',

      issuer: 'Google',

      year: '2025',

      image: '/certificates/previews/udemy2.png',

      credential:
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-1a72a5e0-d805-48cc-96cd-1167f70715ca.pdf',
    },

    {
      title: 'Designing a Low Fidelity Prototype in Figma',

      issuer: 'Coursera',

      year: '2023',

      image: '/certificates/previews/figma.png',

      credential:
        'https://www.coursera.org/account/accomplishments/verify/VLB6H2RC4GVZ',
    },

    {
      title: 'Information Security Apprentice',

      issuer: 'Holy Angel University',

      year: '2024',

      image: '/certificates/previews/badge2.png',

      credential:
        'https://badges.parchment.com/public/assertions/8nU1n3tSSi2u3yvNRpy6PA',
    },

    {
      title: 'AWS Academy Graduate - Cloud Foundations - Training Badge',

      issuer: 'Amazon Web Services Training and Certification',

      year: '2025',

      image: '/certificates/previews/awsacademy.png',

      credential:
        'https://www.credly.com/badges/e41e8682-cc10-47d1-ad1f-1b65479eb038/public_url',
    },

    {
      title: 'Basic Principles of Design',

      issuer: 'IBM-SkillsBuild',

      year: '2025',

      image: '/certificates/previews/basicdesign.png',

      credential:
        'https://www.credly.com/badges/85cf5d33-d0b3-4640-9041-86bb626f5bbb/public_url',
    },

    {
      title: 'English for IT 1',

      issuer: 'Cisco',

      year: '2025',

      image: '/certificates/previews/englishbadge.png',

      credential:
        'https://www.credly.com/badges/90835b99-836b-4336-8aae-924c1083aac5/public_url',
    },

    {
      title: 'CCNA: Introduction to Networks',

      issuer: 'Cisco',

      year: '2024',

      image: '/certificates/previews/networks.png',

      credential:
        'https://www.credly.com/badges/346e77b0-acd2-4e5e-a9b2-6f7d6a716b7e/public_url',
    },

    {
      title: 'Cyber Threat Management',

      issuer: 'Cisco',

      year: '2024',

      image: '/certificates/previews/cyber-threat-management.png',

      credential:
        'https://www.credly.com/badges/e812c0a5-ea62-4417-9758-142ab18716d7/public_url',
    },

    {
      title: 'Exploring SAP Cloud ERP - Record of Achievement',

      issuer: 'SAP',

      year: '2024',

      image: '/certificates/previews/SAP.png',

      credential:
        'https://www.credly.com/badges/559aa3ac-0423-463a-8838-6b39a73597af/public_url',
    },

    {
      title: 'Legacy JavaScript Algorithms and Data Structures V7',

      issuer: 'freecodecamp',

      year: '2024',

      image: '/certificates/previews/fcc1.png',

      credential:
        'https://www.freecodecamp.org/certification/kateanne/javascript-algorithms-and-data-structures',
    },

    {
      title: 'Legacy Responsive Web Design V7',

      issuer: 'freecodecamp',

      year: '2024',

      image: '/certificates/previews/fcc2.png',

      credential:
        'https://www.freecodecamp.org/certification/kateanne/responsive-web-design',
    },

    {
      title: 'Legacy Responsive Web Design V7',

      issuer: 'freecodecamp',

      year: '2024',

      image: '/certificates/previews/fcc2.png',

      credential:
        'https://www.freecodecamp.org/certification/kateanne/responsive-web-design',
    },

    {
      title: 'Agile Project Management',

      issuer: 'HPLife',

      year: '2024',

      image: '/certificates/previews/hp1.png',

      credential:
        'https://www.life-global.org/certificate/87360706-8b08-44fd-ae99-869e06420376',
    },

    {
      title: 'Inventory Management',

      issuer: 'HPLife',

      year: '2024',

      image: '/certificates/previews/hp2.png',

      credential:
        'https://www.life-global.org/certificate/98a90df0-e7a0-4a9c-b89f-4a48d3d4ffcd',
    },

    {
      title: 'IT for Business Success',

      issuer: 'HPLife',

      year: '2024',

      image: '/certificates/previews/hp3.png',

      credential:
        'https://www.life-global.org/certificate/b2135894-afd8-46de-acf5-263bd98beffc',
    },

    {
      title: 'Data Science & Analytics',

      issuer: 'HPLife',

      year: '2024',

      image: '/certificates/previews/hp4.png',

      credential:
        'https://www.life-global.org/certificate/5b0781d5-c69c-48eb-bd21-af0d229a3d71',
    },

    {
      title: 'Introduction to Digital Business Skills',

      issuer: 'HPLife',

      year: '2024',

      image: '/certificates/previews/hp5.png',

      credential:
        'https://www.life-global.org/certificate/6cb7e28f-284a-4be1-acda-1178663bb2a8',
    },
    
    {
      title: 'Introduction to Cybersecurity Awareness',

      issuer: 'HPLife',

      year: '2024',

      image: '/certificates/previews/hp6.png',

      credential:
        '/certificates/hp6.pdf',
    },

    {
      title: 'Operational Aspects',

      issuer: 'HPLife',

      year: '2024',

      image: '/certificates/previews/oa.png',

      credential:
        'https://www.life-global.org/en/badges/f068f3eb-4eae-4da7-9545-fa8322680ead',
    },

    {
      title: 'Digital Skills Builder',

      issuer: 'HPLife',

      year: '2024',

      image: '/certificates/previews/db.png',

      credential:
        'https://www.life-global.org/en/badges/9f200a06-f40d-446e-9cb4-64bc89659dbf',
    },

    {
      title: 'HP LIFE Ambassador',

      issuer: 'HPLife',

      year: '2024',

      image: '/certificates/previews/ab.png',

      credential:
        'https://www.life-global.org/en/badges/b20571cf-8d78-4c27-a6d7-b508f6470daa',
    },


    {
      title: 'Cloud Advanced: Architecture and Technologies',

      issuer: 'Huawie',

      year: '2024',

      image: '/certificates/previews/huawei.png',

      credential:
        '/certificates/huawei.pdf',
    },

    


  ]

  return (

    <section className="bg-[#faf7f4] px-6 py-28 md:px-12">

      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="max-w-4xl">

          <p className="text-sm font-semibold tracking-[0.3em] text-[#3A0519]">

            ACHIEVEMENTS

          </p>

          <h1 className="mt-6 font-heading text-5xl leading-[1.05] text-black md:text-7xl">

            Certifications, learning milestones,
            and continuous growth.

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-black/70">

            A growing collection of certifications,
            technical learning experiences, and
            professional development across
            frontend development, UI/UX,
            cloud technologies, AI, and networking.

          </p>

        </div>

        {/* GRID */}
        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

          {certificates.map((certificate) => (

            <div
              key={certificate.title}
              className="overflow-hidden rounded-[35px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-[220px] w-full object-cover transition duration-500 hover:scale-105"
                />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* TITLE */}
                <h2 className="font-heading text-2xl text-black">

                  {certificate.title}

                </h2>

                {/* ISSUER */}
                <p className="mt-3 text-lg text-black/60">

                  {certificate.issuer} · {certificate.year}

                </p>

                {/* BUTTON */}
                <div className="mt-7">

                  <a
                    href={certificate.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-[#3A0519] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#A53860]"
                  >

                    View Credential

                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default AchievementsExpanded