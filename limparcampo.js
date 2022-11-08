function limpaCampo(obj){
	obj.value = '';
}

function limpaCombo(combo){
 for (var i = combo.options.length - 1; i >= 0; i--){
   combo.options[i] = null;
 }
 combo.selectedIndex = -1;
}