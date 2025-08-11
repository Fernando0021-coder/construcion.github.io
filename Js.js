const container = document.getElementById('Container');
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('Container');
    container.style.display = 'none'; // Ocultamos el contenedor inicialmente

    function calculadora() {
        container.style.display = 'block'; // Mostramos el contenedor al hacer clic
        // Pequeño retraso para que la animación funcione
        setTimeout(() => {
            container.classList.add('visible');
        }, 10);
        
        // Crear un nuevo select para la calculadora
        const selectCalculadora = document.createElement('select');
        
        const options = [
            { value: 'Revoque', text: 'Revoque' },
            { value: 'Pintura', text: 'Pintura' },
            { value: 'InstalacionesElectricas', text: 'Instalaciones Electricas' }
        ];
        
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.text;
            selectCalculadora.appendChild(opt);
        });
        
        selectCalculadora.addEventListener('change', function(event) {
            const selectedValue = event.target.value;
            console.log('Opción seleccionada:', selectedValue);
            
            switch(selectedValue) {
                case 'Revoque':
                    Revoque();
                    break;
                case 'Pintura':
                    console.log('Has seleccionado Pintura');
                    break;
                case 'InstalacionesElectricas':
                    console.log('Has seleccionado Instalaciones Eléctricas');
                    break;
            }
        });

        container.appendChild(selectCalculadora);
    }

    window.calculadora = calculadora;
});

function Revoque(){
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    // Limpiar el contenedor anterior
    container.innerHTML = '';
    
    // Crear elementos para Revoque
    const input = document.createElement('input');
    input.type = 'number';
    
    const selectRevoque = document.createElement('select');
    const options = [
        { value: 'Mcuadrado', text: 'Ingresar los metros cuadrados' },
        { value: 'AlturayLargo', text: 'Ingresar la altura y largo' }
    ];
    
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.text;
        selectRevoque.appendChild(opt);
    });

    selectRevoque.addEventListener('change', function(event) {
        const selectedValue = event.target.value;
        console.log('Opción seleccionada:', selectedValue);
        
        if (selectedValue === 'Mcuadrado') {container.appendChild(input);
            input.placeholder = 'Ingrese los metros cuadrados';
        } else if (selectedValue === 'AlturayLargo') {
            p1.textContent = 'Altura';
            container.appendChild(p1);
            container.appendChild(input);
            p2.textContent = 'Largo';
            container.appendChild(p2);
            container.appendChild(document.createElement('input')); // Agregar otro input para largo
        }
    });
    
    
    container.appendChild(selectRevoque);
}