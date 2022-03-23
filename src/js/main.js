document.addEventListener('DOMContentLoaded', function () {
  
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  }

  const so = new ScrollObserver(".animate-title", cb);
  // const cb = function(entries, observer) {
  //   entries.forEach(entry => {
  //     if(entry.isIntersecting) {
  //       const ta = new TextAnimation(entry.target);
  //       ta.animate();
  //       observer.unobserve(entry.target);
  //     } else {
  //     }
  //   });
  // }
  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0
  // };
});
