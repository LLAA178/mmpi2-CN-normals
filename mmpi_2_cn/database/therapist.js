// 10×10 矩阵：索引 0..9 分别对应
// 0 社会内向, 1 疑病, 2 抑郁, 3 癔症, 4 精神病态, 5 性别角色, 6 偏执, 7 精神衰弱, 8 精神分裂, 9 轻躁狂
let therapistArray = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => ''));

// 89/98（8-9）
therapistArray[8][9] = "您在现实与幻想之间徘徊，情绪波动剧烈。您可能在思维上显得奇异、跳跃，情绪时而高涨、时而低落。您倾向逃避现实压力，偶尔以幻想或自我沉浸缓解焦虑。此类型个体常表现为分裂样与轻躁混合特征，社交困难、情绪不稳、冲动且难以持久专注。";

// 90/09（9-0）
therapistArray[9][0] = "您外向、活跃、精力充沛，但缺乏持久目标。您容易被新奇事物吸引，却难以坚持到底。您倾向以幽默与热情掩饰内在的不安与孤独。此类型个体常伴有冲动、注意力分散与社交表演性特征。";
// 56/65（5-6）
therapistArray[5][6] = "您倾向于以理智与逻辑来维持控制，但在情感层面感到压抑与孤立。您追求完美、坚持原则，却因此常感紧张与不安。您极度在意他人评价，害怕出错，对批评异常敏感。您在人际中保持克制，避免冲突，但压抑的愤怒与焦虑会在压力下爆发。您可能感到内在矛盾：既想被认可，又担心暴露脆弱。此类型个体常表现出理智化防御与内向完美主义倾向。";

// 57/75（5-7）
therapistArray[5][7] = "您外表镇定理智，内心却充满焦虑与紧张。您倾向压抑情绪，追求秩序与理性，避免冲突。您担心失控，因此不断自我约束与反思。您的高标准常令您感到疲惫。您可能在身心上表现出紧绷、失眠或胃肠不适。此类型个体常为勤奋、尽责的完美主义者，对失败极度敏感。";

// 58/85（5-8）
therapistArray[5][8] = "您想象力丰富、感受力强，却也容易脱离现实。您倾向沉浸于内心世界，体验幻想、孤独与矛盾。您可能感到与他人疏离，不易信任，偶尔会出现思维游离或轻微幻觉体验。您渴望理解，却又害怕他人接近。此类型个体常见于情感敏感与艺术气质强者，也可能伴精神分裂样特征。";

// 59/95（5-9）
therapistArray[5][9] = "您活跃、热情、外向，但情绪起伏剧烈。您渴望被关注，喜欢展示自我，却也容易冲动。您在社交中充满魅力，但缺乏耐心与稳定性。您厌倦平凡，追求刺激，容易在兴奋后陷入空虚与焦虑。此类型个体常兼具自恋与轻躁特质，难以维持长期目标。";
// 78/87（7-8）
therapistArray[7][8] = "您常常处于焦虑、紧张与困惑之中，思维容易混乱，注意力难以集中。您可能体验到过度的担忧、失眠、疲惫及各种身体不适。您常感孤立、缺乏支持，易陷入绝望与被迫害感。此类型个体常表现出精神分裂样或焦虑性特征，既渴望理解又害怕被控制。您有时会感到周围世界变得不真实或陌生，对他人信任不足，思维易受情绪干扰。";

// 79/97（7-9）
therapistArray[7][9] = "您精力充沛却极度焦虑，思维奔逸，难以停下。您可能表现为高效率与冲动并存，情绪波动剧烈，容易陷入过度工作与自我耗竭的循环。您表面积极乐观，实则被内在紧张与自我怀疑驱动。您倾向以忙碌逃避焦虑，偶尔出现短暂的轻躁或愤怒爆发。";
// 67/76（6-7）
therapistArray[6][7] = "您容易产生怀疑与焦虑，对周围世界保持警觉。您对他人动机不易信任，倾向于防御性地解释他人言行。您担心被误解或背叛，常陷入反复思考。您自我控制强，却因此更加紧张，难以放松。您可能因长期戒备而感到疲惫、孤独。";

