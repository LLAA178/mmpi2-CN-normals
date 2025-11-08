const DEBUG_MODE = true;
// Append text to the DOM
function append_text(txt) {
    let docbody = document.getElementsByTagName("body")[0];
    // docbody.appendChild(document.createTextNode(txt));
    /*meow meow 20230307*/
    let newP = document.createElement("p");
    // newP.setAttribute("text-align", "center");
    newP.style.margin = "0 auto";
    // newP.setAttribute("color", "white");
    newP.style.color = "#FFFFFF";
    let myTextNode = document.createTextNode(txt);
    newP.appendChild(myTextNode);
    docbody.appendChild(newP);
    
    docbody.appendChild(document.createElement("br"));
  }
  
  // Append row data to a row
  function append_td(row, txt) {
    let tdata = document.createElement("td");
    tdata.appendChild(document.createTextNode(txt));
    row.appendChild(tdata);
  }
  
  // Append a row of data to a table
  function append_tr(table) {
    let trow = document.createElement("tr");
    for (let i = 1; i < arguments.length; ++i) {
      append_td(trow, arguments[i]);
    }
    table.appendChild(trow);
  }
  
  // Append a table to the DOM and return a reference to it
  // Arguments are table headings (variable length)
  function make_table() {
    let docbody, table, thead, tbody, trow, i;
  
    docbody = document.getElementsByTagName("body")[0];
    table = document.createElement("table");
    table.setAttribute("border", "3");
    
    /*meow meow 20230307*/
    // table.setAttribute("align", "center");
    table.style.margin = "auto";
    table.setAttribute("bgcolor", "#B0C4DE");

    thead = document.createElement("thead");
    table.appendChild(thead);
    tbody = document.createElement("tbody");
    table.appendChild(tbody);
    docbody.appendChild(table);
  
    trow = document.createElement("tr");
    for (i = 0; i < arguments.length; ++i) {
      append_td(trow, arguments[i]);
    }
    thead.appendChild(trow);
  
    return tbody;
  }
  
  longform = true;	// All questions or first 370
  gender = 0;		// 0==male, 1==female
  ans = []; 		// Answers to questions: [T,F,?]
  
  /* meowmeow 20230307 */
// 假设您有一个表单元素和一个文本元素，它们的ID分别为'formElement'和'textElement'
// 每次生成新的表单和文字之前，先清除之前的内容

