//DEPENDENCIES
import React, { Component } from 'react';
import { Toast } from 'primereact/toast';

//COMPONENTS

//REFERENCES

//ACTIONS

export class ToastComman extends Component {
    constructor(props) {
        super(props);
        this.showToast = this.showToast.bind(this);
    }
    showToast(severity, summary, detail) {
        this.toast.show({ severity: severity, summary: summary, detail: detail, life: 5000 });
    }
    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el} />
            </div>
        );
    }
}