function highlight(table) {
  // ваш код...
  for (let i = 0; i < table.tBodies[0].rows.length; i++){
    let tr = table.tBodies[0].rows[i];
    let status = tr.cells[3].getAttribute('data-available');
    if(status === 'true') {
      tr.classList.add('available');
    }
    else if(status === 'false'){
      tr.classList.add('unavailable');
    }
    else {
      tr.setAttribute("hidden",'true');
    };
    //
    if(tr.cells[2].innerText === 'm'){
      tr.classList.add('male');
    }
    else {tr.classList.add('female')};
    //
    if(tr.cells[1].innerText < 18){
      tr.style = "text-decoration: line-through";
    }
  };
}
