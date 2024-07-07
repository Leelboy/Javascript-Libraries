// Initialize Glide.js slider
new Glide('.glide').mount();

// Initialize AOS (Animate On Scroll)
AOS.init();

// Initialize Algolia Places for address auto-completion
const placesAutocomplete = places({
    appId: 'YELHJFMY4GF',
    apiKey: '3142fb2ef8249b3fe437ebd9310a7382',
    container: document.querySelector('#address-input')
});
