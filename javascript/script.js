const passwordIcons = Document.queryselectorall('password-icon');

passwordIcons.forEach(icon => {
    icon.addEventlistener('click', function () {
        const input = this.parentElement.queryselector('.form-control');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classlist.toggle('fa-eye');
    })
})