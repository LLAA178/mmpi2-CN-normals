// All post-submit rendering lives here: profile charts, code-type text, and results table.
// Depends on globals provided by my_data.js: `scales`, `profileArray`, `treatmentArray`, `therapistArray`, and `gender`.

// —— Helpers used by start_to_creat_profile ——
function erf(x) {
    const a1 =  0.254829592;
    const a2 = -0.284496736;
    const a3 =  1.421413741;
    const a4 = -1.453152027;
    const a5 =  1.061405429;
    const p  =  0.3275911;
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return y;
  }
  
  function renderProfiles(codeType) {
    try {
      var containerTherapy   = document.getElementById('therapyText');
      var containerTherapist = document.getElementById('therapistText');
      if (!containerTherapy || !containerTherapist) return;
  
      // 目前仅对 48/84 做精确匹配；其他编码回退使用通用段落（索引 0）
      var idx = 0;
      if (Array.isArray(codeType) && codeType.length === 2) {
        var a = codeType[0], b = codeType[1];
        if ((a === 4 && b === 8) || (a === 8 && b === 4)) {
          idx = 0;
        } else {
          idx = 0; // 回退到通用
        }
      }
  
      var therapyText = (typeof treatmentArray !== 'undefined' && treatmentArray[idx] && treatmentArray[idx][0])
        ? treatmentArray[idx][0]
        : '（暂无匹配的疗法建议，已显示通用建议。）';
  
      var therapistText = (typeof therapistArray !== 'undefined' && therapistArray[idx] && therapistArray[idx][0])
        ? therapistArray[idx][0]
        : '（暂无匹配的咨询师解读，已显示通用解读。）';
  
      containerTherapy.textContent   = therapyText;
      containerTherapist.textContent = therapistText;
  
      // 关键：填充文案后再显示隐藏区域
      var tp  = document.getElementById('therapyProfile');
      var tsp = document.getElementById('therapistProfile');
      if (tp)  tp.style.display  = 'block';
      if (tsp) tsp.style.display = 'block';
    } catch (e) {
      console.error('renderProfiles error:', e);
    }
  }
  
  function creat_trait_profile_1_female(tscoreArray){
    let data = {
      labels: [scales[3][0][0] + scales[3][0][1], scales[0][0][0]+scales[0][0][1], scales[4][0][0]+scales[4][0][1], scales[6][0][0]+scales[6][0][1],
        scales[7][0][0]+scales[7][0][1], scales[8][0][0]+scales[8][0][1], scales[9][0][0]+scales[9][0][1], scales[11][0][0]+scales[11][0][1], 
        scales[12][0][0]+ scales[12][0][1], scales[13][0][0]+scales[13][0][1], scales[14][0][0]+ scales[14][0][1], scales[15][0][0]+scales[15][0][1], 
        scales[16][0][0]+scales[16][0][1]],
      datasets: [{
        label: '受测者在这一项超过的百分比人数',
        fill: false,
        lineTension: 0.025,
        borderRadius: 0,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [tscoreArray[3], tscoreArray[0], tscoreArray[4], tscoreArray[6], tscoreArray[7], tscoreArray[8], tscoreArray[9], tscoreArray[11], tscoreArray[12], tscoreArray[13], tscoreArray[14], tscoreArray[15], tscoreArray[16]],
      }],
    };
  
    let options = {
      responsive: true,
      title: { display: true, text: '效度量表与临床量表', fontSize: 20, fontColor: 'white' },
      annotation: { annotations: [{ type: 'line', mode: 'horizontal', scaleID: 'y-axis-0', value: 35, borderColor: '#FFFFFF', borderWidth: 2, label: { enabled: true, content: 'Max Value' } }] },
      scales: {
        yAxes: [{ gridLines: { color: '#B0C4DE', lineWidth: 1 }, ticks: { beginAtZero: true, fontSize: 14, fontColor: 'white' } }],
        xAxes: [{ gridLines: { color: '#B0C4DE', lineWidth: 1 }, ticks: { fontSize: 14, fontColor: 'white' } }],
      },
    };
  
    let ctx = document.getElementById('myChart1').getContext('2d');
    new Chart(ctx, { type: 'line', data, options });
  }
  
  function creat_trait_profile_1_male(tscoreArray){
    let data = {
      labels: [scales[3][0][0] + scales[3][0][1], scales[0][0][0]+scales[0][0][1], scales[4][0][0]+scales[4][0][1], scales[6][0][0]+scales[6][0][1],
        scales[7][0][0]+scales[7][0][1], scales[8][0][0]+scales[8][0][1], scales[9][0][0]+scales[9][0][1], scales[10][0][0]+scales[10][0][1], 
        scales[12][0][0]+ scales[12][0][1], scales[13][0][0]+scales[13][0][1], scales[14][0][0]+ scales[14][0][1], scales[15][0][0]+scales[15][0][1], 
        scales[16][0][0]+scales[16][0][1]],
      datasets: [{
        label: '受测者在这一项超过的百分比人数',
        fill: false,
        lineTension: 0.025,
        borderRadius: 0,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [tscoreArray[3], tscoreArray[0], tscoreArray[4], tscoreArray[6], tscoreArray[7], tscoreArray[8], tscoreArray[9], tscoreArray[10], tscoreArray[12], tscoreArray[13], tscoreArray[14], tscoreArray[15], tscoreArray[16]],
      }],
    };
  
    let options = {
      responsive: true,
      title: { display: true, text: '效度量表与临床量表', fontSize: 20, fontColor: 'white' },
      annotation: { annotations: [{ type: 'line', mode: 'horizontal', scaleID: 'y-axis-0', value: 35, borderColor: '#FFFFFF', borderWidth: 2, label: { enabled: true, content: 'Max Value' } }] },
      scales: {
        yAxes: [{ gridLines: { color: '#B0C4DE', lineWidth: 1 }, ticks: { beginAtZero: true, fontSize: 14, fontColor: 'white' } }],
        xAxes: [{ gridLines: { color: '#B0C4DE', lineWidth: 1 }, ticks: { fontSize: 14, fontColor: 'white' } }],
      },
    };
  
    let ctx = document.getElementById('myChart1').getContext('2d');
    new Chart(ctx, { type: 'line', data, options });
  }
  
  function creat_trait_profile_2(tscoreArray){
    let data = {
      labels: [scales[48][0][1], scales[49][0][1], scales[50][0][1], scales[51][0][1], scales[52][0][1], scales[53][0][1], scales[54][0][1], scales[55][0][1], scales[56][0][1], scales[57][0][1], scales[58][0][1], scales[59][0][1], scales[60][0][1], scales[61][0][1], scales[62][0][1]],
      datasets: [{
        label: 'K分矫正的一致性T分',
        fill: false,
        lineTension: 0.025,
        borderRadius: 0,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [tscoreArray[48], tscoreArray[49], tscoreArray[50], tscoreArray[51], tscoreArray[52], tscoreArray[53], tscoreArray[54], tscoreArray[55], tscoreArray[56], tscoreArray[57], tscoreArray[58], tscoreArray[59], tscoreArray[60], tscoreArray[61], tscoreArray[62]],
      }],
    };
  
    let options = {
      responsive: true,
      title: { display: true, text: '内容量表', fontSize: 20, fontColor: 'white' },
      annotation: { annotations: [{ type: 'line', mode: 'horizontal', scaleID: 'y-axis-0', value: 35, borderColor: '#FFFFFF', borderWidth: 2, label: { enabled: true, content: 'Max Value' } }] },
      scales: {
        yAxes: [{ gridLines: { color: '#B0C4DE', lineWidth: 1 }, ticks: { beginAtZero: true, fontSize: 14, fontColor: 'white' } }],
        xAxes: [{ gridLines: { color: '#B0C4DE', lineWidth: 1 }, ticks: { fontSize: 14, fontColor: 'white' } }],
      },
    };
  
    let ctx = document.getElementById('myChart2').getContext('2d');
    new Chart(ctx, { type: 'line', data, options });
  }
  
  // —— Results text blocks used by start_to_print_result ——
