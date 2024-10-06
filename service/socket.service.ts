import {SOCKET_URL, SocketEvent} from "../coolris-common";

declare var $: any;
declare const io: any;
declare const window: Window | any;

interface SocketServiceParam {
    coolIdx?: number;
}

export class SocketService {

    socket: any;

    constructor(
        private param: SocketServiceParam) {
    }

    connection(): void {
        if (!io) {
            console.warn('socket.io is not defined');
            return;
        }
        this.socket = io(SOCKET_URL, {
            path: '/alimi',
            reconnection: true,
            autoConnect: true,
            query: {coolIdx: this.param.coolIdx}
        });
        this.socket.on('connect', () => {});
        this.socket.on(SocketEvent.UPDATE_MY_INFO, () => {
            location.reload();
        });
        this.socket.on(SocketEvent.LOGOUT, () => {
            // window.logout();
            $("[data-name='spanLogout']").trigger("click");
        });
    }

    emit(eventName, obj): any {
        this.socket.emit(eventName, obj);
    }

    emitLogout(){
        this.emit(SocketEvent.EVENT_BROADCAST, {eventName: SocketEvent.LOGOUT});
    }
}
