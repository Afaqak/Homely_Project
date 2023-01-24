'use script';
const img = document.querySelectorAll('.img-about');
const featureImg = document.querySelectorAll('.fig-img');
const moveAndBack = document.querySelectorAll('.m');
const featureIcon = document.querySelectorAll('.features-icon');
const btnMove = document.querySelectorAll('.btn-move');
const headerImg = document.querySelectorAll('.header-img');
const blogRead = document.querySelectorAll('.ourblogs-Read');
const scrollMove = document.querySelector('.nav-list');

scrollMove.addEventListener('click', (e) => {
    e.preventDefault();
    const a = e.target.closest('a');
    if (!a) return;
    const id = a.getAttribute('href');
    const element = document.querySelector(id);
    element.scrollIntoView({
        behavior: 'smooth',
    })


})







blogRead.forEach(blog => {
    blog.addEventListener('click', (e) => {
        e.preventDefault();
        const markup = `lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.`;
        let contentDiv;
        if (!blog.classList.contains('active')) {
            blog.classList.add('active');
            contentDiv = document.createElement('p');
            contentDiv.innerHTML = markup;
            blog.appendChild(contentDiv);
        }
        else {
            blog.classList.remove('active');
            console.log(contentDiv);
            contentDiv = blog.querySelector('p');
            contentDiv.remove();

        }

    })
})

btnMove.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const headerFig = e.target.parentElement.parentElement;
        const headerFigImg = headerFig.querySelector(`.header-image--${e.target.dataset.move}`);
        headerImg.forEach(img => {
            img.classList.remove('active-header');

        })
        headerFigImg.classList.add('active-header');

    })
})




featureIcon.forEach(icon => {
    icon.addEventListener('mouseenter', (e) => {
        const img = e.target.previousElementSibling;
        img.classList.add('active')
        icon.style.opacity = '0';
    })

    icon.addEventListener('mouseleave', (e) => {
        const img = e.target.previousElementSibling;
        img.classList.remove('active')
        icon.style.opacity = '1';
    })
})






const comeback = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('moveandback');
    moveandBackObs.unobserve(entry.target);
}



const moveandBackObs = new IntersectionObserver(comeback, {
    threshold: 0.15,
    root: null,
})

moveAndBack.forEach(move => {
    moveandBackObs.observe(move)
});

// const controller = new ScrollMagic.Controller();
// const m = document.querySelectorAll('.m');



// // m.forEach(move => {
// //     const scene = new ScrollMagic.Scene({
// //         triggerElement: move,
// //         triggerHook: 0.5,
// //     })
// //         .setClassToggle(".moveandback", "moveandback-show")
// //         .addIndicators({ colorStart: "white", colorTrigger: "white" }).addTo(controller);

// // })