// 68/86（6-8）
therapistArray[6][8] = "您对他人极度不信任，易感被害或被阴谋。您常感孤立、紧张，思维易陷入过度推理。您可能经历幻觉、妄想或被控制感。此类型个体往往情绪不稳，社会功能受损。";

// 69/96（6-9）
therapistArray[6][9] = "您充满活力与激情，但也容易激动与敌意。您强烈坚持自己的观点，不容异议。您对批评反应剧烈，倾向以攻击性或讽刺方式回应。您表面自信，内心却焦虑不安，害怕失控。此类型个体常表现出易怒、固执与人际冲突。";
// 34/43（3-4）
// English: Persons with the 34/43 code type have many of their problems rooted in deep-seated, chronic hostility toward family members. They crave attention and approval, are extremely sensitive to rejection, and react to criticism with anger. Outwardly, they appear compliant and socially appropriate, but underneath they are quite rebellious. Sexual maladjustment, marital instability, and promiscuity are common. Suicidal thoughts and attempts are not rare, often after episodes of heavy drinking or acting out. Personality disorders, especially passive-aggressive type, are frequent.
therapistArray[3][4] = "您的许多问题根源在于对家庭成员深层而持久的敌意。您渴望他人的关注与认可，对拒绝极为敏感，面对批评会以愤怒回应。表面上您显得顺从、合群，但内心却充满反叛。您在人际与性关系上常感困扰，婚姻关系不稳，性放纵的情况并不少见。自杀念头与企图在此类型中亦较常见，尤其发生于酗酒或冲动行为之后。此型人格障碍常见，尤以被动—攻击型人格为多。";

// 35/53（3-5）
// English: Persons with the 35/53 code type exhibit high moral rigidity and sexual conflict. They may feel guilty about sexual impulses and express anger indirectly. They are often perfectionistic, self-critical, and repressed. Somatic complaints are frequent.
therapistArray[3][5] = "您表现出高度的道德严格与性冲突。您可能因性冲动感到内疚，并倾向于以间接方式表达愤怒。您往往追求完美、苛求自我、压抑情感，常伴随躯体化症状，如头痛或胃肠不适。";

// 36/63（3-6）
// English: Persons with the 36/63 code type may report moderate tension and anxiety, with headaches or gastrointestinal complaints, but usually not severe or disabling. Much of their difficulty arises from deep, chronic hostility toward family members, which they do not directly express and are often unaware of. When they become aware of this hostility, they rationalize it as justified. They tend to be rebellious, uncooperative, and difficult to get along with. They show mild suspiciousness and resentment toward others, are very egocentric, and have narcissistic traits. They deny serious problems and show a naive, overly optimistic 'Pollyanna' attitude.
therapistArray[3][6] = "您常报告中度的紧张与焦虑，伴头痛或胃肠不适，但问题通常不至严重。您的诸多困难源于对家庭成员深层而长期的敌意，您既不直接表达，也常未察觉；即使察觉，您也倾向于将其合理化。总体而言，您反叛、不合作、难相处，对他人略显多疑与怨怼，且以自我为中心，带有自恋特征。您否认严重问题，并展现出天真、过度乐观的“波莉安娜”式态度。";

// 37/73（3-7）
// English: Persons with the 37/73 code type are anxious, tense, and insecure. They tend to worry excessively, have difficulty making decisions, and are perfectionistic. They are fatigued, lack self-confidence, and have psychosomatic complaints.
therapistArray[3][7] = "您焦虑、紧张且缺乏安全感。您过度担忧，决策困难，追求完美，对自己要求苛刻。您常感到疲乏、缺乏自信，并伴有身心症状。";

