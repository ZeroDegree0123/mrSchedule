import sendRequest from './send-request';
const BASE_URL = '/api/events';

export function allEvents() {
    return sendRequest(BASE_URL);
}

export function newEvent(events) {
    return sendRequest(`${BASE_URL}/new`, "POST", events)
}