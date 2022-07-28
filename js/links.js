const items = document.querySelectorAll('.items')


items.forEach(item => {
    item.addEventListener('click', () => {
        if (item.dataset.id == 'voting') {
            open('/pages/voting.html', '_self')
        }
        else if (item.dataset.id == 'store') {
            open('https://buycraft.com', '_self')            
        }
        else if (item.dataset.id == 'discord') {
            open('https://discord.gg/9jwzgYmxCE', '_blank')
        }
    })
})