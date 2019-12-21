'use strict';

/**
 * [누구 템플레이트 설명]
 * 구글 cloud용으로 만들어진 단독 파일입니다.
 * exports.nugu_template 의 'nugu_template'는 설정된 이름에 맞추어서 바꾸어 주시면 됩니다.
 *
 * req.body는 SK nugu에서 들어오는 json입니다.
 */

exports.nugu_saja = (req, res) => {
    const appTitle = 'four_cha_quiz'; // 앱 타이틀을 적어주세요
    const requestBody = req.body; //request의 body부분
    const parameters = requestBody.action.parameters;// 파라메터 부분
    const context = requestBody.action.context; //컨텍스트, OAuth연결시 토큰이 들어옵니다
    const actionName = requestBody.action.actionName; // action의 이름

    //디버그 용, actionName을 표시합니다
    console.log(`requestBody: ${JSON.stringify(requestBody)}`);
    console.log(`request: ${JSON.stringify(actionName)}`);
    console.log(`parameters: ${JSON.stringify(parameters)}`)


    //response json 필드. 여기서 json을 만들어준다.
    function makeJson(jsons) {
      /**
       * [makeJson 설명]
       * @json {jsons}
       * 안에는 누구로 보낼 json들이 있습니다
       * json안에는 파라메터들이 있으며, 각 파라메터는 sk nugu의 play에서 지정한
       * 이름과 동일해야 합니다.
       */
      let jsonReturn = {
        "version": "2.0",
        "resultCode": "OK",
        "directives": {
          "AudioPlayer": {
            "type": "AudioPlayer.Play",
            "audioItem": {
              "stream": {
                "url": "",
                "offsetInMilliseconds": "",
                "progressReport": {
                  "progressReportDelayInMilliseconds": "",
                  "progressReportIntervalInMilliseconds": ""
                },
                "token": "",
                "expectedPreviousToken": ""
              },
              "metadata": {}
            }
          }
        }
      }

      jsonReturn.output = jsons;
      return jsonReturn;
    }


    /**
     * [answername 설명]
     * @answername : json으로 보낼 파라메터 이름을 지정합니다.
     * 여기서는 answername으로 합니다.
     */
    // intent
    function action_intent(httpRes) {
      let speechText = '';
      let output = {};

      output.answername = speechText;
      return res.send(makeJson(output));
    } //function


  let quizArray = ["고진감래","과유불급","개과천선","대동소이","동병상련",
            "사필귀정","죽마고우","삼고초려","십시일반","역지사지",
            "인과응보","전화위복","지성감천","결초보은","군계일학",
            "금상첨화","금의환향","금지옥엽","기상천외","화양연화"];
  let quizmean = ["고생 끝에 낙이 온다","정도가 지나친 것은 미치지 못한 것과 같다","지난 날의 잘못을 뉘우치고 착한사람이 된다",
  "큰 부분은 같으나 작은부분은 다르다","어려운 처지에 있는 사람들끼리 서로 가엽게 여긴다",
  "모든 일은 반드시 바른길로 돌아간다","어릴 때부터 같이 놀며 자란 벗이다",
  "인재를 받아들이기 위하여 참을성 있게 노력한다",
  "여러 사람이 조금씩 힘을 합치면 한사람을 돕기 쉽다","처지를 바꾸어 생각해본다",
  "행한 대로 업에 대한 대가를 받는다","재앙과 화난이 바뀌어 오히려 복이 된다",
  "지극한 정성에 하늘도 감동한다","죽어서도 잊지 않고 은혜를 갚는다",
  "많은 사람 중에서 뛰어난 인물이다","좋고 아름다운 것 위에 더 좋은 것을 더한다",
  "크게 성공하여 자신의 고향이나 집으로 돌아온다","임금의 자손이나 또는 귀여운 자손을 소중하게 일컫는 말이다",
  "상식을 벗어난 아주 엉뚱한 생각","인생에서 가장 아릅답고 행복한 순간이다"];
  let mix=[quizArray,quizmean];
  let check; // 정답인지 오답인지
  let arr=[parameters.fir,parameters.sec,parameters.thi,parameters.fou,parameters.fif];
  let output={};

  function answer_function(){
    let aquiz, amean;
    let plus_quiz="";
    let index;

    index= Math.floor(Math.random() * (quizArray.length));

    aquiz=quizArray[index];
    amean=quizmean[index];

    for (var i = 0; i < aquiz.length; i++) {
      plus_quiz+=aquiz.charAt(i)+'<break type="strong"/>';
    }

    output.plus_saja=plus_quiz;
    output.saja=aquiz;
    output.mean=amean;
    return res.send(makeJson(output));

  }

  function mean_function(){
    let w_saja=parameters.what_saja.value;
    let amean;
    console.log("사자성어를 찾아라 %s",w_saja)
    for (var i = 0; i < quizArray.length; i++) {
      if (quizArray[i]==w_saja) {
        amean=quizmean[i];
      }
    }
    console.log(amean);
    output.mean_is=amean;
    return res.send(makeJson(output));
  }


    function ingsaja_function(){
      let index=parameters.que_index.value;
      let temp=quizArray[arr[index].value];

      console.log('정답은: %s',temp);
      console.log(mix[0][0]);
      console.log(quizmean[arr[index].value])

      let an=parameters.answer.value;
        if (an==temp.substr(2,2)){
          check="정답";
            ++parameters.ans_cnt.value;
        }
        else {
          check="오답";
        }

      /*  for (var k = 0; k < arr.length; k++) {
          console.log(arr[k].value);
        }*/

      ++index;
      console.log(parameters.que_index);

      output.que_index=index;
      output.ans_cnt=parameters.ans_cnt.value; //정답 개수 세는 변수
      output.check=check;
      output.front_two=quizArray[arr[index].value].substr(0,2);
      return res.send(makeJson(output));
    }

    function last_function(){
      let index=parameters.que_index.value;
      let temp=quizArray[arr[index].value];

      console.log('정답은: %s',temp);
      let an=parameters.answer.value;
        if (an==temp.substr(2,2)){
          check="정답";
          ++parameters.ans_cnt.value;
        }
        else {
          check="오답";
        }

      output.check=check;
      output.ans_cnt=parameters.ans_cnt.value
      return res.send(makeJson(output));
    }


    function startsaja_function(){
      let rand_arr=[];
      //난수생성
        for (var i = 0; i < 5; i++) {
          rand_arr[i]= Math.floor(Math.random() * (quizArray.length));
          for (var j = 0; j < i; j++) {
            if (rand_arr[i]==rand_arr[j]) {
                i=i-1;
                break;
            }
          }
        }

      output.fir=rand_arr[0];
      output.sec=rand_arr[1];
      output.thi=rand_arr[2];
      output.fou=rand_arr[3];
      output.fif=rand_arr[4];
      output.ans_cnt=0;
      output.que_index=0;
      output.front_two=quizArray[rand_arr[0]].substr(0,2);

      console.log(quizArray[rand_arr[0]]);
      return res.send(makeJson(output));
    }




    //액션 선언 모음, 여기서 액션을 선언해 줍니다.
//    const ACTION_TEMPLATE = 'ACTION.template';
    const ING_SAJA='ing_saja';
    const START_SAJA='start_saja';
    const MIDDLE='middle';
    const LAST='last';
    const ANSWER_SAJA='answer_saja';
    const MEAN_IS_SAJA='mean_is_saja';

    switch (actionName) {
      // 최초 실행시 오는 intent. LaunchRequest만 쓴다.
      case ING_SAJA:
        return ingsaja_function()
        break;
      case START_SAJA:
        return startsaja_function()
        break;
      case MIDDLE:
        return ingsaja_function()
        break;
      case LAST:
        return last_function()
        break;
      case ANSWER_SAJA:
        return  answer_function()
        break;
      case MEAN_IS_SAJA:
        return  mean_function()
        break;
  }

/*
    // Intent가 오는 부분, actionName으로 구분합니다.
    switch (actionName) {
      // 최초 실행시 오는 intent. LaunchRequest만 쓴다.
      case ACTION_TEMPLATE:
        return action_intent(res)
        //INTENT_REQUEST의 경우 하위 function에서 switch로 intent를 처리합니다.
*/
}
