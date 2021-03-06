class ScriptCache {

    static SCRIPT_STATUS = {
        COMPLETE: "complete",
        ERROR: "error"
    }

    constructor(scripts) {
        this.loaded = [];
        this.failed = [];
        this.pending = [];
        this.load(scripts);
    }

    onLoad(success, reject) {
        if (reject) reject(this.failed);
        if (success) success(this.loaded);
        // You can use this block to run any additional setup required after
        // the scripts have loaded
    }

    /**
     * This will loop through and load any scripts passed into the class constructor */
    load(scripts = []) {
        if (!scripts.length) return;
        const scriptPromises = [];
        for (let script of scripts) {
            scriptPromises.push(this.loadScript(script))
        }

        return Promise.all(scriptPromises);
    }

    /**
     * This loads a single script from its source. The 'loading' action is wrapped
     * in a promise, which should fail if the script cannot be fetched */
    loadScript(script) {
        if (this.loaded.indexOf(script) > -1) return Promise.resolve(script);
        this.pending.push(script);
        return this.createScriptTag(script)
            .then((script) => {
                this.loaded.push(script);
                this.pending.splice(this.pending.indexOf(script), 1);
                return script;
            })
            .catch((e) => {
                this.failed.push(script);
                this.pending.splice(this.pending.indexOf(script), 1);
            })
    }

    /**
     * This creates a <script> tag and appends it to the document body */
    createScriptTag = (scriptSrc, onComplete) => new Promise((resolve, reject) => {
        let resolved = false,
            errored = false,
            body = document.body,
            tag = document.createElement("script");

        const handleLoad = (event) => { resolved = true; resolve(scriptSrc); };
        const handleReject = (event) => { errored = true; reject(scriptSrc); };
        const handleComplete = () => {
            if (resolved) return handleLoad();
            if (errored) return handleReject();

            const status = ScriptCache.SCRIPT_STATUS;
            const state = tag.readyState;
            if (state === status.COMPLETE) handleLoad();
            else if (state === status.ERROR) handleReject();
        }

        tag.type = "text/javascript";
        tag.async = false;
        // Replace 'onComplete' callback reference in some script tag urls (e.g. Google Maps V3)
        if (scriptSrc.match(/callback=CALLBACK_NAME/)) {
            const onCompleteName = "onScriptSrcLoaded";
            scriptSrc = scriptSrc.replace(/(callback=)[^&]+/, `$1${onCompleteName}`)
            window[onCompleteName] = handleLoad;

        } else tag.addEventListener("load", handleLoad);

        tag.addEventListener("error", handleReject);
        tag.onreadystatechange = handleComplete;
        tag.src = scriptSrc;
        body.appendChild(tag);

        return tag;
    })
}

export default ScriptCache;