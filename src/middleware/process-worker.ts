
const processWorker = () => {
    const worker: Worker = self as any;

    let i = 0;
    
    function timedCount() {
        i = i + 1;
        worker.postMessage(i);
        setTimeout("timedCount()", 500);
    }
    
    timedCount();
}

export default processWorker;


