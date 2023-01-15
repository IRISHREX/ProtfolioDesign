console.log("Script running......")

// toggle the sidebar on hamburger click
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.hum').style.display='inline'
        document.querySelector('.cross').style.display='none' 
    }
    else{
        document.querySelector('.hum').style.display='none'
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline'
        },400);
    }
})

// add a filter feature for portfolio
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioFilter = document.querySelector('.portfolio-filter');
portfolioFilter.addEventListener('change', (e) => {
    const filterValue = e.target.value;
    portfolioItems.forEach((item) => {
        if(filterValue === 'all') {
            item.style.display = 'block';
        } else {
            if(item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
});