var resultArray = [
  ["L（装好）", 70, 40, "测验结果的有效性存疑；受测者可能在有意“装好”，对自己的描述过于完美无瑕；受测者可能对测验有抵触感；受测者可能否认自己有任何缺点，不愿意承认哪怕是极微小的缺点；不现实地夸大自己的优点，声称自己符合极高的道德准则", "测验结果有效；若L的T分大于60，则受测者可能采取了“自我防御”的反应定势；受测者可能过于保守、循规蹈矩，自我要求过高、标准僵化", "T分过低，测验结果可能存在“装坏”的成分；受测者过分强调异常和病态，或过分自信而独立"],
  ["F（装坏）", 71, 56, "测验效度存疑；受测者可能不配合；可能在“装坏”；可能未能理解题目意思，无意间夸大了自己的心理问题；或者是有各方面较严重的心理障碍；但若被试是青年人，则可能是存在自我认同危机", "测验结果可能有效；显示受测者不希望被认为是传统型的，或是有较强的政治、宗教、社会信仰；自我苛刻，或是回答问题时极度坦诚；也许存在一定程度的心理失常的问题", "测试结果是可接受的；受测者是顺从的、保守的；受测者可能在“装好”"],
    ["K（防御）", 71, 56, "表示受测者可能有很强的自我防御倾向；受测者可能在“装好”，也可能处于强烈的自我抑制当中，或是缺乏感情投入", "受测者有一定的自我防御倾向；受测者可能没有认识到或不承认自己存在心理问题；受测者十分独立，不愿意寻求帮助", "受测者自我防御倾向较低；受测者在“装坏”，又或者是对施测者极度坦诚"],
    ["Hs（疑病）", 65, 60, "T分高于65，高分，这反映出被测可能有以下部分（程度）的表现：过分关注身体；不清晰的躯体症状；胃部不适、疲劳、疼痛；自私、自我中心、自恋倾向；悲观、失败主义、愤世嫉俗的生活观；不满足、不愉快；诉苦、诉怨；需要他人关注、关心；对他人持批评态度；间接表达敌意；很少有失控行为；工作、学习效率降低，但无缺陷", "中等分，被测也许：关注自身的身体变化；常有不清晰具体位置的躯体不适；以自我为中心，对生活不满意；喜欢他人关注、关心；关注生活中的负性刺激", "低于平均的疑病水平，说明被试：也许不那么过分关注身体功能的问题，可能是自强、机敏、精力充沛的；也可能意味着受测者多以自己身体健康为傲，却忽略了疼痛、痛苦和疾患，直到问题变得相当严重；也许意味着抑郁情绪，反映了受测者对自己的身体健康不予关心、放任自流"],
    ["D（抑郁）", 65, 60, "T分高于65，高分，这反映出被测可能有以下部分（程度）的表现：抑郁，不愉快；对未来悲观失望；自卑，无自信；常有负罪感；懒散，软弱，易疲劳，精力不足；主诉许多躯体症状；易怒，紧张，内心难以松弛", "中等分，被测也许：易于担忧；自觉无用，无法适应外界，常有失败感；典型的内向性格，害羞、胆小、畏缩；孤独，与外界保持距离；避免与人交往；敬小慎微，循规蹈矩；难以做出决定；过分自控，不冲动，不具有侵犯性；为避免冲突而忍让；有参与心理治疗的动机", "低于平均的抑郁水平，说明被试：通常较为开朗；若分数低于45，则被试可能表现出警觉、开朗、积极、自信、有幽默感，被别人认为是热情和友善的"],
    ["Hy（癔症）", 65, 60, "T分高于65，高分，这反映出被测可能有以下部分（程度）的表现：以各种躯体症状的方式来应对刺激或逃避责任；有头痛、胸痛、乏力或贫血的症状；躯体症状常突然出现，又突然消失；对躯体症状的原因缺乏认识；表现出慢性焦虑、紧张及抑郁；极少有幻觉", "中等分，被测也许：心理上显得特别不成熟，孩子气；特别自我中心，有自恋倾向；期待他人的关注，要求得到他人的情感；采用间接方式获取他人注意", "低于平均的癔症水平，说明被试：通常较为积极、现实；若分数低于45，则被试可能表现出过分地现实、世故，让人感觉刻薄生硬；少数人愤世嫉俗，甚至憎恶世人，认为人生充满苦难；但该项低分往往反映出被试是现实主义者，表现出的敌意并非必要，只是应对方式过于生硬，缺乏礼貌或圆滑"],
    ["Pd（反社会）", 65, 60, "T分高于65，高分，这反映出被测可能有以下部分（程度）的表现：反社会行为；有抗拒权威人物的行为；家庭关系不和，常吵闹；将问题归咎于他人；学校成绩不良，工作表现不佳；有婚姻及其他人际关系问题；有冲动行为；做事没计划，不考虑结果，只图一时之满足；无耐性，对挫折的容忍度很低；判断力较差，乐于冒险；很难吃一堑长一智，不吸取经验教训", "中等分，被测也许：不成熟，孩子气及自我中心；常自我卖弄、自我炫耀；对他人的需求不敏感；倾向于利用他人获取自己的利益；开始时可能很讨人喜欢，但人际关系难以深入，大多是肤浅的；里不能与他人形成互相关怀的依附关系；外向、健谈，动作多，表情丰富、自然；缺乏明确的生活目标；具有敌意及侵犯性，好挖苦讽刺，玩世不恭，有怨恨及抗拒行为；行为常常有侵犯性；对于自己的不良行为很少有负罪感，只是在遇到麻烦时才自责；通常都不会有焦虑、抑郁及精神病症状；对生活不满意，感觉空虚和无聊；缺乏深刻的情绪体验；当然，也往往会表现出精力旺盛、社会化、进取、主动、努力等积极的人格特质", "T分低于平均，也许有精力旺盛、社会化、进取、主动、努力等积极的人格特质，但在遭遇挫折时也可能转换为愤怒；当T分过低时（低于45），则反映出受测者拘泥于常规、稳定的行为模式，倾向于消极与不自信，不尝试冒险，通常比较依赖他人，甚至非常僵化地坚持和遵守传统"],
    ["Mf（男性女性化或女性男性化）", "", "", ""],
    ["Pa（偏执）", 80, 60, "T分高于80，特高分，这反映出被测可能有以下部分（程度）的表现：明显的精神病患者行为，思维间断；被害妄想。或兼有自大妄想；关联妄想；认为自己被愚弄、被作践；易怒、不满、妒忌；常被诊断为精神分裂症或妄想状态", "若65≤T≤79，则反映出被测可能有以下部分（程度）的表现：具有妄想心理素质；对他人的行动过于敏感，常会反应过度；认为自己受到生活的不公平对待；常文过饰非，并责怪他人；多有怀疑、戒备他人的行为；对人怀有敌意，常不满他人而好争辩\n若60≤T≤64，则反映出被测可能有以下部分（程度）的表现：对人不友善，因不满他人而易发生冲突；常进行道德说教；过分强调理性。不愿意谈论情绪问题；与治疗者难以形成长期的互相信任的关系", "若36≤T≤59，则通常反应被测有着低于平均值的偏执水平；但对于更低的T分，则难以解释，必须综合其他因素判断，此处只能略过"],
    ["Pt（精神衰竭）", 80, 60, "T分高于80，特高分，这反映出被测可能有以下部分（程度）的表现：焦虑、紧张、易烦恼；坐卧不宁、担心、忧虑；神经过敏；精力难以集中；内省，常沉思，有强迫观念；有不安全感及自卑感；缺乏自信，怀疑自己；自我意识强、自我苛求、自我贬低", "若65≤T≤79，则反映出被测可能有以下部分（程度）的表现：僵化、常进行道德说教；对己对人的要求很高；过度追求完美和维护道德良心；有抑郁感和负罪感\n若60≤T≤64，则反映出被测可能有以下部分（程度）的表现：常关注事务的整洁、秩序以及细枝末节；坚持以一种固定不变的方式完成任务；常缩手缩脚，解决问题缺乏真诚及首创性；犹豫不决；小题大做；害羞，社交不良；让人难以理解，常担心自己是否能被他人接受、欢迎；有身体症状；对某些问题可能有较深入的了解；倾向于用理智化的方式思考问题", "若46≤T≤59，则通常反应被测有着低于平均值的精神衰竭水平；更低的Pt值反映受测者处于放松、舒适且没有感情忧伤的状态，他们大多自信、适应良好、活动高效且能干，能够没有压力地安排自己的生活，尽管有些受测者可能由于缺少必要的焦虑而显得生活没有动力"],
    ["Sc（精神分裂）", 70, 60, "若Sc的T分高于80且量表有效，则被试可能存在严重的妄想、幻觉；T分高于70时，被测可能有以下部分（程度）的表现：也许觉得自己并非社会整体的一部分；感觉孤独，与他人疏远，被他人误解；不被周围人所接受，退缩并自我封闭；情绪体验令人无法理解；逃避与他人的接触，避免陌生的环境；害羞、冷淡，对一切都不参与、不投入；也许伴有广泛焦虑综合征；不满、有敌意、有侵犯性；不能表达情感，以幻想及白日梦的方式来对外部应激状态进行反应；将现实与非现实混为一谈，无法加以区分；怀疑自己，自卑，没有竞争性；对性相当关注，性别角色混乱；处处与众不同，与常规相违背，以自我为中心；可能有长期的身体疾患；常常十分固执，喜怒无常，不成熟、冲动；缺少解决问题的基本常识；治疗预后不良，但能维持长时间的治疗", "Sc的T分较高，被测也许：生活方式与众不同；不合群，与他人疏远，保持距离；自卑、冷淡、兴趣索然；以幻想为主要的防御手段；经常做白日梦；不成熟，有自恋倾向；有冲动、侵犯行为及焦虑表现", "受测者很可能不存在精神方面的问题；若T分小于45，受测者很可能是比较有实际生活经验的，在行为与日常生活中比较保守，较少内省和思索；通常，该类被试是顺从的、尽责的、可靠的且谨慎的，但也可能会比较无趣和刻板严格"],
    ["Ma（轻躁狂）", 75, 60, "Ma的T分大于75，这反映出被测可能有以下部分（程度）的表现：过度活跃，或伴有极快频率的言语；有幻觉及自大妄想；情绪体验倒错；精力充足，谈话滔滔不绝；极端的自我欣赏；重行动，轻思考；不能聪明地运用自身能量，不能看透事情的结局；兴趣广泛，活动频繁，但对日常凡人、琐事的兴趣不高；对挫折的容忍度很低，很难抑制冲动，易激怒，有敌意及侵犯行为；常表现出没有现实根据、无原因的乐观态度；抱有不实际、夸大了的志向；夸大自我价值及自我重要性，看不到自身的局限性；开朗，善社交，喜欢集体活动；表现出阶段性焦躁不安或抑郁；抗拒心理治疗", "若65≤T≤74，则反映出被测可能有以下部分（程度）的表现：过分活跃；夸大自我价值，自恋；精力十足，讲话滔滔不绝，不加思考就采取行动；有广泛兴趣；不善于运用自身能量，做事虎头蛇尾；被人认为是有魄力、有主意的；对日常事务的兴趣不高；容易生厌及内心烦躁；对挫折的容忍度低；会冲动行事；也许曾有过被激怒、充满敌意地做出侵犯行为的情况；有时过分乐观；在某些方面自我夸大，看不到自身的局限性\n若60≤T≤64，则反映出被测可能有以下部分（程度）的表现：开朗、善社交、喜欢体育活动、愿意操纵和支配他人；常犯相同的错误；认为心理治疗是无必要的；会过早地结束疗程；当然，若被测是青年人，则也很可能暗示着一系列积极的特性，比如精力充沛、热情、开朗和活动能力强等", "若46≤T≤59，则通常反应被测有着低于平均值的轻躁狂水平；但若T分过低（45乃至35分以下），则可能表明：受测者正处于一种低精力水平、缺乏动力、倦怠的甚至是冷漠的状态（也许是疲劳或是生病，但更可能是预示其精力有限）；缺乏自信；可能面临着抑郁心境的困扰；可能年级较大（45岁以上），处于正常的衰老过程中"],
    ["Si（社交内向）", 70, 60, "高分，被试可能：社交内向；只有独处，或与少数好友相处时才能自然放松；害羞、保守、退缩；有异性存在时会感到不自然；很难让人了解；对他人如何评价自己很敏感", "若65≤T≤69，中等分，则被试可能：对与他人缺乏情感感到忧虑不安；过分自我控制；很少公开表露自己的情感；被动、服从、遵从权威；严肃、可靠、值得信赖、谨慎、保守、循规蹈矩；个人做事节奏慢\n若60≤T≤64，正常分，则被试可能：态度及观点僵硬、不灵活；即使做小事也难以下定决心；很容易忧心忡忡，感到自责", "T≤59，低分，被试可能：善社交，外向；开朗，喜欢集体生活，友善，健谈；很需要有人在其身边；与集体的关系融洽；富于表情，语言丰富，活跃，精力充沛；对地位、权力及名誉感兴趣；寻找竞争机会；有时难以控制冲动；会不计后果而采取行动；不成熟，自我放任；人际关系可能浮浅而不正诚；喜欢支配他人，人际关系忽冷忽热"],
  ];
  
  var damn = [3, 0, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
  
  function start_to_print_result(tscoreArray){
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.width = '80%';
    table.setAttribute('border', '3');
    table.style.margin = 'auto';
    table.setAttribute('bgcolor', '#B0C4DE');
  
    let headerRow = document.createElement('tr');
    headerRow.style.borderBottom = '2px solid black';
    table.appendChild(headerRow);
  
    let header1 = document.createElement('th');
    header1.textContent = '各量表的一致性T分';
    header1.style.padding = '8px';
    header1.style.borderRight = '1px solid black';
    headerRow.appendChild(header1);
  
    let header2 = document.createElement('th');
    header2.textContent = '最基本的部分解释';
    header2.style.padding = '8px';
    headerRow.appendChild(header2);
  
    for (let i = 0; i < 13; i++) {
      if (i === 7) { continue; } // 跳过 Mf
      let row = document.createElement('tr');
      table.appendChild(row);
  
      let cell1 = document.createElement('td');
      cell1.textContent = resultArray[i][0] + ' : ' + tscoreArray[damn[i]];
      cell1.style.padding = '8px';
      cell1.style.borderRight = '1px solid black';
      row.appendChild(cell1);
  
      let cell2 = document.createElement('td');
      if (tscoreArray[damn[i]] >= resultArray[i][1]) {
        cell2.textContent = resultArray[i][3];
      } else if (tscoreArray[damn[i]] >= resultArray[i][2]) {
        cell2.textContent = resultArray[i][4];
      } else {
        cell2.textContent = resultArray[i][5];
      }
      cell2.style.padding = '8px';
      row.appendChild(cell2);
    }
  
    document.body.appendChild(table);
  }
  
  function start_to_creat_profile(tscoreArray){
    let percentileArray = [];
    function calculatePercentile(tScore) {
      let zScore = (tScore - 50) / 10;
      let percentile = (1 + erf(zScore / Math.sqrt(2))) / 2;
      return percentile * 100;
    }
    tscoreArray.forEach(tScore => { percentileArray.push(calculatePercentile(tScore).toFixed(2)); });
  
    let profileTScoreArray = tscoreArray.slice(6,17);
  
    function findTopTwoScores(arr) {
      let filtered = arr.map((score, index) => ({ score, index })).filter(item => item.score > 60);
      filtered.sort((a, b) => b.score - a.score);
      let topTwo = filtered.slice(0, 2).map(item => item.index);
      return topTwo.sort((a, b) => a - b);
    }
  
    function addDescriptionBelowProfile() {
      var profileChart = document.getElementById('myChart1');
      profileTScoreArray.splice(5 - gender, 1); // 删去异性量表
      let codeType = findTopTwoScores(profileTScoreArray);
      codeType[0] = (codeType[0] + 1) % 10;
      codeType[1] = (codeType[1] + 1) % 10;
      if (codeType[0] > codeType[1]) { let tmp = codeType[0]; codeType[0] = codeType[1]; codeType[1] = tmp; }
      if (isNaN(codeType[0]) || isNaN(codeType[1])) codeType[0] = codeType[1] = 0;
      let cnScale = ['社会内向','疑病','抑郁','癔症','精神病态','','偏执','精神衰弱','精神分裂','轻躁狂'];
      cnScale[5] = gender ? '男性气质' : '女性气质';
  
      var title = document.createElement('h3');
      title.style.color = '#FFFFFF';
      title.textContent = '受测者的编码型是: ' + codeType[0] + codeType[1] + '('+cnScale[codeType[0]]+'和'+cnScale[codeType[1]]+')';
  
      var description = document.createElement('p');
      description.style.color = '#FFFFFF';
      description.textContent = profileArray[codeType[0]][codeType[1]];
  
      profileChart.parentNode.insertBefore(title, profileChart.nextSibling);
      profileChart.parentNode.insertBefore(description, title.nextSibling);
      return codeType;
    }
  
    if (gender === 0) {
      creat_trait_profile_1_male(percentileArray);
    } else {
      creat_trait_profile_1_female(percentileArray);
    }
  
    const codeForProfiles = addDescriptionBelowProfile();
    renderProfiles(codeForProfiles);
    return profileTScoreArray;
  }
  
  // Expose globals expected by my_script.js
  window.start_to_creat_profile = start_to_creat_profile;
  window.start_to_print_result = start_to_print_result;
  