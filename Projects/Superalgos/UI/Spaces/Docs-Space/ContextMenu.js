function newSuperalgosDocsContextMenu() {
    let thisObject = {
        selectedParagraph: undefined, 
        getSelection: getSelection,
        forceOutClick: forceOutClick, 
        initialize: initialize,
        finalize: finalize
    }

    let selectedParagraphData = ''
    let selectedParagraphIndex = ''
    let selectedParagraphHeight = 0

    return thisObject

    function initialize() {
        setUpContextMenu()
    }

    function finalize() {

    }

    function setUpContextMenu() {
        window.contextMenu = {
            editParagraph: editParagraph,
            deleteParagraph: deleteParagraph,
            toJavascript: toJavascript,
            toJson: toJson,
            toText: toText,
            toTitle: toTitle,
            toSubtitle: toSubtitle,
            toNote: toNote,
            toWarning: toWarning,
            toError: toError,
            toImportant: toImportant,
            toSuccess: toSuccess,
            toCallout: toCallout,
            toSummary: toSummary,
            toList: toList,
            toTable: toTable,
            toHierarchy: toHierarchy,
            toGif: toGif,
            toPng: toPng,
            toAnchor: toAnchor,
            toBlock: toBlock,
            toInclude: toInclude,
            toSection: toSection,
            copyLink: copyLink,
            toWebPageLink: toWebPageLink,
            toYouTubeVideo: toYouTubeVideo
        }

        function editParagraph() {
            forceOutClick()
            showHTMLTextArea()

            function showHTMLTextArea() {
                if (UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph === undefined) { return }

                /* 
                When in editing mode, some type of paragraphs need to extend
                the text area style so that while editing, it looks and feel
                like the non editing style of the paragraph. For those we
                add an extra style class.
                */
                let extraClassName = ''
                if (UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id.indexOf('definition') >= 0) {
                    extraClassName = ' ' + ''
                }
                if (UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id.indexOf('title') >= 0) {
                    extraClassName = ' ' + 'docs-h3'
                }
                if (UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id.indexOf('subtitle') >= 0) {
                    extraClassName = ' ' + 'docs-h4'
                }
                if (UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id.indexOf('note') >= 0) {
                    extraClassName = ' ' + 'docs-alert-note'
                }
                if (UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id.indexOf('success') >= 0) {
                    extraClassName = ' ' + 'docs-alert-success'
                }
                if (UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id.indexOf('important') >= 0) {
                    extraClassName = ' ' + 'docs-alert-important'
                }
                if (UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id.indexOf('warning') >= 0) {
                    extraClassName = ' ' + 'docs-alert-warning'
                }
                if (UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id.indexOf('error') >= 0) {
                    extraClassName = ' ' + 'docs-alert-error'
                }
                if (UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id.indexOf('javascript') >= 0) {
                    extraClassName = ' ' + 'language-javascript'
                }
                if (UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id.indexOf('json') >= 0) {
                    extraClassName = ' ' + 'language-json'
                }

                UI.projects.superalgos.spaces.docsSpace.textArea = document.createElement('textarea');
                UI.projects.superalgos.spaces.docsSpace.textArea.id = "UI.projects.superalgos.spaces.docsSpace.textArea";
                UI.projects.superalgos.spaces.docsSpace.textArea.spellcheck = false;
                UI.projects.superalgos.spaces.docsSpace.textArea.className = "docs-text-area" + extraClassName
                UI.projects.superalgos.spaces.docsSpace.textArea.style.height = selectedParagraphHeight
                UI.projects.superalgos.spaces.docsSpace.textArea.value = selectedParagraphData
                UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.innerHTML = ""
                UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.appendChild(UI.projects.superalgos.spaces.docsSpace.textArea)
                UI.projects.superalgos.spaces.docsSpace.textArea.style.display = 'block'
                UI.projects.superalgos.spaces.docsSpace.textArea.focus()
                forceOutClick()
                UI.projects.superalgos.spaces.docsSpace.enterEditMode()
            }
        }

        function deleteParagraph() {
            if (selectedParagraphIndex === undefined) { return }
            if (selectedParagraphIndex === 0) { return }
            UI.projects.superalgos.spaces.docsSpace.documentPage.docsSchemaDocument.paragraphs.splice(selectedParagraphIndex, 1)
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toJavascript() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Javascript'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toJson() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Json'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toText() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Text'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toTitle() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Title'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toSubtitle() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Subtitle'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toNote() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Note'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toWarning() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Warning'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toError() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Error'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toImportant() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Important'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toSuccess() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Success'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toCallout() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Callout'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toSummary() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Summary'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toSection() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Section'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toList() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'List'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toTable() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Table'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toHierarchy() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Hierarchy'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toGif() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Gif'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toPng() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Png'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toAnchor() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Anchor'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toBlock() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Block'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toInclude() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Include'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toWebPageLink() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Link'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function toYouTubeVideo() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            docSchemaParagraph.style = 'Youtube'
            forceOutClick()
            UI.projects.superalgos.spaces.docsSpace.documentPage.render()
        }

        function copyLink() {
            let docSchemaParagraph = UI.projects.superalgos.spaces.docsSpace.paragraphMap.get(UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph.id)
            let clipboard
            switch (docSchemaParagraph.style) {
                case 'Anchor': {
                    clipboard = "docs.goto " + UI.projects.superalgos.spaces.docsSpace.currentDocumentBeingRendered.project + '->' + UI.projects.superalgos.spaces.docsSpace.currentDocumentBeingRendered.category + '->' + UI.projects.superalgos.spaces.docsSpace.currentDocumentBeingRendered.type + '->' + docSchemaParagraph.text
                    break
                }
                case 'Block': {
                    clipboard = UI.projects.superalgos.spaces.docsSpace.currentDocumentBeingRendered.project + '->' + UI.projects.superalgos.spaces.docsSpace.currentDocumentBeingRendered.category + '->' + UI.projects.superalgos.spaces.docsSpace.currentDocumentBeingRendered.type + '->' + docSchemaParagraph.text
                    break
                }
                default: {
                    clipboard = docSchemaParagraph.text
                    break
                }
            }

            UI.projects.superalgos.utilities.clipboard.copyTextToClipboard(clipboard)
            forceOutClick()
        }
    }

    function forceOutClick() {
        const outClick = document.getElementById('docs-space-div')
        const menu = document.getElementById('menu')
        menu.classList.remove('show')
        outClick.style.display = "none"
    }

    function getSelection() {
        let selection = window.getSelection()

        /* 
        We need to locate the parent node that it is a Paragraph,
        otherwise we could end up in an inner html element.
        */
        let paragraphNode = selection.baseNode

        if (paragraphNode.id !== undefined && paragraphNode.parentNode.className === "docs-tooltip") {
            return false
        }


        for (let i = 1; i < 10; i++) {
            if (paragraphNode === undefined || paragraphNode === null) { return false }
            if (paragraphNode.id === undefined || paragraphNode.id.indexOf('editable-paragraph') < 0) {
                paragraphNode = paragraphNode.parentNode
                if (paragraphNode === undefined) { return false }
            }
        }
        if (paragraphNode === undefined || paragraphNode === null || paragraphNode.id === undefined || paragraphNode.id.indexOf('editable-paragraph') < 0) {
            return false
        }
        /*
        Get the dimenssions of the current paragraph to help us to define the dimenssions of the text area.
        */
        UI.projects.superalgos.spaces.docsSpace.contextMenu.selectedParagraph = paragraphNode
        selectedParagraphHeight = paragraphNode.getClientRects()[0].height
        if (selectedParagraphHeight < 30) { selectedParagraphHeight = 30 }
        /*
        We need to clean the Tool Tips text that might be at the paragraph selected.
        To not destroy the DOM structure we will use a clone.
        */
        paragraphNode = paragraphNode.cloneNode(true)
        scanNodeChildren(paragraphNode)
        function scanNodeChildren(node) {
            if (node.childNodes === undefined) { return }
            for (let i = 0; i < node.childNodes.length; i++) {
                let childNode = node.childNodes[i]
                if (childNode.className === "docs-tooltip") {
                    childNode.innerText = childNode.childNodes[0].data
                } else {
                    scanNodeChildren(childNode)
                }
            }
        }

        /* Reset this */
        selectedParagraphIndex = undefined
        /*
        Depending on the Style of Paragraph we will need to remove
        some info from the innerText. 
        */
        if (paragraphNode.id.indexOf('definition-') >= 0) {
            if (paragraphNode.id.indexOf('-summary') >= 0) {
                selectedParagraphData = paragraphNode.innerText.trim().substring(9, paragraphNode.innerText.length)
            } else {
                selectedParagraphData = paragraphNode.innerText.trim()
            }
            return true
        }
        /*
        Remeber the Selected Paragraph Index
        */
        let splittedId = paragraphNode.id.split('-')
        selectedParagraphIndex = splittedId[splittedId.length - 2]
        /*
        Check the style of the Paragraph
        */
        if (paragraphNode.id.indexOf('-text') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim()
            return true
        }
        if (paragraphNode.id.indexOf('-title') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim()
            return true
        }
        if (paragraphNode.id.indexOf('-subtitle') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim()
            return true
        }
        if (paragraphNode.id.indexOf('-note') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim().substring(6, paragraphNode.innerText.length)
            return true
        }
        if (paragraphNode.id.indexOf('-success') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim().substring(5, paragraphNode.innerText.length)
            return true
        }
        if (paragraphNode.id.indexOf('-important') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim().substring(11, paragraphNode.innerText.length)
            return true
        }
        if (paragraphNode.id.indexOf('-warning') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim().substring(10, paragraphNode.innerText.length)
            return true
        }
        if (paragraphNode.id.indexOf('-error') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim().substring(8, paragraphNode.innerText.length)
            return true
        }
        if (paragraphNode.id.indexOf('-list') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim()
            return true
        }
        if (paragraphNode.id.indexOf('-table') >= 0) {
            selectedParagraphData = UI.projects.superalgos.utilities.docs.reverseParseTable(paragraphNode.innerHTML)
            return true
        }
        if (paragraphNode.id.indexOf('-hierarchy') >= 0) {
            selectedParagraphData = UI.projects.superalgos.utilities.docs.reverseParseHierarchy(paragraphNode.innerHTML)
            return true
        }
        if (paragraphNode.id.indexOf('-gif') >= 0) {
            selectedParagraphData = UI.projects.superalgos.utilities.docs.reverseParseGIF(paragraphNode.innerHTML)
            return true
        }
        if (paragraphNode.id.indexOf('-png') >= 0) {
            selectedParagraphData = UI.projects.superalgos.utilities.docs.reverseParsePNG(paragraphNode.innerHTML)
            return true
        }
        if (paragraphNode.id.indexOf('-javascript') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim().substring(0, paragraphNode.innerText.length)
            return true
        }
        if (paragraphNode.id.indexOf('-json') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim().substring(0, paragraphNode.innerText.length)
            return true
        }
        if (paragraphNode.id.indexOf('-callout') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim()
            return true
        }
        if (paragraphNode.id.indexOf('-summary') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim().substring(9, paragraphNode.innerText.length)
            return true
        }
        if (paragraphNode.id.indexOf('-anchor') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim()
            return true
        }
        if (paragraphNode.id.indexOf('-section') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim()
            return true
        }
        if (paragraphNode.id.indexOf('-block') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim()
            return true
        }
        if (paragraphNode.id.indexOf('-include') >= 0) {
            selectedParagraphData = paragraphNode.innerText.trim()
            return true
        }
        if (paragraphNode.id.indexOf('-link') >= 0) {
            selectedParagraphData = UI.projects.superalgos.utilities.docs.reverseParseLink(paragraphNode.innerHTML)
            return true
        }
        if (paragraphNode.id.indexOf('-youtube') >= 0) {
            selectedParagraphData = UI.projects.superalgos.utilities.docs.reverseParseYoutube(paragraphNode.innerHTML)
            return true
        }
    }
}