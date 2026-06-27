        const sidebar = document.querySelector('.sidebar');

        function toggleSidebar() {
            sidebar.classList.toggle('active');
        }

        function closeSidebar() {
            sidebar.classList.remove('active');
        }

        // Sign In/Up Head Title Changes
        function updateTitle(action) {
            document.title = `${action} | SMPK Ignatius Slamet Riyadi E-Library`;
        }

        // Sign In/Up Form Toggle or Animation
        
        function signUpBtn() {
            updateTitle('Daftar');
            console.log('Sign Up button clicked');
            document.getElementById('signinForm').classList.add('hidden');
            document.getElementById('signupForm').classList.add('active');
        }

        function signInBtn() {
            updateTitle('Masuk');
            console.log('Sign In button clicked');
            document.getElementById('signupForm').classList.remove('active');
            document.getElementById('signinForm').classList.remove('hidden');
        }

        forms.style.height = signinForm.offsetheight + 'px';
        forms.style.height = signupForm.offsetheight + 'px';