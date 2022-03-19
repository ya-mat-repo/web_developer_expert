const child = document.querySelector(".child");
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // 対象がウィンドウ内に入った時
      entry.target.classList.add("inview");
      // ovserver.unobserve(entry.target); // entry.targetに監視対象のDOMが格納されている
    } else {
      // 対象がウィンドウ外に出た時
      entry.target.classList.remove("inview");
    }
  });
}
const options = {
  root: null, // 交差対象とする親の要素を指定
  rootMargin: "-100px 0px 0px 0px",
  threshold: [0, 0.5, 1]
}
const io = new IntersectionObserver(cb, options); // IntersectionObserverの第二引数にはオプションを指定できる
io.observe(child);
