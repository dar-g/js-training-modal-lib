class MyModal {
    constructor(modalObj) {
        this.modalTitle = modalObj.title;
        this.modalMessage = modalObj.message;
        this.modalContent = modalObj.content;
        this.onConfirm = modalObj.onConfirm;
        this.onCancel = modalObj.onCancel || this.hideModal;

        if (!this.modalTitle) {
            throw new Error('Modal title parameter is required');
        }

        if (!this.modalMessage && !this.modalContent) {
            throw new Error('Modal message or content has to be defined');
        }

        if (!this.onConfirm) {
            throw new Error('On Confirm parameter is required');
        }

        this.renderModal();

        document.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
                this.hideModal();
            }
        });
    }

    renderModal() {
        this.myModal = document.createElement('div');
        this.myModal.classList.add('my-modal');

        const modalTemplate = `
            <div class="modal">
                <div class="title-wrapper">${this.modalTitle}</div>
                <div class="content-wrapper"></div>
                <div class="btn-wrapper">
                    <button class="ok-btn">Ok</button>
                    <button class="cancel-btn">Cancel</button>
                    <button class="close-btn">x</button>
                </div>
            </div>
        `;

        this.myModal.insertAdjacentHTML('afterbegin', modalTemplate);

        document.body.append(this.myModal);

        this._insertModalContent();
        this._attachOnConfirmListener();
        this._attachOnCancelListener();
        this._attachOnCloseListener();
    }

    showModal() {
        this.myModal.classList.add('show');
    }

    hideModal() {
        this.myModal.classList.remove('show');
    }

    // TODO: implement methods below:
    // _attachOnConfirmListener()
    // _attachOnCancelListener()
    // implement click outside
    // add X btn

    _attachOnConfirmListener() {
        const okBtn = document.body.getElementsByClassName('ok-btn')[0];

        okBtn.addEventListener('click', (event) => {
            this.onConfirm(event);
            this.hideModal();
        });
    }

    _attachOnCloseListener() {
        this.myModal.addEventListener('click', (e) => {
            if (e.target.matches('.close-btn') || !e.target.closest('.modal')) {
                this.hideModal();
            }
        });
    }

    _attachOnCancelListener() {
        const cancelBtn = document.body.getElementsByClassName('cancel-btn')[0];

        cancelBtn.addEventListener('click', (event) => {
            this.onCancel(event);
            this.hideModal();
        });
    }

    _insertModalContent() {
        const modalContent = this.modalContent || this.modalMessage;
        const contentWrapper = this.myModal.getElementsByClassName('content-wrapper')[0];

        if (typeof modalContent === 'string') {
            contentWrapper.insertAdjacentHTML('afterbegin', modalContent);
        } else {
            contentWrapper.appendChild(modalContent);
        }
    }
}

export default MyModal;
