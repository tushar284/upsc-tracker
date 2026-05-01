// Global syllabus data — loaded as a script tag (works with file:// and GitHub Pages)
window.SYLLABUS = {
  prelims: {
    title: "Prelims — GS Paper I",
    units: [
      { id: "pre_hist", title: "History & Art-Culture", topics: [
        { id: "pre_h1", text: "Ancient India — Indus Valley, Vedic, Mauryan, Gupta periods" },
        { id: "pre_h2", text: "Medieval India — Delhi Sultanate, Vijayanagara, Mughals, Bhakti & Sufi" },
        { id: "pre_h3", text: "Modern India — 1757 to 1947; British policies; socio-religious reforms" },
        { id: "pre_h4", text: "Indian National Movement — 1857, Moderates & Extremists, Gandhi, INA" },
        { id: "pre_h5", text: "Art & Architecture — temple styles, sculptures, Ajanta, Mughal paintings" },
        { id: "pre_h6", text: "Literature, music, dance, performing arts, fairs & festivals" }
      ]},
      { id: "pre_geo", title: "Geography", topics: [
        { id: "pre_g1", text: "Physical Geography — geomorphology, climatology, oceanography" },
        { id: "pre_g2", text: "Indian Geography — physiographic divisions, rivers, soils, vegetation" },
        { id: "pre_g3", text: "Economic Geography — agriculture, industry, resources" },
        { id: "pre_g4", text: "World Geography — continents, climate zones, major features" },
        { id: "pre_g5", text: "Maps — important places/regions in news" }
      ]},
      { id: "pre_pol", title: "Indian Polity & Governance", topics: [
        { id: "pre_p1", text: "Constitution — Preamble, Schedules, Amendments, Fundamental Rights, DPSPs" },
        { id: "pre_p2", text: "Parliament, Executive, Judiciary — structure and functioning" },
        { id: "pre_p3", text: "Constitutional bodies — EC, CAG, UPSC, Finance Commission" },
        { id: "pre_p4", text: "Local governance — Panchayati Raj, 73rd/74th Amendments" },
        { id: "pre_p5", text: "Government policies and welfare schemes" }
      ]},
      { id: "pre_eco", title: "Economy", topics: [
        { id: "pre_e1", text: "Basic economic concepts — GDP, GNP, inflation, fiscal & monetary policy" },
        { id: "pre_e2", text: "Indian economy — agriculture, industry, services, trade" },
        { id: "pre_e3", text: "Budget, taxation, RBI, banking, capital markets" },
        { id: "pre_e4", text: "Government schemes — PM Awas, MNREGA, Jan Dhan, PM Kisan" },
        { id: "pre_e5", text: "International organisations — IMF, World Bank, WTO, ADB" }
      ]},
      { id: "pre_env", title: "Environment & Ecology", topics: [
        { id: "pre_ev1", text: "Ecosystems, biodiversity, food chains, national parks & sanctuaries" },
        { id: "pre_ev2", text: "Climate change — greenhouse gases, IPCC, Paris Agreement, COP" },
        { id: "pre_ev3", text: "Environmental laws and conventions — CITES, Ramsar, CBD, UNFCCC" },
        { id: "pre_ev4", text: "Pollution — air, water, soil; NGT; EIA" }
      ]},
      { id: "pre_sci", title: "Science & Technology", topics: [
        { id: "pre_s1", text: "Physics — motion, electricity, light, sound (Class X level)" },
        { id: "pre_s2", text: "Chemistry — elements, compounds, everyday chemistry" },
        { id: "pre_s3", text: "Biology — cell, genetics, diseases, human body systems" },
        { id: "pre_s4", text: "Space — ISRO missions, recent launches" },
        { id: "pre_s5", text: "Defence, nuclear, AI, biotech, robotics in news" }
      ]}
    ]
  },
  csat: {
    title: "Prelims — CSAT (Paper II)",
    units: [
      { id: "csat_comp", title: "Comprehension & English", topics: [
        { id: "cs_c1", text: "Reading comprehension — passage-based questions" },
        { id: "cs_c2", text: "English language comprehension skills" }
      ]},
      { id: "csat_lr", title: "Logical Reasoning & Analytical Ability", topics: [
        { id: "cs_l1", text: "Series, analogies, odd-one-out, coding-decoding" },
        { id: "cs_l2", text: "Blood relations, direction sense, seating arrangement" },
        { id: "cs_l3", text: "Syllogisms, statements & assumptions, inferences" },
        { id: "cs_l4", text: "Critical reasoning, argument analysis" }
      ]},
      { id: "csat_math", title: "Basic Numeracy & Data Interpretation", topics: [
        { id: "cs_m1", text: "Number system, HCF/LCM, simplification" },
        { id: "cs_m2", text: "Percentage, profit-loss, ratio-proportion, averages" },
        { id: "cs_m3", text: "Time-speed-distance, time & work" },
        { id: "cs_m4", text: "Data interpretation — tables, bar charts, pie charts, line graphs" }
      ]},
      { id: "csat_dm", title: "Decision Making & Problem Solving", topics: [
        { id: "cs_d1", text: "Decision-making and problem-solving scenarios" },
        { id: "cs_d2", text: "Interpersonal skills and general mental ability" }
      ]}
    ]
  },
  gs1: {
    title: "Mains — GS Paper I",
    units: [
      { id: "gs1_cult", title: "Indian Heritage & Culture", topics: [
        { id: "g1c1", text: "Art Forms, Literature and Architecture from ancient to modern times" },
        { id: "g1c2", text: "Modern Indian history from 1750 — events, personalities, issues" },
        { id: "g1c3", text: "Freedom Struggle — stages and important contributors/movements" },
        { id: "g1c4", text: "Post-independence consolidation and reorganisation" },
        { id: "g1c5", text: "World history — colonisation, decolonisation, world wars, cold war" }
      ]},
      { id: "gs1_soc", title: "Indian Society", topics: [
        { id: "g1s1", text: "Salient features of Indian Society; diversity of India" },
        { id: "g1s2", text: "Role of women and women's organisations; social empowerment" },
        { id: "g1s3", text: "Communalism, Regionalism, Secularism" },
        { id: "g1s4", text: "Urbanisation — growth and associated problems" },
        { id: "g1s5", text: "Population issues, poverty, globalisation and effects on Indian society" }
      ]},
      { id: "gs1_geo", title: "Geography", topics: [
        { id: "g1g1", text: "Salient features of world's physical geography" },
        { id: "g1g2", text: "Distribution of key natural resources across the world" },
        { id: "g1g3", text: "Changes in critical geographical features and flora & fauna" },
        { id: "g1g4", text: "Geophysical phenomena — earthquakes, tsunamis, volcanoes, cyclones" }
      ]}
    ]
  },
  gs2: {
    title: "Mains — GS Paper II",
    units: [
      { id: "gs2_pol", title: "Indian Constitution & Polity", topics: [
        { id: "g2p1", text: "Constitution — historical underpinnings, evolution, features, amendments" },
        { id: "g2p2", text: "Functions and responsibilities of Union and States; Centre-State relations" },
        { id: "g2p3", text: "Parliament and State Legislatures — structure, functioning, conduct of business" },
        { id: "g2p4", text: "Executive and Judiciary — structure, organisation, functioning" },
        { id: "g2p5", text: "Constitutional bodies, quasi-judicial bodies, regulatory bodies" }
      ]},
      { id: "gs2_gov", title: "Governance & Social Justice", topics: [
        { id: "g2g1", text: "Government policies and interventions for development" },
        { id: "g2g2", text: "Development processes; NGOs, SHGs, various groups and associations" },
        { id: "g2g3", text: "Welfare schemes for vulnerable sections; mechanisms for protection" },
        { id: "g2g4", text: "Issues relating to health, education, human resources" },
        { id: "g2g5", text: "Poverty, hunger; governance transparency, accountability, e-Governance" }
      ]},
      { id: "gs2_ir", title: "International Relations", topics: [
        { id: "g2i1", text: "India's foreign policy; Indian diaspora" },
        { id: "g2i2", text: "India and its neighbourhood — bilateral relations" },
        { id: "g2i3", text: "Effect of developed/developing countries' policies on India's interests" },
        { id: "g2i4", text: "Important international institutions — UN, WTO, IMF, WHO, IAEA" },
        { id: "g2i5", text: "Groupings and agreements — SAARC, BRICS, G20, SCO, QUAD, ASEAN" }
      ]}
    ]
  },
  gs3: {
    title: "Mains — GS Paper III",
    units: [
      { id: "gs3_eco", title: "Indian Economy & Development", topics: [
        { id: "g3e1", text: "Inclusive growth, budgeting, mobilisation of resources, growth" },
        { id: "g3e2", text: "Agriculture — irrigation, subsidies, MSP, food security, PDS, e-technology" },
        { id: "g3e3", text: "Infrastructure — energy, ports, roads, airports, railways; investment models" },
        { id: "g3e4", text: "Industrial policy, land reforms, liberalisation; effects of globalisation" }
      ]},
      { id: "gs3_env", title: "Environment & Disaster Management", topics: [
        { id: "g3ev1", text: "Conservation, environmental pollution and degradation; EIA" },
        { id: "g3ev2", text: "Disaster management — NDMA, types of disasters, vulnerable areas" },
        { id: "g3ev3", text: "Linkages between development and extremism; external state/non-state actors" }
      ]},
      { id: "gs3_sci", title: "Science & Technology", topics: [
        { id: "g3s1", text: "Developments and applications in everyday life; Indian achievements in S&T" },
        { id: "g3s2", text: "Indigenisation of technology; awareness in IT, Space, Computers, robotics" },
        { id: "g3s3", text: "Nano-technology, bio-technology, IPR" }
      ]},
      { id: "gs3_sec", title: "Internal Security", topics: [
        { id: "g3sc1", text: "Challenges — terrorism, insurgency, left-wing extremism" },
        { id: "g3sc2", text: "Security forces and agencies; cybersecurity; money-laundering" },
        { id: "g3sc3", text: "Border management; organised crime-terrorism nexus" }
      ]}
    ]
  },
  gs4: {
    title: "Mains — GS Paper IV (Ethics)",
    units: [
      { id: "gs4_eth", title: "Ethics & Human Interface", topics: [
        { id: "g4e1", text: "Essence, determinants and consequences of Ethics in human actions" },
        { id: "g4e2", text: "Dimensions of Ethics; ethics in private and public relationships" },
        { id: "g4e3", text: "Human Values — lessons from lives of great leaders, reformers" },
        { id: "g4e4", text: "Role of family, society and institutions in inculcating values" }
      ]},
      { id: "gs4_att", title: "Attitude, Aptitude & Emotional Intelligence", topics: [
        { id: "g4a1", text: "Attitude — content, structure, function; influence and social influence" },
        { id: "g4a2", text: "Aptitude and foundational values for Civil Services — integrity, impartiality" },
        { id: "g4a3", text: "Emotional intelligence — concepts, utilities, application in governance" },
        { id: "g4a4", text: "Contributions of moral thinkers — India and the world" }
      ]},
      { id: "gs4_pub", title: "Probity in Governance", topics: [
        { id: "g4p1", text: "Public/civil service values and ethics in public administration" },
        { id: "g4p2", text: "Probity in governance — philosophical basis, citizen's charter" },
        { id: "g4p3", text: "RTI; codes of ethics; quality of service delivery; public funds" },
        { id: "g4p4", text: "Case Studies — applying ethical principles to real situations" }
      ]}
    ]
  },
  anthropology: {
    paper1: {
      title: "Anthropology — Paper I (General)",
      units: [
        { id: "p1u1", title: "1. Meaning, Scope & Development", topics: [
          { id: "p1u1t1", text: "Meaning, scope and development of Anthropology" },
          { id: "p1u1t2", text: "Relationships with Social, Biological, Medical, Earth Sciences & Humanities" },
          { id: "p1u1t3", text: "Main branches of Anthropology and their scope" },
          { id: "p1u1t4", text: "Human Evolution — biological and cultural factors" }
        ]},
        { id: "p1u2", title: "2. Family, Marriage & Kinship", topics: [
          { id: "p1u2t1", text: "Family — definition, types, functions, changing perspectives" },
          { id: "p1u2t2", text: "Marriage — types, functions, regulations, marriage payments" },
          { id: "p1u2t3", text: "Kinship — terminology, descent, lineage, clan, phratry, moiety" },
          { id: "p1u2t4", text: "Residence rules; preferential and prescriptive marriage" }
        ]},
        { id: "p1u3", title: "3. Economic Organisation", topics: [
          { id: "p1u3t1", text: "Meaning, scope and relevance of economic anthropology" },
          { id: "p1u3t2", text: "Formalist vs Substantivist debate; reciprocity, redistribution, market" },
          { id: "p1u3t3", text: "Private property, land tenure, concepts of money" },
          { id: "p1u3t4", text: "Hunters-gatherers, pastoralism, horticulture, agriculture, industrialism" }
        ]},
        { id: "p1u4", title: "4. Political Organisation & Social Control", topics: [
          { id: "p1u4t1", text: "Band, tribe, chiefdom, kingdom, state" },
          { id: "p1u4t2", text: "Concept of power, authority, legitimacy" },
          { id: "p1u4t3", text: "Social control, law and justice in simple societies" }
        ]},
        { id: "p1u5", title: "5. Religion, Magic & Witchcraft", topics: [
          { id: "p1u5t1", text: "Anthropological approaches to study of religion" },
          { id: "p1u5t2", text: "Animism, animatism, totemism, taboo, fetishism" },
          { id: "p1u5t3", text: "Shamanism; sects and cults; myth and ritual" },
          { id: "p1u5t4", text: "Functions of magic, sorcery and witchcraft" }
        ]},
        { id: "p1u6", title: "6. Anthropological Theories", topics: [
          { id: "p1u6t1", text: "Classical Evolutionism — Tylor, Morgan, Spencer" },
          { id: "p1u6t2", text: "Historical Particularism — Boas; Diffusionism" },
          { id: "p1u6t3", text: "Functionalism — Malinowski; Structural-Functionalism — Radcliffe-Brown" },
          { id: "p1u6t4", text: "Structuralism — Lévi-Strauss; Culture & Personality school" },
          { id: "p1u6t5", text: "Neo-evolutionism — White, Steward; Cultural ecology; Marxist anthropology" },
          { id: "p1u6t6", text: "Symbolic & Interpretive anthropology; Post-modern anthropology" }
        ]},
        { id: "p1u7", title: "7. Culture, Language & Communication", topics: [
          { id: "p1u7t1", text: "Nature, origin and characteristics of language" },
          { id: "p1u7t2", text: "Language and culture; language and cognition; non-verbal communication" },
          { id: "p1u7t3", text: "Social context of language use; sociolinguistics" }
        ]},
        { id: "p1u8", title: "8. Research Methods", topics: [
          { id: "p1u8t1", text: "Fieldwork tradition; participant observation" },
          { id: "p1u8t2", text: "Interview, genealogical method, case study, extended case method" },
          { id: "p1u8t3", text: "Quantitative and qualitative data analysis; sampling methods" },
          { id: "p1u8t4", text: "Ethics of anthropological research" }
        ]},
        { id: "p1u9", title: "9. Human Genetics", topics: [
          { id: "p1u9t1", text: "Mendelian genetics in man; chromosomal theory of inheritance" },
          { id: "p1u9t2", text: "ABO, Rh blood groups; HLA; chromosomal aberrations" },
          { id: "p1u9t3", text: "Population genetics — gene frequency, Hardy-Weinberg law" },
          { id: "p1u9t4", text: "Genetic disorders — thalassemia, sickle cell, colour blindness, haemophilia" }
        ]},
        { id: "p1u10", title: "10. Concept of Race", topics: [
          { id: "p1u10t1", text: "Historical and biological concept of race; racial classifications" },
          { id: "p1u10t2", text: "Race and intelligence debate; racism; racial hybridity" },
          { id: "p1u10t3", text: "Biological basis of morphological variation — skin colour, stature, cephalic index" }
        ]},
        { id: "p1u11", title: "11. Age, Sex & Population", topics: [
          { id: "p1u11t1", text: "Concept of biological age; determination of sex" },
          { id: "p1u11t2", text: "Demographic concepts — fertility, mortality, migration, life expectancy" },
          { id: "p1u11t3", text: "Ecological anthropology; biosphere; human adaptation to climate and altitude" }
        ]},
        { id: "p1u12", title: "12. Primate Behaviour", topics: [
          { id: "p1u12t1", text: "Non-human primates — classification; socio-ecological characteristics" },
          { id: "p1u12t2", text: "Primate behaviour — social structure, communication, tool use, learning" },
          { id: "p1u12t3", text: "Relevance of primate studies for understanding human evolution" }
        ]}
      ]
    },
    paper2: {
      title: "Anthropology — Paper II (Indian Context)",
      units: [
        { id: "p2u1", title: "1. Evolution of Indian Culture & Civilisation", topics: [
          { id: "p2u1t1", text: "Prehistoric foundations — Paleolithic, Mesolithic, Neolithic cultures in India" },
          { id: "p2u1t2", text: "Protohistoric cultures — Indus Valley Civilisation" },
          { id: "p2u1t3", text: "Contributions of tribal cultures to Indian civilisation" }
        ]},
        { id: "p2u2", title: "2. Ethno-archaeology in India", topics: [
          { id: "p2u2t1", text: "Concept of ethno-archaeology; camping sites, settlement patterns" },
          { id: "p2u2t2", text: "Ethno-archaeological research in India — case studies" }
        ]},
        { id: "p2u3", title: "3. Demographic Profile of India", topics: [
          { id: "p2u3t1", text: "Ethnic and linguistic elements in Indian population and distribution" },
          { id: "p2u3t2", text: "Indian population — growth, distribution, composition; racial elements" },
          { id: "p2u3t3", text: "SCs, STs, OBCs — size and distribution" }
        ]},
        { id: "p2u4", title: "4. Traditional Indian Social System", topics: [
          { id: "p2u4t1", text: "Varnashrama; purushartha; karma, rina, punarjanma; pollution & purity" },
          { id: "p2u4t2", text: "Jajmani system; sacred complex; nature-man-spirit complex" },
          { id: "p2u4t3", text: "Caste system — origin, characteristics, untouchability, inter-caste relations" }
        ]},
        { id: "p2u5", title: "5. Emergence of Indian Anthropology", topics: [
          { id: "p2u5t1", text: "Historical development — colonial to contemporary anthropology" },
          { id: "p2u5t2", text: "Contributions — Ghurye, M.N. Srinivas, Verrier Elwin, S.C. Dube" },
          { id: "p2u5t3", text: "Unity in diversity — 'little' and 'great' tradition concept" }
        ]},
        { id: "p2u6", title: "6. Tribal Situation in India", topics: [
          { id: "p2u6t1", text: "Bio-genetic variability; isolation and gene drift in tribal populations" },
          { id: "p2u6t2", text: "Linguistic and socio-economic characteristics of tribal communities" },
          { id: "p2u6t3", text: "Geographical distribution — tribal belts; hill tribes, plains tribes" },
          { id: "p2u6t4", text: "Colonial policies and major tribal movements — Santhal, Munda, Birsa Munda" }
        ]},
        { id: "p2u7", title: "7. Problems of Tribal Communities", topics: [
          { id: "p2u7t1", text: "Literacy, educational problems and developmental education" },
          { id: "p2u7t2", text: "Nutritional status, health problems, reproductive health" },
          { id: "p2u7t3", text: "Alcoholism, substance abuse; displacement and rehabilitation" }
        ]},
        { id: "p2u8", title: "8. Tribal Policy, Law & Development", topics: [
          { id: "p2u8t1", text: "Constitutional safeguards — Fifth and Sixth Schedules; Art. 15, 16, 46, 340" },
          { id: "p2u8t2", text: "Land alienation, forest rights; FRA 2006; LARR Act 2013" },
          { id: "p2u8t3", text: "ITDP, TSP, MADA, Clusters; role of NGOs" }
        ]},
        { id: "p2u9", title: "9. Social Change & Contemporary India", topics: [
          { id: "p2u9t1", text: "Sanskritization, westernization, modernization — Srinivas" },
          { id: "p2u9t2", text: "Tribal, agrarian and socio-religious reform movements" },
          { id: "p2u9t3", text: "Impact of development projects on tribal societies; globalisation" }
        ]},
        { id: "p2u10", title: "10. Applied Anthropology", topics: [
          { id: "p2u10t1", text: "Scope and relevance of applied anthropology; action anthropology" },
          { id: "p2u10t2", text: "Medical and nutritional anthropology; developmental anthropology" },
          { id: "p2u10t3", text: "Participatory development — PRA, RRA" },
          { id: "p2u10t4", text: "Forensic anthropology — identification, skeletal analysis" }
        ]}
      ]
    }
  },
  books: [
    { id: "b1", title: "P.K. Misra — Indian Anthropology", subject: "anthro", totalPages: 450 },
    { id: "b2", title: "Nadeem Hasnain — Tribal India", subject: "anthro", totalPages: 320 },
    { id: "b3", title: "Ember & Ember — Anthropology (13th Ed.)", subject: "anthro", totalPages: 680 },
    { id: "b4", title: "Nanda & Warms — Cultural Anthropology", subject: "anthro", totalPages: 520 },
    { id: "b5", title: "NCERT Class 6–12 — History (all)", subject: "gs", totalPages: 600 },
    { id: "b6", title: "Bipin Chandra — Modern India", subject: "gs", totalPages: 340 },
    { id: "b7", title: "M. Laxmikanth — Indian Polity", subject: "gs", totalPages: 700 },
    { id: "b8", title: "Ramesh Singh — Indian Economy", subject: "gs", totalPages: 610 },
    { id: "b9", title: "NCERT Class 11–12 — Geography", subject: "gs", totalPages: 480 }
  ],
  nextias_modules: [
    // ── Year 1: Foundation (~Oct 2025 – Sep 2026) ──────────────────────────
    { id: "ni_eco",    title: "Economy (Foundation)",              gs_paper: "GS III · Y1",      status: "completed", year: 1 },
    { id: "ni_env",    title: "Environment & Ecology (Foundation)",gs_paper: "GS III · Y1",      status: "completed", year: 1 },
    { id: "ni_sci",    title: "General Science (Foundation)",      gs_paper: "GS III · Y1",      status: "completed", year: 1 },
    { id: "ni_sci2",   title: "Science Foundational",              gs_paper: "GS III · Y1",      status: "completed", year: 1 },
    { id: "ni_csat",   title: "Aptitude / CSAT",                   gs_paper: "Prelims P-II · Y1",status: "ongoing",   year: 1 },
    { id: "ni_ca",     title: "Current Affairs (weekly)",          gs_paper: "All Papers",       status: "ongoing",   year: 1 },
    { id: "ni_hist",   title: "History (Anc + Med + Mod)",         gs_paper: "GS I · Y1",        status: "upcoming",  year: 1 },
    { id: "ni_cult",   title: "Art & Culture (Foundation)",        gs_paper: "GS I · Y1",        status: "upcoming",  year: 1 },
    { id: "ni_geo",    title: "Geography (Foundation)",            gs_paper: "GS I · Y1",        status: "upcoming",  year: 1 },
    { id: "ni_pol",    title: "Indian Polity (Foundation)",        gs_paper: "GS II · Y1",       status: "upcoming",  year: 1 },
    { id: "ni_gov",    title: "Governance & Social Justice",       gs_paper: "GS II · Y1",       status: "upcoming",  year: 1 },
    { id: "ni_ir",     title: "International Relations",           gs_paper: "GS II · Y1",       status: "upcoming",  year: 1 },
    { id: "ni_eth",    title: "Ethics (GS IV)",                    gs_paper: "GS IV · Y1",       status: "upcoming",  year: 1 },
    // ── Year 2: Advanced (~Oct 2026 – Sep 2027) ────────────────────────────
    { id: "ni2_sci",   title: "Science & Technology (Advanced)",   gs_paper: "GS III · Y2",      status: "upcoming",  year: 2 },
    { id: "ni2_eco",   title: "Indian Economy (Advanced)",         gs_paper: "GS III · Y2",      status: "upcoming",  year: 2 },
    { id: "ni2_cult",  title: "Art & Culture (Advanced)",          gs_paper: "GS I · Y2",        status: "upcoming",  year: 2 },
    { id: "ni2_pol",   title: "Indian Polity (Advanced)",          gs_paper: "GS II · Y2",       status: "upcoming",  year: 2 },
    { id: "ni2_sec",   title: "Internal Security (Advanced)",      gs_paper: "GS III · Y2",      status: "upcoming",  year: 2 },
    { id: "ni2_env",   title: "Ecology & Environment (Advanced)",  gs_paper: "GS III · Y2",      status: "upcoming",  year: 2 },
    { id: "ni2_geo",   title: "Geography (Advanced)",              gs_paper: "GS I · Y2",        status: "upcoming",  year: 2 },
    { id: "ni_anthro", title: "Anthropology Optional",             gs_paper: "Optional I + II",  status: "upcoming",  year: 2 },
    { id: "ni_essay",  title: "Essay Writing",                     gs_paper: "GS Essay",         status: "upcoming",  year: 2 },
    { id: "ni_pre_ts", title: "Prelims Test Series",               gs_paper: "Y2 Prep",          status: "upcoming",  year: 2 },
    { id: "ni_mai_ts", title: "Mains Test Series",                 gs_paper: "Y2 Prep",          status: "upcoming",  year: 2 }
  ]
};
