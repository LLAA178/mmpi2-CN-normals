const DEBUG_MODE = false;
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
