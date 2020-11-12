import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() displayEvent = new EventEmitter<any>();

  showDeleteModal() {
    this.displayEvent.emit({ show: false, type: 'delete', id: null, execute: false})
  }

  confirmDelete() {
    this.displayEvent.emit({ show: false, type: 'delete', execute: true })
  }

}
