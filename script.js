const insert = () => {

    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'title': appendTitle(label)
            break
        case 'button': appendButton(label)
            break
        case 'checkbox': appendCheckbox(label)
            break
        case 'file': appendFile(label)
            break
        case 'copytext': appendCopy(label)
            break
    }

}

const appendText = (label = "Default") => {
    let container = document.createElement('div');
    let elemContainer = document.createElement('div'); 
    let elem = document.createElement('input');
    let rmvelem = document.createElement('button');
  
    container.setAttribute('class', 'form-group mt-2 d-flex justify-content-start');
    elemContainer.setAttribute('class', 'd-flex flex-grow-1'); 
    elem.setAttribute('placeholder', label);
    elem.setAttribute('class', 'form-control flex-grow-1'); 
    elem.style.marginRight = '10px';

    // Make the input element draggable
    elem.setAttribute('draggable', true);

    rmvelem.setAttribute('class', 'btn btn-danger ml-2');
    rmvelem.textContent = 'Remove';

    rmvelem.addEventListener('click', () => {
      container.remove();
    });
  
    elemContainer.appendChild(elem);
    elemContainer.appendChild(rmvelem); 
    container.appendChild(elemContainer);
    document.body.appendChild(container);
    
    document.querySelector('#display').append(container); 

    elem.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', label);
      });
}

const appendTitle = (label = "Default") => {
    let container = document.createElement('div');
    let elem = document.createElement('h4');
    let rmvelem = document.createElement('button');

    container.setAttribute('class', 'mt-2 d-flex justify-content-between align-items-center');
    elem.setAttribute('class', 'text');
    elem.textContent = label;

    // Make the input element draggable
    elem.setAttribute('draggable', true);

    rmvelem.setAttribute('class', 'btn btn-danger remove-btn');
    rmvelem.textContent = 'Remove';

    rmvelem.addEventListener('click', () => {
        container.remove();
    });

    container.appendChild(elem);
    container.appendChild(rmvelem);
    document.querySelector('#display').appendChild(container);

    elem.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', label);
      });
}

const appendButton = (label = "Default") => {
    let container = document.createElement('div');
    let elem = document.createElement('button');
    let rmvelem = document.createElement('button');
  
    container.setAttribute('class', 'form-group mt-2 d-flex justify-content-start');
    elem.setAttribute('class', 'btn btn-primary form-control');
    elem.textContent = label;
    rmvelem.setAttribute('class', 'btn btn-danger ml-2');
    rmvelem.textContent = 'Remove';
  
    rmvelem.addEventListener('click', () => {
      container.remove();
    });
  
    container.appendChild(elem);
    container.appendChild(rmvelem);
    document.querySelector('#display').appendChild(container);
}   

const appendCheckbox = (label = "Default") => {
    let elem = document.createElement('input');
    elem.setAttribute('type', 'checkbox');
    elem.setAttribute('class', 'form-check-input form-check-lg mt-2');
    
    let elemLabel = document.createElement('label');
    elemLabel.setAttribute('for', label);
    elemLabel.setAttribute('class', 'form-check-label');
    elemLabel.textContent = label;
    
    let container = document.createElement('div');
    container.setAttribute('class', 'form-check d-flex justify-content-between');
    container.append(elem, elemLabel);
    
    document.querySelector('#display').append(container);
    
    let rmvelem = document.createElement('button');
    rmvelem.setAttribute('class', 'btn btn-danger remove-btn ml-2 mt-2');
    rmvelem.textContent = 'Remove';
    rmvelem.addEventListener('click', () => {
        elem.remove();
        rmvelem.remove();
        elemLabel.remove();
        container.remove();
    });
    container.append(rmvelem);
};

const appendFile = (label = "Default") => {
    let fileContainer = document.createElement('div');
    fileContainer.setAttribute('class', 'custom-file mt-2');
    
    let elem = document.createElement('input');
    elem.setAttribute('type', 'file');
    elem.setAttribute('class', 'custom-file-input');
    elem.setAttribute('id', label);
    elem.setAttribute('name', label);
  
    let elemLabel = document.createElement('label');
    elemLabel.setAttribute('class', 'custom-file-label');
    elemLabel.setAttribute('for', label);
    elemLabel.textContent = label;
  
    let rmvElem = document.createElement('button');
    rmvElem.setAttribute('class', 'btn btn-danger remove-btn ml-2 mt-2');
    rmvElem.textContent = 'Remove';
    rmvElem.addEventListener('click', () => {
      fileContainer.remove();
    });
  
    fileContainer.append(elem, elemLabel, rmvElem);
  
    document.querySelector('#display').append(fileContainer);
  }
  
  const appendCopy = (label = "Default") => {
    let container = document.createElement('div');
    let elemContainer = document.createElement('div'); 
    let elem = document.createElement('input');
    let rmvelem = document.createElement('button');
  
    container.setAttribute('class', 'form-group mt-2 d-flex justify-content-start');
    elemContainer.setAttribute('class', 'd-flex flex-grow-1'); 
    elem.setAttribute('class', 'form-control flex-grow-1'); 
    elem.setAttribute('value', 'Drag text here');
    elem.setAttribute('placeholder', label);
    elem.style.marginRight = '10px';
  
    rmvelem.setAttribute('class', 'btn btn-danger ml-2');
    rmvelem.textContent = 'Remove';
  
    rmvelem.addEventListener('click', () => {
      container.remove();
    });
  
    elemContainer.appendChild(elem);
    elemContainer.appendChild(rmvelem); 
    container.appendChild(elemContainer);
    document.body.appendChild(container);
  
    document.querySelector('#display').append(container); 
  }
  

  