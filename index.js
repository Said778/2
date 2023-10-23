let image = document.getElementById('image-5');
let openButton = document.getElementById('text1111');


image.addEventListener('click', function() {
    openButton.click(); 
});










function intersectionCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'block1-images') {
            entry.target.class
            setTimeout(() => {
                const element1111 = document.getElementById('block1-text')

                element1111.classList.remove('block1-text_one'); 

                element1111.classList.add('block2-text_two'); 

                observer.unobserve(entry.target);
            }, 200);
            } else if(entry.target.id === 'block5') {
                setTimeout(() => {
                    const element2222 = document.getElementById('image-5')

                    element2222.classList.remove('image-5_one')
                    
                    element2222.classList.add('image-5_two')
                }, 200)
                
            }

        }

    });
}

  
const observer = new IntersectionObserver(intersectionCallback);



const element1 = document.getElementById('block1-images');
const element2 = document.getElementById('block5');


if (element1) {
  observer.observe(element1);
}

if (element2) {
  observer.observe(element2);
}
