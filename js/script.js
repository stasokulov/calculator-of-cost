let total = 5000,
    time = 1,
    hourRate,
    tabLeft = document.querySelector('.tab-left'),
    tabRight = document.querySelector('.tab-right'),
    blocksBlock = document.getElementById('blocks-block'),
    pagesBlock = document.getElementById('pages-block'),
    counterBlock = document.getElementById('counter-block'),
    counterPages = document.getElementById('counter-pages'),
    counterHours = document.getElementById('counter-hours'),
    counterRate = document.getElementById('counter-rate'),
    changesCheck = document.getElementById('changes-check'),
    cmsCheck = document.getElementById('cms-check'),
    totalValue = document.getElementById('total-value'),
    input = document.getElementsByTagName('input');
    

const   lend = 5000,
        corp = 12000,
        cms = 4000,
        changes = 1000
        blocks = 500,
        pages = 2500,
        hourRate = 0;

window.addEventListener('DOMContentLoaded', function(){

    tabLeft.addEventListener('click', () => {
        //for(let i=0; i<input.length; i++){
        //input[i].value = '';
        //};

        //blocksBlock.value = '';
        //pagesBlock.value = '';

        blocksBlock.style.display = 'flex';
        pagesBlock.style.display = 'none';

        tabLeft.classList.add('active');
        tabRight.classList.remove('active');

       /* if(changesCheck.checked) {
            changesCheck.checked = false;
        };

        if(cmsCheck.checked) {
            cmsCheck.checked = false;
        };
        */

        if(counterBlock.value==0){
            if (hourRate == 0){
                total = lend
            } else {
                total = hourRate;
            };
        } else {
            total = counterBlock.value * blocks;
        };
        
        if (changesCheck.checked){
            total += changes;
            totalValue.value = total;
        };

        if (cmsCheck.checked){
            total += cms;
            totalValue.value = total;
        };
        

        totalValue.value = total;

    });

    tabRight.addEventListener('click', () => {
       // for(let i=0; i<input.length; i++){
       //     input[i].value = '';
       // };

        //blocksBlock.value = '';
        //pagesBlock.value = '';

        blocksBlock.style.display = 'none';
        pagesBlock.style.display = 'flex';

        tabLeft.classList.remove('active');
        tabRight.classList.add('active');

        /*
        if(changesCheck.checked) {
            changesCheck.checked = false;
        };

        if(cmsCheck.checked) {
            cmsCheck.checked = false;
        };
        */

       if(counterPages.value==0){
        if (hourRate == 0){
            total = corp
        } else {
            total = hourRate;
        };
    } else {
        total = counterPages.value * pages;
    };
    
    if (changesCheck.checked){
        total += changes;
        totalValue.value = total;
    };

    if (cmsCheck.checked){
        total += cms;
        totalValue.value = total;
    };
    
    totalValue.value = total;

    });

    counterBlock.addEventListener('input', ()=> {
        counterHours.value = '';
        counterRate.value = '';
        total = counterBlock.value * blocks;
        
        if (changesCheck.checked){
            total += changes;
            totalValue.value = total;
        };
    
        if (cmsCheck.checked){
            total += cms;
            totalValue.value = total;
        }

        totalValue.value = total;
    })

    counterPages.addEventListener('input', ()=> {
        counterHours.value = '';
        counterRate.value = '';
        total = counterPages.value * pages;

        if (changesCheck.checked){
            total += changes;
            totalValue.value = total;
        };
    
        if (cmsCheck.checked){
            total += cms;
            totalValue.value = total;
        }

        totalValue.value = total;
    })

    counterHours.addEventListener('input', () => {
        counterBlock.value = '';
        counterPages.value = '';
        total = 0;
        time = counterHours.value;
        hourRate = time * counterRate.value;
        total = hourRate;

        if (changesCheck.checked){
            total += changes;
            totalValue.value = total;
        };
    
        if (cmsCheck.checked){
            total += cms;
            totalValue.value = total;
        }

        totalValue.value = total;
        
    })

    counterRate.addEventListener('input', () => {
        counterBlock.value = '';
        counterPages.value = '';
        total = 0;
        hourRate = time * counterRate.value;
        total = hourRate;

        if (changesCheck.checked){
            total += changes;
            totalValue.value = total;
        };
    
        if (cmsCheck.checked){
            total += cms;
            totalValue.value = total;
        }

        totalValue.value = total;
        
    })
    
    changesCheck.addEventListener('change', () => {
        if (changesCheck.checked){
            total += changes;
            totalValue.value = total;
        } else {
            total -= changes;
            totalValue.value = total;
        };
    });

    cmsCheck.addEventListener('change', () => {
        if (cmsCheck.checked){
            total += cms;
            totalValue.value = total;
        } else {
            total -= cms;
            totalValue.value = total;
        };
    });

});