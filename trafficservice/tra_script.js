const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        window.location.href = '../Trafficfile/Applicant_info.html';
    });

    circle.addEventListener('mouseover', () => {
        circle.querySelector('text').classList.add('expanded');
    });

    circle.addEventListener('mouseout', () => {
        circle.querySelector('text').classList.remove('expanded');
    });
});