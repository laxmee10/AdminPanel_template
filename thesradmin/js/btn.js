
        document.querySelector('.bttn').addEventListener('click', function(e) {
            [].map.call(document.querySelectorAll('.slide-nav'), function(el) {
            // classList supports 'contains', 'add', 'remove', and 'toggle'
                el.classList.toggle('toggled');
            });
        });