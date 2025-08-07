
        function showPopup(popupId) {
            const overlay = document.querySelector('.overlay');
            const popup = document.getElementById(popupId);
            
            overlay.style.display = 'block';
            popup.style.display = 'block';
            
            // Trigger animation after a brief delay to ensure display is set
            setTimeout(() => {
                overlay.classList.add('show');
                popup.classList.add('show');
            }, 10);
        }
        
        function hidePopup() {
            const overlay = document.querySelector('.overlay');
            const popups = document.querySelectorAll('.popup');
            
            overlay.classList.remove('show');
            popups.forEach(popup => {
                popup.classList.remove('show');
            });
            
            // Hide elements after animation completes
            setTimeout(() => {
                overlay.style.display = 'none';
                popups.forEach(popup => {
                    popup.style.display = 'none';
                });
            }, 300);
        }

        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        function changeColor() {
            const images = [
                'images/background.jpg',
                'images/background3.jpg', 
                'images/background4.jpg',
                'images/background5.jpg',
                'images/background6.jpg',
                'images/background7.jpg',
                'images/background8.jpg',
                'images/background9.jpg',
                'images/background10.jpg',
                'images/background11.jpg',
                'images/background12.jpg',
            ];
            
            const randomImage = images[Math.floor(Math.random() * images.length)];
            document.getElementById('container-one').style.backgroundImage = `url('${randomImage}')`;
        }

        document.getElementById('myForm').addEventListener('submit', function(event) {
        const emailInput = document.getElementById('exampleFormControlInput1');
        const messageInput = document.getElementById('exampleFormControlTextarea1');
        let isValid = true;
        
        // Validate email
        if (!emailInput.value) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else {
            emailInput.classList.remove('is-invalid');
        }
        
        // Validate message
        if (!messageInput.value) {
            messageInput.classList.add('is-invalid');
            isValid = false;
        } else {
            messageInput.classList.remove('is-invalid');
        }
        
        if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
        }
        });

        // Add event listeners to clear validation when user starts typing
        document.getElementById('exampleFormControlInput1').addEventListener('input', function() {
            this.classList.remove('is-invalid');
        });

        document.getElementById('exampleFormControlTextarea1').addEventListener('input', function() {
            this.classList.remove('is-invalid');
        });