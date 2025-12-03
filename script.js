const VERB_LIST = [
    { kor: "가다", eng_main: "to go", roman_main: "ga-da",
      present:{kor:"가요",roman:"ga-yo",eng:"I go / I'm going"},
      past:{kor:"갔어요",roman:"gat-seo-yo",eng:"I went"},
      future:{kor:"갈 거예요",roman:"gal geo-ye-yo",eng:"I will go"} },

    { kor: "오다", eng_main: "to come", roman_main: "o-da",
      present:{kor:"와요",roman:"wa-yo",eng:"I come / I'm coming"},
      past:{kor:"왔어요",roman:"wat-seo-yo",eng:"I came"},
      future:{kor:"올 거예요",roman:"ol geo-ye-yo",eng:"I will come"} },

    { kor: "자다", eng_main:"to sleep", roman_main:"ja-da",
      present:{kor:"자요",roman:"ja-yo",eng:"I sleep / I'm sleeping"},
      past:{kor:"잤어요",roman:"jat-seo-yo",eng:"I slept"},
      future:{kor:"잘 거예요",roman:"jal geo-ye-yo",eng:"I will sleep"} },

    { kor: "먹다", eng_main:"to eat", roman_main:"meok-da",
      present:{kor:"먹어요",roman:"meog-eo-yo",eng:"I eat / I'm eating"},
      past:{kor:"먹었어요",roman:"meog-eoss-eo-yo",eng:"I ate"},
      future:{kor:"먹을 거예요",roman:"meog-eul geo-ye-yo",eng:"I will eat"} },

    { kor: "마시다", eng_main:"to drink", roman_main:"ma-si-da",
      present:{kor:"마셔요",roman:"ma-syeo-yo",eng:"I drink / I'm drinking"},
      past:{kor:"마셨어요",roman:"ma-syeoss-eo-yo",eng:"I drank"},
      future:{kor:"마실 거예요",roman:"ma-sil geo-ye-yo",eng:"I will drink"} },

    { kor:"보다",eng_main:"to see/watch",roman_main:"bo-da",
      present:{kor:"봐요",roman:"bwa-yo",eng:"I see / I'm watching"},
      past:{kor:"봤어요",roman:"bwat-seo-yo",eng:"I saw"},
      future:{kor:"볼 거예요",roman:"bol geo-ye-yo",eng:"I will see"} },

    { kor:"듣다",eng_main:"to listen",roman_main:"deud-da",
      present:{kor:"들어요",roman:"deul-eo-yo",eng:"I listen / I'm listening"},
      past:{kor:"들었어요",roman:"deul-eoss-eo-yo",eng:"I listened"},
      future:{kor:"들을 거예요",roman:"deul-eul geo-ye-yo",eng:"I will listen"} },

    { kor:"하다",eng_main:"to do",roman_main:"ha-da",
      present:{kor:"해요",roman:"hae-yo",eng:"I do / I'm doing"},
      past:{kor:"했어요",roman:"haet-seo-yo",eng:"I did"},
      future:{kor:"할 거예요",roman:"hal geo-ye-yo",eng:"I will do"} },

    { kor:"공부하다",eng_main:"to study",roman_main:"gong-bu-ha-da",
      present:{kor:"공부해요",roman:"gong-bu-hae-yo",eng:"I study / I'm studying"},
      past:{kor:"공부했어요",roman:"gong-bu-haess-eo-yo",eng:"I studied"},
      future:{kor:"공부할 거예요",roman:"gong-bu-hal geo-ye-yo",eng:"I will study"} },

    { kor:"운동하다",eng_main:"to exercise",roman_main:"un-dong-ha-da",
      present:{kor:"운동해요",roman:"un-dong-hae-yo",eng:"I exercise / I'm exercising"},
      past:{kor:"운동했어요",roman:"un-dong-haess-eo-yo",eng:"I exercised"},
      future:{kor:"운동할 거예요",roman:"un-dong-hal geo-ye-yo",eng:"I will exercise"} },

    { kor:"일하다",eng_main:"to work",roman_main:"il-ha-da",
      present:{kor:"일해요",roman:"il-hae-yo",eng:"I work / I'm working"},
      past:{kor:"일했어요",roman:"il-haess-eo-yo",eng:"I worked"},
      future:{kor:"일할 거예요",roman:"il-hal geo-ye-yo",eng:"I will work"} },

    { kor:"쉬다",eng_main:"to rest",roman_main:"swi-da",
      present:{kor:"쉬어요",roman:"swi-eo-yo",eng:"I rest / I'm resting"},
      past:{kor:"쉬었어요",roman:"swi-eoss-eo-yo",eng:"I rested"},
      future:{kor:"쉴 거예요",roman:"swil geo-ye-yo",eng:"I will rest"} },

    { kor:"있다",eng_main:"to be / to have",roman_main:"it-da",
      present:{kor:"있어요",roman:"iss-eo-yo",eng:"I have / It is"},
      past:{kor:"있었어요",roman:"iss-eoss-eo-yo",eng:"I had / It was"},
      future:{kor:"있을 거예요",roman:"iss-eul geo-ye-yo",eng:"I will have / It will be"} },

    { kor:"없다",eng_main:"not to have / not be",roman_main:"eop-da",
      present:{kor:"없어요",roman:"eobs-eo-yo",eng:"I don't have / It is not"},
      past:{kor:"없었어요",roman:"eobs-eoss-eo-yo",eng:"I didn't have"},
      future:{kor:"없을 거예요",roman:"eobs-eul geo-ye-yo",eng:"I will not have"} },

    { kor:"알다",eng_main:"to know",roman_main:"al-da",
      present:{kor:"알아요",roman:"al-a-yo",eng:"I know"},
      past:{kor:"알았어요",roman:"al-ass-eo-yo",eng:"I knew"},
      future:{kor:"알 거예요",roman:"al geo-ye-yo",eng:"I will know"} },

    { kor:"모르다",eng_main:"not to know",roman_main:"mo-reu-da",
      present:{kor:"몰라요",roman:"mol-la-yo",eng:"I don't know"},
      past:{kor:"몰랐어요",roman:"mol-lass-eo-yo",eng:"I didn’t know"},
      future:{kor:"모를 거예요",roman:"mo-reul geo-ye-yo",eng:"I will not know"} },

    { kor:"좋아하다",eng_main:"to like",roman_main:"joh-a-ha-da",
      present:{kor:"좋아해요",roman:"joh-a-hae-yo",eng:"I like"},
      past:{kor:"좋아했어요",roman:"joh-a-haess-eo-yo",eng:"I liked"},
      future:{kor:"좋아할 거예요",roman:"joh-a-hal geo-ye-yo",eng:"I will like"} },

    { kor:"싫어하다",eng_main:"to dislike",roman_main:"silh-eo-ha-da",
      present:{kor:"싫어해요",roman:"silh-eo-hae-yo",eng:"I dislike"},
      past:{kor:"싫어했어요",roman:"silh-eo-haess-eo-yo",eng:"I disliked"},
      future:{kor:"싫어할 거예요",roman:"silh-eo-hal geo-ye-yo",eng:"I will dislike"} },

    { kor:"살다",eng_main:"to live",roman_main:"sal-da",
      present:{kor:"살아요",roman:"sal-a-yo",eng:"I live"},
      past:{kor:"살았어요",roman:"sal-ass-eo-yo",eng:"I lived"},
      future:{kor:"살 거예요",roman:"sal geo-ye-yo",eng:"I will live"} },

    { kor:"죽다",eng_main:"to die",roman_main:"jug-da",
      present:{kor:"죽어요",roman:"jug-eo-yo",eng:"I die"},
      past:{kor:"죽었어요",roman:"jug-eoss-eo-yo",eng:"I died"},
      future:{kor:"죽을 거예요",roman:"jug-eul geo-ye-yo",eng:"I will die"} },

    { kor:"앉다",eng_main:"to sit",roman_main:"anj-da",
      present:{kor:"앉아요",roman:"anj-a-yo",eng:"I sit"},
      past:{kor:"앉았어요",roman:"anj-ass-eo-yo",eng:"I sat"},
      future:{kor:"앉을 거예요",roman:"anj-eul geo-ye-yo",eng:"I will sit"} },

    { kor:"서다",eng_main:"to stand",roman_main:"seo-da",
      present:{kor:"서요",roman:"seo-yo",eng:"I stand"},
      past:{kor:"섰어요",roman:"seoss-eo-yo",eng:"I stood"},
      future:{kor:"설 거예요",roman:"seol geo-ye-yo",eng:"I will stand"} },

    { kor:"주다",eng_main:"to give",roman_main:"ju-da",
      present:{kor:"줘요",roman:"jwo-yo",eng:"I give"},
      past:{kor:"줬어요",roman:"jwo-ss-eo-yo",eng:"I gave"},
      future:{kor:"줄 거예요",roman:"jul geo-ye-yo",eng:"I will give"} },

    { kor:"받다",eng_main:"to receive",roman_main:"bad-da",
      present:{kor:"받아요",roman:"bad-a-yo",eng:"I receive"},
      past:{kor:"받았어요",roman:"bad-ass-eo-yo",eng:"I received"},
      future:{kor:"받을 거예요",roman:"bad-eul geo-ye-yo",eng:"I will receive"} },

    { kor:"사다",eng_main:"to buy",roman_main:"sa-da",
      present:{kor:"사요",roman:"sa-yo",eng:"I buy"},
      past:{kor:"샀어요",roman:"sat-seo-yo",eng:"I bought"},
      future:{kor:"살 거예요",roman:"sal geo-ye-yo",eng:"I will buy"} },

    { kor:"도와주다",eng_main:"to help",roman_main:"do-wa-ju-da",
      present:{kor:"도와줘요",roman:"do-wa-jwo-yo",eng:"I help"},
      past:{kor:"도와줬어요",roman:"do-wa-jwo-ss-eo-yo",eng:"I helped"},
      future:{kor:"도와줄 거예요",roman:"do-wa-jul geo-ye-yo",eng:"I will help"} },

    { kor:"배우다",eng_main:"to learn",roman_main:"bae-u-da",
      present:{kor:"배워요",roman:"bae-wo-yo",eng:"I learn"},
      past:{kor:"배웠어요",roman:"bae-woss-eo-yo",eng:"I learned"},
      future:{kor:"배울 거예요",roman:"bae-ul geo-ye-yo",eng:"I will learn"} },

    { kor:"가르치다",eng_main:"to teach",roman_main:"ga-reu-chi-da",
      present:{kor:"가르쳐요",roman:"ga-reu-chyeo-yo",eng:"I teach"},
      past:{kor:"가르쳤어요",roman:"ga-reu-chyeoss-eo-yo",eng:"I taught"},
      future:{kor:"가르칠 거예요",roman:"ga-reu-chil geo-ye-yo",eng:"I will teach"} },

    { kor:"만들다",eng_main:"to make",roman_main:"man-deul-da",
      present:{kor:"만들어요",roman:"man-deul-eo-yo",eng:"I make"},
      past:{kor:"만들었어요",roman:"man-deul-eoss-eo-yo",eng:"I made"},
      future:{kor:"만들 거예요",roman:"man-deul geo-ye-yo",eng:"I will make"} },

    { kor:"쓰다",eng_main:"to write/use",roman_main:"sseu-da",
      present:{kor:"써요",roman:"sseo-yo",eng:"I write / I use"},
      past:{kor:"썼어요",roman:"sseoss-eo-yo",eng:"I wrote / I used"},
      future:{kor:"쓸 거예요",roman:"sseul geo-ye-yo",eng:"I will write / I will use"} },

    { kor:"읽다",eng_main:"to read",roman_main:"ilg-da",
      present:{kor:"읽어요",roman:"ilg-eo-yo",eng:"I read"},
      past:{kor:"읽었어요",roman:"ilg-eoss-eo-yo",eng:"I read (past)"},
      future:{kor:"읽을 거예요",roman:"ilg-eul geo-ye-yo",eng:"I will read"} },

    { kor:"말하다",eng_main:"to speak",roman_main:"mal-ha-da",
      present:{kor:"말해요",roman:"mal-hae-yo",eng:"I speak"},
      past:{kor:"말했어요",roman:"mal-haess-eo-yo",eng:"I spoke"},
      future:{kor:"말할 거예요",roman:"mal-hal geo-ye-yo",eng:"I will speak"} },

    { kor:"이야기하다",eng_main:"to talk",roman_main:"i-ya-gi-ha-da",
      present:{kor:"이야기해요",roman:"i-ya-gi-hae-yo",eng:"I talk"},
      past:{kor:"이야기했어요",roman:"i-ya-gi-haess-eo-yo",eng:"I talked"},
      future:{kor:"이야기할 거예요",roman:"i-ya-gi-hal geo-ye-yo",eng:"I will talk"} },

    { kor:"묻다",eng_main:"to ask",roman_main:"mud-da",
      present:{kor:"물어요",roman:"mul-eo-yo",eng:"I ask"},
      past:{kor:"물었어요",roman:"mul-eoss-eo-yo",eng:"I asked"},
      future:{kor:"물을 거예요",roman:"mul-eul geo-ye-yo",eng:"I will ask"} },

    { kor:"대답하다",eng_main:"to answer",roman_main:"dae-dap-ha-da",
      present:{kor:"대답해요",roman:"dae-dap-hae-yo",eng:"I answer"},
      past:{kor:"대답했어요",roman:"dae-dap-haess-eo-yo",eng:"I answered"},
      future:{kor:"대답할 거예요",roman:"dae-dap-hal geo-ye-yo",eng:"I will answer"} },

    { kor:"약속하다",eng_main:"to promise",roman_main:"yak-sok-ha-da",
      present:{kor:"약속해요",roman:"yak-sok-hae-yo",eng:"I promise"},
      past:{kor:"약속했어요",roman:"yak-sok-haess-eo-yo",eng:"I promised"},
      future:{kor:"약속할 거예요",roman:"yak-sok-hal geo-ye-yo",eng:"I will promise"} },

    { kor:"기억하다",eng_main:"to remember",roman_main:"gi-eok-ha-da",
      present:{kor:"기억해요",roman:"gi-eok-hae-yo",eng:"I remember"},
      past:{kor:"기억했어요",roman:"gi-eok-haess-eo-yo",eng:"I remembered"},
      future:{kor:"기억할 거예요",roman:"gi-eok-hal geo-ye-yo",eng:"I will remember"} },

    { kor:"잊다",eng_main:"to forget",roman_main:"id-da",
      present:{kor:"잊어요",roman:"ij-eo-yo",eng:"I forget"},
      past:{kor:"잊었어요",roman:"ij-eoss-eo-yo",eng:"I forgot"},
      future:{kor:"잊을 거예요",roman:"ij-eul geo-ye-yo",eng:"I will forget"} },

    { kor:"기다리다",eng_main:"to wait",roman_main:"gi-da-ri-da",
      present:{kor:"기다려요",roman:"gi-da-ryeo-yo",eng:"I wait"},
      past:{kor:"기다렸어요",roman:"gi-da-ryeoss-eo-yo",eng:"I waited"},
      future:{kor:"기다릴 거예요",roman:"gi-da-ril geo-ye-yo",eng:"I will wait"} },

    { kor:"떠나다",eng_main:"to leave",roman_main:"tteo-na-da",
      present:{kor:"떠나요",roman:"tteo-na-yo",eng:"I leave"},
      past:{kor:"떠났어요",roman:"tteo-nass-eo-yo",eng:"I left"},
      future:{kor:"떠날 거예요",roman:"tteo-nal geo-ye-yo",eng:"I will leave"} },

    { kor:"돌아오다",eng_main:"to return",roman_main:"dol-a-o-da",
      present:{kor:"돌아와요",roman:"dol-a-wa-yo",eng:"I return"},
      past:{kor:"돌아왔어요",roman:"dol-a-wass-eo-yo",eng:"I returned"},
      future:{kor:"돌아올 거예요",roman:"dol-a-ol geo-ye-yo",eng:"I will return"} },

    { kor:"여행하다",eng_main:"to travel",roman_main:"yeo-haeng-ha-da",
      present:{kor:"여행해요",roman:"yeo-haeng-hae-yo",eng:"I travel"},
      past:{kor:"여행했어요",roman:"yeo-haeng-haess-eo-yo",eng:"I traveled"},
      future:{kor:"여행할 거예요",roman:"yeo-haeng-hal geo-ye-yo",eng:"I will travel"} },

    { kor:"입다",eng_main:"to wear",roman_main:"ib-da",
      present:{kor:"입어요",roman:"ib-eo-yo",eng:"I wear"},
      past:{kor:"입었어요",roman:"ib-eoss-eo-yo",eng:"I wore"},
      future:{kor:"입을 거예요",roman:"ib-eul geo-ye-yo",eng:"I will wear"} },

    { kor:"벗다",eng_main:"to take off",roman_main:"beos-da",
      present:{kor:"벗어요",roman:"beos-eo-yo",eng:"I take off"},
      past:{kor:"벗었어요",roman:"beos-eoss-eo-yo",eng:"I took off"},
      future:{kor:"벗을 거예요",roman:"beos-eul geo-ye-yo",eng:"I will take off"} },

    { kor:"신다",eng_main:"to put on (shoes)",roman_main:"sin-da",
      present:{kor:"신어요",roman:"sin-eo-yo",eng:"I put on"},
      past:{kor:"신었어요",roman:"sin-eoss-eo-yo",eng:"I put on"},
      future:{kor:"신을 거예요",roman:"sin-eul geo-ye-yo",eng:"I will put on"} },

    { kor:"씻다",eng_main:"to wash",roman_main:"ssit-da",
      present:{kor:"씻어요",roman:"ssis-eo-yo",eng:"I wash"},
      past:{kor:"씻었어요",roman:"ssis-eoss-eo-yo",eng:"I washed"},
      future:{kor:"씻을 거예요",roman:"ssis-eul geo-ye-yo",eng:"I will wash"} },

    { kor:"청소하다",eng_main:"to clean",roman_main:"cheong-so-ha-da",
      present:{kor:"청소해요",roman:"cheong-so-hae-yo",eng:"I clean"},
      past:{kor:"청소했어요",roman:"cheong-so-haess-eo-yo",eng:"I cleaned"},
      future:{kor:"청소할 거예요",roman:"cheong-so-hal geo-ye-yo",eng:"I will clean"} },

    { kor:"준비하다",eng_main:"to prepare",roman_main:"jun-bi-ha-da",
      present:{kor:"준비해요",roman:"jun-bi-hae-yo",eng:"I prepare"},
      past:{kor:"준비했어요",roman:"jun-bi-haess-eo-yo",eng:"I prepared"},
      future:{kor:"준비할 거예요",roman:"jun-bi-hal geo-ye-yo",eng:"I will prepare"} },

    { kor:"시작하다",eng_main:"to start",roman_main:"si-jak-ha-da",
      present:{kor:"시작해요",roman:"si-jak-hae-yo",eng:"I start"},
      past:{kor:"시작했어요",roman:"si-jak-haess-eo-yo",eng:"I started"},
      future:{kor:"시작할 거예요",roman:"si-jak-hal geo-ye-yo",eng:"I will start"} },

    { kor:"끝나다",eng_main:"to finish / to end",roman_main:"kkeun-na-da",
      present:{kor:"끝나요",roman:"kkeun-na-yo",eng:"It ends"},
      past:{kor:"끝났어요",roman:"kkeun-nass-eo-yo",eng:"It ended"},
      future:{kor:"끝날 거예요",roman:"kkeun-nal geo-ye-yo",eng:"It will end"} }
];

