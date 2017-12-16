const start = () => {
    console.log("Request handler 'start' was called");

    const sleep = (milliSeconds) => {
        const startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }

    sleep(5000)
    return "Hello Start";
}

const upload = () => {
    console.log("Request handler 'upload' was called");
    return "Hello upload";
}

exports.start = start;
exports.upload = upload;