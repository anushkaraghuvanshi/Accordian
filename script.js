const containers = document.querySelectorAll('.cont')


containers.forEach(cont =>{
    const content = cont.querySelector('p')
    const heading = cont.querySelector('h4')

    heading.addEventListener('click',function(){
    content.classList.toggle('hidden')
})
})

