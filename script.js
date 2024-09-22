function handleClick() {
    alert("Masih dalam tahap pengembangan!");
}

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
};

scrollTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function scrollToSubscription() {
    const subscriptionPlan = document.querySelector('.subs');
    if (subscriptionPlan) {
        subscriptionPlan.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function scrollToFitur() {
    const subscriptionPlan = document.querySelector('.fitur1');
    if (subscriptionPlan) {
        subscriptionPlan.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function scrollToContact() {
    const subscriptionPlan = document.querySelector('.ftr');
    if (subscriptionPlan) {
        subscriptionPlan.scrollIntoView({
            behavior: 'smooth'
        });
    }
}