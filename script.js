const
     textarea = document.querySelector("textarea"),
     btn = document.querySelector("button#sub");

btn.addEventListener("click", () => {
     if(textarea.value !== ""){
          let text = textarea.value;
          let utterance = new SpeechSynthesisUtterance(text);
          speechSynthesis.speak(utterance);
     }
});