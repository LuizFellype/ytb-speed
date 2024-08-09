function setFeedback(msg = '') {
    document.getElementById("feedback").innerHTML = msg
}

function handleCopyFeature() {
    const featureIdToCopy = document.getElementById("featureId").value
    const featureKeysToCreate = document.getElementById("newFeatureNames").value

    const newFeatureKeysList = featureKeysToCreate.split(',').map(f=>f.trim())

    if (!featureIdToCopy) {
        return setFeedback('Need to fill the Feature ID from the Feature you want to copy.')
    }

    if (!featureKeysToCreate) {
        return setFeedback('Need to fill at least 1 Feature Key to be create.')
    }

    setFeedback(`Coping configs from Feature ID: "${featureIdToCopy}" To create these features: ${JSON.stringify(newFeatureKeysList)}. This might take some time, pls wait.`);
}


function listenToEvents() {
    let findAnchor = setInterval(() => {
        const copyFeateureBtn = document.getElementById('btn-copy-feature')

        if (copyFeateureBtn) {
            try {
                clearInterval(findAnchor)
                copyFeateureBtn.addEventListener('click', handleCopyFeature)
            } catch (error) {
                console.log('YTB >>> error', { error })
            }
        }
    }, 1000);

}

listenToEvents()




