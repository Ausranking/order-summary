const planSub = document.getElementById("jsaction");

planSub.addEventListener("click", () => {
  planSub.innerHTML = "<h4>Processing...</h4>"
  planSub.style.color="hsl(255, 77%, 57%)"
  planSub.style.background="none"
});

var cancelSub = document.getElementById("return");

cancelSub.addEventListener("click", () => {
  cancelSub.innerHTML = "<h3>You dey mad?</h3>";
  if (confirm("You dey Mad?")) {
    location.href = "#";
  }f
});

// alert(location.href)
