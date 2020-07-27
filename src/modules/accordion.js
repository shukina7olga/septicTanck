const accordion = () => {
    const headingOne = document.getElementById('headingOne-two'),
        headingTwo = document.getElementById('headingTwo-two'),
        headingThree = document.getElementById('headingThree-two'),
        collapseOne = document.getElementById('collapseOne-two'),
        collapseTwo = document.getElementById('collapseTwo-two'),
        collapseThree = document.getElementById('collapseThree-two');

    headingOne.addEventListener('click', event => {
        event.preventDefault();
        collapseOne.style.display = 'block';
        collapseTwo.style.display = 'none';
        collapseThree.style.display = 'none';            
    });

    headingTwo.addEventListener('click', event => {
        event.preventDefault();
        collapseTwo.style.display = 'block';
        collapseOne.style.display = 'none';
        collapseThree.style.display = 'none';             
    });

    headingThree.addEventListener('click', event => {
        event.preventDefault();
        collapseThree.style.display = 'block';
        collapseOne.style.display = 'none';
        collapseTwo.style.display = 'none';        
    });
};

export default accordion;