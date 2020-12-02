// Front Panel JS

const sliderDragStart = (event) => {
    event.dataTransfer.setData('text', event.target.id);
    event.dataTransfer.effectAllowed = 'move';
}

const sliderEntersInDropZone = (event) => {
    event.preventDefault();
    event.target.style.border = '1px solid black';
}

const sliderLeavesDropZone = (event) => {
    event.target.style.border = 'none';
}

const sliderDragOverDropZone = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

const sliderDropsInDropZone = (event) => {
    event.preventDefault();

    if (event.dataTransfer.getData('text') === 'slider_image') {
        const slider_range = document.createElement('input');
        slider_range.id = 'slider_input';
        slider_range.type = 'range';
        slider_range.min = '0';
        slider_range.max = '30';
        slider_range.value = 0;
        slider_range.style.width = '30%';
        event.target.textContent = '';
        event.target.style.border = 'none';
        event.target.style.backgroundColor = '#bf8192';
        event.target.appendChild(slider_range);
    }

    event.target.style.border = 'none';
}

const textFieldDragStart = (event) => {
    event.dataTransfer.setData('text', event.target.id);
    event.dataTransfer.effectAllowed = 'move';
}

const textFieldEntersInDropZone = (event) => {
    event.preventDefault();
    event.target.style.border = '1px solid black';
}

const textFieldLeavesDropZone = (event) => {
    event.target.style.border = 'none';
}

const textFieldDragOverDropZone = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

const textFieldDropsInDropZone = (event) => {
    event.preventDefault();

    if (event.dataTransfer.getData('text') === 'textfield_image') {
        const text_field = document.createElement('input');
        text_field.id = 'textfield_input';
        text_field.type = 'tel';
        text_field.style.width = '30%';
        text_field.style.padding = '10px 10px';
        event.target.textContent = '';
        event.target.style.border = 'none';
        event.target.style.backgroundColor = '#bf8192';
        event.target.appendChild(text_field);
    }

    event.target.style.border = 'none';
}


// Back Panel JS
let slider_diagram;
let python_code_value;

const openBackPanel = () => {
    const slider_value = parseInt(document.getElementById('slider_input').value);
    window.open(`http://localhost:8000/backpanel?slidervalue=${slider_value}`, "_blank");
}

const backPanelDataLoading = () => {
    document.getElementById('slider').style.display = 'block';
    document.getElementById('python_code').style.display = 'block';
    document.getElementById('textfield').style.display = 'block';
    document.getElementById('connect_block_btn').style.display = 'block';

    slider_diagram = '';
    python_code_value = '';

    const queryParam = new URLSearchParams(window.location.search);

    slider_diagram = document.getElementById('slider_diagram');
    slider_diagram.value = queryParam.get('slidervalue');

    python_code_value = document.getElementById('python_code_value');
    python_code_value.value = queryParam.get('slidervalue');
}

const connectLines = () => {
    new LeaderLine(
        document.getElementById('slider'),
        document.getElementById('python_code'),
        {
            color: 'blue',
            dash: {
                animation: true
            }
        }
    );
    
    new LeaderLine(
        document.getElementById('python_code'),
        document.getElementById('textfield'),
        {
            color: 'blue',
            dash: {
                animation: true
            }
        }
    );

    python_code_value = document.getElementById('python_code_value').value;
    console.log(python_code_value);
    const payload = {
        'data': python_code_value
    }

    fetch(`http://localhost:8000/backpanel/compute`, {
        method: 'POST',
        mode: 'same-origin',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('textfield_final_value', data)
    })
    .catch(err => alert("Server Error"));
}

// Computation function
const run = () => {
    document.getElementById('textfield_input').value = localStorage.getItem('textfield_final_value');
}