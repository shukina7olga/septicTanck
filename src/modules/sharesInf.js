const sharesInf = () => {
    const addBtn = document.getElementById('addBtn'),
        addBlock = document.querySelectorAll('.addBlock');

    addBtn.addEventListener('click', () => {
        addBtn.style.display = 'none';

        addBlock.forEach(elem => {
            elem.classList.remove('hidden');
            elem.classList.remove('visible-sm-block');
        });
        
    });
}; 

export default sharesInf;