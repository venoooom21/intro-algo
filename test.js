function phrase(a){
    let longeur=a.length;
    let word=1;
    let vowel=0
    for(let i=0;i<longeur;i++){
        if(a[i]===" "){
            word=word+1
        }
    }
    for(let j=0;j<longeur;j++){
        if(a[j]==="a"||a[j]==="e"||a[j]==="i"||a[j]==="o"||a[j]==="u"){
            vowel=vowel+1;
        }
    }
    return { words: word, vowels: vowel , longeur:longeur};
}
console.log(phrase("hello my name is nour"));


