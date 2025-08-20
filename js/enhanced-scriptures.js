// Enhanced Courts of Heaven Scripture Database
// All scriptures from public domain sources
// This enhanced version provides significantly more variety for prayer generation

const scriptures = {
    approaching: [
        { verse: "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.", reference: "Hebrews 4:16" },
        { verse: "In whom we have boldness and access with confidence through our faith in him.", reference: "Ephesians 3:12" },
        { verse: "Draw near to God, and he will draw near to you.", reference: "James 4:8" },
        { verse: "Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!", reference: "Psalm 100:4" },
        { verse: "For through him we both have access in one Spirit to the Father.", reference: "Ephesians 2:18" },
        { verse: "Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus.", reference: "Hebrews 10:19" },
        { verse: "Let us draw near with a true heart in full assurance of faith.", reference: "Hebrews 10:22" },
        { verse: "I will come into thy house in the multitude of thy mercy: and in thy fear will I worship toward thy holy temple.", reference: "Psalm 5:7" },
        { verse: "But as for me, I will come into thy house in the multitude of thy mercy.", reference: "Psalm 5:7" },
        { verse: "O come, let us worship and bow down: let us kneel before the LORD our maker.", reference: "Psalm 95:6" },
        { verse: "But thou art holy, O thou that inhabitest the praises of Israel.", reference: "Psalm 22:3" },
        { verse: "God is Spirit, and those who worship Him must worship in spirit and truth.", reference: "John 4:24" },
        { verse: "One thing I have desired of the LORD, that will I seek: That I may dwell in the house of the LORD all the days of my life.", reference: "Psalm 27:4" },
        { verse: "My voice You shall hear in the morning, O LORD; In the morning I will direct it to You, and I will look up.", reference: "Psalm 5:3" },
        { verse: "I will go to the altar of God, to God my exceeding joy.", reference: "Psalm 43:4" }
    ],
    honoring: [
        { verse: "Holy, holy, holy is the Lord God Almighty, who was, and is, and is to come.", reference: "Revelation 4:8" },
        { verse: "Worthy are you, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they existed and were created.", reference: "Revelation 4:11" },
        { verse: "Great and amazing are your deeds, O Lord God the Almighty! Just and true are your ways, O King of the nations!", reference: "Revelation 15:3" },
        { verse: "To the King of the ages, immortal, invisible, the only God, be honor and glory forever and ever. Amen.", reference: "1 Timothy 1:17" },
        { verse: "Yours, O LORD, is the greatness and the power and the glory and the victory and the majesty, for all that is in the heavens and in the earth is yours.", reference: "1 Chronicles 29:11" },
        { verse: "Blessing and honor and glory and power be to Him who sits on the throne, and to the Lamb, forever and ever!", reference: "Revelation 5:13" },
        { verse: "Oh, the depth of the riches both of the wisdom and knowledge of God! How unsearchable are His judgments and His ways past finding out!", reference: "Romans 11:33" },
        { verse: "Now to the King eternal, immortal, invisible, to God who alone is wise, be honor and glory forever and ever. Amen.", reference: "1 Timothy 1:17" },
        { verse: "For from Him and through Him and to Him are all things, to whom be glory forever. Amen.", reference: "Romans 11:36" },
        { verse: "Thine, O LORD, is the greatness, and the power, and the glory, and the victory, and the majesty: for all that is in the heaven and in the earth is thine.", reference: "1 Chronicles 29:11" },
        { verse: "Blessing, and glory, and wisdom, and thanksgiving, and honour, and power, and might, be unto our God for ever and ever. Amen.", reference: "Revelation 7:12" },
        { verse: "The LORD reigneth, he is clothed with majesty; the LORD is clothed with strength, wherewith he hath girded himself.", reference: "Psalm 93:1" },
        { verse: "O LORD, our Lord, how excellent is thy name in all the earth! who hast set thy glory above the heavens.", reference: "Psalm 8:1" },
        { verse: "I will extol thee, my God, O king; and I will bless thy name for ever and ever.", reference: "Psalm 145:1" },
        { verse: "Let them praise the name of the LORD: for his name alone is excellent; his glory is above the earth and heaven.", reference: "Psalm 148:13" }
    ],
    confession: [
        { verse: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.", reference: "1 John 1:9" },
        { verse: "For I know my transgressions, and my sin is ever before me. Against you, you only, have I sinned and done what is evil in your sight.", reference: "Psalm 51:3-4" },
        { verse: "Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy.", reference: "Proverbs 28:13" },
        { verse: "Repent therefore, and turn back, that your sins may be blotted out.", reference: "Acts 3:19" },
        { verse: "Create in me a clean heart, O God, and renew a right spirit within me.", reference: "Psalm 51:10" },
        { verse: "Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions.", reference: "Psalm 51:1" },
        { verse: "Wash me thoroughly from my iniquity, and cleanse me from my sin!", reference: "Psalm 51:2" },
        { verse: "The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise.", reference: "Psalm 51:17" },
        { verse: "As far as the east is from the west, so far does he remove our transgressions from us.", reference: "Psalm 103:12" },
        { verse: "I acknowledged my sin to you, and I did not cover my iniquity; I said, 'I will confess my transgressions to the LORD,' and you forgave the iniquity of my sin.", reference: "Psalm 32:5" },
        { verse: "Blessed is the one whose transgression is forgiven, whose sin is covered.", reference: "Psalm 32:1" },
        { verse: "If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin.", reference: "2 Chronicles 7:14" },
        { verse: "Let the wicked forsake his way, and the unrighteous man his thoughts; let him return to the LORD, that he may have compassion on him, and to our God, for he will abundantly pardon.", reference: "Isaiah 55:7" },
        { verse: "For I will be merciful toward their iniquities, and I will remember their sins no more.", reference: "Hebrews 8:12" },
        { verse: "He does not deal with us according to our sins, nor repay us according to our iniquities.", reference: "Psalm 103:10" }
    ],
    presenting: [
        { verse: "Come now, let us reason together, says the LORD.", reference: "Isaiah 1:18" },
        { verse: "Put me in remembrance; let us argue together; set forth your case, that you may be proved right.", reference: "Isaiah 43:26" },
        { verse: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.", reference: "Philippians 4:6" },
        { verse: "And this is the confidence that we have toward him, that if we ask anything according to his will he hears us.", reference: "1 John 5:14" },
        { verse: "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.", reference: "Matthew 7:7" },
        { verse: "Call to me and I will answer you, and will tell you great and hidden things that you have not known.", reference: "Jeremiah 33:3" },
        { verse: "Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours.", reference: "Mark 11:24" },
        { verse: "Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.", reference: "Hebrews 4:16" },
        { verse: "Casting all your anxieties on him, because he cares for you.", reference: "1 Peter 5:7" },
        { verse: "Continue steadfastly in prayer, being watchful in it with thanksgiving.", reference: "Colossians 4:2" },
        { verse: "The LORD is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
        { verse: "Before they call I will answer; while they are yet speaking I will hear.", reference: "Isaiah 65:24" },
        { verse: "Evening and morning and at noon I utter my complaint and moan, and he hears my voice.", reference: "Psalm 55:17" },
        { verse: "In my distress I called upon the LORD; to my God I cried for help. From his temple he heard my voice, and my cry to him reached his ears.", reference: "Psalm 18:6" },
        { verse: "The eyes of the LORD are toward the righteous and his ears toward their cry.", reference: "Psalm 34:15" }
    ],
    silencing: [
        { verse: "And I heard a loud voice in heaven, saying, 'Now the salvation and the power and the kingdom of our God and the authority of his Christ have come, for the accuser of our brothers has been thrown down, who accuses them day and night before our God.'", reference: "Revelation 12:10" },
        { verse: "No weapon that is fashioned against you shall succeed, and you shall refute every tongue that rises against you in judgment. This is the heritage of the servants of the LORD.", reference: "Isaiah 54:17" },
        { verse: "Who shall bring any charge against God's elect? It is God who justifies.", reference: "Romans 8:33" },
        { verse: "The LORD will fight for you, and you have only to be silent.", reference: "Exodus 14:14" },
        { verse: "Submit yourselves therefore to God. Resist the devil, and he will flee from you.", reference: "James 4:7" },
        { verse: "But the Lord is faithful. He will establish you and guard you against the evil one.", reference: "2 Thessalonians 3:3" },
        { verse: "We know that everyone who has been born of God does not keep on sinning, but he who was born of God protects him, and the evil one does not touch him.", reference: "1 John 5:18" },
        { verse: "The God of peace will soon crush Satan under your feet.", reference: "Romans 16:20" },
        { verse: "I have given you authority to tread on serpents and scorpions, and over all the power of the enemy, and nothing shall hurt you.", reference: "Luke 10:19" },
        { verse: "For though we walk in the flesh, we are not waging war according to the flesh. For the weapons of our warfare are not of the flesh but have divine power to destroy strongholds.", reference: "2 Corinthians 10:3-4" },
        { verse: "Put on the whole armor of God, that you may be able to stand against the schemes of the devil.", reference: "Ephesians 6:11" },
        { verse: "Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour. Resist him, firm in your faith.", reference: "1 Peter 5:8-9" },
        { verse: "Little children, you are from God and have overcome them, for he who is in you is greater than he who is in the world.", reference: "1 John 4:4" },
        { verse: "They overcame him by the blood of the Lamb and by the word of their testimony.", reference: "Revelation 12:11" },
        { verse: "The name of the LORD is a strong tower; the righteous man runs into it and is safe.", reference: "Proverbs 18:10" }
    ],
    judgment: [
        { verse: "For the LORD is our judge; the LORD is our lawgiver; the LORD is our king; he will save us.", reference: "Isaiah 33:22" },
        { verse: "But with righteousness he shall judge the poor, and decide with equity for the meek of the earth.", reference: "Isaiah 11:4" },
        { verse: "For we must all appear before the judgment seat of Christ, so that each one may receive what is due for what he has done in the body, whether good or evil.", reference: "2 Corinthians 5:10" },
        { verse: "The Ancient of Days took his seat, and the books were opened.", reference: "Daniel 7:9-10" },
        { verse: "Let justice roll down like waters, and righteousness like an ever-flowing stream.", reference: "Amos 5:24" },
        { verse: "Righteousness and justice are the foundation of your throne; steadfast love and faithfulness go before you.", reference: "Psalm 89:14" },
        { verse: "The LORD sits enthroned forever; he has established his throne for justice, and he judges the world with righteousness; he judges the peoples with uprightness.", reference: "Psalm 9:7-8" },
        { verse: "The heavens declare his righteousness, for God himself is judge!", reference: "Psalm 50:6" },
        { verse: "He will judge the world in righteousness, and the peoples in his faithfulness.", reference: "Psalm 96:13" },
        { verse: "The LORD executes righteousness and justice for all who are oppressed.", reference: "Psalm 103:6" },
        { verse: "For the LORD loves justice; he will not forsake his saints.", reference: "Psalm 37:28" },
        { verse: "For the word of the LORD is upright, and all his work is done in faithfulness. He loves righteousness and justice.", reference: "Psalm 33:4-5" },
        { verse: "For the LORD is righteous; he loves righteous deeds; the upright shall behold his face.", reference: "Psalm 11:7" },
        { verse: "I the LORD search the heart and test the mind, to give every man according to his ways, according to the fruit of his deeds.", reference: "Jeremiah 17:10" },
        { verse: "Far be it from you to do such a thing, to put the righteous to death with the wicked, so that the righteous fare as the wicked! Far be that from you! Shall not the Judge of all the earth do what is just?", reference: "Genesis 18:25" }
    ],
    verdict: [
        { verse: "There is therefore now no condemnation for those who are in Christ Jesus.", reference: "Romans 8:1" },
        { verse: "For the Lord will not cast off forever, but, though he cause grief, he will have compassion according to the abundance of his steadfast love.", reference: "Lamentations 3:31-32" },
        { verse: "The LORD has taken away the judgments against you; he has cleared away your enemies.", reference: "Zephaniah 3:15" },
        { verse: "Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the LORD forever.", reference: "Psalm 23:6" },
        { verse: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.", reference: "Revelation 21:4" },
        { verse: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.", reference: "Romans 8:38-39" },
        { verse: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.", reference: "Lamentations 3:22-23" },
        { verse: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.", reference: "Romans 8:28" },
        { verse: "For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.", reference: "Jeremiah 29:11" },
        { verse: "The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.", reference: "Zephaniah 3:17" },
        { verse: "No longer will there be anything accursed, but the throne of God and of the Lamb will be in it, and his servants will worship him.", reference: "Revelation 22:3" },
        { verse: "He who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?", reference: "Romans 8:32" },
        { verse: "The LORD is merciful and gracious, slow to anger and abounding in steadfast love.", reference: "Psalm 103:8" },
        { verse: "For as high as the heavens are above the earth, so great is his steadfast love toward those who fear him.", reference: "Psalm 103:11" },
        { verse: "But you, O Lord, are a God merciful and gracious, slow to anger and abounding in steadfast love and faithfulness.", reference: "Psalm 86:15" }
    ],
    angels: [
        { verse: "For he will command his angels concerning you to guard you in all your ways.", reference: "Psalm 91:11" },
        { verse: "Are they not all ministering spirits sent out to serve for the sake of those who are to inherit salvation?", reference: "Hebrews 1:14" },
        { verse: "Bless the LORD, O you his angels, you mighty ones who do his word, obeying the voice of his word!", reference: "Psalm 103:20" },
        { verse: "The angel of the LORD encamps around those who fear him, and delivers them.", reference: "Psalm 34:7" },
        { verse: "And he will send out his angels with a loud trumpet call, and they will gather his elect from the four winds, from one end of heaven to the other.", reference: "Matthew 24:31" },
        { verse: "Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares.", reference: "Hebrews 13:2" },
        { verse: "For it is written, 'He will command his angels concerning you, to guard you,' and 'On their hands they will bear you up, lest you strike your foot against a stone.'", reference: "Luke 4:10-11" },
        { verse: "And behold, an angel of the Lord stood next to him, and a light shone in the cell. He struck Peter on the side and woke him, saying, 'Get up quickly.' And the chains fell off his hands.", reference: "Acts 12:7" },
        { verse: "Then the devil left him, and behold, angels came and were ministering to him.", reference: "Matthew 4:11" },
        { verse: "And an angel from heaven appeared to him, strengthening him.", reference: "Luke 22:43" },
        { verse: "But during the night an angel of the Lord opened the prison doors and brought them out.", reference: "Acts 5:19" },
        { verse: "And I saw another angel ascending from the rising of the sun, with the seal of the living God, and he called with a loud voice to the four angels who had been given power to harm earth and sea.", reference: "Revelation 7:2" },
        { verse: "Then I looked, and I heard around the throne and the living creatures and the elders the voice of many angels, numbering myriads of myriads and thousands of thousands.", reference: "Revelation 5:11" },
        { verse: "And the angel said to those who were standing before him, 'Remove the filthy garments from him.' And to him he said, 'Behold, I have taken your iniquity away from you, and I will clothe you with pure vestments.'", reference: "Zechariah 3:4" },
        { verse: "My God sent his angel and shut the lions' mouths, and they have not harmed me, because I was found blameless before him.", reference: "Daniel 6:22" }
    ]
};

// Enhanced prayer templates for personal, compassionate tone
const prayerIntros = [
    "Heavenly Father, with humble hearts we approach Your throne of grace today,",
    "Lord God Almighty, as I enter Your courts with praise,",
    "Gracious Father, I come before Your heavenly court today,",
    "Abba Father, I approach Your throne room with reverence and love,",
    "Holy God, I stand before Your courts with thanksgiving in my heart,",
    "Eternal King, I bow before Your heavenly court with awe and wonder,",
    "Righteous Judge of all the earth, I come before Your throne with confidence,",
    "Sovereign Lord, I enter Your courts with praise and adoration,",
    "Merciful Father, I approach Your divine courtroom with a humble heart,",
    "Almighty God, I stand in Your presence with reverence and holy fear,",
    "Creator of heaven and earth, I enter Your throne room with worship,",
    "Lord of hosts, I come before Your heavenly tribunal with faith,",
    "God of justice and mercy, I approach Your courts with expectation,",
    "Loving Father, I draw near to Your throne of judgment with trust,",
    "Most High God, I enter Your presence with thanksgiving and praise,"
];

const prayerClosings = [
    "I thank You for hearing my prayer in Your courts today. In Jesus' mighty name, Amen.",
    "I receive Your verdict with gratitude and leave Your courts changed. In the name of Jesus Christ, Amen.",
    "I walk away from Your courts today with peace and assurance of Your love. In Jesus' name, Amen.",
    "With deepest gratitude, I leave Your heavenly courtroom carrying Your decree. In Jesus' name, Amen.",
    "I depart Your presence now, carrying Your authority and blessing. In the precious name of Jesus, Amen.",
    "I leave Your courts with confidence, knowing Your verdict stands eternal. In the mighty name of Jesus, Amen.",
    "With thanksgiving, I exit Your throne room carrying Your divine judgment. Through Christ our Lord, Amen.",
    "I step forth from Your presence empowered by Your heavenly decree. In Jesus' name, Amen.",
    "I depart Your courts with joy, knowing Your judgment is perfect. Through Christ our Advocate, Amen.",
    "With a heart full of praise, I leave Your heavenly tribunal. In the name above all names, Jesus Christ, Amen.",
    "I go forth from Your presence carrying Your divine authority. In the name of Jesus, Amen.",
    "I thank You for Your righteous judgment and leave Your courts transformed. Through Christ our Lord, Amen.",
    "I depart with Your heavenly verdict sealed in my heart. In the precious name of Jesus, Amen.",
    "With humble gratitude, I leave Your throne room carrying Your divine wisdom. In Jesus' name, Amen.",
    "I go forth from Your courts with renewed strength and purpose. In the mighty name of Jesus Christ, Amen."
];

// Enhanced prayer section templates for approaching God's throne
const approachingTemplates = [
    "I stand before Your throne of grace with confidence, knowing that You welcome me into Your courts. As Your Word says, &quot;[VERSE]&quot; [REFERENCE].",
    "With boldness, I enter Your heavenly courtroom, for Your Word declares, &quot;[VERSE]&quot; [REFERENCE]. I come before You with reverence and awe.",
    "I approach Your throne of judgment with confidence through the blood of Jesus. Your scripture reminds us, &quot;[VERSE]&quot; [REFERENCE].",
    "With a grateful heart, I enter Your courts as Your Word invites, &quot;[VERSE]&quot; [REFERENCE]. I stand before You in the authority of Jesus' name.",
    "I come before Your heavenly tribunal, for Your Word assures me, &quot;[VERSE]&quot; [REFERENCE]. I approach with confidence and faith.",
    "With holy boldness, I enter Your presence, remembering Your promise: &quot;[VERSE]&quot; [REFERENCE]. I stand before Your throne of grace.",
    "I approach Your divine courtroom with reverence, as Your Word instructs: &quot;[VERSE]&quot; [REFERENCE]. I come seeking Your perfect judgment.",
    "With confidence through Christ, I stand before Your throne. Your scripture declares, &quot;[VERSE]&quot; [REFERENCE]. I enter Your courts with praise."
];

// Enhanced prayer section templates for honoring God
const honoringTemplates = [
    "I honor You as the righteous Judge of all the earth, the King of Kings and Lord of Lords. &quot;[VERSE]&quot; [REFERENCE]. You alone are worthy of all praise and glory.",
    "I acknowledge Your sovereignty and majesty as the righteous Judge. Your Word declares, &quot;[VERSE]&quot; [REFERENCE]. All honor and glory belong to You alone.",
    "I bow before Your throne in worship, recognizing Your perfect justice and mercy. &quot;[VERSE]&quot; [REFERENCE]. You are worthy of all praise.",
    "I exalt You as the righteous Judge whose throne is established in justice. As scripture proclaims, &quot;[VERSE]&quot; [REFERENCE]. All glory belongs to You.",
    "I honor Your majesty and authority as the Judge of all the earth. Your Word says, &quot;[VERSE]&quot; [REFERENCE]. You alone deserve all worship and praise.",
    "I acknowledge Your supreme authority in heaven and earth. As Your Word declares, &quot;[VERSE]&quot; [REFERENCE]. All honor and glory are Yours alone.",
    "I worship You as the perfect Judge whose decisions are always just. Scripture proclaims, &quot;[VERSE]&quot; [REFERENCE]. You are worthy of all praise.",
    "I exalt Your holy name as the righteous Judge of all creation. Your Word states, &quot;[VERSE]&quot; [REFERENCE]. All glory and honor belong to You."
];

// Enhanced prayer section templates for confession and repentance
const confessionTemplates = [
    "Before presenting my case, I confess any sin or iniquity in my life. I repent and turn away from anything that separates me from Your presence. Your Word promises, &quot;[VERSE]&quot; [REFERENCE].",
    "I humble myself before You, confessing my sins and shortcomings. I turn from all unrighteousness, knowing Your Word assures us, &quot;[VERSE]&quot; [REFERENCE].",
    "With a contrite heart, I acknowledge my transgressions before Your court. I repent fully, trusting Your promise that &quot;[VERSE]&quot; [REFERENCE].",
    "I confess any sin that would hinder my petition before Your throne. I turn from all unrighteousness, holding to Your Word that &quot;[VERSE]&quot; [REFERENCE].",
    "Before presenting my case, I repent of all sin and iniquity. I turn to You with my whole heart, remembering Your promise: &quot;[VERSE]&quot; [REFERENCE].",
    "I acknowledge my failures and shortcomings before Your perfect court. I repent sincerely, trusting in Your Word that &quot;[VERSE]&quot; [REFERENCE].",
    "With humility, I confess my sins before Your throne of grace. I turn from all unrighteousness, holding fast to Your promise that &quot;[VERSE]&quot; [REFERENCE].",
    "I bring my confession before Your court, turning from all sin and iniquity. Your Word assures me that &quot;[VERSE]&quot; [REFERENCE]."
];

// Enhanced prayer section templates for presenting your case
const presentingTemplates = [
    "Lord, I bring before Your court my petition regarding [TOPIC]. I present this matter to You, knowing that &quot;[VERSE]&quot; [REFERENCE]. I ask for Your divine intervention and wisdom in this situation.",
    "I now present my case concerning [TOPIC] before Your heavenly court. As Your Word says, &quot;[VERSE]&quot; [REFERENCE]. I seek Your divine guidance and intervention.",
    "With reverence, I bring [TOPIC] before Your throne of judgment. Your scripture declares, &quot;[VERSE]&quot; [REFERENCE]. I ask for Your wisdom and direction.",
    "I present my petition regarding [TOPIC] before Your court. I stand on Your promise that &quot;[VERSE]&quot; [REFERENCE]. I seek Your divine counsel and intervention.",
    "Before Your throne, I bring my case concerning [TOPIC]. Your Word assures me, &quot;[VERSE]&quot; [REFERENCE]. I ask for Your heavenly wisdom and guidance.",
    "I lay before Your court my petition regarding [TOPIC]. As scripture states, &quot;[VERSE]&quot; [REFERENCE]. I seek Your divine intervention and direction.",
    "With faith, I present [TOPIC] before Your heavenly tribunal. Your Word promises, &quot;[VERSE]&quot; [REFERENCE]. I ask for Your wisdom and perfect judgment.",
    "I bring before Your court my request concerning [TOPIC]. Your scripture declares, &quot;[VERSE]&quot; [REFERENCE]. I seek Your divine guidance in this matter."
];

// Enhanced prayer section templates for silencing the accuser
const silencingTemplates = [
    "I silence every voice of the accuser that speaks against me in this matter. By the authority of Jesus Christ, I declare, &quot;[VERSE]&quot; [REFERENCE]. No weapon formed against me shall prosper.",
    "In the authority of Jesus' name, I silence the accuser in this case. Your Word declares, &quot;[VERSE]&quot; [REFERENCE]. I stand against every opposing voice.",
    "I rebuke every accusation against me in this matter. Through Christ's authority, I proclaim, &quot;[VERSE]&quot; [REFERENCE]. The enemy's voice is silenced.",
    "By the blood of Jesus, I silence every accusation in this case. Scripture affirms, &quot;[VERSE]&quot; [REFERENCE]. No weapon formed against me will succeed.",
    "I declare the enemy silenced in this matter through Christ's authority. Your Word states, &quot;[VERSE]&quot; [REFERENCE]. Every accusation falls powerless.",
    "Through the power of Jesus' name, I silence the accuser's voice. As Your Word promises, &quot;[VERSE]&quot; [REFERENCE]. No accusation will stand against me.",
    "I rebuke every opposing voice in this matter by Christ's authority. Scripture proclaims, &quot;[VERSE]&quot; [REFERENCE]. The accuser is silenced before Your throne.",
    "In Jesus' mighty name, I silence every accusation against me. Your Word assures me, &quot;[VERSE]&quot; [REFERENCE]. No weapon of the enemy will succeed."
];

// Enhanced prayer section templates for asking for judgment
const judgmentTemplates = [
    "Righteous Judge, I ask for Your divine judgment regarding [TOPIC]. Render Your verdict according to Your perfect will and justice. &quot;[VERSE]&quot; [REFERENCE].",
    "I petition Your court for judgment concerning [TOPIC]. Render Your perfect verdict, for Your Word declares, &quot;[VERSE]&quot; [REFERENCE].",
    "Sovereign Judge, I seek Your divine ruling regarding [TOPIC]. Issue Your decree according to Your perfect justice, for &quot;[VERSE]&quot; [REFERENCE].",
    "I ask for Your righteous judgment in the matter of [TOPIC]. Render Your verdict according to Your perfect wisdom, as Your Word states, &quot;[VERSE]&quot; [REFERENCE].",
    "Righteous Judge of all the earth, I seek Your ruling regarding [TOPIC]. Issue Your divine decree, for scripture declares, &quot;[VERSE]&quot; [REFERENCE].",
    "I petition Your heavenly court for judgment concerning [TOPIC]. Render Your verdict according to Your perfect will, for &quot;[VERSE]&quot; [REFERENCE].",
    "Holy Judge, I ask for Your divine decision regarding [TOPIC]. Issue Your decree according to Your perfect justice, as Your Word proclaims, &quot;[VERSE]&quot; [REFERENCE].",
    "I seek Your righteous judgment in the matter of [TOPIC]. Render Your verdict from Your throne, for scripture affirms, &quot;[VERSE]&quot; [REFERENCE]."
];

// Enhanced prayer section templates for receiving the verdict
const verdictTemplates = [
    "By faith, I receive Your verdict and decree over this situation. I trust in Your goodness and mercy, for &quot;[VERSE]&quot; [REFERENCE]. I accept Your decision with gratitude.",
    "I receive Your divine verdict with faith and thanksgiving. Your Word assures me, &quot;[VERSE]&quot; [REFERENCE]. I trust Your perfect judgment in this matter.",
    "With confidence, I accept Your ruling in this case. I stand on Your promise that &quot;[VERSE]&quot; [REFERENCE]. I receive Your verdict with gratitude.",
    "I embrace Your divine judgment with faith and trust. Scripture declares, &quot;[VERSE]&quot; [REFERENCE]. I accept Your verdict with a thankful heart.",
    "By faith, I receive Your decree in this matter. I rest in Your promise that &quot;[VERSE]&quot; [REFERENCE]. I accept Your perfect judgment with gratitude.",
    "I accept Your verdict with complete trust in Your wisdom. Your Word assures me, &quot;[VERSE]&quot; [REFERENCE]. I receive Your judgment with thanksgiving.",
    "With humble faith, I embrace Your ruling in this case. Scripture promises, &quot;[VERSE]&quot; [REFERENCE]. I accept Your perfect verdict with gratitude.",
    "I receive Your divine decision with confidence and trust. Your Word declares, &quot;[VERSE]&quot; [REFERENCE]. I accept Your judgment with a thankful heart."
];

// Enhanced prayer section templates for dispatching angels
const angelsTemplates = [
    "Lord, I ask that You dispatch Your angels to carry out Your verdict concerning [TOPIC]. Your Word declares, &quot;[VERSE]&quot; [REFERENCE]. Send them now to minister on my behalf.",
    "I ask You to send Your heavenly messengers to execute Your judgment regarding [TOPIC]. Scripture affirms, &quot;[VERSE]&quot; [REFERENCE]. Dispatch Your angels to fulfill Your decree.",
    "Sovereign Lord, release Your angelic hosts to implement Your verdict concerning [TOPIC]. Your Word states, &quot;[VERSE]&quot; [REFERENCE]. Send them to minister according to Your will.",
    "I pray for the release of Your angels to carry out Your judgment regarding [TOPIC]. As Your Word promises, &quot;[VERSE]&quot; [REFERENCE]. Dispatch them to fulfill Your divine purpose.",
    "Lord of hosts, send Your angels to execute Your decree concerning [TOPIC]. Scripture declares, &quot;[VERSE]&quot; [REFERENCE]. Release them to minister on my behalf.",
    "I ask for Your heavenly messengers to implement Your verdict regarding [TOPIC]. Your Word assures us, &quot;[VERSE]&quot; [REFERENCE]. Send them forth to fulfill Your purpose.",
    "Mighty God, dispatch Your angelic hosts to carry out Your judgment concerning [TOPIC]. As scripture states, &quot;[VERSE]&quot; [REFERENCE]. Send them to minister according to Your will.",
    "I pray for Your angels to execute Your divine decree regarding [TOPIC]. Your Word promises, &quot;[VERSE]&quot; [REFERENCE]. Release them to fulfill Your perfect plan."
];