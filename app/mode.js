const darkModeInput = document.querySelector('#dark-mode')
const body = document.querySelector('body')

darkModeInput.addEventListener('click', () => {
    const mode = darkModeInput.checked ? 'dark' : 'light'
    body.setAttribute("data-bs-theme", mode)
})