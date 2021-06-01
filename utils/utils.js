


function showToasts(addToast, successMessage, result, t){
    console.log(addToast, successMessage, result, t, 'ak')
    if (!result) {
        addToast(<div>{t("INTERNAL_ERROR")}</div>, { appearance: "error" });
        return;
    }
    if (result.error) {
      addToast(<div>{t(result.error.message)}</div>, { appearance: "error" });
      return;
    }
    if(successMessage && result.status == 200 || result.status == 201 || result.status == 204){
        addToast(<div>{t(successMessage)}</div>, { appearance: "success" });
    }
}

function processReturn(response, toasts = {}, t = s => s){
    if(toasts.addToast){
      showToasts(toasts.addToast, toasts.successMessage, response, t)
    }
    console.log(response)
    return response
}

module.exports = {
    processReturn,
}