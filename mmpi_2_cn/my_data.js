/**
 * The original version of this file was taken from the MMPI-2 implementation
 * released by Kevin Timmerman under the GNU General Public License v3.0 in 2008.
 * 
 * Its contents are presumably copyrighted by the University of Minnesota and their
 * distribution rights owned by Pearson's Clinical Assessment Group.
 * 
 * It is herein used to the best of my conscience for a nonprofit, educational
 * purpose in the interest of the public.
 * 
 * As such, while the legal specifics of it may be questionable, it is incorporated
 * into this public domain work in good faith.
 */

 questions = [
    // 0 - Description
    "MMPI-2 Questions",
    // 1
    "I like mechanics magazines.",
    // 2
    "I have a good appetite.",
    // 3...
    "I wake up fresh and rested most mornings.",
    "I think I would enjoy the work of a librarian.",
    "I am easily awakened by noise.",
    "My father is a good man (or if your father is dead) my father was a good man.",
    "I like to read newspaper articles on crime.",
    "My hands and feet are usually warm enough.",
    "My daily life is full of things that keep me interested.",
    "I am about as able to work as I ever was.",
    "There seems to be a lump in my throat much of the time.",
    "My sex life is satisfactory.",
    "People should try to understand their dreams and be guided by or take warning from them.",
    "I enjoy detective or mystery stories.",
    "I work under a great deal of tension.",
    "Once in a while I think of things too bad to talk about.",
    "I am sure I get a raw deal from life.",
    "I am troubled by attacks of nausea and vomiting.",
    "When I take a new job, I like to find out whom it is important to be nice to.",
    "I am very seldom bothered by constipation.",
    "At times I have very much wanted to leave home.",
    "No one seems to understand me.",
    "At times I have fits of laughing and crying that I cannot control.",
    "Evil spirits possess me at times.",
    "I would like to be a singer.",
    "I feel that it is certainly best to keep my mouth shut when I am in trouble.",
    "When people do me wrong, I feel I should pay them back, just for the principle of the thing.",
    "I am bothered by an upset stomach several times a week.",
    "At times I feel like swearing.",
    "I have nightmares every few nights.",
    "I find it hard to keep my mind on a task or job.",
    "I have had very peculiar and strange experiences.",
    "I seldom worry about my health.",
    "I have never been in trouble because of my sexual behavior.",
    "Sometimes when I was young I stole things.",
    "I have a cough most of the time.",
    "At times I feel like smashing things.",
    "I have had periods of days, weeks, or months when I couldn't take care of things because I couldn't \"get going\".",
    "My sleep is fitful and disturbed.",
    "Much of the time, my head seems to hurt all over.",
    "I do not always tell the truth.",
    "If people had not had it in for me, I would have been much more successful.",
    "My judgment is better than it ever was.",
    "Once a week (or more often) I suddenly feel hot all over, for no reason.",
    "I am in just as good physical health as most of my friends.",
    "I prefer to pass by school friends, or people I know but have not seen for a long time, unless they speak to me first.",
    "I am almost never bothered by pains over my heart or in my chest.",
    "Most anytime I would rather sit and daydream than do anything else.",
    "I am a very sociable person.",
    "I have often had to take orders from someone who did not know as much as I did.",
    "I do not read every editorial in the newspaper every day.",
    "I have not lived the right kind of life.",
    "Parts of my body often have feelings like burning, tingling, crawling, or like \"going to sleep\".",
    "My family does not like the work I have chosen (or the work I intend to choose for my lifework).",
    "I sometimes keep on at a thing until others lose their patience with me.",
    "I wish I could be as happy as others seem to be.",
    "I hardly ever feel pain in the back of my neck.",
    "I think a great many people exaggerate their misfortunes in order to gain the sympathy and help of others.",
    "I am troubled by discomfort in the pit of my stomach every few days or so.",
    "When I am with people I am bothered by hearing very strange things.",
    "I am an important person.",
    "I have often wished I were a girl. (or if you are a girl) I have never been sorry that I am a girl.",
    "My feelings are not easily hurt.",
    "I enjoy reading love stories.",
    "Most of the time I feel blue.",
    "It would be better if almost all laws were thrown away.",
    "I like poetry.",
    "I sometimes tease animals.",
    "I think I would like the kind of work a forest ranger does.",
    "I am easily downed in an argument.",
    "These days I find it hard not to give up hope of amounting to something.",
    "My soul sometimes leaves my body.",
    "I am certainly lacking in self-confidence.",
    "I would like to be a florist.",
    "I usually feel that life is worthwhile.",
    "It takes a lot of argument to convince most people of the truth.",
    "Once in a while I put off until tomorrow what I ought to do today.",
    "Most people that know me like me.",
    "I do not mind being made fun of.",
    "I would like to be a nurse.",
    "I think most people would lie to get ahead.",
    "I do many things that I regret afterwards.  (I regret things more than others seem to.)",
    "I have very few quarrels with members of my family.",
    "I was suspended from school one or more times for bad behavior.",
    "At times, I have a strong urge to do something harmful or shocking.",
    "I like to go to parties and other affairs where there is a lot of loud fun.",
    "I have met problems so full of possibilities that I have been unable to make up my mind about them.",
    "I believe that women ought to have as much sexual freedom as men.",
    "My hardest battles are with myself.",
    "I love my father, or (if your father is dead) I loved my father.",
    "I have little or no trouble with my muscles twitching or jumping.",
    "I don't seem to care what happens to me.",
    "Sometimes when I am not well I am irritable.",
    "Much of the time I feel as if I have done something wrong or evil.",
    "I am happy most of the time.",
    "I see things or animals or people around me that others do not see.",
    "There seems to be a fullness in my head or nose most of the time.",
    "Some people are so bossy that I feel like doing the opposite of what they request, even though I know they are right.",
    "Someone has it in for me.",
    "I have never done anything dangerous just for the thrill of it.",
    "Often I feel as if there is a tight band around my head.",
    "I get angry sometimes.",
    "I enjoy a race or game more when I bet on it.",
    "Most people are honest chiefly because they are afraid of being caught.",
    "In school I was sometimes sent to the principal for bad behavior.",
    "My speech is the same as always (not faster or slower, no slurring or hoarseness).",
    "My table manners are not quite as good at home as when I am out in company.",
    "Anyone who is able and willing to work hard has a good chance of succeeding.",
    "I seem to be about as capable and smart as most others around me.",
    "Most people will use somewhat unfair means to gain profit or an advantage rather than to lose it.",
    "I have a great deal of stomach trouble.",
    "I like dramatics.",
    "I know who is responsible for most of my troubles.",
    "Sometimes I am so strongly attracted by the personal articles of others, such as shoes, gloves, etc., that I want to handle or steal them, even though I have no use for them.",
    "The sight of blood does not frighten me or make me sick.",
    "Often I can't understand why I have been so irritable or grouchy.",
    "I have never vomited blood or coughed up blood.",
    "I do not worry about catching diseases.",
    "I like collecting flowers or growing houseplants.",
    "I frequently find it necessary to stand up for what I think is right.",
    "I have never indulged in unusual sex practices.",
    "At times my thoughts have raced ahead faster than I could speak them.",
    "If I could get into the movies without paying and be sure I was not seen, I would probably do it.",
    "I often wonder what hidden reason another person may have for doing something nice for me.",
    "I believe that my home life is as pleasant as that of most people I know.",
    "I believe in law enforcement.",
    "Criticism or scolding hurts me terribly.",
    "I like to cook.",
    "My conduct is largely controlled by the behavior of those around me.",
    "I certainly feel useless at times.",
    "When I was a child, I belonged to a group of friends that tried to be loyal through all kinds of trouble.",
    "I believe in life hereafter.",
    "I would like to be a soldier.",
    "At times I feel like picking a fistfight with someone.",
    "I have often lost out on things because I couldn't make my mind up soon enough.",
    "It makes me impatient to have people ask my advice or otherwise interrupt me when I am working on something important.",
    "I used to keep a diary.",
    "I believe I am being plotted against.",
    "I would rather win than lose in a game.",
    "Most nights I go to sleep without thoughts or ideas bothering me.",
    "During the past few years I have been well most of the time.",
    "I have never had a fit or convulsion.",
    "I am neither gaining nor losing weight.",
    "I believe I am being followed.",
    "I feel that I have often been punished without cause.",
    "I cry easily.",
    "I cannot understand what I read as often as I used to.",
    "I have never felt better in my life than I do now.",
    "The top of my head sometimes feels tender.",
    "Sometimes I feel as if I must injure either myself or someone else.",
    "I resent having anyone trick me so cleverly that I have to admit that I was fooled.",
    "I do not tire quickly.",
    "I like to know some important people because it makes me feel important.",
    "I am afraid when I look down from a high place.",
    "It wouldn't make me nervous if any members of my family got into trouble with the law.",
    "I am never happy unless I am roaming or traveling around.",
    "What others think of me does not bother me.",
    "It makes me uncomfortable to pull a stunt at a party even when others are doing the same sort of things.",
    "I have never had a fainting spell.",
    "I liked school.",
    "I frequently have to fight against showing that I am bashful.",
    "Someone has been trying to poison me.",
    "I do not have a great fear of snakes.",
    "I seldom or never have dizzy spells.",
    "My memory seems to be all right.",
    "I am worried about sex.",
    "I find it hard to make small talk when I meet new people.",
    "I have had periods in which I carried on activities without knowing later what I had been doing.",
    "When I get bored I like to stir up some excitement.",
    "I am afraid of losing my mind.",
    "I am against giving money to beggars.",
    "I frequently notice my hand shakes when I try to do something.",
    "I can read a long while without tiring my eyes.",
    "I like to study and read about things that I am working at.",
    "I feel weak all over much of the time.",
    "I have very few headaches.",
    "My hands have not become clumsy or awkward.",
    "Sometimes, when embarrassed, I break out in a sweat, which annoys me greatly.",
    "I have had no difficulty in keeping my balance while walking.",
    "There is something wrong with my mind.",
    "I do not have spells of hay fever or asthma.",
    "I have had attacks in which I could not control my movements or speech, but in which I knew what was going on around me.",
    "I do not like everyone I know.",
    "I daydream very little.",
    "I wish I were not so shy.",
    "I am not afraid to handle money.",
    "If I were a reporter, I would very much like to report news of the theatre.",
    "I enjoy many different kinds of play and recreation.",
    "I like to flirt.",
    "Many people treat me more like a child than a grown-up.",
    "I would like to be a journalist.",
    "My mother is a good woman, or (if your mother is dead) my mother was a good woman.",
    "In walking, I am very careful to step over sidewalk cracks.",
    "I have never had any breaking out on my skin that has worried me.",
    "There is very little love and companionship in my family as compared to other homes.",
    "I frequently find myself worrying about something.",
    "I think I would like the work of a building contractor.",
    "I often hear voices without knowing where they come from.",
    "I like science.",
    "It is not hard for me to ask for help from my friends even though I cannot return the favor.",
    "I very much like hunting.",
    "My parents often objected to the kind of people I went around with.",
    "I gossip a little at times.",
    "My hearing is apparently as good as that of most people.",
    "Some members of my family have habits that bother and annoy me very much.",
    "At times I feel that I can make up my mind with unusually great ease.",
    "I would like to belong to several clubs.",
    "I hardly ever notice my heart pounding and I am seldom short of breath.",
    "I like to talk about sex.",
    "I like to visit places where I have never been before.",
    "I have been inspired to a program of life based on duty which I have since carefully followed.",
    "I have, at times stood in the way of people who were trying to do something, not because it amounted to much, but because of the principle of the thing.",
    "I get mad easily and then get over it soon.",
    "I have been quite independent and free from family rule.",
    "I brood a great deal.",
    "Someone has been trying to rob me.",
    "My relatives are nearly all in sympathy with me.",
    "I have periods of such great restlessness that I cannot sit long in a chair.",
    "I have been disappointed in love.",
    "I never worry about my looks.",
    "I dream frequently about things that are best kept to myself.",
    "Children should be taught all the main facts of sex.",
    "I believe I am no more nervous that most others.",
    "I have few or no pains.",
    "My way of doing things is apt to be misunderstood by others.",
    "Sometimes without any reason or even when things are going wrong, I feel excitedly happy or \"on top of the world\".",
    "I don't blame people for trying to grab everything they can get in this world.",
    "There are persons who are trying to steal my thoughts and ideas.",
    "I have had blank spells in which my activities were interrupted and I did not know what was going on around me.",
    "I can be friendly with people who do things that I consider wrong.",
    "I like to be with a crowd who play jokes on one another.",
    "Sometimes in elections, I vote for people about whom I know very little.",
    "I have difficulty in starting to do things.",
    "I believe I am a condemned person.",
    "I was a slow learner in school.",
    "If I were an artist, I would like to draw flowers.",
    "It does not bother me that I am not better looking.",
    "I sweat very easily, even on cool days.",
    "I'm entirely self-confident.",
    "At times it has been impossible for me to stop from stealing or shoplifting something.",
    "It is safer to trust nobody.",
    "Once a week or more, I become very excited.",
    "When in a group of people, I have trouble thinking of the right thing to say.",
    "Something exciting will almost always pull me out of it when I am feeling low.",
    "When I leave home, I do not worry about whether the door is locked and the windows are closed.",
    "I believe my sins are unpardonable.",
    "I have numbness in one or more places on my skin.",
    "I do not blame a person for taking advantage of people who leave themselves open to it.",
    "My eyesight is as good as it has been for years.",
    "At times I have been so entertained by the cleverness of some criminals that I have hopes they would get away with it.",
    "I have often felt that strangers were looking at me critically.",
    "Everything tastes the same.",
    "I drink an unusually large amount of water every day.",
    "Most people make friends because friends are likely to be useful to them.",
    "I do not often notice my ears ringing or buzzing.",
    "Once in a while I feel hate toward members of my family whom I usually love.",
    "If I were a reporter I would very much like to report sporting news.",
    "I can sleep during the day, but not at night.",
    "I am sure I am being talked about.",
    "Once in a while, I laugh at a dirty joke.",
    "I have very few fears compared to my friends.",
    "In a group of people, I would not be embarrassed to be called upon to start a discussion or give an opinion about something I know well.",
    "I am always disgusted with the law when a criminal is freed through the arguments of a smart lawyer.",
    "I have used alcohol excessively.",
    "I am likely not to speak to people until they speak to me.",
    "I have never been in trouble with the law.",
    "I have periods in which I feel unusually cheerful without any special reason.",
    "I wish I were not bothered by thoughts about sex.",
    "If several people find themselves in trouble, the best thing for them to do is agree upon a story and stick to it.",
    "It does not bother me particularly to see animals suffer.",
    "I think that I feel more intensely than most people do.",
    "There was never a time in my life when I liked to play with dolls.",
    "Life is a strain for me much of the time.",
    "I am so touchy on some subjects that I can't talk about them.",
    "In school I found it very hard to talk in front of the class.",
    "I love my mother, or (if your mother is dead) I loved my mother.",
    "Even when I am with people I feel lonely much of the time.",
    "I get all the sympathy I should.",
    "I refuse to play some games because I am not good at them.",
    "I seem to make friends about as quickly as others do.",
    "I dislike having people around me.",
    "I have been told that I walk during sleep.",
    "The person who provides temptation by leaving valuable property unprotected is about as much to blame for its theft as the one who steals it.",
    "I think nearly anyone would tell a lie to keep out of trouble.",
    "I am more sensitive than most people.",
    "Most people inwardly dislike putting themselves out to help other people.",
    "Many of my dreams are about sex.",
    "My parents and family find more fault with me than they should.",
    "I am easily embarrassed.",
    "I worry over money and business.",
    "I have never been in love with anyone.",
    "The things that some of my family have done have frightened me.",
    "I almost never dream.",
    "My neck spots with red often.",
    "I have never been paralyzed or had any unusual weakness of any of my muscles.",
    "Sometimes my voice leaves me or changes even though I have no cold.",
    "My mother or father often made me obey even when I thought it was unreasonable.",
    "Peculiar odors come to me at times.",
    "I cannot keep my mind on one thing.",
    "I have reason for feeling jealous of one or more members of my family.",
    "I feel anxiety about something or someone almost all the time.",
    "I easily become impatient with people.",
    "Most of the time I wish I were dead.",
    "Sometimes I become so excited that I find it hard to get to sleep.",
    "I have certainly had more than my share of things to worry about.",
    "No one cares much about what happens to you.",
    "At times I hear so well that it bothers me.",
    "I forget right away what people say to me.",
    "I usually have to stop and think before I act, even in small matters.",
    "Often I cross the street in order not to meet someone I see.",
    "I often feel as if things are not real.",
    "The only interesting part of newspapers is the comic strips.",
    "I have a habit of counting things that are not important, such as bulbs on electric signs and so forth.",
    "I have no enemies who really wish to harm me.",
    "I tend to be on my guard with people who are somewhat friendlier than I had expected.",
    "I have strange and peculiar thoughts.",
    "I get anxious and upset when I have to make a short trip away from home.",
    "I usually expect to succeed in things I do.",
    "I hear strange things when I am alone.",
    "I have been afraid of things or people that I knew could not hurt me.",
    "I have no dread of going into a room by myself where other people have already gathered and are talking.",
    "I am afraid of a knife or anything very sharp or pointed.",
    "Sometimes I enjoy hurting persons I love.",
    "I can easily make other people afraid of me, and sometimes do it for the fun of it.",
    "I have more trouble concentrating than others seem to have.",
    "I have several times given up doing a thing because I thought too little of my ability.",
    "Bad words, often terrible words, come into my mind and I cannot get rid of them.",
    "Sometimes some unimportant thought will run through my mind and bother me for days.",
    "Almost every day something happens to frighten me.",
    "At times I am all full of energy.",
    "I am inclined to take things hard.",
    "At times I have enjoyed being hurt by someone I loved.",
    "People say insulting and vulgar things about me.",
    "I feel uneasy indoors.",
    "I am not usually self-conscious.",
    "Someone has control over my mind.",
    "At parties I am more likely to sit by myself or with just one other person than to join in with the crowd.",
    "People often disappoint me.",
    "I have sometimes felt that difficulties were piling up so high that I could not overcome them.",
    "I love to go to dances.",
    "At periods, my mind seems to work more slowly than usual.",
    "While in trains, busses, etc., I often talk with strangers.",
    "I enjoy children.",
    "I enjoy gambling for small stakes.",
    "If given the chance, I could do some things that would be of great benefit to the world.",
    "I have often met people who were supposed to be experts who were no better than I.",
    "It makes me feel like a failure when I hear of the success of someone I know well.",
    "I often think: \"I wish I were a child again.\"",
    "I am never happier than when alone.",
    "If given the chance I would make a good leader of people.",
    "I am embarrassed by dirty stories.",
    "People generally demand more respect for their own rights than they are willing to allow for others.",
    "I enjoy social gatherings just to be with people.",
    "I try to remember good stories to pass them on to other people.",
    "At one or more times in my life I felt that someone was making me do things by hypnotizing me.",
    "I find it hard to set aside a task that I have undertaken, even for a short time.",
    "I am quite often not in on the gossip and talk of the group that I belong to.",
    "I have often found people jealous of my good ideas, just because they had not thought of them first.",
    "I enjoy the excitement of a crowd.",
    "I do not mind meeting strangers.",
    "Someone has been trying to influence my mind.",
    "I can remember \"playing sick\" to get out of something.",
    "My worries seem to disappear when I get into a crowd of lively friends.",
    "I feel like giving up quickly when things go wrong.",
    "I like to let people know where I stand on things.",
    "I have had periods when I felt so full of pep that sleep did not seem necessary for days at a time.",
    "Whenever possible I avoid being in a crowd.",
    "I shrink from facing a crisis or difficulty.",
    "I am apt to pass up something I want to do when others feel that it isn't worth doing.",
    "I like parties and socials.",
    "I have often wished I were a member of the opposite sex.",
    "I am not easily angered.",
    "I have done some bad things in the past that I never tell anybody about.",
    "Most people will use somewhat unfair means to get ahead in life.",
    "It makes me nervous when people ask me personal questions.",
    "I do not feel I can plan my own future.",
    "I am not happy with myself the way I am.",
    "I get angry when my friends or family give me advice on how to live my life.",
    "I got many beatings when I was a child.",
    "It bothers me when people say nice things about me.",
    "I don't like hearing other people give their opinions about life.",
    "I often have serious disagreements with people who are close to me.",
    "When things get really bad, I know I can count on my family for help.",
    "I liked playing \"house\" when I was a child.",
    "I am not afraid of fire.",
    "I have sometimes stayed away from another person because I feared doing or saying something I might regret afterwards.",
    "I can express my true feelings only when I drink.",
    "I very seldom have spells of the blues.",
    "I am often said to be hotheaded.",
    "I wish I could get over worrying about things I have said that may have injured other people's feelings.",
    "I feel unable to tell anyone all about myself.",
    "Lightning is one of my fears.",
    "I like to keep people guessing what I am going to do next.",
    "My plans have frequently seemed so full of difficulties that I have had to give them up.",
    "I am afraid to be alone in the dark.",
    "I have often felt bad about being misunderstood when trying to keep someone from making a mistake.",
    "A windstorm frightens me.",
    "I frequently ask people for advice.",
    "The future is too uncertain for a person to make serious plans.",
    "Often, even though everything is going fine for me, I feel that I don't care about anything.",
    "I have no fear of water.",
    "I often must sleep over a matter before I decide what to do.",
    "People have often misunderstood my intentions when I was trying to put them right and be helpful.",
    "I have no trouble swallowing.",
    "I am usually calm and not easily upset.",
    "I would certainly enjoy beating criminals at their own game.",
    "I deserve severe punishment for my sins.",
    "I am apt to take disappointments so keenly that I can't put them out of my mind.",
    "It bothers me to have someone watch me at work even though I know I can do it well.",
    "I am often so annoyed when someone tries to get ahead of me in a line of people that I speak to that person about it.",
    "At times I think I am no good at all.",
    "When I was young I often did not go to school even when I should have gone.",
    "One or more members of my family are very nervous.",
    "I have at times had to be rough with people who were rude or annoying.",
    "I worry quite a bit over possible misfortunes.",
    "I have strong political opinions.",
    "I would like to be an auto racer.",
    "It is all right to get around the law if you don't actually break it.",
    "There are certain people whom I dislike so much that I am inwardly pleased when they are catching it for something that they have done.",
    "It makes me nervous to have to wait.",
    "I am apt to pass up something I want to do because others feel that I am not going about it in the right way.",
    "I was fond of excitement when I was young.",
    "I am often inclined to go out of my way to win a point with someone who has opposed me.",
    "I am bothered by people outside, on the streets, in stores, etc., watching me.",
    "The man who had most to do with me when I was a child (such as my father, stepfather, etc.) was very strict with me.",
    "I used to like to play hopscotch and jump rope.",
    "I have never seen a vision.",
    "I have several times had a change of heart about my lifework.",
    "Except by doctor's orders I never take drugs or sleeping pills.",
    "I am often sorry because I am so irritable and grouchy.",
    "In school my marks in classroom behavior were quite regularly bad.",
    "I am fascinated by fire.",
    "When I am cornered I tell that portion of the truth which is not likely to hurt me.",
    "If I were in trouble with several friends who were as guilty as I was, I would rather take the whole blame than give them away.",
    "I am often afraid of the dark.",
    "When a man is with a woman he is usually thinking about things related to her sex.",
    "I am usually very direct with people I am trying to correct or improve.",
    "I dread the thought of an earthquake.",
    "I readily become one hundred percent sold on a good idea.",
    "I usually work things out for myself rather than get someone to show me how.",
    "I am afraid of finding myself in a closet or small closed space.",
    "I must admit that I have at times been worried beyond reason over something that really did not matter.",
    "I do not try to cover up my poor opinion or pity of people so that they won't know how I feel.",
    "I am a high-strung person.",
    "I have frequently worked under people who seem to have things arranged so that they get credit for good work but are able to pass mistakes onto those under them.",
    "I sometimes find it hard to stick up for my rights because I am so reserved.",
    "Dirt frightens or disgusts me.",
    "I have a daydream life about which I do not tell other people.",
    "Some of my family members have quick tempers.",
    "I cannot do anything well.",
    "I often feel guilty because I pretend to feel more sorry about something than I really do.",
    "I strongly defend my own opinions as a rule.",
    "I have no fear of spiders.",
    "The future seems hopeless to me.",
    "The members of my family and my close relatives get along quite well.",
    "I would like to wear expensive clothes.",
    "People can pretty easily change my mind, even when I have made a decision about something.",
    "I am made nervous by certain animals.",
    "I can stand as much pain as others can.",
    "Several times I have been the last to give up trying to do a thing.",
    "It makes me angry to have people hurry me.",
    "I am not afraid of mice.",
    "Several times a week I feel as if something dreadful is about to happen.",
    "I feel tired a good deal of the time.",
    "I like repairing a door latch.",
    "Sometimes I am sure that other people can tell what I am thinking.",
    "I like to read about science.",
    "I am afraid of being alone in a wide-open place.",
    "I sometimes feel that I am about to go to pieces.",
    "A large number of people are guilty of bad sexual conduct.",
    "I have often been frightened in the middle of the night.",
    "I am greatly bothered by forgetting where I put things.",
    "The one to whom I was most attached and whom I most admired as a child was a woman (mother, sister, aunt, or other woman).",
    "I like adventure stories better than romantic stories.",
    "Often I get confused and forget what I want to say.",
    "I am very awkward and clumsy.",
    "I really like playing sports (such as soccer or football).",
    "I hate my whole family.",
    "Some people think it's hard to get to know me.",
    "I spend most of my spare time by myself.",
    "When people do something that makes me angry, I let them know how I feel about it.",
    "I usually have a hard time deciding what to do.",
    "People do not find me attractive.",
    "People are not very kind to me.",
    "I often feel that I'm not as good as other people.",
    "I am very stubborn.",
    "I have enjoyed using marijuana.",
    "Mental illness is a sign of weakness.",
    "I have a drug or alcohol problem.",
    "Ghost or spirits can influence people for good or bad.",
    "I feel helpless when I have to make some important decisions.",
    "I always try to be pleasant even when others are upset or critical.",
    "When I have a problem it helps to talk it over with someone.",
    "My main goals in life are within my reach.",
    "I believe that people should keep personal problems to themselves.",
    "I am not feeling much pressure or stress these days.",
    "It bothers me greatly to think of making changes in my life.",
    "My greatest problems are caused by the behavior of someone close to me.",
    "I hate going to doctors, even when I'm sick.",
    "Although I am not happy with my life, there is nothing I can do about it.",
    "Talking over problems and worries with someone is often more helpful than taking drugs or medicine.",
    "I have habits that are really harmful.",
    "When problems need to be solved, I usually let other people take charge.",
    "I recognize several faults in myself that I will not be able to change.",
    "I am so sick of what I have to do every day that I just want to get out of it all.",
    "I have recently considered killing myself.",
    "I often become very irritable when people interrupt my work.",
    "I often feel I can read other people's minds.",
    "Having to make important decisions makes me nervous.",
    "Others tell me I eat too fast.",
    "Once a week or more I get high or drunk.",
    "I have had a tragic loss in my life that I know I will never get over.",
    "Sometimes I get so angry and upset I don't know what comes over me.",
    "When people ask me to do something I have a hard time saying no.",
    "I am never happier than when I am by myself.",
    "My life is empty and meaningless.",
    "I find it difficult to hold down a job.",
    "I have made lots of bad mistakes in my life.",
    "I get angry with myself for giving in to other people so much.",
    "Lately I have thought a lot about killing myself.",
    "I like making decisions and assigning jobs to others.",
    "Even without my family I know there will always be someone there to take care of me.",
    "At movies, restaurants, or sporting events, I hate to stand in line.",
    "No one knows it but I have tried to kill myself.",
    "Everything is going on too fast around me.",
    "I know I am a burden to others.",
    "After a bad day, I need a few drinks to relax.",
    "Much of the trouble I'm having is due to bad luck.",
    "At times I can't seem to stop talking.",
    "Sometimes I cut or injure myself on purpose without knowing why.",
    "I work very long hours, even though my job doesn't require this.",
    "I usually feel better after a good cry.",
    "I forget where I leave things.",
    "If I could live my life over again, I would not change much.",
    "I get very irritable when people I depend on don't get their work done on time.",
    "If I get upset, I'm sure to get a headache.",
    "I like to drive a hard bargain.",
    "Most men are unfaithful to their wives now and then.",
    "Lately I have lost my desire to work out my problems.",
    "I have gotten angry and broken furniture or dishes when I was drinking.",
    "I work best when I have a definite deadline.",
    "I have become so angry with someone that I have felt as if I would explode.",
    "Terrible thoughts about my family come to me at times.",
    "People tell me I have a problem with alcohol, but I disagree.",
    "I always have too little time to get things done.",
    "My thoughts these days turn more and more to death and the hereafter.",
    "I often keep and save things that I will probably never use.",
    "I have been so angry at times that I've hurt someone in a physical fight.",
    "In everything I do lately, I feel that I am being tested.",
    "I have very little to do with my relatives now.",
    "I sometimes seem to hear my thoughts being spoken out loud.",
    "When I am sad, visiting with friends can always pull me out of it.",
    "Much of what is happening to me now seems to have happened to me before.",
    "When my life gets difficult, it makes me want to just give up.",
    "I can't go into a dark room alone, even in my own home.",
    "I worry a great deal over money.",
    "The man should be the head of the family.",
    "The only place where I feel relaxed is in my own home.",
    "The people I work with are not sympathetic with my problems.",
    "I am satisfied with the amount of money I make.",
    "I usually have enough energy to do my work.",
    "It is hard for me to accept compliments.",
    "In most marriages one or both partners are unhappy.",
    "I almost never lose self-control.",
    "It takes a great deal of effort for me to remember what people tell me these days.",
    "When I am sad or blue, it is my work that suffers.",
    "Most married couples don't show much affection for each other."
  ];
  
  questions_zh = [
    "MMPI-2 明尼苏达多项人格测验",
    "我对计算机相关的内容感兴趣。",
    "通常，我的食欲不错。",
    "通常，我早上起床精神充沛。",
    "我会喜欢当图书管理员。",
    "我睡觉时容易被吵醒。",
    "我的父亲是个好人。",
    "我喜欢阅读犯罪新闻。",
    "我很少觉得手脚发冷。",
    "我的生活中充满令我感兴趣的事物。",
    "我认为我现在学习、工作的能力不比从前差。",
    "很多时候，我感到如鲠在喉。",
    "我对我的性生活很满意。",
    "我认为人们应该认真思考他们的梦境，从中得到启示或是警告。",
    "我喜欢侦探或悬疑相关的故事。",
    "我的生活节奏很紧张。",
    "有时我会幻想一些坏到说不出口的事。",
    "生活对我不公。",
    "我经常恶心想吐。",
    "如果我找到一份新工作，我乐于去寻找应该套近乎的对象。",
    "我很少便秘。",
    "有时我非常想离开家。",
    "我觉得几乎没有人能理解我。",
    "有时我会难以控制地哭或笑。",
    "邪灵有时会附在我身上。",
    "我愿意成为一名歌手。",
    "我认为当我遇到困难时，最好不要和他人谈起。",
    "如果有人对我不利，我认为我应该报复回去。",
    "我每周都有几次觉得胃部不适。",
    "有时我真想骂人。",
    "我每隔几晚就会做噩梦。",
    "我很难集中注意力做事。",
    "我曾经有过非常奇异的经历。",
    "我很少担忧我的健康情况。",
    "我从未因性生活惹上麻烦。",
    "我小时候偷过东西。",
    "我总是在咳嗽。",
    "有时我很想砸东西。",
    "我曾有过超过一天的时间无法处理事情，因为没有力气“开始”。",
    "我经常睡眠不深，易被干扰。",
    "很多时候，我感到头痛。",
    "我有时也会说谎。",
    "如果不是人们对我有成见，我会更成功。",
    "我的判断力比以前更好。",
    "我每周都有一会儿感到没有理由地全身发热。",
    "我的身体和大多数朋友一样健康。",
    "我更喜欢与同学或认识但很久没见的人擦肩而过，除非他们先跟我说话。",
    "我几乎从未因心脏或胸部疼痛感到困扰。",
    "大多数时候，我宁愿发呆也不想做其他事情。",
    "我认为我善于社交。",
    "我经常需要听从一些人的命令，而他们还没有我懂得多。",
    "我并不是每天都读各种社会新闻。",
    "我的生活方式不对。",
    "我身体的某些部位经常会有烧灼感、刺痛感、爬行感或 ‘想睡觉’的感觉。",
    "我的家人不认可我的工作（或我期望的工作）。",
    "有时我会一直做一件事，直到他人对我失去耐心。",
    "我希望我能像其他人那么开心。",
    "我几乎从未感到后颈部不适。",
    "我认为有非常多的人为了获得别人的同情和帮助而夸大了他们的不幸。",
    "我每隔几天就会觉得胃部不适。",
    "我和人们在一起的时候，时常因为听到奇怪的声音而困扰。",
    "我是一个重要的人。",
    "男：我经常想成为女孩子。女：我不为自己是女孩子而感到遗憾。",
    "我不容易在情感方面受到伤害。",
    "我喜欢读爱情故事。",
    "我总是感到忧郁。",
    "没有法律会更好。",
    "我喜欢诗歌。",
    "有时我会捉弄动物。",
    "我想我会喜欢类似护林员的工作。",
    "我容易在争论中被说服。",
    "最近我感到执着于有所作为很难。",
    "有时我的灵魂离开了我的身体。",
    "我缺乏自信。",
    "我希望成为一名园丁。",
    "我经常觉得生命有价值。",
    "要让大多数人信服真理，需要大量的论证。",
    "我偶尔会把今天该做的事拖到明天。",
    "大多数认识我的人都喜欢我。",
    "我不介意成为他人取乐的对象。",
    "我想成为一名护士。",
    "我认为大多数人都会为了成功而撒谎。",
    "有很多事，我做完就后悔了。",
    "我很少和家人吵架。",
    "我曾因为不良行为被学校勒令停课或留校察看。",
    "有时我有强烈的冲动，想要做一些对人有害的或是使人震惊的事情。",
    "我喜欢去聚会或其它喧闹的场合。",
    "我遇到过许多充满各种可能性的问题，以至于我难以做出决定。",
    "男女应该拥有同样的性自由。",
    "控制自己是最难的事。",
    "我爱我的父亲。",
    "我几乎没有肌肉抽搐或莫名跳动的问题。",
    "我似乎并不关心发生在自己身上的事情。",
    "有时当我不舒服时，我很烦躁。",
    "很多时候，我感觉自己做了错事或坏事。",
    "我总是很开心。",
    "我能看到其他人看不到的人、事、物。",
    "我总是觉得头胀鼻塞。",
    "有些人虽然是正确的，但他们过于专横，所以我想和他们对着干。",
    "有些人在对我不利。",
    "我从未为了寻求刺激而做危险的事情。",
    "我经常觉得受了紧箍咒一般。",
    "有时我也会生气。",
    "如果我能下注，我会对比赛或游戏更感兴趣。",
    "大多数人诚实的主要原因是害怕被戳穿。",
    "我曾因为不良行为在学校里被领导约谈。",
    "我说话和以前一样（没有变快或变慢，没有口齿不清或嘶哑）。",
    "我在家的餐桌礼仪不像在外面一样好。",
    "任何有能力并愿意努力的人都有机会成功。",
    "我的聪慧和能力不比身边大多数人差。",
    "我认为大多数人在面对好处时，如有必要，都会采取不公正的手段来。",
    "我的胃有很多毛病。",
    "我喜欢戏剧。",
    "我知道我的大多数麻烦都是谁造成的。",
    "有时我被别人的私人物品，如鞋子、手套等强烈吸引，以至于我想偷走它们，尽管它们对我没有用处。",
    "血不会让我感到恐惧或恶心。",
    "我经常不理解我为什么变得一直如此烦躁。",
    "我从未吐血或呕血。",
    "我不担心自己可能患上重病。",
    "我喜欢采花或者种植物。",
    "我经常觉得我有必要为了我认为正确的事情站出来。",
    "我从未沉迷于在传统意义上不寻常的性行为。",
    "有时我思绪奔涌，超过我说话的速度。",
    "如果我在电影院能不付钱地看一场电影，且不会被他人发现，我会这么做。",
    "当其他人对我很好时，我经常会想他是否有其他的目的。",
    "我认为我的家庭和大多数我认识的人一样幸福。",
    "我信任执法部门。",
    "批评或责骂会对我造成很大的伤害。",
    "我对烹饪感兴趣。",
    "我的举止很大程度上受到周边人的影响。",
    "有时我感觉自己没有用。",
    "我小时候曾经加入一个团体，我们有难同当。",
    "我相信有来生。",
    "我愿意成为一名士兵。",
    "有时，我想要挑衅他人。",
    "我经常因为不能很快下定决心而错过一些事情。",
    "如果他人在我做重要的事情时打扰我，我会感到很不耐烦。",
    "我曾经记日记。",
    "我认为我被他人暗算。",
    "在比赛中，我想赢而不是输。",
    "我总能不受思绪和想法的困扰而安然入睡。",
    "在过去的几年里，我的生活总是很好。",
    "我从未痉挛或抽搐过。",
    "我的体重很稳定。",
    "我经常认为我被跟踪。",
    "我经常感到无缘无故地被惩罚。",
    "我很容易哭。",
    "我不能像以前一样容易地理解我读的东西。",
    "我从未像现在这样感觉良好。",
    "有时我头顶疼。",
    "有时我感到必须伤害自己或是他人。",
    "我讨厌承认自己被十分精明的人欺骗了。",
    "我不容易疲倦。",
    "我喜欢结识重要人物，因为这能让我觉得自己很重要。",
    "当我从高处向下让我感到害怕。",
    "我的家人触犯了法律不会让我感到紧张。",
    "除非能四处旅行闲逛，否则我永远不会快乐。",
    "别人怎么看我，我都无所谓。",
    "率先在人群中表演让我感到不舒服。",
    "我从未昏厥过。",
    "我（曾经）喜欢上学。",
    "我经常需要避免表现出腼腆。",
    "有人想毒害我。",
    "我不是很怕蛇。",
    "我几乎不头晕。",
    "我的记忆力不错。",
    "我被性所困扰。",
    "我觉得和陌生人闲聊是困难的。",
    "我曾有过一段时间，事情一结束就忘记自己做了什么。",
    "无聊的时候，我喜欢找点刺激。",
    "我害怕自己会发疯。",
    "我反对给乞丐钱。",
    "当我想做事时，我经常手抖。",
    "我可以阅读很长时间而不感到眼睛疲劳。",
    "我喜欢阅读、研究与我正在进行的工作或学习相关的内容。",
    "很多时候，我感到极度虚弱。",
    "我很少头痛。",
    "我的手很灵巧。",
    "我对自己在尴尬时流汗感到恼火。",
    "我走路时保持平衡并不困难。",
    "我的脑子有点毛病。",
    "我没有过气喘或花粉过敏的症状。",
    "我曾在保持清晰认知的情况下无法控制自己的行为或言语。",
    "不是所有我认识的人我都喜欢。",
    "我几乎不做白日梦。",
    "我希望我不是如此害羞。",
    "我不怕管钱。",
    "如果我是一个记者，我会喜欢报道有关剧院的新闻。",
    "我喜欢许多不同种类的娱乐活动。",
    "我喜欢言语调戏他人。",
    "许多人用对待小孩子的方式对待我，而不是将我视作能独立自主的人。",
    "我愿意成为一名新闻工作者。",
    "我的母亲是个好人。",
    "我走路时很小心地避开地砖的缝隙。",
    "我从未因皮肤情况而感到担忧。",
    "与其他家庭相比，我的家庭中缺乏爱与陪伴。",
    "我经常担忧一些小事。",
    "我认为我会喜欢类似建筑承包商的工作。",
    "我经常听见不知道源于何处的声音。",
    "我对自然科学感兴趣。",
    "当我知道自己无法回报时，我也能自然地向朋友寻求帮助。",
    "我想当个猎人。",
    "我的父母经常反对我交的朋友。",
    "有时我也会说人闲话。",
    "我的听力显然和大部分人一样好。",
    "我的一些家庭成员有着令我恼火的习惯。",
    "有时我异常轻松地做出了决定。",
    "我愿意加入一些社团或组织。",
    "我很少注意到自己的心跳，也很少气短。",
    "我喜欢谈论性。",
    "我喜欢去我没去过的地方。",
    "我受到启发，一直严格执行以责任为重的生活计划。",
    "我有时会因原则问题阻拦他人，尽管对方要做的事不会造成严重后果。",
    "我很容易生气，也很容易释怀。",
    "我已经独立，不受家庭约束。",
    "我经常耿耿于怀。",
    "有人一直想抢劫我。",
    "我大多数亲戚都很关心同情我。",
    "我有时坐立不安，无法安坐。",
    "我曾对爱情失望。",
    "我从不担心自己的长相。",
    "我经常梦到一些不可告人的事。",
    "我认为青少年的性教育是必要的。",
    "我认为我不比大多数人更容易紧张。",
    "我身上几乎没有哪里痛。",
    "我的做事方式容易引起他人的误解。",
    "有时甚至事情出了差错时，我也莫名地兴奋。",
    "我不责怪贪婪的人。",
    "我认为有人想窃取我的想法和主意。",
    "我曾经有过思维空白，不知道该做什么，也不知道周围在发生什么。",
    "我可以和做错了事的人友好相处。",
    "我喜欢和互相开玩笑的人在一起。",
    "在选举中，有时我会把票投给我不熟悉的人。",
    "开始去做一件事情对我来说是困难的。",
    "我认为我是一个被谴责的人。",
    "我在学校学东西很慢。",
    "如果我是一个艺术家，我愿意画花草。",
    "就算我不好看，我也不会因此困扰。",
    "我即使在天气凉爽时也容易出汗。",
    "我非常自信。",
    "有时我难以遏制地想偷东西。",
    "不相信任何人更安全。",
    "每周一次或多次，我会变得非常兴奋。",
    "一到人群中，我就不知道该说什么。",
    "我情绪低落时，总有令人兴奋的事情使我心情好转。",
    "我不会在出门时担心门窗是否锁好。",
    "我认为我有难以饶恕的过错。",
    "我的皮肤有部分麻木。",
    "如果有人利用了轻信他人的人，我不会责怪他。",
    "在过去的几年里，我的视力变化不大。",
    "有时，我被一些罪犯的聪明才智所吸引，希望他们能逃脱惩罚。",
    "我经常觉得陌生人用苛责的眼神看我。",
    "所有食物尝起来都一样。",
    "我每天喝格外多的水。",
    "大多数人交朋友是因为朋友很可能对他们有用。",
    "我并不经常耳鸣。",
    "通常，我爱我的家人，但有时我也恨他们。",
    "如果我是一个记者，我会喜欢报道有关体育的新闻。",
    "我白天能睡着，晚上却不能。",
    "我很确定我正被谈论。",
    "偶尔，我也会被黄色笑话逗笑。",
    "通常，我比我的朋友更不容易害怕。",
    "在一群人中，如果有人要求我就自己熟悉的事情展开讨论或发表意见，我不会感到尴尬。",
    "当一个罪犯通过聪明的律师逃避了罪责时，我会对法律感到厌恶。",
    "我有过酗酒的经历。",
    "我不愿意和人对话，除非他人主动找我说话。",
    "我从未因法律而陷入麻烦。",
    "我有时莫名地高兴。",
    "我希望我不再被性的想法所困扰。",
    "我认为如果几个人犯了事，他们最好提前设计好一套说辞并坚持下去。",
    "看到动物受苦不会使我难受。",
    "我认为我的感受比他人更强烈。",
    "我从未喜欢过洋娃娃。",
    "很多时候，生活令我感到压抑。",
    "我对一些话题很敏感，以至于无法谈论它们。",
    "在学校时，在班级面前讲话对我来说十分困难。",
    "我爱我的母亲。",
    "很多时候，即使我和他人在一起，也仍然感到孤单。",
    "应得的同情，我都得到了。",
    "我拒绝玩我不擅长的游戏。",
    "我和其他人一样很容易交到朋友。",
    "我不喜欢身边有人。",
    "有人说我会梦游。",
    "对贵重物品不加保护，从而提供诱惑的人和偷窃者一样，都要为其失窃承担责任。",
    "我想几乎所有人都会为了不惹麻烦而撒谎。",
    "我比大多数人更敏感。",
    "大多数人内心都不喜欢尽力帮助别人。",
    "我的很多梦都和性有关。",
    "我的父母和家人对我过分苛责。",
    "我很容易感到尴尬。",
    "我为自己的经济状况担忧。",
    "我从未爱上过任何人。",
    "我的一些家人所做的事情让我感到害怕。",
    "我几乎从不做梦。",
    "我的脖子经常出现红斑。",
    "我从未瘫痪或感到异常的肌肉虚弱。",
    "即使没有感冒，我有时也会难以发声或是声音改变。",
    "我的父母经常让我听从他们不合理的意见。",
    "我有时闻到特殊的气味。",
    "我难以将注意力集中在一件事上。",
    "我有理由嫉妒我的一些家庭成员。",
    "我总是对某物或某人感到焦虑。",
    "我很容易对他人不耐烦。",
    "大多数时候，我觉得我还是死了更好。",
    "有时我非常兴奋以至于难以入睡。",
    "我当然有很多事情要担心。",
    "没人关心你的遭遇。",
    "有时我的听力格外好，这令我感到困扰。",
    "别人对我说的话我很快就忘了。",
    "即使是小事，我通常也要停下来想一想再行动。",
    "我经常绕路以避免遇到认识的人。",
    "我经常感觉事物不真切。",
    "我喜欢刷视频而不喜欢阅读。",
    "我经常想无意义地数一些东西，例如灯牌上的灯数。",
    "我没有真的想伤害我的仇人。",
    "面对比我想象中更友好的人时，我往往会保持警惕。",
    "我有一些奇特的想法。",
    "当我必须离家短途旅行时，我就会焦虑不安。",
    "凡是我做的事情，我都期望成功。",
    "我一个人的时候会听到奇怪的声音。",
    "我一直害怕一些不会伤害我的人或物。",
    "如果一个房间里大家已经聚起来聊天，让我进去我并不会害怕。",
    "我害怕刀子或任何非常锋利，尖锐的东西。",
    "有时，我也享受伤害我所爱的人。",
    "我很容易让别人害怕我，有时还会以此为乐。",
    "我似乎比其他人更难以集中注意力。",
    "我曾多次放弃自己能做好的事情，因为我低估了自己的能力。",
    "我的脑海里回绕着可怕的言语，且我难以摆脱。",
    "有时一些无意义的想法会在我的脑海中困扰我好几天。",
    "几乎每天都有使我害怕的事情发生。",
    "有时我充满活力。",
    "我倾向于把事情看得很重。",
    "有时我会享受被他人所伤害。",
    "经常有人对我说侮辱性的话语。",
    "我在室内会感到不适。",
    "我通常不自觉。",
    "有人控制了我的思想。",
    "在聚会上，我倾向于自己坐着，而不是加入到喧闹之中。",
    "人们经常让我失望。",
    "有时觉得我觉得困难重重，无法克服。",
    "我喜欢参与舞会。",
    "有时，我的思维似乎不如平时敏捷。",
    "在公共交通工具上，我常与陌生人交谈。",
    "我喜欢小孩子。",
    "我喜欢小赌怡情。",
    "如果有机会，我会做一些对世界大有裨益的事情。",
    "我经常遇到一些本应是专家的人，却比我好不了多少。",
    "我听说熟人很成功时，就感觉自己很失败。",
    "我经常想回到小时候。",
    "我独处时最开心。",
    "如果有机会，我会成为一个好的领导者。",
    "我对低俗的故事感到尴尬。",
    "我认为人们通常更多地要求得到自己的权利，而不为他人发声。",
    "我喜欢社交聚会，只是为了和大家在一起。",
    "我努力记下有趣的故事，把它们讲给别人听。",
    "曾有一次或多次，我觉得有人通过催眠我让我做了一些事。",
    "我发现自己很难搁置自己承担的任务，哪怕是很短的时间。",
    "我很少参与我所属团体的八卦讨论。",
    "我经常发现他人嫉妒我的好主意，只因他们没有第一个想出来。",
    "我喜欢在人群中的兴奋感。",
    "我不介意与陌生人见面。",
    "有人一直试图影响我的思想。",
    "我曾为了逃避一些事情而装病。",
    "当我和一群活泼的朋友在一起时，我的烦恼似乎就消失了。",
    "当事情出了差错时，我会很想放弃。",
    "我喜欢让别人知道我的观点和立场。",
    "我曾有一段时间充满活力，似乎几天都不用睡觉。",
    "我会尽可能避免身处人群中。",
    "我在面对危险或困难时退缩。",
    "当别人认为我做的事情不值得时，我很容易放弃。",
    "我喜欢聚会等社交活动。",

    "我经常希望自己的指派性别不同。",
    "我不容易生气。",
    "我曾做过一些从未告诉过任何人的坏事。",
    "我认为大多数人会为了取得成功而使用不公正的手段。",
    "向我提问私人问题会使我紧张。",
    "我认为我无法良好地规划自己的未来。",
    "我对自己的现状不满意。",
    "当朋友或家人给我的生活提建议时，我会很生气。",
    "我小时候在家里经常挨打。",
    "当别人夸我时，我容易感到困扰。",
    "我不喜欢听别人讲人生观。",
    "我经常与亲近的人观点不和。",
    "我知道，当遇到糟糕的事情时我能得到家人的有效帮助。",
    "我小时候喜欢玩跳房子。",
    "我不怕火。",
    "我有时会远离他人，因为我担心我可能为我的言行感到后悔。",
    "我只有喝了酒才能表达自己的真实感受。",
    "我很少感到忧郁。",
    "我经常被说是急性子。",
    "我希望我能摆脱对自己可能曾经伤害了他人感情的担忧。",
    "我难以和盘托出。",
    "我害怕雷电。",
    "我喜欢让人们猜测我的下一步行动。",
    "我的计划经常充满困难，以至于我不得不放弃。",
    "我害怕独自一人待在黑暗中。",
    "在试图阻止某人犯错时，我经常因为被误解而难过。",
    "我害怕大风。",
    "我经常向他人请教。",
    "我认为未来有太多不确定性，独立的个体很难做出认真的规划。",
    "通常，即使一切都很顺利，我也不会感到愉快。",
    "我不怕水。",
    "我经常需要认真考虑才能做出决定。",
    "我经常在试图帮助他人纠正错误时被误解。",
    "我没有吞咽方面的困难。",
    "通常，我很冷静，不容易失落。",
    // "通常，我很冷静，不容易心烦意乱。",
    "我很享受在各种场合中“战胜”反面人物。",
    "我认为我有严重的过错，并且应被惩罚。",
    "我容易把曾经的失望看得很重，以至于难以摆脱。",
    "即使是我擅长的事情，有人盯着我做也会使我感到困扰。",
    "通常，我看到有人插队会很愤怒，并且会站出来指责他。",
    "有时我觉得我一事无成。",
    "在我小时候我经常没有正当理由地不去上学。",
    "我的一些家庭成员过于敏感。译注：不确定此翻译是否正确",
    "我有时不得不对一些粗鲁的人采取粗暴的态度。",
    "我经常担忧可能发生不幸。",
    "我有强硬的政治主张。",
    "我愿意成为一名赛车手。",
    "我认为有意地规避法律是合情合理的，只要没有真的违法。",
    "当我讨厌的人因为他们的所作所为被抓住时，我感到高兴。",
    "必须等待会使我紧张。",
    "当别人觉得我的方向不对时，我很容易放弃我想做的事情。",
    "我年轻时很喜欢寻刺激。",
    "通常，我会尽一切可能向反对我的人证明我是正确的。",
    "我会因为他人看向我的视线感到困扰，例如在街上。",
    "我小时候与我关系最密切的人（例如父亲）对我很严格。",
    "我曾喜欢跳房子或是跳绳的游戏。",
    "我从未看见过异象。",
    "我曾多次想改变我一生的工作。",
    "医嘱之外，我从不服用有致幻作用的药物或安眠药。",
    "我经常因为我的坏脾气感到不好意思。",
    "在学校时，我的课堂行为评价经常很差。",
    "我会受到火的吸引。",
    "我只会说出对我无害的那部分真相。",
    "如果我和几个朋友一起闯了祸，我愿意揽下所有的责任，而不把他们供出。",
    "我经常对黑暗感到害怕。",
    "我认为一个男性和女性在一起时往往想着与性相关的事情。",
    "当我试图纠正某人或帮助他改进时，我往往很直白。",
    "我想到地震就会感到恐惧。",
    "我很容易完全赞同一个好主意。",
    "通常，我自己解决问题，而不是让其他人告诉我该怎么做。",
    "我害怕发现自己身处狭小的空间，例如柜子里。",
    "我有时极度担心一些无关紧要的事情。",
    "我不会试图掩饰我对他人的怜悯。",
    "我精力旺盛。",
    "我经常在这种人手下工作，他们总是揽下功劳，却把过错推给下属。",
    "我有时因为内向而难以捍卫自己的权利。",
    "脏东西使我害怕或厌恶。",
    "我内心深处有一种梦想中的生活。",
    "我的一些家庭成员脾气急躁。",
    "我认为我什么都做不好。",
    "我经常为假装自己对某些事情非常难过而感到愧疚。",
    "捍卫自己的观点是我的原则之一。",
    "我不害怕蜘蛛。",
    "我对未来感到没有希望。",
    "我的家庭成员和我的亲戚相处的很好。",
    "如果可能，我会想穿昂贵的衣服。",
    "我觉得人们可以轻易地改变我的想法，甚至是我已经做出的决定。",
    "某些动物会使我感到紧张。",
    "我认为我承受痛苦的能力和大多数人差不多。",
    "我经常是最后一个放弃某件事情的人。",
    "催促我会使我生气。",
    "我不害怕老鼠。",
    "我每周都有几次感觉似乎有很糟糕的事情要发生。",
    "我经常感到疲倦。",
    "我喜欢修理门锁。",
    "有时我确信他人能看出我在想什么。",
    "我喜欢读自然科学相关的读物。",
    "我害怕独自一人待在开阔空旷的环境。",
    "我有时感觉自己要崩溃。",
    "我认为很多人曾有过不良的性行为。",
    "我经常在半夜受到惊吓。",
    "我经常忘记我把东西放哪里了，我对此感到困扰。",
    // "我对经常找不到东西感到很困扰。",
    "我小时候最依恋或崇拜的人的指派性别是女性。",
    "相比浪漫故事，我更喜欢冒险故事。",
    "我经常忘记刚刚自己想说什么。",
    "我笨手笨脚的。",
    "我很喜欢运动（例如足球）。",
    "我讨厌我的整个家庭。",
    "有些人觉得很难了解我。",
    "我的大多数空余时间都是独自一人度过的。",
    "当人们让我生气时，我会告诉他们我的感受。",
    "我经常难以决定要怎么做。",
    "人们不认为我有吸引力。",
    "人们对我不是很友善。",
    "我经常感觉自己不如其他人。",
    "我十分固执。",
    // "我是一个坚持己见的人。",
    "我认为我会享受大麻。",
    "我认为精神疾病是软弱的表现。",
    "我有药物滥用或是酗酒的问题。",
    "我认为鬼魂影响着人们的善恶。",
    "当我必须做出重要的决定时，我感到无助。",
    "即使在他人对我失望或是批评我时，我也总是尽可能使自己保持愉快。",
    "当我遇到困难时，和别人讨论有助于我解决它。",
    "我主要的生活目标是可以达到的。",
    "我认为人们应该自行解决个人问题。",
    "最近，我不觉得压力很大。",
    "想要改变当前的生活使我感到困扰。",
    "我所面临的最大的问题是由我身边的人(someone close to me,不好翻,自己理解一下)的行为导致的。",
    // "我最大的困难来源于身边的人。",
    "即使我生病了我也讨厌去看医生。",
    "尽管我对我的生活不满，但我无能为力。",
    "我认为和他人交流相比药物更能化解烦恼。",
    "我有一些非常不好的、有害的习惯。",
    // "我有一些有害于他人的习惯。",
    "面对问题时，我往往想让其他人来解决。",
    "我觉得我有一些无法改变的缺点。",
    "我对当前每天要做的事感到厌烦，并且想尽快摆脱这一切。",
    "最近，我考虑过自杀。",
    "当人们打扰我的工作时，我往往会很烦躁。",
    "我经常觉得我能读出他人的想法。",
    "我在需要做出重要决定时感到紧张。",
    "别人告诉我，我吃东西太快了。",
    // "我吃东西很快。",
    // "我每周都有几次酗酒。",
    "我每周都会嗑药或喝醉一次，甚至更多。",
    "我曾有过难以忘怀的悲惨失败经历。",
    "有时我莫名地变得生气或心烦意乱。",
    "我很难拒绝人们向我提出的请求。",
    "我独自一人生活时最开心。",
    "我的人生空白而无意义。",
    // "我觉得坚持一份职业很困难。",
    "我发现很难保住一份工作。（建议看原文，此翻译可能不准）",
    "我在生活中犯过许多糟糕的错误。",
    "我很容易让步或者屈服于他人，并对此感到恼怒。",
    "最近我经常想到自杀。",
    "我喜欢做决策者，例如给他人分配工作",
    "即使没有家人，也总有人会来照顾我。",
    "我讨厌排队，例如在电影院或是餐厅。",
    "我尝试过自杀，但没有其他人知道。",
    "我觉得我周围的一切都发展得太快。",
    "我认为我是其他人的负担。",
    "在糟糕的一天后，我需要小酌几杯来放松。",
    "我认为我的大多数麻烦是坏运气造成的。",
    "有时我停不下来地讲话。",
    "有的时候，不知道出于何种原因，我会故意伤害自己（自残）。",
    // "有时我自残。",
    "我经常长时间工作，尽管并没有被要求如此。",
    "通常，我在大哭一场后情绪会变好。",
    "我经常忘记把东西放在了哪里。",
    "如果我的人生能重来，我不会尝试改变太多。",
    "当我信赖的人没有如期完成工作时我会很烦躁。",
    "当我心烦意乱时我一定会头痛。",
    "我喜欢努力地讨价还价。",
    "我认为大多数男性对女性不忠。",
    "最近，我失去了克服困难的愿望。",
    "我曾在喝酒时感到愤怒，并且会砸东西。",
    // "我曾在喝酒时生气地砸东西。",
    "当我有一个明确的截止日期时，我工作地最好。",
    "我曾对某人极为愤怒，以至于感觉自己要爆炸。",
    "有时我想到有关家人的可怕想法。",
    "有人告诉我我酗酒，但我不同意。",
    "我总是没有充足的时间把事情做完。",
    "最近，我越来越多地想到死亡与来世。",
    "我经常保留一些我再也用不到的物品。",
    "有时我非常生气，以至于殴打他人。",
    "最近，我总是感觉自己做的事情是对我的“测试”。",
    "我现在很少和亲戚来往。",
    "我有时觉得自己的想法被大声地说了出来。",
    "我悲伤时，找朋友玩总能使我心情好转。",
    "我经常觉得自己经历过当前正在发生的事情。",
    "我在生活困难时经常想要放弃。",
    "我难以独自走进黑暗的环境，即使是在自己家中。",
    "我很担忧我的收入（不足）。",
    "我认为男性应当是一家之主。",
    "我只有在家时感到放松。",
    "我的同事对我没有同情心。",
    "我对现有的收入很满意。",
    "通常，我有足够的精力进行我的工作。",
    "我很难接受称赞。",
    "我认为在大多数婚姻中，至少有一方不快乐。",
    "我几乎从未失去过自控力。",
    "最近，我很难记住人们告诉我的事情。",
    "我的抑郁情绪主要来自于工作。",
    "我认为大多数夫妇并不是很爱彼此。"
  ];
  
  // VRIN and TRIN
  rin = [
    [
      // Name, Description, Base score
      ["VRIN", "Variable Response Inconsistency", 0],
      // Question pairs and score
      [
        [3, "T", 39, "T", 1],
        [6, "T", 90, "F", 1],
        [6, "F", 90, "T", 1],
        [9, "F", 56, "F", 1],
        [28, "T", 59, "F", 1],
        [31, "T", 299, "F", 1],
        [32, "F", 316, "T", 1],
        [40, "T", 176, "T", 1],
        [46, "T", 265, "F", 1],
        [48, "T", 184, "T", 1],
        [49, "T", 280, "F", 1],
        [73, "T", 377, "F", 1],
        [81, "T", 284, "F", 1],
        [81, "F", 284, "T", 1],
        [83, "T", 288, "T", 1],
        [84, "T", 105, "F", 1],
        [86, "T", 359, "F", 1],
        [95, "F", 388, "T", 1],
        [99, "F", 138, "T", 1],
        [103, "T", 344, "F", 1],
        [110, "T", 374, "F", 1],
        [125, "F", 195, "F", 1],
        [135, "F", 482, "T", 1],
        [136, "T", 507, "F", 1],
        [136, "F", 507, "T", 1],
        [152, "F", 464, "F", 1],
        [161, "T", 185, "F", 1],
        [161, "F", 185, "T", 1],
        [165, "F", 565, "F", 1],
        [166, "T", 268, "F", 1],
        [166, "F", 268, "T", 1],
        [167, "T", 243, "F", 1],
        [167, "F", 243, "T", 1],
        [196, "F", 415, "T", 1],
        [199, "T", 467, "F", 1],
        [199, "F", 467, "T", 1],
        [226, "T", 267, "F", 1],
        [259, "F", 333, "T", 1],
        [262, "F", 275, "F", 1],
        [290, "T", 556, "F", 1],
        [290, "F", 556, "T", 1],
        [339, "F", 394, "T", 1],
        [349, "T", 515, "F", 1],
        [349, "F", 515, "T", 1],
        [350, "F", 521, "T", 1],
        [353, "T", 370, "F", 1],
        [353, "F", 370, "T", 1],
        [364, "F", 554, "T", 1],
        [369, "F", 421, "T", 1],
        [372, "T", 405, "F", 1],
        [372, "F", 405, "T", 1],
        [380, "T", 562, "F", 1],
        [395, "T", 435, "F", 1],
        [395, "F", 435, "T", 1],
        [396, "T", 403, "F", 1],
        [396, "F", 403, "T", 1],
        [411, "T", 485, "F", 1],
        [414, "F", 485, "T", 1],
        [472, "T", 533, "F", 1],
        [472, "F", 533, "T", 1],
        [491, "T", 509, "F", 1],
        [506, "T", 520, "F", 1],
        [506, "F", 520, "T", 1],
        [513, "T", 542, "F", 1]
      ],
      // Male T scale
      [31, 34, 38, 42, 46, 50, 54, 57, 61, 65, 69, 73, 76, 80, 84, 88, 92, 96, 99, 103, 107, 111, 115, 118, 120],
      // Female T scale
      [30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98, 102, 106, 110, 114, 118, 120]
    ], [
      ["TRIN", "True Reponse Inconsistency", 9],
      [
        [3, "T", 39, "T", 1],
        [12, "T", 166, "T", 1],
        [40, "T", 176, "T", 1],
        [48, "T", 184, "T", 1],
        [63, "T", 27, "T", 1],
        [65, "T", 95, "T", 1],
        [73, "T", 239, "T", 1],
        [83, "T", 288, "T", 1],
        [99, "T", 314, "T", 1],
        [125, "T", 195, "T", 1],
        [209, "T", 351, "T", 1],
        [359, "T", 367, "T", 1],
        [377, "T", 534, "T", 1],
        [556, "T", 560, "T", 1],
        [9, "F", 56, "F", -1],
        [65, "F", 95, "F", -1],
        [125, "F", 195, "F", -1],
        [140, "F", 196, "F", -1],
        [152, "F", 464, "F", -1],
        [265, "F", 360, "F", -1],
        [359, "F", 367, "F", -1]
      ],
      ["114F", "107F", "99F", "92F", "85F", "78F", "71F", "64F", "57F", "50", "57T", "65T", "72T", "79T", "86T", "93T", "100T", "107T", "114T", "120T"],
      ["118F", "111F", "103F", "95F", "88F", "80F", "73F", "65F", "58F", "50", "58T", "65T", "73T", "80T", "88T", "95T", "103T", "111T", "118T", "120T"]
    ]
  ];
  
  // Scales and Critical Items
  scales = [
    [
      // Welsch Code, Scale Name, Scale Description
      ["F", "装坏", "Infrequency"],
      // True questions
      [18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 84, 96, 114, 138, 144, 150, 156, 162, 168, 180, 198, 216, 228, 234, 240, 246, 252, 258, 264, 270, 282, 288, 294, 300, 306, 312, 324, 336, 349, 355, 361],
      // False questions
      [6, 12, 78, 90, 102, 108, 120, 126, 132, 174, 186, 192, 204, 210, 222, 276, 318, 330, 343],
      // Male T scale 第一个是平均数 第二个是标准差
      //[, 36, 39, 42, 45, 48, 51, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 89, 92, 95, 98, 101, 104, 107, 110, 113, 116, 119, 120],
      [, 6.82, 3.79],
      // Female T scale
      //[, 37, 41, 44, 48, 51, 55, 58, 61, 65, 68, 72, 75, 79, 82, 85, 89, 92, 96, 99, 103, 106, 109, 113, 116, 120]
      [, 5.94, 3.60]
    ], [
      [, "Fb", "Backside F"],
      [281, 291, 303, 311, 317, 319, 322, 323, 329, 332, 333, 334, 387, 395, 407, 431, 450, 454, 463, 468, 476, 478, 484, 489, 506, 516, 517, 520, 524, 525, 526, 528, 530, 539, 540, 544, 555],
      [383, 404, 501],
      [, 42, 46, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 92, 96, 100, 104, 108, 112, 116, 120],
      [, 42, 46, 50, 54, 58, 62, 66, 70, 74, 77, 81, 85, 89, 93, 97, 101, 105, 108, 112, 116, 120]
      
    ], [
      [, "Fp", "Infrequency Psychopathology"],
      [66, 114, 162, 193, 216, 228, 252, 270, 282, 291, 294, 322, 323, 336, 371, 387, 478, 555],
      [51, 77, 90, 93, 102, 126, 192, 276, 501],
      [, 41, 48, 56, 63, 70, 77, 80, 94, 99, 106, 113, 120],
      [, 41, 49, 57, 65, 73, 81, 89, 97, 105, 113, 120]
    ], [
      ["L", "装好", "Lie"],
      [],
      [16, 29, 41, 51, 77, 93, 102, 107, 123, 139, 153, 183, 203, 232, 260],
      //[, 35, 39, 43, 48, 52, 56, 61, 65, 70, 74, 78, 83, 87, 91, 96, 100],
      //[, 33, 38, 42, 47, 52, 57, 62, 66, 71, 76, 81, 86, 90, 95, 100, 105]
      [, 5.77, 2.67],
      [, 6.07, 2.65]
    ], [
      ["K", "防御", "Correction"],
      [83],
      [29, 37, 58, 76, 110, 116, 122, 127, 130, 136, 148, 157, 158, 167, 171, 196, 213, 243, 267, 284, 290, 330, 338, 339, 341, 346, 348, 356, 365],
      //[, , , , , , , 30, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 75, 77, 79, 81],
      //[, , , , , , , 30, 32, 35, 37, 39, 41, 43, 46, 48, 50, 52, 54, 56, 59, 61, 63, 65, 67, 70, 72, 74, 76, 78, 81, 83]
      [, 15.55, 4.65],
      [, 15.96, 4.57]
    ], [
      [, "S", "Superlative Self-Presentation"],
      [121, 148, 184, 194, 534, 560],
      [15, 50, 58, 76, 81, 87, 89, 104, 110, 120, 123, 154, 196, 205, 213, 225, 264, 279, 284, 290, 302, 337, 341, 346, 352, 373, 374, 403, 420, 423, 428, 430, 433, 442, 445, 449, 461, 486, 487, 523, 538, 542, 545, 547],
      //[, , , , , , , , , 30, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45, 47, 48, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 78, 79],
      //[, , , , , , , , , , 30, 31, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 63, 64, 65, 66, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 80]
    ], [
      ["1", "疑病", "Hypochondriasis"],
      [18, 28, 39, 53, 59, 97, 101, 111, 149, 175, 247],
      [2, 3, 8, 10, 20, 45, 47, 57, 91, 117, 141, 143, 152, 164, 173, 176, 179, 208, 224, 249, 255],
      //[0.5, , , 30, 31, 31, 32, 33, 35, 37, 39, 42, 45, 48, 51, 54, 57, 59, 62, 64, 66, 68, 70, 73, 75, 77, 79, 81, 84, 86, 88, 90, 92, 94, 97, 99, 101, 103, 105, 108, 110, 112, 114, 116, 119, 120],
      //[0.5, , , , , , , 30, 33, 35, 38, 40, 43, 46, 49, 51, 54, 56, 59, 61, 63, 65, 67, 69, 71, 73, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 97, 99, 101, 103, 105, 107, 109, 111, 113, 115, 117, 120]
      [0.5, 6.31, 4.58],
      [0.5, 5.95, 4.08]
    ], [
      ["2", "抑郁", "Depression"],
      [5, 15, 18, 31, 38, 39, 46, 56, 73, 92, 117, 127, 130, 146, 147, 170, 175, 181, 215, 233],
      [2, 9, 10, 20, 29, 33, 37, 43, 45, 49, 55, 68, 75, 76, 95, 109, 118, 134, 140, 141, 142, 143, 148, 165, 178, 188, 189, 212, 221, 223, 226, 238, 245, 248, 260, 267, 330],
      //[, , , , , , , , , , 30, 32, 34, 36, 38, 40, 42, 45, 47, 50, 52, 54, 57, 59, 61, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 81, 83, 85, 87, 89, 91, 93, 95, 97, 98, 100, 102, 104, 106, 108, 110, 112, 114, 115, 117, 119, 120],
      //[, , , , , , , , , , , 30, 32, 34, 36, 38, 40, 42, 44, 46, 47, 49, 51, 53, 55, 57, 59, 62, 64, 66, 68, 70, 72, 75, 77, 79, 81, 83, 86, 88, 90, 92, 94, 96, 99, 101, 103, 105, 107, 109, 112, 114, 116, 118, 120]
      [, 21.35, 4.95],
      [, 22.80, 4.66]
    ], [
      ["3", "癔症", "Hysteria"],
      [11, 18, 31, 39, 40, 44, 65, 101, 166, 172, 175, 218, 230],
      [2, 3, 7, 8, 9, 10, 14, 26, 29, 45, 47, 58, 76, 81, 91, 95, 98, 110, 115, 116, 124, 125, 129, 135, 141, 148, 151, 152, 157, 159, 161, 164, 167, 173, 176, 179, 185, 193, 208, 213, 224, 241, 243, 249, 253, 263, 265],
      //[, , , , , , , , , 30, 31, 32, 33, 34, 35, 37, 39, 40, 42, 43, 45, 47, 50, 52, 54, 57, 59, 61, 64, 66, 69, 71, 74, 76, 79, 81, 84, 86, 89, 91, 94, 96, 99, 101, 104, 106, 109, 111, 114, 116, 119, 120],
      //[, , , , , , , , , , 30, 31, 32, 32, 34, 35, 36, 38, 39, 41, 43, 45, 47, 49, 51, 54, 56, 58, 61, 63, 65, 68, 70, 73, 75, 77, 80, 82, 84, 87, 89, 90, 92, 94, 96, 99, 101, 104, 106, 108, 111, 113, 115, 118, 120]
      [, 22.03, 4.92],
      [, 22.27, 4.67]
    ], [
      ["4", "精神病态", "Psychopathic Deviate"],
      [17, 21, 22, 31, 32, 35, 42, 52, 54, 56, 71, 82, 89, 94, 99, 105, 113, 195, 202, 219, 225, 259, 264, 288],
      [9, 12, 34, 70, 79, 83, 95, 122, 125, 129, 143, 157, 158, 160, 167, 171, 185, 209, 214, 217, 226, 243, 261, 263, 266, 267],
      //[0.4, , , , , , , , , , , , 30, 31, 33, 34, 35, 37, 39, 40, 42, 44, 46, 48, 50, 52, 54, 57, 59, 62, 64, 67, 69, 72, 74, 77, 79, 82, 84, 87, 90, 92, 95, 97, 100, 102, 105, 107, 110, 112, 115, 117, 120],
      //[0.4, , , , , , , , , , , , , 30, 32, 34, 36, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 58, 60, 63, 66, 68, 71, 73, 76, 79, 81, 84, 87, 89, 92, 94, 97, 100, 102, 105, 107, 110, 113, 115, 118, 120]
      [0.4, 17.61, 3.88],
      [0.4, 16.52, 3.84]
    ], [
      ["5", "女性气质", "Masculinity-Femininity - Male"],
      [4, 25, 62, 64, 67, 74, 80, 112, 119, 122, 128, 137, 166, 177, 187, 191, 196, 205, 209, 219, 236, 251, 256, 268, 271],
      [1, 19, 26, 27, 63, 68, 69, 76, 86, 103, 104, 107, 120, 121, 132, 133, 163, 184, 193, 194, 197, 199, 201, 207, 231, 235, 237, 239, 254, 257, 272],
      //[, , , , , , , , , , , , , , , , , 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 72, 76, 78, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 107, 109],
      [, 24.54, 3.8],
      []
    ], [
      ["5", "男性气质", "Masculinity-Femininity - Female"],
      [4, 25, 62, 64, 67, 74, 80, 112, 119, 121, 122, 128, 137, 177, 187, 191, 196, 205, 219, 236, 251, 256, 271],
      [1, 19, 26, 27, 63, 68, 69, 76, 86, 103, 104, 107, 120, 132, 133, 163, 166, 184, 193, 194, 197, 199, 201, 207, 209, 231, 235, 237, 239, 254, 257, 268, 272],
      [],
      //[, , , , , , , , 120, 118, 116, 114, 111, 109, 106, 104, 101, 99, 96, 94, 92, 89, 87, 84, 82, 79, 77, 74, 72, 69, 67, 65, 62, 60, 57, 55, 52, 50, 47, 45, 43, 40, 38, 35, 33, 30]
      [, 31.04, 3.81]
    ], [
      ["6", "偏执", "Paranoia"],
      [16, 17, 22, 23, 24, 42, 99, 113, 138, 144, 145, 146, 162, 234, 259, 271, 277, 285, 305, 307, 333, 334, 336, 355, 361],
      [81, 95, 98, 100, 104, 110, 244, 255, 266, 283, 284, 286, 297, 314, 315],
      //[, , , 30, 31, 32, 34, 37, 39, 42, 46, 49, 53, 57, 61, 64, 68, 72, 75, 79, 83, 86, 90, 94, 97, 101, 105, 108, 112, 116, 119, 120],
      //[, , , 30, 31, 32, 34, 37, 39, 42, 45, 49, 52, 56, 59, 63, 67, 70, 74, 78, 81, 85, 89, 92, 96, 100, 103, 107, 111, 114, 118, 120]
      [, 10.89, 3.09],
      [, 10.60, 3.13]
    ], [
      ["7", "精神衰弱", "Psychathenia"],
      [11, 16, 23, 31, 38, 56, 65, 73, 82, 89, 94, 130, 147, 170, 175, 196, 218, 242, 273, 275, 277, 285, 289, 301, 302, 304, 308, 309, 310, 313, 316, 317, 320, 325, 326, 327, 328, 329, 331],
      [3, 9, 33, 109, 140, 165, 174, 293, 321],
      //[1.0, , , , , , , , , , , , , , , 30, 31, 32, 33, 34, 36, 37, 39, 41, 43, 44, 47, 49, 51, 53, 55, 57, 59, 62, 64, 66, 68, 70, 72, 74, 77, 79, 81, 93, 85, 87, 89, 91, 94, 96, 98, 100, 102, 104, 106, 109, 111, 113, 115, 117, 119, 120],
      //[1.0, , , , , , , , , , , , , , , , , 30, 31, 32, 33, 35, 37, 38, 40, 42, 44, 47, 49, 51, 53, 55, 57, 59, 61, 62, 64, 66, 68, 70, 72, 73, 75, 77, 79, 81, 83, 84, 86, 88, 90, 92, 94, 95, 97, 99, 101, 103, 105, 106, 108, 110, 112, 114, 116, 117, 119, 120]
      [1, 12.95, 7.18],
      [1, 12.23, 6.78]
    ], [
      ["8", "精神分裂", "Schizophrenia"],
      [16, 17, 21, 22, 23, 31, 32, 35, 38, 42, 44, 46, 48, 65, 85, 92, 138, 145, 147, 166, 168, 170, 180, 182, 190, 218, 221, 229, 233, 234, 242, 247, 252, 256, 268, 273, 274, 277, 279, 281, 287, 291, 292, 296, 298, 299, 303, 307, 311, 316, 319, 320, 322, 323, 325, 329, 332, 333, 355],
      [6, 9, 12, 34, 90, 91, 106, 165, 177, 179, 192, 210, 255, 276, 278, 280, 290, 295, 343],
      //[1.0, , , , , , , , , , , , , 30, 31, 32, 33, 34, 35, 36, 37, 39, 4, 42, 44, 45, 47, 49, 51, 53, 55, 56, 58, 60, 62, 63, 65, 67, 69, 70, 72, 74, 75, 77, 79, 81, 82, 84, 86, 87, 89, 91, 93, 94, 96, 98, 99, 101, 103, 105, 106, 108, 110, 111, 113, 115, 117, 118, 120],
      //[1.0, , , , , , , , , , , , , , 30, 31, 32, 33, 34, 36, 37, 39, 41, 42, 44, 46, 48, 50, 52, 53, 55, 57, 59, 60, 62, 63, 65, 66, 67, 69, 70, 72, 73, 75, 76, 78, 79, 81, 82, 84, 85, 87, 88, 90, 91, 93, 94, 96, 97, 99, 100, 102, 103, 105, 106, 108, 109, 111, 112, 114, 115, 116, 118, 119, 120]
      [1, 14.95, 7.95],
      [1, 13.71, 7.96]
    ], [
      ["9", "轻躁狂", "Hypomania"],
      [13, 15, 21, 23, 50, 55, 61, 85, 87, 98, 113, 122, 131, 145, 155, 168, 169, 182, 190, 200, 205, 206, 211, 212, 218, 220, 227, 229, 238, 242, 244, 248, 250, 253, 269],
      [88, 93, 100, 106, 107, 136, 154, 158, 167, 243, 263],
      //[0.2, , , , , , , , , , 30, 31, 33, 35, 36, 38, 39, 41, 43, 45, 47, 49, 51, 53, 56, 59, 62, 65, 59, 72, 75, 78, 81, 82, 88, 91, 94, 98, 101, 104, 107, 110, 114, 117, 120],
      //[0.2, , , , , , , , , , 30, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 56, 59, 62, 65, 68, 71, 74, 76, 79, 82, 85, 88, 91, 94, 97, 100, 103, 106, 109, 112, 115, 118, 120]
      [0.2, 18.84, 4.44],
      [0.2, 17.14, 4.49]
    ], [
      ["0", "社会内向", "Social Introversion"],
      [31, 56, 70, 100, 104, 110, 127, 135, 158, 161, 167, 185, 215, 243, 251, 265, 275, 284, 289, 296, 302, 308, 326, 337, 338, 347, 348, 351, 352, 357, 364, 367, 368, 369],
      [25, 32, 49, 79, 86, 106, 112, 131, 181, 189, 207, 209, 231, 237, 255, 262, 267, 280, 321, 328, 335, 340, 342, 344, 345, 350, 353, 354, 358, 359, 360, 362, 363, 366, 370],
      //[, , , , , , , , , , 30, 31, 33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 89, 90, 91, 92, 93, 94, 96, 97, 98, 99, 100],
      //[, , , , , , , , , 30, 31, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 95]
      [, 27.26, 6.83],
      [, 28.75, 6.99]
    ], [
      [, "D1", "Subjective Depression"],
      [31, 38, 39, 46, 56, 73, 92, 127, 130, 146, 147, 170, 175, 215, 223],
      [2, 9, 43, 49, 75, 95, 109, 118, 140, 148, 178, 188, 189, 223, 260, 267, 330],
      [, 32, 35, 37, 40, 42, 45, 48, 50, 53, 56, 58, 61, 64, 66, 69, 71, 74, 77, 79, 82, 85, 87, 90, 93, 95, 98, 100, 103, 106, 108, 111, 114, 116],
      [, 32, 34, 37, 39, 41, 44, 46, 48, 51, 53, 56, 58, 60, 63, 65, 67, 70, 72, 75, 77, 79, 82, 84, 86, 89, 91, 94, 96, 98, 101, 103, 105, 108]
    ], [
      [, "D2", "Psychomotor Retardation"],
      [38, 46, 170, 233],
      [9, 29, 37, 49, 55, 76, 134, 188, 189, 212],
      [, , 30, 32, 37, 43, 48, 54, 59, 65, 70, 76, 81, 87, 92, 98],
      [, , , 30, 35, 41, 46, 51, 57, 62, 68, 73, 79, 84, 90, 95]
    ], [
      [, "D3", "Physical Malfunctioning"],
      [18, 117, 175, 181],
      [2, 20, 45, 141, 142, 143, 148],
      [, 30, 35, 43, 51, 59, 67, 75, 83, 91, 100, 108, 116],
      [, 30, 34, 41, 48, 56, 63, 70, 78, 85, 93, 100, 107]
    ], [
      [, "D4", "Mental Dullness"],
      [15, 31, 38, 73, 92, 147, 170, 233],
      [9, 10, 43, 75, 109, 165, 188],
      [, 38, 43, 48, 53, 58, 62, 67, 72, 77, 82, 86, 91, 96, 101, 105, 110],
      [, 38, 43, 48, 52, 57, 61, 66, 70, 75, 79, 84, 88, 93, 97, 102, 106]
    ], [
      [, "D5", "Brooding"],
      [38, 56, 92, 127, 130, 146, 170, 215],
      [75, 95],
      [, 40, 45, 51, 57, 62, 68, 74, 79, 85, 91, 96],
      [, 37, 42, 47, 53, 58, 63, 68, 73, 78, 83, 89]
    ], [
      [, "Hy1", "Denial of Social Anxiety"],
      [],
      [129, 161, 167, 185, 243, 265],
      [, 30, 34, 40, 45, 51, 56, 61],
      [, 30, 35, 40, 45, 51, 56, 61]
    ], [
      [, "Hy2", "Need for Affection"],
      [230],
      [26, 58, 76, 81, 98, 110, 124, 151, 213, 241, 263],
      [, , 30, 32, 36, 40, 43, 47, 51, 55, 59, 63, 67, 71],
      [, , , 30, 34, 38, 42, 46, 50, 55, 59, 63, 67, 71]
    ], [
      [, "Hy3", "Lassitude-malaise"],
      [31, 39, 65, 175, 218],
      [2, 3, 9, 10, 45, 95, 125, 141, 148, 152],
      [, 38, 43, 48, 52, 57, 61, 66, 70, 75, 79, 84, 88, 93, 97, 102, 106],
      [, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99]
    ], [
      [, "Hy4", "Somatic Complaints"],
      [11, 18, 40, 44, 101, 172],
      [8, 47, 91, 159, 164, 173, 176, 179, 208, 224, 249],
      [, 38, 43, 48, 52, 57, 62, 67, 72, 77, 82, 86, 91, 96, 101, 106, 111, 115, 120],
      [, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97, 101, 105]
    ], [
      [, "Hy5", "Inhibition of Aggression"],
      [],
      [7, 14, 29, 115, 116, 135, 157],
      [, 30, 33, 40, 48, 55, 63, 71, 78],
      [, 30, 31, 39, 46, 54, 62, 70, 77]
    ], [
      [, "Pd1", "Familial Discord"],
      [21, 54, 195, 202, 288],
      [83, 125, 214, 217],
      [, 38, 45, 51, 58, 65, 71, 78, 84, 91, 98],
      [, 38, 44, 50, 56, 62, 68, 74, 80, 86, 92]
    ], [
      [, "Pd2", "Authority Problems"],
      [35, 105],
      [34, 70, 129, 160, 263, 266],
      [, 30, 35, 42, 48, 55, 61, 68, 74, 81],
      [, 30, 38, 46, 53, 61, 69, 77, 84, 92]
    ], [
      [, "Pd3", "Social Imperturbability"],
      [],
      [70, 129, 158, 167, 185, 243],
      [, 30, 35, 40, 46, 52, 58, 64],
      [, 30, 35, 41, 47, 52, 58, 64]
    ], [
      [, "Pd4", "Social Alienation"],
      [17, 22, 42, 56, 82, 99, 113, 219, 225, 259],
      [12, 129, 157],
      [, 30, 36, 41, 46, 51, 57, 62, 67, 73, 78, 83, 88, 94, 99],
      [, 30, 33, 38, 44, 49, 54, 60, 65, 70, 75, 81, 86, 91, 97]
    ], [
      [, "Pd5", "Self-alienation"],
      [31, 32, 52, 56, 71, 82, 89, 94, 113, 264],
      [9, 95],
      [, 34, 38, 43, 48, 53, 58, 63, 67, 72, 77, 82, 87, 91],
      [, 34, 39, 43, 48, 53, 58, 63, 68, 72, 77, 82, 87, 92]
    ], [
      [, "Pa1", "Persecutory Ideas"],
      [17, 22, 42, 99, 113, 138, 144, 145, 162, 234, 259, 305, 333, 336, 355, 361],
      [314],
      [, 40, 46, 52, 58, 64, 70, 76, 82, 88, 94, 100, 106, 112, 118, 120],
      [, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 120]
    ], [
      [, "Pa2", "Poignancy"],
      [22, 146, 271, 277, 285, 307, 334],
      [100, 244],
      [, 34, 41, 48, 55, 62, 69, 76, 82, 89, 96],
      [, 34, 40, 46, 53, 59, 65, 72, 78, 84, 91]
    ], [
      [, "Pa3", "Naivete"],
      [16],
      [81, 98, 104, 110, 283, 284, 286, 315],
      [, 30, 32, 36, 41, 46, 51, 56, 60, 65, 70],
      [, 30, 31, 36, 41, 45, 50, 55, 60, 65, 69]
    ], [
      [, "Sc1", "Social Alienation"],
      [17, 21, 22, 42, 46, 138, 145, 190, 221, 256, 277, 281, 291, 292, 320, 333],
      [90, 276, 278, 280, 343],
      [, 39, 43, 47, 51, 55, 59, 64, 68, 72, 76, 80, 84, 88, 92, 97, 101, 105, 109, 113, 117, 120],
      [, 38, 42, 46, 50, 53, 57, 61, 65, 69, 73, 77, 81, 84, 88, 92, 96, 100, 104, 108, 111, 115, 119]
    ], [
      [, "Sc2", "Emotional Alienation"],
      [65, 92, 234, 273, 303, 323, 329, 332],
      [9, 210, 290],
      [, 40, 50, 59, 69, 78, 88, 98, 107, 117, 120],
      [, 40, 49, 58, 67, 76, 86, 95, 104, 113, 120]
    ], [
      [, "Sc3", "Lack of Ego Mastery, Cognitive"],
      [31, 32, 147, 170, 180, 299, 311, 316, 325],
      [165],
      [, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 103],
      [, 43, 49, 55, 61, 67, 74, 80, 86, 92, 98, 104]
    ], [
      [, "Sc4", "Lack of Ego Mastery, Conative"],
      [31, 38, 48, 65, 92, 233, 234, 273, 299, 303, 325],
      [9, 210, 290],
      [, 39, 44, 49, 55, 60, 65, 71, 76, 82, 87, 92, 98, 103, 109, 114],
      [, 39, 44, 49, 54, 59, 65, 40, 75, 80, 85, 90, 95, 100, 106, 111]
    ], [
      [, "Sc5", "Lack of Ego Mastery, Defective Inhibition"],
      [23, 85, 168, 182, 218, 242, 274, 320, 322, 329, 355],
      [],
      [, 40, 47, 54, 61, 68, 75, 82, 89, 96, 103, 110, 117],
      [, 40, 46, 53, 59, 65, 72, 78, 85, 91, 97, 104, 110]
    ], [
      [, "Sc6", "Bizarre Sensory Experiences"],
      [23, 32, 44, 168, 182, 229, 247, 252, 296, 298, 307, 311, 319, 355],
      [91, 106, 177, 179, 255, 295],
      [, 41, 46, 51, 55, 60, 65, 70, 75, 80, 85, 90, 95, 99, 104, 109, 114, 119, 120],
      [, 41, 45, 50, 54, 59, 63, 68, 72, 77, 81, 86, 91, 95, 100, 104, 109, 113, 118, 120]
    ], [
      [, "Ma1", "Amorality"],
      [131, 227, 248, 250, 269],
      [263],
      [, 35, 42, 50, 58, 66, 74, 81],
      [, 37, 45, 54, 62, 70, 79, 87]
    ], [
      [, "Ma2", "Psychomotor Acceleration"],
      [15, 85, 87, 122, 169, 206, 218, 242, 244],
      [100, 106],
      [, , 30, 34, 39, 44, 49, 53, 58, 63, 68, 73, 78],
      [, , 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]
    ], [
      [, "Ma3", "Imperturbability"],
      [155, 200, 220],
      [93, 136, 158, 167, 243],
      [, 30, 35, 41, 47, 53, 59, 65, 71, 77],
      [, 30, 37, 43, 50, 56, 62, 69, 75, 82]
    ], [
      [, "Ma4", "Ego Inflation"],
      [13, 50, 55, 61, 98, 145, 190, 211, 212],
      [],
      [, 30, 37, 43, 50, 56, 63, 69, 76, 82, 89],
      [, 31, 37, 43, 49, 56, 62, 68, 74, 80, 86]
    ], [
      [, "Si1", "Shyness/Self-Consciousness"],
      [158, 161, 167, 185, 243, 265, 275, 289],
      [49, 262, 280, 321, 342, 360],
      [, 36, 39, 42, 45, 48, 51, 53, 56, 59, 62, 65, 68, 71, 74, 77],
      [, 36, 38, 41, 44, 46, 49, 52, 55, 57, 60, 63, 65, 68, 71, 74]
    ], [
      [, "Si2", "Social Avoidance"],
      [337, 367],
      [86, 340, 353, 359, 363, 370],
      [, 37, 41, 45, 49, 54, 58, 62, 67, 71],
      [, 37, 42, 47, 51, 56, 60, 65, 69, 74]
    ], [
      [, "Si3", "Self/Other Alienation"],
      [31, 56, 104, 110, 135, 284, 302, 308, 326, 328, 338, 347, 348, 358, 364, 368, 369],
      [],
      [, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86],
      [, 35, 38, 41, 44, 47, 49, 52, 55, 58, 61, 63, 66, 69, 72, 74, 77, 80, 83]
    ], [
      [, "ANX", "Anxiety"],
      [15, 30, 31, 39, 170, 196, 273, 290, 299, 301, 305, 339, 408, 415, 463, 469, 509, 556],
      [140, 208, 223, 405, 496],
      [, 35, 39, 42, 45, 47, 50, 52, 53, 55, 57, 60, 62, 65, 67, 70, 72, 75, 77, 80, 82, 85, 87, 90, 92],
      [, 34, 37, 40, 43, 45, 47, 49, 51, 53, 55, 56, 59, 61, 64, 66, 69, 71, 74, 76, 79, 81, 84, 86, 89]
    ], [
      [, "FRS", "Fears"],
      [154, 317, 322, 329, 334, 392, 395, 397, 435, 438, 441, 447, 458, 468, 471, 555],
      [115, 163, 186, 385, 401, 453, 462],
      [, 35, 41, 45, 48, 51, 54, 57, 60, 64, 67, 70, 74, 77, 80, 84, 87, 90, 93, 97, 100, 103, 107, 110, 113],
      [, 31, 35, 38, 41, 43, 46, 48, 51, 53, 56, 59, 62, 65, 68, 72, 75, 78, 81, 85, 88, 91, 94, 98, 101]
    ], [
      [, "OBS", "Obsessivness"],
      [55, 87, 135, 196, 309, 313, 327, 328, 394, 442, 482, 491, 497, 509, 547, 553],
      [],
      [, 33, 37, 41, 44, 47, 50, 53, 56, 59, 63, 66, 70, 73, 77, 80, 84, 87],
      [, 32, 37, 41, 44, 46, 48, 50, 53, 56, 59, 63, 67, 71, 75, 79, 83, 87]
    ], [
      [, "DEP", "Depression"],
      [38, 52, 56, 65, 71, 82, 92, 130, 146, 215, 234, 246, 277, 303, 306, 331, 377, 399, 400, 411, 454, 506, 512, 516, 520, 539, 546, 554],
      [3, 9, 75, 95, 388],
      [, 36, 41, 45, 48, 51, 53, 55, 56, 58, 59, 61, 63, 65, 66, 68, 70, 71, 73, 75, 77, 78, 80, 82, 83, 85, 87, 88, 90, 92, 94, 95, 97, 99, 100],
      [, 34, 39, 42, 45, 48, 50, 52, 54, 55, 57, 58, 60, 62, 63, 65, 67, 68, 70, 72, 73, 75, 77, 78, 80, 82, 83, 85, 87, 88, 90, 92, 93, 95, 97]
    ], [
      [, "HEA", "Health Concerns"],
      [11, 18, 28, 36, 40, 44, 53, 59, 97, 101, 111, 149, 175, 247],
      [20, 33, 45, 47, 57, 91, 117, 118, 141, 142, 159, 164, 176, 179, 181, 194, 204, 224, 249, 255, 295, 404],
      [, 33, 37, 41, 44, 48, 51, 53, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 106, 108, 110, 112],
      [, 32, 36, 40, 43, 46, 49, 51, 53, 55, 57, 59, 61, 63, 64, 66, 68, 70, 72, 74, 76, 77, 79, 81, 83, 85, 87, 89, 90, 92, 94, 96, 98, 100, 101, 103, 105, 107]
    ], [
      [, "BIZ", "Bizarre Mentation"],
      [24, 32, 60, 96, 138, 162, 198, 228, 259, 298, 311, 316, 319, 333, 336, 355, 361, 466, 490, 508, 543, 551],
      [427],
      [, 39, 46, 51, 54, 57, 60, 63, 67, 70, 74, 77, 81, 84, 88, 91, 94, 98, 101, 105, 108, 112, 115, 119, 120],
      [, 39, 47, 52, 56, 58, 61, 64, 67, 70, 73, 76, 79, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 110, 113]
    ], [
      [, "ANG", "Anger"],
      [29, 37, 116, 134, 302, 389, 410, 414, 430, 461, 486, 513, 540, 542, 548],
      [564],
      [, 32, 36, 40, 43, 46, 48, 50, 53, 56, 59, 63, 67, 70, 74, 78, 82, 86],
      [, 31, 36, 39, 42, 45, 47, 50, 53, 56, 60, 64, 68, 72, 76, 80, 84, 88]
    ], [
      [, "CYN", "Cynicism"],
      [50, 58, 76, 81, 104, 110, 124, 225, 241, 254, 283, 284, 286, 315, 346, 352, 358, 374, 399, 403, 445, 470, 538],
      [],
      [, 32, 35, 38, 40, 41, 43, 44, 46, 47, 48, 49, 51, 52, 54, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83],
      [, 32, 35, 38, 40, 42, 44, 46, 47, 48, 50, 51, 53, 54, 56, 58, 61, 64, 67, 69, 72, 75, 77, 80, 83]
    ], [
      [, "ASP", "Antisocial Practices"],
      [26, 35, 66, 81, 84, 104, 105, 110, 123, 227, 240, 248, 250, 254, 269, 283, 284, 374, 412, 418, 419],
      [266],
      [, 30, 34, 37, 40, 42, 44, 46, 47, 49, 51, 53, 55, 58, 62, 65, 69, 72, 76, 79, 83, 87, 90, 94],
      [, 33, 36, 39, 42, 45, 47, 49, 42, 54, 56, 59, 63, 66, 69, 72, 75, 79, 82, 85, 88, 91, 94, 98]
    ], [
      [, "TPA", "Type A"],
      [27, 136, 151, 212, 302, 358, 414, 419, 420, 423, 430, 437, 507, 510, 523, 531, 535, 541, 545],
      [],
      [, 30, 32, 36, 38, 41, 43, 44, 46, 48, 50, 53, 56, 60, 64, 68, 72, 77, 81, 85, 89],
      [, 30, 33, 36, 38, 41, 43, 45, 48, 50, 53, 56, 60, 64, 69, 73, 77, 81, 85, 90, 94]
    ], [
      [, "LSE", "Low Self-esteem"],
      [70, 73, 130, 235, 326, 369, 376, 380, 411, 421, 450, 457, 475, 476, 483, 485, 503, 504, 519, 526, 562],
      [61, 78, 109],
      [, 35, 41, 45, 48, 51, 53, 55, 57, 59, 62, 64, 67, 70, 72, 75, 77, 80, 83, 85, 88, 91, 93, 96, 98, 101],
      [, 35, 40, 44, 47, 49, 51, 52, 54, 55, 57, 60, 62, 65, 68, 70, 73, 76, 78, 81, 84, 86, 89, 92, 94, 97]
    ], [
      [, "SOD", "Social Discomfort"],
      [46, 158, 167, 185, 265, 275, 281, 337, 349, 367, 479, 480, 515],
      [49, 86, 262, 280, 321, 340, 353, 359, 360, 363, 370],
      [, 32, 35, 39, 41, 43, 45, 47, 49, 50, 52, 54, 55, 58, 60, 63, 65, 68, 71, 73, 76, 78, 81, 84, 86, 89],
      [, 32, 35, 39, 41, 44, 46, 48, 49, 51, 52, 54, 56, 58, 60, 63, 65, 68, 70, 72, 75, 77, 80, 82, 84, 87]
    ], [
      [, "FAM", "Family Problems"],
      [21, 54, 145, 190, 195, 205, 256, 292, 300, 323, 378, 379, 382, 413, 449, 478, 543, 550, 563, 567],
      [83, 125, 217, 383, 455],
      [, 33, 37, 41, 44, 47, 50, 52, 55, 57, 60, 63, 66, 68, 71, 74, 77, 80, 82, 85, 88, 91, 94, 97, 99, 102, 105],
      [, 32, 36, 39, 42, 45, 47, 50, 52, 55, 57, 60, 62, 65, 68, 70, 73, 75, 78, 81, 83, 86, 89, 91, 94, 96, 99]
    ], [
      [, "WRK", "Work Interference"],
      [15, 17, 31, 54, 73, 98, 135, 233, 243, 299, 302, 339, 364, 368, 394, 409, 428, 445, 464, 491, 505, 509, 517, 525, 545, 554, 559, 566],
      [10, 108, 318, 521, 561],
      [, 33, 36, 39, 41, 44, 46, 48, 50, 52, 54, 56, 57, 59, 61, 63, 65, 67, 68, 70, 72, 74, 76, 78, 79, 81, 83, 85, 87, 89, 90, 92, 94, 96, 98],
      [, 31, 34, 37, 40, 43, 45, 46, 48, 50, 51, 52, 54, 55, 57, 59, 61, 63, 65, 67, 69, 70, 73, 76, 78, 80, 82, 84, 86, 88, 90, 92, 95, 97, 99]
    ], [
      [, "TRT", "Negative Treatment Indicators"],
      [22, 92, 274, 306, 364, 368, 373, 375, 376, 377, 391, 399, 482, 488, 491, 495, 497, 499, 500, 504, 528, 539, 554],
      [493, 494, 501],
      [, 35, 39, 43, 47, 49, 52, 54, 56, 59, 61, 64, 66, 69, 71, 74, 76, 79, 81, 84, 86, 89, 91, 94, 96, 99, 101, 104],
      [, 35, 39, 43, 46, 49, 51, 53, 55, 57, 59, 61, 64, 67, 69, 72, 74, 77, 79, 82, 84, 87, 89, 92, 95, 97, 100, 102]
    ], [
      [, "A", "Anxiety"],
      [31, 38, 56, 65, 82, 127, 135, 215, 233, 243, 251, 273, 277, 289, 301, 309, 310, 311, 325, 328, 338, 339, 341, 347, 390, 391, 394, 400, 408, 411, 415, 421, 428, 442, 448, 451, 464, 469],
      [388],
      [, 36, 37, 39, 40, 42, 43, 44, 46, 47, 49, 50, 51, 53, 54, 56, 57, 58, 60, 61, 63, 64, 65, 67, 68, 70, 71, 73, 74, 75, 77, 78, 80, 81, 82, 84, 85, 87, 88, 89, 91],
      [, 35, 37, 38, 39, 40, 42, 43, 44, 45, 47, 48, 49, 50, 52, 53, 54, 56, 57, 58, 59, 61, 62, 63, 64, 66, 67, 68, 69, 71, 72, 73, 74, 76, 77, 76, 80, 81, 82, 83, 85]
    ], [
      [, "R", "Repression"],
      [],
      [1, 7, 10, 14, 37, 45, 69, 112, 118, 120, 128, 134, 142, 168, 178, 189, 197, 199, 248, 255, 256, 297, 330, 346, 350, 353, 354, 359, 363, 365, 422, 423, 430, 432, 449, 456, 465],
      [, , , , , , , 30, 32, 34, 36, 39, 41, 43, 45, 47, 50, 52, 54, 56, 58, 61, 63, 65, 67, 69, 72, 74, 76, 81, 83, 85, 87, 89, 92, 94, 96, 98],
      [, , , , , , , , , 30, 31, 33, 36, 39, 41, 44, 46, 49, 52, 54, 57, 60, 62, 65, 67, 70, 73, 75, 78, 81, 83, 86, 88, 91, 94, 96, 99, 102, 104]
    ], [
      [, "Es", "Ego Strength"],
      [2, 33, 45, 98, 141, 159, 169, 177, 179, 189, 199, 209, 213, 230, 245, 325, 385, 406, 413, 425],
      [23, 31, 32, 36, 39, 53, 60, 70, 82, 87, 119, 128, 175, 196, 215, 221, 225, 229, 236, 246, 307, 310, 316, 328, 391, 394, 441, 447, 458, 464, 469, 471],
      [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , 30, 31, 34, 36, 38, 40, 42, 45, 47, 49, 51, 54, 56, 58, 60, 63, 65, 67, 69, 72, 74, 76, 78, 81, 83],
      [, , , , , , , , , , , , , , , , , , , , , , , , , 30, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86]
    ], [
      [, "MAC-R", "MacAndrew Alcoholism Scale-Revised"],
      [7, 24, 36, 49, 52, 69, 72, 82, 84, 103, 105, 113, 115, 128, 168, 172, 202, 214, 224, 229, 238, 257, 280, 342, 344, 407, 412, 414, 422, 434, 439, 445, 456, 473, 502, 506, 549],
      [73, 107, 117, 137, 160, 166, 251, 266, 287, 299, 325, 387],
      [, , , , , , , , , , , , , , 30, 32, 34, 37, 39, 41, 44, 46, 48, 51, 53, 55, 58, 60, 62, 64, 67, 69, 72, 74, 76, 78, 81, 83, 85, 88, 90, 92, 95, 97, 99, 102, 104, 106, 109, 111, 113],
      [, , , , , , , , , , , , 30, 31, 34, 37, 40, 42, 45, 48, 50, 53, 56, 59, 61, 64, 67, 69, 72, 75, 78, 80, 83, 86, 88, 91, 94, 96, 99, 102, 105, 107, 110, 113, 115, 116, 120]
    ], [
      [, "AAS", "Addiction Acknowledgement"],
      [172, 264, 288, 362, 387, 487, 489, 511, 527, 544],
      [266, 429, 501],
      [, 36, 41, 46, 51, 56, 60, 65, 70, 75, 80, 85, 90, 95, 100],
      [, 39, 44, 50, 56, 61, 67, 7, 78, 84, 90, 95, 101, 107, 113]
    ], [
      [, "APS", "Addiction Potential"],
      [7, 29, 41, 89, 103, 113, 120, 168, 183, 189, 196, 217, 242, 260, 267, 341, 342, 344, 377, 422, 502, 523, 540],
      [4, 43, 76, 104, 137, 157, 220, 239, 306, 312, 349, 440, 495, 496, 500, 504],
      [, , , , , , , , , , , , , , , , , 30, 33, 35, 38, 41, 44, 46, 49, 52, 54, 57, 60, 63, 65, 68, 71, 73, 76, 79, 82, 84, 87, 90, 92],
      [, , , , , , , , , , , , , , , , 30, 31, 33, 36, 39, 42, 44, 47, 50, 52, 55, 58, 60, 63, 66, 69, 71, 74, 77, 79, 82, 85, 87, 90, 93]
    ], [
      [, "MDS", "Marital Distress"],
      [21, 22, 135, 195, 219, 382, 484, 563],
      [12, 83, 95, 125, 493, 494],
      [, 37, 42, 46, 51, 56, 60, 65, 69, 74, 79, 83, 88, 92, 97, 102],
      [, 38, 42, 46, 50, 55, 59, 63, 68, 72, 76, 80, 85, 89, 93, 98]
    ], [
      [, "Ho", "Hostility"],
      [19, 27, 46, 50, 58, 76, 81, 99, 104, 110, 124, 136, 145, 171, 205, 225, 227, 241, 248, 251, 254, 259, 265, 286, 306, 315, 338, 346, 347, 352, 357, 358, 386, 393, 398, 406, 414, 419, 423, 425, 436, 443, 445, 452, 457, 466, 470],
      [217, 230, 372],
      [, , 30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 62, 63, 64, 65, 66, 67, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 81, 82, 83, 84, 85, 87, 88],
      [, , 30, 31, 32, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 46, 47, 49, 50, 51, 52, 54, 55, 56, 58, 59, 60, 61, 63, 64, 65, 66, 68, 69, 70, 71, 73, 74, 75, 76, 78, 79, 80, 82, 83, 84, 85, 87, 88, 89, 90, 92]
    ], [
      [, "O-H", "Overcontrolled Hostility"],
      [67, 79, 207, 286, 305, 398, 471],
      [1, 15, 29, 69, 77, 89, 98, 116, 117, 129, 153, 169, 171, 293, 344, 390, 400, 420, 433, 440, 460],
      [, , , , , , , 30, 31, 35, 38, 41, 45, 48, 52, 55, 59, 62, 65, 69, 72, 76, 79, 82, 86, 89, 93, 96, 99, 103],
      [, , , , , , , , , 30, 33, 37, 41, 44, 48, 52, 55, 59, 63, 66, 70, 74, 77, 81, 85, 88, 92, 96, 99, 103]
    ], [
      [, "Do", "Dominance"],
      [55, 207, 232, 245, 386, 416],
      [31, 52, 70, 73, 82, 172, 201, 202, 220, 227, 243, 244, 275, 309, 325, 399, 412, 470, 473],
      [, , , , , , , , , , , 30, 31, 34, 38, 41, 45, 48, 51, 55, 58, 61, 65, 68, 72, 75, 78],
      [, , , , , , , , , , , 30, 32, 35, 39, 42, 46, 49, 53, 56, 59, 63, 66, 70, 73, 77, 80]
    ], [
      [, "Re", "Social Responsibility"],
      [100, 160, 199, 266, 440, 467],
      [7, 27, 29, 32, 84, 103, 105, 145, 164, 169, 201, 202, 235, 275, 358, 412, 417, 418, 430, 431, 432, 456, 468, 470],
      [, , , , , , , , , , , , , 30, 32, 34, 37, 39, 42, 45, 47, 50, 52, 55, 57, 60, 63, 65, 68, 70, 73, 76],
      [, , , , , , , , , , , , , , , 30, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77]
    ], [
      [, "Mt", "College Maladjustment"],
      [15, 16, 28, 31, 38, 71, 73, 81, 82, 110, 130, 215, 218, 233, 269, 273, 299, 302, 325, 331, 339, 357, 408, 411, 449, 464, 469, 472],
      [2, 3, 9, 10, 20, 43, 95, 131, 140, 148, 152, 223, 405],
      [, 32, 34, 36, 37, 39, 40, 42, 43, 45, 46, 48, 50, 51, 53, 54, 56, 57, 59, 60, 62, 64, 65, 67, 68, 70, 71, 73, 74, 76, 77, 79, 81, 82, 84, 85, 87, 88, 30, 31, 93, 95, 96],
      [, 32, 34, 35, 37, 38, 40, 41, 42, 44, 45, 47, 48, 50, 51, 52, 54, 55, 57, 58, 60, 61, 62, 64, 65, 67, 68, 70, 71, 72, 74, 75, 77, 78, 80, 81, 82, 84, 85, 87, 88, 90, 91]
    ], [
      [, "GM", "Masculine Gender Role"],
      [8, 20, 143, 152, 159, 163, 176, 199, 214, 237, 321, 331, 350, 385, 388, 401, 440, 462, 467, 474],
      [4, 23, 44, 64, 70, 73, 74, 80, 100, 137, 146, 187, 289, 351, 364, 392, 395, 435, 438, 441, 469, 471, 498, 509, 519, 532, 536],
      [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , 30, 31, 34, 36, 38, 40, 42, 45, 47, 49, 51, 53, 56, 58, 60, 62, 64, 66, 69, 71],
      [, , , , , , , , , , , , , , , , , 30, 32, 33, 35, 36, 38, 40, 41, 43, 44, 46, 47, 49, 50, 52, 53, 55, 56, 58, 59, 61, 63, 64, 66, 67, 69, 70, 72, 73, 75, 76, 78]
    ], [
      [, "GF", "Feminine Gender Role"],
      [62, 67, 119, 121, 128, 263, 266, 353, 384, 426, 449, 456, 475, 552],
      [1, 27, 63, 68, 79, 84, 105, 123, 133, 155, 197, 201, 203, 220, 231, 238, 239, 250, 257, 264, 272, 287, 406, 417, 465, 477, 487, 510, 511, 537, 548, 550],
      [, , , , , , , , , , , , , , , , , , , 30, 32, 34, 37, 39, 41, 43, 45, 47, 49, 51, 54, 56, 58, 60, 62, 64, 66, 68, 71, 73, 75, 77, 79, 81, 83, 85, 88, 90],
      [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 30, 33, 35, 38, 40, 43, 46, 48, 51, 53, 56, 59, 61, 64, 66, 69, 71]
    ], [
      [, "PK", "Post-traumatic Stress Disorder"],
      [16, 17, 22, 23, 30, 31, 32, 37, 39, 48, 52, 56, 59, 65, 82, 85, 92, 94, 101, 135, 150, 168, 170, 196, 221, 274, 277, 302, 303, 305, 316, 319, 327, 328, 339, 347, 349, 367],
      [2, 3, 9, 49, 75, 95, 125, 140],
      [, 37, 38, 40, 42, 43, 45, 47, 48, 50, 52, 53, 55, 57, 58, 60, 62, 63, 65, 67, 68, 70, 72, 73, 75, 77, 78, 80, 82, 83, 85, 87, 88, 90, 92, 93, 95, 97, 98, 100, 102, 103, 105, 107, 108, 110, 112, 113],
      [, 37, 39, 40, 42, 43, 45, 46, 48, 49, 51, 52, 54, 55, 57, 58, 60, 61, 63, 64, 66, 67, 69, 71, 72, 74, 75, 77, 78, 80, 81, 83, 84, 86, 87389, 90, 92, 93, 95, 96, 98, 99, 101, 103, 104, 106, 107]
    ], [
      [, "PS", "Post-traumatic Stress Disorder"],
      [17, 21, 22, 31, 32, 37, 38, 44, 48, 56, 59, 65, 85, 94, 116, 135, 145, 150, 168, 170, 180, 218, 221, 273, 274, 277, 299, 301, 304, 305, 311, 316, 319, 325, 328, 377, 386, 400, 463, 464, 469, 471, 475, 479, 515, 516, 565],
      [3, 9, 45, 75, 95, 141, 165, 208, 223, 280, 372, 405, 564],
      [, 37, 38, 39, 41, 42, 43, 44, 46, 47, 48, 49, 51, 52, 53, 54, 56, 57, 58, 59, 61, 62, 63, 64, 66, 67, 68, 69, 71, 72, 73, 74, 76, 77, 78, 79, 81, 82, 83, 84, 86, 87, 88, 89, 91, 92, 93, 94, 96, 97, 98, 99, 101, 102, 103, 104, 106, 107, 108, 110, 111, 112],
      [, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 92, 93, 94, 95, 97, 98, 99, 100, 102, 103, 104]
    ], [
      [, "D-O", "Depression, Obvious"],
      [15, 18, 31, 38, 39, 46, 56, 73, 92, 127, 130, 146, 147, 170, 175, 215, 233],
      [2, 9, 10, 20, 33, 43, 45, 49, 75, 95, 109, 118, 140, 141, 142, 165, 188, 223, 245, 248, 260, 330],
      [, 32, 34, 37, 39, 41, 44, 46, 48, 51, 53, 55, 58, 60, 62, 65, 67, 69, 72, 74, 76, 79, 81, 83, 86, 88, 90, 93, 95, 97, 100, 102, 104, 107, 109, 111, 114, 116, 118, 120],
      [, 32, 34, 36, 38, 40, 42, 44, 46, 48, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112]
    ], [
      [, "D-S", "Depression, Subtle"],
      [5, 117, 282],
      [29, 37, 55, 68, 76, 134, 143, 148, 178, 189, 212, 221, 226, 238, 267],
      [, , , , , , , 32, 36, 40, 44, 48, 52, 55, 59, 63, 67, 71, 75, 78],
      [, , , , , , , , 32, 36, 40, 44, 48, 53, 57, 61, 65, 69, 73, 77]
    ], [
      [, "Hy-O", "Hysteria, Obvious"],
      [11, 18, 31, 39, 40, 44, 65, 101, 166, 172, 175, 218],
      [2, 3, 8, 9, 10, 45, 47, 91, 95, 115, 125, 141, 152, 159, 164, 173, 179, 208, 224, 249],
      [, 37, 40, 42, 45, 48, 51, 53, 56, 59, 62, 64, 67, 70, 73, 76, 78, 81, 84, 87, 89, 92, 95, 98, 100, 103, 106, 109, 111, 114, 117, 120],
      [, 37, 39, 41, 44, 46, 48, 51, 53, 56, 58, 60, 63, 65, 67, 70, 72, 75, 77, 79, 82, 84, 86, 89, 91, 93, 96, 98, 101, 103, 105, 108, 110, 112]
    ], [
      [, "Hy-S", "Hysteria, Subtle"],
      [230],
      [7, 14, 26, 29, 58, 76, 81, 98, 110, 116, 124, 129, 135, 148, 151, 157, 161, 167, 176, 185, 193, 213, 241, 243, 253, 263, 265],
      [, , , , , , , , , 31, 34, 36, 38, 41, 43, 45, 47, 50, 52, 54, 57, 59, 61, 64, 66, 68, 71, 73, 75, 78],
      [, , , , , , , , , , 32, 34, 37, 39, 42, 44, 47, 49, 51, 54, 56, 59, 61, 64, 66, 69, 71, 73, 76, 78]
    ], [
      [, "Pd-O", "Psychopathic Deviate, Obvious"],
      [17, 22, 31, 32, 35, 42, 52, 54, 56, 71, 82, 94, 99, 105, 195, 202, 225, 259, 264, 288],
      [9, 12, 34, 79, 95, 125, 261, 266],
      [, 34, 36, 39, 42, 44, 47, 50, 52, 55, 58, 60, 63, 66, 68, 71, 74, 76, 79, 82, 84, 87, 90, 92, 95, 98, 100, 103, 106, 108],
      [, 35, 38, 41, 44, 46, 49, 52, 54, 57, 60, 62, 65, 68, 70, 73, 76, 79, 81, 84, 87, 89, 92, 95, 97, 100, 103, 105, 108, 111]
    ], [
      [, "Pd-S", "Psychopathic Deviate, Subtle"],
      [21, 89, 113, 219],
      [70, 83, 122, 129, 143, 157, 158, 160, 167, 171, 185, 209, 214, 217, 226, 243, 263, 267],
      [, , , , , , , 33, 37, 41, 45, 48, 52, 56, 60, 64, 68, 72, 76, 79, 83, 87, 91, 95],
      [, , , , , , , 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 91, 95]
    ], [
      [, "Pa-O", "Paranoia, Obvious"],
      [17, 22, 23, 24, 42, 99, 138, 144, 146, 162, 234, 259, 277, 285, 305, 307, 333, 336, 355, 361],
      [255, 266, 314],
      [, 38, 43, 47, 52, 57, 61, 66, 70, 75, 80, 84, 89, 93, 98, 102, 107, 112, 116],
      [, 38, 42, 47, 51, 55, 60, 64, 68, 72, 77, 81, 85, 90, 94, 98, 103, 107, 111, 115, 120]
    ], [
      [, "Pa-S", "Paranoia, Subtle"],
      [16, 113, 145, 271, 334],
      [81, 95, 98, 100, 104, 110, 244, 283, 284, 286, 297, 315],
      [, , , , 31, 35, 39, 43, 48, 52, 56, 60, 65, 69, 73, 77, 82, 86, 90],
      [, , , , 31, 35, 39, 44, 48, 52, 57, 61, 65, 69, 74, 78, 82, 87, 91]
    ], [
      [, "Ma-O", "Hypomania, Obvoius"],
      [15, 23, 50, 61, 85, 87, 145, 155, 168, 182, 190, 205, 218, 227, 229, 238, 242, 250, 253, 269],
      [100, 106, 107],
      [, , 30, 34, 37, 40, 44, 47, 51, 54, 57, 61, 64, 67, 71, 74, 78, 81, 84, 88, 91, 95, 98, 101, 105],
      [, , 32, 35, 39, 42, 45, 49, 52, 55, 59, 62, 66, 69, 72, 76, 79, 82, 86, 89, 92, 96, 99, 103, 106]
    ], [
      [, "Ma-S", "Hypomania, Subtle"],
      [13, 21, 55, 98, 113, 122, 131, 169, 200, 206, 211, 212, 220, 244, 248],
      [88, 93, 136, 154, 158, 167, 243, 263],
      [, , , , , , 31, 35, 39, 42, 46, 50, 54, 57, 61, 65, 69, 72, 76, 80, 83, 87, 91, 95, 98],
      [, , , , , , 32, 36, 40, 44, 47, 51, 55, 59, 63, 67, 70, 74, 78, 82, 86, 90, 93, 97, 101]
    ], [
      ["RCd", "dem", "Demoralization"],
      [31, 56, 64, 73, 82, 94, 130, 180, 215, 233, 273, 277, 339, 400, 411, 464, 469, 482, 485, 491, 505, 554],
      [95, 388],
      [, 37, 42, 47, 50, 52, 54, 56, 57, 58, 60, 62, 64, 66, 68, 70, 71, 73, 75, 77, 79, 81, 83, 85, 86, 88],
      [, 36, 41, 45, 48, 50, 52, 53, 54, 55, 56, 58, 60, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85]
    ], [
      ["RC1", "som", "Somatic Complaints"],
      [11, 18, 28, 40, 97, 101, 111, 149, 172, 247, 536],
      [2, 8, 20, 47, 57, 91, 106, 141, 164, 176, 177, 179, 208, 224, 255, 295],
      [, 37, 43, 48, 52, 55, 58, 60, 63, 65, 68, 71, 73, 76, 79, 81, 84, 86, 89, 92, 94, 97, 100],
      [, 36, 41, 45, 49, 52, 55, 57, 59, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 85, 87, 89, 91, 93, 95, 97, 99, 100]
    ], [
      ["RC2", "lpe", "Low Positive Emotions"],
      [],
      [9, 10, 49, 61, 75, 109, 148, 188, 206, 239, 244, 280, 318, 330, 494, 521, 552],
      [, 34, 39, 43, 46, 50, 53, 57, 60, 64, 68, 72, 75, 79, 83, 86, 90, 94, 97],
      [, 33, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 79, 83, 87, 91, 95, 99, 100]
    ], [
      ["RC3", "cyn", "Cynicism"],
      [58, 76, 81, 104, 110, 241, 254, 284, 286, 352, 436, 445, 538, 563, 567],
      [],
      [, 34, 38, 41, 43, 45, 47, 48, 50, 53, 56, 60, 64, 69, 74, 78, 83],
      [, 33, 38, 41, 44, 46, 48, 50, 52, 55, 58, 62, 66, 70, 74, 78, 82]
    ], [
      ["RC4", "asb", "Antisocial Behavior"],
      [21, 35, 84, 105, 202, 240, 264, 362, 379, 412, 431, 487, 489, 511, 540, 548],
      [34, 83, 160, 266, 429, 455],
      [, 33, 37, 41, 44, 47, 49, 52, 54, 57, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92, 95, 98],
      [, 35, 40, 44, 48, 52, 55, 58, 60, 63, 66, 69, 71, 74, 77, 80, 83, 85, 88, 91, 94, 96, 99, 100]
    ], [
      ["RC6", "per", "Ideas of Persecution"],
      [24, 42, 99, 138, 144, 145, 162, 216, 228, 259, 333, 336, 355, 361, 484, 490],
      [314],
      [, 41, 56, 62, 65, 67, 70, 73, 76, 79, 82, 85, 88, 90, 93, 96, 99, 100],
      [, 43, 58, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 99, 100]
    ], [
      ["RC7", "dne", "Dysfunctional Negative Emotions"],
      [37, 127, 161, 251, 274, 289, 301, 302, 310, 320, 327, 328, 329, 390, 421, 424, 430, 442, 451, 463, 471, 507, 513, 519],
      [],
      [, 34, 38, 42, 45, 47, 49, 52, 54, 56, 58, 60, 63, 65, 67, 70, 72, 75, 77, 80, 82, 85, 87, 90, 92, 95],
      [, 32, 36, 40, 42, 45, 47, 49, 50, 52, 54, 55, 58, 60, 63, 65, 68, 71, 74, 76, 79, 82, 84, 87, 90, 92]
    ], [
      ["RC8", "abx", "Aberrant Experiences"],
      [32, 60, 72, 96, 168, 182, 198, 229, 296, 298, 307, 311, 316, 319, 466, 508, 551],
      [427],
      [, 39, 47, 52, 56, 59, 63, 66, 70, 73, 76, 80, 83, 87, 90, 93, 97, 100],
      [, 39, 47, 52, 56, 60, 63, 66, 69, 73, 76, 79, 82, 85, 89, 92, 95, 98, 100]
    ], [
      ["RC9", "hpm", "Hypomanic Activation"],
      [27, 50, 55, 86, 122, 134, 153, 169, 189, 209, 212, 213, 226, 242, 250, 267, 304, 324, 345, 346, 366, 389, 393, 406, 414, 423, 542],
      [100],
      [, 30, 30, 31, 33, 36, 38, 39, 41, 42, 44, 45, 47, 48, 50, 51, 53, 56, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91],
      [, 30, 30, 32, 34, 37, 38, 40, 42, 44, 46, 48, 49, 51, 53, 56, 58, 61, 64, 66, 69, 72, 74, 77, 80, 83, 85, 88, 91, 94]
    ], [
      [, "AGGR", "Aggressiveness"],
      [27, 50, 85, 134, 239, 323, 324, 346, 350, 358, 414, 423, 452, 521, 548],
      [70, 446, 503],
      [, , 30, 33, 36, 38, 40, 43, 45, 48, 51, 54, 59, 64, 69, 74, 79, 84, 89, 94],
      [, 30, 32, 35, 38, 41, 44, 46, 49, 53, 57, 61, 66, 71, 76, 81, 86, 91, 96, 101]
    ], [
      [, "PSYC", "Psychoticism"],
      [24, 42, 48, 72, 96, 99, 138, 144, 198, 241, 259, 315, 319, 336, 355, 361, 374, 448, 466, 490, 508, 549, 551],
      [184, 427],
      [, 35, 40, 45, 49, 52, 56, 59, 62, 65, 68, 72, 75, 78, 81, 84, 88, 91, 94, 97, 101, 104, 107, 110, 114, 117, 120],
      [, 35, 41, 46, 50, 53, 56, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 103, 106, 109, 112, 115, 118]
    ], [
      [, "DISC", "Disconstraint"],
      [35, 84, 88, 103, 105, 123, 209, 222, 250, 284, 344, 362, 385, 412, 417, 418, 431, 477],
      [34, 100, 121, 126, 154, 263, 266, 309, 351, 402, 497],
      [, , , , , 30, 31, 33, 35, 37, 39, 41, 42, 44, 46, 49, 51, 54, 57, 60, 64, 67, 71, 75, 78, 82, 82, 89, 93, 96, 100],
      [, , , 30, 31, 34, 37, 39, 42, 44, 46, 49, 51, 54, 56, 60, 63, 66, 69, 73, 76, 79, 83, 86, 89, 93, 96, 99, 102, 106, 109]
    ], [
      [, "NEGE", "Negative Emotionality / Neuroticism"],
      [37, 52, 82, 93, 116, 166, 196, 213, 290, 301, 305, 329, 375, 389, 390, 395, 397, 407, 409, 415, 435, 442, 444, 451, 513, 542, 556],
      [63, 223, 372, 405, 496, 564],
      [, 31, 34, 36, 39, 41, 43, 44, 46, 48, 49, 51, 52, 54, 56, 57, 59, 61, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 89, 91, 93, 95, 97],
      [, 30, 31, 34, 36, 38, 40, 42, 44, 45, 46, 48, 49, 50, 52, 53, 55, 57, 59, 61, 63, 66, 68, 70, 72, 75, 77, 79, 81384, 86, 88, 90, 93, 95]
    ], [
      [, "INTR", "Introversion / Low Positive Emotionality"],
      [38, 56, 233, 515, 517],
      [9, 49, 61, 75, 78, 86, 95, 109, 131, 174, 188, 189, 207, 226, 231, 244, 267, 318, 330, 340, 342, 343, 353, 356, 359, 370, 460, 531, 534],
      [, , 30, 31, 33, 35, 37, 39, 41, 43, 45, 48, 50, 52, 54, 56, 59, 61, 64, 66, 68, 71, 73, 76, 78, 80, 83, 85, 88, 90, 92, 95, 97, 100, 102, 105],
      [, , , 30, 32, 34, 37, 39, 42, 44, 46, 48, 50, 53, 55, 57, 60, 63, 65, 68, 70, 73, 76, 78, 81, 83, 86, 89, 91, 94, 96, 99, 102, 104, 107, 109]
    ], [
      [, "FRS1", "Generalized Fearfulness"],
      [317, 322, 329, 334, 395, 435, 441, 447, 468, 471, 555],
      [186],
      [, 44, 53, 62, 71, 80, 89, 98, 107, 113, 120],
      [, 42, 48, 55, 61, 68, 74, 81, 88, 94, 101, 107]
    ], [
      [, "FRS2", "Multiple Fears"],
      [154, 392, 438, 458],
      [115, 163, 385, 401, 453, 462],
      [, 37, 41, 45, 50, 54, 59, 63, 67, 72, 76, 81],
      [, 30, 33, 37, 41, 45, 49, 53, 58, 62, 66, 70]
    ], [
      [, "DEP1", "Lack of Drive"],
      [38, 71, 92, 399, 400, 512, 516, 539, 554],
      [3, 9, 75],
      [, 40, 46, 51, 57, 62, 68, 73, 79, 84, 89, 95, 100, 106],
      [, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
    ], [
      [, "DEP2", "Dysphoria"],
      [56, 65, 146, 215],
      [95, 388],
      [, 42, 50, 58, 66, 74, 82, 90],
      [, 40, 47, 53, 60, 66, 73, 79]
    ], [
      [, "DEP3", "Self-Depreciation"],
      [52, 82, 130, 234, 246, 377, 411],
      [],
      [, 41, 48, 55, 62, 69, 76, 83, 91],
      [, 40, 47, 54, 61, 68, 75, 82, 89]
    ], [
      [, "DEP4", "Suicidal Ideation"],
      [303, 454, 506, 520, 546],
      [],
      [, 45, 62, 79, 95, 112, 120],
      [, 45, 61, 77, 93, 109, 120]
    ], [
      [, "HEA1", "Gastrointestinal Symptoms"],
      [18, 59, 111],
      [20, 47],
      [, 44, 57, 70, 83, 96, 109],
      [, 43, 54, 64, 75, 86, 97]
    ], [
      [, "HEA2", "Neurological Symtoms"],
      [44, 53, 101, 149, 247],
      [91, 142, 159, 164, 179, 255, 295],
      [, 40, 47, 54, 60, 67, 74, 80, 87, 94, 100, 107, 114, 120],
      [, 39, 45, 50, 56, 61, 67, 72, 78, 83, 89, 94, 99, 105]
    ], [
      [, "HEA3", "General Health Concerns"],
      [175],
      [33, 45, 118, 141, 224],
      [, 40, 48, 56, 64, 72, 81, 89],
      [, 40, 48, 56, 64, 71, 79, 87]
    ], [
      [, "BIZ1", "Psychotic Symptomatology"],
      [24, 60, 96, 138, 162, 228, 336, 355, 361, 508, 551],
      [],
      [, 44, 54, 64, 74, 84, 94, 104, 114, 120],
      [, 44, 54, 65, 76, 86, 97, 108, 118, 120]
    ], [
      [, "BIZ2", "Schizotypal Characteristics"],
      [32, 259, 298, 311, 316, 319, 333, 466, 543],
      [],
      [, 41, 47, 54, 60, 67, 73, 80, 86, 93, 99],
      [, 41, 47, 54, 60, 66, 72, 79, 85, 91, 97]
    ], [
      [, "ANG1", "Explosive Behavior"],
      [37, 134, 389, 414, 540, 548],
      [564],
      [, 39, 45, 52, 58, 64, 71, 77, 83],
      [, 39, 47, 54, 61, 69, 76, 84, 91]
    ], [
      [, "ANG2", "Irritability"],
      [116, 302, 430, 461, 486, 513, 542],
      [],
      [, 35, 41, 46, 51, 56, 61, 67, 72],
      [, 33, 39, 44, 49, 54, 59, 65, 70]
    ], [
      [, "CYN1", "Misanthropic Beliefs"],
      [58, 76, 81, 104, 110, 241, 254, 283, 284, 286, 352, 374, 399, 470, 538],
      [],
      [, 33, 36, 39, 41, 44, 47, 50, 52, 55, 58, 60, 63, 66, 69, 71, 74],
      [, 34, 37, 40, 42, 45, 48, 51, 54, 56, 59, 62, 65, 68, 70, 73, 76]
    ], [
      [, "CYN2", "Interpersonal Suspiciousness"],
      [50, 124, 225, 315, 346, 358, 403, 445],
      [],
      [, 34, 39, 43, 48, 53, 57, 62, 66, 71],
      [, 35, 40, 45, 49, 54, 59, 64, 68, 73]
    ], [
      [, "ASP1", "Antisocial Attitudes"],
      [26, 66, 81, 104, 110, 123, 227, 248, 250, 254, 269, 283, 284, 374, 418, 419],
      [],
      [, 32, 35, 37, 40, 43, 46, 49, 52, 55, 57, 60, 63, 66, 69, 72, 75, 79],
      [, 33, 36, 39, 42, 45, 48, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82]
    ], [
      [, "ASP2", "Antisocial Behavior"],
      [35, 84, 105, 412],
      [266],
      [, 38, 45, 52, 59, 67, 74],
      [, 42, 51, 61, 71, 81, 90]
    ], [
      [, "TPA1", "Impatience"],
      [302, 420, 430, 507, 523, 535],
      [],
      [, 34, 39, 45, 51, 57, 63, 68],
      [, 34, 40, 46, 52, 58, 64, 70]
    ], [
      [, "TPA2", "Competitive Drive"],
      [27, 151, 212, 358, 419, 423, 510, 531, 545],
      [],
      [, 33, 39, 44, 50, 55, 60, 66, 71, 77, 82],
      [, 34, 40, 46, 52, 58, 64, 70, 76, 82, 89]
    ], [
      [, "LSE1", "Self-Doubt"],
      [73, 130, 326, 411, 450, 483, 485, 504],
      [61, 78, 109],
      [, 39, 44, 49, 54, 59, 64, 70, 75, 80, 85, 90, 95],
      [, 39, 43, 48, 53, 57, 62, 66, 71, 75, 80, 85, 89]
    ], [
      [, "LSE2", "Submissiveness"],
      [70, 369, 421, 457, 503, 519],
      [],
      [, 41, 48, 55, 62, 69, 76, 83],
      [, 39, 45, 51, 57, 63, 69, 75]
    ], [
      [, "SOD1", "Introversion"],
      [46, 265, 281, 337, 349, 367, 480, 515],
      [49, 86, 280, 340, 353, 359, 363, 370],
      [, 36, 39, 42, 45, 47, 50, 53, 56, 59, 62, 65, 68, 71, 73, 76, 79, 82],
      [, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85]
    ], [
      [, "SOD2", "Shyness"],
      [158, 167, 185, 275],
      [262, 321, 360],
      [, 36, 41, 47, 52, 58, 63, 68, 74],
      [, 35, 40, 45, 50, 55, 60, 65, 69]
    ], [
      [, "FAM1", "Family Discord"],
      [21, 54, 190, 205, 256, 323, 378, 382, 449, 478, 563],
      [83],
      [, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      [, 33, 38, 42, 47, 52, 57, 62, 67, 71, 76, 81, 86, 91]
    ], [
      [, "FAM2", "Familial Alienation"],
      [195, 550],
      [217, 383, 455],
      [, 40, 49, 58, 67, 76, 84],
      [, 41, 50, 59, 68, 77, 86]
    ], [
      [, "TRT1", "Low Motivation"],
      [92, 364, 368, 376, 491, 497, 500, 528, 539, 554],
      [494],
      [, 42, 48, 54, 60, 66, 71, 77, 83, 89, 95, 101, 107],
      [, 41, 46, 51, 56, 61, 66, 71, 76, 81, 86, 91, 96]
    ], [
      [, "TRT2", "Inability to Disclose"],
      [274, 373, 375, 391, 495],
      [],
      [, 37, 45, 52, 60, 68, 75],
      [, 38, 46, 53, 60, 68, 75]
    ], [
      // Unused, Scale Name, Scale Description
      [, "KB1", "Koss-Butcher Critical Items - Acute Anxiety Scale"],
      // True questions
      [5, 15, 28, 39, 59, 172, 218, 301, 444, 463, 469],
      // False questions
      [2, 3, 10, 140, 208, 223],
      // T scales are undefined to flag this as a critical item
      ,
      ,
    ], [
      [, "KB2", "Koss-Butcher Critical Items - Depressed Suicidal Ideation"],
      [38, 65, 71, 92, 130, 146, 215, 233, 273, 303, 306, 411, 454, 485, 506, 518, 520, 524],
      [9, 75, 95, 388],
      ,
      ,
    ], [
      [, "KB3", "Koss-Butcher Critical Items - Threatened Assault"],
      [37, 85, 134, 213, 389],
      [],
      ,
      ,
    ], [
      [, "KB4", "Koss-Butcher Critical Items - Situational Stress Due to Alcoholism"],
      [264, 487, 489, 502, 511, 518],
      [125],
      ,
      ,
    ], [
      [, "KB5", "Koss-Butcher Critical Items - Mental Confusion"],
      [24, 31, 32, 72, 96, 180, 198, 299, 311, 316, 325],
      [],
      ,
      ,
    ], [
      [, "KB6", "Koss-Butcher Critical Items - Persecutory Ideas"],
      [17, 42, 99, 124, 138, 144, 145, 162, 216, 228, 241, 251, 259, 333, 361],
      [314],
      ,
      ,
    ], [
      [, "LW1", "Lachar-Wrobel Critical Items - Anxiety and Tension"],
      [15, 17, 172, 218, 299, 301, 320, 463],
      [223, 261, 405],
      ,
      ,
    ], [
      [, "LW2", "Lachar-Wrobel Critical Items - Depression and Worry"],
      [65, 73, 130, 150, 180, 273, 303, 339, 411, 415, 454],
      [2, 3, 10, 75, 165],
      ,
      ,
    ], [
      [, "LW3", "Lachar-Wrobel Critical Items - Sleep Disturbance"],
      [5, 30, 39, 328, 471],
      [140],
      ,
      ,
    ], [
      [, "LW4", "Lachar-Wrobel Critical Items - Deviant Beliefs"],
      [42, 99, 138, 144, 162, 216, 228, 259, 333, 336, 355, 466],
      [106, 314],
      ,
      ,
    ], [
      [, "LW5", "Lachar-Wrobel Critical Items - Deviant Thinking and Experiences"],
      [32, 60, 96, 122, 198, 298, 307, 316, 319, 427],
      [],
      ,
      ,
    ], [
      [, "LW6", "Lachar-Wrobel Critical Items - Substance Abuse"],
      [168, 264],
      [429],
      ,
      ,
    ], [
      [, "LW7", "Lachar-Wrobel Critical Items - Antisocial Attitude"],
      [27, 35, 84, 105, 227, 240, 254, 324],
      [266],
      ,
      ,
    ], [
      [, "LW8", "Lachar-Wrobel Critical Items - Family Conflict"],
      [21, 288],
      [83, 125],
      ,
      ,
    ], [
      [, "LW9", "Lachar-Wrobel Critical Items - Problematic Anger"],
      [85, 134, 213, 389],
      [],
      ,
      ,
    ], [
      [, "LW10", "Lachar-Wrobel Critical Items - Sexual Concern and Deviation"],
      [62, 166, 268],
      [12, 34, 121],
      ,
      ,
    ], [
      [, "LW11", "Lachar-Wrobel Critical Items - Somatic Symptoms"],
      [18, 28, 40, 44, 53, 57, 59, 101, 111, 175, 182, 229, 247, 464],
      [33, 47, 142, 159, 164, 176, 224, 255, 295],
      ,
      ,
    ]
  ];

  var profileArray =
[
  [
    ["恭喜！你的精神心理状况较为正常！"],

    ["这种少见的编码与人的社会不安、孤僻、冷淡、不信任、玩世不恭、消极和没有戒心相关\
    联。具有此种编码模式的个体很少主诉躯体症状，也不抱怨心理不适或情绪困扰，因为其所持\
    有的传统而刻板的观念使他们更倾向于默默忍受自己的不舒服，把不适感当作自己生活中的常\
    态而接受它。当量表 8 的分数升高成为排名第三的量表，且同时有许多躯体症状时，强列建议\
    考虑受测者是否有精神分裂和逃避接触社会的倾向。最常见的情况是，量表 2 成为分数排名第\
    三的量表，受测者可能表现出抑郁，缺乏有效的社会支持系统:其童年中存在社会化不足及缺\
    乏父母的温暖(但通常没有形成敌意或焦虑)的经验"],
    
    ["这种编码表示受测者是一个社会退缩、内向含蓄且长期压抑个性的人。这种压抑通常与缺\
    乏人际关系和社会交往相关，他们还伴有自卑和害羞感，经常出现失眠、负罪感和过分担忧\
    具有这一编码模式的成年人和青少年都会感到焦虑和内向，认为许多人会觉得自己没有吸引力。\
    然而，在别人看来，他们缺少光彩和自信，倾向于附和别人，也不愿意让别人注意到自己。他\
    们的行为被动而传统，几乎没有任何攻击性，生怕做错事。理论上讲，这种编码剖析图显示的\
    是父母的抚养过程造成了受测者在儿童期的要求常常被忽略，因而缺乏情感反应。如果量表 4\
    (Pd)和量表8(Sc)的T分小于65分，这个编码析图会示受测者在成长过程中虽得到了\
    基本的看护，但缺少从监护者那里获得的热情、感情和身体接触。因此，他们就学会很少期待\
    从别人那里得到情感和肢体接触，并变得习惯于此。\
    具有这种编码模式的孩子的妈妈通常在量表 7(Pt)或量表4(Pd)的得分为第三高分。这\
    些妈妈多处于是否给孩子情感支持的冲突之中，常害怕与他人有情感纠葛，倾向于与别人保持\
    距离，严格控制自己情感的流露，避免对他人产生情感需要，或者失去对自己封闭状态的控制\
    (尤其是当量表K的得分也升高时 )。"],
    
    ["这是一种非常少见的编码类型。量表 3(Hy)的得分高表明了受测者对社交和赞许的需\
    要，但量表 0(Si)的得分高则表明其有社交退缩或回避。这两个量表组合到一起，就代表\
    了受测者消极、依赖、不自信，在一定程度上有社会退缩、不可亲近但又安静的特点。压力\
    可能会导致他们出现一些心身疾病，当量表 1(H)和量表 2(D)的得分高时尤为明显。\
    他们看起来可以很好地适应某些环境，从而回避令他们感到不舒服的社会情境。他们主要的\
    防御机制是压抑和否认。"],

    ["这是一种很少见的编码类型，因为量表 4(Pd)的得分高反映了惹麻烦行为和缺少良心，而\
    量表 0的高分者则少见外向行动，多有内倾向。两种编码组合在一起表示了既愤怒又退缩的\
    特性。高分者基本上不会公开表达自己的愤怒，他们没有恰当的自信，并且会以愠怒的方式克\
    制怨恨。他们倾向于怀疑、抱怨、害羞和消极反抗\
    他们倾向于在家庭中采取行动，而不是在家庭之外用反社会的方式表达自己的不满。如果\
    确实有反社会行为，他们很可能是“独行狼”。这类编码更多反映的是受测者在情感亲近和亲密\
    感上存在困难，但还没有达到体验到心理痛苦的程度。更详尽的解释依赖于第三个量表(如高\
    分量表 4 或低分量表5)的分析。通常的做法是:先在三点编码中把量表0去掉，然后依据剩下\
    的两点编码做出解释，最后再加上量表 0高分反映的内容，对受测者做出更有帮助和有价值的\
    解释。"],
    
    ["具有这种编码模式的男性是内向的，一般会退缩到个人心理世界中，较少与别人接触。他\
    们是警觉、抑制、退缩和焦虑的。在与别人的交往中，他们会表现出过度控制和过度理想化\
    很不灵活，缺乏自信，怀疑自身是否足够优秀。他们很容易窘迫，很少因为外向行动而引起麻\
    烦。在与异性的关系中，不适问题尤其常见。\
    这种编码类型的女性比量表 5 单独高分的女性要更为缺乏自信，在自主性、精力和自我肯\
    定方面都较差。她们大多受到更少的教育或者来自社会底层"],
    
    ["这也是一种比较少见的编码模式。具有这种编码模式的受测者将自己看作平静、镇定、快\
    乐、适应良好并且身体健康的人。他们倾向于认为自己是理性的，判断力与记忆力良好，且思\
    路清晰的思考者。另一些人则认为自已是诚实、可靠、忠实的。他们很少诉说心理与情绪上的\
    痛苦\
    正如量表0(Si)高分显示的那样，他们其实非常内向、害羞，很容易在社交情境中感到困\
    窘。\
    随着量表 6 得分的升高，他们也变得非常敏感、易受伤害，且经常去掩饰自己对他人的怨\
    恨，很难在与他人对抗时保持自信。具有这种编码模式的女性倾向于对自己的形象及魅力感到\
    自卑。\
    在该编码模式的分数进一步升高后，他们的敏感性很可能会渐变为偏执妄想，其典型症状\
    就是毫无根据的嫉妒，有牵连观念，并使用投射和反向形成作为初级防御机制。当他们变得偏\
    执和妄想时，倾向于更加固执和偏执，而并没有表现出类似于精神分裂症那样比较特别的思维\
    分裂过程。"],

    ["这种编码模式比较少见，量表2(D)或量表8(Sc)是最有可能在这种编码中成为得分第\
    三高的两个量表。当量表2或量表8与量表0和量表7之间的分数差在5个T分之内时，先将量\
    表0的解释放在一边，而去重点理解27/72 或者 78/87 两点编码的意义，或许是更好的解释策略\
    具有这种编码模式的男性都很害羞、担忧、紧张，对自己的社会技能或外貌感到不满意\
    很多人内向甚至达到了沉默寡言的程度。缺乏自信和无主见使他们感到混乱、过分控制以及内\
    疚。他们的过度思考还会导致失眠。许多人还有很严重的家庭冲突，这主要是因为他们在过度\
    自信和依赖-独立方面出现了严重的冲突\
    具有这种编码模式的女性所表现出来的行为模式和男性一样，除非量表 5(Mf)的得分小\
    于等于 40分。另外，她们的问题严重程度比男性要轻一些，她们的核心问题是缺乏自信和自我\
    意识，对自己的外表感到不满意或是自卑，有社会不安全感以及很难建立和谐的异性关系。"],
    
    ["具有此类编码模式的受测者会明显地逃避世事，性格内向，避免社会交往。他们花大量时\
    间在个人幻想上，导致他们严重地脱离社会，甚至经常远离家人。他们将自己形容为轻度抑郁\
    和焦虑的，大多数人都报告缺乏愉快感受。他们的家庭生活是冲突而不令人满意的。他们会因\
    为担心别人的批评，而在做决定时迟疑不决。他们还很容易惊恐，很多人存在恐惧症。由于在\
    任何社会环境中都会感到不舒服，他们倾向于在遇到挫折时就轻易放弃，在任何时候都避免出\
    现人际冲突。他们缺乏足够的自信，在公共场合，他们可能显得非常沉默。\
    如果得分第三高的量表的分数与量表 8 或量表0的差值在5个T分以内的话，可暂时忽略\
    量表0而重点去解释其他任意的两点编码。最常见的三点编码有 807/087和802/082"],

    ["这种编码模式不是很常见。具有这种编码模式的受测者被认为是快乐的和适应良好的，身\
    体健康，很少体验到痛苦。他们不太会抑郁，经常是兴高采烈和易激动的。尽管他们有很多适\
    当的社交技能，但也会倾向于在社交时害羞以及退缩。如果量表 9的得分是最高的话，他们会\
    被形容为利已主义者，充满自信，但偶尔比较夸张。有时他们会表现得有点儿害羞，但是一旦\
    在新的情境中感到舒适后，他们可能会表现出躁狂的特点。他们多被形容为精力充沛以及支配\
    欲强的人。\
    在对这个编码解释时,最初可以忽视量表0.而是去关注量表9与其他量表组成的两点编码:\
    有必要的话，再辅以量表0高分的解释。"]
  ],
  [
    ["这种少见的编码与人的社会不安、孤僻、冷淡、不信任、玩世不恭、消极和没有戒心相关\
    联。具有此种编码模式的个体很少主诉躯体症状，也不抱怨心理不适或情绪困扰，因为其所持\
    有的传统而刻板的观念使他们更倾向于默默忍受自己的不舒服，把不适感当作自己生活中的常\
    态而接受它。当量表 8 的分数升高成为排名第三的量表，且同时有许多躯体症状时，强列建议\
    考虑受测者是否有精神分裂和逃避接触社会的倾向。最常见的情况是，量表 2 成为分数排名第\
    三的量表，受测者可能表现出抑郁，缺乏有效的社会支持系统:其童年中存在社会化不足及缺\
    乏父母的温暖(但通常没有形成敌意或焦虑)的经验"],

    [""],
    ["具有 12/21 编码模式的受测者多呈现出躯体症状与抱怨，对自己的身体功能倾注了极大关\
    注。一般来说，他们的躯体没有明显的病理病变(阴性检查结果 )，但他们确实感觉到躯体有问\
    题，过分夸大躯体问题的严重性。他们诸多的躯体症状可能会集中于疼痛(如头痛、肚子痛和\
    背痛)、心脏不适，或胃肠问题(如厌食、恶心、呕吐或溃疡)、疲劳、乏力、头晕等，往往出\
    现并伴随着焦躁和抑郁。事实上，这些受测者被诊断为抑郁症或心境障碍的很常见。若同时他\
    们的量表 7 或量表9的分数也很高，其很可能存在着身体的紧张与焦虑，常常感到焦躁不安\
    担心许多不好的事情会发生。\
    受测者通常具有依赖和不成熟的表现，但可以通过努力来促进成熟。他们往往因承担责任\
    而感到冲突，并伴有发牢骚和埋怨，但往往会继续这样做。他们普遍怀疑自己的能力，常处于\
    举棋不定的状态。他们压抑和否认自己的情绪问题，缺乏洞察力和抵制暗示的能力。他们倾向\
    于将愤怒的情绪内化，而不是指向别人，可能会出现酬酒行为。这一编码模式的受测者在临床\
    上出现重度抑郁的情况并不普遍:同样，其出现人格解体或自杀冲动的可能性也不大，除非其\
    量表8的分数也很高(参见128/218编码)。\
    具有 12/21编码模式的求助者较难治愈，因为他们已经学习到如何带着症状去生活，并利用\
    症状“操纵”他人来关注自己。一般来说，他们的压力反应常常伴随着躯体症状，缺乏进取心\
    也缺乏性欲，虽然他们或许会有一份较稳定的工作和一段较稳定的婚姻史，但他们往往存在睡\
    眠问题，特别是当其量表9(Ma)的T分小于 50分时。\
    具有 12/21 编码模式的大学生通常会害羞、紧张、内向、不快乐、担心和没有安全感，且自\
    我意识相当强烈，在面对异性时，上述表现尤为突出。与具有这一编码模式的成年人相比，具\
    有这一编码模式的年轻人在身体症状上更多地表现为紧张、失眠和社会适应性不良;女大学生\
    往往会犹豫不决，常常要寻求得到他人的保证，在学业考试中常表现为紧张、怯场。若其在量\
    表5(Mf)的得分较低，则这些女大学生极易出现头痛的症状。"],

    ["13/31 编码模式多见于经常出现躯体症状的妇女和老年人，最典型的症状是头部和四肢等的\
    疼痛，如头部、背部、颈部、手臂、眼睛和腿。他们通常都忙于处理大量的实际生活问题，很\
    容易由应激反应而发展成为躯体症状。其他与饮食相关的常见问题有恶心或饭后不适，有时还\
    伴有厌食或暴饮暴食的现象等。他们也会主诉经常出现疲倦、头晕、麻木和颤抖等症状。尽管\
    有些受测者会报告患有抑郁症，但通常在他们之中很少有严重的焦虑症或抑郁症患者。13/31编\
    码模式多与睡眠障碍和性欲低下相关，具有这种编码模式的受测者还可能有表演性的意症。若\
    量表 3 得分高，则受测者普遍表现为性情悲观;若量表 1 得分高，受测者则常表现为抱怨和发\
    牢骚。如果量表2进人这种编码模式(123/321)那么受测者的抑郁和悲观症状更为明显，但在\
    外显行为上却是顺从和服从的。\
    如果伴随着 13/31编码模式，量表 7的得分也升高(137/731)那么焦虑、紧张和罪恶感也\
    都会出现，此类受测者更害怕冲突和表达愤怒。如果量表 8 是第三高分(138)，则受测者也会\
    主诉头晕、意识缺失和其他奇怪的躯体症状。如果伴随着 13/31 编码模式，量表9的得分也升高\
    (139)，那么受测者会表现出更多的情绪化行为，会寻求他人的肯定、否认自己的问题和行为暴\
    躁等。139编码模式已经被证实是经常引起慢性脑病的症候群。\
    少数具有 13/31 编码模式的受测者会对他们的症状和继续发展感到无能为力，除非 K 量表\
    的得分低，否则他们会把自己说成是正常而负责任的，往往会反对心理测验或转诊，讨厌他人\
    对他们的内心世界进行探索。他们对社会认同有很高的需要，要被他人视为愉快、富足、能够\
    勇敢地面对自己的痛苦的人。如果L和K 量表的得分都升高，受测者会更加压抑、否认和恐惧\
    被评判。因此，对这类人很难进行心理治疗，他们倾向于寻求药物来解决问题，缺乏对深层心\
    理因素的探索。特别是那些 40 岁以上的受测者会有明显的生理病理表现，这反映了长期压力导\
    致他们的身体衰弱。在许多情况下，极度压抑及处理情绪控制问题的无意识恐惧会导致生理病\
    理症状，成了疾病产生的明显的心理原因\
    具有 13/31编码模式的高分者表现出具有被关注、爱和同情的强烈需要,常觉得没有安全感\
    身体疾病则使他们有了间接的收获，可以获得别人的关注和照顾;其他次要的收获可能包括避\
    免职责、通过诱导和同情来控制他人。这些人被描述为不成熟、自我中心、依赖和自私。\
    般来说，虽然具有 13/31编码模式的高分者表现为直率和好交际(特别是如果量表0的标\
    准分、T 分小于 50分)，但他们的社会关系往往是浅层次的。令人惊的是，他们中的很多人\
    都被描述为乐观的(尤其是如果量表 2和量表7的得分都在正常范围内 )，当埋怨别人或处境困\
    难时，他们则常会使用压抑、拒绝、合理化和投射等防御机制。由于对身体伤病极端恐惧，他\
    们常常着眼于实现自我安心和满足的需要。他们很少以直接的方式表达负面情绪，如愤怒。相\
    反，他们要么通过压抑、否认这些情绪来表达自己的躯体紧张症状，要么通过被动、消极地\
    侵犯来表达。他们与异性个体之间很难建立持久的人际关系,其首要防御机制是很不成熟的.\
    然而，这些人却迫切寻求这种关系，因为这种关系是适应社会所需要的，并且他们需要情感的支持。\
    13 编码可被用于明确推断与受测者抱怨和悲观相关的抑郁症特征，反之，31 编码则可被用\
    于推断他们更加幼稚、依赖，需要社会认同。\
    若父母都有心理问题，则他们孩子的第二种最常见编码类型就是 13/31编码。这种编码模式\
    与父母亲的过度保护、个性外向、易受暗示相关。当只有母亲为这一编码时，母亲和孩子的症\
    状会随着治疗而有一些改善;当只有父亲为这一编码时，则他们的预后效果较差。父亲的 13/31\
    编码剖析图表示他有着不成熟的依赖、强烈的被接受的需要，以及利用巧妙和间接的策略来获\
    得关爱和重视。\
    具有 13/31编码模式的女大学生形容自己是温柔的和有思想的,但她们的同伴却将其看成自\
    私的、以自我为中心、依赖性高、寻求关注、烦躁、情绪化、身份敏感和频繁地出现躯体症状\
    的女生。她们对婚姻有一种强烈的倾向，但仍远低于她们对学术问题的兴趣和关心，她们也常\
    常因此而出现问题。\
    具有 13/31 编码模式的男大学生同样被视为自私的、依赖性的、自我中心的和苛求的。他们\
    的一个主要症状是从他们的家庭中得不到足够的关心，但似乎在社会上表现得自如、善于表达\
    并有信心(尤其是如果K 量表得分高而量表 0得分低时)。他们坚持要知道自己的考试成绩并\
    就他们的问题要求给予明确答案。他们会使自己的表现合理化，常责怪别人，而且一般不愿意\
    自我反省。"],
    
    ["这是一种不太常见的编码模式，女性受测者出现此种剖析图的更为稀少。量表 1的出现\
    少了因量表 4 的得分升高而可能表现出的攻击性行为。或者说，攻击行为以一种更为微妙\
    加以控制的依赖性显现出来，高分者有一种通过生理疾患来控制别人的倾向。在量表 1上\
    量表 4，则增强了受测者的愤世嫉俗、痛苦和悲观的情绪。他们是高度依赖的，同时又是\
    任的。他们常常表现出一般的群体适应不良，成为破坏规则或者规章制度的人。他们往往\
    极、抱怨、自我怜悯的，当他们的即时需要得不到满足时，也很容易心烦意乱。他们总是\
    身体疾病和无力感而叹息。无论在任何方面，他们的消极态度都会使其变得更加固执和消\
    抗。他们以自我为中心，需求风格通常是伴随着身体症状表现出来的，尤其是当特异性头\
    般性疼痛出现时，会加剧其以自我为中心的表现，尽管他们很少有特异性症状出现。由于\
    们的躯体症状，其没有表现出任何类型的情绪困扰的倾向，如抑郁或焦虑。他们更多是通\
    愤怒和挫败来表达自己的压抑\
    在遇到压力和生活的责任时，他们常常不能充分表达;还易出现酬酒现象;在工作和生活\
    中优柔寡断，缺乏明确的目标;与异性难以建立持久的关系。家庭关系也呈现出紧张且长期\
    怨的特点。\
    最常见的三点编码为143/413 和 142/412。当量表3的得分也升高时，家庭和婚姻会围绕着\
    愤怒的情感问题频出，其中交织着社会情感的匮乏以及依赖性与独立性的矛盾。量表 3 的\
    表明了他们过度控制的倾向，以及去掩盖自己敌视和疏离他人的行为，量表 4 的高分也体\
    个体通过躯体症状来反映过度控制的消极冲动。通常这种模式的编码也会伴随着量表 O-H\
    的升高。"],

    ["这种编码模式在男性中已属罕见，但在女性中更为罕见。对于男性来说，最常见的三\
    码有153/513、154/514和152/512\
    具有 15/51 编码模式的男性通常爱计较、抱怨和愤世嫉俗，并且基本上在生活中处于被地\
    位。他们的主诉集中于躯体不适方面，很少与人产生公开的冲突或发生分歧。通常，他智\
    力均高于平均智力，他们的社会经济地位多处于中产阶级或更高水平。\
    对女性出现这一罕见的编码的解释依赖于受测者的社会背景。具有 15/51编码模式的受\
    育的中产阶级女性表现为(量表 1 得分的升高)悲观、抱怨并有点儿不成熟。但反常的是\
    她们偏好人际竞争，常进军于许多传统的男性领域，有时甚至会主动支配其与男性之间系\
    具有较低的社会经济地位的女性也被形容为悲观、抱怨和不成熟，但并不会咄咄逼人，她\
    们仍然具有传统男性利益和职业追求的倾向。\
    当解释15/51 编码时，我们总是要考虑第三个量表的高分情况。例如，解释153 编码的\
    步是描述15编码，然后描述13编码，最后再看53编码。"],

    ["量表1高分加上量表6高分，更强调了受测者过度敏感、警惕批评、趋向合理化、推卸责\
    任和过度防御的倾向。这些人被认为是僵化的、爱抱怨的和固执的，他们极度反感被别人要求\
    他们回避、害怕情感卷人，防御、过度敏感，并且容易愤怒。通常，他们不能察觉到自己的暴\
    躁和敌对，反而将自己的感情归因于别人对待他们的方式，也可能表现出某种形式的躯体障碍\
    从理论上讲，这种编码模式反映了个体的身体不适感，常感到不公平的对待，并指责这个\
    世界和其他人造成了他们的痛苦。当他们准备为自已辩护时，仿佛又在预期会被他人批评或评\
    判，因此会马上感到被不公平对待或被无理误解。\
    如果量表 8 加人，成为 168 编码，表示受测者有不同寻常的躯体关注，并且在某些情况下\
    可能会出现躯体妄想症，这可能反映了受测者正在通过对身体的关注而对自己的精神病态进行\
    掩饰和防御。在现实生活中，得分排名第三的量表对于男性来说往往是量表2和量表 4，对于女\
    性来说则是量表3和量表8"],
    
    ["这一编码剖析图的受测者长期处于紧张、焦虑、自罪和思辨之中，他们的主诉多与躯体症\
    状存在关联，对身体功能紊乱的困扰和过度关心的现象十分普遍，并且因此而存在内疚、自\
    悲观等典型症状。他们对躯体症状的主诉反映出了其紧张和焦虑，以及不安、羞怯、自罪、\
    泊思想、恐惧和惊慌。除此之外，他们还常报告说:“自己失去了灵魂和肉体。”量表 2得分\
    升高的个体是害羞、内敛和谦让的，往往担心自已缺乏处理人际关系的技巧。这种编码模式\
    男性中比在女性中更普遍，最常见的三点编码有172/712和173/713。"],
    
    ["具有这种编码模式的人可能会出现不可思议的躯体主诉。在某些情况下，他们有躯体妄想\
    在其他情况下，躯体主诉可能意味着对实际精神病发作的防御反应。此类编码剖析图的受测\
    容易分心和混乱，难以完成需要集中注意力、思维和记忆的任务。他们可能表现出广义的不\
    快和空泛的抑郁症状，尤其是在与异性接触时会表现出更多的社会不适应性。他们缺乏对他\
    的信任，感到与别人保持一段距离，不合群且普遍感到孤立(特别是在量表0得分同样升高的\
    情况下)。一些人表现出流浪的生活方式，有过一段流离的生活经历。这些人在应激状态下\
    出现分离解体症状。在感情上，他们是压抑和封闭的，如果他们觉得无路可走或被威胁时，\
    可能交替出现突然的暴戾发作。在家庭生活中，他们的情感风格往往是杂乱的，似乎没有学\
    如何表达情感及调节情感，特别是愤怒、主见、情绪或悲伤等。最常见的三点编码有 182/8\
    183/813和187/817。"],
    
    ["这种极少出现的编码模式与个体的紧张和不安相关，通常在剧烈动荡和精神困扰下，他们\
    会表现出多种躯体症状以及精力过剩和狂躁。他们明显地表现出过分关心身体机能和不适感，\
    尽管这种对身体机能受损的过分关心可能在口头上被否认或被隐瞒(或避免面对)。这种模式与\
    许多躯体症状相结合，可反映中枢神经系统或内分泌失调等能量过剩的情况。\
    排除身体病因之后，应考虑受测者可能企图掩盖潜在的抑郁症(尤其是如果量表 2 的标准\
    分 T分低于 45 分时)，其压抑自己的根源在于有强烈的依赖性需要，并为此感到恐惧。这些\
    人表面上看起来外向和敢作敢为，但内心却往往是被动和依赖的。尽管他们似乎是雄心勃勃\
    但其共同的特点是缺乏明确的目标，或者过于脱离现实。最常见的三点编码有 183/813 和\
    184/814。"]
  ],
  [
    [],[],[],
    ["23编码基本上类似于231/213 编码。具有23编码模式的个体的主要特点是有抑郁、无助\
    冷漠、疲倦等多重症状的主诉(尤其对压力的反应 )，情绪过度控制和疲劳以及睡眠不安，还伴\
    有性欲减退。这可能是源于导致冲突的感情不能被直接表达出来，以及隐藏在抑郁背后的歇斯\
    底里式的防御机制。他们把自已封闭起来，内心充满着自我怀疑和不安全感，并对生活不感兴\
    趣、不参与。他们一般都难以用任何直接或准确的方式表达自己的感受，通常被含糊地看作不\
    满或不高兴的。\
    高分者显得不成熟和依赖，无法面对和表达自己的愤怒。他们往往感到软弱或疲惫，长期\
    存在着抑郁情绪。如果量表9(Ma)的得分较低，则他们会有更多关于疲劳和体力透支的主诉\
    身体上的疾病有时会成为具有这种编码模式的受测者心理问题的诱发因素。若量表 3 的得分为\
    高分，则表明受测者有表达愤怒和悲伤情绪的困难，他们为了讨好他人而伤害自己的感情，忍\
    受着不开心，并且意识到自己的行动效率较低，不能从容地执行任务或者很好地完成任务。歇\
    斯底里式的防御机制往往让他们表现出愉快平和，但这是一种微笑的抑郁、类似于 213/231 编码\
    剖析图的特征。最常见的三点编码有231/321、234/324 和237/327。\
    具有23 编码模式的男性表面上很有成就感，但常常抱怨在工作中不被赏识。虽然他们怕做\
    事，但又尽可能承担更多的职责，因为他们真正想要的是自己无惧失败的努力得到他人的认可\
    这些男性(尤其是具有237或239 编码模式的男性)看上去极其严肃、有驱动力、刻苦或爱竞\
    争，但同时其内心深处也是很脆弱和不成熟的，特别是他们渴望被承认的欲望很强烈。\
    具有23 编码模式的女性(尤其是伴随量表5或量表9的得分为低分)表现出示弱、冷漠\
    没有安全感和突出的抑郁症状，伴随着精力不足和自信心低的问题:长期存在着苦恼，在工作\
    和家庭生活中的效率通常很低，家庭婚姻生活长期失调。这些女性的婚姻出现问题，可能与她\
    们的性冷淡相关。尽管她们长期处在不安和忧虑之中，却很少做出寻求帮助的持续努力。\
    这种编码模式更多出现在年龄超过 25岁的个体中，但也会发生在青少年之中。具有这类编\
    码模式的青少年通常是孤独的，在校内或校外仅有极少量的朋友。他们是被动的、听话的和顺\
    从的。他们的父亲常常因工作而很少关心家庭或孩子，母亲则是对家庭或孩子过于投入。有此\
    种编码模式的青少年出现性行为问题和吸毒的可能性并不大。"],
    
    ["这种编码反映的可能不是一种长期的生活风格，而是量表 4 的高分者近期经历了一种挫折\
    并且陷入困境、愤怒和失败的状态。大多数人都可能会在一些情境中感到沮丧、愤怒、失望、\
    不满、怨恨、批判、争论和不安，但具有此种编码模式的个体会因此而做出弄巧成拙、不为社\
    会所接受的行为，之后他们又会为自己的行为感到尴尬和窘迫。他们常把愤怒转向外部，当感\
    觉受到阻碍时，就会周期性地感到自己是不幸的受害者。有时他们也将愤怒转向内部，认为自\
    已是应该受到谴责的，自已是无价值的，产生一种自我毁灭的倾向。24/42 编码剖析图反映出个\
    体已经难以维持和控制自己的冲动，目前正经历着情境抑郁和懊悔情绪。在冲动行动之后，他\
    们又会感到困扰。但这种困扰是由于行动被发现并受到处罚，而并非因为未能抑制冲动而带来\
    的内疚。他们可能会夸张地表现出良心上的煎熬，但其冲动行为很可能还会周期性地再现\
    通常具有 24/42编码模式的受测者会有家庭、失业和社会等问题，他们怨恨自己的需求不被\
    别人重视，因而酬酒、滥用药物或酒精中毒的现象也频繁出现:时常卷入法律纠纷中;经常出\
    现人际关系问题和事业不稳定的情况。超过 40岁的具有此类编码模式的个体会因为没有实现既\
    定的目标，或者没能取得令自己满意的成果，而出现自责、压抑和沮丧。最常见的三点编码有\
    247/427、243/423和248/428。\
    具有这种编码模式的青少年会表现出无视公认的社会准则，对权威人物特别反感，好争论\
    但又常常自我谴责，并有滥用毒品的倾向。大部分具有这种编码模式的青少年会感到与家庭其\
    他成员有疏离感，并希望能从无法容忍和经常冲突的家庭中摆脱出来。他们通常因精神难以集\
    中和逃学而存在学习困难。这种编码剖析图还与未婚妈妈和性滥交行为有高度的相关。\
    整体而言，具有 24/42 编码模式的个体感到沮丧、愤怒、不满和不安。他们对未来持悲观的\
    态度，有较低的自尊，在没有达到目标时会感到沮丧，并在自责和埋怨别人使自己成为受害者\
    之间来回摇摆。尤其是当量表 2 和量表 4 得分都高时，他们往往是弄巧成、自我毁灭并且情\
    绪不稳定的，甚至有自杀的倾向。他们的自杀行为常常出于企图惩罚他人或者使他人感到内疚\
    的动机。"],
    
    ["具有此编码模式的男性是理想化的、有主见的、不掩饰的、优柔寡断和压抑的。他们相对\
    缺乏竞争性，也许有点被动，难以付诸行动，对各种冲突往往通过理性化的内部处理方式加以\
    解决。他们往往是焦虑和退缩的，有躯体症状病史。通常，他们都有很高的自知之明和充满痛\
    苦的自我意识。另外，他们与异性的关系较差。\
    女性很少出现此编码模式。高分女性倾向于压抑自己，关注内在感觉，容易产生罪恶感\
    具有责任感。她们认同传统的男性价值观和兴趣，如喜欢户外活动，细化科学研究，欣赏男性\
    榜样，工作踏实，但有点压抑、内省和退缩。\
    此编码模式经常在青春期的男孩中出现，他们与自己的兄弟姐妹或朋友的关系不好，看起\
    来羞怯、极端消极或敏感。这些青少年往往表现出超出同龄人的细致、羞怯和被动。他们通常\
    会因被同伴嘲笑为软弱无能而感到焦虑、罪恶感、敏感、自责、抑郁和社会僵化。"],
    
    ["这是抑郁症的一种主要编码剖析图，具有潜在的偏执狂的基本特点，具有此种编码模式的\
    受测者会把自己目前的困境归咎于不公平和反应迟钝。量表6 得分的升高预示着个体过于敏感\
    有快速攻击倾向和被害妄想。这些人经常受挫而又不善于直接表达自己的不满，这导致他们经\
    常迁怒于他人，坚信别人的愤怒情绪是出于对自己的怨恨，因而才使得他人给予自己不公平的\
    对待。\
    具有这类编码模式的个体的典型主诉是悲伤的情绪，有较长时间的哭泣和其他与抑郁相关\
    的症状(如担忧、过于关注自己的身体、自卑、悲伤和疲劳等症状)。他们让自己看起来十分痛\
    苦，是被虐待和被牺牲的弱者。他们的人际交往技巧很差，会曲解他人的动机并积压对他人的\
    不满情绪，常常与人发生冲突，这或许是对被他人批评或评判的防御。他们往往会妄下结论\
    企图在自己被拒绝之前先行拒绝别人。这些个体显示出了基本的偏执防御机制，如投射和反向\
    形式。如果他们在量表4 和量表8中的得分也升高，且T分高于 65分则被诊断为精神病的概\
    率就增加了"],
    
    ["这一编码剖析图反映了一种典型的焦虑型抑郁。它的典型症状和主诉与紧张、压抑、神经\
    过敏、焦虑、罪恶感、自我贬低以及十分痛苦的内省有密切关系。这类受测者常常是在做出过\
    度行为之后出现苦恼，从而在边缘上挣扎的人。他们常常会进行毫无结果的自我反思，缺乏自\
    信，工作效率降低和会失眠等。他们关注自身的缺陷，即使自己已取得很多个人成绩，但仍不\
    能抵消其对自身不足的过分关注。他们对微小压力反应过度，并随之产生对焦虑的关注和对身\
    体的关心。他们强烈关注问题的正确与否，对事情持有严苛、僵硬的态度，如果量表 工 的得分\
    升高，这种态度将会更加明显。性冲突和性功能障碍在这种编码模式中是常见的症状。通常这\
    些人会过度控制自己，并且难以公开地表达自己的感情最常见的三点编码有 270/720278/728\
    273/723和271/721\
    他们通常采用一种具有严格的责任感的强迫方式，以便在工作中取得成绩。在人际关系中\
    他们经常显示出一种依赖和缺乏自信的特点。这些人在遇到困难的时候从不会说“不”，因而承\
    担下更多的责任，但当责任累积而感到自己要被压垮时，他们又很容易产生抑郁和焦虑。在某\
    些情况下，他们表现出病态的恐惧症状和心事重重。这些人也可能表现出强迫性、小心谨慎和\
    尽善尽美的趋势。当事情出错的时候，他们往往会自责和自我惩罚。值得注意的是，具有此种\
    编码模式的受测者的学历都较高，有相当大比例的具有 27/72 编码模式的个体都具有大专文化\
    而且几乎没有显示出攻击性的行为。\
    具有 27/72编码模式的个体容易出现自杀行为，尤其是当量表 8和量表9的得分都高，且量\
    表1或者量表K的得分低时。在这种情况下，有必要评估受测者的潜在自杀风险"],
    
    ["该编码类型与抑郁、社交退缩、注意困难以及害怕丧失冲动控制能力等表现存在相关。在\
    某些情况下，它反映的是精神病性抑郁症状，提示受测者存在严重心理问题的可能性很大，而\
    且可能还存在幻觉和妄想。具有 28/82编码模式的受测者常常主诉健忘、注意困难觉得自己“脑\
    子空了”，这可能是思维困难和信息传递困难的一种反映。\
    有些高分者则表现为紧张、神经质、与人疏远、制订和实施计划的效率差，有时有怪异的\
    想法，这些均与量表8(Sc)得分的升高相关。由于这些人常常出现轻生、对冲动的控制能力差\
    以及拥有具体的自杀计划，所以需要对其自杀的可能性进行评估。\
    这些个体十分害怕他人的情感介入，他们在童年时期常常遭到情感上的遗弃和忽视，但无法\
    明确其在童年时期是否经历了敌对和暴力。他们的自尊水平很低，而且其身份认同也很不稳定"],

    ["在这种编码中，量表2抵消了量表9的愉悦，而量表9则掩盖了量表2的抑郁和沮丧。它\
    表明受测者具有紧张、喜怒无常、易怒和对自身价值的过分反思等特征。当量表 9占据主要位\
    置时，他们易激动、积极甚至很欣快，但很快会变得愤怒、混乱和沮丧，生活环境中小小的改\
    变都会对他们产生很大影响。他们的神经时常处于高度紧绷的状态，偶尔可能会开玩笑和表现\
    积极，一旦有一个小的挫折出现，他们就会很快变得愤怒和出现灾难化思维，因此他们表现出\
    持续的情绪化、易怒，看上去不稳定，经常会乱发脾气，从正性到负性情绪的变化非常快，行\
    为不一致，一会儿一个主意，常令周边的人震惊和难以应付。有些高分者几乎可以在几分钟内\
    从狂躁变为抑郁。多数这类编码者都显示出有严重抑郁的经历。最常见的三点编码有 294/924\
    和293/923\
    具有 29/92编码剖析图的个体有着很高的能量水平，但伴有抑郁和焦虑。有些人表现出激动\
    不安的抑郁行为，如哭泣和痛哭、郁闷的沉思，以及病态自恋的自我关注。青少年多会采用过\
    度的情绪化行为来引起他人的注意。另有一些人会运用狂躁防御的方式，尽力去克服潜在的抑\
    郁，表现得夸夸其谈、自信满满，从而否认和掩盖自己的抑郁。然而，当这种狂躁防御没有效\
    果时，他们转而会出现严重的酬酒行为。还有一些高分者可能有器质性脑功能紊乱，能略微意\
    识到自己能力的减退，因而试图通过自我否认来掩饰自己的退化。在面对过去曾轻而易举、现\
    在却力不从心的情境时，他们就会表现出困惑、混乱和狂躁。"]
  ],
  [
    [],[],[],[],
    ["34 编码的解释与43 编码的解释有着明显的不同，然而，它们的相似之处仍然是重要的:具\
    有这两种编码模式的个体都表现出情绪不稳定，量表4(Pd)揭示的持续而强烈的愤怒情绪被个\
    体控制和隐藏起来，转化为对被认同、亲近、肯定的需要，高分者因而强迫自已去控制、否定\
    愤怒、冲动行为。这两种编码模式的典型特征都是愤怒，具有 34 编码模式的人表现出突发且强\
    烈的情感爆发，而具有 43 编码模式的人则倾向于更加持续地付诸敌对行动。量表3 和量表4得\
    分的相对高低位置反映了受测者能在多大程度上控制和压抑自己的愤怒及冲动。若量表 3 得分\
    更高，显示他们有着更多的压抑;若量表 4得分更高，则显示他们有更多的冲动行为。\
    通常这些高分者渴望被照顾，却又同时要求独立，但伴随着独立的种种社会期望与要求却\
    令他们感到愤怒。具有此类编码模式的女性大多只关注生活的表层，缺乏耐心，对自己要求苛\
    刻。她们常有轻微的疑病样的唠叨和抱怨，用来表达自己的不满\
    量表 4 得分显著高于量表3得分的受测者的主导情绪为愤怒，常在酒精的作用下将那些被\
    压抑许久的愤怒以狂怒的形式爆发出来，有时甚至因为积愤而对家庭成员进行攻击或伤害。他\
    们平时表现得安静、内向，引起他们冲动或爆发愤怒的导火索却常常是很小的事情。他们的爆\
    发通常并非毫无道理或失去理性(除非量表6或量表8的得分也很高因为他们的愤怒来源于\
    长期积累的内部压力。有些人以一种循环的模式出现暴力爆发，有长期社会不适的行为，并且\
    这种模式很难改变\
    这两种编码模式都显示出受测者的自我中心、不成熟和易怒特性，他们婚姻不适，有性行\
    为问题，人际关系不稳定，出现过离婚、药物成瘾。针对这类高分者的核心咨询与治疗方案在\
    于帮助他们及时觉察到愤怒情绪，并以一种适当而及时的方式处理愤怒。\
    这种编码剖析图的受测者渴望适应环境、得到赞许，并很想通过巧妙操控他人的方式获得\
    赞许，因此他们常戴着一种“和善”的装饰面具顺从于他人。他们仍会表现出急躁和对他人的\
    挑剔，但对自己行为的结果却毫无觉察，会令身边的人感到恼怒和反感\
    具有 34/43 编码模式的个体对他人的拒绝非常敏感，并且会做出愤怒的冲动反应。同时，他\
    们将自己对拒绝的敏感性投射到他人身上，因而也使得自已很难直接拒绝他人。他们通常用迂\
    回或被动式攻击的方式表达愤怒和敌意，如在人背后谈论别人，用讽刺或开玩笑的方式表达愤\
    怒。若量表3 比量表4 的得分高，则受测者会有更多的被动式攻击，如讽刺和讲“幽默笑话”\
    并且随后又否认自己的愤怒。\
    具有34/43 编码模式的高分者往往能自觉地遵守规则,因为他们对任何一种社会非议都非常\
    敏感，希望自己被看作一个正直的、有道德的人;同时，他们对于自己对不满的表达也非常敏\
    感，常会通过迂回的方式表达不满情绪。若同时量表 1(Hs)的得分为高分，受测者会表现出\
    躯体症状，并倾向于通过操纵这些症状来获得二次收益:若同时量表 2(D)的得分为高分，受\
    测者可能会报告有抑郁症状，但更可能表现出一种被束缚的痛苦和愤怒;若同时量表 9(Ma\
    的得分为高分，受测者可能精神会亢奋，有寻求认同的冲动性行为，以及为避免过度冲动而出\
    现自我抑制性行为。\
    具有 34/43编码模式的夫妻十分敏感，他们对自己的问题缺乏洞察力，往往选择性地报告自\
    己的症状。他们恐惧亲密行为，但又需要性认同，因此在婚姻中出现不忠的问题相当普遍。具\
    有34/43 编码模式的青少年常被看作内向的，因为他们常与监护者和校方发生冲突，常出现盗\
    窃、吸毒、逃学和离家出走等行为，甚至还有自杀观念和睡眠障碍等。34/43 编码在问题青少\
    年的父母中也相当普遍。这些监护者通过强化孩子的某些行为来间接地表达对配偶的愤怒。对\
    于男性而言，量表 2、5、6 是最常见的得分第三高的量表:对于女性来说，得分第三高的量表\
    最常见的为量表2、6、8。\
    具有34或者43编码模式的人，可能有与酒精或药物滥用相关的慢性问题，即使其MAC-R\
    量表的得分不高，也要考虑这种可能性。具有 34 和 3 编码模式的人还可能出现一过性的偏执\
    发作，若量表 6 的得分为高分，可能是非理性偏执狂:若量表 的得分为高分，则可能是情感\
    解体。他们深度怀疑别人没有告诉自己真相。\
    在 34 编码中，其中量表3 得分更高的人很少去寻求治疗，他们的压抑、否认和对愤怒的过\
    度控制使自己往往不能通过领悟疗法进行自我救助。当愤怒爆发时，他们通常会产生过度攻击\
    行为，但随后又使之合理化。"],

    ["这种编码模式多见于受过高等教育的男性受测者，他们有点儿消极、烦躁，并具有文化和\
    审美取向，倾向于认为自已适应良好、快乐、平静、自信，但在他人眼里，他们更为执着和苛\
    求。他们以躯体问题应对压力，不会通过任何攻击性方式去行动，而是以智慧与艺术的方式去\
    行动。他们因对他人的关注和情感有强烈需要而产生不安全感，最为明显的特征是渴望追求道\
    德和文化水平的提升。若量表 0(Si)的得分为高分，那么他们显得害羞、焦虑和社会不安。若\
    整个临床量表剖析图处于正常范围内或略高于分界线，他们则是平静的、有教养的和有绅士风\
    度的。\
    35/53 编码常见于精神科患儿的父亲，这与他们使用否认、压抑和被动的防御机制相关。虽\
    然这些父亲看似关心家庭状况，但更倾向于将自己的私利和需求置于家庭之上。此种编码模式\
    在女性中非常罕见。\
    最常见的三点编码有 354/534和 356/536。在开始解释前，最好是先忽略量表 5(Mf)的因\
    素，如将 354 这个三点编码先看作一个34 两点编码，之后，再加入量表 5的解释。在该编码中\
    对于得分第三高的量表应在解释35/53剖析图时予以特别考虑。"],
    
    ["具有 36/63 编码模式的高分者对于批评极端敏感，对其所扮演的社会角色有强烈的自我意\
    识。他们控制得体的行为举止和外表反映了其想要得到他人赞许的心理需求，背后的真实情况\
    却是他们不信任别人，对他人感到紧张甚至怀疑。在合作和遵守规定的外表下，他们甚至对最\
    亲近的家庭成员都怀有长期的愤怒和怨恨。他们的愤怒往往被合理化，并成为一种自我保护的\
    方式。\
    有时这类编码剖析图与偏执的嫉妒和愤怒爆发等精神病症状相关，然而，大多数时候，这种\
    编码类型并不是与精神病相关的，而是反映了一种症性格。量表 6(Pa)的得分为高分反映了\
    这种歇斯底里的行为明显来源于受测者对批评极度敏感、坚持僵化的价值，并习惯使用投射防御\
    机制。\
    通常，他们的头痛和胃肠不适等躯体症状其实是自我过度控制和紧张的反映。若 工量表和\
    K 量表的分数很高，说明受测者自我控制严格，倾向于否认、僵化和抑制。他们对自我和周围\
    的人有很高的期望，会将自己的焦虑反应投射或者责怪到别人头上，他们具有自我中心和高防\
    御的姿态，以一种固执、僵化的方式来表达诉求，显示出对自我过度控制，并倾向于使用道德\
    评价来控制他人。实际上，大多数具有这类编码模式的高分者都被认为是难以相处的。\
    具有36/63编码模式的人对于性欲普遍存在抑制和矛盾的心理。他们需要赞许，但又害怕被\
    批评，因此要在自己身上大量投资，以使自己看起来更能吸引异性。然而，他们在建立亲密的\
    情感关系和性关系上有困难。这种编码类型的中心问题是愤怒。他们在生活中否认自己的愤怒\
    以至于将愤怒以合理化的方式积累起来，之后碰到一个小小的问题，就会出现情绪大爆发。\
    他们的生活特征是自我控制、拒绝批评和寻求赞同。作为儿童，他们倾向于少活动，并且\
    他们中的很多人看起来是合作和谨慎的。这两种编码类型大体上在女性中比在男性中更常见，\
    常见的三点编码有 364/634 和 369/639。具有这种编码模式的女性通常是主要的领导人，并且具\
    有这种编码模式的学生通常会被他们的老师所喜欢。\
    当量表6(Pa)比量表3(Hy)高5个T分以上(显性编码)时，受测者更为怀疑，更容\
    易受到伤害，更坚决努力地控制情绪，以便更好地保护自己。他们的行为特别僵化且有防御性\
    严酷的自我控制可能指向获得权力和名声。当量表 3的得分高于量表6的得分时，具有这类编\
    码模式的高分者尤其不会察觉到自己的愤怒，他们明显地倾向于自我关注和自我中心，通常还\
    伴随着受伤感。他们更愿意接受和顺从，很少进行权力斗争。若量表2(D)的得分作为第三个\
    高分进人编码，则具有这类编码模式的个体会明显地出现阶段性的愤怒与自我怜悯的转换，并\
    且感到受到不公平对待和伤害。\
    高防御性使他们觉得心理咨询师是在调查自己的错误，因此他们多只报告自己的那些社\
    会适应良好、正确和恰当的经历。他们总是证明自己有道理，并且责怪他人，这反映出他们\
    对批评和判断的恐惧。他们是高度理性化的人，需要针对特定的问题给予特定的建议。对这\
    类人的咨询与治疗的中心任务是帮助他们接受正常人的情感、愤怒、性欲、嫉妒和贪婪等，\
    因为童年经历告诉他们这些情感是错误的或是不好的。探寻他们早期被批评的经历，并用一些\
    技术帮助他们在受到不公平判断时能够表达愤怒情绪，会使他们的自我情感控制得到一定程度\
    的放松。"],
    
    ["此类编码不太常见，它与紧张、焦虑、失眠、慢性病以及由恐惧或焦虑引起的不适等有着\
    关联，伴随这些症状的还有未得到解决的对依赖的渴望和不满足感。具有这类编码模式的高分\
    者否认存在心理问题，这种一致的防御机制明显地阻碍了他们的自我察觉。最常见的三点编码\
    为372/732、374/734和371/731。\
    这种编码剖析图反映出受测者总是在恐惧被人抛弃，常伴随情感上的不安，或者处于愤怒\
    的边缘，会被没有特定刺激的焦虑所困扰。量表 3(Hy)和量表 7(Pt)的得分高反映了他们对\
    于处理冲突或对抗的恐惧，因而他们不愿意承担责任。他们总担心会发生重大事情，尝试以讨\
    好或屈从的方式得到情感上的支持和减少冲突，并满足自己的依赖需要。他们对他人(尤其是\
    在家庭成员之间)进行自我表达很困难，躯体上的不适也很普遍，若量表 1(H)的得分是高\
    分则尤为明显。他们羞于表达冲动或攻击性情感，并为此感到明显的困扰。他们在生活中总是\
    想要得到赞同和保证，害怕在表达任何愤怒或者自私欲望时会被他人用情感抛弃来进行惩罚。\
    如果量表 2(D)是第三高的编码分数(372/732表示受测者存在着更多的自我贬低和\
    损，随后的焦虑会导致失眠、难以集中注意力和普遍的低效率。如果量表 9(Ma)的分数较高\
    受测者的焦虑则经常集中出现在成就感和被赞同感丧失之后。如果量表L和K的分数较高，他\
    们会有更多的否认，不接受心理学解释，有情感压抑和缺乏洞察力。"],
    
    ["这种编码类型不太常见，男性中更少见。量表 3(Hy)的得分高反映了神经质方向上的\
    症性防御和瘪症性人格;量表8(Sc)的得分高反映了精神病样的思维过程。这两个量表的组合\
    显示，高分者正在使用意症性防御的方式抵抗潜在的精神病样症状。\
    量表 8分数高的人在思想和行为上都是怪异和乖僻的。他们在集中注意和思考、记忆和做\
    微小决定方面都有困难。他们对情感有一种夸张的需要，但是又惧怕陷入依赖关系中，所以当\
    他们试图从别人那里得到情感回应时，基本上采用一种不成熟的方式，这反而会让他人更加远\
    离他们。\
    许多人抱怨自己有过奇怪的经历，他们常在不恰当的时候表现出奔放的思想和强烈而又波\
    动的心情;当出现精神病症状时，他们会粗鲁无礼，会有脱离现实的感觉，有不恰当的情绪;\
    当量表 1(Hs)的得分高时，他们可能会存在视力模糊、头晕、麻木和头疼等躯体症状。一些\
    人有短暂、强烈的性相关冲动，过后就一点儿都记不起来了，这些症状会很快消失，之后他们\
    又重新恢复了镇定。当他们受到威胁时，这种猿症性的防御行为和扰动思想就突然地爆发。在\
    有组织、秩序井然的情境中，他们功能良好，不太会有这种精神病样的表现，但仍然存在非社\
    会化的症状，如不恰当的感情体验、奇异的反复思考和变化无常的幻觉等\
    具有38/83 编码模式的难以进行自动化的谈话和思维，他们很容易断片和分心，这种断片可\
    能反映出引起强烈情感的物体和关系对其产生了内部的干扰。他们在亲密关系方面有很大的困\
    难，会卷人与宗教或性相关的事件中，表达愤怒的方式不恰当仍然是主要问题。虽然他们看起\
    来平淡，但情感基调比较沮丧，并将内部惩罚作为应对这种沮丧的典型反应。他们也被认为是\
    焦虑、紧张、无法停止沉思，很容易受到威胁，容易害怕并有恐惧症。最常见的三点编码有\
    384/834、381/831、387/837和382/832\
    在临床上，具有 38/83 编码模式的高分者一般不被看作躯体疾病患者，但他们仍然会报告有\
    大量的躯体不适。在家中排行最小的孩子容易出现此类编码，他们的抚养者中可能存在着酗酒\
    者或者精神疾病患者:通常他们的父亲是慈爱的，但又比较专横。"],
    
    ["通常，具有 39/93 编码模式的高分者都是有活力、爱交际、外向和非常自信的人，虽然其人\
    际关系可能非常肤浅(尤其是当量表0的 T分小于 40 分时)。他们很有控制心和野心，精力充\
    沛，善于言谈，经常转换话题，否认有量表3(Hy)和量表9(Ma)反映的症状。量表 3(Hy)\
    的得分高表示受测者过度社会化(过分自控)和对认同的强烈需求，量表 9(Ma)的得分高也\
    显示了受测者对认同的强烈需求。两者加到一起，表示具有这种编码模式的人具有非常强烈的\
    获得赞同的内部压力，以及被过度控制的愤怒情绪。有时强烈感情会突然爆发，甚至会具有攻\
    击性地指向周围的某个特定的人。具有 38/83 编码模式的人被认为是完美主义者，压抑和否认是\
    其典型的防御机制。他们能够很快熟悉新的情境并取得领导地位。无论是精力发泄，还是对社\
    会认同的需要，或者作为抚养者，他们通常都具有很强的控制感，很难与有不同价值观的人长\
    期相处。\
    临床上，他们会显示出焦虑和严重抑郁的发作经历，伴随着心悸和下腹部的症状。这些躯\
    体症状不仅反映了高分者对自己的过度控制，还反映了他们把注意力从焦虑转移到躯体症状上\
    的情况。若量表 1(Hs)的分数较高，说明受测者会随着压力水平的变化而出现很多不同的躯\
    体症状:若MAC-R 量表的分数较高，则显示受测者会有成瘾的倾向。"]
  ],
  [
    [],[],[],[],[],

    ["具有这种编码模式的受测者通常都是男性，女性很少在量表 5上得高分。这一编码的解释\
    需要同时考虑受测者的年龄、受教育程度和性别。\
    处在青春期的男性出现45/54这种编码模式，预示着他们会突然发怒甚至有突发暴力行为\
    他们不喜欢规则、法规和权威，并且有逃学、休学和留级的经历，当量表 4比量表 5的分数更\
    高时尤其如此。男性青少年会明显反叛社会传统，并且以违抗和挑战规则、法规为乐。虽然他\
    们对挫折的耐受力很低，也很少会像少年犯那样去犯法，但他们的冲动行为也会带来麻烦。少\
    数具有这种编码模式的青年人会公开地出现反社会行为。量表 5高分部分地抑制了量表4 高分\
    表现出来的冲动行为。这些青年人爱交际、外向，并且一般情况下也会得到同伴的喜爱。他们\
    在治疗中表现得很和谐，有很强大的自我力量，并且预后较好。\
    具有这种编码模式的成年人受教育程度不是很高，大多数人比较自恋和自我关注，他们的\
    兴趣通常是不寻常和多样的，还以不遵守规则为乐，会因违背社会传统而高兴。这种公然的反\
    抗在量表 4(Pd)的得分升高时，尤其是当量表 9(Ma)的得分也同时升高时会更加明显。具\
    有这种编码模式的一些人可能有同性恋倾向，但这种编码不能被用作诊断同性恋的指标，因为\
    如果他们想隐藏自己的同性恋倾向，是很容易做到的。\
    具有此类编码模式的受过高等教育的人不太会有自恋式的破坏规则行为，相反，他们更可\
    能会参与一些反政府的社会抗议事业或运动。他们非常理想主义，能够非常清楚和有效地表达\
    自己的理想。控制和依赖是这些人的突出问题，尽管他们通过参加抗议活动来使自己更显独立\
    和自足，但他们同时还特别想要表达依赖性需求。当量表 3(H)是得分第三高的量表时，他\
    们有更强的过度控制、依赖(或被动)和洞察力缺乏(参见345/435/534编码):当量表9(Ma)\
    是得分第三高的量表时，他们会更强调行动，主导各种对环境和人的控制\
    具有45和54编码模式的女性通常以量表8(Sc)或量表9(Ma)为得分第三高的量表\
    她们强烈拒绝被动塑造自我形象，因此这些女性会表达自己对愤怒的反抗，会在女同性恋关系\
    中扮演男性角色。在乡镇地区，这种编码剖析图显示了一种非传统女性角色的生活方式，她们\
    更有兴趣从事那些需要积极自信和务实、机械的行动导向的工作。"],

    ["这种编码在女性中更为常见，量表 2、量表3 或量表8通常是得分第三高的量表。她们主要\
    的特点是愤怒、抱怨、不信任、闷闷不乐、急躁，对他人的批评和要求高度敏感，并且常责怪\
    他人。她们能感觉到含蓄的拒绝和批评，并在资料不充分和较少做出长远考虑的基础上得出被\
    拒绝的结论。她们的思考聚焦在自已如何被他人伤害和忽视了，以及如何去保护自己或寻求报\
    复等，却很少思考是如何导致出现当下的困境或问题的。她们与人交流有问题，在家庭冲突中\
    常常指责家人，会有药物滥用或酗酒等问题\
    具有此类编码模式的青年人总是与父母或权威者存在持续和严重的冲突，他们自我放纵冲\
    动行为，并没有深谋远虑或者制订仔细的计划。他们公开地挑衅别人，违抗和不尊重他人，消\
    极和爱争论，并且很少对自己的行为负责。\
    偏执、怀疑、不信任和胡乱猜测与推论是具有 46/64 编码模式的男女性受测者的共同症状\
    此类成年男性表现出与精神病或者疑似精神病相关(见468/648编码)或者与边缘型人格相关\
    (见462/642和463/643 编码)的症状。当量表4(Pd)的分数高于量表6(Pa)的分数时，他们\
    在家庭生活和工作中都有严重的困难，常常愤怒:当量表6的分数高于量表 4 的分数时，他们\
    的妄想特征会变得更加明显。虽然这些男性一般会控制自己的愤怒，但一旦恶性爆发，会让周\
    围的人感到吃惊。具有 46/64 编码模式的女性有时会表现出与精神病或者疑似精神病相关(尤其\
    是当量表8 的得分高，K 量表的得分低时)的症状，但她们与被动攻击型人格有更多的关联(见\
    高4/低5编码)。她们缺乏洞察力，总是制造麻烦，并且喜爱责怪他人。"],

    ["47/74 编码通常会掺杂有很多其他的高分量表，所以很难被归纳为一类相似的群体。量表4\
    和量表 7的高分解释相互矛盾，量表 4 的得分高显示了受测者不敏感、反叛、见诸行动和对权\
    威人物的愤怒等;量表 7的得分高则反映了受测者沉默、关注别人的反应、内疚和焦虑。两者\
    结合时，量表 7高分的特点就被压制和控制了。当他们感到焦虑时，需要得到别人的安慰，并\
    显得有些被动甚至爱讨好别人;但量表 4 高分表明受测者对人又是不信任的，所以他们从别人\
    那里得到的安慰很少能起到长期的效果。\
    这种编码类型显示了一种循环式的行动模式。紧张和焦虑首先开始积累，压力随之增加\
    他们便冲动地使用了一些事与愿违的方式去降低自己的紧张与焦虑，然后其又变得更加焦虑\
    内疚和自责，从而又一次开始了这种循环。这种编码剖析图显示了一种难以抑制的行动模式\
    他们缓解紧张的行为是一种接近与回避式的冲突。性放纵、赌博、酗酒是他们常用的缓解紧张\
    的行为，但这些行为往往事与愿违，并且引起内疚和自责，最终又导致了进一步的冲动行为。\
    伴随着内疚和冲动行为的循环，他们还在依赖和独立之间产生强烈的冲突。他们会感到不安全\
    对他人的关注和安慰有强烈的需要，但因为对他人的不信任，他人的安慰一般不会起作用。常\
    见的三点编码有274/472和478/748。"],

    ["具有这种编码模式的成年人总表现出严重的精神健康问题，主要为人格障碍或精神分裂症\
    他们的核心特征是不信任他人，有很强的社会疏离感，很难与他人形成情感联系。若 F量表得\
    分也高，则反映出他们心理内部的混乱，此时 VRIN 量表可能会达到中等程度的高分，但这并\
    不必然说明剖析图是无效的，并不是所有具有 48/84 编码模式的人都是精神病人。一些精神病人\
    会有幻觉、错觉、偏执倾向和显著的精神分裂式的表现，另一些精神病人则有边缘型人格障碍\
    具有48/84 编码模式的高分者中有一些不是明显的精神病人,他们可能会暂时性地失去对现实情\
    境的觉察和检验能力，并表现出扩散化的偏执观念与行为。\
    与他人在情感上保持距离会使他们在思想和行为上看起来都很异类、不容于人。行为不可\
    预料和情绪化使他们很难与人相处，缺乏共情能力。莫名其妙的沉思和敌对的情绪使其与外界\
    具体事件相脱离。他们不遵守社会判断和规则、冲动惹事，学习和工作的绩效不良，还可能会\
    报告自己有过性放纵的经历。\
    在具有 48/84 编码模式的人中,一部分人会变得孤立,另外一部分人则会参与到犯罪活动中\
    具有这种编码模式的男性更可能会卷入犯罪行为中或者是出现性变态。当量表6(Pa)和量表9\
    (Ma)的分数较高时，他们在实施犯罪行为时，经常是粗暴、残酷和冲动的，可能会有性攻击\
    或者杀人的举动。\
    具有这种编码模式的女性通常有未婚先孕的经历(并且是不想怀孕的结果 )，与社交失败者\
    比起来，她们更倾向于与不令人满意的男性有暧昧关系。她们有很低的自尊，因此与那些看起\
    来不令人满意和接受虐待的人在一起时会感到更为舒服。她们有性侵犯混乱的倾向。\
    在一些具有 48/84 编码模式的高分的文化程度较高的门诊病人中较少见到有反社会或冲动\
    的行为，相反，见到更多的是自尊受到伤害、对他人深刻的不信任、在亲密情感上存在困难\
    以及在人际关系中的自我挫败等行为。这种编码还显示了受测者阶段性的偏执、情绪化、恐慌\
    和与他人保持情感距离的倾向。受过良好教育的受测者不一定有较严重的社会问题，但是情感\
    生活存在一定的混乱。如果K量表的得分高，而 Es 量表的得分正常或稍高，具有 48/84 模\
    式的高分者一般有性方面的问题以及混乱的人际关系，但是很少有反社会的冲动行为。\
    对于成年人来说，48/84 是一种有自杀倾向的编码类型，反映这些受测者的自尊受伤严重，\
    有愤怒和疏离，常有物质成瘾。这种编码很普遍地存在于青年人中，反映了他们会出现短期\
    的适应障碍，对于有些青年人而言，也可能反映了其有精神病前期症状。他们像成年人一样愤\
    怒、不信任和不快乐，思维紊乱，有持续的人际关系问题和不遵守规则的冲动。这些青年\
    学习成绩上都是很差的，有的可能是少年罪犯。同时，食欲减退、精力过剩和大小便失禁\
    经历也可能会存在。"],

    ["对这种编码类型的解释要小心。许多受测者都可能在量表 4(Pd)和量表9(Ma)上得高\
    分，他们会在信任他人、建立亲密关系、长期坚持目标等方面存在困难。他们可能是自恋的\
    冲动的、操纵的和权力指向的，倾向于用权力和控制来看待人际关系。许多在量表 4 和量表9\
    上得高分的受过教育的受测者甚至会有很高的社会地位，并且不会以反社会的方式行动。然而\
    聪明的、受过教育的具有 49/94 编码模式的受测者与上述这些受测者非常不同，他们会倾向于与\
    权威者进行长期的抵抗与不合作。\
    对于成年人和青年人来说，这种编码总是与寻求激励、自我放纵、对限制规则或法令表达\
    不满相关。他们以自我为中心、自恋、自私，基本上不会接受外界强加到他们头上的责任。虽\
    然有时也会为完成自己的目标而做出很多努力，但他们更会把大部分精力都集中在寻求快乐\
    兴奋等短期目标上。他们拥有变动起伏的价值观，或者通过构建自己的价值体系来满足自己的\
    需要，并会炫耀自己的社会标准和价值观。一些具有 49/94 编码模式的聪明的受测者会娱乐般\
    不着边际地违反或操纵法律和规则。\
    在人际交往和社交场合中，他们通常会给别人留下讨人喜欢的印象，因为他们充满活力和\
    自信，并且不会表现出缺乏安全感和焦虑。但长期熟识后，这些人一般都会显示出浅薄和肤浅\
    以及不负责任和不值得信任，从而被他人疏远。这些人有较差的婚姻关系，许多人都有婚外情.\
    些人还会有明显的精神病性症状，如妄想或幻想，这类精神病的发作与过多地饮酒相关。\
    具有这种编码模式的青少年的挫折耐受力很低，经常与自己的家长发生冲突，经常逃学\
    他们表现出冲动、鲁莽和挑衅的行为，如撒谎、欺骗或者偷窃。药物滥用和酬酒现象在这类人\
    中普遍存在，青少年还会经常惹上法律方面的麻烦，或者做出损害家庭名誉的社会行为。他们\
    在MAC-R量表上也可能得高分\
    若K量表的得分大于50分，具有 49/94 编码模式的受测者可能很少出现青少年期的犯法\
    敌对或者反社会的行为。若量表 2、量表 7或量表0的分数较高，且量表5(Mf)的分数也较高\
    时，49/94 编码剖析图的女性做出反社会行为的可能性会增加。当量表 0的得分小于 50 分时\
    他们倾向于自我表演、倾心权贵事物，且行事武断。一些社会化程度较高的具有 49/94 编码模式\
    的受测者可能会成为社会运动的发起者，尽管他们很肤浅，但通常会展现出特殊的魅力。有时.\
    这些人会通过操纵别人做出反社会行为，而不是自己公开实施反社会行为。对于男性来说，量\
    表8、量表5或量表3通常是得分第三高的量表:对于女性来说，量表8、量表3或者量表6是\
    最常见的得分第三高的量表"]
  ],
  [
    [],[],[],[],[],[],
    ["这种编码模式常见于男性。一般来说，这些男性看起来有不安全感，害怕与别人产生情感\
    上的纠缠。他们是神经质和敏感的，他们的感情很容易受到伤害，看待事情的视角狭窄、个人\
    化，且不能直接表达自己的愤怒。这种敏感可能会掩盖他们的偏执观念，总认为别人嫉妒和拒\
    绝自己。他们的行为被动、幼稚，与他人的关系疏远。当别人对其有所要求时，他们可能会变\
    得急躁。相反，女性可能变得粗鲁、直接，有判断力和控制力。具有此种编码模式的多数人都\
    强烈渴望在教育和工作事业上获得成绩。\
    如果分数第三高的量表的得分大于65 分，通常可先忽略量表 5(Mf)而把其他两个量表\
    当作两点编码(例如，564/654 三点编码可以按 6/64 两点编码解释)然后再加上量表5高分的\
    解释。"],
    
    ["此种编码模式亦多见于男性受测者，他们的主要特征为犹豫不决、担心、内省、紧张、不\
    快乐和需要有所保证等。具有这种编码模式的男性很容易感到窘迫和羞怯，感情很容易受到伤\
    害，并且在与异性的关系中经常感觉到自身的不足。受教育程度低的男性更容易焦虑或抑郁.\
    时刻关注自身的缺点。女性很少出现这种编码。较之量表 5 单独高分的女性，有此编码模式的\
    女性要有更少一些野心和更多一些自我反省。她们热衷于进行智力竞争。\
    对于男性和女性受测者来说，都可以先通过忽略量表 5，只考虑两点编码的意义，然后再加\
    上量表5高分的解释，从而得到更完整的解释。"],
    
    ["有这种编码模式的男性非常内向，并且花费大量时间对关于生活意义的哲学命题或者抽象\
    观点进行思考。他们中的许多人都会感到困惑、不快乐、与他人疏远以及和家庭人员存在冲突\
    具有这种编码模式的男性很可能有酒精滥用、精神疾病和躯体虐待的家族史。一些人有从童年\
    开始就有的精神分裂经历。虽然很多人不是精神病人，但他们通常报告抑郁、感觉异常和迷信\
    宗教。虽然一些人被认为是有创造力的，但大部分人还是被他人认为奇怪、古怪、难以相处\
    有性别取向冲突，以及家庭关系不和谐等。\
    有这种编码模式的女性会有不寻常的想法和行为，她们注重控制别人，以使自己的事情更\
    为顺利。如果没有控制别人的话，她们与别人在一起时就会感到疏离和不舒服。具有这种编码\
    模式的女性青少年可能存在着家庭或者学校中的行为问题或者法律问题。"],

    ["对于男性来说，在这种编码中，量表 5的高分减小了他们在公开场合做出冲动行动的可能\
    性，因为他们更倾向于使用理智化、否认和合理化等防御机制。他们更可能出现情感上的依赖\
    和在亲密关系中缺乏自信，他们需要获得他人的支持，并且在亲密关系中也需要得到很多保证\
    尤其是量表3(Hy)的得分也很高时则更为明显。\
    对于女性来说，这种编码中量表 5的高分增加了她们公开表达自已志向的可能性。但这种\
    志向总是会停留在口头表达上，实际行为却依然依赖外界。这些女性精力充沛、竞争、自信\
    不抑制、敢于冒险，并且可能是自我中心的，当她们的欲望被阻止或质疑时，就会感到急躁。"]
  ],
  [
    [],[],[],[],[],[],[],

    ["这是一种相当不常见的编码模式，通常还伴以量表2(D)或量表8(Sc)作为得分第三高\
    的编码量表。具有这种编码模式的人是高度敏感、紧张、焦虑和有很多怨恨的。他们极端关注\
    他人的批评或否定，对失败极为关注。这反映了他们持续担心被判断和评估，担心与他人发生\
    人际关系对抗。他们有紧张、杂乱的人际关系，感觉受到了他人不公正的对待。虽然他们可能\
    会因此感到自卑和内疚，但作为自身的一种防御策略，他们也可能会很快反过来评价别人。当\
    量表 2和量表8的T分都大于75 分，且量表6的得分高于量表7的得分时，他们或许会出现蒙\
    绕反复、难以抑制的精神病症状。"],
    
    ["具有 68/86 编码模式的青年人和成年人身上都表现出了严重的心理病态，通常还伴随着 F\
    量表和相关内容量表的高分。F 量表的高分通常显示受测者对于大量不同寻常经验的认同。大部\
    分有此编码模式的受测者的量表 7(Pt)和量表4(Pd)可能是得分第三高的量表。当量表6和\
    量表8的T分都远大于65分，且两个量表的得分比量表7至少高出10个T分时，这种三点编\
    码便构成了所谓的妄想峰谷。只要有安想峰谷图形存在，无论它们是不是整个剖析图中的最高\
    峰，也都要考虑受测者患有妄想型精神分裂症的可能性。68/86 编码类型显示受测者很可能以前\
    已患有精神分裂症状，此时出现的编码反映了他们病理症状的反复出现\
    具有这种编码模式的高分者对别人总是怀疑和不信任，很少甚至没有朋友。他们高度怀疑\
    别人的动机，与他人的人际交往极不融洽，更喜欢独处。值得注意的是，他们中有许多人可能\
    会被诊断为妄想型精神分裂症。他们情绪化、敌对、不可预料、消极，有不恰当的情感表达.\
    感觉自卑和内疚。他们的急躁和愤怒常使他人反感而疏远。\
    他们的思维问题包括过度概括、错误理解和明显错觉等，思维的内容也稀奇古怪，通常不\
    被他人理解。情感表达不恰当，过度理想化，不现实的想法，怀疑、不信任，注意集中困难\
    与现实脱节，混乱的人际关系等，都在他们身上普遍存在，还可能伴随着抑郁、恐惧和恐惧症\
    他们通常存在性欲的内部冲突，主要是性欲得不到满足。如果已婚，他们与伴侣在情感上是疏\
    远的。他们的行为往往不可预测，尤其是当量表 4(见468/648 编码或量表9的分数也高时则\
    更为明显。\
    值得注意的是，许多有这种编码剖析图的成年人虽然有躯体疲劳、效率不高和注意方面的\
    问题，也可能有过在没有任何诱发事件的情况下出现精神病症状的经历，但他们仍然能处理好\
    自己当下的工作及职务。具有这种编码模式的青年人脾气粗暴(尤其是当K量表的T分小于50\
    分时 )，同伴关系很糟糕，长时间幻想，学业成绩不良，有受到过严重体罚的家庭经历。对于感\
    受到的敌意尤其敏感，若他们认为自己受到了威胁，很可能就会出现严重的愤怒情绪爆发。"],
    
    ["这类编码不太常见，具有该编码模式的受测者存在安想和夸张。夸张症状反映了他们心里\
    的不安全感和对未知的恐惧感，妄想症状则反映了他们对批评的恐惧。量表 4( Pd)或量表 8( Sc)\
    是最常见的得分第三高的量表。有这种编码模式的人是紧张的，他们对于很小的刺激都有过度\
    的反应，就好像它们威胁到了其人身安全一般。这些人很难充分地表达自己的愤怒情绪，他们\
    可能会以刚硬的行为方式表达出来。他们经常感觉被不公平地对待和迫害，许多人有家庭冲突\
    和婚姻问题。可能出于对被评判的防御，他们严格奉行道德评判标准，这使得他们显得比较难\
    以相处。他们形成了一种充满内部冲突的生活方式，既要获得他人的支持和接受，又对自己被\
    他人控制和评判表现出愤怒。\
    他们过度控制自己的情感，又表现出过分花哨、兴奋、急躁和怀疑的特点，还要不断地解\
    释(评判)他们正在做的事情的意义和必要性。他们的母亲可能对其过度保护和纪律严格，但\
    父亲则可能放任、不负责任。\
    具有这种编码模式的男性和女性受测者都有吸引异性注意力的强烈需要，然而，他们又恐\
    惧建立深度的亲密关系，从而保持与他人的距离。他们在思维和注意力方面普遍存在问题，并\
    伴随着困惑和急躁。当安全感受到威胁时，他们可能会出现夸张的、怀疑的和疯狂的恐慌，并\
    可能会出现暴力行为，如果量表8和量表4分数也高的话，则更可能会如此"]
  ],
  [
    [],[],[],[],[],[],[],[],
    
    ["这种编码常见于那些有着严重精神错乱且急需心理援助的受测者中，他们中的一半人多被\
    诊断为精神病，另一半人则多被诊断为神经症。在成人中，当量表 8 的得分高于量表 7的得分\
    时，更有可能患有严重的精神病。出现频率较多的得分第三高的量表分别是量表 2(D)和量表\
    4(Pd)，其解释可参见278/728和478/748编码。\
    具有这种编码模式的受测者充满了担忧、焦虑、紧张和过度思考。他们无法思考或有效地\
    集中注意力。他们过度的内省和过激的想法可能会伴随着高涨而混乱的情绪，可能会悲痛过度\
    强烈以至于出现失眠和自杀想法，因此要对此类编码者进行自杀潜在可能性的评估。当量表 8\
    的得分高于量表 7的得分时，受测者会经常幻想奇异的自杀方式，且有自残行为。他们会出现\
    幻觉或错觉、情感淡漠，难以保持现实感，报告有多种多样的躯体症状。也有一些人会出现功\
    能性损伤、却没有出现精神病性行为。\
    由于缺少信心，他们很害羞，感到不适应和人际关系敏感，尤其是在涉及异性关系时更为\
    突显。由于过度焦虑，他们经常会出现性功能低下。尽责、害怕以及过度担忧经常导致他们只\
    有普通或较低的成就。许多人借酬酒来缓解焦虑。78 编码和 87 编码都反映出受测者内心存在着\
    一种深深的伤痛，他们知道并担心由于自己的过失引起的丢脸事即将被别人发现和掌握。\
    尽管78编码和87编码有很多相似之处，但7编码者不太可能会出现精神病症状，他们常\
    被描述为焦虑、强迫和具有精神分裂型人格。量表 7 的得分升高表示他们极其焦虑，可能会出\
    现人格解体以及情感隔离的症状。他们有非常消极的自我形象，好像能预期到灾难的到来。他\
    们能迅速地感觉到他人的批评和评价，或者毫无缘由地搞僵与他人的关系。87 编码者中则会出\
    现更多类似于精神病的症状，坚信自己受到了伤害，这种强烈的信念导致他们的心理治疗受阻\
    并加剧了他们对心理治疗的否定和拒绝。"],
    
    ["这是一种相对罕见的编码模式，具有这一编码模式的受测者在兴奋时就会感到焦虑。他们\
    恐惧、持久担忧、对事情反应过度，无法放松自已或是从对自己的恐惧与不适应感的持久沉思\
    中摆脱出来。他们在极度紧张时会出现肌肉痉挛、背痛和失眠等症状。即使量表2(D)的得分\
    不高，有些人也可能会有抑郁的症状，这反映了他们由于长期焦虑和担忧而出现了情绪衰竭症\
    状。量表8(Sc)或者量表4(Pd)常为该编码的得分第三高的量表。\
    具有这种编码模式的青少年表现出对他人关注有强烈的需要，但又极度害怕因依赖他人而\
    失去自我控制。依赖和独立是这些年轻人面对的主要冲突。"]
  ],
  [
    [],[],[],[],[],[],[],[],[],
    ["当F量表的得分很高时，通过比较低分的工量表和K量表。这种编码可以帮助施测者判断\
    受测者是一种诚实的态度，还是一种自卑、不适应和低自尊的态度，抑或是一种混乱、狂躁的\
    态度。理论上，这种编码主要表明受测者有严重的精神病性症状，成年人更是如此。因此，具\
    有89/98 编码模式的受测者一定处于混乱的思维之中，尽管他们在效度量表K 量表和L量表的\
    得分均较低。\
    具有此编码模式的受测者极易过度思考，会花大量时间进行幻想、做白日梦，很喜欢沉思\
    也可能存在紧张、兴奋和失眠的症状。他们常高谈阔论，有多动行为、不稳定的情绪以及奔逸\
    的思维。在人际交往情境中( 如在治疗会诊时 )，他们很不专心，会从一个话题跳到另一个话题\
    由于这些人很难长时间停留在一个话题上，心理咨询师或治疗师无法掌握问题的根本，因而治\
    疗效果往往不佳。\
    他们在与异性交往的过程中普遍表现出人际关系不适。大多数人都害怕且避免与他人亲密\
    经常质疑他人的动机。他们经常希望能获得更高、更多的成就，但实际上往往表现平常。他们\
    在压力下可能会变得混乱无序。这种编码模式分数的进一步升高显示受测者出现错觉与幻觉。\
    这种编码模式较常见于 27 岁以下的年轻人身上，最常见的三点编码有 894/984、897/987和\
    896/986"]
  ],
  [
    [],[],[],[],[],[],[],[],[],[]
  ],
]