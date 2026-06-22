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
        