// 38/83（3-8）
// English: Persons with the 38/83 code type are in considerable psychological turmoil, feeling anxious, tense, fearful, and phobic. Depression and hopelessness are common, and they have great difficulty making even minor decisions. They may present many vague somatic complaints such as gastrointestinal distress, dizziness, blurred vision, chest pain, genital pain, headaches, and insomnia, described in vague and evasive ways. They tend to be immature and dependent, with strong needs for attention and affection. When frustrated, they are self-punitive. They are often withdrawn from life, apathetic, and use stereotyped ways of dealing with problems. Signs of thought disorder are apparent, including difficulty thinking clearly, poor attention and memory, odd ideas, loose associations, obsessive ruminations, naked delusions or hallucinations, and irrelevant speech. Hospitalized psychiatric patients with this code type are most often diagnosed as schizophrenic, although somatoform disorders also occur. They respond poorly to insight-oriented therapy but may benefit from supportive therapy.
therapistArray[3][8] = "您正处于显著的心理动荡中，常感焦虑、紧张、恐惧并伴各种恐怖。抑郁与无望感常见，连小的决定都难以下定。您可能诉说许多模糊的身体不适，如胃肠紊乱、头晕、视物模糊、胸痛、生殖器疼痛、头痛或失眠等，且描述含糊回避。您人格上较不成熟、依赖，强烈需要关注与关爱；遇挫时倾向自责。您往往对生活退缩、冷漠、缺乏活力，以刻板方式应对问题。可见明显思维紊乱迹象，包括思维不清、注意力与记忆差、观念怪异、联想松散、强迫反刍、赤裸的妄想或幻觉、以及不连贯言语。临床住院者多被诊断为精神分裂症，亦见躯体形式障碍。此类型对洞察性治疗反应不佳，但支持性治疗往往能带来显著益处。";

// 39/93（3-9）
// English: Persons with the 39/93 code type are excitable, impulsive, and have mood swings. They are sociable and talkative, but their relationships are superficial. They have poor judgment, act without thinking, and are prone to accidents. Alcohol and substance abuse are common.
therapistArray[3][9] = "您容易兴奋、冲动，情绪波动明显。您外向健谈，但人际关系浅薄。您判断力较差，常不加思索地行动，容易发生意外事故。酒精与药物滥用在此类型中常见。";
// 默认通用解读（用于缺省展示）
therapistArray[0][0] = '（暂无匹配的咨询师解读，已显示通用解读。）';

// 20/02（2-0）
therapistArray[2][0] = "您表现出明显的退缩与抑郁特征。您可能感到孤独、被拒绝或被忽视。您常逃避社交，缺乏主动性与信心。治疗重点在于激活社会功能，重建自尊，并通过逐步暴露与支持性关系强化社交参与。";

// 12/21（1-2）
therapistArray[1][2] = "您的情况表明，目前您多数时候都难以感受到喜悦或快乐。您可能正经历焦虑与悲伤，精力、性欲及整体效率均有所下降。他人可能视你为悲观者，认为你不愿“放松享受生活”。你的忧虑有其合理性——身体症状令你恐惧甚至惊慌，因你担忧症状恶化甚至可能致命。这些症状在压力下可能加剧。你是个尽责守信的人，容易产生罪恶感，因此难以坚持自我主张。你总主动承担责任，面对他人要求时难以拒绝。童年时期亲人离世或患病的经历，可能让你对身体不适格外敏感，并产生对健康的过度担忧。探索童年时期对疾病与死亡感到恐惧的记忆。当身体症状加剧时，尝试将其与当前压力建立关联。与治疗师共同演练如何更坚定地表达自我，并学习在恐慌时刻运用深呼吸与自我安抚技巧。";

therapistArray[1][3] = "尽管这类患者通常不愿探讨潜在的心理因素，但若其身体症状与当前情绪压力源之间未建立直接关联，仍可尝试展开相关讨论。若治疗师在未聚焦其对身体衰弱的恐惧时，强迫这类患者审视自身情感生活，他们往往会提前终止治疗。13/31编码类型的来访者具有高度易受暗示性，期待治疗师对其身体问题提供明确答案与解决方案。其症状可能因所接受的医疗方式而暂时性改变。治疗应聚焦于完成对过往损失的哀悼过程，帮助来访者适应愤怒与悲伤的双重体验。重新学习识别愤怒与悲伤，并寻找建设性表达方式是治疗的有效方向。通过自信训练、冲突解决及格式塔疗法——允许身体症状代为“发声”——可帮助他们学会宣泄情感并协商需求。若童年经历父母患病或离世，需协助来访者完成哀悼。在治疗过程中观察情绪泛滥如何引发躯体不适——这可能是将注意力从压倒性情感暂时转移至可缓解的身体症状的一种方式。";

