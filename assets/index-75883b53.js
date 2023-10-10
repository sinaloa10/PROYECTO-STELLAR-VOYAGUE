(function () {
    const linkRelList = document.createElement("link").relList;
  
    if (linkRelList && linkRelList.supports && linkRelList.supports("modulepreload")) return;
  
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
      preloadModule(link);
    }
  
    new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          for (const node of mutation.addedNodes) {
            if (node.tagName === "LINK" && node.rel === "modulepreload") {
              preloadModule(node);
            }
          }
        }
      }
    }).observe(document, { childList: true, subtree: true });
  
    function getRequestOptions(link) {
      const options = {};
  
      if (link.integrity) {
        options.integrity = link.integrity;
      }
  
      if (link.referrerPolicy) {
        options.referrerPolicy = link.referrerPolicy;
      }
  
      if (link.crossOrigin === "use-credentials") {
        options.credentials = "include";
      } else if (link.crossOrigin === "anonymous") {
        options.credentials = "omit";
      } else {
        options.credentials = "same-origin";
      }
  
      return options;
    }
  
    function preloadModule(link) {
      if (link.ep) return;
  
      link.ep = true;
      const requestOptions = getRequestOptions(link);
  
      fetch(link.href, requestOptions);
    }
  })();
  
  document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("title");
    titleElement.style.color = "white";
  });
  
  const audioElement = document.getElementById("audio");
  const toggleButton = document.getElementById("toggleButton");
  
  toggleButton.addEventListener("click", function () {
    if (audioElement.paused) {
      audioElement.play();
      toggleButton.innerHTML = '<span class="icon">🔊</span>';
    } else {
      audioElement.pause();
      toggleButton.innerHTML = '<span class="icon">🔇</span>';
    }
  });
  
  window.addEventListener("beforeunload", function () {
    audioElement.classList.add("fade-out-active");
  });
  