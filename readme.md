# Sk Nugu AI Speaker - 사자성어 게임

Sk Nugu play builder 로 사자성어 게임을 만들어봤다 <br>
사자성어 앞의 두글자를 문제로 내고 => 답변을 사자성어 뒤 두글자를 대답하는 형식이다<br>

***

# 동기

<div align="center">
<img src="https://postfiles.pstatic.net/MjAxOTA5MDNfMTY4/MDAxNTY3NTIxNTMzMTg2.HuOcoxZIPBhvIImRm4-zvVU3Yah25gbfoRp7WbrvrMgg.US_t09vfhFWAIB_2cOW4XAJVQaB0dbA3HkD0Mb-UbMEg.JPEG.sjszzang0929/output_939541074.jpg?type=w966" height="400"> <img src="https://postfiles.pstatic.net/MjAxOTA5MDNfNDYg/MDAxNTY3NTIxNTE3MjA2.FCQ9o_vhIa4FxaWXf76BCFosmNtVQOSQjNy71qY452Ig.bqRXr2KGRL1UXp9hcraeyJnTI8iyRJsUM36CqNtEZfwg.JPEG.sjszzang0929/output_3337481737.jpg?type=w966" height="400">
<br>


휴학생활을 하고 있던 찰나 , 페북으로 SK 아카데미에서 수업이 진행 된다는 것을 알게 되었다<br>
때 마침 시간도 가능하고 새로운 프로젝트를 할 수 있겠다 라는 생각에 바로 참가했다!