therapistArray[1][4] = "尽管14/41型患者对短期对症治疗可能反应良好，但他们往往因抗拒治疗师的要求而无法坚持足够长的治疗周期，从而难以实现显著的人格转变。这类个体通常具有强烈的依赖性，既渴望被照顾，又充满愤怒与猜疑。这些情绪往往以被动而非直接的方式表达。他们倾向于带着“今天你又能给我什么注定无效的方案？”的态度面对治疗师，因为他们自认正被身体病痛折磨得动弹不得。他们渴求解脱，却因未能如愿而愤怒。治疗可聚焦于其对他人关怀的根深蒂固的不信任，以及由此产生的操控他人照料的倾向。他们渴望被照顾，却又充满愤怒，预设被抛弃的可能，并认为操控他人是满足需求的唯一正当途径。需追溯其童年时期情感受挫与被遗弃的经历，正是这些经历塑造了其基本的不信任感.有时这种情况发生在当事人自身或其依赖对象存在病史的背景下。从概念上讲，这种类型反映出心理上“非常年轻”的未成熟依赖型个体。他们需要学习自我效能感。结合家庭治疗与治疗师的养育式界限设定，同时教导亲人如何提供支持而非形成共生依赖，往往能起到积极作用。正念课程和温和运动亦可带来益处。";

therapistArray[1][5] = "对于男性：您的个人资料显示您是个敏感且善解人意的人，热衷于艺术创作活动。您通常不具攻击性，他人可能觉得您面对愤怒或不合理要求时过于轻易地“以德报怨”。即使在合理情况下，您也可能难以坚持自我主张。你可能正经历多种难以确诊的躯体症状，这些症状会引发痛苦，并在压力或愤怒时加剧。自信训练和认知行为疗法有助于缓解部分症状。女性：您的个人资料显示您是务实、明智、独立自主且行动导向的女性。您能享受男性陪伴及参与传统男性活动。同时您正经历若干身体症状，这些症状可能困扰着您并干扰日常活动。或许您或您亲近的人在童年时期遭遇过令人恐惧的身体问题，又或许您曾经历过某种令人惊恐的身体创伤，导致您对自身健康产生过度担忧。放松练习和瑜伽是应对压力的有效方式，尤其对您这样活跃的女性而言。";

// 16/61（1-6）
therapistArray[1][6] = "您往往表现出显著的警觉与戒备，对他人动机保持深深的怀疑。您容易感到被误解或受到威胁，因此在人际关系中趋向防御与疏远。您经常体验到焦虑与内在紧张，但并不愿意承认这些情绪。对他人而言，您可能显得拘谨、冷淡甚至敌意。若这种防御性持续存在，您可能会逐渐与人隔绝。临床上，此类型者常见于轻度偏执倾向或慢性焦虑的个体。治疗中需要花较多时间建立信任关系，治疗师的诚恳与一致性至关重要。";

// 17/71（1-7）
therapistArray[1][7] = "您的资料显示，您容易体验到恐惧、焦虑和怀疑，并对潜在威胁保持高度警觉。您常常紧张不安，难以放松，且倾向过度思考，怀疑自己是否做错事。您可能将日常压力视作危险信号，从而导致疲惫与失眠。您对权威人物既依赖又戒备，容易在信任与怀疑之间摇摆。此类型患者往往具有强烈的控制需求，难以容忍不确定性。治疗初期可聚焦于焦虑管理与认知重建，通过逐步建立安全的关系体验，帮助您学习接纳模糊与不确定感。";

