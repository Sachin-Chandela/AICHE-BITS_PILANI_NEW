burger = document.querySelector('.burger');
nav = document.querySelector('.nav');
navright = document.querySelector('.nav-right');
navleft = document.querySelector('.nav-left'); 

burger.addEventListener('click', () => {
    navright.classList.toggle('v-class');
    nav.classList.toggle('h-nav');
    navleft.classList.toggle('nav-left-active'); 
});


// const signInBtnLink = document.querySelector('.signInBtn-link');
// const signUpBtnLink = document.querySelector('.signUpBtn-link');
// const wrapper = document.querySelector('.wrapper');

// signUpBtnLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     wrapper.classList.add('active');
// });

// signInBtnLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     wrapper.classList.remove('active');
// });


// function toggleForms() {
//             const loginForm = document.getElementById('loginForm');
//             const signupForm = document.getElementById('signupForm');

//             // Check which form is currently active and switch
//             if (loginForm.classList.contains('active')) {
//                 // Show sign up form, hide login form
//                 loginForm.classList.remove('active');
//                 signupForm.classList.add('active');
//             } else {
//                 // Show login form, hide sign up form
//                 signupForm.classList.remove('active');
//                 loginForm.classList.add('active');
//             }
//         }


    



// function showModal() {
//     const mainContent = document.getElementById('mainContent'); // Replace 'mainContent' with your main content div ID
//     const modalOverlay = document.getElementById('modalOverlay');
    
//     // Hide main content
//     if (mainContent) {
//         mainContent.classList.add('hidden');
//     } else {
//         // If you don't have a specific main content div, hide the body content
//         document.body.style.opacity = '0.3';
//         document.body.style.pointerEvents = 'none';
//     }
    
//     // Show modal
//     modalOverlay.classList.add('active');
    
//     // Prevent scrolling on body
//     document.body.style.overflow = 'hidden';
// }

// function hideModal() {
//     const mainContent = document.getElementById('mainContent'); // Replace 'mainContent' with your main content div ID
//     const modalOverlay = document.getElementById('modalOverlay');
    
//     // Show main content
//     if (mainContent) {
//         mainContent.classList.remove('hidden');
//     } else {
//         // Restore body content
//         document.body.style.opacity = '1';
//         document.body.style.pointerEvents = 'auto';
//     }
    
//     // Hide modal
//     modalOverlay.classList.remove('active');
    
//     // Restore scrolling on body
//     document.body.style.overflow = 'auto';
// }

// function toggleForms() {
//     const loginForm = document.getElementById('loginForm');
//     const signupForm = document.getElementById('signupForm');

//     // Check which form is currently active and switch
//     if (loginForm.classList.contains('active')) {
//         // Show sign up form, hide login form
//         loginForm.classList.remove('active');
//         signupForm.classList.add('active');
//     } else {
//         // Show login form, hide sign up form
//         signupForm.classList.remove('active');
//         loginForm.classList.add('active');
//     }
// }

// // Close modal when clicking outside the form
// document.addEventListener('DOMContentLoaded', function() {
//     const modalOverlay = document.getElementById('modalOverlay');
//     if (modalOverlay) {
//         modalOverlay.addEventListener('click', function(e) {
//             if (e.target === this) {
//                 hideModal();
//             }
//         });
//     }
// });

// // Close modal with Escape key
// document.addEventListener('keydown', function(e) {
//     if (e.key === 'Escape') {
//         const modalOverlay = document.getElementById('modalOverlay');
//         if (modalOverlay && modalOverlay.classList.contains('active')) {
//             hideModal();
//         }
//     }
// });




// Open modal function (matches your onclick="showModal()")
        function showModal() {
            console.log('Opening modal...');
            const modalOverlay = document.getElementById('modalOverlay');
            const mainContent = document.getElementById('mainContent');
            
            if (modalOverlay) {
                modalOverlay.classList.add('active');
            }
            if (mainContent) {
                mainContent.classList.add('hidden');
            }
            document.body.style.overflow = 'hidden';
        }

        // Hide modal function (matches your onclick="hideModal()")
        function hideModal() {
            console.log('Hiding modal...');
            const modalOverlay = document.getElementById('modalOverlay');
            const mainContent = document.getElementById('mainContent');
            
            if (modalOverlay) {
                modalOverlay.classList.remove('active');
            }
            if (mainContent) {
                mainContent.classList.remove('hidden');
            }
            document.body.style.overflow = 'auto';
        }

        // Toggle forms function (matches your onclick="toggleForms()")
        function toggleForms() {
            console.log('Toggling forms...');
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');
            
            if (loginForm && signupForm) {
                // Check which form is currently active
                if (loginForm.classList.contains('active')) {
                    // Switch to sign up
                    loginForm.classList.remove('active');
                    setTimeout(() => {
                        signupForm.classList.add('active');
                    }, 100);
                } else {
                    // Switch to login
                    signupForm.classList.remove('active');
                    setTimeout(() => {
                        loginForm.classList.add('active');
                    }, 100);
                }
            }
        }

        // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Close modal when clicking outside the form
            const modalOverlay = document.getElementById('modalOverlay');
            if (modalOverlay) {
                modalOverlay.addEventListener('click', function(e) {
                    if (e.target === modalOverlay) {
                        console.log('Clicked outside form');
                        hideModal();
                    }
                });
            }

            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
                    console.log('Escape key pressed');
                    hideModal();
                }
            });

            // Prevent form submission for demo
            document.querySelectorAll('form').forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Form submitted! (This is just a demo)');
                });
            });

            console.log('JavaScript loaded and ready!');
        });