function clearTablesAndGraphics() {
  // 获取文档中所有的table元素
  var tables = document.getElementsByTagName('table');
  // 反向遍历所有table元素
  for (var i = tables.length - 1; i >= 0; i--) {
    // 从其父节点中移除table元素
    tables[i].parentNode.removeChild(tables[i]);
  }
  
  // 获取文档中所有的img元素
  var images = document.getElementsByTagName('img');
  // 反向遍历所有img元素
  for (var j = images.length - 1; j >= 0; j--) {
    // 从其父节点中移除img元素
    images[j].parentNode.removeChild(images[j]);
  }
  
  // 清除可能由score函数添加的其他元素，例如段落和换行
  var paragraphs = document.getElementsByTagName('p');
  for (var k = paragraphs.length - 1; k >= 0; k--) {
    paragraphs[k].parentNode.removeChild(paragraphs[k]);
  }
  
  var breaks = document.getElementsByTagName('br');
  for (var l = breaks.length - 1; l >= 0; l--) {
    breaks[l].parentNode.removeChild(breaks[l]);
  }
}
function removeTextByTextContent(textContent) {
  // 获取所有span元素
  var spans = document.getElementsByTagName('span');
  // 遍历span元素
  for (var i = spans.length - 1; i >= 0; i--) {
    // 如果span元素的文本内容匹配给定的文本
    if (spans[i].textContent.includes(textContent)) {
      // 从其父元素中移除该span元素
      spans[i].parentNode.removeChild(spans[i]);
    }
  }
}
function removeTextByTextContent2(textContent) {
  // 获取所有span元素
  //var spans2 = document.getElementsByTagName('span2');
  // 遍历span元素
  for (var i = spans2.length - 1; i >= 0; i--) {
    // 如果span元素的文本内容匹配给定的文本
    if (spans2[i].textContent.includes(textContent)) {
      // 从其父元素中移除该span元素
      spans2[i].parentNode.removeChild(spans2[i]);
    }
  }
}
function generateRandomArray(arrayLength) {
  const min = 30;
  const max = 80;
  let randomArray = [];

  for (let i = 0; i < arrayLength; i++) {
    randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return randomArray;
}
function clearContent() {
  // 获取body元素
  let docBody = document.getElementsByTagName("body")[0];
  
  // 获取所有的p元素（假设问题和间隔都在p元素中）
  let pElements = docBody.getElementsByTagName("p");
  // 获取所有的h3元素（假设问题和间隔都在p元素中）
  let h3Elements = docBody.getElementsByTagName("h3");
  // 获取所有的table元素
  let tableElements = docBody.getElementsByTagName("table");
  // 获取所有的span元素
  //let spanElements = docBody.getElementsByTagName("span2");
  // 获取所有的img元素（假设图形是以img元素显示）
  let imgElements = docBody.getElementsByTagName("img");
  
  // 删除所有的table和img元素
  for (let i = tableElements.length - 1; i >= 0; i--) {
    tableElements[i].parentNode.removeChild(tableElements[i]);
  }
  for (let i = imgElements.length - 1; i >= 0; i--) {
    imgElements[i].parentNode.removeChild(imgElements[i]);
  }
  //for (let i = spangElements.length - 1; i >= 0; i--) {
    //spanElements[i].parentNode.removeChild(spanElements[i]);
  //}
  // 删除位于问题和间隔之后的所有p元素
  let lastQuestionIndex = -1;
  for (let i = 0; i < pElements.length; i++) {
    if (pElements[i].textContent.includes('临床量表')) {
      lastQuestionIndex = i;
    }
  }
  
  for (let i = pElements.length - 1; i > lastQuestionIndex; i--) {
    pElements[i].parentNode.removeChild(pElements[i]);
  }
// 删除位于问题和间隔之后的所有p元素
    let lastQuestionIndex1 = -1;
    for (let i = 0; i < h3Elements.length; i++) {
      if (h3Elements[i].textContent.includes('临床量表')) {
        lastQuestionIndex1 = i;
      }
    }
    
    for (let i = h3Elements.length - 1; i > lastQuestionIndex1; i--) {
      h3Elements[i].parentNode.removeChild(h3Elements[i]);
    }
    // 调用函数并传入要删除的文本内容
    removeTextByTextContent('如果我业余时间的工作或多或少对您有一些帮助');
    removeTextByTextContent2('观心自在，欢喜随缘，多少无谓。');
}
  // Score the test
  function score() {
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
    profile = start_to_creat_profile(tscoreArray);

    // 根据结果（T分），打出对应的诊断。以表格方式呈现。
    // start_to_print_result(tscoreArray);

    // Debug...
    start_to_print_result(tscoreArray);
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
    profile = score();


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
  
  
  
  function my_doc_write_all_questions() {
    //for (var i = 1; i < questions.length; ++i) {
      for (var i = 1; i <= 370; ++i) {
      //my_doc_write_question("Q" + i, i + ". " + questions[i], questions_zh[i]);
      my_doc_write_question("Q" + i, i + ". " + questions_zh[i]);
      if (i === 370) { document.write("<div id=\"longformdiv\">"); }
    }
    if (i > 370) { document.write("<\/div>"); }

    // 在函数末尾调用 score_rb 函数
    //var scoreArray = score_rb(document.forms.questions);
    //将结果转换为字符串并存储在隐藏字段中
    //document.getElementById('scoreResults').value = JSON.stringify(scoreArray);
  // 如果是 Debug 模式，允许不作答直接提交
    if (DEBUG_MODE) {
      removeRequired();     // 去掉 required 属性，防止强制作答
      // 如需预填答案，可调用 autoFillAnswers()
      // autoFillAnswers();
    }
  }
  
  //function my_doc_write_question(name, text, text_zh) {
  function my_doc_write_question(name,text_zh) {
    //document.write(text + "<br>", text_zh + "<br>");
    document.write(text_zh + "<br>");
    /* 下面这行是原版。现在为了debug，加一个checked标签使该选项默认选中 */ 
    document.write("<input type=\"radio\" id=" + name + " name=\"" + name + "\"value=\"T\" required=\"required\" ><label for=" + name +">是</label>");

    /* For debugging... */
    // document.write("<input type=\"radio\" id=" + name + " name=\"" + name + "\" value=\"T\" required=\"required\" checked=\"checked\"><label for=" + name + ">是</label>");

    // document.write("<input type=\"radio\" name=" + name + " value=\"T\" >是");
    // document.write("<input type=\"radio\" name=" + name + " value=\"F\">否");
    document.write("<input type=\"radio\" id=Not_" + name + " name=\"" + name + "\"value=\"F\" required=\"required\" ><label for=Not_" + name +">否</label>");
    document.write("<br><br><br>");
  }

// Debug...
var myArray = [
  ["apple", "苹果"],
  ["banana", "香蕉"],
  ["orange", "橙子"],
  ["grape", "葡萄"],
  ["watermelon", "西瓜"]
];

// 2023.5.26添加了一个移动端的简单提示信息。
function showModalInThePhone(){
  // 创建一个包含自定义内容的 div 元素
  var modalContent = document.createElement("div");
  modalContent.innerHTML = `
    <div class="modal-content">
      <span class="modal-close" onclick="hideModal()"></span>
      <h1>重要提示</h1>
      <p>1、本网页的开发是基于桌面浏览器的，我已经尽量适配移动端了；若您目前使用的是手机等移动端设备，可能会显示该提示信息。在PC端，此处显示的应是一些关于重要的信息。虽然您可以在移动端正常完成整个测试并拿到结果，但排版并没有PC端漂亮，而且您也漏看了“测试须知”。我们强烈建议您使用桌面浏览器进行该测试。</p>
      <p>2、本测验完全<b>免费</b>，不存在花钱买报告的情况。本项目由我独自开发，如果觉得做得还行，看完剖析图和报告后可以捐点钱给我买游戏 :D</p>
      <input class="my_button" type="button" value="我已认真阅读并知晓，可以开始测验" onclick="hideModal();">
    </div>
  `;

  // 创建一个包含背景和提示框内容的 div 元素
  var modal = document.createElement("div");
  modal.className = "modal";
  modal.appendChild(modalContent);

  // 将提示框添加到页面中
  document.body.appendChild(modal);
}

function showModal() {
  // 创建一个包含自定义内容的 div 元素
  var modalContent = document.createElement("div");
  modalContent.innerHTML = `
    <div class="modal-content">
      <span class="modal-close" onclick="hideModal()"></span>
      <h1>重要提示</h1>
      <p>0、请勿空题！虽然该量表在设计时允许空题，但是这会产生蝴蝶效应，使得量表对于没有阅读障碍的被试的可信度大大降低。</p>
      <p>1、我们不会收集任何与您有关的信息；做完量表后，会有一个提交按钮将数据交给前端脚本处理，本网站完全没有后端！</p>
      <p>2、请认真对待该测验；MMPI是少有的具有完整理论与多年实践的专业（人格）量表，可以帮助您更好地认识自己。需要注意的是，由于该量表常用于临床，因此它主要着眼于您“<b>也许</b>存在的问题”以及“<b>也许</b>拥有的人格特质”。</p>
      <p>3、该量表的结果（真的真的）仅供参考；这是因为，虽然本网站根据您的选择计算得到的一致性T分是准确的，但解读可能不够完全。现实中，对该量表做出解释高度依赖于被试的态度、职业，以及一些特殊情景（如近期事件）等；若您希望获得更详细的解答，可以保存我们给出的量表的剖析图，并在日后咨询专业人士。</p>
      <p>4、点击<b>提交测试</b>后，您将得到：一张人格剖析图，以及对应编码型的详尽解析，以及您作答的每个量表维度的简短解析；</p>
      <p>5、本测验完全<b>免费</b>，不存在花钱买报告的情况。本项目由我独自开发，如果觉得做得还行，看完剖析图和报告后可以捐点钱给我买游戏 :D</p>
      <input class="my_button" type="button" value="我已认真阅读并知晓，可以开始测验" onclick="hideModal();">
    </div>
  `;

  // 创建一个包含背景和提示框内容的 div 元素
  var modal = document.createElement("div");
  modal.className = "modal";
  modal.appendChild(modalContent);
// //  滑动？？？ 
// modal.addEventListener("touchmove", function(e) {
//   e.stopPropagation();
// }, false);
  // 将提示框添加到页面中
  document.body.appendChild(modal);
  
}

function hideModal() {
  // 隐藏提示框
  var modal = document.querySelector(".modal");
  document.body.removeChild(modal);
}

function selectAll() {
  // 获取表单元素
  const form = document.getElementById("select_all");

  // 选中所有表单元素中的值
  let inputs = form.querySelectorAll("input[type=\"radio\"]");
  // let value = "T";

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
  }
}
