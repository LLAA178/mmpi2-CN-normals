  // Score the test
  function score(options = {}) {
    const { suppressRender = false } = options;
    // 调用函数以清除之前的内容
    //clearContent();
    // Change mouse pointer to wait indicator
    // This does not seem to work because JavaScript blocks the UI message pump :(
    document.body.style.cursor = "wait";
  
    // Variable declarations
    let i, j, tscale, q, n, s, rp;
    let k, rawscore, kscore, tscore, percent;
    let t_cnt, f_cnt, cs_cnt, pe;
  
    // Make the scale and critical item tables
    //let scale_table = make_table("Scale", "Scale Description", "Raw Score", "K Score", "T Score", "% Answered");
    //let ci_table = make_table("Scale", "Scale Description", "Question", "Answer", "Question Text");

    //let tscoreArray = [];
    //提前初始化而不是一个个push，解决了数组元素错位的问题
    let tscoreArray = new Array(scales.length).fill(undefined);
    let kscoreArray = new Array(scales.length).fill(undefined);
    let rawscoreArray = new Array(scales.length).fill(undefined);

    // Count the number of True, False, and Can't Say answers
    n = longform ? questions.length : 371;
    t_cnt = 0;
    f_cnt = 0;
    cs_cnt = 0;
    for (q = 1; q < n; ++q) {
      switch (ans[q]) {
        case "T":
          ++t_cnt;
          break;
        case "F":
          ++f_cnt;
          break;
        default:
          ++cs_cnt;
          break;
      }
    }
    --q;
  
    // Add T/F/? stats to scale table
    //append_tr(scale_table, "True", " ", t_cnt, " ", " ", (t_cnt * 100 / q).toPrecision(3));
    //append_tr(scale_table, "False", " ", f_cnt, " ", " ", (f_cnt * 100 / q).toPrecision(3));
    //append_tr(scale_table, "?", " ", cs_cnt, " ", " ", (cs_cnt * 100 / q).toPrecision(3));

    // Score the TRIN/VRIN scales
    // Iterate the *RIN scales
    for (i = 0; i < rin.length; ++i) {
      // Start with default score
      rawscore = rin[i][0][2];
      // Iterate all the answer pairs
      for (j = 0; j < rin[i][1].length; ++j) {
        // Get reference to answer pair
        rp = rin[i][1][j];
        // If answers match, update the raw score
        if (ans[rp[0]] === rp[1] && ans[rp[2]] === rp[3]) {
          rawscore += rp[4];
        }
      }
      // Append results to scale table
      //append_tr(scale_table, rin[i][0][0], rin[i][0][1], rawscore, " ", rin[i][2 + gender][rawscore], " ");
    }

    //q是题号，ans[q]是第q题的答案，n是该维度回答数，rawscore是原始分，tscale是该维度的t分数组（按原始分从小到大排）
    // Score the scales and critical items
    k = 0;
    pe = 0;
    // Iterate all the scales

    for (i = 0; i < scales.length; ++i) {
      n = 0;
      rawscore = 0;
      // Get the T score table, critcal items will not have this (undefined)
      tscale = scales[i][3 + gender];
      // Iterate the True question list
      for (j = 0; j < scales[i][1].length; ++j) {
        // Get the question number
        q = scales[i][1][j];
        // Act upon the answer to that question
        switch (ans[q]) {
          // True
          case "T":
            // Increment the answer count
            ++n;
            // Increment raw score only if True
            ++rawscore;
            // If this is a critcal item, add it to the critical items table
            if (tscale === undefined) {
              //append_tr(ci_table, scales[i][0][1], scales[i][0][2], q, "True", questions[q]);
            }
            break;
          case "F":
            // Increment the answer count
            ++n;
            break;
        }
      }
      // Iterate the False question list (same procedure as True above)
      for (j = 0; j < scales[i][2].length; ++j) {
        q = scales[i][2][j];
        switch (ans[q]) {
          case "F":
            ++n;
            ++rawscore;
            if (tscale === undefined) {
              //append_tr(ci_table, scales[i][0][1], scales[i][0][2], q, "False", questions[q]);
            }
            break;
          case "T":
            ++n;
            break;
        }
      }
      // Add scale results to scale table
      // T score table must be defined, otherwise this is a critical item
      if (tscale !== undefined) {
        kscore = undefined;
        if (scales[i][0][2] === "Masculinity-Femininity - Female"){
          tscore = -(rawscore - tscale[1]) / tscale[2] * 10 + 50;
        }
        else{
          tscore = (rawscore - tscale[1]) / tscale[2] * 10 + 50;
        }
        //tscore = Math.floor(tscore + 0.5);
        tscore = tscore.toFixed(0);
        // Calculate percent answered
        percent = n * 100 / (scales[i][1].length + j);
        // Append results to score table


        //tscoreArray.push(tscore);
        tscoreArray[i] = tscore;
        rawscoreArray[i] = rawscore;
        kscoreArray[i] = kscore === undefined ? " " : kscore;

        //append_tr(scale_table, scales[i][0][1], scales[i][0][2], rawscore, kscore === undefined ? " " : kscore, tscore, percent.toPrecision(3));
  

        // Update profile elevation for the 8 scales
        switch (scales[i][0][1]) {
          case "Hs":
          case "D":
          case "Hy":
          case "Pd":
          case "Pa":
          case "Pt":
          case "Sc":
          case "Ma":
            pe += tscore;
            break;
        }
      }
    }

    // 这个居中死活调不好，爷不要啦，干
    // // Convert profile elevation sum to average (divide by number of scales)
    // pe /= 8;
    // // Show profile elevation in page
    // append_text("Profile Elevation: " + pe.toPrecision(3));
  
    // // Show an answer summary to allow for copy & paste of answers
    // append_text("Answer Summary");
    // s = "";
    // for (q = 1; q < questions.length; ++q) {
    //   s += ans[q];
    //   if (s.length >= 75) {
    //     append_text(s);
    //     s = "";
    //   }
    // }
    // if (s.length) { append_text(s); }
  
    // Restore mouse pointer
    document.body.style.cursor = "auto";


    /* 2023.11.16 尝试对undefined值做出警告 */
    // 所有需要的值都在tscoreArray中
    // 根据下面画图的函数推断，L F K对应的脚标应当是3 0 4
    // 不过L好像不会是undefined？记不清了，先写两个的编码吧，要不然太麻烦。有点懒。
    let encodeLFK; //从硬件编码里面找到的灵感
    // if(tscoerArray[3] === undefined && tscoreArray[0] === undefined && tscoreArray[4] === undefined){
    //   encodeLFK = 1
    // }
    if(tscoreArray[0] === undefined && tscoreArray[4] === undefined){
      encodeLFK = 0b11;
    }else if(tscoreArray[0] === undefined && tscoreArray[4] !== undefined){
      encodeLFK = 0b10;
    }else if(tscoreArray[0] !== undefined && tscoreArray[4] === undefined){
      encodeLFK = 0b01;
    }else{
      encodeLFK = 0b00;
    }

    switch (encodeLFK) {
      case 0b01:
        alert("侦测到您的K值是undefined，您可能没能很好理解题意，导致了误选。您的数据已经超出了量表的衡量范围。详见github issue   （https://github.com/MMPI-CHN/MMPI-CHN.github.io/issues/3）");
        break;
      case 0b10:
        alert("侦测到您的F值是undefined，您可能没能很好理解题意，导致了误选。您的数据已经超出了量表的衡量范围。详见github issue   （https://github.com/MMPI-CHN/MMPI-CHN.github.io/issues/3）");
        break;
      case 0b11:
        alert("侦测到您的F与K值是undefined，您可能没能很好理解题意，导致了误选。您的数据已经超出了量表的衡量范围。详见github issue   （https://github.com/MMPI-CHN/MMPI-CHN.github.io/issues/3）");
        break;
      case 0b00:
      default:
        // 
        break;
    }

    /* 突然想到的另一个优化点：万一他们临床量表也出了问题呢？ */
    /* 不过这里需要分性别。Mf的脚标是分男女的。 */
    /* 只选取某几个关键值侦测 */
    // Female： 6 7 8 9 11 12 13 14 15 16
    // Male： 6 7 8 9 10 12 13 14 15 16
    // 暂时不管内容量表。项太多了，不少项我都不认识。
    if(gender === 0){
      // Male
      if(tscoreArray[6] === undefined || tscoreArray[7] === undefined || 
        tscoreArray[8] === undefined || tscoreArray[9] === undefined || 
        tscoreArray[9] === undefined || tscoreArray[10] === undefined || 
        tscoreArray[12] === undefined || tscoreArray[13] === undefined || 
        tscoreArray[14] === undefined || tscoreArray[15] === undefined || 
        tscoreArray[16] === undefined){
          alert("侦测到您的临床量表中有值是undefined，您可能没能很好理解题意，导致了误选。您的数据已经超出了量表的衡量范围。详见github issue   （https://github.com/MMPI-CHN/MMPI-CHN.github.io/issues/3）");
      }
    }else{
      // Female
      if(tscoreArray[6] === undefined || tscoreArray[7] === undefined || 
        tscoreArray[8] === undefined || tscoreArray[9] === undefined || 
        tscoreArray[9] === undefined || tscoreArray[11] === undefined || 
        tscoreArray[12] === undefined || tscoreArray[13] === undefined || 
        tscoreArray[14] === undefined || tscoreArray[15] === undefined || 
        tscoreArray[16] === undefined){
          alert("侦测到您的临床量表中有值是undefined，您可能没能很好理解题意，导致了误选。您的数据已经超出了量表的衡量范围。详见github issue   （https://github.com/MMPI-CHN/MMPI-CHN.github.io/issues/3）");
        }
    }
    //生成随机队列 debug用
    //tscoreArray = generateRandomArray(tscoreArray.length)
    // 根据性别，打出效度量表、临床量表及内容量表的剖析图。可能还会添加特殊项目量表。
    console.log(rawscoreArray);
    window.__lastTscoreArray = tscoreArray;
    profile = start_to_creat_profile(tscoreArray);

    // 根据结果（T分），打出对应的诊断。以表格方式呈现。
    // start_to_print_result(tscoreArray);

    // Debug...
    if (!suppressRender) {
      start_to_print_result(tscoreArray);
    }
    return profile;
  }
  
  // Read status of radio button group and return value of selected button
  function radio_value(rb) {
    if (!rb) { return; }
    for (let i = 0; i < rb.length; i++) {
      if (rb[i].checked === true) {
        return rb[i].value;
      }
    }
  }

  // --- Debug/Profiling helpers ---
  function withProfiling(label, fn){
    try{
      const t0 = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      const out = fn();
      const t1 = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      console.log(`[PROFILE:${label}] ${(t1 - t0).toFixed(3)} ms`);
      return out;
    }catch(e){
      console.warn(`[PROFILE:${label}] failed`, e);
      throw e;
    }
  }
  function getDebugTwoPoint(){
    try{
      const qs = (typeof window !== 'undefined' && window.location) ? new URLSearchParams(window.location.search) : null;
      const v = qs ? qs.get('codetype') : null;
      if (v && /^\d{2}$/.test(v)){
        return [Math.min(+v[0], +v[1]), Math.max(+v[0], +v[1])];
      }
    }catch(_){ }
    try{
      const input = (typeof prompt !== 'undefined') ? prompt('输入两点编码型（例如 12、24；留空则不覆盖）', '') : '';
      if (input && /^\d{2}$/.test(input)){
        return [Math.min(+input[0], +input[1]), Math.max(+input[0], +input[1])];
      }
    }catch(_){ }
    return null;
  }
  // --- end helpers ---

  // Fill the answer array with radio button state and score
  function score_rb(form) {
    use_long_form(false);
  
    ans = [undefined];
    for (let i = 1; i < questions.length; ++i) {
      let rbv = radio_value(form.elements["Q" + i]);
      if (rbv) {
        ans.push(rbv);
      } else {
        ans.push("?");
      }
    }

    let rawData = 
    `TTTFF   TTTTT   FTTTF   TFFTT   TTFFT   FTFTF   FFTFT   FTFTF
    TFTFT   FTFTF   TFFTF   FTTFF   TFTTF   FTTFF   FFFFT   TTFFF
    
    TFTFT   FFFFF   FFTFT   FFTFF   FTTFT   TFFTT   FTTFT   FTTFF
    FFTFT   FFFFF   FFFTF   TFFTF   TTFFF   FFTFF   TTTTF   FTFTF
    
    FFTTT   TFFTF   TFTTF   TTFTF   TFTTF   TTFTF   TFFFT   FFTFT
    TFTTT   TFTTT   FFTTF   FTFFF   FTTTF   FTFFF   TFFTF   TFFTF
    
    FFFTT   FFTTT   FFFFT   FTFTT   TTFFT   TTTTT   TTFFF   FFTTT
    TFTTT   TFTFF   FFTFT   FTFFF   FTFFF   FFFFF   FFFTT   TFTFF
    
    TFTTF   FFFFT   FFFFF   FFTFF   FFFTF   FTFTF   FTFTF   FTFFT
    FTFTT   FTFFF`;
    if(DEBUG_MODE){
      ans = rawData.replace(/\s+/g, '').split('');
      ans.unshift("");
      console.log(ans);
    }
    if (typeof DEBUG_MODE !== 'undefined' && DEBUG_MODE === true){
      const override = getDebugTwoPoint();
      if (override){
        window.__DEBUG_FORCED_CODETYPE = override;
      } else {
        window.__DEBUG_FORCED_CODETYPE = undefined;
      }
      // "all" only: measure score (without rendering) and then measure rendering separately
      profile = withProfiling('score', () => score({ suppressRender: true }));
      withProfiling('render', () => start_to_print_result(window.__lastTscoreArray || []));
    } else {
      profile = score();
    }


    /* 2023.11.16 尝试对undefined值做出警告 */
    // 看了一眼，好像要到score()这个函数里面去找变量

    // 20230525凌晨加的
    // 创建图片元素
    var img = document.createElement('img');
    img.src = 'images/ali.jpg'; // 替换为要显示的图片路径

    // 设置图片样式
    img.style.width = '15%'; // 设置宽度为50%
    img.style.display = 'block'; // 设置为块级元素
    img.style.margin = 'auto'; // 设置居中对齐

    // 创建注释性文字元素
    var span = document.createElement('span');
    //var span2 = document.createElement('span2');
    var text = document.createTextNode('如果我在心理学和编程方面的工作对你有帮助，欢迎随意打赏肯定一下我的付出:)'); 
    //var text2 = document.createTextNode('观心自在，欢喜随缘，多少无谓。');
    span.appendChild(text);
    //span2.appendChild(text2);

    // 设置文字样式
    span.style.display = 'block'
    span.style.textAlign= 'center'; // 设置居中对齐
    span.style.color = '#B0C4DE'; // 设置文字颜色
    span.style.fontFamily = 'KaiTi'; // 设置字体为楷体
    //span2.style.display = 'block'
    //span2.style.textAlign= 'center'; // 设置居中对齐
    //span2.style.color = '#B0C4DE'; // 设置文字颜色
    //span2.style.fontFamily = 'KaiTi'; // 设置字体为楷体
   
    // 插入三个空白行
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(document.createElement('br'));

    // 将图片元素添加到文档中
    document.body.appendChild(img);

    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(span);
    //document.body.appendChild(span2);
    return profile;
  }
  
  // Fill the answer array from text and score
  function score_text(anstext) {
    //alert("Score Text: "+anstext.length);
    ans = [undefined];
    let n = 1;
    // Check each character of text
    for (let i = 0; i < anstext.length; ++i) {
      // Ignore control characters (0 to 31) and space (32)
      if (anstext.charCodeAt(i) > 32) {
        // Convert character to 'T','F' or '?'
        let a;
        switch (anstext.charAt(i)) {
          case "T":
          case "t":
          case "Y":
          case "y":
          case "X":
          case "x":
            a = "T";
            break;
          case "F":
          case "f":
          case "N":
          case "n":
          case "O":
          case "o":
            a = "F";
            break;
          case "?":
          case "-":
            a = "?";
            break;
          default:
            a = undefined;
            break;
        }
        // Save valid answer in answer array
        if (a) {
          ans.push(a);
          ++n;
        }
      }
    }
    alert((n - 1) + " answers entered");
    // If too few valid characters where processed, fill the remaining answers with '?'
    for (; n < questions.length; ++n) { ans.push("?"); }
    // Score it
    score();
  }
  
  // Set the test gender - called by onclick() event in the form
  function set_gender(g) {
    gender = g;
    //alert("gender: "+g);
  }
  
  // Set the test length - called by onclick() event in the form
  function use_long_form(lf) {
    let lfd = document.getElementById("longformdiv");
    lfd.style.display = lf ? "inline" : "none";
  }

  window.score = score;
  window.radio_value = radio_value;
  window.score_rb = score_rb;
  window.score_text = score_text;
  window.set_gender = set_gender;
  window.use_long_form = use_long_form;
  
  // Also expose profile rendering hooks (assumes they are defined elsewhere)
  window.start_to_creat_profile = typeof start_to_creat_profile !== 'undefined' ? start_to_creat_profile : window.start_to_creat_profile;
  window.start_to_print_result = typeof start_to_print_result !== 'undefined' ? start_to_print_result : window.start_to_print_result;
  