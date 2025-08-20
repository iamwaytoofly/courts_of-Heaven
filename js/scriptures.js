// Courts of Heaven Scripture Database
// All scriptures from public domain sources

const scriptures = {
    approaching: [
        { verse: "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.", reference: "Hebrews 4:16" },
        { verse: "In whom we have boldness and access with confidence through our faith in him.", reference: "Ephesians 3:12" },
        { verse: "Draw near to God, and he will draw near to you.", reference: "James 4:8" },
        { verse: "Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!", reference: "Psalm 100:4" },
        { verse: "For through him we both have access in one Spirit to the Father.", reference: "Ephesians 2:18" }
    ],
    honoring: [
        { verse: "Holy, holy, holy is the Lord God Almighty, who was, and is, and is to come.", reference: "Revelation 4:8" },
        { verse: "Worthy are you, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they existed and were created.", reference: "Revelation 4:11" },
        { verse: "Great and amazing are your deeds, O Lord God the Almighty! Just and true are your ways, O King of the nations!", reference: "Revelation 15:3" },
        { verse: "To the King of the ages, immortal, invisible, the only God, be honor and glory forever and ever. Amen.", reference: "1 Timothy 1:17" },
        { verse: "Yours, O LORD, is the greatness and the power and the glory and the victory and the majesty, for all that is in the heavens and in the earth is yours.", reference: "1 Chronicles 29:11" }
    ],
    confession: [
        { verse: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.", reference: "1 John 1:9" },
        { verse: "For I know my transgressions, and my sin is ever before me. Against you, you only, have I sinned and done what is evil in your sight.", reference: "Psalm 51:3-4" },
        { verse: "Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy.", reference: "Proverbs 28:13" },
        { verse: "Repent therefore, and turn back, that your sins may be blotted out.", reference: "Acts 3:19" },
        { verse: "Create in me a clean heart, O God, and renew a right spirit within me.", reference: "Psalm 51:10" }
    ],
    presenting: [
        { verse: "Come now, let us reason together, says the LORD.", reference: "Isaiah 1:18" },
        { verse: "Put me in remembrance; let us argue together; set forth your case, that you may be proved right.", reference: "Isaiah 43:26" },
        { verse: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.", reference: "Philippians 4:6" },
        { verse: "And this is the confidence that we have toward him, that if we ask anything according to his will he hears us.", reference: "1 John 5:14" },
        { verse: "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.", reference: "Matthew 7:7" }
    ],
    silencing: [
        { verse: "And I heard a loud voice in heaven, saying, 'Now the salvation and the power and the kingdom of our God and the authority of his Christ have come, for the accuser of our brothers has been thrown down, who accuses them day and night before our God.'", reference: "Revelation 12:10" },
        { verse: "No weapon that is fashioned against you shall succeed, and you shall refute every tongue that rises against you in judgment. This is the heritage of the servants of the LORD.", reference: "Isaiah 54:17" },
        { verse: "Who shall bring any charge against God's elect? It is God who justifies.", reference: "Romans 8:33" },
        { verse: "The LORD will fight for you, and you have only to be silent.", reference: "Exodus 14:14" },
        { verse: "Submit yourselves therefore to God. Resist the devil, and he will flee from you.", reference: "James 4:7" }
    ],
    judgment: [
        { verse: "For the LORD is our judge; the LORD is our lawgiver; the LORD is our king; he will save us.", reference: "Isaiah 33:22" },
        { verse: "But with righteousness he shall judge the poor, and decide with equity for the meek of the earth.", reference: "Isaiah 11:4" },
        { verse: "For we must all appear before the judgment seat of Christ, so that each one may receive what is due for what he has done in the body, whether good or evil.", reference: "2 Corinthians 5:10" },
        { verse: "The Ancient of Days took his seat, and the books were opened.", reference: "Daniel 7:9-10" },
        { verse: "Let justice roll down like waters, and righteousness like an ever-flowing stream.", reference: "Amos 5:24" }
    ],
    verdict: [
        { verse: "There is therefore now no condemnation for those who are in Christ Jesus.", reference: "Romans 8:1" },
        { verse: "For the Lord will not cast off forever, but, though he cause grief, he will have compassion according to the abundance of his steadfast love.", reference: "Lamentations 3:31-32" },
        { verse: "The LORD has taken away the judgments against you; he has cleared away your enemies.", reference: "Zephaniah 3:15" },
        { verse: "Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the LORD forever.", reference: "Psalm 23:6" },
        { verse: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.", reference: "Revelation 21:4" }
    ],
    angels: [
        { verse: "For he will command his angels concerning you to guard you in all your ways.", reference: "Psalm 91:11" },
        { verse: "Are they not all ministering spirits sent out to serve for the sake of those who are to inherit salvation?", reference: "Hebrews 1:14" },
        { verse: "Bless the LORD, O you his angels, you mighty ones who do his word, obeying the voice of his word!", reference: "Psalm 103:20" },
        { verse: "The angel of the LORD encamps around those who fear him, and delivers them.", reference: "Psalm 34:7" },
        { verse: "And he will send out his angels with a loud trumpet call, and they will gather his elect from the four winds, from one end of heaven to the other.", reference: "Matthew 24:31" }
    ]
};

// Prayer templates for personal, compassionate tone
const prayerIntros = [
    "Heavenly Father, with humble hearts we approach Your throne of grace today,",
    "Lord God Almighty, as I enter Your courts with praise,",
    "Gracious Father, I come before Your heavenly court today,",
    "Abba Father, I approach Your throne room with reverence and love,",
    "Holy God, I stand before Your courts with thanksgiving in my heart,"
];

const prayerClosings = [
    "I thank You for hearing my prayer in Your courts today. In Jesus' mighty name, Amen.",
    "I receive Your verdict with gratitude and leave Your courts changed. In the name of Jesus Christ, Amen.",
    "I walk away from Your courts today with peace and assurance of Your love. In Jesus' name, Amen.",
    "With deepest gratitude, I leave Your heavenly courtroom carrying Your decree. In Jesus' name, Amen.",
    "I depart Your presence now, carrying Your authority and blessing. In the precious name of Jesus, Amen."
];
