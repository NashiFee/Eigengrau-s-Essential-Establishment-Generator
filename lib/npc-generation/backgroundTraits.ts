export type BackgroundName = 'acolyte' | 'criminal' | 'folk hero' | 'noble' | 'sage' | 'soldier' |
'charlatan' | 'entertainer' | 'guild artisan' | 'gladiator' | 'hermit' | 'knight' | 'outlander' | 'pirate' | 'sailor' | 'urchin' |
'commoner' | 'merchant' | 'child' | 'peasant' | 'guard' | 'politician'

interface BackgroundTrait {
  backgroundOrigin: string[] | null
  bond: string[] | null
  ideal: string[] | null
  flaw: string[] | null
  personalityTrait: string[] | null
  extraLanguages?: number
  wealth: number
}

export const backgroundTraits: Record<BackgroundName, BackgroundTrait> = {
  'acolyte': {
    extraLanguages: 2,
    backgroundOrigin: [
      'I ran away from home at a young age, and found refuge in a temple.',
      'My family gave me to a temple, since they were unable to care for me.',
      'I grew up in a household with strong religious convictions. Entering the service of the Gods seemed to be the natural progression.',
      'An impassioned sermon struck a chord deep in me, and compelled me to serve the faith.',
      'I followed a childhood friend into religious service because we made a pact to never be apart.',
      'I followed a lover into religious service, but tragically, they were killed. The faith was the only thing that stopped me from ending my own life.'
    ],
    ideal: [
      'I believe that the ancient traditions of worship and sacrifice must be preserved and upheld.',
      'I always try to help those in need, no matter what the personal cost.',
      'We must help bring about the changes the gods are constantly working in the world.',
      "I hope to one day rise to the top of my faith's religious hierarchy.",
      'I trust that my deity will guide my actions, I have faith that if I work hard, things will go well.',
      "I seek to prove myself worthy of my god's favor by matching my actions against their teachings."
    ],
    personalityTrait: [
      'I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.',
      'I can find common ground between the fiercest of enemies, and can work towards peace no matter what the conditions.',
      'I see omens in every event and action. The gods try to speak to us, we just need to listen!',
      'Nothing can shake my optimistic attitude.',
      'I quote (or misquote) sacred texts and proverbs in almost every situation.',
      'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.',
      "I've enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.",
      'I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world.'
    ],
    bond: [
      'I would die to recover an ancient artifact of my faith that was lost long ago.',
      'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.',
      'I owe me life to the priest who took me in when my parents died.',
      'Everything I do is for the common people.',
      'I will do anything to protect the temple where I served.',
      'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.'
    ],
    flaw: [
      'I judge others harshly, and myself even more severely.',
      'I put too much trust in those who wield power within my temple’s hierarchy.',
      'My piety sometimes leads me to blindly trust those that profess faith in my god.',
      'I am inflexible in my thinking.',
      'I am suspicious of strangers and expect the worst of them.',
      'Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.'
    ],
    wealth: 1500
  },
  'charlatan': {
    backgroundOrigin: [
      'As a youngster, I was left to my own devices. My knack for manipulating people helped me survive.',
      'I learned early on that people are easy to exploit, and are gullible and too trusting.',
      'I often got into trouble as a youngster, but talked my way out of it.',
      'I took up cheating as a hobby, then was sort of adopted by a local scam artist. It just sort of became a way of life for me.',
      'After a charlatan fleeced my family, I decided to learn all the tricks I could so I would never fall for another scam.'
    ],
    ideal: [
      'I am a free spirit– no one tells me what to do.',
      "I never target people who can't afford to lose a few coins.",
      'I distribute the money I acquire to the people who really need it.',
      'I never run the same con twice.',
      'I believe that Material goods come and go. Bonds of friendship last forever.',
      "I'm determined to make something of myself."
    ],
    personalityTrait: [
      'I fall in and out of love easily, and am always pursuing someone.',
      'I have ajoke for every occasion, especially occasions where humor is inappropriate.',
      'Flattery is my preferred trick for getting what I want.',
      "I’m a born gambler who can't resist taking a risk for a potential payoff.",
      'I lie about almost everything, even when there’s no good reason to.',
      'Sarcasm and insults are my weapons of choice.',
      'I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.',
      'I pocket anything I see that might have some value.'
    ],
    bond: [
      'I fleeced the wrong person, a lord called <<print lib.raceTraits["human"].genderTraits["man"].firstName.random()>>, and must work to ensure that he never crosses paths with me or those I care about.',
      "I owe everything to my mentor <<print lib.raceTraits['human'].genderTraits['man'].firstName.random()>>--a horrible person who's probably rotting in jail somewhere.",
      "Somewhere out there I have a child, litte <<print lib.raceTraits['human'].genderTraits['man'].firstName.random()>>, who doesn't know me. I'm going to try and make the world better for him.",
      "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
      "A powerful person, Lord <<print lib.raceTraits['human'].genderTraits['man'].firstName.random()>>, killed someone I love. Some day soon, I'll have my revenge.",
      "I swindled and ruined a person who didn't deserve it, and now I seek to atone for my misdeeds but might never be able to forgive myself."
    ],
    flaw: [
      'I can never resist an easy mark.',
      'I find it difficult to admit that I am not above the law and always have an excuse for my actions.',
      'I always am on the lookout, and never feel truly at ease.',
      'I don\'t trust anybody that hasn\'t proven to be otherwise.',
      'I tend to break off relationships before anything develops so I am not bogged down.'
    ],
    wealth: 1500
  },
  'criminal': {
    backgroundOrigin: [
      'I resented authority in my younger days, and I saw a life of crime as a way to get back at those that I thought had wronged me.',
      'I resented authority as a youngster, and saw a life of crime as the best way to fight back against tyranny and oppression.',
      'I fell in with a gang of reprobates and ne’er-do- wells, and I learned my specialty from them.',
      'A relative taught me the trade to prepare me for the family trade.',
      "I left home at a relatively young age, and found refuge in a thieves' guild.",
      'I was always bored, so I started committing minor crimes to pass the time. The adrenaline rush was addictive, and soon I was going on to bigger and better heists.'
    ],
    ideal: [
      "I believe in honour amongst thieves- I don't steal from others in the trade.",
      'I am definitely a fan of freedom- Chains are meant to be broken',
      'I steal from the wealthy so that I can help people in need.',
      'I will do whatever it takes to become wealthy.',
      "I'm loyal to my friends",
      "I believe that there's a spark of good in everyone."
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [
      "I'm trying to pay off an old debt I owe to a generous benefactor.",
      'My ill-gotten gains go to support my family.',
      'Something important was taken from me, and I aim to steal it back.',
      'I will become the greatest thief that ever lived.',
      "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
      'Someone I loved died because of a mistake I made. That will never happen again.'
    ],
    wealth: 1500
  },
  'entertainer': {
    backgroundOrigin: [
      'Members of my family made ends meet by performing, so it was fitting for me to follow their example',
      'I always had a keen insight into what made other people laugh and cry. A life as an entertainer seemed to be the natural continuation of that.',
      'I saw a bard perform once, and it inspired me so much that I decided to follow in his footsteps.',
      'I ran away from home to join a minstrel troupe.',
      'I earned extra coin by performing on the streets as a child, and I never seemed to stop.',
      'A traveling entertainer took me in to teach me the trade, and I learned to love it.'
    ],
    ideal: [
      'When I perform, I want to make beautiful things for the pleasure of my audience',
      'The stories I tell have a lot of history which I wish to preserve.',
      'The world is in need of new ideas and bold action.',
      "I'm only in it for the money and fame.",
      "I like seeing the smiles on people's faces when I perform. That's all that matters.",
      'Art should reflect the soul; it should come from within and reveal who we really are.'
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [
      'My instrument is my most treasured possession, and it reminds me of someone I love.',
      "Someone stole my precious instrument, and someday I'll get it back.",
      'I want to be famous, whatever it takes.',
      "I idolize a hero of the old tales and measure my deeds against that person's.",
      'I will do anything to prove myself superior to my hated rival.',
      'I would do anything for the other members of my old party.'
    ],
    wealth: 1500
  },
  'folk hero': {
    backgroundOrigin: [
      'I learned what was right and wrong from my family.',
      'I was always enamored by tales of heroes and wished I could be something more than ordinary.',
      'I hated my mundane life, so when it was time for someone to step up and do the right thing, I took my chance.',
      'One of my relatives was an adventurer, and l was inspired by that person’s courage.',
      'A mad old hermit spoke a prophecy when l was born, saying that I would accomplish great things.',
      'I have always stood up for those who are weaker than me.'
    ],
    ideal: [
      'I have the radical belief that people deserve to be treated with dignity and respect.',
      'I believe that no one should get preferential treatment before the law',
      'Tyrants must not be allowed to oppress the people.',
      'If I become strong, I will be better able to protect people.',
      "There's no good in pretending to be something I'm not.",
      'Nothing and no one can steer me away from my higher calling.'
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [
      'I have a family, but I have no idea where they are. One day, I hope to see them again.',
      'I worked the land, I love the land, and I will protect the land.',
      'A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.',
      'My tools are symbols of my past life, and I carry them so that I will never forget my roots.',
      'I protect those who cannot protect themselves.',
      'I wish my childhood sweetheart had come with me to pursue my destiny.'
    ],
    wealth: 1000
  },
  'gladiator': {
    backgroundOrigin: [
      'I found myself in a fight, and the drunkards around me started to bet on whether I would win. I found that strangely exhilarating, and continued to fight, seeking that thrill.',
      'I was a slave, and was forced to fight for my supper and eventual freedom. By the time I got out, there was nothing else I knew.',
      'I entered a fight as a drunken bet, and somehow managed to win. The money was too good for me to quit.',
      'I was constantly getting into fights as a youngster. I figured I might as well continue, for money.'
    ],
    ideal: [
      'If I become strong, I will be better able to protect people.',
      'I want to become the hero I pretend to be.',
      'I want people to tremble at the sound of my name.',
      'I want to inspire others.',
      'I am in it for the money.',
      'I honestly love to see others in pain.'
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [
      'My weapon has seen me through many a battle, and it means everything to me.',
      'The costume that I wear when fighting is part of me and my being.',
      'I have seen countless friends die around me, many at my own hands, so I find it difficult to make new ones.',
      'I am loyal to my friends as long as I respect them.',
      'I feel like I am still a part of my old arena team.',
      'Sometimes, I feel like I cannot leave who I was in the arena.'
    ],
    wealth: 1500
  },
  'guild artisan': {
    backgroundOrigin: [
      'I was apprenticed to a master who taught me the guild’s business.',
      'I helped a guild artisan keep a secret, and in return, I was taken on as an apprentice.',
      'One of my relatives who belonged to the guild made a place for me.',
      'I was always good with my hands, so I figured that I would make something of it.',
      'I wanted to get away from my home situation and start a new life, so I learned a trade in secret and ran away one night.',
      'I learned the essentials from an old mentor, but I had to join a guild to finish my learning once he passed away.'
    ],
    ideal: [
      'I believe it is the duty of all civilized people to strengthen the bonds of community and the security of civilization.',
      'My talents were given to me so that I could use them to benefit the world.',
      'Everyone should be free to pursue their own livelihood.',
      "I'm only in it for the money.",
      "I'm committed to the people I care about",
      'I work hard to be the best there is at my craft.'
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [
      'The workshop where I learned my trade is the most important place in the world to me.',
      "I created a great work for someone, and then found them unworthy to receive it; I'm still looking for someone worthy.",
      'I owe my guild a great debt for forging me into the person I am today.',
      "I pursue wealth to secure someone's love.",
      'One day I will return to my guild and prove that I am the greatest artisan of them all.',
      'I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.'
    ],
    wealth: 1500
  },
  'hermit': {
    backgroundOrigin: [
      'My enemy ruined my reputation, and I had to flee to a life of solitude to escape further disparagement.',
      'I am comfortable with isolation, as I seek inner peace.',
      'I find myself in love with nature, and prefer the company of the animals and plants to that of people.',
      'I never liked the people that I grew up with, so it was easy for me to leave it all behind and strike out a new life, alone.',
      'I felt compelled to forsake my past, and did so with great reluctane. Even now, I sometimes regret my decisions.'
    ],
    ideal: [
      'My gifts are meant to be shared with all',
      'I believe that motions must not cloud our sense of what is right and true',
      'I believe that inquiry and curiosity are the pillars of progress.',
      'I think that solitude and contemplation are paths toward mystical or magical power.',
      'I believe that meddling in the affairs of others only causes trouble.',
      'If you know yourself, you know your enemy.'
    ],
    flaw: [

    ],
    personalityTrait: [
      'I\'m suspicious of anyone that takes too much of an interest in me.',
      'I hate people and/or social interaction.',
      'I hate it when things are too loud or too rushed. I\'m used to quiet and taking my time.',
      'Silence is always favorable.',
      'I enjoy animal company moreso than human.',
      'I think that bathing is overrated, and anyone that afraid of dirt is afraid of living.',
      'Everyone is far too disagreeable, so I distrust everyone.',
      'Civilization moves too fast. I prefer a simpler, slower pace of life.'
    ],
    bond: [
      'Nothing is more important than the other members of my hermitage, order, or association.',
      'I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.',
      "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
      'I entered seclusion because I loved someone I could not have.',
      'Should my discovery come to light, it could bring ruin to the world.',
      'My isolation gave me great insight into a great evil that only I can destroy.'
    ],
    wealth: 500
  },
  'noble': {
    extraLanguages: 2,
    backgroundOrigin: [
      'My family has been disgraced, and I intend to restore our once pristine reputation.',
      'I come from an old and storied family, and it fell to me to preserve the family name.',
      'My family recently came by its title, and that elevation thrust us into a new and strange world.',
      'My family has a title, but none of my ancestors have done anything of note.',
      'My family is filled with remarkable people. I hope to live up to their reputation.',
      "I hope to increase my family's power and influence."
    ],
    ideal: [
      'Respect is due to me because of my position',
      'It is my duty to respect the authority of those above me',
      'I must prove that I can handle myself without the coddling of my family.',
      'If I can attain more power, I will be able to protect my family',
      'I believe that blood runs thicker than water.',
      'It is my duty to protect and care for the people beneath me.'
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [
      'I will face any challenge to win the approval of my family.',
      "My house's alliance with another noble family must be sustained at all costs.",
      'Nothing is more important that the other members of my family.',
      'I am in love with the heir of a family that my family despises.',
      'My loyalty to my sovereign is unwavering.',
      'The common folk must see me as a hero of the people.'
    ],
    wealth: 2500
  },
  'outlander': {
    backgroundOrigin: [
      'I spent a lot of time in the wilderness as a youngster, and I came to love that way of life.',
      "From a young age, I couldn't abide the stink of cities, and sought out the wilderness for respite from the chaos of people.",
      'I came to understand the darkness that lurks in the wilds, and l vowed to combat it.',
      'My people live on the edges of civilisation, and I learned the methods of survival from my family.',
      'After a personal tragedy, I retreated to the wilderness to be alone with my thoughts.',
      'My family moved away from civilisation, and I learnt to adapt with the harsh environment.'
    ],
    ideal: [
      'I think that life is like the seasons, change should be embraced!',
      "It is each person's responsibility to make the most happiness for the whole tribe.",
      'If I dishonor myself, I bring dishonor to my whole tribe',
      'I believe that the strongest are meant to rule.',
      'The natural world is more important than all the constructs of civilization.',
      'I must earn glory in battle.'
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [
      'My family, clan, or tribe is the most important thing in my life, even when they are far from me.',
      'An injury to the unspoiled wilderness of my home is an injury to me.',
      'I will bring terrible wrath down on the evildoers who destroyed my homeland.',
      'I am the last of my tribe, and it is up to me to ensure their names enter legend.',
      'I suffer awful visions of a coming disaster and will do anything to prevent it.',
      'It is my duty to provide children to sustain my tribe.'
    ],
    wealth: 1000
  },
  'sage': {
    extraLanguages: 2,
    backgroundOrigin: [
      'I was naturally curious, so I packed up and went to a university to learn more about the world.',
      'My mentor’s teachings opened my mind to new possibilities in that field of study.',
      'I was always an avid reader, and became a sage to learn more from the thousands of books that I tended to.',
      'I discovered an old library and pored over the texts I found there. That experience awakened a hunger in me for knowledge that I still seek.',
      'I impressed a traveling wizard, who told me that I was squandering my talents and that I should seek out an education to take advantage of my gifts.',
      'My father gave me a basic education which whetted my appetite for more knowledge, and I left home to build on what I knew.',
      'I became a new person when spending years hiding in a monastery after a brutal murder spree',
      'I was a sickly child who spent the days voraciously reading in bed.',
      'I was an academic who desperately wishes to show that my theories are correct',
      'I was a wandering cleric who turned to science to better understand my god\'s touch on the universe'
    ],
    ideal: [
      'I believe that the path to power and self-improvement is through knowledge.',
      'What is beautiful points us beyond itself toward what is true.',
      'I believe that emotions must not cloud our logical thinking.',
      'I believe that nothing should fetter the infinite possibility inherent in all existence.',
      'Knowledge is, in my opinion, the path to power and domination.',
      'I think that the goal of a life of study is the betterment of oneself.'
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [
      'It is my duty to protect my students.',
      'I have an ancient text that holds terrible secrets that must not fall into the wrong hands.',
      'I work to preserve a library, university, scriptorium, or monastery.',
      "My life's work is a series of tomes related to a specific field of lore.",
      "I've been searching my whole life for the answer to a certain question.",
      'I sold my soul for knowledge; I hope to do great deeds and win it back.'
    ],
    wealth: 1000
  },
  'sailor': {
    backgroundOrigin: [
      'I was press-ganged by pirates and forced to serve as a deck-hand on their ship until I could escape from their clutches.',
      'I wanted to see the world, so I signed on as a deck- hand for a merchant ship.',
      'One of my relatives was a sailor, and took me to sea when I was young, which inspired a life-long love of the oceans and the water.',
      'I needed to escape from town quickly, so I stowed away on a ship. They found me out, and force me to work as a deck-hand as payment for my passage.',
      'Reavers attacked my village, and I found refuge in a ship.',
      'There were few prospects where I was living, so I hopped on board a boat, to seek my fortunes elsewhere.'
    ],
    ideal: [
      'I believe that the thing that keeps a ship together is mutual respect between captain and crew.',
      'We all do the work. That is how the work gets done.',
      'To me, the sea is freedom– the freedom to go anywhere and do anything.',
      "I'm a predator, and I'm not going to apologise for it. Those that cannot survive on the seas should not live.",
      "I'm committed to my crewmates.",
      "Someday I'll own my own ship and chart my own destiny."
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [
      "I'm loyal to my captain first, everything else second.",
      'The ship is most important--crewmates and captains come and go.',
      "I'll always remember my first ship.",
      'In a harbor town, I have a paramour whose eyes nearly stole me from the sea.',
      'I was cheated of my fair share of the profits, and I want to get my due.',
      'Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.'
    ],
    wealth: 1500
  },
  'soldier': {
    backgroundOrigin: [
      "I wanted fame and fortune, so I signed up to the militia to prove my mettle. I don't think I knew what I was doing, but my determination carried me through my contract, and I never stopped.",
      'I wanted to protect my village from monsters, so I learnt swordcraft and how to fight. Then I learnt that you could earn coin for it, too.',
      'I was forced to enlist in the local militia to fight for my lord. Many of my friends are dead because of him.',
      'Invaders attacked my village, and I vowed to never let my family be unprotected again, so I picked up the sword.',
      "I was always playing with a sword as a kid, and it wasn't until a visiting adventurer sparred with me for fun that I realised that I had a real talent."
    ],
    ideal: [
      'Our lot is to lay down our lives in defense of others.',
      'I do what I must and obey just authority.',
      'When people follow orders blindly, people die.',
      'In life, as in war. That is my motto, that I will live and die by.',
      "To me, ideals aren't worth killing over or going to war for."
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [
      'I would lay down my life for the people I served with.',
      'Someone saved my life on the battlefield. To this day, I will never leave a friend behind.',
      'My honor is my life.',
      "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
      'Those who fight beside me are those worth dying for.',
      'I fight for those who cannot fight for themselves.'
    ],
    wealth: 1000
  },
  'urchin': {
    backgroundOrigin: [
      'My parents died, leaving nobody to look after me, so I took care of myself.',
      'I had to escape my homelife. I lived off crumbs and scraps, but it was better than the alternative.',
      'Raiders attacked my village when I was a child, leaving me the only survivor. I had to walk for three days to the next town over, and begged to survive.',
      'My family was swindled, and we lost everything we had. I had to beg on the streets to look after my family.',
      'A thief took me in, and in exchange for food and shelter, I would keep an eye on the streets while he pulled off heists.'
    ],
    ideal: [
      'All people deserve respect.',
      'We have to take care of each other to survive.',
      'The low are lifted up, and we all benefit from that.',
      'The rich need to be shown what life and death are like in the gutters.',
      "I help the people who help me– that's what keeps us alive.",
      "I'm going to prove that I'm worthy of a better life."
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [
      "My town is my home, and I'll fight to defend it.",
      'I sponsor an orphanage to keep others from enduring what I was forced to endure.',
      'I owe my survival to another urchin who taught me to live on the streets.',
      'I owe a debt I can never repay to the person who took pity on me.',
      "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
      "No one else is going to have to endure the hardships I've been through."
    ],
    wealth: 1500
  },
  'commoner': {
    // '': function (npc) { return npc },
    backgroundOrigin: [
      "I was born into poverty. I've slowly worked my way to where I am today.",
      'I had a bad string of bets which left me with no other choice than to skip town.',
      "I was born into a lowly family, and that's where I'll likely stay.",
      'I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.',
      'I was found guilty of a crime that I did not commit, and was sentenced to serfdom.',
      'I grew up in a loving household, but all the love in the world could not pay the debts which we had.',
      'I was one of many children, and when I was old enough to work, my parents put me to it.',
      'I was one of many children, and had to work from a young age to support my family.',
      'I was the eldest child. When my father died, I had to leave school and work to support my family.'
    ],
    ideal: [
      'Everyone needs to pitch in for the greater good.',
      'You have to respect all people',
      'We have to take care of each other',
      'The low are lifted up',
      'The rich need to be shown what life and death are like in the gutters.',
      "I help the people who help me– that's what keeps us alive.",
      "I'm going to prove that I'm worthy of a better life."
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [
      'I am trying to pay off a debt that I inherited from my father.',
      'I was swindled out of a large inheritance, and had to go into hiding to keep my family safe.',
      'I was a nobleman once, but made the wrong man an enemy.',
      'I had to sell a magical heirloom to pay off a debt. Now I want to buy it back.',
      "When wandering through a forest, I found a portal to another realm. When I took others to it, it had disappeared. One day I'll find it again.",
      "I followed my beloved here, and we made a life together, until raiders took them in the night. One day, I'll have my revenge.",
      "A witch-doctor had claimed to be able to cure my baby. The bastard had lied, and he died at just six weeks. I'll find him one day, and make him wish he had never been born.",
      'I live for the sea; nothing gives me more pleasure than fishing off my boat.',
      'My home was a simple one, but it had a certain charm about it. An arsonist burnt it down, and I intend to catch them.',
      'The lord that took my daughter as a guarantee for my debt never intended to return her. I intend to make him.',
      'I love the quiet life. Nothing disturbs me more than a disturbance of the peace.',
      'My friends are my world. If my life consists of working for five days, then going to the tavern with my buddies, I will be content.',
      'I know my lot in life; feudalism dictates that one should serve the other. I disagree, and will fight to my dying breath to change the system.',
      "I can't change the past, but I can change my future. I'll work harder and better to provide a better life for my children.",
      'My father was a drunkard, a gambler, and an abusive man. I will break the cycle.',
      'I want to perfect my craft. Nothing gives me more satisfaction than someone praising my work.',
      "When my mother died, I found a list of men in her possessions. One of them is my father. I'll find him.",
      "When I was young, my parents died, and the church took me in. I'll spread the good word, and the work that they do.",
      'My father taught me how to read. All I want to do in life is to further my knowledge on how the world works.',
      'I never learnt how to read. One day, I will be able to tell my son what the words on parchment mean.',
      "I have a tendency to gamble away my earnings. This is the third town I've moved to to escape debtors.",
      "My livelihood depended on a horse, which an adventurer took off with. I'll make him pay.",
      "I used to fear anyone who didn't look like me until some adventurers from distant lands saved my life. Now I want to see the whole world and the planes beyond.",
      "My lord raised the taxes to absurd levels so he could conscript people as punishment. I broke into my lord's manor one night, took a string of pearls, and sold it. I'll never forget that thrill.",
      "I have a knack for magic but my parents couldn't afford a tutor. I want to become the mage I knew I could be.",
      'I am the fifth child and will not inherit anything. I need to find somewhere I can settle down.',
      'I was a farmer, got conscripted, went off to war, and came back broken. I want my grandchildren to have peaceful lives.',
      "I got really drunk, fell asleep in a box that got loaded on a boat, and wound up in a big city I've never heard of. My village is so small and secluded I don't even know what country it's in! How do I get home?",
      'I was the cook for a band of thieves who lived in a forest and stole from the rich to give to the poor. They all got arrested. I need another job I guess.',
      "I was an ordinary maid in a vampire's castle. Some adventurers staked my former boss. I have to readjust to living with the living.",
      'I was the village priest but lost my church when a charismatic preacher moved in and converted all my worshipers. I need a sign from heaven to restore my faith.',
      'I love haggling, meeting new folks, and helping people find what they need. My dream is to build the finest tavern and shop.',
      'I was petrified 1000 years ago by a medusa while foraging for mushrooms. A wizard found and cured me but left without explaining anything. I must readjust and relearn everything!'
    ],
    wealth: 500
  },
  'guard': {
    backgroundOrigin: [
      'My grandfather was a Guard, serving the town. My father was a guard, serving the town. So now I am a Guard, serving the town.'

    ],
    ideal: [
      'By serving justice, I serve the people.',
      'Safety is job one. My safety. If that means shirking my duties to avoid dangerous situations, then so be it.',
      'Close Rank.  We must protect our fellow men from the evils of the world, and there are no greater evil than the ingrates who complain about us. They must be silenced. (evil)',
      'Authoritarian.  As I obey my captain,  who bows to the nobles,so must the lowly peasants submit to my absolute authority over them (Lawful)',
      'Morally Fluid.  A little extra from the wealthy, a bit leniency towards the poor; thus so benefits everyone including myself. (chaotic)',
      'Respect. My rank earns me the respect from others I\'ve never gotten before. I will defend it with everything I have.'
    ],
    personalityTrait: [
      'Everyone should respect my authority.',
      'I overlook smaller infractions for the right amount of coin.',
      'I love my town more than life itself.',
      'I will root out crime no matter the effort. No stone shall be left unturned.',
      'I have stumbled my way into this position, and I am terrified of having to actually aprehend a criminal.',
      'I show mercy where I can. Sometimes I just can\'t stomach to punish the less fortunate for their attempts to survive.',
      'I love making new friends! And I love this job where I get to meet so many interesting people.',
      'If there is one thing I hate about being a guard, it\'s having to stand about cold and wet when it rains. And the mud, don\'t forget the foul disgusting mud. And snow in winters too, and noisy kids running about, and nosy older folks asking about my private bussiness, and the flies, and...'
    ],
    bond: [
      'This is the only job I am qualified for. I have no other choice than to do it.',
      'The captain gave this opportunity to make something of myself. I will not pass up the opportunity.',
      'It is an honor to serve in the lord\'s household. I would give my life to protect him and his family from any harm.',
      'I serve in this miserable post to fulfill my family\'s obligation. I\'d do anything to keep them away from the filth I serve with.',
      'I sometimes wishes that I was doing something else, adventuring or growing peaches perhaps. But my peers are my friends and family,  I simply can\'t just leave them.',
      'Twenty-eight lives were taken that night and we still don\'t know who; I shall find out whoever who did this and end their life.',
      'The bribe and protection money I get shall promote my family\'s position.',
      'I\'m guilty of a terrible crime, and I\'m in just the right position to silence anyone who might find out about it.'
    ],
    flaw: [
      'Nearsighted. Everything past 20 feet is blurry.',
      'Lazy. Often takes a rest in a quiet alleyway instead of completing their patrol circuit.',
      'I am easily distractible. I find it difficult to focus on a boring job. Easy to distract.',
      'Tyrannical.  If someone is truly innocent, they\'d have nothing to hide. If they have a problem being tied up as I ransack their posessions to do my job, that\'s their problem',
      'Hemaphobe. I can do my job just fine, as long as I\'m kept away from the sight of blood.',
      'Corrupt. A little bribe here and there and everywhere keeps the world go around.',
      'Haunted.  My dreams use to be plagued by the vision of folks I failed to protect, but I no longer dream about them. Now I see them during my waking hours.',
      'Complacent. Other towns may have trouble with bandits or demons, but our town is quiet. Nothing bad ever happens here.'
    ],
    wealth: 1000
  },
  'politician': {
    backgroundOrigin: [
      'I used to be a simple town clerk but 27 years of blackmail, poison, "accidents" and contracted killings, here I am! What a ride.'

    ],
    ideal: [
      'Ruthless. Politics is a brutal game. I play to win at any cost.',
      'Dedicated. My job is to insure the best for my people; I place their best interest above all else',
      'Self-important. I\'m the only one capable of leading; I will assume the burden of leading this nation.',
      'Corrupt. I will act in the interests of those who pay me the most.',
      'Ambition.  No one deserve to lead these people and benefits from them other than me and my descendents; I shall do anything to see to it.',
      'Puppet. Someone else is always pulling the strings.',
      'Bureaucrat. The law is supreme. Everything must be done according to the rules, there are no exceptions.',
      'Pragmatic. Beholden to no strict ideology, I choose whichever direction seems best at the time.'
    ],
    personalityTrait: [

    ],
    bond: [
      'Long have my ancestors served the royal household. It is an obligation and an honor.',
      'I owe my post to my "friends". Soon they will come to collect...',
      "I'm in love with a political opponent.",
      'I\'d sacrifice everything to protect my people, including my honour, my life and my dignity.',
      'I\'ll someday wrought revenge on the enemy of my family, even if I\'d need to sacrifice the life of people I serve to do so.',
      'An insult to my countrymen is a personal insult to me, and I deal ruin and destruction to those who insults me.',
      'I hope to do right by my people, and make my children proud of me when they grow up and bear witness to the fruit of my work.'
    ],
    flaw: [
      'I\'m always right, and those that disagree are just too stupid to see it.',
      'I am paralyzed by indecisiveness. Nobody can know.',
      'I have a propensity for pillow talk; should any of my mistresses disclosed my state secrets, it would be disastrous.',
      'I owe an enormous gambling debt to an unsavory character; now they own me and I must use my position to do their bidding.',
      'I am crippled by indecision. I over think all the decisions I have to make because o don’t want to anger anyone.',
      'I\'m only interested in being the power behind the throne. I don\'t actually care about who I rule, just that I\'m in control.',
      'I pass laws and dole out judgements arbitrarily on my whims, it\'s just the perks of the job.'
    ],
    wealth: 1000
  },
  'knight': {
    backgroundOrigin: [

    ],
    ideal: [
      '<b>Integrity</b>. My morals and principles are the upmost things I respect.',
      "<b>Obedience</b>. I have sworn to carry out my liege's will, and I will do so, no matter what it is.",
      '<b>Chivalry</b>. I have a strict code of social mores that I strive to uphold and through them I strive to be a paragon of knighthood.',
      "<b>Courtesy</b>. There is always a proper way to behave, no matter the social situation. As a symbol of my liege's power, it is important to also demonstrate courtly manners.",
      '<b>Power</b>. I respect power and strive for more. I have greater ambitions than being sworn to a liege.',
      '<b>Friendship</b>. I serve people best when I know them well and can sympathize with their struggles. I keep up strong personal connections with the towns in my region.',
      '<b>Courage</b>. I have trained all my life to face horrors most would struggle to look in the eye.',
      '<b>Piety</b>. I serve a power greater than any earthly lord. I fight for the glory of my deity.'

    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [

    ],
    wealth: 1000
  },
  'peasant': {
    backgroundOrigin: [

    ],
    ideal: [
      '<b>Community</b>. With your friends, family, and neighbours, there\'s no winter too cold- together we\'ll be able pull through just about anything.',
      '<b>Hospitality</b>. It is a sacred duty to take care of travelers who pass through our town. Besides, any stranger could be a god in disguise.',
      '<b>Austerity</b>. Waste not, want not, and always save for the future.',
      '<b>Piety</b>. The gods are very real and have strong influence over my life, so I define myself as a servant of the gods.',
      '<b>Survival</b>. Everything I do is to ensure I will see another sunrise.',
      '<b>Hedonism</b>. Life is going to be short, so I will do whatever I can to make my life filled with visceral pleasures.',
      '<b>Family</b>. Keeping my family bloodline going is the most important thing I can do.',
      '<b>Amity</b>. You are never too downtrodden to be a good person to someone.',
      '<b>Ambition</b>. I will rise in status, I can\'t continue to live like a peasant my whole life.',
      '<b>Duty</b>. Loyalty to my home and my community is something I can always rely on.',
      '<b>Stoicism</b>. I must be strong for those that rely on me, no matter what.',
      '<b>Diligency</b>. Working hard always gives fuits.',
      '<b>Sloth</b>. Save your energy for stuff that matters.'
    ],
    personalityTrait: [

    ],
    bond: [

    ],
    flaw: [
      'I\'m a penny pincher, and am always looking to save money.',
      'I get anxious when presented with simple arithmetic.',
      'I tend to hum tunelessly when I work.',
      'I feel that people above me are stuck up, but those below me are lazy.',
      'I struggle to live beyond my means, trying to keep appearances.',
      'I steal tiny portions from markets when I pass by.',
      'I\'d rather waste money on drink than provide my own needs. ',
      'I am hilariously uneducated.',
      'I am proud of my way of life, and I will stop myself from getting any richer.',
      'I am immensely superstitious.',
      'I am an easy person when offered money.',
      'I am jealous of people who are better off than I, but I\'m too stuck in my ways to improve my circumstances.  So I just quietly seethe with stifled anger.'
    ],
    wealth: 10
  },
  'merchant': {
    backgroundOrigin: [

    ],
    ideal: [
      '<b>Capitalism</b>. Capitalism inherently self-corrects, and the free market leads to riches for everyone.',
      '<b>Mercantilism</b>. Maximise exports and minimise imports, and be as self sufficient as possible.',
      '<b>Colonialism</b>. Create colonies which produces the raw resources which the homeland will make into finished goods',
      '<b>Pious</b>. A proportion of their profits/goods is to be dedicated to a god or used to glorify them.',
      '<b>Prosperity Gospel</b>. The gods reward those that are good with wealth. If you\'re earning money, it\'s because you\'re doing the right thing.',
      '<b>Shared Rewards</b>. My employees deserve to be rewarded for their hard work when my business is prosperous.',
      '<b>Charity</b>. Being able to help others is more important than lining your own pockets.',
      '<b>Experience</b>. I love traveling and sharing items with other.'
    ],
    flaw: [

    ],
    personalityTrait: [

    ],
    bond: [

    ],
    wealth: 1000
  },
  'pirate': {
    backgroundOrigin: [
      'I was a bored schoolteacher who has stumbled my way into pirating success',
      'I was trying to feed their triton brethren.',
      'I was a commercial sailor whose ship was beset upon by pirates. The crew defeated the pirates, took their ship, and decided they were better at pirating than most pirates.',
      'I lost at a game of Liars Dice with the first mate of the Defiant, since I had no money on the last round and I was drunk as piss, I bet my service. And here I am.',
      'Participated in a mutiny while serving in the crew aboard the Golden Tiger. Now, it\'s an easy choice between the pirating life or a hangman\'s noose.',
      'After getting kicked out of/rejected from every tavern and theater troupe, I took to the sea',
      'Once a respected admiral in a high court, I had been betrayed by a scheming courtier. Now, with some of my most loyal sailors behind me, I serve only myself.',
      'I er, accidentally boarded the wrong ship years ago and was afraid to say anything.',
      'I inherited a map and am looking for the lost treasure. <blockquote>The map is a fake the father used as a prop when talking about the made up adventures of his youth</blockquote>'

    ],
    ideal: [

    ],
    personalityTrait: [

    ],
    bond: [

    ],
    flaw: [

    ],
    wealth: 1000
  },
  'child': {
    backgroundOrigin: [

    ],
    ideal: [
      'I think that you should always share.',
      'If someone else doesn\'t have something that you do have, you should share it.',
      'Having fun is the best!',
      'I want to be as good as my mum when I grow up!'
    ],
    flaw: [

    ],
    personalityTrait: [
      'I like running around outside',
      'I love catching fish',
      'I am always in the mood for a game',
      'I am constantly hungry'
    ],
    bond: [
      'I want my dog to come back from the farm',
      'I miss my sister',
      'I wish my dad could play with me more',
      'I want to have another little brother'
    ],
    wealth: 1
  },
  'pauper': {
    backgroundOrigin: [

    ],
    ideal: [

    ],
    flaw: [
      'I\'ll steal from even the poorest of my friends. There is no honor here.',
      'I\'ve taken to drinking, smoking, and shooting up anything I can get my hands on',
      'I\'m convinced I deserve this life of pain.',
      'I have once rob someone unconscious of everything they own and left them at the mercy of the elements, and I\'d not hesitate to do it again.',
      'Manners are for those that can afford them',
      'Eating folks\' housepets is an acquired taste... such a thrilling, delicious taste.',
      'I never try to look to the future. Survival in the present is the only important thing.',
      'I know that the aristocracy didn\'t get to where they are by the blood and sweat of their own- they\'re thieves and cheats, and I have no pity for any that happen to lose their wealth.',
      'Whatever bad things happens to you, you deserve no pity from me as I have had worse.',
      'Survival is paramount, even if it means to leave my friends to die or selling my family for a few silver.'
    ],
    personalityTrait: [

    ],
    bond: [

    ],
    wealth: 1
  },
  'librarian': {
    backgroundOrigin: [
      'I was always a curious child, and took up an apprenticeship as a librarian as a way to sate my curiosity.',
      'I was left mostly alone with servants in a large estate, while my parents were running their trading business. I took to reading everything in the library to pass the time. At 12 I received my first scribe.',
      'I spent so much time at the local library that people just assumed I worked there.',
      'I wanted to be a writer, but never had the means or the inspiration. I took up librarianship to at least be close to books.',
      'The outside world is scary, being in here with my books is much safer, but still exciting.',
      'My deity places the utmost importance on the safekeeping and propagation of knowledge; I became a librarian in the service of our faith.',
      'I\'ve done my fair share of adventuring and catalogued my travels as I went. I wanted a place to share my stories and relax.',
      'I was once an academic, but I found that I loved the books more than anything else.',
      'A half a scrap of paper with a half a prophecy led me to libraries is search of an answer.',
      'To my father\'s dismay, I would hole myself up in our estate\'s library instead of attending my knightly lessons in the practice yard.'
    ],
    ideal: [
      'I will find you that book, no matter the time or effort needed.',
      'There is no forbidden knowledge.',
      'Knowledge is sacred & must be protected at all costs.',
      'I am there to protect you from the knowledge you should not know',
      'If you control the information, you control the narrative',
      'Organization, organization, organization.',
      'Knowledge is power.',
      'Oral tradition is useless; whatever is unwritten is unnecessary.',
      'All people deserve access to knowledge.',
      'There should be no limitations to the acquisition of knowledge.'
    ],
    flaw: [
      'I won\'t loan a book if I don\'t think you\'ll take good care of it.',
      'Obsessively arranges books by size, from largest to smallest, without regard for subject, title, or author.',
      'Respects the silence of the library so much that they refuse to let anyone speak at all.',
      'Always handles books with pristinely clean gloved hands.',
      'I\'m dyslexic, and have trouble following narratives.',
      'Pulls books for you that they think are more interesting instead of the one you actually asked for.',
      'Knows every book in the library, but can never recall its title; can immediately locate whichever one it is that they are thinking of.',
      'Sneezes constantly from the dust collected on the books.',
      'Gossips endlessly about which books people have been looking for.'

    ],
    personalityTrait: [

    ],
    bond: [

    ],
    wealth: 1
  }

}
