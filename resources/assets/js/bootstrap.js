let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}