function rateSelection() {  
  
  let checkValue = document.getElementsByName('form')
  
  let value
  
  for(i = 0; i < checkValue.length; i++) {
    if(checkValue[i].checked == true) {
        value = checkValue[i].value + ''
        var selectedValue = value
      }
  }            

  const state = document.getElementById('state')
  const thanksState = document.getElementById('thanksState')

  thanksState.removeAttribute("hidden")
  state.setAttribute("hidden", true)

  document.getElementById("rateSelected").innerHTML = selectedValue 
}