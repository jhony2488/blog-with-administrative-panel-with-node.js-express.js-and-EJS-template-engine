function confirmDeletion(event) {
    let confirmDecision = confirm('Voce quer deletar essa categoria ?')
    if (confirmDecision) {
        return true
    }
    event.preventDefault()
}
