function confirmDeletion(event, fraseConfirm) {
    let confirmDecision = confirm(fraseConfirm)
    if (confirmDecision) {
        return true
    }
    event.preventDefault()
}
