class MyModal {
    constructor(modalObj) {
        this.modalTitle = modalObj.title;
        this.modalMessage = modalObj.message;
        // this.onConfirm = modalObj.onConfirm;
    }

    renderModal() {
        this.myModal = document.createElement('div');
        this.myModal.classList.add('my-modal');

        const modalTemplate = `
            <div class="modal">
                <div class="title-wrapper">${this.modalTitle}</div>
                <div class="message-wrapper">${this.modalMessage}</div>
                <div class="btn-wrapper">
                    <button class="ok-btn" onclick="(() => document.body.style.backgroundColor = 'yellow')()">Ok</button>
                    <button class="cancel-btn">x</button>
                </div>
            </div>
        `;

        this.myModal.insertAdjacentHTML('afterbegin', modalTemplate);

        document.body.append(this.myModal);

        const okBtn = document.body.getElementsByClassName('ok-btn')[0];
        // okBtn.addEventListener('click', () => {
        //     this.onConfirm();
        // });

        // const cancelBtn = document.body.getElementsByClassName('cancel-btn')[0];
        // cancelBtn.addEventListener('click', );
    }

    showModal() {
        this.myModal.classList.add('show');
    }

    hideModal() {
        this.myModal.classList.remove('show');
    }
}

export default MyModal;
