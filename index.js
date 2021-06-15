const radioShowHide = function(nameAttr, triggerId, targetId) {
    let b = document.getElementById(targetId).classList;
    document.querySelectorAll(`input[name='${nameAttr}']`).forEach(e => {
      e.addEventListener("change", function() {
        if(e.checked && e.id === triggerId) {
          b.remove("d-none");
        }
        else {
          b.add("d-none");
        }
      });
    })
  }
