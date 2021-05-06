window.addEventListener('load', () => {
    
    const name = sessionStorage.getItem('NAME');
    document.getElementById('name').innerHTML = name;

})