// Um Service Worker vazio é suficiente para o Android liberar a instalação
self.addEventListener('fetch', function(event) {
    // Apenas intercepta, não faz cache
});
