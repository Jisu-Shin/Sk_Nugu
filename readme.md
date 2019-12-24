# Sk Nugu AI Speaker - 사자성어 게임

sk Nugu 인공지능 스피커 어플로 사자성어 게임을 만들어봤다 <br>
사자성어 앞의 두글자를 문제로 내고 / 답변을 사자성어 뒤 두글자를 대답해야 한다<br>

***

# 동기

<p align="center">
<img src="https://postfiles.pstatic.net/MjAxOTA5MDNfMTY4/MDAxNTY3NTIxNTMzMTg2.HuOcoxZIPBhvIImRm4-zvVU3Yah25gbfoRp7WbrvrMgg.US_t09vfhFWAIB_2cOW4XAJVQaB0dbA3HkD0Mb-UbMEg.JPEG.sjszzang0929/output_939541074.jpg?type=w966" height="400"> <img src="https://postfiles.pstatic.net/MjAxOTA5MDNfNDYg/MDAxNTY3NTIxNTE3MjA2.FCQ9o_vhIa4FxaWXf76BCFosmNtVQOSQjNy71qY452Ig.bqRXr2KGRL1UXp9hcraeyJnTI8iyRJsUM36CqNtEZfwg.JPEG.sjszzang0929/output_3337481737.jpg?type=w966" height="400">
</p>


휴학생활을 하고 있던 찰나 , 페북으로 SK 아카데미에서 수업이 진행 된다는 것을 알게 되었다<br>
때 마침 시간도 가능하고 새로운 프로젝트를 할 수 있겠다 라는 생각에 바로 참가했다!

총 3일차로 수업이 이뤄졌다! 더 자세한 내용은 블로그에 올렸다
[NUGU DEV days](https://blog.naver.com/sjszzang0929/221639494478)

원래는 이때 다인원 아이돌에 빠졌을 때라 각 파트당 맞춰보는 게임을 만들고 싶었다<br>
**하지만 저작권이란 중요한 문제**이므로 새로운 주제가 필요했다 ㅠㅠ<br>
그러던 찰나 **신서유기의 네글자 게임**이 떠올랐고 <br>
이 세상에 있는 모든 네글자를 다 끌어오기는 힘드니까 <br>
그 중에 제한적인 사자성어로 해야겠다고 생각을 갖고 틀을 잡기 시작했다! <br>

***

# 설정

먼저  [NUGU developers](https://developers.nugu.co.kr/#/) 에서 회원가입을 한다음


<p align="center">
<img src="/image/playbuilder.png" width="80%">
</p>

developer 사이트에서 사진과 같은 방법으로 넘어오면 된다<br>


<p align="center"><img src="/image/play.PNG" width="80%"></p>


SK Nugu play 기본설정이 다 되었다면 백엔드 설정으로 넘어가면된다


수업에서 네이버 클라우드랑 구글 클라우드 두가지 방법을 알려줬는데 나는 구글클라우드가 더 편했다!~~(깃허브에 템플릿도 있어서 그럴지도..ㅎ)~~

처음으로 [구글클라우드](https://cloud.google.com/functions/) 를 들어가게 되면 뜨는 화면이다


<img src="/image/gcloud.png" width="80%"> <br>

1년간 무료로 사용할 수 있는 크레딧을 주기때문에 공부삼아 해보기 딱 좋다 <br>


<img src="/image/function.png" width="60%">
<img src="/image/cloudfunction.png" width="60%"><br>

빨간 화살표가 있는 곳은 클릭을 해서 들어가면 된다

<img src="/image/function_01.png" width="40%">
<img src="/image/function_02.png" width="40%">
<img src="/image/function_03.png" width="40%">

사진 순서대로 따라오면 직접 만든 nugu play kit 에 맞는 백엔드서버도 만들어진다


***

# 기능

## 1. 사자성어 게임

<img src="/image/make_package.PNG"> <br>
<img src="/image/myerror_pack.PNG"> <br>


2. 사자성어 뜻을 물어보기
3. 오늘의 사자성어 : 새로운 사자성어를 알려주는 기능

총 세가지를 만들어보았다
