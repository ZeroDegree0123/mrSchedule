import sendRequest from './send-request';
const BASE_URL = '/api/events';

export function allEvents() {
    return sendRequest(BASE_URL);
}

export function singleEvent(eventId) {
    return sendRequest(`${BASE_URL}/eventId`, "DELETE");
}

export function newEvent(events) {
    return sendRequest(`${BASE_URL}/new`, "POST", events)
}

export function showEvent(eventId) {
    return sendRequest(`${BASE_URL}/${eventId}`)
}

export function deleteEvent(eventId) {
    return sendRequest(`${BASE_URL}/${eventId}`, "DELETE")
}

export function updateEvent(eventData, eventId) {
    return sendRequest(`${BASE_URL}/${eventId}`, "POST", eventData)
}
