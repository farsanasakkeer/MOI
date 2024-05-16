var orbitGroup = document.getElementById('orbitGroup');
var circleCount = 8; 
var radius = 400; 

for (var i = 0; i < circleCount; i++) {
    var angle = (i / circleCount) * Math.PI * 2;
    var cx = 512 + radius * Math.cos(angle);
    var cy = 512 + radius * Math.sin(angle);
    
    var a = document.createElementNS("http://www.w3.org/2000/svg", "a"); 
    a.setAttribute('href', '../trafficservice/tra_service.html'); 
    
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', 80); 
    circle.setAttribute('fill', 'white'); 
    circle.setAttribute('filter', 'url(#colorMatrix)');
    circle.setAttribute('id', 'circle_' + i); 
    
    if (i === 1) { 
        circle.setAttribute('id', 'service2Circle'); 
    }

    circle.addEventListener('touchstart', function(event) {
        this.setAttribute('r', 100); 
        var text = this.nextSibling;
        text.setAttribute('font-size', '16px'); 
        text.setAttribute('y', parseFloat(text.getAttribute('y')) - 7); 
        if (this.getAttribute('id') === 'service2Circle') { 
            var additionalText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            additionalText.setAttribute('x', parseFloat(this.getAttribute('cx')));
            additionalText.setAttribute('y', parseFloat(this.getAttribute('cy')) + 20); 
            additionalText.setAttribute('fill', 'black'); 
            additionalText.setAttribute('font-size', '12px'); 
            additionalText.setAttribute('text-anchor', 'middle'); 
            additionalText.textContent = 'Traffic file opening'; 
            orbitGroup.appendChild(additionalText);
        }
    });

    circle.addEventListener('touchend', function(event) {
        this.setAttribute('r', 80); 
        var text = this.nextSibling;
        text.setAttribute('font-size', '12px'); 
        text.setAttribute('y', parseFloat(text.getAttribute('y')) + 7);
        if (this.getAttribute('id') === 'service2Circle') {
            var additionalText = orbitGroup.querySelector('text:last-child');
            if (additionalText) {
                orbitGroup.removeChild(additionalText);
            }
        }
    });

    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute('x', cx);
    text.setAttribute('y', cy + 5); 
    text.setAttribute('fill', 'black'); 
    text.setAttribute('font-size', '12px');
    text.setAttribute('text-anchor', 'middle'); 

   
    
    a.appendChild(circle); 
    a.appendChild(text); 
    orbitGroup.appendChild(a); 
}