// 18/81（1-8）
therapistArray[1][8] = "您心中潜藏着强烈的敌意与攻击感，却难以以调节、适应性的方式表达出来。您要么几乎完全压抑这种情绪，感到‘被憋住’，要么表现得过于好斗、粗暴。您在社交场合，尤其是在异性面前，常常感到自惭形秽与不自在。您缺乏对他人的信任，倾向于与人保持距离，因而常感孤立与疏离。漂泊不定的生活方式与不稳定的工作经历在您身上并不少见。临床上，您可能被诊断为精神分裂症、焦虑障碍或分裂样人格障碍。您往往感到不快乐、抑郁，情感表达平淡。您对身体症状（如头痛、失眠）表现出强烈关注，有时甚至强烈到近乎妄想。您的思维可能显得混乱，注意力容易分散。";

// 19/91（1-9）
therapistArray[1][9] = "您目前极有可能正经历着巨大的痛苦与内心动荡。您常感到焦虑、紧张与不安。您经常抱怨身体上的不适，包括胃肠问题、头痛与疲惫不堪等，但您往往不愿接受心理学上的解释。表面上，您可能表现得健谈、外向、好斗甚至具有攻击性，但实际上，您内在是一个被动、依赖的人，试图否认自己性格中这一面。您的雄心壮志很强，对自己期望甚高，但目标往往模糊不清。您因无法实现理想中的成就而感到挫败。部分情况下，这种编码型也出现在脑部损伤后难以适应自身限制的人身上。";

// 23/32（2-3）
therapistArray[2][3] = "您常常感到紧张、焦虑与悲伤，易感到疲惫与无力。您可能体验到长期的无兴趣、迟缓与无助感。您对生活缺乏热情，对自己评价偏低，渴望被接纳却又害怕被拒绝。您倾向依赖他人，但同时又感到自卑与不安全。此类型个体常见轻中度抑郁与焦虑障碍。治疗重点在于帮助您恢复活力与兴趣，增强自我效能感，学习以积极方式表达情绪。";

// 24/42（2-4）
therapistArray[2][4] = "您可能表现出冲动与反叛的特质。您倾向于寻求刺激、忽视社会规范，甚至在压力下表现出攻击性或对抗行为。您容易卷入人际冲突或法律麻烦，酒精或其他物质滥用较常见。您的自我控制力较弱，对他人的期望或权威容易产生敌意。治疗中需建立稳定的结构，协助您认识并承担行为后果，学习自我调节。";

// 25/52（2-5）
therapistArray[2][5] = "您似乎正在经历性别角色或身份方面的冲突。您可能对传统性别角色的期望感到矛盾，既希望独立又渴求认可。此类型个体常伴焦虑、自卑及对自我认同的不确定感。治疗可聚焦于自我接纳、性别认同与内在价值澄清，帮助您建立一致的自我形象。";

// 26/62（2-6）
therapistArray[2][6] = "您的资料显示您容易出现对身体健康的过度担忧，同时伴随对他人动机的怀疑与不信任。您可能经常感到紧张，担心疾病或被他人误解。您倾向压抑愤怒，结果使焦虑与躯体症状加剧。治疗可帮助您学习识别并表达负面情绪，降低防御，改善与他人的沟通与信任。";

// 27/72（2-7）
therapistArray[2][7] = "您性格上谨慎、焦虑且自我约束强。您经常过度担心、过度计划，追求完美，对失败或错误难以容忍。您容易感到身心疲惫，并可能表现出失眠、头痛等身心症状。治疗应聚焦于放松训练、认知重建与自我接纳练习，帮助您放下过度控制的倾向。";

// 28/82（2-8）
therapistArray[2][8] = "您常常感到孤立、退缩和与他人疏离。您可能在思维上显得缓慢或怪异，对现实感的把握减弱。此类型个体可能表现出分裂样或抑郁特征。治疗应强调支持性关系、现实导向与生活结构化，避免深入探讨早期创伤，以免加重退缩。";

// 29/92（2-9）
therapistArray[2][9] = "您情绪波动显著，既可能陷入抑郁，又可能出现短暂的轻躁情绪。您精力时高时低，常感内心冲突。您可能在积极与消极情绪间摇摆，对压力反应强烈。治疗宜采用情绪稳定策略与行为调节训练，帮助您维持情绪平衡。";

