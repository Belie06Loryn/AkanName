<script>
function gender() {
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var text = document.getElementById("text");
  if (male.checked == true){
    male.style.display = "male";
  } else if(female.checked == true)){
    female.style.display = "female";
  }
  else{
    text.style.display = "block";
 }
}
</script>