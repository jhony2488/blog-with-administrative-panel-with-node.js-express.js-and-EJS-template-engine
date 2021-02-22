function tinymceFunction(content) {
    if (content == null || content == undefined || content == NaN) {
        tinymce.init({
            language: 'pt_BR',
            selector: 'textarea#body',
            plugins: [
                'advlist autolink link image lists print preview hr searchreplace wordcount fullscreen insertdatetime media save paste emoticons a11ychecker advcode casechange formatpainter linkchecker checklist ediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
            ],
            toolbar:
                'a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
            toolbar_mode: 'floating',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Jhonata Vinicius',
        })
    } else {
        tinymce.init({
            language: 'pt_BR',
            selector: 'textarea#body',
            plugins: [
                'advlist autolink link image lists print preview hr searchreplace wordcount fullscreen insertdatetime media save paste emoticons a11ychecker advcode casechange formatpainter linkchecker checklist ediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
            ],
            toolbar:
                'a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
            toolbar_mode: 'floating',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Jhonata Vinicius',
            init_instance_callback: () => {
                tinymce.get('body').setContent(content)
            },
        })
    }
}