therapistArray[4][5] ="45型男性：您的个人资料显示您兼具阳刚与阴柔的兴趣与价值观。您热衷于艺术、创造性及智力活动，探讨理念、哲学和情感话题令您着迷。您倾向于摒弃刻板的男性兴趣与价值观，更喜欢与敏感的人相处。您重视独立性，抗拒被控制。你倾向于特立独行，向他人表明自己不遵循常规。你可能将部分叛逆精神与对权威的不信任转化为另类生活方式。与此同时，你在信任与情感亲密方面存在困难，偶尔会表现出冲动行为，他人可能视之为自私或自我沉溺。请与治疗师共同探索哪些情境会诱发你的冲动行为与缺乏同理心。学会在困境中坚持真诚表达，并审视自己是否出于本能而非理性抗拒权威。通过治疗师的引导，学习放下情感防备，对亲近之人建立更多信任。45型女性：您的个人资料显示您兼具阳刚与阴柔的兴趣与价值观。您可能成长于假小子时期，与男孩相处自在，热衷于传统男性活动。您务实且注重行动，享受男性陪伴。您独立自主，厌恶任何形式的控制。你具有竞争意识且特立独行，行事极具即兴性，有时甚至冲动鲁莽。陷入困境时，你容易通过曲解规则、操控他人或说善意的谎言来满足需求。成长过程中可能曾与具有控制欲的男性亲密相处，对方偶尔会滥用权力。请与治疗师共同探索冲动如何引发困境，学习规避规则变通以避免麻烦。深入剖析你对独立的渴求与对情感脆弱的抗拒，如何阻碍亲密关系的建立。";

// 46/64（4-6）
// English: Persons with the 46/64 code type are immature, egocentric, and self-indulgent. They are passive-dependent, seeking attention and sympathy, while being demanding of others. They may appear clumsy and uncomfortable in social and heterosexual relationships, particularly among females.
// 中文：46/64型个体表现得不够成熟，以自我为中心且自我放纵。他们被动、依赖，渴望他人的关注与同情，同时对他人要求颇多。在社交及异性关系中（尤其是女性），他们常显得笨拙和不自在。
therapistArray[4][6] = "您显得不够成熟，以自我为中心，并带有自我放纵的倾向。您被动、依赖，渴望他人的关注与同情，同时又常对他人提出过多要求。您在人际关系中可能表现笨拙与不安，尤其在异性相处时更为明显。女性在此类型中更为常见。";

// 47/74（4-7）
// English: Persons with the 47/74 code type swing between indifference to consequences of their behavior and excessive worry. They may engage in acting out (e.g., drinking, sexual promiscuity), followed by brief guilt and remorse, but not enough to prevent future acting out. They complain of vague somatic discomforts (e.g., headaches, stomachaches), tension, fatigue, and exhaustion. They are dependent and insecure, almost needing continuous reassurance of self-worth. They are often diagnosed as passive-aggressive personalities. Support and reassurance produce symptom improvement, but lasting personality change is unlikely.
// 中文：47/74型个体在对行为后果的漠然与过度担忧之间摇摆。他们可能有外化行为（如酗酒、性放纵），之后仅有短暂的内疚与懊悔，但不足以阻止再次外化。他们常抱怨模糊的身体不适（头痛、胃痛等）、紧张、疲惫与精疲力竭。此类型依赖、不安，几乎需要持续的自我价值肯定。临床上常见被动—攻击型人格。支持与安抚可改善症状，但持久人格改变较难。
therapistArray[4][7] = "您在对行为后果的漠然与过度担忧之间来回摆动。您可能出现外化行为（如酗酒、性放纵），随后短暂感到内疚与懊悔，但这种懊悔不足以阻止再次外化。您常抱怨模糊的身体不适（头痛、胃痛等），并感紧张、疲惫与精疲力竭。您依赖、不安，几乎需要持续的自我价值肯定。临床上，您常被诊断为被动—攻击型人格。支持与安抚可带来症状改善，但持久人格改变的可能性较低。";