let currentVerbIndex = -1;

const elements = {
    mainKor: document.getElementById('main-kor'),
    mainRoman: document.getElementById('main-roman'),
    mainEng: document.getElementById('main-eng'),
    mainSpeakerBtn: document.getElementById('main-speaker-btn'),
    korPresent: document.getElementById('kor-present'),
    romanPresent: document.getElementById('roman-present'),
    engPresent: document.getElementById('eng-present'),
    korPast: document.getElementById('kor-past'),
    romanPast: document.getElementById('roman-past'),
    engPast: document.getElementById('eng-past'),
    korFuture: document.getElementById('kor-future'),
    romanFuture: document.getElementById('roman-future'),
    engFuture: document.getElementById('eng-future'),
    nextBtn: document.getElementById('next-btn')
};

function getRandomIndex() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * VERB_LIST.length);
    } while (newIndex === currentVerbIndex && VERB_LIST.length > 1);

    currentVerbIndex = newIndex;
    return newIndex;
}

function loadRandomVerb() {
    const index = getRandomIndex();
    const verb = VERB_LIST[index];

    elements.mainKor.textContent = verb.kor;
    elements.mainRoman.textContent = verb.roman_main;
    elements.mainEng.textContent = verb.eng_main;

    elements.korPresent.textContent = verb.present.kor;
    elements.romanPresent.textContent = verb.present.roman;
    elements.engPresent.textContent = verb.present.eng;

    elements.korPast.textContent = verb.past.kor;
    elements.romanPast.textContent = verb.past.roman;
    elements.engPast.textContent = verb.past.eng;

    elements.korFuture.textContent = verb.future.kor;
    elements.romanFuture.textContent = verb.future.roman;
    elements.engFuture.textContent = verb.future.eng;

    window.speakData = {
        main: verb.kor, 
        present: verb.present.kor,
        past: verb.past.kor,
        future: verb.future.kor
    };
}

function speakKorean(text){
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ko-KR";
  u.rate = 0.8;
  speechSynthesis.speak(u);
}

loadRandomVerb();

elements.nextBtn.addEventListener('click', loadRandomVerb);

elements.mainSpeakerBtn.addEventListener('click', () => {
    speakKorean(window.speakData.main);
});

document.querySelectorAll('.form-item').forEach(item=>{
  item.addEventListener('click', ()=>{
    speakKorean(window.speakData[item.dataset.id]);
  });
});

document.querySelectorAll('.speaker-btn').forEach(btn=>{
  if (!btn.classList.contains('main-speaker')) {
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        speakKorean(window.speakData[btn.dataset.sound]);
      });
  }
});
