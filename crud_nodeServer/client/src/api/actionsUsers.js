import httpClient from "./http_client";
import apiUsers from "./apiUsers";

export default function actionsUsers() {
    async function doAdd(userData) {
        //console.log('userData', userData)
        try {
            await httpClient.post(apiUsers.POST, userData);
            //window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    async function doDelete(id) {
        //console.log('id doDelete', id)
        try {
            await httpClient.delete(apiUsers.DELETE, {data: {id}});
            window.document.location.reload(true);
        } catch (err) {
            console.log(err);
        };
    };

    async function doEdit(newData) {
        //console.log('newData', newData)
        try {
            await httpClient.put(apiUsers.PUT, newData);
            window.location.reload();
        }catch (err) {
            console.log(err);
        };
    }

    return { doAdd, doDelete, doEdit };
};