// 48/84（4-8）
// English: Persons with the 48/84 code type are hostile, suspicious, and socially alienated. They have difficulty trusting others, are emotionally withdrawn, and may appear sullen, moody, and irritable. They often have histories of family discord, abuse, or neglect. They are manipulative, defensive, and have trouble forming trusting therapeutic relationships. They may test the therapist’s reliability. Supportive therapy focused on trust and consistent boundaries can be beneficial.
// 中文：48/84型个体敌意强烈、多疑、与社会疏离。他们难以信任他人，情感退缩，常显得阴郁、易怒。常有家庭冲突、虐待或忽视史。此类型防御性强、善于操控，建立信任关系困难，倾向测试治疗师的可靠性。支持性治疗与一致性界限对其有益。
therapistArray[4][8] =  "你的特征表明，你在情感上感到空虚、愤怒、悲伤，并且不信任他人。你很难在情感上与他人亲近，也很难相信自己可以脆弱，别人不会伤害你。 在你看来，世界是一个充满敌意的地方，人们在这里互相利用和占便宜，所以你会与人保持距离，也许会通过你的穿着和举止来警告他们远离你。也许通过穿孔或纹身，你会让人们知道你是一个他们应该尊重或害怕的人。如果你认为别人不尊重你、威胁你或利用你，你就会变得相当有敌意。在某些情况下，具有你这种特征的人不会以明显反叛或可怕的方式打扮或行事。相反，你会以冷淡或冷漠的方式对待他人，并想方设法占他人的便宜，从而保持情感上的距离。你的父母可能很冷漠、不爱你，甚至很残忍，所以你从小就学会了退缩来保护自己。你觉得自己不被爱，不被需要，于是你想方设法成为一个幸存者，操纵他人或变得情感麻木，这样你就不会受到伤害。难怪你现在会质疑一切权威，因为你无法相信你的父母会满足你的需求。你的资料显示，你可能会感到空虚、孤独和与他人脱节。有时，你甚至会感到疑神疑鬼，好像别人都戴着面具，掩饰自己的真实感受。当你受到伤害时，你会向他人发泄。有时，具有你这种特征的人会把攻击性和性欲混为一谈，觉得甜蜜和温柔的时刻让人不舒服甚至恼怒。你也可能会用药物和/或酒精来麻醉自己空虚、愤怒的情绪，在药物和/或酒精的影响下，你可能会变得更加易怒和刻薄，甚至对你关心的人也是如此。作为培养自尊的一种方式，试着对自己童年时感到被拒绝或被遗弃的经历产生共鸣。避免吸毒和酗酒，尤其是在您感到愤怒或出现妄想症时。通过将注意力转移到生活中积极的事物上，CBT 可以帮助您学会控制一些阴暗和消极的情绪。当你经历温柔或充满爱的时刻时，避免将对方推开。 如果你允许自己享受情感交流的时刻，这将有助于缓解你的空虚和悲伤情绪。药物治疗也有助于缓解阴暗和偏执的情绪。";

// 49/94（4-9）
// English: Persons with the 49/94 code type are outgoing, energetic, and superficially charming. They seek excitement and stimulation, and may have antisocial or narcissistic traits. They tend to manipulate others, have poor frustration tolerance, and react impulsively. They often show little insight and externalize blame. They may have histories of job instability, legal difficulties, and substance abuse. They are often diagnosed with antisocial personality disorder.
// 中文：49/94型个体外向、精力旺盛、表面上富有魅力。他们追求刺激与兴奋，可能具有反社会或自恋特质。此类型倾向操控他人，挫折容忍度低，冲动行事，缺乏自我反省，易将责任推卸于人。常有职业不稳、法律问题或物质滥用史，常见于反社会人格障碍。
therapistArray[4][9] = "您外向、精力旺盛、表面上富有魅力。您追求刺激与兴奋，可能具有反社会或自恋特质。您倾向操纵他人，挫折容忍度低，常冲动行事。您缺乏自我反省，倾向将责任归咎他人。您可能有职业不稳、法律问题或物质滥用史。此型常见于反社会人格障碍。";
