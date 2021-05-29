class MyModal {
    constructor(modalObj) {
        this.modalTitle = modalObj.title;
        this.modalMessage = modalObj.message;
        this.modalWrapper = document.createElement('div');
        this.text = document.createTextNode(this.modalTitle);
    }

    create() {
        document.body.append(this.modalWrapper);
        this.modalWrapper.appendChild(this.text);
        this.modalWrapper.classList.add('modal-wrapper');
    }

    showModal() {
        this.modalWrapper.classList.add('show');
    }

    hideModal() {
        this.modalWrapper.classList.remove('show');
    }

}


export default MyModal;