총 3일차로 수업이 이뤄졌다! 더 자세한 내용은 블로그에 올렸다 =>
[NUGU DEV days](https://blog.naver.com/sjszzang0929/221639494478)

원래는 이때 다인원 아이돌에 빠졌을 때라 각 파트당 맞춰보는 게임을 만들고 싶었다<br>
**하지만 저작권이란 중요한 문제**이므로 새로운 주제가 필요했다 ㅠㅠ<br>
그러던 찰나 **신서유기의 네글자 게임**이 떠올랐고 <br>
이 세상에 있는 모든 네글자를 다 끌어오기는 힘드니까 <br>
그 중에 제한적인 사자성어로 해야겠다고 생각을 갖고 틀을 잡기 시작했다! <br>

</div>


***

# 설정

<div align="center">

먼저 [NUGU developers](https://developers.nugu.co.kr/#/) 에서 회원가입을 한다음 <br>

<br><img src="/image/playbuilder.png" width="80%"><br>

developer 사이트에서 사진과 같은 방법으로 play builder에 넘어오면 된다<br>


<br><img src="/image/play.PNG" width="80%"><br>

**Play 시작안내 , 종료안내 , 처리할수 없는 내용의 응답 셋 다 예시와 같게 적어도 무방하다** <br>
조금 더 다르게 작성하고 싶다면(더 친절하게?) 그에 맞게 작성해도 된다! <br>
SK Nugu play 기본설정이 다 되었다면 백엔드 설정으로 넘어가면 된다<br>


수업에서 네이버 클라우드랑 구글 클라우드 두가지 방법을 알려줬는데 나는 구글클라우드가 더 편했다!<br>
~~(깃허브에 템플릿도 있어서 그럴지도..ㅎ)~~


처음으로 [구글클라우드](https://cloud.google.com/functions/) 를 들어가게 되면 뜨는 화면이다 <br>

<br><img src="/image/gcloud.png"> <br>

1년간 무료로 사용할 수 있는 크레딧을 주기때문에 공부삼아 해보기 딱 좋다

<br><img src="/image/function.png" width="95%"><br>

빨간 화살표가 있는 곳은 클릭을 해서 들어가면 된다

<br><img src="/image/function_01.png" width="33%"><img src="/image/function_02.png" width="33%"><img src="/image/function_03.png" width="33%"><br><br>

사진 순서대로 따라오면 직접 만든 nugu play kit 에 맞는 백엔드서버도 만들어진다<br>
만든 후에는 nugu play builder로 이동해서 외부연동서버 주소에 URL을 넣어줘야한다<br>

<br><img src="/image/backend_add.png" width="60%"><br>

다 만들고 나서 **Cloud functions -> 트리거 -> URL** 을 복사해도 되고 <br>
위에서 맨 왼쪽 사진에 nugu play builder에 넣어야할 주소라고 했던 URL을 복사해도 된다<br>

<br><img src="/image/외부연동서버.png"><br>

그다음 nugu play builder로 와서 순서대로 입력을 해주면 된다 <br>
연결 실패시 prompt 에다가 인공지능 스피커가 말할 내용까지 작성해주면 기본 설정은 끝이 난다<br>
사진과 같게 적어도 되고 다르게 작성해도 상관 없다<br>


</div>

***

# 기능

## 1. 사자성어 게임

<div align="center">
<img src="https://postfiles.pstatic.net/MjAxOTA5MDdfNzQg/MDAxNTY3ODU5MDYwMjEy.1dBvgqEYsN7mlSUfTeKhrl1RPmBUtv1LFOF3d3rWc0gg.ZpQVAZ1hyTBHgHg3EPzvmFDxDg2_je9rY4QiAxUKxvMg.PNG.sjszzang0929/SE-b69b9e60-ce12-4046-bd1c-9153b44dec43.png?type=w966" width="65%"><br>


구현하고 싶은 전체적인 틀을 노트에다가 그렸보았다 <br>
반복문을 구현하고 싶은데 어떻게 하면 가능할지 고민해보았다 <br>

<br><img src="https://postfiles.pstatic.net/MjAxOTA5MDdfMjIz/MDAxNTY3ODU3ODAzMjA3.3YjmaaoB-eAL09gEqCrL2Rt9C-96j853vMyu1zMHJXAg.Nl4W01JGY-HKwc9xDxy_Ivu5I5BJlqAx19z_F7AC7Kcg.PNG.sjszzang0929/image.png?type=w966" width="85%"><br>


최종적으로 만들어진 사자성어 play 구조이다 <br>
다 만들고 나서 느낀점은 이름짓는 것 너무 쉽게 생각했다는 것이다 <br>
**@뒤에 _saja 를 적는게 아니라 _intent ,  _action 을 적었어야 했다@** <br>
Trigger는 사람이 말을 하는 부분 actions은 그에 맞는 행동을 인공지능스피커가 하는 것이다 <br>

</div>



### intent 만들기
> <img src="/image/intent 만들기.gif" width="90%"><br><br>
**직접 만든 play => Intents => intent 추가** 를 한다<br>
<br><img src="/image/hi_saja.png" width="90%"><br><br>
위의 사진은 Play를 시작할때 만든 intent 이다 <br>
intent는 사람이 AI 스피커에게 하는 말이므로 사용자들의 예상 발화를 최대한 많이 작성하는 것이 좋다 <br>
문장을 다 만든 작성한 이후에 아래에 있는 play 저장을 눌러준다<br><br>

<br>

### action 만들기
> <img src="/image/action이동.gif" width="90%"><br><br>
intent에 맞는 action을 작성하기 위해 **Actions => Custom Actions => Action** 추가를 누른다<br>
내가 작성한 intent에 다 맞는 action을 연결시켜줬기 때문에 "연결한 Intent가 없습니다"가 떴다<br><br>
<br><img src="/image/action_01.png" width="90%"><br><br>
action 이름을 알맞게 적어준다! intent랑 똑같게 적고 뒤에 _action 이라고 적으면 더 좋을 것이다 <br>
그다음 앞서 만든 intent랑 연결해준다<br>
<br><img src="/image/action_02.png" width="90%"><br><br>
백엔드로 변수에다가 문제들을 넣어야하므로 백엔드 프록시를 ON으로 돌려놓는다<br>
회색변수는 action에서만 사용되는 변수가 아니므로 다른 곳에서 설정을 해줘야한다 <br>
<br><img src="/image/back_para.gif" width="90%"><br><br>
**Global 설정 => Backend Parameter 에서 변수들을 입력해준다**<br>
협업을 한다면 옆에다가 변수가 어디에 쓰이는지 적는게 좋다<br><br>
<br><img src="/image/output.png" width="80%"><br>
이제 play가 문제를 내는 ouput을 정의하는 곳이다 <br>
play가 사용자들이 답변을 한다는 걸 알 수 있도록 **정답을 외친후 답변**을 해달라고 요청한다<br>
que_index 변수는 (0-4)를 갖고 있으므로 숫자로 직접 발화를 하는 것보다 <br>
fileter를 이용해 한글로 바꿔줘서 발화를 하는게 낫다고 생각했다<br>
<br><img src="/image/filter.gif" width="80%"><br>
**Responce Filters => NLG Translator => (맨 오른쪽 파란색버튼) + Translator 추가를 해준다<br>


<div align="center">

사자야 게임하자 라는 질문을 받게 되면 정답을 체크하는 발화는 나오면 안되므로 <br>
게임시작/게임중간/게임마지막/으로 나누어서 발화를 만들었다 <br>

[que_index(문제번호)가 0일 경우] 지금까지는 게임을 시작하기 위한 intent와 action을 만들었다 <br>
[que_indx(문제번호)가 1~3일 경우]이제는 게임을 하면서 앞에 질문에 대한 정답과 오답을 알려주는 intent와 action을 만들것이다<br>


</div>

### intent 만들기
> <br><img src="/image/answer_intent.gif" width="80%"><br>
첫번째 질문이 나왔으니 그 이후부터 대답할 사용자의 예상발화들을 담아 놓았다 <br>
이전 action에서 정답을 외치고 답변을 해달라고 했으니 그에 맞게 발화를 작성했다<br>
사자성어 뒤에서 두글자를 모아논 것이다<br>
backend에 담아놓은 사자성어의 두글자만 작성했다 <br>
여기서 하나 아쉬운점이 있다 <br>
굳이 내가 다 작성하지 않고 bacekend로 사자성어의 뒷부분을 알아서 가져와서 했으면 얼마나 좋았을가라는 아쉬움이 있다 <br>
<br><img src="/image/entity.gif width="80%">"</br>
이제는 Entity를 사용할 것이다. Entity는 같은 속성들이 모여진 집합체로 생각하면 편하다<br>
intent에서 집합체에 포함된 속성에 따라 답변을 하고 싶다면 사용하기 아주 좋다<br>

### action 만들기





## 2. 사자성어 뜻을 물어보기
## 3. 오늘의 사자성어 : 새로운 사자성어를 알려주는 기능

총 세가지를 만들어보았다
