'use strict'
const userNameInput=document.getElementById('user-name')
const assesmentButton=document.getElementById('assesment')
const resultDivided=document.getElementById('result-area')
const tweetDevided=document.getElementById('tweet-area')

assesmentButton.onclick=function(){
    let userName=userNameInput.value;
    if(!userName){
        //名前が無かった場合の処理
        return;
    }
    function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);

    }
}
    //既にある診断結果を削除する処理
        removeAllChildren(resultDivided);
    
    

    //result-areaにh3で"診断結果"という文字を表示
    const h3=document.createElement("h3");//h３タグを作る
    h3.innerText='診断結果';//h3タグに診断結果の文字を設定
    resultDivided.appendChild(h3);//result-areaに表示

    const result=assesment(userName);
    const p=document.createElement('p');
    p.innerText=result;
    resultDivided.appendChild(p)

    //tweetボタンの表示

    //aタグを作って設定
    removeAllChildren(tweetDevided);
    const a=document.createElement('a');
    const href='https://twitter.com/intent/tweet?button_hashtag=あなたの良いところ&ref_src=twsrc%5Etf'
    a.setAttribute('href',href);
    a.setAttribute('class','twitter-hashtag-button');
    a.setAttribute('date-text','診断結果の文章');
    a.innerText='Tweet#あなたの良いところ'
    //aタグをHTMLとして追加
    tweetDevided.appendChild(a);


}
const answers=[
'{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
'{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
'{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
'{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
'{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assesment(userName){
    //５桁の数字を回答結果の範囲０～１５
    let userNameNumber=0;
    for(let i=0; i<userName.length; i++){
        userNameNumber +=userName.charCodeAt(i);
    }

    var answerNumber=userNameNumber%answers.length;
    var result=answers[answerNumber];
    return result.replace(/\{userName\}/g,userName);//置換

    
}
console.assert(
    assesment('太郎')==='太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に書き換える処理が正しくありません。'
);

console.assert(
    assesment('太郎')==='太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '入力が同じ名前なら同じ診断結果を表示する処理が正しくありません。'
);
