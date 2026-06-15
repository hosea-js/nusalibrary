        const sidebar = document.querySelector('.sidebar');

        function toggleSidebar() {
            sidebar.classList.toggle('active');
        }

        function closeSidebar() {
            sidebar.classList.remove('active');
        }

        // Sign In/Up Head Title Changes
        function showSignIn() {
            document.title = "Sign In | SMPK Ignatius Slamet Riyadi E-Library";
        }

        function showSignUp() {
            document.title = "Sign Up | SMPK Ignatius Slamet Riyadi E-Library";
        }